import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Layers, Server, Zap, Sparkles, Brain, Target, Flame, BookOpen, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { questionsData } from "@/data/questions";

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center relative overflow-hidden">
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
              Превращай подготовку в увлекательное путешествие к мечтной работе!
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
        <section className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              🎯 Выберите технологию для изучения
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
              Каждая карточка содержит вопросы разного уровня сложности
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              const techQuestions = questionsData.find(t => t.id === tech.id)?.questions.length || 0;
              return (
                <Card key={tech.id} className="card-hover glow-hover border-0 bg-white/60 backdrop-blur-sm overflow-hidden relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <CardHeader className="text-center relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{tech.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{tech.description}</p>
                    <div className="flex justify-center mb-6">
                      <Badge variant="secondary" className={`bg-gradient-to-r ${tech.gradient} text-white border-0 px-3 py-1`}>
                        {techQuestions} вопросов
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button asChild className={`flex-1 bg-gradient-to-r ${tech.gradient} hover:opacity-90 text-white border-0 text-sm`} size="sm">
                        <Link to={`/study/${tech.id}`}>
                          <Brain className="h-4 w-4 mr-1" />
                          Изучение
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 border-2 hover:bg-white/50 text-sm" size="sm">
                        <Link to={`/practice/${tech.id}`}>
                          <Target className="h-4 w-4 mr-1" />
                          Практика
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">✨ Особенности платформы</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Интерактивное обучение</h4>
                <p className="text-muted-foreground text-sm">Карточки с вопросами помогают лучше запоминать материал</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Разные уровни</h4>
                <p className="text-muted-foreground text-sm">Вопросы для junior, middle и senior разработчиков</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Актуальные технологии</h4>
                <p className="text-muted-foreground text-sm">Современный стек технологий для веб-разработки</p>
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
