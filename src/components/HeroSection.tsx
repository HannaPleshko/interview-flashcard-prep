import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Target } from "lucide-react";
import FeaturesSection from "./FeaturesSection";

interface HeroSectionProps {
  title?: string;
  description?: string;
}

const HeroSection = ({ 
  title = "Готовься к собеседованиям",
  description = "🚀 Изучай теоретические вопросы по популярным технологиям с помощью интерактивных карточек. Преврати подготовку в увлекательный путь к работе мечты!"
}: HeroSectionProps) => {
  return (
    <section className="py-12 md:py-20 text-center relative overflow-hidden w-full">
      <div className="absolute inset-0 gradient-hero gradient-animated opacity-10"></div>
      
      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-200/10 text-xs font-mono animate-binary-fall"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
          <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 animate-pulse" />
        </div>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 glow-hover w-full sm:w-auto">
            <Link to="/study" className="flex items-center justify-center gap-2">
              <Brain className="h-5 w-5" />
              Начать изучение
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 w-full sm:w-auto">
            <Link to="/practice" className="flex items-center justify-center gap-2">
              <Target className="h-5 w-5" />
              Попрактиковаться
            </Link>
          </Button>
        </div>

      </div>
        <FeaturesSection />
    </section>
  );
};

export default HeroSection;
