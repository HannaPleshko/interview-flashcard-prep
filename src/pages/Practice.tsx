import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, RotateCcw, Shuffle } from "lucide-react";
import { questionsData, getTechnologyQuestions, Question } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Practice = () => {
  const { techId } = useParams();
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const technology = questionsData.find(t => t.id === techId);
  const allQuestions = techId ? getTechnologyQuestions(techId) : [];

  const shuffleQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setCurrentQuestions(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  useEffect(() => {
    if (allQuestions.length > 0) {
      shuffleQuestions();
    }
  }, [techId]);

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const resetPractice = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  if (techId && !technology) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Технология не найдена</h1>
            <Button asChild>
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!techId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
        <Header />

        <div className="container mx-auto px-4 py-8 text-center flex-grow">
          <h1 className="text-3xl font-bold text-foreground mb-4">Выберите технологию для практики</h1>
          <p className="text-muted-foreground mb-8">Вернитесь на главную страницу, чтобы выбрать технологию</p>
          <Button asChild>
            <Link to="/">Выбрать технологию</Link>
          </Button>
        </div>

        <Footer />
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Назад
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{technology?.name}</h1>
              <p className="text-muted-foreground">Практика с карточками</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={shuffleQuestions}>
              <Shuffle className="h-4 w-4 mr-2" />
              Перемешать
            </Button>
            <Button variant="outline" size="sm" onClick={resetPractice}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Сначала
            </Button>
          </div>
        </div>

        {currentQuestion && (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <Badge variant="secondary">
                Вопрос {currentIndex + 1} из {currentQuestions.length}
              </Badge>
            </div>

            <div className="mb-8">
              <QuestionCard
                question={currentQuestion}
                isFlipped={isFlipped}
                onFlip={() => setIsFlipped(!isFlipped)}
              />
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                onClick={prevQuestion}
                disabled={currentIndex === 0}
              >
                Предыдущий
              </Button>
              <Button 
                onClick={nextQuestion}
                disabled={currentIndex === currentQuestions.length - 1}
              >
                Следующий
              </Button>
            </div>

            {currentIndex === currentQuestions.length - 1 && (
              <div className="text-center mt-8 p-6 bg-primary/5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Поздравляем! Вы прошли все вопросы!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Хотите попрактиковаться еще раз или попробовать другую технологию?
                </p>
                <div className="flex justify-center gap-4">
                  <Button onClick={shuffleQuestions}>
                    Начать заново
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/">Выбрать другую технологию</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Practice;
