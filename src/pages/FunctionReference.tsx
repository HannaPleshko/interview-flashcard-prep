
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
        <div key={index} className="border rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-800">{example.title}</h4>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(example.code, example.title)}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              {copiedCode === example.title ? 'Скопировано!' : 'Копировать'}
            </Button>
          </div>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
            <code>{example.code}</code>
          </pre>
          <p className="text-gray-600 text-sm">{example.explanation}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Справочник функций JavaScript
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Полное руководство по функциям в JavaScript: от базовых типов до продвинутых концепций
          </p>
        </div>

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
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Типы функций
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {functionTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <AccordionItem key={type.id} value={type.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{type.title}</div>
                              <div className="text-sm text-gray-600">{type.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          {renderExamples(type.examples, type.title)}
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
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Продвинутые концепции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {advancedConcepts.map((concept) => {
                    const IconComponent = concept.icon;
                    return (
                      <AccordionItem key={concept.id} value={concept.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{concept.title}</div>
                              <div className="text-sm text-gray-600">{concept.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          {renderExamples(concept.examples, concept.title)}
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
