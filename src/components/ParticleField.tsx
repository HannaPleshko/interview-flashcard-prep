
import React from "react";

const ParticleField = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Glowing Particles */}
      {[...Array(25)].map((_, index) => (
        <div
          key={`particle-${index}`}
          className="absolute rounded-full bg-gradient-radial from-purple-400/20 to-transparent animate-particle-float"
          style={{
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
          }}
        />
      ))}

      {/* Constellation Lines */}
      {[...Array(15)].map((_, index) => (
        <div
          key={`line-${index}`}
          className="absolute bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-constellation"
          style={{
            width: `${50 + Math.random() * 150}px`,
            height: '1px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${6 + Math.random() * 6}s`
          }}
        />
      ))}

      {/* Energy Orbs */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`orb-${index}`}
          className="absolute rounded-full bg-gradient-conic from-purple-400/20 via-blue-400/20 to-cyan-400/20 animate-energy-pulse"
          style={{
            width: `${30 + Math.random() * 50}px`,
            height: `${30 + Math.random() * 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 1.2}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            filter: 'blur(8px)'
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
