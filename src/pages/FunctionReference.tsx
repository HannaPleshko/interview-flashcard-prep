import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Copy, Code, BookOpen, Zap, Layers, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const FunctionReference = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    toast.success(`Код "${title}" скопирован!`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const functionTypes = [
    {
      id: "declaration",
      icon: Code,
      title: "Function Declaration",
      description: "Объявление функции с ключевым словом function",
      examples: [
        {
          title: "Базовое объявление",
          code: `function greet(name) {
  return \`Привет, \${name}!\`;
}

console.log(greet("Анна")); // "Привет, Анна!"`,
          explanation: "Классическое объявление функции. Поднимается наверх (hoisting)."
        },
        {
          title: "С параметрами по умолчанию",
          code: `function createUser(name, age = 18, role = "user") {
  return { name, age, role, isAdult: age >= 18 };
}

const user = createUser("Иван", 25);`,
          explanation: "Функция с параметрами по умолчанию и возвратом объекта."
        }
      ]
    },
    {
      id: "expression",
      icon: Layers,
      title: "Function Expression",
      description: "Функция как выражение, присваиваемое переменной",
      examples: [
        {
          title: "Именованное выражение",
          code: `const calculateArea = function rectangle(width, height) {
  return width * height;
};

console.log(calculateArea(5, 3)); // 15`,
          explanation: "Функция-выражение с именем. Не поднимается (no hoisting)."
        },
        {
          title: "Анонимное выражение",
          code: `const multiply = function(a, b) {
  return a * b;
};

const doubled = [1, 2, 3, 4].map(function(n) {
  return n * 2;
});`,
          explanation: "Анонимная функция, часто используется в колбэках."
        }
      ]
    },
    {
      id: "arrow",
      icon: Zap,
      title: "Arrow Functions",
      description: "Современный синтаксис функций с лексическим this",
      examples: [
        {
          title: "Краткий синтаксис",
          code: `const add = (a, b) => a + b;
const square = x => x * x;
const sayHello = () => "Привет!";

console.log(add(2, 3)); // 5`,
          explanation: "Краткий синтаксис для простых функций."
        },
        {
          title: "С блоком кода",
          code: `const processArray = (arr) => {
  const filtered = arr.filter(x => x > 0);
  const doubled = filtered.map(x => x * 2);
  return doubled.reduce((sum, x) => sum + x, 0);
};`,
          explanation: "Стрелочная функция с блоком кода и несколькими операциями."
        }
      ]
    }
  ];

  const advancedConcepts = [
    {
      id: "closure",
      icon: BookOpen,
      title: "Замыкание (Closure)",
      description: "Функция с доступом к переменным из внешней области видимости",
      examples: [
        {
          title: "Счетчик",
          code: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2`,
          explanation: "Внутренняя функция 'помнит' переменную count из внешней функции."
        }
      ]
    },
    {
      id: "iife",
      icon: Zap,
      title: "IIFE",
      description: "Immediately Invoked Function Expression",
      examples: [
        {
          title: "Классический IIFE",
          code: `(function() {
  const secret = "Это приватная переменная";
  console.log("IIFE выполнен!");
})();

// secret недоступен здесь`,
          explanation: "Создает изолированную область видимости."
        }
      ]
    },
    {
      id: "currying",
      icon: Layers,
      title: "Каррирование",
      description: "Преобразование функции от многих аргументов в последовательность функций",
      examples: [
        {
          title: "Базовое каррирование",
          code: `const multiply = (a) => (b) => (c) => a * b * c;

const multiplyBy2 = multiply(2);
const result = multiplyBy2(3)(4); // 24`,
          explanation: "Каждый вызов возвращает новую функцию до получения всех аргументов."
        }
      ]
    },
    {
      id: "recursion",
      icon: RotateCcw,
      title: "Рекурсия",
      description: "Функция, которая вызывает сама себя",
      examples: [
        {
          title: "Факториал",
          code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120`,
          explanation: "Классический пример рекурсии с базовым случаем."
        }
      ]
    }
  ];

  const renderExamples = (examples: any[], categoryTitle: string) => (
    <div className="space-y-4">
      {examples.map((example, index) => (
        <div key={index} className="border border-purple-200 rounded-2xl p-4 bg-white/60 backdrop-blur-sm shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-lg">{example.title}</h4>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(example.code, example.title)}
              className="flex items-center gap-2 border-purple-200 text-purple-700 hover:bg-white/50"
            >
              <Copy className="h-4 w-4" />
              {copiedCode === example.title ? 'Скопировано!' : 'Копировать'}
            </Button>
          </div>
          <pre className="bg-white/80 border border-purple-100 rounded-xl p-4 overflow-x-auto text-sm mb-3 font-mono text-purple-900 shadow-inner">
            <code>{example.code}</code>
          </pre>
          <p className="text-muted-foreground text-sm">{example.explanation}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg">
              <Code className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                Справочник функций JavaScript
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Полное руководство по функциям в JavaScript: от базовых типов до продвинутых концепций</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Типы функций
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Продвинутые концепции
            </TabsTrigger>
          </TabsList>

          <TabsContent value="types">
            <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Типы функций
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {functionTypes.map((type, idx) => {
                    const IconComponent = type.icon;
                    return (
                      <AccordionItem key={type.id} value={type.id} className="border border-purple-100 rounded-xl mb-2 transition-all duration-300">
                        <AccordionTrigger className="text-left px-3 py-2 hover:bg-purple-50">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">{type.title}</div>
                              <div className="text-xs sm:text-sm text-gray-600">{type.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-3 space-y-4 animate-fade-in">
                          <div className="mb-2 text-xs sm:text-sm text-gray-700 font-medium">{type.description}</div>
                          {type.examples.map((example, i) => (
                            <div key={i} className="border border-purple-100 rounded-lg p-3 bg-white/80 mb-2">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block bg-purple-100 text-purple-700 rounded-full px-2 py-0.5 text-xs font-bold">{i + 1}</span>
                                <span className="font-semibold text-sm bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{example.title}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => copyToClipboard(example.code, example.title)}
                                  className="ml-auto text-gray-400 hover:text-blue-600"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                              <pre className="bg-white/90 border border-purple-100 rounded p-3 overflow-x-auto text-xs sm:text-sm font-mono text-purple-900 shadow-inner mb-2">
                                <code>{example.code}</code>
                              </pre>
                              <p className="text-xs sm:text-sm text-muted-foreground">{example.explanation}</p>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced">
            <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Продвинутые концепции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {advancedConcepts.map((concept, idx) => {
                    const IconComponent = concept.icon;
                    return (
                      <AccordionItem key={concept.id} value={concept.id} className="border border-purple-100 rounded-xl mb-2 transition-all duration-300">
                        <AccordionTrigger className="text-left px-3 py-2 hover:bg-purple-50">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">{concept.title}</div>
                              <div className="text-xs sm:text-sm text-gray-600">{concept.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-3 space-y-4 animate-fade-in">
                          <div className="mb-2 text-xs sm:text-sm text-gray-700 font-medium">{concept.description}</div>
                          {concept.examples.map((example, i) => (
                            <div key={i} className="border border-purple-100 rounded-lg p-3 bg-white/80 mb-2">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block bg-purple-100 text-purple-700 rounded-full px-2 py-0.5 text-xs font-bold">{i + 1}</span>
                                <span className="font-semibold text-sm bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{example.title}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => copyToClipboard(example.code, example.title)}
                                  className="ml-auto text-gray-400 hover:text-blue-600"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                              <pre className="bg-white/90 border border-purple-100 rounded p-3 overflow-x-auto text-xs sm:text-sm font-mono text-purple-900 shadow-inner mb-2">
                                <code>{example.code}</code>
                              </pre>
                              <p className="text-xs sm:text-sm text-muted-foreground">{example.explanation}</p>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FunctionReference;
