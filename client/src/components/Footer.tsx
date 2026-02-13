export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img src="/images/logo.png" alt="Check Car Córdoba" className="h-10 w-auto opacity-80" />
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Servicio profesional de inspección vehicular en Córdoba. Tu seguridad y confianza son nuestro compromiso.
            </p>
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
      </div>
    </footer>
  );
}