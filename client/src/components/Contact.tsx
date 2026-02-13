import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

const TikTokIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WHATSAPP_NUMBER = "543513079334";
const WHATSAPP_MESSAGE = "Hola Check Car! Me interesa una revisión pre compra para mi auto. ¿Pueden darme más info?";

const benefits = [
  "Revisión completa en menos de 2 horas",
  "Vamos donde esté el auto",
  "Informe detallado en el momento",
  "Más de 500 autos revisados"
];

export default function Contact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Contacto</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">¿Listo para comprar tranquilo?</h3>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            No arriesgues tu capital. Escribinos por WhatsApp y coordinamos la revisión del auto que querés comprar.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-wider h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-lg gap-2 sm:gap-3 shadow-lg shadow-[#25D366]/20 w-full sm:w-auto"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Escribinos por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Button>
          </a>

          <p className="text-gray-500 mt-6 text-sm">
            Respondemos en menos de 1 hora
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-12 pt-12 border-t border-white/5">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
            >
              <MessageCircle size={20} />
              <span>+54 351 307-9334</span>
            </a>
            <a 
              href="https://instagram.com/checkcar.cba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              <span>@checkcar.cba</span>
            </a>
            <a 
              href="https://tiktok.com/@checkcar.cba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
            >
              <TikTokIcon size={20} />
              <span>@checkcar.cba</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}