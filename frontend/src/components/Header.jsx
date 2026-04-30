import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND, NAV_LINKS } from "@/data/content";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
          ? "bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-[#E5E1D8]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a
          href="#home"
          data-testid="brand-logo"
          className="flex items-center gap-2 group"
        >
          <Sparkles className="w-5 h-5 text-[#B38B36] transition-transform duration-500 group-hover:rotate-180" />
          <div className="leading-tight">
            <div className="font-serif text-2xl tracking-tight text-[#1F1A12]">
              {BRAND.name}
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#8A5A1B]">
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

        <div className="flex items-center gap-3">
          <button
            data-testid="open-cart-button"
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] hover:border-[#B38B36] hover:text-[#B38B36] transition-all duration-300 group"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase">
              Cart
            </span>
            {count > 0 && (
              <span
                data-testid="cart-count-badge"
                className="absolute -top-1 -right-1 bg-[#B38B36] text-white text-[10px] font-medium w-5 h-5 rounded-full flex items-center justify-center"
              >
                {count}
              </span>
            )}
          </button>
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#1A1A1A]"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-[#FAFAFA]/95 backdrop-blur-xl border-t border-[#E5E1D8]"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-wide text-[#2A2A2A] hover:text-[#B38B36]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
