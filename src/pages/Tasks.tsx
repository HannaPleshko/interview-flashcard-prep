import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Filter, Search, ArrowUpDown, LayoutGrid, List, Play, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import toast, { Toaster } from 'react-hot-toast';

interface Task {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  testCases: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  category: string;
  template?: string;
}

// Пример данных задач
const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Найти сумму элементов массива",
    description: "Напишите функцию, которая находит сумму всех элементов массива чисел.",
    difficulty: "easy",
    category: "Массивы",
    template: `function sumArray(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "15",
        explanation: "1 + 2 + 3 + 4 + 5 = 15"
      },
      {
        input: "[-1, -2, 3]",
        output: "0",
        explanation: "-1 + (-2) + 3 = 0"
      }
    ]
  },
  {
    id: "2",
    title: "Найти максимальный элемент",
    description: "Напишите функцию, которая находит максимальный элемент в массиве чисел.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findMax(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 5, 3, 9, 2]",
        output: "9",
        explanation: "9 - максимальное число в массиве"
      },
      {
        input: "[-1, -5, -3]",
        output: "-1",
        explanation: "-1 - максимальное число в массиве"
      }
    ]
  },
  {
    id: "3",
    title: "Проверить палиндром",
    description: "Напишите функцию, которая проверяет, является ли строка палиндромом.",
    difficulty: "medium",
    category: "Строки",
    template: `function isPalindrome(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"radar"',
        output: "true",
        explanation: "radar читается одинаково слева направо и справа налево"
      },
      {
        input: '"hello"',
        output: "false",
        explanation: "hello не является палиндромом"
      }
    ]
  },
  {
    id: "4",
    title: "Найти факториал",
    description: "Напишите функцию для вычисления факториала числа.",
    difficulty: "medium",
    category: "Математика",
    template: `function factorial(n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "5",
        output: "120",
        explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120"
      },
      {
        input: "0",
        output: "1",
        explanation: "0! = 1 по определению"
      }
    ]
  },
  {
    id: "5",
    title: "Проверить сбалансированные скобки",
    description: "Напишите функцию, которая проверяет, правильно ли расставлены скобки в строке.",
    difficulty: "hard",
    category: "Строки",
    template: `function isBalanced(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"((()))"',
        output: "true",
        explanation: "Скобки правильно сбалансированы"
      },
      {
        input: '"(()))"',
        output: "false",
        explanation: "Несбалансированные скобки"
      }
    ]
  }
];

