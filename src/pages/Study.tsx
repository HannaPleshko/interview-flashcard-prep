
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code } from "lucide-react";
import { questionsData, getTechnologyQuestions } from "@/data/questions";

const Study = () => {
  const { techId } = useParams();
  const technology = questionsData.find(t => t.id === techId);
  const questions = techId ? getTechnologyQuestions(techId) : [];

  if (techId && !technology) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Технология не найдена</h1>
          <Button asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легкий';
      case 'medium': return 'Средний';
      case 'hard': return 'Сложный';
      default: return 'Неизвестно';
    }
  };

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
              <Link to="/study" className="text-foreground font-medium">
                Изучение
              </Link>
              <Link to="/practice" className="text-muted-foreground hover:text-foreground transition-colors">
                Практика
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад
            </Link>
          </Button>
          {technology && (
            <div>
              <h1 className="text-3xl font-bold text-foreground">{technology.name}</h1>
              <p className="text-muted-foreground">Изучение теоретических вопросов</p>
            </div>
          )}
        </div>

        {!techId ? (
          // All technologies overview
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">Все вопросы по технологиям</h2>
            {questionsData.map((tech) => (
              <Card key={tech.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {tech.name}
                    <Badge variant="secondary">{tech.questions.length} вопросов</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tech.questions.map((question) => (
                      <Card key={question.id} className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className={`${getDifficultyColor(question.difficulty)} text-white text-xs`}>
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
            {questions.map((question) => (
              <Card key={question.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={`${getDifficultyColor(question.difficulty)} text-white`}>
                          {getDifficultyText(question.difficulty)}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-3">{question.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{question.answer}</p>
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
