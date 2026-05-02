import { useEffect, useState } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND, NAV_LINKS } from "@/data/content";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { count, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#F9F7F2] border-b border-brand-dark/5 py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-12 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium">
          <div className="flex items-center gap-6">
            <span>Professional Astrological Services</span>
            <span className="text-[#B38B36]">Call: +1 800 123 1234</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#B38B36] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#B38B36] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#B38B36] transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-brand-dark/5 shadow-md py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 group"
          >
            <span className="font-serif text-3xl lg:text-4xl tracking-[-0.05em] text-[#3C2A21] transition-transform duration-500 group-hover:scale-105">
              ZODI<span className="text-[#B38B36]">AC</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {["Home", "About", "Services", "Gallery", "Horoscopes", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={`text-[11px] tracking-[0.2em] uppercase transition-colors font-medium ${scrolled ? 'text-stone-600 hover:text-[#B38B36]' : 'text-stone-800 hover:text-[#B38B36]'}`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsOpen(true)}
              className="hidden lg:flex relative items-center gap-2 px-6 py-2.5 rounded-full bg-[#B38B36] text-white hover:bg-[#3C2A21] transition-all duration-300 group"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Join Us Today</span>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#B38B36] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
