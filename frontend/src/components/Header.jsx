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
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FBF6EC]/85 backdrop-blur-xl border-b border-[#E5E1D8]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <a
          href="#home"
          data-testid="brand-logo"
          className="flex items-center gap-2 group"
        >
          <Sparkles className="w-5 h-5 text-[#B38B36] transition-transform duration-500 group-hover:rotate-180" />
          <div className="leading-tight">
            <div className="font-serif text-xl lg:text-2xl tracking-tight text-[#1F1A12]">
              {BRAND.name}
            </div>
            <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-[#8A5A1B]">
              by {BRAND.author}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="text-sm tracking-wide text-[#2A2A2A] hover:text-[#B38B36] transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#B38B36] hover:after:w-full after:transition-all after:duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          data-testid="open-cart-button"
          onClick={() => setIsOpen(true)}
          className="hidden lg:flex relative items-center gap-2 px-5 py-2.5 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] hover:border-[#B38B36] hover:text-[#B38B36] transition-all duration-300 group"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-xs tracking-[0.2em] uppercase">Cart</span>
          {count > 0 && (
            <span
              data-testid="cart-count-badge"
              className="absolute -top-1 -right-1 bg-[#B38B36] text-white text-[10px] font-medium w-5 h-5 rounded-full flex items-center justify-center"
            >
              {count}
            </span>
          )}
        </button>

        {/* Mobile: little book quick CTA */}
        <a
          href="#services"
          data-testid="header-mobile-book"
          className="lg:hidden inline-flex items-center gap-1.5 bg-[#1F1A12] text-white text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full"
        >
          Book
        </a>
      </div>
    </header>
  );
};

export default Header;
