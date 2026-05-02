import { Sun, Sparkles } from "lucide-react";

const Panchang = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="panchang">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-primary" />
                <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-black">Daily Energy</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-tight tracking-tight">
                Vedic <br />
                <span className="italic font-light text-primary text-glow-light">Panchang.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl shadow-xl shadow-slate-100">
                <div className="flex items-center justify-between mb-8">
                  <div className="space-y-1">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/30 font-black">Current Status</p>
                    <p className="font-serif text-2xl text-foreground">Abhijit Muhurta</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Sun className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Tithi", value: "Shukla Navami", color: "text-primary" },
                    { label: "Nakshatra", value: "Pushya", color: "text-accent" },
                    { label: "Yoga", value: "Siddha", color: "text-foreground" },
                    { label: "Karana", value: "Balava", color: "text-foreground" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl glass border-black/5">
                      <p className="text-[9px] tracking-widest uppercase text-foreground/30 font-bold mb-1">{item.label}</p>
                      <p className={`font-serif text-lg ${item.color}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-foreground/50 text-sm leading-relaxed font-light">
                Today's celestial configuration is exceptionally favorable for beginning new ventures and seeking spiritual growth. 
                The Moon's presence in Pushya Nakshatra brings nurturing energy.
              </p>
            </div>
          </div>

          <div className="relative group">
            {/* Donut Chart Representation */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 animate-[spin_20s_linear_infinite]">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-100" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="180 251.2" className="text-primary opacity-80" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="40 251.2" strokeDashoffset="-180" className="text-accent opacity-80" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="31.2 251.2" strokeDashoffset="-220" className="text-rose-400 opacity-80" strokeLinecap="round" />
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="w-48 h-48 rounded-full glass border-white/50 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />
                  <span className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 font-black mb-2 relative z-10">Soul Energy</span>
                  <span className="font-serif text-6xl text-foreground relative z-10 text-shimmer">84%</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-black mt-2 relative z-10">Alignment</span>
                </div>
              </div>
            </div>

            {/* Floating Markers with enhanced animations */}
            <div className="absolute top-0 right-0 glass-card px-8 py-5 rounded-3xl border-white shadow-2xl animate-float">
               <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-rose-400 animate-pulse" />
                 <span className="text-[10px] tracking-widest uppercase text-foreground/50 font-black">Rahu Kaal</span>
               </div>
            </div>
            <div className="absolute bottom-10 left-0 glass-card px-8 py-5 rounded-3xl border-white shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
               <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                 <span className="text-[10px] tracking-widest uppercase text-foreground/50 font-black">Abhijit</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panchang;
