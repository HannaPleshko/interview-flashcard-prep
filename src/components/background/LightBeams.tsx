import React from "react";

const LightBeams = () => {
  return (
    <div className="absolute inset-0">
      {/* Вертикальные световые лучи */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`beam-v-${index}`}
          className="absolute animate-light-beam-v"
          style={{
            width: "2px",
            height: "100%",
            left: `${10 + index * 12}%`,
            background: `linear-gradient(to bottom, 
              transparent 0%, 
              rgba(139, 92, 246, 0.6) 20%, 
              rgba(59, 130, 246, 0.4) 50%, 
              rgba(147, 51, 234, 0.6) 80%, 
              transparent 100%)`,
            filter: "blur(1px)",
            animationDelay: `${index * 2}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Горизонтальные световые лучи */}
      {[...Array(6)].map((_, index) => (
        <div
          key={`beam-h-${index}`}
          className="absolute animate-light-beam-h"
          style={{
            width: "100%",
            height: "2px",
            top: `${15 + index * 15}%`,
            background: `linear-gradient(to right, 
              transparent 0%, 
              rgba(6, 182, 212, 0.5) 30%, 
              rgba(139, 92, 246, 0.6) 50%, 
              rgba(59, 130, 246, 0.5) 70%, 
              transparent 100%)`,
            filter: "blur(1px)",
            animationDelay: `${index * 3}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Диагональные лучи */}
      {[...Array(4)].map((_, index) => (
        <div
          key={`beam-d-${index}`}
          className="absolute animate-diagonal-beam"
          style={{
            width: "150%",
            height: "3px",
            left: "-25%",
            top: `${20 + index * 20}%`,
            transform: "rotate(30deg)",
            background: `linear-gradient(to right, 
              transparent 0%, 
              rgba(147, 51, 234, 0.4) 40%, 
              rgba(139, 92, 246, 0.6) 50%, 
              rgba(6, 182, 212, 0.4) 60%, 
              transparent 100%)`,
            filter: "blur(2px)",
            animationDelay: `${index * 4}s`,
            animationDuration: `${12 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};

export default LightBeams;
