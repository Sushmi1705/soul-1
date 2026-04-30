import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

const Testimonials = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const active = TESTIMONIALS[idx];

  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 md:py-36 bg-[#F3F1EC]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10 bg-[#B38B36]" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#725D46]">
            Testimonials
          </span>
          <span className="h-px w-10 bg-[#B38B36]" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] mb-14">
          From the hearts of our <em className="italic text-[#B38B36]">seekers.</em>
        </h2>

        <div className="relative">
          <Quote className="w-12 h-12 text-[#B38B36]/30 mx-auto mb-8" />

          <p
            data-testid="testimonial-quote"
            key={active.id}
            className="font-serif italic text-2xl sm:text-3xl leading-relaxed text-[#2A2A2A] max-w-3xl mx-auto mb-12 animate-[fade_0.6s_ease]"
          >
            “{active.quote}”
          </p>

          <div className="flex flex-col items-center">
            <img
              src={active.image}
              alt={active.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#B38B36] mb-3"
            />
            <div className="font-serif text-lg text-[#1A1A1A]">{active.name}</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#725D46] mt-1">
              Verified Client
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              data-testid="testimonial-prev"
              onClick={() =>
                setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              className="w-10 h-10 rounded-full border border-[#E5E1D8] flex items-center justify-center hover:border-[#B38B36] hover:text-[#B38B36] transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2 px-3">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  data-testid={`testimonial-dot-${i}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === idx ? "w-8 bg-[#B38B36]" : "w-1.5 bg-[#D4CFC2]"
                  }`}
                />
              ))}
            </div>
            <button
              data-testid="testimonial-next"
              onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-[#E5E1D8] flex items-center justify-center hover:border-[#B38B36] hover:text-[#B38B36] transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
