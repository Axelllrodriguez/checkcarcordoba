import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/543513079334?text=Hola%20Check%20Car!%20Me%20interesa%20una%20revisi%C3%B3n%20pre%20compra%20para%20mi%20auto.%20%C2%BFPueden%20darme%20m%C3%A1s%20info%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-in slide-in-from-bottom-10"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-transparent" />
      <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </a>
  );
}