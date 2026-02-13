import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  phone: z.string().min(10, "Ingresá un número de teléfono válido."),
  carModel: z.string().min(2, "Por favor indicá el modelo del auto."),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      carModel: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Construct WhatsApp message
    const message = `Hola Check Car! Me interesa una revisión.%0A%0A*Nombre:* ${values.name}%0A*Teléfono:* ${values.phone}%0A*Auto:* ${values.carModel}%0A*Mensaje:* ${values.message || "Sin mensaje adicional"}`;
    
    window.open(`https://wa.me/5493510000000?text=${message}`, '_blank');
    
    toast({
      title: "¡Listo!",
      description: "Te estamos redirigiendo a WhatsApp para coordinar.",
    });
  }

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase">Coordiná tu Revisión Hoy</h3>
            <p className="text-gray-400 text-lg mb-12">
              No arriesgues tu capital. Contactanos ahora y asegurate de que el auto que vas a comprar está en condiciones.
            </p>

            <div className="space-y-6">
              <a href="https://wa.me/5493510000000" target="_blank" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                <div className="bg-card p-4 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                  <MessageCircle size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm text-gray-500">WhatsApp</p>
                  <p className="text-xl">+54 9 351 000 0000</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                <div className="bg-card p-4 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Instagram size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm text-gray-500">Instagram</p>
                  <p className="text-xl">@checkcar.cba</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-white/5 p-8 rounded-2xl shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase text-xs font-bold tracking-wider">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} className="bg-background border-white/10 text-white h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white uppercase text-xs font-bold tracking-wider">Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu celular" {...field} className="bg-background border-white/10 text-white h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="carModel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white uppercase text-xs font-bold tracking-wider">Auto a Revisar</FormLabel>
                        <FormControl>
                          <Input placeholder="Modelo y Año" {...field} className="bg-background border-white/10 text-white h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase text-xs font-bold tracking-wider">Mensaje (Opcional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Alguna duda específica?" {...field} className="bg-background border-white/10 text-white min-h-[100px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider h-14 text-lg">
                  Enviar Consulta
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}