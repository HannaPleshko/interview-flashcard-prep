
import React from "react";

const GradientOrbs = () => {
  return (
    <div className="absolute inset-0">
      {/* Большие светящиеся орбы */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`orb-${index}`}
          className="absolute rounded-full animate-float-orb"
          style={{
            width: `${120 + Math.random() * 80}px`,
            height: `${120 + Math.random() * 80}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              index % 4 === 0 ? 'rgba(139, 92, 246, 0.3)' :
              index % 4 === 1 ? 'rgba(59, 130, 246, 0.3)' :
              index % 4 === 2 ? 'rgba(147, 51, 234, 0.3)' :
              'rgba(6, 182, 212, 0.3)'
            } 0%, transparent 70%)`,
            filter: 'blur(20px)',
            animationDelay: `${index * 2}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
      
      {/* Средние пульсирующие орбы */}
      {[...Array(12)].map((_, index) => (
        <div
          key={`pulse-orb-${index}`}
          className="absolute rounded-full animate-pulse-orb"
          style={{
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `conic-gradient(from ${Math.random() * 360}deg, 
              rgba(139, 92, 246, 0.4), 
              rgba(59, 130, 246, 0.4), 
              rgba(147, 51, 234, 0.4), 
              rgba(139, 92, 246, 0.4))`,
            filter: 'blur(15px)',
            animationDelay: `${index * 1.5}s`,
            animationDuration: `${6 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default GradientOrbs;
