import React from "react";
import BackgroundGrid from "./BackgroundGrid";
import GeometricShapes from "./GeometricShapes";
import ParticleField from "./ParticleField";
import WaveBackground from "./WaveBackground";

const FloatingElements = () => {
  return (
    <>
      <BackgroundGrid />
      <GeometricShapes />
      <ParticleField />
      <WaveBackground />

      {/* Original simple floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Simple Orbs */}
        {[...Array(6)].map((_, index) => (
          <div
            key={`simple-orb-${index}`}
            className="absolute bg-gradient-radial from-purple-400/10 to-transparent rounded-full blur-xl animate-pulse-slow"
            style={{
              width: `${80 + Math.random() * 40}px`,
              height: `${80 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingElements;
