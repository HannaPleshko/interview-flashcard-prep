import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Layers, Server, Zap, Sparkles, Brain, Target, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { questionsData } from "@/data/questions";
import React, { useState, useEffect } from "react";

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

const codeSnippets = [
  "const hello = 'world';",
  "function() { return true; }",
  "import React from 'react';",
  "SELECT * FROM users;",
  "<div className='container'>",
  "npm install package",
  "git commit -m 'fix'",
  "async/await pattern",
  "useState hook",
  "API endpoint"
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className={`absolute text-xs font-mono text-purple-300/20 animate-float-${index % 3 + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {snippet}
        </div>
      ))}
      
      {/* Geometric Shapes */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full animate-float-slow`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 1.2}s`,
            animationDuration: `${12 + Math.random() * 8}s`
          }}
        />
      ))}
      
      {/* Glowing Orbs */}
      {[...Array(5)].map((_, index) => (
        <div
          key={`orb-${index}`}
          className={`absolute w-20 h-20 bg-gradient-radial from-purple-400/5 to-transparent rounded-full blur-xl animate-pulse-slow`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col relative overflow-hidden">
      <FloatingElements />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      <Header />

      <div className="flex-grow relative z-10">
        {/* Hero Section */}
        <AnimatedSection delay={200}>
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
        </AnimatedSection>

        {/* Technologies Grid */}
        <AnimatedSection delay={400}>
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
                  const IconComponent = tech.icon;
                  const techQuestions = questionsData.find(t => t.id === tech.id)?.questions.length || 0;
                  return (
                    <div
                      key={tech.id}
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
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection delay={600}>
          <section className="py-12 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 gradient-hero gradient-animated opacity-5" />
            
            {/* Floating Tech Icons */}
            <div className="absolute inset-0 overflow-hidden">
              {[Code, Database, Globe, Layers, Server, Zap].map((Icon, index) => (
                <Icon
                  key={index}
                  className={`absolute text-purple-200/10 w-8 h-8 animate-float-${(index % 3) + 1}`}
                  style={{
                    left: `${10 + (index * 15)}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${index * 2}s`,
                    animationDuration: `${8 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">✨ Особенности платформы</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Brain,
                    title: "Интерактивные карточки",
                    description: "Изучайте теорию с помощью карточек, которые помогают лучше запоминать материал и готовиться к собеседованиям",
                    gradient: "from-green-400 to-blue-500"
                  },
                  {
                    icon: Code,
                    title: "Практические задачи",
                    description: "Решайте реальные задачи с автоматической проверкой кода и мгновенной обратной связью",
                    gradient: "from-purple-400 to-pink-500"
                  },
                  {
                    icon: Target,
                    title: "Разные уровни сложности",
                    description: "Задачи и вопросы для разработчиков любого уровня: от junior до senior",
                    gradient: "from-orange-400 to-red-500"
                  },
                  {
                    icon: Layers,
                    title: "Современный стек",
                    description: "Актуальные технологии веб-разработки: от HTML/CSS до React и Node.js",
                    gradient: "from-blue-400 to-indigo-500"
                  },
                  {
                    icon: Zap,
                    title: "Мгновенная проверка",
                    description: "Автоматическая проверка решений с подробными тестами и объяснениями ошибок",
                    gradient: "from-emerald-400 to-teal-500"
                  },
                  {
                    icon: Sparkles,
                    title: "Удобный интерфейс",
                    description: "Современный дизайн с адаптивной версткой для комфортного обучения на любых устройствах",
                    gradient: "from-violet-400 to-purple-500"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="
                      p-8 rounded-3xl 
                      bg-white/90 backdrop-blur-md
                      border-0
                      transition-all duration-300
                      hover:scale-[1.02] hover:-translate-y-1
                      hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                      shadow-md
                      relative
                      group
                      animate-fade-in
                    "
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Hover Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-[2rem] flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
