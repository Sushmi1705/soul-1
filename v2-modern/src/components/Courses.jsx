import { ShoppingBag, Check, Clock, BookOpen } from "lucide-react";
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
    <section className="py-32 bg-white relative overflow-hidden" id="courses">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-black">Sacred Knowledge</span>
            </div>
            <h2 className="font-serif text-6xl md:text-8xl text-foreground leading-[0.9] tracking-tighter">
              Celestial <br />
              <span className="text-shimmer italic font-light">Academies.</span>
            </h2>
          </div>
          <p className="max-w-xs text-foreground/40 text-[11px] leading-loose tracking-[0.05em] font-medium uppercase italic mb-4">
            Master the ancient sciences through our structured certification programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {COURSES.map((course, i) => (
            <div
              key={course.id}
              className="group glass-card overflow-hidden rounded-[4rem] flex flex-col md:flex-row hover:-translate-y-4 transition-all duration-1000 shadow-2xl shadow-primary/5 animate-float relative"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {/* Iridescent Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 glass px-5 py-2 rounded-2xl border-white/50 text-[9px] tracking-widest uppercase font-black text-foreground shadow-xl">
                  {course.level}
                </div>
              </div>

              <div className="md:w-3/5 p-12 flex flex-col justify-between relative z-10">
                <div className="space-y-6">
                  <h3 className="font-serif text-3xl text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-foreground/40 font-bold">
                      <Clock className="w-4 h-4 text-primary" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-foreground/40 font-bold">
                      <BookOpen className="w-4 h-4 text-accent" />
                      {course.modules}
                    </div>
                  </div>
                  <p className="text-foreground/50 text-sm leading-relaxed font-light line-clamp-3">
                    {course.desc}
                  </p>
                </div>

                <div className="pt-10 flex items-center justify-between border-t border-black/5 mt-10">
                  <span className="font-serif text-3xl text-foreground text-shimmer">
                    {formatINR(course.price)}
                  </span>
                  <button 
                    onClick={() => handleAdd(course)}
                    className="px-10 py-4 rounded-2xl bg-primary text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-accent transition-all duration-500 shadow-2xl shadow-primary/20 relative overflow-hidden group/enroll"
                  >
                    <span className="relative z-10">{added[course.id] ? <Check className="w-4 h-4" /> : "Enlighten"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/enroll:translate-x-full transition-transform duration-1000" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-6 text-foreground text-[10px] tracking-[0.5em] uppercase font-black"
          >
            <span>Your Sacred Cart</span>
            <div className="w-20 h-20 rounded-[2rem] glass border-white/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-2xl relative overflow-hidden">
              <ShoppingBag className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
