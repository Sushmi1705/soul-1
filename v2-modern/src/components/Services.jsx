import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, formatINR } from "@/data/content";
import BookingModal from "@/components/BookingModal";

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-black">Spiritual Offerings</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-tight tracking-tight">
              Our Sacred <br />
              <span className="italic font-light text-primary text-glow-light">Consultations.</span>
            </h2>
          </div>
          <p className="max-w-xs text-foreground/40 text-[11px] leading-loose tracking-[0.05em] font-medium uppercase italic mb-4">
            Personalized guidance through the ancient sciences of the stars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className={`group glass-card p-12 rounded-[4rem] flex flex-col hover:-translate-y-6 transition-all duration-1000 shadow-2xl shadow-primary/5 relative overflow-hidden ${
                i % 2 === 0 ? 'mt-0' : 'mt-12 lg:mt-24'
              }`}
            >
              {/* Iridescent Sweep Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-white/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              <div className="flex flex-col flex-grow relative z-10">
                <div className="w-24 h-24 rounded-[2rem] glass border-black/5 flex items-center justify-center mb-12 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-700 shadow-xl relative overflow-hidden">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-14 h-14 object-contain grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                  {/* Light Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <h4 className="font-serif text-foreground text-4xl mb-6 group-hover:text-primary transition-colors duration-500 leading-tight">
                  {s.title}
                </h4>
                
                <p className="text-foreground/50 text-sm leading-relaxed font-light mb-12 flex-grow line-clamp-4">
                  {s.desc}
                </p>
                
                {/* Footer: Price & Action */}
                <div className="flex items-center justify-between pt-10 border-t border-black/5 mt-auto">
                   <div className="flex flex-col">
                      <span className="text-[9px] tracking-[0.4em] uppercase text-foreground/20 font-black mb-2">Sacred Exchange</span>
                      <span className="font-serif text-3xl text-foreground text-shimmer">{formatINR(s.price)}</span>
                   </div>
                   
                   <button 
                      onClick={() => setSelected(s)}
                      className="w-20 h-20 rounded-full glass border-black/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-700 shadow-2xl group/btn"
                   >
                     <ArrowUpRight className="w-8 h-8 group-hover/btn:rotate-45 transition-transform duration-700" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        service={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default Services;
