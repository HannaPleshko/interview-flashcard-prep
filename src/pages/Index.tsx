import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { questionsData, getTechnologyQuestions } from "@/data/questions";
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
  Shuffle,
  Play,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnologiesSection from "@/components/TechnologiesSection";

const Index = () => {
  const navigate = useNavigate();
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

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

  const toggleTechnology = (techId: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(techId) ? prev.filter((id) => id !== techId) : [...prev, techId]
    );
  };

  const generateRandomInterview = () => {
    if (selectedTechnologies.length === 0) {
      alert("Пожалуйста, выберите хотя бы одну технологию");
      return;
    }

    // Собираем по 5-10 вопросов из каждой выбранной технологии
    const randomQuestions: any[] = [];

    selectedTechnologies.forEach((techId) => {
      const techQuestions = getTechnologyQuestions(techId);

      // Перемешиваем вопросы технологии
      const shuffledTechQuestions = [...techQuestions].sort(() => Math.random() - 0.5);

      // Определяем количество вопросов в зависимости от технологии
      let minQuestions, maxQuestions;

      // Популярные технологии - больше вопросов
      if (["javascript", "typescript", "csharp", "angular", "react"].includes(techId)) {
        minQuestions = 20; // минимум 20 вопросов для популярных
        maxQuestions = 30; // максимум 30 вопросов для популярных
      } else {
        minQuestions = 10; // минимум 10 вопросов для всех остальных
        maxQuestions = 15; // максимум 15 вопросов для всех остальных
      }

      // Берем случайное количество вопросов в заданном диапазоне
      let questionsCount;

      if (["javascript", "typescript", "csharp", "angular", "react"].includes(techId)) {
        // Для популярных технологий берем ВСЕ доступные вопросы (минимум 20, если есть)
        questionsCount = Math.max(minQuestions, shuffledTechQuestions.length);
      } else {
        // Для остальных технологий используем обычную логику
        questionsCount = Math.min(
          Math.max(
            minQuestions,
            Math.floor(Math.random() * (maxQuestions - minQuestions + 1)) + minQuestions
          ),
          shuffledTechQuestions.length
        );
      }

      const selectedQuestions = shuffledTechQuestions.slice(0, questionsCount);
      randomQuestions.push(...selectedQuestions);
    });

    // Перемешиваем все выбранные вопросы
    const finalQuestions = randomQuestions.sort(() => Math.random() - 0.5);

    // Сохраняем вопросы в localStorage для страницы практики
    localStorage.setItem("randomInterviewQuestions", JSON.stringify(finalQuestions));
    localStorage.setItem("randomInterviewTechnologies", JSON.stringify(selectedTechnologies));

    // Переходим на страницу практики
    navigate("/practice");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Выберите технологию для проверки знаний
              </h1>
            </div>
          </div>
        </div>

        {/* Random Interview Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Сгенерировать рандомное интервью
            </h2>
            <p className="text-sm text-gray-600">
              Выберите технологии и получите список случайных вопросов из каждой темы для подготовки
              к собеседованию
            </p>
          </div>

          {/* Technology Selection */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {questionsData.map((tech) => {
                const IconComponent = getTechIcon(tech.id);
                const isSelected = selectedTechnologies.includes(tech.id);

                return (
                  <Button
                    key={tech.id}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleTechnology(tech.id)}
                    className={`
                      ${
                        isSelected
                          ? `bg-gradient-to-r ${getTechGradient(tech.id)} text-white border-0 shadow-md`
                          : "bg-transparent border-2 border-gray-300/50 text-gray-700 hover:border-gray-400 hover:bg-gray-100/50 hover:text-gray-700 hover:scale-105 focus:text-gray-700 active:text-gray-700"
                      }
                      rounded-full px-4 py-2 text-sm font-medium
                      transition-all duration-300
                      flex items-center gap-2 backdrop-blur-sm
                      focus:ring-0 focus:ring-offset-0
                    `}
                  >
                    <IconComponent className="h-4 w-4" />
                    {tech.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <Button
              onClick={generateRandomInterview}
              disabled={selectedTechnologies.length === 0}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Shuffle className="h-5 w-5 mr-2" />
              Сгенерировать рандомное интервью
            </Button>
          </div>
        </div>

        {/* Technologies Section */}
        <TechnologiesSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
