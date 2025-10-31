import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  Code,
  Package,
  MousePointer,
  Zap,
  Globe,
  Star,
  Search,
  Filter,
  BookOpen,
  Layers,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";

const UnifiedReference = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("functions");

  const copyToClipboard = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    toast.success(`Код "${title}" скопирован!`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const referenceData = {
    functions: {
      icon: Code,
      title: "Функции",
      color: "from-purple-500 to-blue-500",
      sections: [
        {
          id: "declaration",
          title: "Function Declaration",
          level: "basic",
          description: "Классическое объявление функции с hoisting",
          code: `function greet(name) {
  return \`Привет, \${name}!\`;
}

// Вызов до объявления работает благодаря hoisting
console.log(greet("Анна")); // "Привет, Анна!"`,
          tips: "Поднимается наверх (hoisting), доступна в любом месте области видимости",
        },
        {
          id: "expression",
          title: "Function Expression",
          level: "basic",
          description: "Функция как значение переменной",
          code: `const multiply = function(a, b) {
  return a * b;
};

// Анонимная функция в колбэке
[1, 2, 3].map(function(n) { return n * 2; });`,
          tips: "Не поднимается (no hoisting), создается в момент выполнения",
        },
        {
          id: "arrow",
          title: "Arrow Functions",
          level: "intermediate",
          description: "Современный синтаксис с лексическим this",
          code: `// Краткий синтаксис
const add = (a, b) => a + b;
const square = x => x * x;
const sayHello = () => "Привет!";

// Особенности this
const obj = {
  name: 'Object',
  regular() { console.log(this.name); }, // 'Object'
  arrow: () => { console.log(this.name); } // undefined
};`,
          tips: "Не имеет собственного this, arguments, не может быть конструктором",
        },
        {
          id: "closure",
          title: "Замыкания (Closures)",
          level: "advanced",
          description: "Функция с доступом к внешней области видимости",
          code: `function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.get()); // 1`,
          tips: "Создает приватные переменные, основа для модульного программирования",
        },
        {
          id: "iife",
          title: "IIFE (Immediately Invoked Function Expression)",
          level: "intermediate",
          description: "Функция, которая выполняется сразу после объявления",
          code: `// Классический синтаксис
(function() {
  console.log('IIFE выполнена!');
})();

// ES6+ синтаксис
(() => {
  console.log('Arrow IIFE!');
})();`,
          tips: "IIFE часто используют для создания изолированной области видимости",
        },
        {
          id: "currying",
          title: "Каррирование (Currying)",
          level: "advanced",
          description:
            "Преобразование функции с несколькими аргументами в последовательность функций по одному аргументу",
          code: `function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3)); // 6`,
          tips: "Каррирование удобно для частичного применения и композиции функций",
        },
        {
          id: "recursion",
          title: "Рекурсия (Recursion)",
          level: "intermediate",
          description: "Функция, вызывающая саму себя для решения задачи",
          code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120`,
          tips: "Рекурсия полезна для работы с деревьями, обхода структур данных и алгоритмов",
        },
        {
          id: "generator",
          title: "Генераторы (Generators)",
          level: "advanced",
          description: "Функции, которые могут приостанавливать и возобновлять выполнение",
          code: `function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  for (const num of range(1, 3)) {
    console.log(num); // 1, 2, 3
  }`,
          tips: "Генераторы удобны для ленивых вычислений и работы с потоками данных",
        },
      ],
    },
    oop: {
      icon: Package,
      title: "ООП и SOLID",
      color: "from-green-500 to-teal-500",
      sections: [
        {
          id: "class-basics",
          title: "Основы классов",
          level: "basic",
          description: "Создание и использование классов в ES6+",
          code: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} издает звук\`;
  }
}

const dog = new Animal('Шарик');
dog.speak(); // 'Шарик издает звук'`,
          tips: "Классы — синтаксический сахар над прототипами, поддерживают наследование и методы",
        },
        {
          id: "static-methods",
          title: "Статические методы",
          level: "intermediate",
          description: "Методы, доступные на самом классе, а не на экземплярах",
          code: `class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 5`,
          tips: "Статические методы часто используют для утилитарных функций, не зависящих от состояния экземпляра",
        },
        {
          id: "oop-principles",
          title: "Принципы ООП",
          level: "intermediate",
          description: "Инкапсуляция, наследование, полиморфизм, абстракция",
          code: `// Инкапсуляция
class Counter {
  #count = 0;
  increment() { this.#count++; }
  get value() { return this.#count; }
}

// Наследование
class Animal { speak() { return 'Звук'; } }
class Dog extends Animal { speak() { return 'Гав'; } }

// Полиморфизм
const animals = [new Animal(), new Dog()];
animals.forEach(a => console.log(a.speak()));`,
          tips: "ООП помогает структурировать код, облегчает повторное использование и расширяемость",
        },
        {
          id: "solid",
          title: "SOLID",
          level: "advanced",
          description: "5 принципов проектирования для гибкого и поддерживаемого кода",
          code: `// S — Single Responsibility
class Logger { log(msg) { /* ... */ } }
class UserService { /* ... */ }

// O — Open/Closed
class Shape { area() { throw 'Not implemented'; } }
class Circle extends Shape { area() { /* ... */ } }

// D — Dependency Inversion
class DB { /* ... */ }
class Service {
  constructor(db) { this.db = db; }
}`,
          tips: "SOLID: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
        },
        {
          id: "dry-kiss",
          title: "DRY, KISS и другие принципы",
          level: "basic",
          description: "Кратко о принципах: DRY, KISS, YAGNI, и пр.",
          code: `// DRY — Don't Repeat Yourself
function sum(a, b) { return a + b; }
// KISS — Keep It Simple, Stupid
// YAGNI — You Aren't Gonna Need It
// Принципы помогают писать чистый и поддерживаемый код`,
          tips: "Следуйте этим принципам для простоты, читаемости и поддержки кода",
        },
      ],
    },
    dom: {
      icon: MousePointer,
      title: "DOM JavaScript",
      color: "from-blue-500 to-indigo-500",
      sections: [
        {
          id: "selection",
          title: "Поиск элементов",
          level: "basic",
          description: "Методы для поиска элементов в DOM",
          code: `// Современные методы (рекомендуются)
const element = document.querySelector('#myId');
const elements = document.querySelectorAll('.myClass');

// Классические методы
const byId = document.getElementById('myId');
const byClass = document.getElementsByClassName('myClass');
const byTag = document.getElementsByTagName('div');

// Комплексные селекторы
const nested = document.querySelector('.parent > .child:first-child');`,
          tips: "querySelector/querySelectorAll поддерживают CSS селекторы и работают быстрее",
        },
        {
          id: "manipulation",
          title: "Изменение элементов",
          level: "intermediate",
          description: "Изменение содержимого и свойств",
          code: `const element = document.querySelector('#myElement');

// Содержимое
element.textContent = 'Новый текст';
element.innerHTML = '<strong>HTML</strong>';

// Классы
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');

// Стили
element.style.color = 'red';
element.style.cssText = 'color: red; font-size: 16px;';

// Атрибуты
element.setAttribute('data-id', '123');
element.removeAttribute('hidden');`,
          tips: "Используйте textContent для безопасности, innerHTML только для доверенного контента",
        },
        {
          id: "events",
          title: "События",
          level: "intermediate",
          description: "Обработка пользовательских действий",
          code: `const button = document.querySelector('#myButton');

// Добавление обработчика
button.addEventListener('click', function(event) {
  console.log('Клик!', event.target);
  event.preventDefault(); // Отменить действие по умолчанию
  event.stopPropagation(); // Остановить всплытие
});

// Делегирование событий
document.addEventListener('click', (e) => {
  if (e.target.matches('.dynamic-button')) {
    console.log('Клик по динамической кнопке');
  }
});`,
          tips: "Делегирование событий эффективно для динамического контента",
        },
      ],
    },
    async: {
      icon: Zap,
      title: "Асинхронный JS",
      color: "from-yellow-500 to-orange-500",
      sections: [
        {
          id: "promises",
          title: "Promises",
          level: "intermediate",
          description: "Объекты для работы с асинхронными операциями",
          code: `// Создание промиса
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Данные получены');
    }, 1000);
  });
};

// Использование
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Завершено'));`,
          tips: "Промисы имеют три состояния: pending, fulfilled, rejected",
        },
        {
          id: "async-await",
          title: "Async/Await",
          level: "intermediate",
          description: "Синтаксический сахар для промисов",
          code: `async function fetchUserData(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Ошибка загрузки:', error);
    throw error;
  }
}

// Использование
const user = await fetchUserData(123);`,
          tips: "async/await делает асинхронный код похожим на синхронный",
        },
        {
          id: "promise-methods",
          title: "Методы Promise",
          level: "advanced",
          description: "Комбинирование множественных промисов",
          code: `// Все промисы параллельно
const results = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]);

// Первый выполнившийся
const fastest = await Promise.race([
  fetch('/api/fast'),
  fetch('/api/slow')
]);

// Все результаты (включая ошибки)
const settled = await Promise.allSettled([
  Promise.resolve('OK'),
  Promise.reject('Error')
]);`,
          tips: "Promise.all завершается неудачей при первой ошибке, allSettled - нет",
        },
      ],
    },
    webapi: {
      icon: Globe,
      title: "Web API",
      color: "from-blue-500 to-cyan-500",
      sections: [
        {
          id: "fetch",
          title: "Fetch API",
          level: "basic",
          description: "Современный способ HTTP-запросов",
          code: `// GET запрос
const response = await fetch('/api/users');
const users = await response.json();

// POST запрос
const newUser = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', age: 30 })
});

// Обработка ошибок
if (!response.ok) {
  throw new Error(\`HTTP error! status: \${response.status}\`);
}`,
          tips: "Fetch не отклоняет промис для HTTP ошибок (404, 500), проверяйте response.ok",
        },
        {
          id: "storage",
          title: "Web Storage",
          level: "basic",
          description: "Хранение данных в браузере",
          code: `// localStorage - постоянное хранение
localStorage.setItem('user', JSON.stringify({ name: 'John' }));
const user = JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');

// sessionStorage - до закрытия вкладки
sessionStorage.setItem('temp', 'value');

// Проверка поддержки
if (typeof Storage !== 'undefined') {
  // Storage поддерживается
}`,
          tips: "localStorage сохраняется между сессиями, sessionStorage - только в рамках вкладки",
        },
        {
          id: "geolocation",
          title: "Geolocation API",
          level: "intermediate",
          description: "Получение местоположения пользователя",
          code: `// Получить текущую позицию
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    console.log(\`Координаты: \${latitude}, \${longitude}\`);
  },
  (error) => {
    console.error('Ошибка геолокации:', error.message);
  },
  { timeout: 10000, enableHighAccuracy: true }
);

// Отслеживание позиции
const watchId = navigator.geolocation.watchPosition(callback);
navigator.geolocation.clearWatch(watchId);`,
          tips: "Требует разрешения пользователя, работает только по HTTPS",
        },
      ],
    },
    es6: {
      icon: Star,
      title: "ES6+ Features",
      color: "from-emerald-500 to-teal-500",
      sections: [
        {
          id: "destructuring",
          title: "Деструктуризация",
          level: "basic",
          description: "Извлечение значений из объектов и массивов",
          code: `// Объекты
const user = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = user;
const { name: userName, country = 'USA' } = user;

// Массивы
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;
const [, , third] = colors; // пропуск элементов

// В параметрах функции
function greet({ name, age }) {
  return \`\${name} is \${age} years old\`;
}`,
          tips: "Деструктуризация работает вложенно и поддерживает значения по умолчанию",
        },
        {
          id: "spread-rest",
          title: "Spread/Rest операторы",
          level: "intermediate",
          description: "Расширение и сбор элементов",
          code: `// Spread в массивах
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread в объектах
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, city: 'NYC' };

// Rest в функциях
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Rest в деструктуризации
const [first, ...rest] = [1, 2, 3, 4];`,
          tips: "Spread создает поверхностную копию, для глубокого клонирования используйте другие методы",
        },
        {
          id: "template-literals",
          title: "Шаблонные строки",
          level: "basic",
          description: "Удобная интерполяция переменных",
          code: `const name = 'John';
const age = 30;

// Базовая интерполяция
const message = \`Привет, я \${name}, мне \${age} лет\`;

// Многострочные строки
const html = \`
  <div class="user">
    <h1>\${name}</h1>
    <p>Возраст: \${age}</p>
  </div>
\`;

// Вызов функций
const formatted = \`Сумма: \${(100 * 1.2).toFixed(2)}$\`;`,
          tips: "Используйте обратные кавычки (`), поддерживает любые JavaScript выражения",
        },
        {
          id: "modules",
          title: "ES6 Модули",
          level: "intermediate",
          description: "Система модулей для организации кода",
          code: `// math.js - экспорт
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// main.js - импорт
import multiply, { PI, add } from './math.js';
import * as math from './math.js';
import { add as sum } from './math.js';

// Динамический импорт
const module = await import('./math.js');
if (condition) {
  const { feature } = await import('./feature.js');
}`,
          tips: "Модули загружаются асинхронно, export default - один на модуль",
        },
      ],
    },
  };

  const filteredSections = (sections: any[]) => {
    return sections.filter((section) => {
      const matchesSearch =
        searchTerm === "" ||
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.code.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLevel = selectedLevel === "all" || section.level === selectedLevel;

      return matchesSearch && matchesLevel;
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "basic":
        return "bg-green-100 text-green-700";
      case "intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case "basic":
        return "Базовый";
      case "intermediate":
        return "Средний";
      case "advanced":
        return "Продвинутый";
      default:
        return level;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg">
            <BookOpen className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Справочник JavaScript
            </h1>
            <p className="text-muted-foreground">
              Полный интерактивный справочник по современному JavaScript
            </p>
          </div>
        </div>

        {/* Поиск и фильтры */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-purple-200">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Поиск по справочнику..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedLevel === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel("all")}
                >
                  Все
                </Button>
                <Button
                  variant={selectedLevel === "basic" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel("basic")}
                  className="text-green-600"
                >
                  Базовый
                </Button>
                <Button
                  variant={selectedLevel === "intermediate" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel("intermediate")}
                  className="text-yellow-600"
                >
                  Средний
                </Button>
                <Button
                  variant={selectedLevel === "advanced" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel("advanced")}
                  className="text-red-600"
                >
                  Продвинутый
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar navigation */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-64 w-full mb-4 lg:mb-0">
            <Card className="bg-white/90 border border-purple-100 rounded-2xl shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold text-purple-700">Разделы</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1 p-3">
                {Object.entries(referenceData).map(([key, data]) => (
                  <Button
                    key={key}
                    variant={selectedTab === key ? "default" : "ghost"}
                    className={`justify-start w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${selectedTab === key ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md" : "text-purple-700 hover:bg-purple-50"}`}
                    onClick={() => setSelectedTab(key)}
                  >
                    <data.icon className="h-4 w-4 mr-2" />
                    {data.title}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
          {/* Main content */}
          <div className="flex-1">
            <Tabs
              defaultValue="functions"
              className="w-full"
              value={selectedTab}
              onValueChange={setSelectedTab}
            >
              {Object.entries(referenceData).map(([key, data]) => (
                <TabsContent key={key} value={key}>
                  <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${data.color} shadow-lg`}>
                          <data.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {data.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {key === "functions" ? (
                        <>
                          {/* Виды функций */}
                          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            Виды функций
                          </h3>
                          <div className="mb-6">
                            <Accordion type="single" collapsible className="w-full">
                              {filteredSections(data.sections)
                                .filter((section) =>
                                  ["declaration", "expression", "arrow"].includes(section.id)
                                )
                                .map((section, index) => (
                                  <AccordionItem
                                    key={section.id}
                                    value={section.id}
                                    className="border border-purple-100 rounded-xl mb-3"
                                  >
                                    <AccordionTrigger className="text-left px-4 py-3 hover:bg-purple-50 rounded-t-xl">
                                      <div className="flex items-center justify-between w-full mr-4">
                                        <div>
                                          <div className="font-semibold text-lg text-foreground">
                                            {section.title}
                                          </div>
                                          <div className="text-sm text-gray-600 mt-1">
                                            {section.description}
                                          </div>
                                        </div>
                                        <Badge className={getLevelColor(section.level)}>
                                          {getLevelText(section.level)}
                                        </Badge>
                                      </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 pb-4">
                                      <div className="bg-white/80 rounded-lg border border-purple-100 overflow-hidden">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
                                          <span className="text-sm font-medium text-gray-700">
                                            Пример кода
                                          </span>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() =>
                                              copyToClipboard(section.code, section.title)
                                            }
                                            className="text-gray-600 hover:text-purple-600"
                                          >
                                            <Copy className="h-4 w-4 mr-2" />
                                            {copiedCode === section.title
                                              ? "Скопировано!"
                                              : "Копировать"}
                                          </Button>
                                        </div>
                                        <pre className="p-4 overflow-x-auto text-sm font-mono text-purple-900 bg-white">
                                          <code>{section.code}</code>
                                        </pre>
                                      </div>
                                      {section.tips && (
                                        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                          <div className="flex items-start gap-2">
                                            <div className="p-1 rounded-full bg-blue-100">
                                              <BookOpen className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <div>
                                              <h4 className="font-medium text-blue-800 mb-1">
                                                💡 Совет
                                              </h4>
                                              <p className="text-sm text-blue-700">
                                                {section.tips}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </AccordionContent>
                                  </AccordionItem>
                                ))}
                            </Accordion>
                          </div>
                          {/* Остальные подтемы */}
                          {filteredSections(data.sections)
                            .filter(
                              (section) =>
                                !["declaration", "expression", "arrow"].includes(section.id)
                            )
                            .map((section, idx) => (
                              <div key={section.id} className="mb-6">
                                <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                                  {section.title}
                                </h3>
                                <Accordion type="single" collapsible className="w-full">
                                  <AccordionItem
                                    value={section.id}
                                    className="border border-purple-100 rounded-xl mb-3"
                                  >
                                    <AccordionTrigger className="text-left px-4 py-3 hover:bg-purple-50 rounded-t-xl">
                                      <div className="flex items-center justify-between w-full mr-4">
                                        <div>
                                          <div className="font-semibold text-lg text-foreground">
                                            {section.title}
                                          </div>
                                          <div className="text-sm text-gray-600 mt-1">
                                            {section.description}
                                          </div>
                                        </div>
                                        <Badge className={getLevelColor(section.level)}>
                                          {getLevelText(section.level)}
                                        </Badge>
                                      </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 pb-4">
                                      <div className="bg-white/80 rounded-lg border border-purple-100 overflow-hidden">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
                                          <span className="text-sm font-medium text-gray-700">
                                            Пример кода
                                          </span>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() =>
                                              copyToClipboard(section.code, section.title)
                                            }
                                            className="text-gray-600 hover:text-purple-600"
                                          >
                                            <Copy className="h-4 w-4 mr-2" />
                                            {copiedCode === section.title
                                              ? "Скопировано!"
                                              : "Копировать"}
                                          </Button>
                                        </div>
                                        <pre className="p-4 overflow-x-auto text-sm font-mono text-purple-900 bg-white">
                                          <code>{section.code}</code>
                                        </pre>
                                      </div>
                                      {section.tips && (
                                        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                          <div className="flex items-start gap-2">
                                            <div className="p-1 rounded-full bg-blue-100">
                                              <BookOpen className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <div>
                                              <h4 className="font-medium text-blue-800 mb-1">
                                                💡 Совет
                                              </h4>
                                              <p className="text-sm text-blue-700">
                                                {section.tips}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              </div>
                            ))}
                        </>
                      ) : (
                        <>
                          {filteredSections(data.sections).map((section, idx) => (
                            <div key={section.id} className="mb-6">
                              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                                {section.title}
                              </h3>
                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem
                                  value={section.id}
                                  className="border border-green-100 rounded-xl mb-3"
                                >
                                  <AccordionTrigger className="text-left px-4 py-3 hover:bg-green-50 rounded-t-xl">
                                    <div className="flex items-center justify-between w-full mr-4">
                                      <div>
                                        <div className="font-semibold text-lg text-foreground">
                                          {section.title}
                                        </div>
                                        <div className="text-sm text-gray-600 mt-1">
                                          {section.description}
                                        </div>
                                      </div>
                                      <Badge className={getLevelColor(section.level)}>
                                        {getLevelText(section.level)}
                                      </Badge>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-4 pb-4">
                                    <div className="bg-white/80 rounded-lg border border-green-100 overflow-hidden">
                                      <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
                                        <span className="text-sm font-medium text-gray-700">
                                          Пример кода
                                        </span>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() =>
                                            copyToClipboard(section.code, section.title)
                                          }
                                          className="text-gray-600 hover:text-green-600"
                                        >
                                          <Copy className="h-4 w-4 mr-2" />
                                          {copiedCode === section.title
                                            ? "Скопировано!"
                                            : "Копировать"}
                                        </Button>
                                      </div>
                                      <pre className="p-4 overflow-x-auto text-sm font-mono text-green-900 bg-white">
                                        <code>{section.code}</code>
                                      </pre>
                                    </div>
                                    {section.tips && (
                                      <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <div className="flex items-start gap-2">
                                          <div className="p-1 rounded-full bg-blue-100">
                                            <BookOpen className="h-4 w-4 text-blue-600" />
                                          </div>
                                          <div>
                                            <h4 className="font-medium text-blue-800 mb-1">
                                              💡 Совет
                                            </h4>
                                            <p className="text-sm text-blue-700">{section.tips}</p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UnifiedReference;
