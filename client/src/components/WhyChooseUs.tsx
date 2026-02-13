import { ShieldCheck, PiggyBank, FileText, MapPin } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Evitás Estafas",
    description: "Detectamos vicios ocultos y manipulaciones que no se ven a simple vista."
  },
  {
    icon: PiggyBank,
    title: "Ahorrás Dinero",
    description: "Evitás comprar autos que requerirán reparaciones costosas inmediatas."
  },
  {
    icon: FileText,
    title: "Informe Claro",
    description: "Recibís un reporte detallado y fácil de entender sobre el estado real del auto."
  },
  {
    icon: MapPin,
    title: "En Todo Córdoba",
    description: "Servicio rápido y ágil en Córdoba Capital y alrededores."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Beneficios</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase leading-tight">
              Tu Seguridad es <br/> Nuestra Prioridad
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Comprar un auto usado es una inversión importante. No dejes que la emoción te gane. Nuestro equipo de expertos te brinda la tranquilidad que necesitás con un diagnóstico objetivo y profesional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-lg h-fit text-primary border border-primary/20">
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20 pointer-events-none" />
            <img 
              src="/images/service-scanner.jpg" 
              alt="Scanner profesional" 
              className="relative rounded-lg shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="text-black font-bold text-2xl mb-1">100%</p>
              <p className="text-black/80 font-medium text-sm uppercase tracking-wide">Transparencia en cada diagnóstico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}