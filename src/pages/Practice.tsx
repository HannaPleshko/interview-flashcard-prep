import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, RotateCcw, Shuffle, Check, Clock } from "lucide-react";
import { questionsData, getTechnologyQuestions, Question, ProgressStatus } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import confetti from 'canvas-confetti';

type ProgressData = {
  [questionId: string]: ProgressStatus;
};

const Practice = () => {
  const { techId } = useParams();
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState<ProgressData>({});
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const technology = questionsData.find(t => t.id === techId);
  const allQuestions = techId ? getTechnologyQuestions(techId) : [];

  // Загрузка прогресса из localStorage при монтировании компонента
  useEffect(() => {
    const savedProgress = localStorage.getItem("questionProgress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Сохранение прогресса в localStorage при его изменении
  useEffect(() => {
    localStorage.setItem("questionProgress", JSON.stringify(progress));
  }, [progress]);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Start timer when first card is shown
  useEffect(() => {
    if (!showPreview && currentQuestions.length > 0 && !isTimerRunning) {
      setIsTimerRunning(true);
    }
  }, [showPreview, currentQuestions.length]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  const handleProgressChange = (questionId: string, status: ProgressStatus) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      if (newProgress[questionId] === status) {
        delete newProgress[questionId];
      } else {
        newProgress[questionId] = status;
      }
      return newProgress;
    });
  };

  const shuffleQuestions = () => {
    // Берем максимум 15 вопросов
    const limitedQuestions = allQuestions.slice(0, 15);
    const shuffled = [...limitedQuestions].sort(() => Math.random() - 0.5);
    setCurrentQuestions(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowCongratulations(false);
  };

  useEffect(() => {
    if (allQuestions.length > 0) {
      shuffleQuestions();
    }
  }, [techId]);

  useEffect(() => {
    if (showCongratulations) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [showCongratulations]);

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      setShowCongratulations(true);
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
    setShowCongratulations(false);
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
        <div className="container mx-auto px-4 py-8 text-center flex-grow flex items-center justify-center">
          <div className="max-w-md mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Выберите технологию для практики
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Вернитесь на главную страницу, чтобы выбрать технологию
                </p>
              </div>
              <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/">Выбрать технологию</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentIndex];
  const progressPercentage = currentQuestions.length > 0 ? ((currentIndex + 1) / currentQuestions.length) * 100 : 0;

  // Проверяем, все ли карточки отмечены как "изученные"
  const allCardsCompleted = currentQuestions.length > 0 && 
    currentQuestions.every(question => progress[question.id] === 'known');

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {technology?.name}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Практика с карточками</p>
            </div>
          </div>
        </div>

        {showPreview ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Как практиковаться с карточками
                </h2>
                <p className="text-muted-foreground mb-6">
                  Имитируйте реальное собеседование и проверяйте свои знания
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Прочитайте вопрос</h3>
                    <p className="text-muted-foreground">Внимательно изучите вопрос на карточке</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ответьте вслух</h3>
                    <p className="text-muted-foreground">Попробуйте ответить на вопрос, как на реальном собеседовании</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Проверьте ответ</h3>
                    <p className="text-muted-foreground">Нажмите на карточку, чтобы увидеть правильный ответ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Отметьте прогресс</h3>
                    <p className="text-muted-foreground">Оцените свой ответ и отметьте статус изучения</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={() => {
                    setShowPreview(false);
                    setIsTimerRunning(true);
                  }} 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Приступить к практике
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">Вернуться к выбору технологии</Link>
                </Button>
              </div>
            </div>
          </div>
        ) : showCongratulations ? (
          <div className="max-w-3xl mx-auto relative">
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-gentle-bounce">
                <Check className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-fade-in">
                Поздравляем! Вы прошли все вопросы!
              </h3>
              <p className="text-muted-foreground mb-6 text-lg animate-fade-in">
                Хотите повторить или выбрать другую технологию?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
                <Button 
                  onClick={() => {
                    shuffleQuestions();
                    resetTimer();
                    setIsTimerRunning(true);
                  }} 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                >
                  Повторить вопросы
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">Выбрать другую технологию</Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-white/70 border border-purple-200 text-purple-700 hover:bg-white/70">
                  Вопрос {currentIndex + 1} из {currentQuestions.length}
                </Badge>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-purple-100 bg-white/50">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span className="font-medium text-purple-700">{formatTime(timer)}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={shuffleQuestions} 
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 border-0 px-3"
                >
                  <Shuffle className="h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => {
                    resetPractice();
                    resetTimer();
                  }}
                  size="sm"
                  variant="outline"
                  className="bg-white/80 text-purple-700 hover:bg-white border-purple-200 px-3"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <QuestionCard
                question={currentQuestion}
                isFlipped={isFlipped}
                onFlip={() => setIsFlipped(!isFlipped)}
                progressStatus={progress[currentQuestion.id]}
                onProgressChange={(status) => handleProgressChange(currentQuestion.id, status)}
              />
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                onClick={prevQuestion}
                disabled={currentIndex === 0}
                className="w-full sm:w-auto"
              >
                Предыдущий
              </Button>
              <Button 
                onClick={nextQuestion}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              >
                Следующий
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Practice;
