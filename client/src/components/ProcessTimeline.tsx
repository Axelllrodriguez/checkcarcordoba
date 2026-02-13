import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Wrench, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const timelineData: TimelineItem[] = [
  {
    step: 1,
    title: "Contactanos",
    description:
      "Escribinos por WhatsApp con los datos del auto que querés comprar: marca, modelo, año y ubicación. Coordinamos día y horario para la revisión según tu disponibilidad.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Revisión profesional",
    description:
      "Nuestro técnico especializado inspecciona el vehículo de forma exhaustiva con equipamiento de última generación. Al finalizar, te entregamos un informe detallado con el estado real del auto y recomendaciones claras.",
    icon: Wrench,
  },
  {
    step: 3,
    title: "Decisión informada",
    description:
      "Con toda la información en tus manos, podés negociar con confianza o descartar un mal negocio. Invertí tu dinero con seguridad gracias a CheckCar Córdoba.",
    icon: CheckCircle2,
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2">
            Cómo Funciona
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Nuestro Proceso
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Un proceso simple y transparente para que compres tu auto con total confianza.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />
          
          {/* Animated Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-primary to-primary/50 md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ml-20 md:ml-0 ${
                      isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-card border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors ${
                        isEven ? "md:mr-auto" : "md:ml-auto"
                      } max-w-md`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="text-primary font-bold text-sm uppercase tracking-wider">
                          Paso {item.step}
                        </span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(232,230,19,0.3)]"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* Final Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 bottom-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_30px_rgba(232,230,19,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
