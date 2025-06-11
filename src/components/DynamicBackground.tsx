
import React from "react";
import GradientOrbs from "./background/GradientOrbs";
import AnimatedMesh from "./background/AnimatedMesh";
import FloatingShapes from "./background/FloatingShapes";
import LightBeams from "./background/LightBeams";

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Основной градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100" />
      
      {/* Анимированная сетка */}
      <AnimatedMesh />
      
      {/* Световые лучи */}
      <LightBeams />
      
      {/* Градиентные орбы */}
      <GradientOrbs />
      
      {/* Плавающие фигуры */}
      <FloatingShapes />
      
      {/* Дополнительный градиентный слой */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-50/30 to-violet-100/50" />
    </div>
  );
};

export default DynamicBackground;
