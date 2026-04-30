import { useState } from "react";
import { Home, Calendar, ShoppingBag, Menu, GraduationCap, X, Sparkles, Phone, BookOpen, User } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { NAV_LINKS, BRAND } from "@/data/content";

const MobileBottomNav = () => {
  const { count, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Floating dock */}
      <nav
        data-testid="mobile-bottom-nav"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)]"
      >
        {/* Soft glow behind */}
        <div className="absolute -top-8 inset-x-4 h-8 bg-gradient-to-t from-[#FBF6EC]/95 to-transparent pointer-events-none" />

        <div className="mx-3 mb-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#E5E1D8] shadow-[0_10px_30px_-10px_rgba(138,90,27,0.25)]">
          <div className="grid grid-cols-5 items-end h-[68px] relative">
            <NavBtn
              testid="mobile-nav-home"
              icon={<Home className="w-[18px] h-[18px]" strokeWidth={1.7} />}
              label="Home"
              onClick={() => scrollTo("home")}
            />
            <NavBtn
              testid="mobile-nav-services"
              icon={<Sparkles className="w-[18px] h-[18px]" strokeWidth={1.7} />}
              label="Services"
              onClick={() => scrollTo("services")}
            />

            {/* Center FAB - Book */}
            <div className="flex justify-center -mt-7">
              <button
                data-testid="mobile-nav-book"
                onClick={() => scrollTo("services")}
                className="relative group"
              >
                <span className="absolute inset-0 rounded-full bg-[#B38B36]/30 blur-md group-active:scale-95 transition-transform" />
                <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A646] to-[#9A752B] text-white shadow-[0_8px_20px_-4px_rgba(179,139,54,0.6)] border-[3px] border-white">
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                </span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.2em] uppercase text-[#8A5A1B] font-medium whitespace-nowrap">
                  Book
                </span>
              </button>
            </div>

            <NavBtn
              testid="mobile-nav-courses"
              icon={<GraduationCap className="w-[18px] h-[18px]" strokeWidth={1.7} />}
              label="Courses"
              onClick={() => scrollTo("courses")}
            />

            <button
              data-testid="mobile-nav-cart"
              onClick={() => setIsOpen(true)}
              className="flex flex-col items-center justify-center gap-1 text-[#1F1A12] active:scale-95 transition-transform relative"
            >
              <div className="relative">
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.7} />
                {count > 0 && (
                  <span
                    data-testid="mobile-cart-badge"
                    className="absolute -top-1.5 -right-2 bg-[#B38B36] text-white text-[9px] font-medium min-w-[16px] h-[16px] rounded-full flex items-center justify-center px-1"
                  >
                    {count}
                  </span>
                )}
              </div>
              <span className="text-[9px] tracking-[0.15em] uppercase text-[#5A4A30]">
                Cart
              </span>
            </button>
          </div>

          {/* Hamburger row */}
          <button
            data-testid="mobile-nav-menu"
            onClick={() => setMenuOpen(true)}
            className="absolute -top-4 right-3 w-9 h-9 rounded-full bg-white border border-[#E5E1D8] shadow-md flex items-center justify-center text-[#1F1A12] active:scale-95"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hamburger Sheet */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="right"
          data-testid="mobile-menu-sheet"
          className="w-full sm:max-w-sm bg-[#FBF6EC] border-l border-[#E5E1D8] p-0 flex flex-col"
        >
          <SheetHeader className="p-6 border-b border-[#E5E1D8]">
            <SheetTitle className="font-serif text-2xl text-[#1F1A12] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#B38B36]" />
              {BRAND.name}
            </SheetTitle>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#8A5A1B]">
              by {BRAND.author}
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`mobile-menu-link-${l.label.toLowerCase()}`}
                onClick={() => scrollTo(l.href.replace("#", ""))}
                className="w-full text-left flex items-center justify-between py-4 border-b border-[#E5E1D8]/60 group"
              >
                <span className="font-serif text-2xl text-[#1F1A12] group-hover:text-[#B38B36] transition-colors">
                  {l.label}
                </span>
                <span className="text-[#B38B36] text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            ))}

            <div className="pt-8 space-y-3">
              <button
                onClick={() => scrollTo("services")}
                className="w-full bg-[#1F1A12] text-white text-xs tracking-[0.25em] uppercase py-4 rounded-full flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book a Session
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setIsOpen(true);
                }}
                className="w-full border border-[#1F1A12]/20 text-[#1F1A12] text-xs tracking-[0.25em] uppercase py-4 rounded-full flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                View Cart {count > 0 && `(${count})`}
              </button>
            </div>

            <div className="pt-10 space-y-3 text-sm text-[#5A4A30]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B38B36]" />
                +91 98XXX XXXXX
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#B38B36]" />
                hello@soulkarma.in
              </div>
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-[#B38B36]" />
                Mon – Sat · 9 AM – 7 PM
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

const NavBtn = ({ testid, icon, label, onClick }) => (
  <button
    data-testid={testid}
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-1 text-[#1F1A12] active:scale-95 transition-transform"
  >
    {icon}
    <span className="text-[9px] tracking-[0.15em] uppercase text-[#5A4A30]">
      {label}
    </span>
  </button>
);

export default MobileBottomNav;
