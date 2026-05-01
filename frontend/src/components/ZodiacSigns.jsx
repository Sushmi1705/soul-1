import React from 'react';

const ZODIAC_SIGNS = [
  { name: "Aries", icon: "♈\uFE0E" },
  { name: "Taurus", icon: "♉\uFE0E" },
  { name: "Gemini", icon: "♊\uFE0E" },
  { name: "Cancer", icon: "♋\uFE0E" },
  { name: "Leo", icon: "♌\uFE0E" },
  { name: "Virgo", icon: "♍\uFE0E" },
  { name: "Libra", icon: "♎\uFE0E" },
  { name: "Scorpio", icon: "♏\uFE0E" },
  { name: "Sagittarius", icon: "♐\uFE0E" },
  { name: "Capricorn", icon: "♑\uFE0E" },
  { name: "Aquarius", icon: "♒\uFE0E" },
  { name: "Pisces", icon: "♓\uFE0E" },
];

const ZodiacSigns = () => {
  return (
    <section className="py-36 bg-white overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[30vw] text-black/[0.01] leading-none uppercase -rotate-12">
          Celestial
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
           <div className="max-w-2xl text-left">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-[#B38B36]" />
                <span className="text-[10px] tracking-[0.6em] uppercase text-[#B38B36] font-black">Sacred Symbols</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] leading-tight tracking-tighter">
                Explore Your <br />
                <span className="italic font-light text-[#B38B36]">Zodiac Soul.</span>
              </h2>
           </div>
           <p className="max-w-xs text-gray-400 text-xs leading-loose font-light italic mb-4">
             Each symbol is a gateway to a unique cosmic frequency. Click to decode your celestial signature.
           </p>
        </div>
        
        {/* Constellation Map (Non-Linear) */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-20">
          {ZODIAC_SIGNS.map((sign, i) => (
            <div 
              key={i} 
              className={`group flex flex-col items-center animate-reveal opacity-0 ${i % 2 === 0 ? 'translate-y-12' : '-translate-y-8'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative">
                {/* Orbital Rings */}
                <div className="absolute inset-[-20px] rounded-full border border-[#B38B36]/5 scale-75 group-hover:scale-125 transition-transform duration-1000 group-hover:opacity-0" />
                <div className="absolute inset-[-40px] rounded-full border border-[#B38B36]/5 scale-50 group-hover:scale-150 transition-transform duration-1000 delay-100 group-hover:opacity-0" />
                
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-[#B38B36]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150" />
                
                <div className="w-24 h-24 rounded-full border border-black/[0.03] flex items-center justify-center text-5xl text-[#B38B36] transition-all duration-700 group-hover:border-[#B38B36]/40 bg-white group-hover:-rotate-12 shadow-[0_5px_15px_rgba(0,0,0,0.02)] group-hover:shadow-[0_30px_60px_rgba(179,139,54,0.15)] relative z-10 overflow-hidden">
                   {/* Background Symbol Overlay */}
                   <span className="absolute inset-0 flex items-center justify-center text-8xl text-[#B38B36]/[0.02] pointer-events-none">{sign.icon}</span>
                   <span className="relative z-10 group-hover:scale-125 transition-transform duration-700 ease-out">{sign.icon}</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 group-hover:text-[#1A1A1A] transition-colors font-black block mb-2">
                  {sign.name}
                </span>
                <div className="w-0 h-[1px] bg-[#B38B36] mx-auto group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacSigns;
