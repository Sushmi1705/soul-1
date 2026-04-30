import { ArrowUpRight } from "lucide-react";
import { JOURNAL } from "@/data/content";

const Journal = () => {
  return (
    <section
      id="journal"
      data-testid="journal-section"
      className="relative py-24 md:py-36 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#B38B36]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#725D46]">
                Journal
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#1A1A1A] leading-[1.05]">
              Notes from the <em className="italic text-[#B38B36] font-light">cosmos.</em>
            </h2>
          </div>
          <a
            href="#"
            data-testid="journal-view-all"
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#1A1A1A] hover:text-[#B38B36] transition-colors"
          >
            View all writings
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {JOURNAL.map((b) => (
            <article
              key={b.id}
              data-testid={`journal-card-${b.id}`}
              className="group bg-white border border-[#E5E1D8] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(179,139,54,0.25)] hover:border-[#B38B36]/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#F3F1EC]">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#725D46] mb-4">
                  <span>{b.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#B38B36]" />
                  <span>{b.date}</span>
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3 leading-snug group-hover:text-[#B38B36] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed line-clamp-3">
                  {b.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#B38B36]">
                  Read article
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
