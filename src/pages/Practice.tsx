import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Code, RotateCcw, Shuffle, Check, Clock, ChevronDown, ChevronRight } from "lucide-react";
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
  const [hiddenTopics, setHiddenTopics] = useState<Set<string>>(new Set());

  const technology = questionsData.find(t => t.id === techId);
  
  // Проверяем, есть ли рандомные вопросы в localStorage (только если нет techId)
  const randomQuestions = !techId ? localStorage.getItem('randomInterviewQuestions') : null;
  const randomTechnologies = !techId ? localStorage.getItem('randomInterviewTechnologies') : null;
  
  const allQuestions = randomQuestions 
    ? JSON.parse(randomQuestions)
    : techId ? getTechnologyQuestions(techId) : [];

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
    // Для рандомного интервью берем все вопросы, для обычной практики - максимум 15
    const limitedQuestions = randomQuestions ? allQuestions : allQuestions.slice(0, 15);
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

  const currentQuestion = currentQuestions[currentIndex];
  const progressPercentage = currentQuestions.length > 0 ? ((currentIndex + 1) / currentQuestions.length) * 100 : 0;

  // Проверяем, все ли карточки отмечены как "изученные"
  const allCardsCompleted = currentQuestions.length > 0 && 
    currentQuestions.every(question => progress[question.id] === 'known');

  // Функция для переключения видимости темы
  const toggleTopicVisibility = (techId: string) => {
    setHiddenTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(techId)) {
        newSet.delete(techId);
      } else {
        newSet.add(techId);
      }
      return newSet;
    });
  };

  // Функция для генерации нового интервью
  const generateNewInterview = () => {
    if (!randomTechnologies) return;
    
    const selectedTechIds = JSON.parse(randomTechnologies);
    const newRandomQuestions: any[] = [];
    
    selectedTechIds.forEach((techId: string) => {
      const techQuestions = getTechnologyQuestions(techId);
      
      // Перемешиваем вопросы технологии
      const shuffledTechQuestions = [...techQuestions].sort(() => Math.random() - 0.5);
      
      // Определяем количество вопросов в зависимости от технологии
      let minQuestions, maxQuestions;
      
      // Популярные технологии - больше вопросов
      if (['javascript', 'typescript', 'csharp', 'angular', 'react'].includes(techId)) {
        minQuestions = 20; // минимум 20 вопросов для популярных
        maxQuestions = 30; // максимум 30 вопросов для популярных
      } else {
        minQuestions = 10;  // минимум 10 вопросов для всех остальных
        maxQuestions = 15; // максимум 15 вопросов для всех остальных
      }
      
      // Берем случайное количество вопросов в заданном диапазоне
      const questionsCount = Math.min(
        Math.max(minQuestions, Math.floor(Math.random() * (maxQuestions - minQuestions + 1)) + minQuestions),
        shuffledTechQuestions.length
      );
      
      const selectedQuestions = shuffledTechQuestions.slice(0, questionsCount);
      newRandomQuestions.push(...selectedQuestions);
    });

    // Перемешиваем все выбранные вопросы
    const finalQuestions = newRandomQuestions.sort(() => Math.random() - 0.5);

    // Обновляем localStorage
    localStorage.setItem('randomInterviewQuestions', JSON.stringify(finalQuestions));
    
    // Обновляем состояние компонента
    setCurrentQuestions(finalQuestions);
    setHiddenTopics(new Set()); // Сбрасываем скрытые темы
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {randomQuestions ? 'Имитация технического интервью' : technology?.name}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                {randomQuestions 
                  ? `Подготовка к собеседованию с ${allQuestions.length} вопросами по ${randomTechnologies ? JSON.parse(randomTechnologies).length : 0} технологиям`
                  : 'Практика с карточками'
                }
              </p>
              {randomQuestions && (
                <p className="text-xs text-gray-500 mt-1">
                  💡 Нажмите на название темы, чтобы развернуть/свернуть вопросы
                </p>
              )}
            </div>
          </div>
        </div>

        {showPreview && !randomQuestions ? (
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
                  <Link to="/allpractice">Вернуться к выбору технологии</Link>
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
                  <Link to="/allpractice">Выбрать другую технологию</Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {!randomQuestions && (
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
            )}

            {randomQuestions ? (
              // Список вопросов для рандомного интервью с темами в 1 колонку
              <div className="w-full">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  {/* Приветствие интервьюера */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        👋
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Добро пожаловать на интервью!</h3>
                        <div className="text-gray-700 leading-relaxed space-y-3">
                          <p>
                            Добрый день! Меня зовут Анна, я представляю компанию <strong>HSchool</strong>. 
                            Спасибо, что нашли время для встречи с нами сегодня.
                          </p>
                          <p>
                            Я вижу, что у вас интересный опыт в разработке. Мне очень любопытно узнать больше о ваших проектах 
                            и том, как вы подходите к решению технических задач.
                          </p>
                          <p>
                            Не волнуйтесь, это будет неформальная беседа. Я хочу понять, как вы мыслите, 
                            какие у вас есть сильные стороны, и как вы видите свое развитие в нашей команде.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {(() => {
                    const selectedTechIds = randomTechnologies ? JSON.parse(randomTechnologies) : [];
                    const techNames: { [key: string]: string } = {};
                    selectedTechIds.forEach((techId: string) => {
                      const tech = questionsData.find(t => t.id === techId);
                      if (tech) {
                        techNames[techId] = tech.name;
                      }
                    });

                    // Группируем вопросы по технологиям, используя информацию о том, из какой технологии взят вопрос
                    const questionsByTech: { [key: string]: any[] } = {};
                    
                    // Для каждого вопроса определяем его технологию, проверяя в каких технологиях он встречается
                    currentQuestions.forEach(question => {
                      let questionTechId = 'unknown';
                      
                      // Ищем в какой из выбранных технологий находится этот вопрос
                      for (const techId of selectedTechIds) {
                        const tech = questionsData.find(t => t.id === techId);
                        if (tech && tech.questions.some(q => q.id === question.id)) {
                          questionTechId = techId;
                          break;
                        }
                      }
                      
                      if (!questionsByTech[questionTechId]) {
                        questionsByTech[questionTechId] = [];
                      }
                      questionsByTech[questionTechId].push(question);
                    });

                    // Сортируем технологии в логическом порядке: сначала общие, потом английский, затем технические
                    const sortedTechs = Object.entries(questionsByTech).sort(([a], [b]) => {
                      // Приоритет 1: общие вопросы о кандидате
                      if (a === 'candidate_general_questions_answers') return -1;
                      if (b === 'candidate_general_questions_answers') return 1;
                      
                      // Приоритет 2: вопросы на английском (Questions for English)
                      if (a === 'english_language_assessment_questions_full') return -1;
                      if (b === 'english_language_assessment_questions_full') return 1;
                      
                      // Остальные технические вопросы в алфавитном порядке
                      return a.localeCompare(b);
                    });

                    return (
                      <div className="space-y-8">
                        {sortedTechs.map(([techId, questions], techIndex) => {
                          const isHidden = hiddenTopics.has(techId);
                          const isGeneral = techId === 'candidate_general_questions_answers';
                          const isEnglish = techId === 'english_language_assessment_questions_full';
                          
                          return (
                            <div key={techId} className="space-y-6">
                              {/* Введение для каждой секции */}
                              {isGeneral && (
                                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-400">
                                  <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                      💬
                                    </div>
                                    <div>
                                      <h4 className="text-base font-semibold text-gray-800 mb-3">Давайте сначала познакомимся</h4>
                                      <div className="text-gray-700 space-y-3">
                                        <p>
                                          Отлично! Давайте начнем с того, что я бы хотел узнать о вас немного больше. 
                                          Расскажите, пожалуйста, о своем опыте в разработке.
                                        </p>
                                        <p>
                                          Меня интересует не только то, какие технологии вы используете, но и то, 
                                          как вы подходите к решению задач, что вас мотивирует в работе, 
                                          и какие проекты были для вас наиболее интересными.
                                        </p>
                                        <p className="text-sm text-gray-600 italic">
                                          "Не стесняйтесь рассказывать подробности - мне важно понять ваш стиль работы и мышления."
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Специальный вопрос 0 для общих вопросов */}
                              {isGeneral && (
                                <div className="ml-11 mb-6">
                                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                      0
                                    </div>
                                    <div className="flex-grow min-w-0">
                                      <p className="text-base text-gray-800 font-semibold leading-relaxed">
                                        Расскажите о себе и своем технологическом стеке
                                      </p>
                                      <p className="text-sm text-gray-600 mt-2 italic">
                                        "Начните с краткого рассказа о себе, вашем опыте и технологиях, с которыми вы работаете"
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {isEnglish && (
                                <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-l-4 border-orange-400">
                                  <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                      🌍
                                    </div>
                                    <div>
                                      <h4 className="text-base font-semibold text-gray-800 mb-3">Проверим ваш английский</h4>
                                      <div className="text-gray-700 space-y-3">
                                        <p>
                                          Отлично! Теперь я бы хотел проверить ваш уровень английского языка. 
                                          Не против ли вы, если мы немного пообщаемся на английском?
                                        </p>
                                        <p>
                                          В нашей команде много международных проектов, и нам часто приходится 
                                          общаться с зарубежными коллегами, читать документацию на английском, 
                                          и участвовать в видеоконференциях.
                                        </p>
                                        <p className="text-sm text-gray-600 italic">
                                          "Не волнуйтесь, если что-то не понятно - можете переспросить или попросить повторить."
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {!isGeneral && !isEnglish && (
                                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-400">
                                  <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                      🎯
                                    </div>
                                    <div>
                                      <h4 className="text-base font-semibold text-gray-800 mb-3">Технические вопросы</h4>
                                      <div className="text-gray-700 space-y-3">
                                        <p>
                                          Отлично! Теперь давайте перейдем к техническим вопросам. 
                                          Я хочу проверить ваши знания в области <strong>{techNames[techId] || techId.toUpperCase()}</strong>.
                                        </p>
                                        <p>
                                          Не переживайте, если не знаете ответ на какой-то вопрос - 
                                          мне важно понять, как вы мыслите и подходите к решению задач. 
                                          Можете рассуждать вслух, это даже лучше!
                                        </p>
                                        <p className="text-sm text-gray-600 italic">
                                          "Если что-то не ясно, не стесняйтесь задавать уточняющие вопросы."
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Заголовок секции с вопросами */}
                              <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  {techIndex + 1}
                                </div>
                                <div className="flex-1">
                                  <div 
                                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                                    onClick={() => toggleTopicVisibility(techId)}
                                  >
                                    {isHidden ? (
                                      <ChevronRight className="h-4 w-4 text-gray-500" />
                                    ) : (
                                      <ChevronDown className="h-4 w-4 text-gray-500" />
                                    )}
                                    <div className="flex-1">
                                      <h4 className="text-lg font-semibold text-gray-800">
                                        {isGeneral 
                                          ? "Общие вопросы о кандидате" 
                                          : isEnglish 
                                          ? "Вопросы на английском языке"
                                          : `Технические вопросы: ${techNames[techId] || techId.toUpperCase()}`
                                        }
                                      </h4>
                                      <p className="text-sm text-gray-600 mt-1">
                                        {isGeneral 
                                          ? "Расскажите о себе, своих целях и мотивации"
                                          : isEnglish 
                                          ? "Проверим ваш уровень владения английским языком"
                                          : `Проверим ваши знания в области ${techNames[techId] || techId.toUpperCase()}`
                                        }
                                      </p>
                                    </div>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                      {questions.length} вопросов
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              {!isHidden && (
                                <div className="ml-11 space-y-3">
                                  {questions.map((question, index) => (
                                    <div 
                                      key={question.id}
                                      className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-gray-200/50 hover:bg-white/70 transition-colors"
                                    >
                                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                        {index + 1}
                                      </div>
                                      <div className="flex-grow min-w-0">
                                        <p className="text-sm text-gray-800 font-medium leading-relaxed">
                                          {question.question}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                  
                  {/* Прощание рекрутера */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-l-4 border-indigo-400">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        🤝
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Отлично! Спасибо за интервью</h4>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Превосходно! Мы прошли все основные вопросы. Мне было очень интересно с вами общаться 
                            и узнавать о вашем опыте и подходе к работе.
                          </p>
                          <p>
                            Я вижу, что у вас есть хорошие технические знания и интересный опыт. 
                            Ваши ответы показывают, что вы умеете мыслить системно и подходить к задачам творчески.
                          </p>
                          <p>
                            <strong>У вас есть какие-то вопросы ко мне или к нашей компании?</strong> 
                            Может быть, что-то о проектах, команде, процессах разработки или условиях работы?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            "Не стесняйтесь задавать любые вопросы - это нормальная часть интервью!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Заключительные слова */}
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border-l-4 border-green-400">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ✨
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-800 mb-2">Что дальше?</h4>
                        <div className="text-gray-700 space-y-2">
                          <p>
                            Мы свяжемся с вами в течение недели с результатами интервью. 
                            Если у нас возникнут дополнительные вопросы, мы обязательно с вами созвонимся.
                          </p>
                          <p>
                            Спасибо еще раз за ваше время и интерес к нашей компании. 
                            Было очень приятно с вами познакомиться!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Кнопка для генерации нового интервью */}
                  <div className="mt-8 pt-6 border-t border-gray-200/50">
                    <div className="text-center">
                      <Button
                        onClick={generateNewInterview}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Shuffle className="h-4 w-4 mr-2" />
                        Сгенерировать новое интервью
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Карточки для обычной практики
              <>
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
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Practice;
