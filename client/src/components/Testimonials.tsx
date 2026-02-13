import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Martín Gómez",
    image: "/images/testimonial_1.jpg",
    text: "Gracias a Check Car Córdoba evité comprar un auto con problemas graves de motor que estaban ocultos. Súper profesionales y claros con el informe.",
    rating: 5
  },
  {
    name: "Laura Fernández",
    image: "/images/testimonial_2.jpg",
    text: "Excelente servicio. Llegaron puntuales, revisaron todo con mucho detalle y me explicaron cada punto. Compré mi auto con total seguridad.",
    rating: 5
  },
  {
    name: "Pablo Rodríguez",
    image: "/images/testimonial_3.jpg",
    text: "Me salvaron de una estafa. El auto marcaba 80.000km pero el scanner detectó que tenía más de 150.000km. Vale cada centavo la revisión.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Testimonios</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">Clientes Satisfechos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-white/5 hover:border-primary/30 transition-colors">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-6 border-2 border-primary">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <h4 className="text-white font-bold uppercase tracking-wider">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm mt-1">Cliente Verificado</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}