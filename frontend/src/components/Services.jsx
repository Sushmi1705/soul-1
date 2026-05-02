import { useState } from "react";
import { ArrowUpRight, CalendarClock } from "lucide-react";
import { SERVICES, formatINR } from "@/data/content";
import BookingModal from "@/components/BookingModal";

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-36 bg-[#FDFBF7] overflow-hidden"
    >
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <span className="absolute top-1/4 left-0 font-serif text-[25vw] text-brand-dark/[0.01] uppercase -translate-x-1/2">
          Service
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-8">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#B38B36]" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#B38B36] font-black">Sacred Offerings</span>
            </div>
            <h2 className="font-serif text-6xl md:text-8xl text-[#3C2A21] leading-[0.9] tracking-tighter">
              The Path to <br />
              <span className="italic font-light text-[#B38B36]">Self Mastery.</span>
            </h2>
          </div>
          <p className="max-w-xs text-stone-400 text-xs leading-loose font-light italic mb-6">
            We provide a curated gallery of celestial services designed to align your earthly path with the stars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 relative z-10">
          {SERVICES.map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col bg-white rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(60,42,33,0.05)] border border-[#E5E0D8] relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header: Icon & Duration */}
              <div className="flex items-start justify-between mb-8 relative z-10">
                {/* Elegant Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-[#FDFBF7] border border-[#E5E0D8] flex items-center justify-center p-4 group-hover:scale-110 group-hover:border-[#B38B36]/30 transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain drop-shadow-sm opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                </div>

                {/* Clean Duration Badge */}
                <div className="flex items-center gap-1.5 text-[#B38B36] bg-[#B38B36]/5 px-3 py-1 rounded-full">
                   <CalendarClock className="w-3.5 h-3.5" />
                   <span className="text-[10px] tracking-[0.2em] font-bold uppercase">{item.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow relative z-10">
                <h4 className="font-serif text-[#3C2A21] text-2xl lg:text-3xl mb-4 group-hover:text-[#B38B36] transition-colors duration-500">
                  {item.title}
                </h4>
                
                <p className="text-stone-500 text-sm leading-relaxed font-light mb-8 flex-grow">
                  {item.desc}
                </p>
                
                {/* Footer: Price & Action */}
                <div className="flex items-end justify-between pt-6 border-t border-[#E5E0D8] mt-auto">
                   <div className="flex flex-col">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-stone-400 font-semibold mb-1">Starting From</span>
                      <span className="font-serif text-xl text-[#3C2A21]">{formatINR(item.price)}</span>
                   </div>
                   
                   <button 
                      onClick={() => setSelected(item)}
                      className="group/btn flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#3C2A21] hover:text-[#B38B36] transition-colors"
                   >
                     Book Session
                     <span className="w-8 h-8 rounded-full bg-[#FDFBF7] border border-[#E5E0D8] flex items-center justify-center group-hover/btn:bg-[#B38B36] group-hover/btn:border-[#B38B36] transition-colors">
                       <ArrowUpRight className="w-3.5 h-3.5 text-[#3C2A21] group-hover/btn:text-white transition-colors" />
                     </span>
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
