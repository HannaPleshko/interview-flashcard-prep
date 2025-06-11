
import React from "react";

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Waves */}
      <svg 
        className="absolute bottom-0 w-full h-64 opacity-10"
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <path 
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" 
          fill="url(#wave-gradient)"
          className="animate-wave-1"
        />
        <path 
          d="M0,80 C300,140 600,20 900,80 C1050,110 1150,50 1200,80 L1200,120 L0,120 Z" 
          fill="url(#wave-gradient)"
          className="animate-wave-2"
          opacity="0.7"
        />
        <path 
          d="M0,100 C300,160 600,40 900,100 C1050,130 1150,70 1200,100 L1200,120 L0,120 Z" 
          fill="url(#wave-gradient)"
          className="animate-wave-3"
          opacity="0.5"
        />
      </svg>

      {/* Code Rain Effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={`code-${i}`}
            className="absolute text-green-400/50 text-xs font-mono animate-code-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {['function()', 'const x =', 'return', 'if(true)', 'async/await', 'console.log'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaveBackground;
