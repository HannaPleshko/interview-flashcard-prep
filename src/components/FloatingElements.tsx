
import React from "react";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Geometric Shapes */}
      {[...Array(12)].map((_, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute rounded-full bg-gradient-to-r from-purple-400/10 to-blue-400/10 animate-float-slow`}
          style={{
            width: `${8 + Math.random() * 16}px`,
            height: `${8 + Math.random() * 16}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 1.2}s`,
            animationDuration: `${12 + Math.random() * 8}s`
          }}
        />
      ))}
      
      {/* Glowing Orbs */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`orb-${index}`}
          className={`absolute bg-gradient-radial from-purple-400/5 to-transparent rounded-full blur-xl animate-pulse-slow`}
          style={{
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
      
      {/* Diamond Shapes */}
      {[...Array(6)].map((_, index) => (
        <div
          key={`diamond-${index}`}
          className={`absolute w-3 h-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 transform rotate-45 animate-float-${index % 3 + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${10 + Math.random() * 6}s`
          }}
        />
      ))}
      
      {/* Hexagonal Elements */}
      {[...Array(4)].map((_, index) => (
        <div
          key={`hex-${index}`}
          className="absolute animate-float-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 3}s`,
            animationDuration: `${15 + Math.random() * 5}s`
          }}
        >
          <div className="w-4 h-4 bg-gradient-to-r from-indigo-400/15 to-pink-400/15 transform rotate-12" 
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        </div>
      ))}
      
      {/* Floating Dots Grid */}
      {[...Array(15)].map((_, index) => (
        <div
          key={`dot-${index}`}
          className={`absolute w-1 h-1 bg-violet-400/30 rounded-full animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
