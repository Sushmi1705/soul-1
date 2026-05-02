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
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 pt-4 px-4">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
          scrolled
            ? "glass-card py-3 px-6 shadow-xl"
            : "bg-transparent py-6 px-12"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center rotate-6 group-hover:rotate-0 transition-all duration-500 shadow-lg shadow-primary/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-serif text-2xl lg:text-3xl tracking-tight text-foreground transition-transform duration-500 font-bold">
              CEL<span className="text-primary">ESTIAL</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] tracking-[0.4em] uppercase text-foreground/60 hover:text-primary transition-all font-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-3 rounded-xl glass border-black/5 text-foreground hover:bg-primary/5 hover:border-primary/20 transition-all duration-500 group"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                  {count}
                </span>
              )}
            </button>
            
            <button className="hidden sm:block px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-500">
              Get Reading
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
