import React from 'react';

const StatsBar = () => {
  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Reports Added", value: "4500" },
    { label: "Personal Alerts", value: "1200+" },
    { label: "Happy Customers", value: "20k" },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-[#F9F7F2]">
      {/* Light Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #B38B36 0%, #FDFBF7 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#B38B36] font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
