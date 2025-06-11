
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { questionsData } from "@/data/questions";
import TechnologyCard from "./TechnologyCard";
import { technologies } from "@/data/technologies";

const TechnologiesSection = () => {
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  return (
    <section className="py-20 relative">
      {/* Section Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 animate-gradient-x"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            🎯 Выберите технологию для изучения
          </h3>
          <p className="text-base md:text-lg text-muted-foreground">
            Каждая карточка содержит вопросы разного уровня сложности
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {technologies.slice(0, showAllTechnologies ? technologies.length : 4).map((tech, index) => {
            const techQuestions = questionsData.find(t => t.id === tech.id)?.questions.length || 0;
            return (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                techQuestions={techQuestions}
                index={index}
              />
            );
          })}
        </div>
        
        {!showAllTechnologies && technologies.length > 4 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAllTechnologies(true)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 glow-hover"
            >
              Показать все технологии
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologiesSection;
