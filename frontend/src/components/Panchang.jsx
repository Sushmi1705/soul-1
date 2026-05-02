import { MapPin, RefreshCw, Sparkles, ChevronRight } from "lucide-react";

const Panchang = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]" id="panchang">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-5xl text-[#3C2A21] mb-6 leading-tight">
              Today's Panchang
            </h2>
            <p className="text-[#725D46] mb-8 leading-relaxed max-w-lg">
              Visualize the day's energy. The chart highlights <span className="font-bold text-[#3C2A21]">Rahu Kaal</span> (avoid) and <span className="font-bold text-[#3C2A21]">Abhijit Muhurat</span> (best time).
            </p>

            <div className="inline-flex items-center gap-2 bg-[#E5C06A]/20 px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold text-[#8A5A1B] mb-10">
              Panchang for New Delhi
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-[#FFFBF0] to-[#FBF6EC] border border-[#E5E1D8] p-8 rounded-2xl mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <Sparkles className="w-full h-full text-[#B38B36]" />
              </div>
              
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#725D46] mb-4 font-bold">
                Current Status
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-green-700">Auspicious (Shubh)</h3>
                  <p className="text-xs text-green-600/80 tracking-wide font-medium">Good for important activities</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1 min-w-[180px] relative">
                <select className="w-full bg-white border border-[#E5E1D8] px-4 py-3 rounded-lg text-sm text-[#3C2A21] appearance-none focus:outline-none focus:border-[#B38B36] transition-colors">
                  <option>New Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                  <option>London</option>
                  <option>New York</option>
                </select>
                <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B38B36]" />
              </div>
              <button className="flex items-center gap-2 bg-[#FBF6EC] border border-[#E5E1D8] px-6 py-3 rounded-lg text-sm text-[#3C2A21] hover:bg-white transition-colors">
                <RefreshCw className="w-4 h-4" />
                Refresh Data
              </button>
            </div>

            <button className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase font-bold text-[#3C2A21] border-b border-[#3C2A21]/20 pb-1 hover:text-[#B38B36] hover:border-[#B38B36] transition-all">
              View more
            </button>
          </div>

          {/* Right Content - Visualizer */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-square bg-[#FDFBF7] border border-[#E5E1D8] rounded-2xl p-12 flex flex-col items-center justify-center shadow-sm">
              {/* Simple SVG Donut Chart */}
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Background Circle */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E1D8" strokeWidth="12" />
                
                {/* Night Time Segment (45%) */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1E293B" strokeWidth="14" strokeDasharray="113.1 251.3" />
                
                {/* Day Time Segment (55%) */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E67E22" strokeWidth="14" strokeDasharray="138.2 251.3" strokeDashoffset="-113.1" />
                
                {/* Rahu Kaal Highlight (7%) */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#C2410C" strokeWidth="16" strokeDasharray="17.6 251.3" strokeDashoffset="-150" />
                
                {/* Abhijit Highlight (4%) */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#84CC16" strokeWidth="16" strokeDasharray="10 251.3" strokeDashoffset="-120" />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#725D46] mb-1">Now in</div>
                <div className="font-serif text-2xl text-[#3C2A21]">New Delhi</div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-y-2 text-[9px] tracking-[0.15em] uppercase font-bold text-[#725D46]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
                  Day Time (55%)
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E293B]" />
                  Night Time (45%)
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C2410C]" />
                  Rahu Kaal (7%)
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
                  Abhijit (4%)
                </div>
              </div>

              {/* Decorative notches */}
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-8 bg-[#FDFBF7] border-y border-r border-[#E5E1D8] rounded-r-full" />
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-8 bg-[#FDFBF7] border-y border-l border-[#E5E1D8] rounded-l-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panchang;
