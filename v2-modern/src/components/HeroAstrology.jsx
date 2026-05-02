import React, { useMemo } from "react";
import { Sparkles, Play, ArrowRight, Sun, Star, Compass, Wind, Droplets, Flame, Mountain, Activity, Zap } from "lucide-react";

const MechanicalMandala = () => {
  const zodiacs = [
    { sign: "♈", name: "ARIES", element: <Flame className="w-3 h-3" /> },
    { sign: "♉", name: "TAURUS", element: <Mountain className="w-3 h-3" /> },
    { sign: "♊", name: "GEMINI", element: <Wind className="w-3 h-3" /> },
    { sign: "♋", name: "CANCER", element: <Droplets className="w-3 h-3" /> },
    { sign: "♌", name: "LEO", element: <Flame className="w-3 h-3" /> },
    { sign: "♍", name: "VIRGO", element: <Mountain className="w-3 h-3" /> },
    { sign: "♎", name: "LIBRA", element: <Wind className="w-3 h-3" /> },
    { sign: "♏", name: "SCORPIO", element: <Droplets className="w-3 h-3" /> },
    { sign: "♐", name: "SAGITTARIUS", element: <Flame className="w-3 h-3" /> },
    { sign: "♑", name: "CAPRICORN", element: <Mountain className="w-3 h-3" /> },
    { sign: "♒", name: "AQUARIUS", element: <Wind className="w-3 h-3" /> },
    { sign: "♓", name: "PISCES", element: <Droplets className="w-3 h-3" /> },
  ];

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center pointer-events-none lg:pointer-events-auto overflow-visible mx-auto">
      
      {/* 1. Solstice Backdrop Glow */}
      <div className="absolute inset-0 solstice-glow scale-150 animate-pulse rounded-full" />

      {/* 2. Mathematical SVG Circles (The Rings) */}
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="275" fill="none" stroke="currentColor" className="text-primary/10" strokeWidth="1" />
        <circle cx="300" cy="300" r="210" fill="none" stroke="currentColor" className="text-primary/5" strokeWidth="1" />
        <circle cx="300" cy="300" r="145" fill="none" stroke="currentColor" className="text-amber-200/15" strokeWidth="1.5" />
        
        {/* Radial Spoke Spikes */}
        {zodiacs.map((_, i) => (
          <line
            key={i}
            x1="300"
            y1="300"
            x2={300 + Math.cos((i * 30 - 90) * (Math.PI / 180)) * 285}
            y2={300 + Math.sin((i * 30 - 90) * (Math.PI / 180)) * 285}
            stroke="currentColor"
            className="text-primary/10"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* 3. Outer Ring: Zodiac Names (Rotating Slow) */}
      <div className="absolute w-[600px] h-[600px] animate-[spin_180s_linear_infinite] z-10">
        {zodiacs.map((z, i) => (
          <div
            key={z.name}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] tracking-[0.5em] text-primary font-black italic"
            style={{ transform: `rotate(${i * 30}deg) translateY(-275px)` }}
          >
            {z.name}
          </div>
        ))}
      </div>

      {/* 4. Middle Ring: Elemental Glass (Counter-Rotating) */}
      <div className="absolute w-[600px] h-[600px] animate-[spin_120s_linear_infinite_reverse] z-20">
        {zodiacs.map((z, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 crystal-glass rounded-xl flex items-center justify-center text-primary/60 shadow-lg border-white/50 group cursor-pointer pointer-events-auto transition-all duration-700 hover:scale-125 hover:bg-primary hover:text-white"
            style={{ transform: `rotate(${i * 30}deg) translateY(-210px) rotate(-${i * 30}deg)` }}
          >
            {z.element}
          </div>
        ))}
      </div>

      {/* 5. Inner Ring: Sigils (Rotating with Sun) */}
      <div className="absolute w-[600px] h-[600px] animate-[spin_90s_linear_infinite] z-30">
        {zodiacs.map((z, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-serif text-primary/80 drop-shadow-sm group cursor-pointer pointer-events-auto"
            style={{ transform: `rotate(${i * 30}deg) translateY(-145px) rotate(-${i * 30}deg)` }}
          >
            {z.sign}
          </div>
        ))}
      </div>

      {/* 6. The Solstice Sun (Perfect Center) */}
      <div className="relative z-50 w-32 h-32 flex items-center justify-center group pointer-events-auto cursor-pointer">
        <svg className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
           {[...Array(36)].map((_, i) => (
             <path
               key={i}
               d="M50 20 Q52 28 50 36"
               fill="none"
               stroke="#D97706"
               strokeWidth="0.8"
               strokeLinecap="round"
               className="animate-ray-pulse"
               style={{ transform: `rotate(${i * 10}deg)`, transformOrigin: '50px 50px', animationDelay: `${i * 0.1}s` }}
             />
           ))}
        </svg>
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-200 via-orange-400 to-amber-700 shadow-[0_0_60px_rgba(245,158,11,0.4)] flex items-center justify-center aura-pulse border border-white/20">
           <Sun className="w-10 h-10 text-white drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

const HeroAstrology = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden" id="home">
      {/* 1. Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 bg-[#FCF9F5]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.04)_0%,transparent_40%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_80%,rgba(245,158,11,0.04)_0%,transparent_40%)]" />
        
        {/* Animated Bokeh Orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bokeh bg-primary/5"
            style={{
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--duration': `${20 + i * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content Side */}
          <div className="lg:col-span-6 space-y-12 pr-12">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-px bg-primary/30 group-hover:w-20 transition-all duration-700" />
                <span className="text-[11px] tracking-[1em] uppercase text-primary font-black">Celestial Harmony v10</span>
              </div>
              {/* Refined One-Line Heading */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#1E293B] tracking-tighter flex flex-wrap items-center gap-x-6 gap-y-2 whitespace-nowrap">
                <span>Divine</span>
                <span className="italic font-light text-primary/80 drop-shadow-sm">Destiny.</span>
              </h1>
              <p className="max-w-2xl text-[#1E293B]/50 text-xl leading-relaxed font-light">
                Engineering spiritual clarity through high-fidelity cosmic data and ancient Vedic wisdom. Explore the mechanical precision of the heavens through our intricate alignment system.
              </p>
            </div>

            <div className="flex flex-wrap gap-10 items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              <button className="group px-14 py-7 rounded-[3rem] bg-[#1E293B] text-white text-[10px] tracking-[0.7em] uppercase font-black hover:bg-primary transition-all duration-1000 shadow-[0_20px_60px_rgba(30,41,59,0.15)] flex items-center gap-6 relative overflow-hidden">
                <span className="relative z-10">Start Alignment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
              </button>
              
              <div className="flex items-center gap-8 border-l border-primary/10 pl-10">
                 <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest text-[#1E293B]/40 font-bold uppercase italic flex items-center gap-2">
                       <Zap className="w-3 h-3 text-primary animate-pulse" />
                       98.4% Optimal Sync
                    </span>
                 </div>
              </div>
            </div>
          </div>

          {/* Geometric Perfect Mandala Side */}
          <div className="lg:col-span-6 relative flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-500 overflow-visible">
             <MechanicalMandala />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAstrology;
