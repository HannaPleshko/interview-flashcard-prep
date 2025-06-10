import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Question, ProgressStatus } from "@/data/questions";
import { Sparkles, Eye, EyeOff, Brain, Lightbulb, Star, Check, RefreshCw, Book } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  isFlipped?: boolean;
  onFlip?: () => void;
  progressStatus?: ProgressStatus;
  onProgressChange?: (status: ProgressStatus) => void;
}

const QuestionCard = ({ question, isFlipped = false, onFlip, progressStatus, onProgressChange }: QuestionCardProps) => {
  const [localFlipped, setLocalFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  
  const flipped = isFlipped || localFlipped;
  
  const handleClick = (e: React.MouseEvent) => {
    // Не переворачивать карточку при нажатии на кнопки прогресса
    if ((e.target as HTMLElement).closest('.progress-buttons')) {
      return;
    }

    setIsFlipping(true);
    
    setTimeout(() => {
      if (onFlip) {
        onFlip();
      } else {
        setLocalFlipped(!localFlipped);
      }
    }, 250); // Половина времени анимации
    
    setTimeout(() => {
      setIsFlipping(false);
    }, 500); // Полное время анимации
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-400 to-green-600';
      case 'medium': return 'from-yellow-400 to-orange-500';
      case 'hard': return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getProgressBorderColor = (status?: ProgressStatus) => {
    switch (status) {
      case 'known': return 'border-green-500';
      case 'review': return 'border-yellow-500';
      case 'learning': return 'border-blue-500';
      default: return 'border-white/20';
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
    <div className="flip-card w-full h-80 relative group" style={{ perspective: '1000px' }}>
      
      {/* Floating particles effect - скрываем во время переворота */}
      {!isFlipping && (
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute bottom-6 left-8 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-50"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        </div>
      )}

      <div 
        className={`flip-card-inner w-full h-full cursor-pointer transition-all duration-500 ease-in-out relative z-10 ${
          flipped ? 'flipped' : ''
        }`}
        onClick={handleClick}
        style={{ 
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Front of card - Question */}
        <Card className={`flip-card-front absolute inset-0 w-full h-full border-2 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-lg shadow-2xl overflow-hidden transition-all duration-300 ${getProgressBorderColor(progressStatus)}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${getDifficultyColor(question.difficulty)} opacity-5`}></div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-tr-full"></div>
          
          <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex justify-between items-start mb-4">
                <Badge className={`bg-gradient-to-r ${getDifficultyColor(question.difficulty)} text-white border-0 shadow-lg transition-all duration-300 hover:scale-105`}>
                  {getDifficultyText(question.difficulty)}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/60 px-3 py-1.5 rounded-full shadow-sm">
                  <Brain className="h-4 w-4 text-purple-500" />
                  <span className="font-medium">Вопрос</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground leading-relaxed mb-4 relative">
                <Star className="h-5 w-5 text-yellow-400 absolute -left-6 top-1 opacity-60" />
                {question.question}
              </h3>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-purple-500 animate-pulse" />
                <span className="font-medium">Нажмите, чтобы увидеть ответ</span>
                <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
              </div>
              <div className="flex justify-center gap-1">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back of card - Answer */}
        <Card className={`flip-card-back absolute inset-0 w-full h-full border-2 bg-gradient-to-br from-blue-50/95 via-purple-50/95 to-pink-50/95 backdrop-blur-lg shadow-2xl overflow-hidden transition-all duration-300 ${getProgressBorderColor(progressStatus)}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${getDifficultyColor(question.difficulty)} opacity-5`}></div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-transparent rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyan-400/20 to-transparent rounded-tl-full"></div>
          
          <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-lg hover:scale-105 transition-all duration-300">
                  <Lightbulb className="h-3 w-3 mr-1" />
                  Ответ
                </Badge>
                <Badge className={`bg-gradient-to-r ${getDifficultyColor(question.difficulty)} text-white border-0 shadow-lg`}>
                  {getDifficultyText(question.difficulty)}
                </Badge>
              </div>
              <div className="relative">
                <Sparkles className="h-5 w-5 text-green-400 absolute -left-6 top-1 opacity-60" />
                <p className="text-foreground leading-relaxed font-medium">
                  {question.answer}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="progress-buttons flex justify-center gap-2">
                <Button 
                  size="sm" 
                  variant={progressStatus === 'learning' ? 'default' : 'outline'}
                  className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
                  onClick={() => onProgressChange?.('learning')}
                >
                  <Book className="h-4 w-4 mr-1.5" /> Учу
                </Button>
                <Button 
                  size="sm" 
                  variant={progressStatus === 'review' ? 'default' : 'outline'}
                  className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200"
                  onClick={() => onProgressChange?.('review')}
                >
                  <RefreshCw className="h-4 w-4 mr-1.5" /> Повторить
                </Button>
                <Button 
                  size="sm" 
                  variant={progressStatus === 'known' ? 'default' : 'outline'}
                  className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200"
                  onClick={() => onProgressChange?.('known')}
                >
                  <Check className="h-4 w-4 mr-1.5" /> Знаю
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-full">
                <EyeOff className="h-4 w-4 text-green-500" />
                <span className="font-medium">Нажмите, чтобы вернуться к вопросу</span>
                <Eye className="h-4 w-4 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionCard;
