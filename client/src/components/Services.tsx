import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Scan, Car, FileCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Revisión Mecánica",
    description: "Diagnóstico completo de motor, caja de cambios, sistema de frenos y suspensión para asegurar el buen funcionamiento.",
    image: "/images/service-mechanic.jpg"
  },
  {
    icon: Scan,
    title: "Escaneo Electrónico",
    description: "Scanner profesional para detectar códigos de error, fallas ocultas en sensores y estado real del kilometraje.",
    image: "/images/service-scanner.jpg"
  },
  {
    icon: Car,
    title: "Chapa y Pintura",
    description: "Detección de repintados, masilla, choques estructurales y estado general del chasis y carrocería.",
    image: "/images/service-paint.jpg"
  },
  {
    icon: FileCheck,
    title: "Informe Profesional",
    description: "Evaluación general con estimación de gastos futuros y nuestra recomendación profesional de compra.",
    image: "/images/hero-bg.jpg" // Using hero bg as fallback/placeholder for report image
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Nuestros Servicios</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">Peritajes de Precompra</h3>
          <p className="text-gray-400 text-lg">
            Inspección completa realizada por expertos para que tomes una decisión segura y evites problemas futuros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-white/5 overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/80 p-2 rounded-lg text-primary z-20">
                  <service.icon size={24} />
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 uppercase">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button 
                  variant="link" 
                  className="text-primary hover:text-white p-0 h-auto font-medium uppercase text-sm tracking-wider flex items-center gap-2 group/btn"
                  onClick={() => window.open("https://wa.me/5493510000000", "_blank")}
                >
                  Consultar
                  <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}