interface TestResult {
  passed: boolean;
  input: string;
  expected: string;
  actual: string;
}

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [sortBy, setSortBy] = useState("default");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [code, setCode] = useState("");
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Получаем уникальные категории из задач
  const categories = Array.from(new Set(sampleTasks.map(task => task.category)));

  // Функция для определения веса сложности
  const getDifficultyWeight = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 1;
      case 'medium': return 2;
      case 'hard': return 3;
      default: return 0;
    }
  };

  // Сортируем и фильтруем задачи
  const filteredTasks = sampleTasks
    .filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficultyFilter === "all" || task.difficulty === difficultyFilter;
      const matchesCategory = categoryFilter === "all" || task.category === categoryFilter;
      return matchesSearch && matchesDifficulty && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'difficulty-asc':
          return getDifficultyWeight(a.difficulty) - getDifficultyWeight(b.difficulty);
        case 'difficulty-desc':
          return getDifficultyWeight(b.difficulty) - getDifficultyWeight(a.difficulty);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-400 to-green-600';
      case 'medium': return 'from-yellow-400 to-orange-500';
      case 'hard': return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);
    setCode(task.template || "");
    setTestResults([]);
  };

  const runTests = () => {
    if (!selectedTask) return;
    
    setIsRunning(true);
    setTestResults([]);

    try {
      // Проверяем, что код содержит функцию sumArray
      if (!code.includes('function sumArray')) {
        throw new Error('Код должен содержать функцию sumArray');
      }

      // Создаем безопасный контекст для выполнения кода
      const logs: string[] = [];
      const context = {
        console: {
          log: (...args: any[]) => {
            const message = args.join(' ');
            logs.push(message);
            toast.success(message);
          },
          error: (...args: any[]) => {
            const message = args.join(' ');
            logs.push(`Error: ${message}`);
            toast.error(message);
          }
        }
      };

      // Создаем функцию из кода пользователя
      const userFunction = new Function('arr', `
        ${code}
        return sumArray(arr);
      `);
      
      const results: TestResult[] = selectedTask.testCases.map(testCase => {
        try {
          const input = JSON.parse(testCase.input);
          const expected = testCase.output;
          const actual = userFunction(input).toString();
          
          const passed = actual === expected;
          
          if (passed) {
            toast.success(`Тест пройден: ${testCase.input} → ${actual}`);
          } else {
            toast.error(`Тест не пройден: ${testCase.input} → ${actual} (ожидалось: ${expected})`);
          }
          
          return {
            passed,
            input: testCase.input,
            expected,
            actual
          };
        } catch (error) {
          toast.error(`Ошибка в тесте: ${error.message}`);
          return {
            passed: false,
            input: testCase.input,
            expected: testCase.output,
            actual: `Ошибка: ${error.message}`
          };
        }
      });

      setTestResults(results);

      // Показываем общий результат
      const allPassed = results.every(r => r.passed);
      if (allPassed) {
        toast.success('Все тесты пройдены! 🎉');
      } else {
        toast.error(`Пройдено ${results.filter(r => r.passed).length} из ${results.length} тестов`);
      }

    } catch (error) {
      toast.error(`Ошибка компиляции: ${error.message}`);
      setTestResults([{
        passed: false,
        input: "Ошибка компиляции",
        expected: "",
        actual: error.message
      }]);
    } finally {
      setIsRunning(false);
    }
  };

  // Добавляем обработчик нажатия Enter в редакторе
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      runTests();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#363636',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            borderRadius: '0.5rem',
            padding: '1rem',
          },
        }}
      />
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Практические задачи
            </h1>
            <p className="text-muted-foreground text-lg">
              Решайте практические задачи для закрепления знаний
            </p>
          </div>

          {/* Фильтры и поиск */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Поиск задач..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Сложность" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все уровни</SelectItem>
                    <SelectItem value="easy">Легкий</SelectItem>
                    <SelectItem value="medium">Средний</SelectItem>
                    <SelectItem value="hard">Сложный</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Тема" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все темы</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">По умолчанию</SelectItem>
                    <SelectItem value="difficulty-asc">По сложности (легкие → сложные)</SelectItem>
                    <SelectItem value="difficulty-desc">По сложности (сложные → легкие)</SelectItem>
                    <SelectItem value="alphabetical">По алфавиту</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Боковая панель со списком задач */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Список задач</h2>
                <ScrollArea className="h-[calc(100vh-300px)] pr-4">
                  <div className="space-y-3">
                    {filteredTasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => handleTaskSelect(task)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedTask?.id === task.id
                            ? 'bg-purple-100 border-purple-200 shadow-md'
                            : 'bg-white/50 hover:bg-white/80 border border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={`bg-gradient-to-r ${getDifficultyColor(task.difficulty)} text-white border-0`}>
                            {task.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            {task.category}
                          </Badge>
                        </div>
                        <h3 className="font-medium text-gray-800 mb-1">{task.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>

            {/* Основная область с редактором кода */}
            <div className="lg:col-span-8">
              {selectedTask ? (
                <div className="space-y-4">
                  <Card className="bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl font-semibold text-gray-800">{selectedTask.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{selectedTask.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={`bg-gradient-to-r ${getDifficultyColor(selectedTask.difficulty)} text-white border-0`}>
                            {selectedTask.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            {selectedTask.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="code" className="w-full">
                        <TabsList className="mb-4">
                          <TabsTrigger value="code">Код</TabsTrigger>
                          <TabsTrigger value="tests">Тесты</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="code">
                          <div className="space-y-4">
                            {/* Тест-кейсы */}
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h3 className="font-medium text-gray-800 mb-3">Тестовые случаи:</h3>
                              <div className="space-y-3">
                                {selectedTask.testCases.map((testCase, index) => (
                                  <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                                    <div className="flex items-start gap-2">
                                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-medium">
                                        {index + 1}
                                      </div>
                                      <div className="flex-grow space-y-2">
                                        <div>
                                          <span className="font-medium text-gray-600">Вход:</span>
                                          <code className="ml-2 bg-gray-100 px-2 py-1 rounded">{testCase.input}</code>
                                        </div>
                                        <div>
                                          <span className="font-medium text-gray-600">Ожидаемый результат:</span>
                                          <code className="ml-2 bg-gray-100 px-2 py-1 rounded">{testCase.output}</code>
                                        </div>
                                        {testCase.explanation && (
                                          <div className="text-sm text-muted-foreground">
                                            {testCase.explanation}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Редактор кода */}
                            <div className="relative">
                              <textarea
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full h-[400px] font-mono text-sm p-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                spellCheck="false"
                                placeholder="Введите ваш код здесь..."
                              />
                              <div className="absolute bottom-4 right-4 flex gap-2">
                                <Button
                                  onClick={runTests}
                                  disabled={isRunning}
                                  className="bg-purple-600 hover:bg-purple-700"
                                >
                                  {isRunning ? (
                                    <span className="flex items-center">
                                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                      Запуск...
                                    </span>
                                  ) : (
                                    <span className="flex items-center">
                                      <Play className="h-4 w-4 mr-2" />
                                      Запустить тесты
                                    </span>
                                  )}
                                </Button>
                                <div className="text-xs text-muted-foreground hidden sm:flex items-center">
                                  <span>Ctrl + Enter для запуска</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="tests">
                          <ScrollArea className="h-[400px] pr-4">
                            <div className="space-y-4">
                              {testResults.length === 0 ? (
                                <div className="text-center text-muted-foreground py-8">
                                  Запустите тесты, чтобы увидеть результаты
                                </div>
                              ) : (
                                testResults.map((result, index) => (
                                  <div
                                    key={index}
                                    className={`p-4 rounded-lg border ${
                                      result.passed
                                        ? 'bg-green-50 border-green-200'
                                        : 'bg-red-50 border-red-200'
                                    }`}
                                  >
                                    <div className="flex items-center mb-2">
                                      {result.passed ? (
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                      ) : (
                                        <X className="h-5 w-5 text-red-500 mr-2" />
                                      )}
                                      <span className="font-medium">
                                        Тест {index + 1}: {result.passed ? 'Пройден' : 'Не пройден'}
                                      </span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                      <div>
                                        <span className="font-medium text-gray-600">Вход:</span>
                                        <code className="ml-2 bg-gray-100 px-2 py-1 rounded">{result.input}</code>
                                      </div>
                                      <div>
                                        <span className="font-medium text-gray-600">Ожидаемый результат:</span>
                                        <code className="ml-2 bg-gray-100 px-2 py-1 rounded">{result.expected}</code>
                                      </div>
                                      <div>
                                        <span className="font-medium text-gray-600">Полученный результат:</span>
                                        <code className="ml-2 bg-gray-100 px-2 py-1 rounded">{result.actual}</code>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              )}
                            </div>
                          </ScrollArea>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-8 text-center">
                  <div className="max-w-md mx-auto">
                    <Code className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Выберите задачу</h3>
                    <p className="text-muted-foreground">
                      Выберите задачу из списка слева, чтобы начать её решение
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tasks; 