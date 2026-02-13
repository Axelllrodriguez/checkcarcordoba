import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          <img src="/images/logo.png" alt="Check Car Córdoba" className="h-10 md:h-12 w-auto invert" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("home")} className="text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">
            Inicio
          </button>
          <button onClick={() => scrollToSection("services")} className="text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">
            Servicios
          </button>
          <button onClick={() => scrollToSection("why-us")} className="text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">
            Por Qué Elegirnos
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">
            Testimonios
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider"
            onClick={() => window.open("https://wa.me/5493510000000", "_blank")}
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
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5">
          <button onClick={() => scrollToSection("home")} className="text-white text-lg font-medium text-left">Inicio</button>
          <button onClick={() => scrollToSection("services")} className="text-white text-lg font-medium text-left">Servicios</button>
          <button onClick={() => scrollToSection("why-us")} className="text-white text-lg font-medium text-left">Por Qué Elegirnos</button>
          <button onClick={() => scrollToSection("testimonials")} className="text-white text-lg font-medium text-left">Testimonios</button>
          <Button 
            className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider w-full"
            onClick={() => window.open("https://wa.me/5493510000000", "_blank")}
          >
            Solicitar Revisión
          </Button>
        </div>
      )}
    </nav>
  );
}