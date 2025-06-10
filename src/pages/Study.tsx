import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, Filter, ArrowUpDown, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { questionsData, getTechnologyQuestions, Question } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Study = () => {
  const { techId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;
  
  const technology = questionsData.find(t => t.id === techId);
  const allQuestions = techId ? getTechnologyQuestions(techId) : [];

  useEffect(() => {
    setCurrentPage(1);
    setFlippedCards(new Set());
  }, [searchTerm, difficultyFilter, sortBy]);

  // Filtering and sorting logic
  const filteredAndSortedQuestions = allQuestions
    .filter(question => {
      const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           question.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficultyFilter === "all" || question.difficulty === difficultyFilter;
      return matchesSearch && matchesDifficulty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "difficulty":
          const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
          return difficultyOrder[a.difficulty as keyof typeof difficultyOrder] - 
                 difficultyOrder[b.difficulty as keyof typeof difficultyOrder];
        case "alphabetical":
          return a.question.localeCompare(b.question);
        default:
          return 0;
      }
    });

  const handleCardFlip = (index: number) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setDifficultyFilter("all");
    setSortBy("default");
    setFlippedCards(new Set());
    setCurrentPage(1);
  };

  const getDifficultyStats = () => {
    const stats = { easy: 0, medium: 0, hard: 0 };
    filteredAndSortedQuestions.forEach(q => {
      stats[q.difficulty as keyof typeof stats]++;
    });
    return stats;
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
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Выберите технологию для изучения
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Вернитесь на главную страницу, чтобы выбрать технологию для изучения
                </p>
              </div>
              <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Выбрать технологию
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const stats = getDifficultyStats();
  
  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedQuestions.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentQuestions = filteredAndSortedQuestions.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-white/50 flex-shrink-0 -ml-2 sm:hidden">
              <Link to="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {technology?.name}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Изучение материалов</p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetFilters}
            className="hover:bg-white/50 border-purple-200 self-end sm:self-auto"
          >
            Сбросить фильтры
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
            <div className="text-2xl font-bold text-purple-600">{filteredAndSortedQuestions.length}</div>
            <div className="text-sm text-muted-foreground">Всего вопросов</div>
          </div>
          <div className="bg-green-50/80 backdrop-blur-sm rounded-xl p-4 border border-green-200/50 shadow-lg">
            <div className="text-2xl font-bold text-green-600">{stats.easy}</div>
            <div className="text-sm text-green-700">🟢 Легкие</div>
          </div>
          <div className="bg-yellow-50/80 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50 shadow-lg">
            <div className="text-2xl font-bold text-orange-600">{stats.medium}</div>
            <div className="text-sm text-orange-700">🟡 Средние</div>
          </div>
          <div className="bg-red-50/80 backdrop-blur-sm rounded-xl p-4 border border-red-200/50 shadow-lg">
            <div className="text-2xl font-bold text-red-600">{stats.hard}</div>
            <div className="text-sm text-red-700">🔴 Сложные</div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 border border-white/20 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Поиск по вопросам и ответам..."
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
                  <SelectItem value="difficulty" className="rounded-lg hover:bg-purple-50">
                    По сложности
                  </SelectItem>
                  <SelectItem value="alphabetical" className="rounded-lg hover:bg-purple-50">
                    По алфавиту
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Questions Grid */}
        {currentQuestions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentQuestions.map((question, index) => (
              <QuestionCard
                key={`${question.id}-${indexOfFirstItem + index}`}
                question={question}
                isFlipped={flippedCards.has(indexOfFirstItem + index)}
                onFlip={() => handleCardFlip(indexOfFirstItem + index)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ничего не найдено
              </h3>
              <p className="text-muted-foreground">
                Попробуйте изменить фильтры или сбросить их, чтобы увидеть больше вопросов.
              </p>
            </div>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="hover:bg-white/50 border-purple-200 text-purple-700"
            >
              <ArrowLeft className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Назад</span>
            </Button>

            <span className="text-muted-foreground font-medium text-sm hidden sm:block">
              Страница {currentPage} из {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="hover:bg-white/50 border-purple-200 text-purple-700"
            >
              <span className="hidden sm:inline">Далее</span>
              <ArrowRight className="h-4 w-4 sm:ml-2" />
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Study;
