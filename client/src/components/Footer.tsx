import { Instagram, Search, ExternalLink } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Search className="w-6 h-6 text-primary" />
              <span className="text-white font-bold text-lg">
                Check<span className="text-primary">Car</span> Córdoba
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Servicio profesional de inspección vehicular en Córdoba. Tu seguridad y confianza son nuestro compromiso.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Empresa registrada ante ARCA
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
              <a 
                href="https://instagram.com/checkcar.cba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://tiktok.com/@checkcar.cba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-primary text-sm uppercase tracking-wider">Inicio</a>
            <a href="#services" className="text-gray-400 hover:text-primary text-sm uppercase tracking-wider">Servicios</a>
            <a href="#contact" className="text-gray-400 hover:text-primary text-sm uppercase tracking-wider">Contacto</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Check Car Córdoba. <br/> Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* AURA Credit */}
        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm mb-3">
            Página web diseñada por <span className="text-white font-medium">AURA Diseño Web</span>
          </p>
          <a 
            href="https://aura-disenoweb.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            ¿Querés una página como esta? Contactate
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}