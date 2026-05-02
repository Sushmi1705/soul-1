import React from 'react';
import { ZODIAC_SIGNS } from "@/data/content";

const ZodiacSigns = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="horoscopes">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-6 tracking-tight">
            Daily <span className="italic font-light text-primary text-glow-light">Horoscopes</span>
          </h2>
          <p className="text-foreground/40 tracking-[0.4em] uppercase text-[10px] font-black">
            Ancient Wisdom for Modern Seekers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4">
          {ZODIAC_SIGNS.map((sign, i) => (
            <div
              key={sign.id}
              className="group glass-card p-10 rounded-[4rem] text-center hover:-translate-y-4 transition-all duration-700 cursor-pointer shadow-2xl shadow-primary/5 border-white animate-float relative overflow-hidden"
              style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${6 + i % 3}s` }}
            >
              {/* Animated Background Shimmer for Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="mb-8 relative flex justify-center">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000 opacity-0 group-hover:opacity-100" />
                <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                  <img
                    src={sign.image}
                    alt={sign.name}
                    className="w-20 h-20 relative z-10 transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 group-hover:brightness-110 drop-shadow-2xl"
                  />
                  {/* Icon Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-500 mb-2">
                {sign.name}
              </h3>
              <p className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-black">
                {sign.dates}
              </p>
              
              <div className="mt-8 h-px w-8 bg-primary/20 group-hover:w-16 transition-all duration-700 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacSigns;
