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
      className={index >= 4 ? "animate-fade-in" : ""}
      style={index >= 4 ? { animationDelay: `${(index - 4) * 100}ms` } : undefined}
    >
      <Card 
        className="
          group relative
          bg-white/90 backdrop-blur-md
          border-0
          transition-all duration-200
          hover:scale-[1.01] hover:-translate-y-0.5
          hover:shadow-lg
          shadow-md
          rounded-3xl
          overflow-hidden
        "
      >
        {/* Animated Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
        
        <div className={`
          absolute inset-0 
          bg-gradient-to-br ${tech.gradient}
          opacity-[0.15] group-hover:opacity-[0.2]
          transition-opacity duration-200
          rounded-3xl
        `}></div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <CardHeader className="text-center relative z-10 pt-8">
            <div className={`
              w-24 h-24 
              bg-gradient-to-br ${tech.gradient}
              rounded-[2rem] 
              flex items-center justify-center 
              mx-auto mb-6
              transition-transform duration-200
              group-hover:scale-[1.02]
              shadow-md
              relative
            `}>
              <IconComponent className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {tech.name}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center relative z-10 pb-8">
            <p className="text-gray-600 mb-6 text-sm leading-relaxed h-12">
              {tech.description}
            </p>
            <div className="flex justify-center mb-8">
              <Badge 
                variant="secondary" 
                className={`
                  bg-gradient-to-r ${tech.gradient}
                  text-white border-0 px-4 py-1.5
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
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`
                w-12 h-12
                bg-gradient-to-br ${tech.gradient}
                rounded-2xl
                flex items-center justify-center 
                flex-shrink-0
                transition-transform duration-200
                group-hover:scale-[1.02]
                shadow-md
              `}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div className="flex-grow">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                  {tech.name}
                </CardTitle>
                <Badge 
                  variant="secondary" 
                  className={`
                    bg-gradient-to-r ${tech.gradient}
                    text-white border-0 px-2 py-0.5
                    shadow-sm
                    rounded-full
                    text-xs font-medium
                  `}
                >
                  {techQuestions} вопросов
                </Badge>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {tech.description}
            </p>
            <div className="flex gap-2">
              <Button 
                asChild 
                className={`
                  flex-1 
                  bg-gradient-to-r ${tech.gradient}
                  hover:opacity-90 
                  text-white border-0 
                  text-sm font-medium
                  shadow-sm
                  rounded-lg
                  h-8
                `} 
                size="sm"
              >
                <Link to={`/study/${tech.id}`} className="flex items-center justify-center gap-1.5">
                  <Brain className="h-3.5 w-3.5" />
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
                  shadow-sm
                  rounded-lg
                  h-8
                  hover:border-blue-200
                  hover:text-blue-600
                " 
                size="sm"
              >
                <Link to={`/practice/${tech.id}`} className="flex items-center justify-center gap-1.5">
                  <Target className="h-3.5 w-3.5" />
                  Практика
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TechnologyCard;