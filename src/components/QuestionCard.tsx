
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Question } from "@/data/questions";
import { Sparkles, Eye, EyeOff } from "lucide-react";

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
    <div className="flip-card w-full h-80" style={{ perspective: '1000px' }}>
      <div 
        className={`flip-card-inner w-full h-full cursor-pointer transition-transform duration-700 ${
          flipped ? 'flipped' : ''
        }`}
        onClick={handleClick}
        style={{ 
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
      >
        {/* Front of card - Question */}
        <Card className="flip-card-front absolute inset-0 w-full h-full border-0 bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className={`absolute inset-0 bg-gradient-to-br ${getDifficultyColor(question.difficulty)} opacity-5`}></div>
          
          <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex justify-between items-start mb-4">
                <Badge className={`bg-gradient-to-r ${getDifficultyColor(question.difficulty)} text-white border-0 shadow-lg`}>
                  {getDifficultyText(question.difficulty)}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/50 px-3 py-1 rounded-full">
                  <Eye className="h-4 w-4" />
                  Вопрос
                </div>
              </div>
              <h3 className="text-lg font-medium text-foreground leading-relaxed mb-4">
                {question.question}
              </h3>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                <Sparkles className="h-4 w-4" />
                Нажмите, чтобы увидеть ответ
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto"></div>
            </div>
          </CardContent>
        </Card>

        {/* Back of card - Answer */}
        <Card className="flip-card-back absolute inset-0 w-full h-full border-0 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className={`absolute inset-0 bg-gradient-to-br ${getDifficultyColor(question.difficulty)} opacity-5`}></div>
          
          <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                  <EyeOff className="h-3 w-3 mr-1" />
                  Ответ
                </Badge>
                <Badge className={`bg-gradient-to-r ${getDifficultyColor(question.difficulty)} text-white border-0 shadow-lg`}>
                  {getDifficultyText(question.difficulty)}
                </Badge>
              </div>
              <p className="text-foreground leading-relaxed">
                {question.answer}
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                <Sparkles className="h-4 w-4" />
                Нажмите, чтобы вернуться к вопросу
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionCard;
