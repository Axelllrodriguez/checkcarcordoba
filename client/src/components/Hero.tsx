import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-background via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-bold tracking-wide uppercase mb-4 backdrop-blur-sm">
            <CheckCircle2 size={16} />
            <span>Líderes en Peritajes en Córdoba</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none uppercase drop-shadow-2xl">
            Comprá tu Auto <br/>
            <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Sin Miedo</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Revisamos el vehículo antes que lo pagues. Detectamos fallas ocultas, errores electrónicos y posibles gastos imprevistos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-bold uppercase tracking-wider min-w-[200px] h-14 text-lg shadow-[0_0_20px_rgba(255,195,0,0.4)]"
              onClick={() => window.open("https://wa.me/5493510000000", "_blank")}
            >
              Hablar por WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white font-medium uppercase tracking-wider min-w-[200px] h-14 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Servicios
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scrolleá</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0"></div>
        </div>
      </motion.div>
    </section>
  );
}