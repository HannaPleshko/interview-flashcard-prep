
import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft, 
  Code, 
  Brain, 
  BookOpen, 
  Sparkles, 
  Search, 
  Filter, 
  SortAsc, 
  SortDesc,
  Zap,
  Target,
  Flame
} from "lucide-react";
import { questionsData, getTechnologyQuestions, Question } from "@/data/questions";

const Study = () => {
  const { techId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  
  const technology = questionsData.find(t => t.id === techId);
  const allQuestions = techId ? getTechnologyQuestions(techId) : 
    questionsData.flatMap(tech => tech.questions.map(q => ({ ...q, technology: tech.name })));

  const filteredAndSortedQuestions = useMemo(() => {
    let filtered = allQuestions.filter(question => {
      const matchesSearch = question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          question.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = difficultyFilter === "all" || question.difficulty === difficultyFilter;
      return matchesSearch && matchesDifficulty;
    });

    // Сортировка
    switch (sortBy) {
      case "difficulty-asc":
        filtered.sort((a, b) => {
          const order = { easy: 1, medium: 2, hard: 3 };
          return order[a.difficulty as keyof typeof order] - order[b.difficulty as keyof typeof order];
        });
        break;
      case "difficulty-desc":
        filtered.sort((a, b) => {
          const order = { easy: 1, medium: 2, hard: 3 };
          return order[b.difficulty as keyof typeof order] - order[a.difficulty as keyof typeof order];
        });
        break;
      case "alphabetical":
        filtered.sort((a, b) => a.question.localeCompare(b.question));
        break;
      default:
        break;
    }

    return filtered;
  }, [allQuestions, searchQuery, difficultyFilter, sortBy]);

  const handleTechnologyChange = (value: string) => {
    if (value === "all") {
      navigate("/study");
    } else {
      navigate(`/study/${value}`);
    }
    // Сброс фильтров при смене технологии
    setSearchQuery("");
    setDifficultyFilter("all");
    setSortBy("default");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-emerald-400 to-green-500';
      case 'medium': return 'from-amber-400 to-orange-500';
      case 'hard': return 'from-red-400 to-pink-500';
      default: return 'from-gray-400 to-gray-600';
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

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return Zap;
      case 'medium': return Target;
      case 'hard': return Flame;
      default: return Code;
    }
  };

  const getQuestionStats = () => {
    const total = filteredAndSortedQuestions.length;
    const easy = filteredAndSortedQuestions.filter(q => q.difficulty === 'easy').length;
    const medium = filteredAndSortedQuestions.filter(q => q.difficulty === 'medium').length;
    const hard = filteredAndSortedQuestions.filter(q => q.difficulty === 'hard').length;
    return { total, easy, medium, hard };
  };

  const stats = getQuestionStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/90 border-b border-purple-100 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  DevPrep
                </h1>
                <p className="text-xs text-muted-foreground">Готовься к успеху в IT</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/study" className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Brain className="h-5 w-5" />
                Изучение
              </Link>
              <Link to="/practice" className="flex items-center gap-2 px-6 py-3 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-white/70 transition-all duration-300">
                <BookOpen className="h-5 w-5" />
                Практика
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild className="hover:bg-white/70 rounded-xl">
            <Link to="/">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Назад
            </Link>
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="h-10 w-10 text-purple-500" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Изучение
              </h1>
            </div>
            <p className="text-muted-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Изучение теоретических вопросов по программированию
            </p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {/* Technology Selector */}
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-purple-500" />
                <span className="font-medium text-gray-700">Технология</span>
              </div>
              <Select value={techId || "all"} onValueChange={handleTechnologyChange}>
                <SelectTrigger className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-400 focus:border-purple-500 transition-all duration-300">
                  <SelectValue placeholder="Выберите технологию" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200">
                  <SelectItem value="all">🌟 Все технологии</SelectItem>
                  {questionsData.map((tech) => (
                    <SelectItem key={tech.id} value={tech.id}>
                      {tech.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Search */}
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-5 w-5 text-purple-500" />
                <span className="font-medium text-gray-700">Поиск</span>
              </div>
              <Input
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 focus:border-purple-500"
              />
            </CardContent>
          </Card>

          {/* Difficulty Filter */}
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="h-5 w-5 text-purple-500" />
                <span className="font-medium text-gray-700">Сложность</span>
              </div>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-400 focus:border-purple-500 transition-all duration-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200">
                  <SelectItem value="all">🎯 Все уровни</SelectItem>
                  <SelectItem value="easy">🟢 Легкий</SelectItem>
                  <SelectItem value="medium">🟡 Средний</SelectItem>
                  <SelectItem value="hard">🔴 Сложный</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Sort */}
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <SortAsc className="h-5 w-5 text-purple-500" />
                <span className="font-medium text-gray-700">Сортировка</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-400 focus:border-purple-500 transition-all duration-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200">
                  <SelectItem value="default">📋 По умолчанию</SelectItem>
                  <SelectItem value="difficulty-asc">⬆️ Сложность: легкие первые</SelectItem>
                  <SelectItem value="difficulty-desc">⬇️ Сложность: сложные первые</SelectItem>
                  <SelectItem value="alphabetical">🔤 По алфавиту</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <Card className="mb-8 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-indigo-500/10 border-purple-200 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.total}</div>
                <div className="text-sm text-gray-600">Всего вопросов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.easy}</div>
                <div className="text-sm text-gray-600">Легких</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{stats.medium}</div>
                <div className="text-sm text-gray-600">Средних</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{stats.hard}</div>
                <div className="text-sm text-gray-600">Сложных</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions */}
        {filteredAndSortedQuestions.length === 0 ? (
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardContent className="p-12 text-center">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Вопросы не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить параметры поиска или фильтрации</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {technology?.name || "Все технологии"}
              </h2>
              <p className="text-gray-600">
                Найдено {filteredAndSortedQuestions.length} {
                  filteredAndSortedQuestions.length === 1 ? 'вопрос' :
                  filteredAndSortedQuestions.length < 5 ? 'вопроса' : 'вопросов'
                }
              </p>
            </div>
            
            {filteredAndSortedQuestions.map((question, index) => {
              const DifficultyIcon = getDifficultyIcon(question.difficulty);
              return (
                <Card key={question.id} className="card-hover border-0 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                            {index + 1}
                          </div>
                          <Badge className={`bg-gradient-to-r ${getDifficultyColor(question.difficulty)} text-white border-0 shadow-lg flex items-center gap-1`}>
                            <DifficultyIcon className="h-3 w-3" />
                            {getDifficultyText(question.difficulty)}
                          </Badge>
                          {!techId && 'technology' in question && (
                            <Badge variant="outline" className="border-purple-300 text-purple-700 bg-purple-50">
                              {question.technology}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                          {question.question}
                        </h3>
                        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 border-l-4 border-gradient-to-b border-emerald-400">
                          <p className="text-gray-700 leading-relaxed">{question.answer}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Study;
