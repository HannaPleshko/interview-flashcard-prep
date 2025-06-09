
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Question } from "@/data/questions";

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
    <div className="perspective-1000 w-full h-80">
      <Card 
        className={`relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        } hover:shadow-lg`}
        onClick={handleClick}
      >
        {/* Front of card - Question */}
        <div className="absolute inset-0 backface-hidden">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <Badge className={`${getDifficultyColor(question.difficulty)} text-white`}>
                  {getDifficultyText(question.difficulty)}
                </Badge>
                <span className="text-sm text-muted-foreground">Вопрос</span>
              </div>
              <h3 className="text-lg font-medium text-foreground leading-relaxed">
                {question.question}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Нажмите, чтобы увидеть ответ
            </p>
          </CardContent>
        </div>

        {/* Back of card - Answer */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <CardContent className="p-6 h-full flex flex-col justify-between bg-primary/5">
            <div>
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary">Ответ</Badge>
                <Badge className={`${getDifficultyColor(question.difficulty)} text-white`}>
                  {getDifficultyText(question.difficulty)}
                </Badge>
              </div>
              <p className="text-foreground leading-relaxed">
                {question.answer}
              </p>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Нажмите, чтобы вернуться к вопросу
            </p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default QuestionCard;
