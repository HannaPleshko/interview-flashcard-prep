
import React from "react";

const AnimatedMesh = () => {
  return (
    <div className="absolute inset-0">
      {/* Основная анимированная сетка */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.4) 2px, transparent 2px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.4) 2px, transparent 2px),
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
          animation: 'mesh-flow 25s linear infinite'
        }}
      />
      
      {/* Дополнительные диагональные линии */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(147, 51, 234, 0.3) 40px,
              rgba(147, 51, 234, 0.3) 42px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 60px,
              rgba(6, 182, 212, 0.2) 60px,
              rgba(6, 182, 212, 0.2) 62px
            )
          `,
          animation: 'diagonal-flow 20s linear infinite'
        }}
      />
      
      {/* Радиальные круги */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, index) => (
          <div
            key={`circle-${index}`}
            className="absolute border-2 rounded-full animate-expand-circle"
            style={{
              width: `${150 + index * 100}px`,
              height: `${150 + index * 100}px`,
              left: `${20 + index * 15}%`,
              top: `${10 + index * 15}%`,
              borderColor: index % 2 === 0 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(59, 130, 246, 0.3)',
              animationDelay: `${index * 3}s`,
              animationDuration: `${15 + index * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedMesh;
