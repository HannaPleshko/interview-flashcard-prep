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
import { formatQuestionText } from "@/lib/utils";

interface QuestionListItemProps {
  question: Question;
  index?: number;
  progressStatus?: ProgressStatus;
  onProgressChange: (status: ProgressStatus) => void;
}

const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case "easy":
      return "text-green-600";
    case "medium":
      return "text-yellow-600";
    case "hard":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

const QuestionListItem = ({
  question,
  index,
  progressStatus,
  onProgressChange,
}: QuestionListItemProps) => {
  const getProgressBorder = (status?: ProgressStatus) => {
    switch (status) {
      case "known":
        return "border-l-4 border-green-400";
      case "review":
        return "border-l-4 border-yellow-400";
      case "learning":
        return "border-l-4 border-blue-400";
      default:
        return "border-l-4 border-transparent";
    }
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value={question.id}
        className={`bg-white/70 rounded-xl shadow-md backdrop-blur-sm border-white/20 transition-all duration-300 ${getProgressBorder(progressStatus)}`}
      >
        <AccordionTrigger className="accordion-trigger px-3 sm:px-6 py-3 sm:py-4 hover:no-underline text-left focus:outline-none focus:ring-0 focus:shadow-none focus:border-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 sm:gap-4">
            <div className="flex items-start gap-3 flex-1">
              <span className="font-medium text-foreground text-sm sm:text-base">
                {index !== undefined && (
                  <span className="text-gray-500 font-normal mr-2">{index + 1}.</span>
                )}
                {question.question}
              </span>
            </div>
            <Badge
              variant={
                question.difficulty === "easy"
                  ? "default"
                  : question.difficulty === "medium"
                    ? "secondary"
                    : "destructive"
              }
              className="self-start sm:self-auto"
            >
              {question.difficulty}
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-3 sm:px-6 pt-0 pb-3 sm:pb-4">
          <div
            className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: formatQuestionText(question.answer) }}
          ></div>
          <div className="flex flex-wrap justify-end items-center gap-2 mt-4">
            <span className="text-xs sm:text-sm font-medium text-muted-foreground mr-2">
              Мой прогресс:
            </span>
            <Button
              size="sm"
              variant="outline"
              className={`${progressStatus === "learning" ? "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 ring-2 ring-blue-500 focus:ring-blue-500" : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 focus:ring-blue-500"} text-xs sm:text-sm`}
              onClick={() => onProgressChange("learning")}
            >
              <Book className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" /> Учу
            </Button>
            <Button
              size="sm"
              variant="outline"
              className={`${progressStatus === "review" ? "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200 ring-2 ring-yellow-500 focus:ring-yellow-500" : "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100 focus:ring-yellow-500"} text-xs sm:text-sm`}
              onClick={() => onProgressChange("review")}
            >
              <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" /> Повторить
            </Button>
            <Button
              size="sm"
              variant="outline"
              className={`${progressStatus === "known" ? "bg-green-100 text-green-800 border-green-200 hover:bg-green-200 ring-2 ring-green-500 focus:ring-green-500" : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 focus:ring-green-500"} text-xs sm:text-sm`}
              onClick={() => onProgressChange("known")}
            >
              <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" /> Знаю
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default QuestionListItem;
