import { Moon, Hash, Heart, Sun, Star, Baby, Flame, Zap } from "lucide-react";

const CALCULATORS = [
  {
    id: "moon-sign",
    title: "Moon Sign Calculator",
    desc: "Understand your emotional nature, instincts, and how you truly respond to life situations.",
    icon: <Moon className="w-6 h-6 text-accent" />,
  },
  {
    id: "numerology",
    title: "Numerology Calculator",
    desc: "Discover your core personality, identity, and the deeper forces that influence your everyday actions.",
    icon: <Hash className="w-6 h-6 text-accent" />,
  },
  {
    id: "kundli-matching",
    title: "Kundli Matching",
    desc: "Decode your life path, destiny, and hidden patterns through the power of numbers.",
    icon: <Heart className="w-6 h-6 text-accent" />,
  },
  {
    id: "lagna",
    title: "Lagna Calculator",
    desc: "Check marriage compatibility with detailed Guna Milan and deeper relationship insights.",
    icon: <Zap className="w-6 h-6 text-accent" />,
  },
  {
    id: "nakshatra",
    title: "Nakshatra Calculator",
    desc: "Find your rising sign and understand how you express yourself and appear to the world.",
    icon: <Star className="w-6 h-6 text-accent" />,
  },
  {
    id: "baby-name",
    title: "Baby Name Calculator",
    desc: "Know your current Mahadasha and how planetary periods are shaping your life and decisions.",
    icon: <Baby className="w-6 h-6 text-accent" />,
  },
  {
    id: "flames",
    title: "Flames Calculator",
    desc: "Explore your Chinese zodiac sign, personality traits, and the elements that influence your nature.",
    icon: <Flame className="w-6 h-6 text-accent" />,
  },
  {
    id: "rahu-ketu",
    title: "Rahu Ketu Calculator",
    desc: "Reveal your personal lucky numbers to make better choices and attract positive opportunities.",
    icon: <Sun className="w-6 h-6 text-accent" />,
  },
];

const Calculators = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="calculators">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/4 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-serif text-6xl md:text-8xl text-foreground mb-8 tracking-tighter">
            Free <span className="text-shimmer">Calculators</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/20" />
            <p className="text-foreground/40 tracking-[0.5em] uppercase text-[10px] font-black">
              Divine Mathematical Insights
            </p>
            <span className="h-px w-12 bg-primary/20" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {CALCULATORS.map((calc, i) => (
            <div
              key={calc.id}
              className="group glass-card p-10 rounded-[3rem] flex items-center gap-10 hover:-translate-y-4 transition-all duration-1000 shadow-2xl shadow-primary/5 border-white animate-float relative overflow-hidden"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {/* Card Iridescence */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="flex-shrink-0 w-24 h-24 rounded-3xl glass border-black/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-700 shadow-xl relative overflow-hidden">
                <div className="group-hover:scale-125 transition-transform duration-700 text-primary relative z-10">
                  {calc.icon}
                </div>
                {/* Icon Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="flex-grow space-y-3">
                <h3 className="font-serif text-3xl text-foreground group-hover:text-primary transition-colors duration-500">{calc.title}</h3>
                <p className="text-xs text-foreground/40 leading-relaxed font-medium uppercase tracking-[0.15em] line-clamp-2">
                  {calc.desc}
                </p>
              </div>

              <button className="flex-shrink-0 w-16 h-16 rounded-full glass border-black/5 flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 shadow-2xl relative overflow-hidden group/btn">
                <Zap className="w-6 h-6 fill-current relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculators;
