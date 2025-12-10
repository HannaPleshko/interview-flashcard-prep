import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ArrowLeft,
  Search,
  Filter,
  ArrowUpDown,
  Sparkles,
  BookOpen,
  Check,
  RefreshCw,
  Book,
  ArrowRight,
  X,
  LayoutGrid,
  List,
  GripVertical,
  Globe,
  Layers,
  Zap,
  Code,
  Shield,
  Server,
  Package,
  Database,
} from "lucide-react";
import { questionsData, getTechnologyQuestions, Question, ProgressStatus } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import QuestionListItem from "@/components/QuestionListItem";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ProgressData = {
  [questionId: string]: ProgressStatus;
};

const SortableQuestionCard = ({
  question,
  index,
  ...props
}: { question: Question; index: number } & any) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: question.id,
    disabled: isMobile,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? "none" : "transform 200ms ease-out",
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 1 : 0,
    position: "relative" as const,
    willChange: "transform",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        ${isDragging ? "shadow-lg" : ""}
        w-full
      `}
    >
      <div className="relative">
        {!isMobile && (
          <div
            {...attributes}
            {...listeners}
            className="absolute top-2 right-2 p-2 rounded-lg cursor-grab active:cursor-grabbing hover:bg-white/50 transition-colors z-10"
          >
            <GripVertical className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <QuestionCard {...props} question={question} index={index} />
      </div>
    </div>
  );
};

const SortableQuestionListItem = ({
  question,
  index,
  ...props
}: { question: Question; index?: number } & any) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: question.id,
    disabled: isMobile,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? "none" : "transform 200ms ease-out",
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 1 : 0,
    position: "relative" as const,
    willChange: "transform",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        ${isDragging ? "shadow-lg" : ""}
        flex items-center gap-2
      `}
    >
      {!isMobile && (
        <div
          {...attributes}
          {...listeners}
          className="
            cursor-grab p-2 
            hover:bg-gray-100/50 
            rounded-md 
            transition-colors duration-150
            active:cursor-grabbing
          "
        >
          <GripVertical className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <div className="flex-grow">
        <QuestionListItem {...props} question={question} index={index} />
      </div>
    </div>
  );
};

