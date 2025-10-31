import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { questionsData } from "@/data/questions";
import TechnologyCard from "./TechnologyCard";
import {
  Globe,
  Layers,
  Zap,
  Code,
  Shield,
  BookOpen,
  Package,
  Database,
  Server,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface TechnologiesSectionProps {
  title?: string;
  description?: string;
}

const TechnologiesSection = ({ title, description }: TechnologiesSectionProps) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const ITEMS_PER_PAGE = itemsPerPage;

  // Маппинг иконок для технологий
  const getTechIcon = (techId: string) => {
    const iconMap: { [key: string]: any } = {
      html: Globe,
      css: Layers,
      javascript: Zap,
      oop: Package,
      nextjs: Code,
      angular: Code,
      angularjs: Code,
      typescript: Code,
      nodejs: Server,
      sql: Database,
      mongodb: Database,
      security: Shield,
      csharp: Code,
    };
    return iconMap[techId] || BookOpen;
  };

  // Маппинг градиентов для технологий
  const getTechGradient = (techId: string) => {
    const gradientMap: { [key: string]: string } = {
      html: "from-orange-400 to-orange-600",
      css: "from-blue-400 to-blue-600",
      javascript: "from-yellow-400 to-yellow-600",
      oop: "from-green-500 to-green-700",
      nextjs: "from-gray-500 to-gray-700",
      angular: "from-red-500 to-red-700",
      angularjs: "from-red-400 to-red-600",
      typescript: "from-purple-500 to-purple-700",
      nodejs: "from-green-400 to-green-600",
      sql: "from-indigo-500 to-indigo-700",
      mongodb: "from-green-600 to-green-800",
      security: "from-emerald-400 to-emerald-600",
      csharp: "from-blue-600 to-blue-800",
    };
    return gradientMap[techId] || "from-gray-400 to-gray-600";
  };

  // Сброс страницы при изменении количества элементов
  React.useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

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
              onClick={() => navigate(`/practice/${tech.id}`)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`
                    w-12 h-12 rounded-lg bg-gradient-to-r ${gradient}
                    flex items-center justify-center shadow-sm
                  `}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{techQuestions} вопросов</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`
                      px-3 py-1.5 rounded-lg bg-gradient-to-r ${gradient} text-white text-sm font-medium
                      hover:opacity-90 cursor-pointer transition-opacity
                    `}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/study/${tech.id}`);
                  }}
                >
                  Изучение
                </div>
                <div
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/practice/${tech.id}`);
                  }}
                >
                  Практика
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {questionsData.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          {/* Items per page selector - слева */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Показать:</span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => setItemsPerPage(parseInt(value))}
            >
              <SelectTrigger className="w-20 h-8 bg-white/70 border-purple-200 focus:border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200 rounded-lg shadow-xl">
                <SelectItem value="3" className="rounded-md hover:bg-purple-50">
                  3
                </SelectItem>
                <SelectItem value="6" className="rounded-md hover:bg-purple-50">
                  6
                </SelectItem>
                <SelectItem value="9" className="rounded-md hover:bg-purple-50">
                  9
                </SelectItem>
                <SelectItem value="12" className="rounded-md hover:bg-purple-50">
                  12
                </SelectItem>
                <SelectItem value="15" className="rounded-md hover:bg-purple-50">
                  15
                </SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-muted-foreground">элементов</span>
          </div>

          {/* Pagination buttons - справа */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="hover:bg-white/50 border-purple-200 text-purple-700"
              >
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Назад</span>
              </Button>

              <span className="text-muted-foreground font-medium text-sm hidden sm:block">
                Страница {currentPage} из {totalPages}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="hover:bg-white/50 border-purple-200 text-purple-700"
              >
                <span className="hidden sm:inline">Далее</span>
                <ArrowRight className="h-4 w-4 sm:ml-2" />
              </Button>
            </div>
          )}
        </div>
      )}
      {/* </div> */}
    </section>
  );
};

export default TechnologiesSection;
