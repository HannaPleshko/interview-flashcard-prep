import React from "react";

const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large Rotating Circles */}
      {[...Array(5)].map((_, index) => (
        <div
          key={`circle-${index}`}
          className="absolute rounded-full border-2 border-purple-400/10 animate-spin-slow"
          style={{
            width: `${200 + index * 100}px`,
            height: `${200 + index * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${20 + index * 10}s`,
            animationDelay: `${index * 2}s`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Floating Triangles */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`triangle-${index}`}
          className="absolute animate-float-triangle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 1.5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          <div
            className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-purple-400/15"
            style={{
              filter: "blur(1px)",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}

      {/* Hexagonal Grid */}
      {[...Array(12)].map((_, index) => (
        <div
          key={`hexagon-${index}`}
          className="absolute animate-pulse-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          <div
            className="w-8 h-8 bg-gradient-to-br from-cyan-400/10 to-purple-400/10"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}

      {/* Squares with rotation */}
      {[...Array(6)].map((_, index) => (
        <div
          key={`square-${index}`}
          className="absolute w-12 h-12 border border-blue-400/20 animate-square-dance"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
            transform: `rotate(${Math.random() * 45}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default GeometricShapes;
