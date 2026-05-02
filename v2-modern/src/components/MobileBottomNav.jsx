import { useState } from "react";
import {
  Home,
  LayoutGrid,
  Moon,
  BookOpen,
  Sparkles,
  ShoppingBag,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const MobileBottomNav = () => {
  const [active, setActive] = useState("Home");
  const { count, setIsOpen: setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: Home, href: "#home" },
    { label: "Services", icon: LayoutGrid, href: "#services" },
    { label: "Zodiac", icon: Moon, href: "#horoscopes" },
    { label: "Courses", icon: BookOpen, href: "#courses" },
  ];

  return (
    <>
      <div className="lg:hidden fixed bottom-6 inset-x-6 z-[100]">
        <nav className="glass-card rounded-[2.5rem] p-3 flex items-center justify-between shadow-2xl shadow-primary/10 border-white/50">
          <div className="flex items-center gap-1">
            {navItems.slice(0, 2).map((item) => (
              <NavBtn
                key={item.label}
                {...item}
                active={active === item.label}
                onClick={() => setActive(item.label)}
              />
            ))}
          </div>

          <div className="relative -top-8">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-xl shadow-primary/30 transform hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Sparkles className="w-8 h-8" />
            </button>
          </div>

          <div className="flex items-center gap-1">
            {navItems.slice(2).map((item) => (
              <NavBtn
                key={item.label}
                {...item}
                active={active === item.label}
                onClick={() => setActive(item.label)}
              />
            ))}
          </div>
        </nav>
      </div>

      {/* Modern Side Sheet for Mobile Menu */}
      <div
        className={`fixed inset-0 z-[110] transition-all duration-700 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-white/40 backdrop-blur-md transition-opacity duration-700 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm glass shadow-2xl transition-transform duration-700 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-16">
              <span className="font-serif text-3xl text-foreground font-bold">
                CEL<span className="text-primary">ESTIAL</span>
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 rounded-full glass border-black/5 flex items-center justify-center text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { label: "Personal Reading", icon: Sparkles },
                { label: "Cart", icon: ShoppingBag, badge: count, action: () => setIsCartOpen(true) },
                { label: "My Reports", icon: LayoutGrid },
                { label: "Community", icon: Moon },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.action) item.action();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-between p-6 rounded-3xl glass border-black/5 hover:bg-primary/5 transition-all group"
                >
                  <div className="flex items-center gap-6">
                    <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-serif text-xl text-foreground">{item.label}</span>
                  </div>
                  {item.badge > 0 && (
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-black/5">
              <button className="w-full py-5 rounded-2xl bg-primary text-white text-xs tracking-[0.4em] uppercase font-bold shadow-xl shadow-primary/20">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavBtn = ({ icon: Icon, label, active, onClick, href }) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-500 ${
      active ? "text-primary bg-primary/5" : "text-foreground/30 hover:text-foreground/60"
    }`}
  >
    <Icon className={`w-5 h-5 ${active ? "scale-110" : ""}`} />
    <span className="text-[8px] tracking-[0.2em] uppercase font-black">{label}</span>
  </a>
);

export default MobileBottomNav;
