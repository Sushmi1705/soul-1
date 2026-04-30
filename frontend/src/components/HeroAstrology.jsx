import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Moon, Star } from "lucide-react";

const HeroAstrology = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slightly slower for a more mystical feel
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05050A]"
    >
      {/* Video Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/80 via-transparent to-[#05050A] z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          {/* Placeholder high-quality astrology video */}
          <source 
            src="https://cdn.pixabay.com/vimeo/452333230/stars-48358.mp4?width=1280&hash=85045a5704b2b1a8f9c6d3d9d6e8d1a3c0e5a8d1" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Twinkling Stars Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      {/* Floating Celestial Elements */}
      <div className="absolute top-20 left-[10%] z-10 animate-bounce-slow opacity-20">
        <Moon className="w-12 h-12 text-[#B38B36]" />
      </div>
      <div className="absolute bottom-40 right-[15%] z-10 animate-pulse opacity-30">
        <Star className="w-8 h-8 text-[#B38B36]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-[#B38B36]/30 bg-[#B38B36]/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-[#B38B36]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#B38B36] font-medium">
            Cosmic Wisdom · Vedic Insight · Soul Purpose
          </span>
        </div>

        <h1 className="font-serif text-[#FAFAFA] text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
          Written in the <br />
          <span className="italic font-light text-[#B38B36] bg-clip-text text-transparent bg-gradient-to-r from-[#B38B36] via-[#D4AF37] to-[#B38B36]">
            Stars.
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light tracking-wide">
          Unlock the celestial blueprint of your life. Soul Karma bridges the gap between 
          the cosmic dance and your earthly journey through Gitika Sharma's expert guidance.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#services"
            className="group relative inline-flex items-center gap-3 bg-[#B38B36] hover:bg-[#9A752B] text-white px-10 py-5 rounded-full tracking-[0.2em] uppercase text-xs font-semibold transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Begin Your Journey</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
          
          <a
            href="#courses"
            className="group inline-flex items-center gap-3 text-white/90 border border-white/20 hover:border-[#B38B36] hover:text-[#B38B36] backdrop-blur-md px-10 py-5 rounded-full tracking-[0.2em] uppercase text-xs font-semibold transition-all duration-300"
          >
            Learn the Art
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-[#B38B36] to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#B38B36]">Explore</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroAstrology;
