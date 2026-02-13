import { useState, useEffect } from "react";
import { Gauge, Scan, Car, FileCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: Gauge,
    title: "Revisión Mecánica",
    description: "Diagnóstico completo de motor, caja de cambios, sistema de frenos, pérdida de fluidos y suspensión.",
    image: "/images/service-mechanic.jpg",
  },
  {
    icon: Scan,
    title: "Escaneo Electrónico",
    description: "Scanner profesional para detectar códigos de error, fallas ocultas y kilometraje real.",
    image: "/images/service-scanner.jpg",
  },
  {
    icon: Car,
    title: "Chapa y Pintura",
    description: "Detección de repintados, masilla, choques estructurales y estado de carrocería.",
    image: "/images/service-paint.jpg",
  },
  {
    icon: FileCheck,
    title: "Informe Profesional",
    description: "Evaluación completa con estimación de gastos y recomendación de compra.",
    image: "/images/reporte.JPG",
  }
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActive((prev) => (prev + 1) % services.length);
  };

  const currentService = services[active];
  const Icon = currentService.icon;

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Nuestro Servicio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">Peritaje de Pre-compra</h3>
          <p className="text-gray-400 text-lg">
            Inspección completa del auto que planeas comprar, realizada por expertos para que tomes una decisión segura.
          </p>
        </div>

        {/* Animated Services Carousel - Centered */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Side */}
            <div className="relative h-[350px] md:h-[450px] w-full">
              <AnimatePresence mode="popLayout">
                {services.map((service, index) => {
                  const isActive = index === active;
                  const offset = index - active;
                  
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        scale: isActive ? 1 : 0.85,
                        rotateY: isActive ? 0 : offset * 15,
                        x: isActive ? 0 : offset * 50,
                        zIndex: isActive ? 10 : 0,
                      }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 origin-center"
                      style={{ perspective: 1000 }}
                    >
                      <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm p-3 rounded-xl text-primary border border-primary/30">
                          <service.icon size={24} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Service Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">
                      {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>

                  {/* Title with Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                      {currentService.title}
                    </h4>
                  </div>

                  {/* Description with word animation */}
                  <motion.p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {currentService.description.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="inline-block mr-1"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>

                  {/* Navigation */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrev}
                      className="group p-3 rounded-full border border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="group p-3 rounded-full border border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                    </button>

                    {/* Progress Dots */}
                    <div className="flex gap-2 ml-4">
                      {services.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { setAutoplay(false); setActive(i); }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === active 
                              ? "bg-primary w-6" 
                              : "bg-white/30 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}