
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Code, Brain, BookOpen, Sparkles } from "lucide-react";
import { questionsData, getTechnologyQuestions } from "@/data/questions";

const Study = () => {
  const { techId } = useParams();
  const navigate = useNavigate();
  const technology = questionsData.find(t => t.id === techId);
  const questions = techId ? getTechnologyQuestions(techId) : [];

  const handleTechnologyChange = (value: string) => {
    if (value === "all") {
      navigate("/study");
    } else {
      navigate(`/study/${value}`);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-400 to-green-600';
      case 'medium': return 'from-yellow-400 to-orange-500';
      case 'hard': return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢 Легкий';
      case 'medium': return '🟡 Средний';
      case 'hard': return '🔴 Сложный';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 glow">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  DevPrep
                </h1>
                <p className="text-xs text-muted-foreground">Готовься к успеху</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/study" className="flex items-center gap-2 px-4 py-2 rounded-lg text-foreground font-medium bg-gradient-to-r from-purple-100 to-blue-100">
                <Brain className="h-4 w-4" />
                Изучение
              </Link>
              <Link to="/practice" className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/50 transition-all duration-300">
                <BookOpen className="h-4 w-4" />
                Практика
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild className="hover:bg-white/50">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад
            </Link>
          </Button>
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-8 w-8 text-purple-500" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Изучение
                </h1>
              </div>
              <p className="text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Изучение теоретических вопросов
              </p>
            </div>
            <div className="ml-auto">
              <Select value={techId || "all"} onValueChange={handleTechnologyChange}>
                <SelectTrigger className="w-[200px] bg-white/60 backdrop-blur-sm border-purple-200 hover:border-purple-400">
                  <SelectValue placeholder="Выберите технологию" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md">
                  <SelectItem value="all">🎯 Все технологии</SelectItem>
                  {questionsData.map((tech) => (
                    <SelectItem key={tech.id} value={tech.id}>
                      {tech.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {!techId ? (
          // All technologies overview
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">📚 Все вопросы по технологиям</h2>
              <p className="text-muted-foreground">Выберите технологию из списка выше или изучайте все подряд</p>
            </div>
            {questionsData.map((tech) => (
              <Card key={tech.id} className="card-hover border-0 bg-white/60 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      {tech.name}
                    </span>
                    <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                      {tech.questions.length} вопросов
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {tech.questions.map((question) => (
                      <Card key={question.id} className="bg-white/50 backdrop-blur-sm border-0 card-hover">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className={`bg-gradient-to-r ${getDifficultyColor(question.difficulty)} text-white text-xs border-0`}>
                                  {getDifficultyText(question.difficulty)}
                                </Badge>
                              </div>
                              <h4 className="font-medium text-foreground mb-2">{question.question}</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">{question.answer}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          // Specific technology questions
          <div className="space-y-6">
            <div className="text-center mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50">
              <h2 className="text-2xl font-bold text-foreground mb-2">{technology?.name}</h2>
              <p className="text-muted-foreground">Изучите {questions.length} вопросов по данной технологии</p>
            </div>
            {questions.map((question, index) => (
              <Card key={question.id} className="card-hover border-0 bg-white/60 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <Badge className={`bg-gradient-to-r ${getDifficultyColor(question.difficulty)} text-white border-0`}>
                          {getDifficultyText(question.difficulty)}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-3">{question.question}</h3>
                      <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400">
                        <p className="text-muted-foreground leading-relaxed">{question.answer}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Study;
