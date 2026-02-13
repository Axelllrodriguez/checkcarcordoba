import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Menu, X, Home, Wrench, Award, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Inicio", id: "home", icon: Home },
  { name: "Servicios", id: "services", icon: Wrench },
  { name: "Por Qué Elegirnos", id: "why-us", icon: Award },
  { name: "Testimonios", id: "testimonials", icon: MessageSquare },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [tabBounds, setTabBounds] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.id === activeTab);
    const activeRef = tabRefs.current[activeIndex];
    if (activeRef) {
      const rect = activeRef.getBoundingClientRect();
      const parentRect = activeRef.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setTabBounds({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Search className="w-6 h-6 md:w-7 md:h-7 text-primary" />
          <span className="text-white font-bold text-lg md:text-xl tracking-tight">
            Check<span className="text-primary">Car</span> Córdoba
          </span>
        </div>

        {/* Desktop Nav - Tubelight Style */}
        <div className="hidden md:flex items-center">
          <div className="relative flex items-center gap-1 bg-black/50 backdrop-blur-lg border border-white/10 rounded-full px-2 py-1.5">
            {/* Animated Indicator */}
            <motion.div
              className="absolute h-[calc(100%-8px)] bg-primary/20 rounded-full border border-primary/30"
              initial={false}
              animate={{
                left: tabBounds.left,
                width: tabBounds.width,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              style={{ top: 4 }}
            />
            {/* Glow Effect */}
            <motion.div
              className="absolute h-1 bg-primary rounded-full blur-sm"
              initial={false}
              animate={{
                left: tabBounds.left + tabBounds.width * 0.2,
                width: tabBounds.width * 0.6,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              style={{ top: 0 }}
            />
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => { tabRefs.current[index] = el; }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative z-10 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-colors duration-200",
                    isActive ? "text-primary" : "text-white/70 hover:text-white"
                  )}
                >
                  <span className="hidden lg:inline">{item.name}</span>
                  <Icon className="lg:hidden w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(232,230,19,0.3)]"
            onClick={() => window.open("https://wa.me/543513079334?text=Hola%20Check%20Car!%20Me%20interesa%20una%20revisi%C3%B3n%20pre%20compra%20para%20mi%20auto.%20%C2%BFPueden%20darme%20m%C3%A1s%20info%3F", "_blank")}
          >
            Solicitar Revisión
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-3 text-lg font-medium text-left px-4 py-3 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary/20 text-primary border border-primary/30" 
                    : "text-white hover:bg-white/5"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </button>
            );
          })}
          <Button 
            className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider w-full mt-2 shadow-[0_0_15px_rgba(232,230,19,0.3)]"
            onClick={() => window.open("https://wa.me/543513079334?text=Hola%20Check%20Car!%20Me%20interesa%20una%20revisi%C3%B3n%20pre%20compra%20para%20mi%20auto.%20%C2%BFPueden%20darme%20m%C3%A1s%20info%3F", "_blank")}
          >
            Solicitar Revisión
          </Button>
        </motion.div>
      )}
    </nav>
  );
}