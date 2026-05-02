import React, { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 20}s`,
      size: `${Math.random() * 3 + 1}px`,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-stardust"
          style={{
            '--duration': p.duration,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            opacity: p.opacity,
            background: `rgba(99, 102, 241, ${p.opacity})`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
