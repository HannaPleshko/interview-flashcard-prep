import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Layers, Server, Zap, Sparkles, Brain, Target, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { questionsData } from "@/data/questions";
import React, { useState } from "react";

const technologies = [
  {
    id: "html",
    name: "HTML",
    description: "Структура веб-страниц",
    icon: Globe,
    gradient: "from-orange-400 to-orange-600"
  },
  {
    id: "css",
    name: "CSS",
    description: "Стилизация и дизайн",
    icon: Layers,
    gradient: "from-blue-400 to-blue-600"
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Язык программирования",
    icon: Zap,
    gradient: "from-yellow-400 to-yellow-600"
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Типизированный JavaScript",
    icon: Code,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "react",
    name: "React",
    description: "Библиотека для UI",
    icon: Code,
    gradient: "from-cyan-400 to-cyan-600"
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "Серверный JavaScript",
    icon: Server,
    gradient: "from-green-500 to-green-700"
  },
  {
    id: "sql",
    name: "SQL",
    description: "Работа с базами данных",
    icon: Database,
    gradient: "from-purple-500 to-purple-700"
  },
  {
    id: "testing",
    name: "Тестирование",
    description: "Методы и инструменты тестирования",
    icon: Target,
    gradient: "from-red-400 to-red-600"
  },
  {
    id: "security",
    name: "Безопасность",
    description: "Безопасность веб-приложений",
    icon: Shield,
    gradient: "from-emerald-400 to-emerald-600"
  }
];

const Index = () => {
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center relative overflow-hidden w-full">
          <div className="absolute inset-0 gradient-hero gradient-animated opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
              <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Готовься к собеседованиям
              </h2>
              <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 animate-pulse" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              🚀 Изучай теоретические вопросы по популярным технологиям с помощью интерактивных карточек. 
              Преврати подготовку в увлекательный путь к работе мечты!
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
        </section>

        {/* Technologies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                🎯 Выберите технологию для изучения
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Каждая карточка содержит вопросы разного уровня сложности
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {technologies.slice(0, showAllTechnologies ? technologies.length : 4).map((tech) => {
                const IconComponent = tech.icon;
                const techQuestions = questionsData.find(t => t.id === tech.id)?.questions.length || 0;
                return (
                  <Card 
                    key={tech.id} 
                    className="
                      group relative
                      bg-white/90 backdrop-blur-md
                      border-0
                      transition-all duration-300
                      hover:scale-[1.02] hover:-translate-y-1
                      hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                      shadow-md
                      rounded-3xl
                    "
                  >
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

        {/* Features Section */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero gradient-animated opacity-5" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">✨ Особенности платформы</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="
                p-8 rounded-3xl 
                bg-white/90 backdrop-blur-md
                border-0
                transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                shadow-md
                relative
              ">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Интерактивные карточки</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Изучайте теорию с помощью карточек, которые помогают лучше запоминать материал и готовиться к собеседованиям</p>
              </div>
              <div className="
                p-8 rounded-3xl 
                bg-white/90 backdrop-blur-md
                border-0
                transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                shadow-md
                relative
              ">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Практические задачи</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Решайте реальные задачи с автоматической проверкой кода и мгновенной обратной связью</p>
              </div>
              <div className="
                p-8 rounded-3xl 
                bg-white/90 backdrop-blur-md
                border-0
                transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                shadow-md
                relative
              ">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Разные уровни сложности</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Задачи и вопросы для разработчиков любого уровня: от junior до senior</p>
              </div>
              <div className="
                p-8 rounded-3xl 
                bg-white/90 backdrop-blur-md
                border-0
                transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                shadow-md
                relative
              ">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <Layers className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Современный стек</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Актуальные технологии веб-разработки: от HTML/CSS до React и Node.js</p>
              </div>
              <div className="
                p-8 rounded-3xl 
                bg-white/90 backdrop-blur-md
                border-0
                transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                shadow-md
                relative
              ">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Мгновенная проверка</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Автоматическая проверка решений с подробными тестами и объяснениями ошибок</p>
              </div>
              <div className="
                p-8 rounded-3xl 
                bg-white/90 backdrop-blur-md
                border-0
                transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                shadow-md
                relative
              ">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-400 to-purple-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Удобный интерфейс</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Современный дизайн с адаптивной версткой для комфортного обучения на любых устройствах</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
