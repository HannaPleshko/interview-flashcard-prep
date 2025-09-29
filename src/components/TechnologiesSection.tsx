import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { questionsData } from "@/data/questions";
import TechnologyCard from "./TechnologyCard";
import { Globe, Layers, Zap, Code, Shield, BookOpen, Package, Database, Server } from "lucide-react";

interface TechnologiesSectionProps {
  title?: string;
  description?: string;
}

const TechnologiesSection = ({ 
  title,
  description
}: TechnologiesSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  
  // Маппинг иконок для технологий
  const getTechIcon = (techId: string) => {
    const iconMap: { [key: string]: any } = {
      'html': Globe,
      'css': Layers,
      'javascript': Zap,
      'oop': Package,
      'nextjs': Code,
      'angular': Code,
      'angularjs': Code,
      'typescript': Code,
      'nodejs': Server,
      'sql': Database,
      'mongodb': Database,
      'security': Shield,
      'csharp': Code
    };
    return iconMap[techId] || BookOpen;
  };
  
  // Маппинг градиентов для технологий
  const getTechGradient = (techId: string) => {
    const gradientMap: { [key: string]: string } = {
      'html': 'from-orange-400 to-orange-600',
      'css': 'from-blue-400 to-blue-600',
      'javascript': 'from-yellow-400 to-yellow-600',
      'oop': 'from-green-500 to-green-700',
      'nextjs': 'from-gray-500 to-gray-700',
      'angular': 'from-red-500 to-red-700',
      'angularjs': 'from-red-400 to-red-600',
      'typescript': 'from-purple-500 to-purple-700',
      'nodejs': 'from-green-400 to-green-600',
      'sql': 'from-indigo-500 to-indigo-700',
      'mongodb': 'from-green-600 to-green-800',
      'security': 'from-emerald-400 to-emerald-600',
      'csharp': 'from-blue-600 to-blue-800'
    };
    return gradientMap[techId] || 'from-gray-400 to-gray-600';
  };
  
  // Пагинация
  const totalPages = Math.ceil(questionsData.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentTechnologies = questionsData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="relative">
      <div className="space-y-3">
          {/* Current Page Technologies */}
          {currentTechnologies.map((tech, index) => {
            const techQuestions = tech.questions.length;
            const IconComponent = getTechIcon(tech.id);
            const gradient = getTechGradient(tech.id);
            
            return (
              <div
                key={tech.id}
                className={`
                  bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md
                  transition-all duration-200 hover:scale-[1.02] cursor-pointer
                  p-4 flex items-center justify-between
                `}
                onClick={() => window.location.href = `/study/${tech.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-lg bg-gradient-to-r ${gradient}
                    flex items-center justify-center shadow-sm
                  `}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{techQuestions} вопросов</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`
                    px-3 py-1.5 rounded-lg bg-gradient-to-r ${gradient} text-white text-sm font-medium
                  `}>
                    Изучение
                  </div>
                  <div 
                    className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/practice/${tech.id}`;
                    }}
                  >
                    Практика
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1"
            >
              ←
            </Button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 ${
                    currentPage === page 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0' 
                      : 'bg-white/70 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1"
            >
              →
            </Button>
          </div>
        )}
      {/* </div> */}
    </section>
  );
};

export default TechnologiesSection;
