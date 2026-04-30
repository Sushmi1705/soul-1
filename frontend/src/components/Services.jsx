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
      className="relative py-24 md:py-36 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#B38B36]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#725D46]">
                Our Services
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A] leading-[1.05] max-w-2xl">
              Consultations crafted for your{" "}
              <em className="italic text-[#B38B36] font-light">becoming.</em>
            </h2>
          </div>
          <p className="text-[#5C5C5C] max-w-md leading-relaxed">
            Select a service to view available dates and time slots. Every
            session is a private, one-to-one sitting with Gitika — either over
            video call or in-person at our Delhi studio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <article
              key={s.id}
              data-testid={`service-card-${s.id}`}
              className="group relative bg-white border border-[#E5E1D8] rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(179,139,54,0.35)] hover:border-[#B38B36]/40"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F1EC]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 text-[10px] tracking-[0.25em] uppercase bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[#725D46] border border-[#E5E1D8]">
                  {s.duration}
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed mb-6 flex-1">
                  {s.desc}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-[#E5E1D8]">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#725D46]">
                      Starting from
                    </div>
                    <div className="font-serif text-xl text-[#1A1A1A]">
                      {formatINR(s.price)}
                    </div>
                  </div>
                  <button
                    data-testid={`book-service-${s.id}`}
                    onClick={() => setSelected(s)}
                    className="group/btn inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#B38B36] text-white text-xs tracking-[0.2em] uppercase px-5 py-3 rounded-full transition-all duration-300"
                  >
                    <CalendarClock className="w-3.5 h-3.5" />
                    Book
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
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
