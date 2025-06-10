
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Question } from "@/data/questions";
import { Sparkles, Eye, EyeOff, Brain, Lightbulb, Star } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  isFlipped?: boolean;
  onFlip?: () => void;
}

const QuestionCard = ({ question, isFlipped = false, onFlip }: QuestionCardProps) => {
  const [localFlipped, setLocalFlipped] = useState(false);
  
  const flipped = isFlipped || localFlipped;
  
  const handleClick = () => {
    if (onFlip) {
      onFlip();
    } else {
      setLocalFlipped(!localFlipped);
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
    <div className="flip-card w-full h-80 relative group" style={{ perspective: '1000px' }}>
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 opacity-75 blur-sm group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
      <div className="absolute inset-0.5 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-6 left-8 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div 
        className={`flip-card-inner w-full h-full cursor-pointer transition-all duration-700 ease-in-out relative z-10 ${
          flipped ? 'flipped' : ''
        }`}
        onClick={handleClick}
        style={{ 
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Front of card - Question */}
        <Card className="flip-card-front absolute inset-0 w-full h-full border-2 border-white/20 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-lg shadow-2xl overflow-hidden hover:shadow-purple-500/20 transition-all duration-300">
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
        <Card className="flip-card-back absolute inset-0 w-full h-full border-2 border-white/20 bg-gradient-to-br from-blue-50/95 via-purple-50/95 to-pink-50/95 backdrop-blur-lg shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-300">
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
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full">
                <EyeOff className="h-4 w-4 text-green-500" />
                <span className="font-medium">Нажмите, чтобы вернуться к вопросу</span>
                <Eye className="h-4 w-4 text-blue-500" />
              </div>
              <div className="flex justify-center gap-1">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionCard;
