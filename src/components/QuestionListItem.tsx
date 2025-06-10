import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Question, ProgressStatus } from "@/data/questions";
import { Check, RefreshCw, Book } from "lucide-react";

interface QuestionListItemProps {
  question: Question;
  progressStatus?: ProgressStatus;
  onProgressChange: (status: ProgressStatus) => void;
}

const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return 'text-green-600';
    case 'medium': return 'text-yellow-600';
    case 'hard': return 'text-red-600';
    default: return 'text-gray-600';
  }
};

const QuestionListItem = ({ question, progressStatus, onProgressChange }: QuestionListItemProps) => {
  const getProgressBorder = (status?: ProgressStatus) => {
    switch (status) {
      case 'known': return 'border-l-4 border-green-400';
      case 'review': return 'border-l-4 border-yellow-400';
      case 'learning': return 'border-l-4 border-blue-400';
      default: return 'border-l-4 border-transparent';
    }
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={question.id} className={`bg-white/70 rounded-xl shadow-md backdrop-blur-sm border-white/20 transition-all duration-300 ${getProgressBorder(progressStatus)}`}>
        <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
          <div className="flex items-center justify-between w-full">
            <span className="flex-1 font-medium text-foreground">{question.question}</span>
            <Badge variant={
              question.difficulty === 'easy' ? 'default' :
              question.difficulty === 'medium' ? 'secondary' : 'destructive'
            } className="ml-4">{question.difficulty}</Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pt-0 pb-4">
          <p className="text-muted-foreground mb-4 leading-relaxed">{question.answer}</p>
          <div className="flex justify-end items-center gap-2 mt-4">
            <span className="text-sm font-medium text-muted-foreground mr-2">Мой прогресс:</span>
            <Button 
              size="sm" 
              variant={progressStatus === 'learning' ? 'default' : 'outline'}
              className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
              onClick={() => onProgressChange('learning')}
            >
              <Book className="h-4 w-4 mr-1.5" /> Учу
            </Button>
            <Button 
              size="sm" 
              variant={progressStatus === 'review' ? 'default' : 'outline'}
              className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200"
              onClick={() => onProgressChange('review')}
            >
              <RefreshCw className="h-4 w-4 mr-1.5" /> Повторить
            </Button>
            <Button 
              size="sm" 
              variant={progressStatus === 'known' ? 'default' : 'outline'}
              className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200"
              onClick={() => onProgressChange('known')}
            >
              <Check className="h-4 w-4 mr-1.5" /> Знаю
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default QuestionListItem; 