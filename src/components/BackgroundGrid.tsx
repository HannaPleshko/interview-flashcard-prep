import React from "react";

const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
      {/* Animated Grid Pattern */}
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          animation: "grid-move 30s linear infinite, grid-pulse 8s ease-in-out infinite",
        }}
      />

      {/* Diagonal Lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              rgba(139, 92, 246, 0.1) 50px,
              rgba(139, 92, 246, 0.1) 51px
            )
          `,
          animation: "diagonal-move 25s linear infinite",
        }}
      />
    </div>
  );
};

export default BackgroundGrid;
