
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Target, LucideIcon } from "lucide-react";

interface Technology {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

interface TechnologyCardProps {
  tech: Technology;
  techQuestions: number;
  index: number;
}

const TechnologyCard = ({ tech, techQuestions, index }: TechnologyCardProps) => {
  const IconComponent = tech.icon;

  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card 
        className="
          group relative
          bg-white/90 backdrop-blur-md
          border-0
          transition-all duration-300
          hover:scale-[1.02] hover:-translate-y-1
          hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
          shadow-md
          rounded-3xl
          overflow-hidden
        "
      >
        {/* Animated Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient-x"></div>
        
        <div className={`
          absolute inset-0 
          bg-gradient-to-br ${tech.gradient}
          opacity-[0.15] group-hover:opacity-[0.25]
          transition-opacity duration-300
          rounded-3xl
        `}></div>
        
        <CardHeader className="text-center relative z-10 pt-8">
          <div className={`
            w-24 h-24 
            bg-gradient-to-br ${tech.gradient}
            rounded-[2rem] 
            flex items-center justify-center 
            mx-auto mb-6
            transition-transform duration-300
            group-hover:scale-105
            shadow-md
            relative
          `}>
            <IconComponent className="h-12 w-12 text-white transition-transform duration-300 group-hover:scale-105" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transition-colors duration-300 group-hover:text-blue-600">
            {tech.name}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="text-center relative z-10 pb-8">
          <p className="text-gray-600 mb-6 text-sm leading-relaxed h-12 transition-colors duration-300 group-hover:text-gray-700">
            {tech.description}
          </p>
          <div className="flex justify-center mb-8">
            <Badge 
              variant="secondary" 
              className={`
                bg-gradient-to-r ${tech.gradient}
                text-white border-0 px-4 py-1.5
                transition-transform duration-300
                group-hover:scale-105
                shadow-sm
                rounded-full
                text-sm font-medium
              `}
            >
              {techQuestions} вопросов
            </Badge>
          </div>
          <div className="flex gap-3 px-4">
            <Button 
              asChild 
              className={`
                flex-1 
                bg-gradient-to-r ${tech.gradient}
                hover:opacity-90 
                text-white border-0 
                text-sm font-medium
                transition-transform duration-300
                group-hover:scale-105
                shadow-sm
                rounded-xl
                h-10
              `} 
              size="sm"
            >
              <Link to={`/study/${tech.id}`} className="flex items-center justify-center gap-2">
                <Brain className="h-4 w-4" />
                Изучение
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="
                flex-1 
                border-2 border-gray-200
                hover:bg-white/50 
                text-sm font-medium
                transition-all duration-300
                group-hover:scale-105
                shadow-sm
                rounded-xl
                h-10
                hover:border-blue-200
                hover:text-blue-600
              " 
              size="sm"
            >
              <Link to={`/practice/${tech.id}`} className="flex items-center justify-center gap-2">
                <Target className="h-4 w-4" />
                Практика
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnologyCard;
