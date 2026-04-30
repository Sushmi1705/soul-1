import { ArrowRight, MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&w=2000&q=80"
          alt="Cosmic sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/50 to-[#1A1A1A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,139,54,0.18),transparent_60%)]" />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8 animate-[fadeIn_1s_ease]">
            <span className="h-px w-16 bg-[#B38B36]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#E5C06A]">
              Vedic Astrology · Vastu · Numerology
            </span>
          </div>

          <h1
            data-testid="hero-headline"
            className="font-serif text-white text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight mb-10"
          >
            Where the universe
            <br />
            <em className="italic font-light text-[#E5C06A]">
              whispers
            </em>{" "}
            its secrets.
          </h1>

          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-12 font-light">
            Soul Karma blends ancient Vedic wisdom with modern intuition —
            guiding you home to yourself through chart readings, vastu harmony,
            and soul-purpose sessions curated by Gitika Sharma.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#services"
              data-testid="hero-book-cta"
              className="group inline-flex items-center gap-3 bg-[#B38B36] hover:bg-[#9A752B] text-white px-8 py-4 rounded-full tracking-[0.15em] uppercase text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20"
            >
              Book a Session
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#courses"
              data-testid="hero-courses-cta"
              className="group inline-flex items-center gap-3 text-white border border-white/30 hover:border-[#E5C06A] hover:text-[#E5C06A] px-8 py-4 rounded-full tracking-[0.15em] uppercase text-xs font-medium transition-all duration-300"
            >
              Explore Courses
              <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl border-t border-white/15 pt-8">
            {[
              { k: "15+", v: "Years of Practice" },
              { k: "5,200+", v: "Souls Guided" },
              { k: "4.9★", v: "Client Rating" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-3xl text-[#E5C06A]">{s.k}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/60 mt-2">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
