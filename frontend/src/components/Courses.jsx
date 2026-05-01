import { ShoppingBag, Plus, Check } from "lucide-react";
import { useState } from "react";
import { COURSES, formatINR } from "@/data/content";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Courses = () => {
  const { addItem, setIsOpen } = useCart();
  const [added, setAdded] = useState({});

  const handleAdd = (c) => {
    addItem(c);
    setAdded((p) => ({ ...p, [c.id]: true }));
    toast.success(`${c.title} added to cart`, {
      action: {
        label: "View cart",
        onClick: () => setIsOpen(true),
      },
    });
    setTimeout(() => setAdded((p) => ({ ...p, [c.id]: false })), 1600);
  };

  return (
    <section
      id="courses"
      data-testid="courses-section"
      className="relative py-24 md:py-36 bg-[#0A0A14] text-white overflow-hidden"
    >
      {/* Course Nebula Accent */}
      <div className="absolute top-1/2 right-0 w-[40%] h-[80%] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B38B36 0%, transparent 70%)' }}
      />
      {/* Decorative texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(179,139,54,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#E5C06A]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#E5C06A]">
                Our Courses
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-2xl">
              Learn the{" "}
              <em className="italic text-[#E5C06A] font-light">sacred sciences.</em>
            </h2>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed">
            Lifetime access, certificate upon completion, and a private cohort
            of fellow seekers guided personally by Gitika.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.map((c) => (
            <article
              key={c.id}
              data-testid={`course-card-${c.id}`}
              className="group relative bg-[#242424] border border-white/5 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-[#B38B36]/40"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-[#2f2f2f]">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase bg-black/40 backdrop-blur px-3 py-1.5 rounded-full text-[#E5C06A] border border-[#E5C06A]/20">
                  {c.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl mb-3">{c.title}</h3>
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/40">
                      Tuition
                    </div>
                    <div className="font-serif text-2xl text-[#E5C06A]">
                      {formatINR(c.price)}
                    </div>
                  </div>
                  <button
                    data-testid={`add-to-cart-${c.id}`}
                    onClick={() => handleAdd(c)}
                    className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-5 py-3 rounded-full transition-all duration-300 ${
                      added[c.id]
                        ? "bg-[#E5C06A] text-[#1A1A1A]"
                        : "bg-white text-[#1A1A1A] hover:bg-[#E5C06A]"
                    }`}
                  >
                    {added[c.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" /> Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center">
          <button
            data-testid="view-cart-bottom"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-3 border border-white/20 hover:border-[#E5C06A] hover:text-[#E5C06A] text-white text-xs tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-all duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            View your cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
