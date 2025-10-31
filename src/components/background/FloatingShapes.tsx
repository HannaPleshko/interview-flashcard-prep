import React from "react";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0">
      {/* Плавающие треугольники */}
      {[...Array(15)].map((_, index) => (
        <div
          key={`triangle-${index}`}
          className="absolute animate-float-triangle-new"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 1.5}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
          }}
        >
          <div
            className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent"
            style={{
              borderBottomColor:
                index % 3 === 0
                  ? "rgba(139, 92, 246, 0.4)"
                  : index % 3 === 1
                    ? "rgba(59, 130, 246, 0.4)"
                    : "rgba(147, 51, 234, 0.4)",
              filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}

      {/* Плавающие ромбы */}
      {[...Array(10)].map((_, index) => (
        <div
          key={`diamond-${index}`}
          className="absolute animate-float-diamond"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${12 + Math.random() * 6}s`,
          }}
        >
          <div
            className="w-8 h-8 transform rotate-45"
            style={{
              background: `linear-gradient(45deg, ${
                index % 4 === 0
                  ? "rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3)"
                  : index % 4 === 1
                    ? "rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3)"
                    : index % 4 === 2
                      ? "rgba(147, 51, 234, 0.3), rgba(139, 92, 246, 0.3)"
                      : "rgba(6, 182, 212, 0.3), rgba(147, 51, 234, 0.3)"
              })`,
              filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))",
            }}
          />
        </div>
      ))}

      {/* Плавающие звезды */}
      {[...Array(20)].map((_, index) => (
        <div
          key={`star-${index}`}
          className="absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        >
          <div
            className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
            style={{
              boxShadow: "0 0 10px rgba(139, 92, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.4)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
