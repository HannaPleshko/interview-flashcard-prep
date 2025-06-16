
import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
      title: "Function Declaration",
      description: "Объявление функции с ключевым словом function",
      icon: <Code className="h-5 w-5" />,
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
  return {
    name,
    age,
    role,
    isAdult: age >= 18
  };
}

const user = createUser("Иван", 25);
console.log(user);`,
          explanation: "Функция с параметрами по умолчанию и возвратом объекта."
        }
      ]
    },
    {
      id: "expression",
      title: "Function Expression",
      description: "Функция как выражение, присваиваемое переменной",
      icon: <Layers className="h-5 w-5" />,
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

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function(n) {
  return n * 2;
});
console.log(doubled); // [2, 4, 6, 8]`,
          explanation: "Анонимная функция, часто используется в колбэках."
        }
      ]
    },
    {
      id: "arrow",
      title: "Arrow Functions",
      description: "Современный синтаксис функций с лексическим this",
      icon: <Zap className="h-5 w-5" />,
      examples: [
        {
          title: "Краткий синтаксис",
          code: `const add = (a, b) => a + b;
const square = x => x * x;
const sayHello = () => "Привет!";

console.log(add(2, 3)); // 5
console.log(square(4)); // 16
console.log(sayHello()); // "Привет!"`,
          explanation: "Краткий синтаксис для простых функций."
        },
        {
          title: "С блоком кода",
          code: `const processArray = (arr) => {
  const filtered = arr.filter(x => x > 0);
  const doubled = filtered.map(x => x * 2);
  return doubled.reduce((sum, x) => sum + x, 0);
};

const result = processArray([-1, 2, 3, -4, 5]);
console.log(result); // 20`,
          explanation: "Стрелочная функция с блоком кода и несколькими операциями."
        }
      ]
    }
  ];

  const advancedConcepts = [
    {
      id: "iife",
      title: "IIFE",
      subtitle: "Immediately Invoked Function Expression",
      description: "Функция, которая выполняется сразу после создания",
      icon: <Zap className="h-5 w-5 text-orange-500" />,
      examples: [
        {
          title: "Классический IIFE",
          code: `(function() {
  const secret = "Это приватная переменная";
  console.log("IIFE выполнен!");
  
  // Код здесь изолирован от глобальной области
})();

// secret недоступен здесь`,
          explanation: "Создает изолированную область видимости, часто используется для инициализации."
        },
        {
          title: "IIFE с параметрами",
          code: `const result = (function(a, b) {
  return a + b;
})(5, 3);

console.log(result); // 8

// Модульный паттерн
const MyModule = (function() {
  let counter = 0;
  
  return {
    increment: () => ++counter,
    decrement: () => --counter,
    getCount: () => counter
  };
})();`,
          explanation: "IIFE может принимать параметры и возвращать значения."
        }
      ]
    },
    {
      id: "currying",
      title: "Каррирование",
      subtitle: "Currying",
      description: "Преобразование функции от многих аргументов в последовательность функций",
      icon: <Layers className="h-5 w-5 text-blue-500" />,
      examples: [
        {
          title: "Базовое каррирование",
          code: `const multiply = (a) => (b) => (c) => a * b * c;

const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
const result = multiplyBy2And3(4); // 24

// Или в одну строку
const result2 = multiply(2)(3)(4); // 24`,
          explanation: "Каждый вызов возвращает новую функцию до получения всех аргументов."
        },
        {
          title: "Практическое применение",
          code: `const log = (level) => (message) => {
  console.log(\`[\${level.toUpperCase()}] \${message}\`);
};

const logError = log('error');
const logInfo = log('info');

logError('Произошла ошибка!'); // [ERROR] Произошла ошибка!
logInfo('Операция завершена'); // [INFO] Операция завершена

// Каррирование для фильтрации
const filterBy = (property) => (value) => (array) => 
  array.filter(item => item[property] === value);

const filterByAge = filterBy('age');
const adults = filterByAge(18)([
  {name: 'Анна', age: 17},
  {name: 'Петр', age: 25}
]);`,
          explanation: "Каррирование полезно для создания специализированных функций."
        }
      ]
    },
    {
      id: "recursion",
      title: "Рекурсия",
      subtitle: "Recursion",
      description: "Функция, которая вызывает сама себя",
      icon: <RotateCcw className="h-5 w-5 text-green-500" />,
      examples: [
        {
          title: "Факториал",
          code: `function factorial(n) {
  // Базовый случай
  if (n <= 1) return 1;
  
  // Рекурсивный случай
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1`,
          explanation: "Классический пример рекурсии с базовым случаем для остановки."
        },
        {
          title: "Обход дерева",
          code: `const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { 
      value: 3, 
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] }
      ] 
    }
  ]
};

function traverseTree(node) {
  console.log(node.value);
  
  node.children.forEach(child => {
    traverseTree(child); // Рекурсивный вызов
  });
}

traverseTree(tree); // 1, 2, 3, 4, 5`,
          explanation: "Рекурсия идеально подходит для работы с древовидными структурами."
        }
      ]
    },
    {
      id: "closure",
      title: "Замыкание",
      subtitle: "Closure",
      description: "Функция с доступом к переменным из внешней области видимости",
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
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
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (независимый счетчик)`,
          explanation: "Внутренняя функция 'помнит' переменную count из внешней функции."
        },
        {
          title: "Конфигуратор",
          code: `function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12

// Более сложный пример
function createValidator(rules) {
  return function(data) {
    return rules.every(rule => rule(data));
  };
}

const isValidUser = createValidator([
  user => user.name && user.name.length > 0,
  user => user.age && user.age >= 18,
  user => user.email && user.email.includes('@')
]);`,
          explanation: "Замыкания позволяют создавать функции с предустановленной конфигурацией."
        }
      ]
    },
    {
      id: "generator",
      title: "Генераторы",
      subtitle: "Generator Functions",
      description: "Функции, которые могут приостанавливать и возобновлять выполнение",
      icon: <Zap className="h-5 w-5 text-red-500" />,
      examples: [
        {
          title: "Простой генератор",
          code: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return 'готово';
}

const gen = numberGenerator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 'готово', done: true}

// Использование в цикле
for (const value of numberGenerator()) {
  console.log(value); // 1, 2, 3
}`,
          explanation: "Генераторы позволяют создавать итерируемые последовательности."
        },
        {
          title: "Бесконечная последовательность",
          code: `function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3

// Получить первые N чисел Фибоначчи
function* take(n, generator) {
  let count = 0;
  for (const value of generator) {
    if (count >= n) break;
    yield value;
    count++;
  }
}

const first10Fib = [...take(10, fibonacci())];
console.log(first10Fib);`,
          explanation: "Генераторы могут создавать бесконечные последовательности, вычисляя значения по требованию."
        }
      ]
    }
  ];

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

          <TabsContent value="types" className="space-y-6">
            {functionTypes.map((type) => (
              <Card key={type.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {type.icon}
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {type.examples.map((example, index) => (
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
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            {advancedConcepts.map((concept) => (
              <Card key={concept.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {concept.icon}
                    <div>
                      <div>{concept.title}</div>
                      <div className="text-sm font-normal text-gray-500">{concept.subtitle}</div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {concept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {concept.examples.map((example, index) => (
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
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FunctionReference;
