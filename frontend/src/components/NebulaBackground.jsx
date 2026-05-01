import React from 'react';

const NebulaBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#05050A]">
      {/* Primary Nebula */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #B38B36 0%, transparent 70%)' }}
      />
      
      {/* Secondary Nebula */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-[0.05] blur-[150px]"
        style={{ background: 'radial-gradient(circle, #4C1D95 0%, transparent 70%)' }}
      />

      {/* Mid-screen Accent */}
      <div 
        className="absolute top-[40%] right-[20%] w-[40%] h-[40%] rounded-full opacity-[0.03] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #B38B36 0%, transparent 70%)' }}
      />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default NebulaBackground;
