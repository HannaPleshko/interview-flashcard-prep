
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Layers, Server, Zap } from "lucide-react";

const technologies = [
  {
    id: "html",
    name: "HTML",
    description: "Структура веб-страниц",
    icon: Globe,
    color: "bg-orange-500",
    questions: 25
  },
  {
    id: "css",
    name: "CSS",
    description: "Стилизация и дизайн",
    icon: Layers,
    color: "bg-blue-500",
    questions: 30
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Язык программирования",
    icon: Zap,
    color: "bg-yellow-500",
    questions: 45
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Типизированный JavaScript",
    icon: Code,
    color: "bg-blue-600",
    questions: 20
  },
  {
    id: "react",
    name: "React",
    description: "Библиотека для UI",
    icon: Code,
    color: "bg-cyan-500",
    questions: 35
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "Серверный JavaScript",
    icon: Server,
    color: "bg-green-600",
    questions: 28
  },
  {
    id: "sql",
    name: "SQL",
    description: "Работа с базами данных",
    icon: Database,
    color: "bg-purple-600",
    questions: 22
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">DevPrep</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/study" className="text-muted-foreground hover:text-foreground transition-colors">
                Изучение
              </Link>
              <Link to="/practice" className="text-muted-foreground hover:text-foreground transition-colors">
                Практика
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Готовься к собеседованиям эффективно
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Изучай теоретические вопросы по популярным технологиям с помощью интерактивных карточек
          </p>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Выберите технологию для изучения
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <Card key={tech.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{tech.description}</p>
                    <Badge variant="secondary" className="mb-4">
                      {tech.questions} вопросов
                    </Badge>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1" size="sm">
                        <Link to={`/study/${tech.id}`}>Изучение</Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1" size="sm">
                        <Link to={`/practice/${tech.id}`}>Практика</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