const Study = () => {
  const { techId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [progressFilter, setProgressFilter] = useState("all");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [progress, setProgress] = useState<ProgressData>({});
  const [viewMode, setViewMode] = useState<"cards" | "list">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const ITEMS_PER_PAGE = itemsPerPage;

  // Маппинг иконок для технологий
  const getTechIcon = (techId: string) => {
    const iconMap: { [key: string]: any } = {
      html: Globe,
      css: Layers,
      javascript: Zap,
      oop: Package,
      nextjs: Code,
      angular: Code,
      angularjs: Code,
      typescript: Code,
      nodejs: Server,
      sql: Database,
      mongodb: Database,
      security: Shield,
      csharp: Code,
    };
    return iconMap[techId] || BookOpen;
  };

  // Маппинг градиентов для технологий
  const getTechGradient = (techId: string) => {
    const gradientMap: { [key: string]: string } = {
      html: "from-orange-400 to-orange-600",
      css: "from-blue-400 to-blue-600",
      javascript: "from-yellow-400 to-yellow-600",
      oop: "from-green-500 to-green-700",
      nextjs: "from-gray-500 to-gray-700",
      angular: "from-red-500 to-red-700",
      angularjs: "from-red-400 to-red-600",
      typescript: "from-purple-500 to-purple-700",
      nodejs: "from-green-400 to-green-600",
      sql: "from-indigo-500 to-indigo-700",
      mongodb: "from-green-600 to-green-800",
      security: "from-emerald-400 to-emerald-600",
      csharp: "from-blue-600 to-blue-800",
    };
    return gradientMap[techId] || "from-gray-400 to-gray-600";
  };

  const technology = questionsData.find((t) => t.id === techId);
  const allQuestions = techId ? getTechnologyQuestions(techId) : [];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const savedProgress = localStorage.getItem("questionProgress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("questionProgress", JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    setCurrentPage(1);
    setFlippedCards(new Set());
  }, [searchTerm, difficultyFilter, sortBy, progressFilter, viewMode, itemsPerPage]);

  useEffect(() => {
    if (techId) {
      const initialQuestions = getTechnologyQuestions(techId);
      setQuestions(initialQuestions);
      setFilteredQuestions(initialQuestions);
      setCurrentPage(1); // Сбрасываем пагинацию при смене технологии
      setItemsPerPage(initialQuestions.length); // Устанавливаем "Все" по умолчанию
    }
  }, [techId]);

  // Функция для определения веса сложности
  const getDifficultyWeight = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return 1;
      case "medium":
        return 2;
      case "hard":
        return 3;
      default:
        return 0;
    }
  };

  // Filtering and sorting logic
  useEffect(() => {
    const filtered = questions
      .filter((question) => {
        const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDifficulty =
          difficultyFilter === "all" || question.difficulty === difficultyFilter;
        const questionProgress = progress[question.id];
        const matchesProgress =
          progressFilter === "all" ||
          (progressFilter === "not_started" && !questionProgress) ||
          questionProgress === progressFilter;
        return matchesSearch && matchesDifficulty && matchesProgress;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "difficulty-asc":
            return getDifficultyWeight(a.difficulty) - getDifficultyWeight(b.difficulty);
          case "difficulty-desc":
            return getDifficultyWeight(b.difficulty) - getDifficultyWeight(a.difficulty);
          case "alphabetical":
            return a.question.localeCompare(b.question);
          default:
            return 0;
        }
      });

    setFilteredQuestions(filtered);
  }, [questions, searchTerm, difficultyFilter, sortBy, progressFilter, progress]);

  const handleCardFlip = (index: number) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  const handleProgressChange = (questionId: string, status: ProgressStatus) => {
    setProgress((prev) => {
      const newProgress = { ...prev };
      if (newProgress[questionId] === status) {
        delete newProgress[questionId];
      } else {
        newProgress[questionId] = status;
      }
      return newProgress;
    });
  };

  const resetFilters = () => {
    setSearchTerm("");
    setDifficultyFilter("all");
    setSortBy("default");
    setProgressFilter("all");
    setFlippedCards(new Set());
    setCurrentPage(1);
    setItemsPerPage(filteredQuestions.length); // Устанавливаем "Все" при сбросе
  };

  const getProgressStats = () => {
    const stats: { [key in ProgressStatus | "not_started"]: number } = {
      learning: 0,
      review: 0,
      known: 0,
      not_started: 0,
    };

    filteredQuestions.forEach((q) => {
      const status = progress[q.id];
      if (status) {
        stats[status]++;
      } else {
        stats.not_started++;
      }
    });
    return stats;
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setQuestions((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);

        // Обновляем filteredQuestions с сохранением текущих фильтров
        const filtered = newItems
          .filter((question) => {
            const matchesSearch = question.question
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
            const matchesDifficulty =
              difficultyFilter === "all" || question.difficulty === difficultyFilter;
            const questionProgress = progress[question.id];
            const matchesProgress =
              progressFilter === "all" ||
              (progressFilter === "not_started" && !questionProgress) ||
              questionProgress === progressFilter;
            return matchesSearch && matchesDifficulty && matchesProgress;
          })
          .sort((a, b) => {
            if (sortBy === "difficulty") {
              const difficultyOrder = { easy: 0, medium: 1, hard: 2 };
              return (
                difficultyOrder[a.difficulty as keyof typeof difficultyOrder] -
                difficultyOrder[b.difficulty as keyof typeof difficultyOrder]
              );
            }
            return 0;
          });

        setFilteredQuestions(filtered);
        return newItems;
      });
    }
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

  const progressStats = getProgressStats();

  // Pagination logic
  const totalPages = Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentQuestions = filteredQuestions.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate actual items on current page
  const actualItemsOnPage = currentQuestions.length;
  const startItem = filteredQuestions.length > 0 ? indexOfFirstItem + 1 : 0;
  const endItem = Math.min(indexOfLastItem, filteredQuestions.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-white/50 flex-shrink-0 -ml-2 sm:hidden"
            >
              <Link to="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Technology Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {questionsData.map((tech) => {
              const IconComponent = getTechIcon(tech.id);
              const isActive = techId === tech.id;

              return (
                <Button
                  key={tech.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/study/${tech.id}`)}
                  className={`
                    ${
                      isActive
                      ? `bg-gradient-to-r ${getTechGradient(tech.id)} text-white border-0 shadow-lg`
                      : "bg-transparent border-2 border-gray-300/50 text-gray-700 hover:border-gray-400 hover:bg-gray-100/50 hover:text-gray-700 hover:scale-105"
                    }
                    rounded-full px-6 py-3 text-sm font-medium
                    transition-all duration-300
                    flex items-center gap-2 backdrop-blur-sm
                    focus:text-white active:text-white
                  `}
                >
                  <IconComponent className="h-4 w-4" />
                  {tech.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 border border-white/20 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {/* Search */}
              <div className="relative sm:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Поиск по вопросам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl"
                />
              </div>

              {/* Difficulty Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
                <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                  <SelectTrigger className="pl-10 bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl">
                    <SelectValue placeholder="Фильтр по сложности" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200 rounded-xl shadow-xl">
                    <SelectItem value="all" className="rounded-lg hover:bg-purple-50">
                      Все уровни
                    </SelectItem>
                    <SelectItem value="easy" className="rounded-lg hover:bg-green-50">
                      🟢 Легкий
                    </SelectItem>
                    <SelectItem value="medium" className="rounded-lg hover:bg-yellow-50">
                      🟡 Средний
                    </SelectItem>
                    <SelectItem value="hard" className="rounded-lg hover:bg-red-50">
                      🔴 Сложный
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div className="relative">
                <ArrowUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="pl-10 bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200 rounded-xl shadow-xl">
                    <SelectItem value="default" className="rounded-lg hover:bg-purple-50">
                      По умолчанию
                    </SelectItem>
                    <SelectItem value="difficulty-asc" className="rounded-lg hover:bg-purple-50">
                      По сложности (легкие → сложные)
                    </SelectItem>
                    <SelectItem value="difficulty-desc" className="rounded-lg hover:bg-purple-50">
                      По сложности (сложные → легкие)
                    </SelectItem>
                    <SelectItem value="alphabetical" className="rounded-lg hover:bg-purple-50">
                      По алфавиту
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ToggleGroup
                type="single"
                variant="outline"
                value={viewMode}
                onValueChange={(value) => {
                  if (value) setViewMode(value as "cards" | "list");
                }}
              >
                <ToggleGroupItem value="cards" aria-label="Вид карточек">
                  <LayoutGrid className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="Вид списка">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>

              <Button
                variant="ghost"
                size="icon"
                onClick={resetFilters}
                className="text-muted-foreground hover:bg-red-100 hover:text-red-600 rounded-full"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Сбросить фильтры</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${progressFilter === "all"
                ? "bg-gray-100 ring-2 ring-gray-500"
                : "bg-white/60 backdrop-blur-sm border border-white/20"
              }`}
            onClick={() => setProgressFilter("all")}
          >
            <div className="text-lg font-bold text-purple-600">{allQuestions.length}</div>
            <div className="text-sm text-muted-foreground">Все</div>
          </div>
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${progressFilter === "learning"
                ? "bg-blue-100 ring-2 ring-blue-500"
                : "bg-blue-50/80 border border-blue-200/50"
              }`}
            onClick={() => setProgressFilter(progressFilter === "learning" ? "all" : "learning")}
          >
            <div className="text-lg font-bold text-blue-600">{progressStats.learning}</div>
            <div className="text-sm text-blue-700">📘 Учу</div>
          </div>
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${progressFilter === "review"
                ? "bg-yellow-100 ring-2 ring-yellow-500"
                : "bg-yellow-50/80 border border-yellow-200/50"
              }`}
            onClick={() => setProgressFilter(progressFilter === "review" ? "all" : "review")}
          >
            <div className="text-lg font-bold text-orange-600">{progressStats.review}</div>
            <div className="text-sm text-orange-700">🔄 Повторяю</div>
          </div>
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${progressFilter === "known"
                ? "bg-green-100 ring-2 ring-green-500"
                : "bg-green-50/80 border border-green-200/50"
              }`}
            onClick={() => setProgressFilter(progressFilter === "known" ? "all" : "known")}
          >
            <div className="text-lg font-bold text-green-600">{progressStats.known}</div>
            <div className="text-sm text-green-700">✅ Знаю</div>
          </div>
        </div>

        {/* Questions Grid / List */}
        {currentQuestions.length > 0 ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            {viewMode === "cards" ? (
              <SortableContext
                items={currentQuestions.map((q) => q.id)}
                strategy={rectSortingStrategy}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentQuestions.map((question, index) => (
                    <SortableQuestionCard
                      key={`${question.id}-${indexOfFirstItem + index}`}
                      question={question}
                      index={indexOfFirstItem + index}
                      isFlipped={flippedCards.has(indexOfFirstItem + index)}
                      onFlip={() => handleCardFlip(indexOfFirstItem + index)}
                      progressStatus={progress[question.id]}
                      onProgressChange={(status) => handleProgressChange(question.id, status)}
                    />
                  ))}
                </div>
              </SortableContext>
            ) : (
              <SortableContext
                items={currentQuestions.map((q) => q.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-4">
                  {currentQuestions.map((question, index) => (
                    <SortableQuestionListItem
                      key={question.id}
                      question={question}
                      index={indexOfFirstItem + index}
                      progressStatus={progress[question.id]}
                      onProgressChange={(status) => handleProgressChange(question.id, status)}
                    />
                  ))}
                </div>
              </SortableContext>
            )}
          </DndContext>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {techId ? "Ничего не найдено" : "Выберите технологию"}
              </h3>
              <p className="text-muted-foreground">
                {techId
                  ? "Попробуйте изменить фильтры или сбросить их, чтобы увидеть больше вопросов."
                  : "Пожалуйста, выберите технологию из списка выше, чтобы начать изучение."}
              </p>
            </div>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredQuestions.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            {/* Items per page selector - слева */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Показать:</span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => setItemsPerPage(parseInt(value))}
              >
                <SelectTrigger className="w-24 h-8 bg-white/70 border-purple-200 focus:border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200 rounded-lg shadow-xl">
                  <SelectItem value="10" className="rounded-md hover:bg-purple-50">
                    10
                  </SelectItem>
                  <SelectItem value="20" className="rounded-md hover:bg-purple-50">
                    20
                  </SelectItem>
                  <SelectItem
                    value={filteredQuestions.length.toString()}
                    className="rounded-md hover:bg-purple-50"
                  >
                    Все ({filteredQuestions.length})
                  </SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground">элементов</span>
            </div>

            {/* Pagination buttons - справа */}
            {totalPages > 1 && itemsPerPage < filteredQuestions.length && (
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                {/* Mobile page info */}
                <span className="text-muted-foreground font-medium text-sm sm:hidden">
                  {currentPage} из {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="hover:bg-white/50 border-purple-200 text-purple-700"
                >
                  <ArrowLeft className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Назад</span>
                </Button>

                <span className="text-muted-foreground font-medium text-sm hidden sm:block">
                  {itemsPerPage >= filteredQuestions.length
                    ? `Показано все ${filteredQuestions.length} элементов`
                    : `Показано ${startItem}-${endItem} из ${filteredQuestions.length}`}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="hover:bg-white/50 border-purple-200 text-purple-700"
                >
                  <span className="hidden sm:inline">Далее</span>
                  <ArrowRight className="h-4 w-4 sm:ml-2" />
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Study;
