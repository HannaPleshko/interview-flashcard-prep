import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, Circle, Square, Database, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DataType {
  name: string;
  description: string;
  category: "primitive" | "object";
  example: string;
  keyPoints: string[];
  methods: string[];
  useCases: string[];
}

const dataTypes: DataType[] = [
  {
    name: "String",
    description: "Тип данных для работы со строками",
    category: "primitive",
    example: `const str = "Hello";
const str2 = 'World';
const str3 = \`Hello \${str2}\`;`,
    keyPoints: [
      "Неизменяемый (immutable) тип данных",
      "Может быть создан с помощью одинарных, двойных или обратных кавычек",
      "Имеет встроенные методы для работы со строками",
    ],
    methods: [
      "length - длина строки",
      "toUpperCase() - преобразование в верхний регистр",
      "toLowerCase() - преобразование в нижний регистр",
      "trim() - удаление пробелов",
      "split() - разбиение на массив",
      "includes() - проверка наличия подстроки",
    ],
    useCases: ["Хранение текстовых данных", "Форматирование строк", "Валидация ввода"],
  },
  {
    name: "Number",
    description: "Тип данных для работы с числами",
    category: "primitive",
    example: `const num = 42;
const float = 3.14;
const exp = 1e6;`,
    keyPoints: [
      "Представляет как целые, так и дробные числа",
      "Имеет специальные значения: Infinity, -Infinity, NaN",
      "Точность до 15-17 значащих цифр",
    ],
    methods: [
      "toFixed() - округление до указанного знака",
      "toString() - преобразование в строку",
      "parseInt() - преобразование строки в целое число",
      "parseFloat() - преобразование строки в дробное число",
    ],
    useCases: ["Математические вычисления", "Работа с координатами", "Обработка числовых данных"],
  },
  {
    name: "Boolean",
    description: "Логический тип данных",
    category: "primitive",
    example: `const isTrue = true;
const isFalse = false;
const result = 5 > 3; // true`,
    keyPoints: [
      "Имеет только два значения: true и false",
      "Используется в условных операторах",
      "Результат логических операций",
    ],
    methods: [
      "toString() - преобразование в строку",
      "valueOf() - получение примитивного значения",
    ],
    useCases: ["Условные операторы", "Валидация данных", "Флаги состояния"],
  },
  {
    name: "Symbol",
    description: "Уникальный идентификатор",
    category: "primitive",
    example: `const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false`,
    keyPoints: [
      "Создает уникальное значение",
      "Не может быть создан через new",
      "Используется как ключ объекта",
    ],
    methods: [
      "Symbol.for() - получение символа из глобального реестра",
      "Symbol.keyFor() - получение ключа символа",
      "toString() - преобразование в строку",
    ],
    useCases: [
      "Создание уникальных ключей",
      "Определение специальных свойств",
      "Скрытие свойств объекта",
    ],
  },
  {
    name: "BigInt",
    description: "Тип для работы с большими целыми числами",
    category: "primitive",
    example: `const bigInt = 9007199254740991n;
const bigInt2 = BigInt(9007199254740991);`,
    keyPoints: [
      "Представляет целые числа произвольной точности",
      "Создается с помощью суффикса n или функции BigInt()",
      "Нельзя смешивать с Number",
    ],
    methods: [
      "toString() - преобразование в строку",
      "valueOf() - получение примитивного значения",
    ],
    useCases: ["Работа с большими числами", "Финансовые вычисления", "Криптография"],
  },
  {
    name: "undefined",
    description: "Неопределенное значение",
    category: "primitive",
    example: `let variable;
console.log(variable); // undefined
function test() {}
console.log(test()); // undefined`,
    keyPoints: [
      "Значение по умолчанию для неинициализированных переменных",
      "Возвращаемое значение функции без return",
      "Не рекомендуется присваивать явно",
    ],
    methods: [],
    useCases: [
      "Проверка инициализации переменных",
      "Обработка отсутствующих значений",
      "Валидация параметров",
    ],
  },
  {
    name: "null",
    description: "Отсутствие значения",
    category: "primitive",
    example: `let value = null;
console.log(value); // null
console.log(typeof value); // object`,
    keyPoints: [
      "Явное указание отсутствия значения",
      "Отличается от undefined",
      "Используется для очистки ссылок",
    ],
    methods: [],
    useCases: [
      "Очистка ссылок на объекты",
      "Инициализация переменных",
      "Обработка отсутствующих данных",
    ],
  },
  {
    name: "Object",
    description: "Базовый объект",
    category: "object",
    example: `const obj = {
  name: 'John',
  age: 30,
  sayHello() {
    console.log('Hello!');
  }
};`,
    keyPoints: [
      "Базовый тип для всех объектов",
      "Хранит данные в виде ключ-значение",
      "Может содержать методы",
    ],
    methods: [
      "Object.keys() - получение ключей",
      "Object.values() - получение значений",
      "Object.entries() - получение пар ключ-значение",
      "Object.assign() - копирование свойств",
      "Object.create() - создание объекта с прототипом",
    ],
    useCases: [
      "Структурирование данных",
      "Создание классов и объектов",
      "Хранение связанных данных",
    ],
  },
  {
    name: "Array",
    description: "Массив - упорядоченная коллекция",
    category: "object",
    example: `const arr = [1, 2, 3];
arr.push(4);
const doubled = arr.map(x => x * 2);`,
    keyPoints: [
      "Упорядоченная коллекция элементов",
      "Может содержать элементы разных типов",
      "Имеет встроенные методы для манипуляций",
    ],
    methods: [
      "push() - добавление элемента",
      "pop() - удаление последнего элемента",
      "map() - преобразование элементов",
      "filter() - фильтрация элементов",
      "reduce() - свертка массива",
    ],
    useCases: ["Хранение списков данных", "Обработка коллекций", "Реализация стеков и очередей"],
  },
  {
    name: "Date",
    description: "Объект для работы с датами",
    category: "object",
    example: `const now = new Date();
const specific = new Date(2024, 0, 1);
console.log(now.toLocaleDateString());`,
    keyPoints: [
      "Представляет дату и время",
      "Внутренне хранится как миллисекунды",
      "Имеет методы для форматирования",
    ],
    methods: [
      "getDate() - получение дня",
      "getMonth() - получение месяца",
      "getFullYear() - получение года",
      "toLocaleDateString() - форматирование даты",
      "toISOString() - преобразование в ISO формат",
    ],
    useCases: ["Работа с датами и временем", "Форматирование дат", "Вычисления с датами"],
  },
  {
    name: "RegExp",
    description: "Регулярные выражения",
    category: "object",
    example: `const regex = /hello/i;
const str = "Hello World";
console.log(regex.test(str)); // true`,
    keyPoints: [
      "Используется для поиска и замены в строках",
      "Может быть создан через конструктор или литерал",
      "Имеет флаги для настройки поиска",
    ],
    methods: [
      "test() - проверка совпадения",
      "exec() - поиск совпадения",
      "match() - поиск всех совпадений",
      "replace() - замена совпадений",
    ],
    useCases: ["Валидация данных", "Поиск в тексте", "Замена подстрок"],
  },
  {
    name: "Function",
    description: "Объект функции",
    category: "object",
    example: `function greet(name) {
  return \`Hello, \${name}!\`;
}
const arrow = (x) => x * 2;`,
    keyPoints: [
      "Является объектом первого класса",
      "Может быть присвоена переменной",
      "Имеет собственный контекст выполнения",
    ],
    methods: [
      "call() - вызов с указанным контекстом",
      "apply() - вызов с массивом аргументов",
      "bind() - создание новой функции с привязанным контекстом",
    ],
    useCases: [
      "Создание переиспользуемого кода",
      "Обработка событий",
      "Реализация паттернов проектирования",
    ],
  },
  {
    name: "Error",
    description: "Объект ошибки",
    category: "object",
    example: `try {
  throw new Error('Something went wrong');
} catch (error) {
  console.log(error.message);
}`,
    keyPoints: [
      "Базовый класс для всех ошибок",
      "Содержит стек вызовов",
      "Имеет сообщение об ошибке",
    ],
    methods: ["toString() - преобразование в строку", "stack - получение стека вызовов"],
    useCases: ["Обработка исключений", "Отладка кода", "Логирование ошибок"],
  },
  {
    name: "Map",
    description: "Коллекция ключ-значение",
    category: "object",
    example: `const map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // value`,
    keyPoints: [
      "Ключи могут быть любого типа",
      "Сохраняет порядок вставки",
      "Имеет встроенные методы для работы",
    ],
    methods: [
      "set() - добавление элемента",
      "get() - получение элемента",
      "has() - проверка наличия",
      "delete() - удаление элемента",
      "clear() - очистка коллекции",
    ],
    useCases: ["Кэширование данных", "Хранение связанных данных", "Уникальные ключи"],
  },
  {
    name: "Set",
    description: "Коллекция уникальных значений",
    category: "object",
    example: `const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(3)); // true`,
    keyPoints: [
      "Хранит только уникальные значения",
      "Может содержать значения любого типа",
      "Имеет встроенные методы для работы",
    ],
    methods: [
      "add() - добавление элемента",
      "has() - проверка наличия",
      "delete() - удаление элемента",
      "clear() - очистка коллекции",
    ],
    useCases: ["Удаление дубликатов", "Проверка уникальности", "Математические множества"],
  },
  {
    name: "WeakMap",
    description: "Слабая коллекция ключ-значение",
    category: "object",
    example: `const weakMap = new WeakMap();
const key = {};
weakMap.set(key, 'value');`,
    keyPoints: [
      "Ключи могут быть только объектами",
      "Не препятствует сборке мусора",
      "Не итерируемая коллекция",
    ],
    methods: [
      "set() - добавление элемента",
      "get() - получение элемента",
      "has() - проверка наличия",
      "delete() - удаление элемента",
    ],
    useCases: [
      "Хранение приватных данных",
      "Кэширование объектов",
      "Связывание данных с объектами",
    ],
  },
  {
    name: "WeakSet",
    description: "Слабая коллекция уникальных объектов",
    category: "object",
    example: `const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);`,
    keyPoints: [
      "Может содержать только объекты",
      "Не препятствует сборке мусора",
      "Не итерируемая коллекция",
    ],
    methods: [
      "add() - добавление элемента",
      "has() - проверка наличия",
      "delete() - удаление элемента",
    ],
    useCases: ["Отслеживание объектов", "Хранение метаданных", "Предотвращение утечек памяти"],
  },
];

const DataTypesSchema = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-purple-700">
              Структура типов данных в JavaScript
            </h2>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Примитивы */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Circle className="h-4 w-4 text-purple-500" />
                  <h3 className="font-semibold text-purple-700 text-sm">Примитивы</h3>
                </div>

                <div className="pl-6 grid grid-cols-3 gap-x-2 gap-y-1">
                  <div className="flex items-center gap-1">
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                    <span className="text-sm">String</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                    <span className="text-sm">Number</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                    <span className="text-sm">Boolean</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                    <span className="text-sm">Symbol</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                    <span className="text-sm">BigInt</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                    <span className="text-sm">undefined</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                    <span className="text-sm">null</span>
                  </div>
                </div>
              </div>

              {/* Объекты */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Square className="h-4 w-4 text-blue-500" />
                  <h3 className="font-semibold text-blue-700 text-sm">Объекты</h3>
                </div>

                <div className="space-y-2">
                  {/* Обычные объекты */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Database className="h-3 w-3 text-blue-400" />
                      <span className="text-xs font-medium">Обычные</span>
                    </div>
                    <div className="pl-6">
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">Object</span>
                      </div>
                    </div>
                  </div>

                  {/* Специальные объекты */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Box className="h-3 w-3 text-blue-400" />
                      <span className="text-xs font-medium">Специальные</span>
                    </div>
                    <div className="pl-6 grid grid-cols-3 gap-x-2 gap-y-1">
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">Array</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">Date</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">RegExp</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">Function</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">Error</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">Map</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">Set</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">WeakMap</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">WeakSet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 p-2 bg-purple-50/50 rounded-lg border border-purple-100/50">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-purple-600">
                <div>• Примитивы - неизменяемые (immutable)</div>
                <div>• Объекты - изменяемые (mutable)</div>
                <div>• Примитивы передаются по значению</div>
                <div>• Объекты передаются по ссылке</div>
                <div className="col-span-2">• Все объекты наследуются от Object.prototype</div>
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
};

const DataTypes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const filteredDataTypes = dataTypes.filter((type) => {
    const matchesSearch =
      searchQuery === "" ||
      type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      type.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      type.keyPoints.some((point) => point.toLowerCase().includes(searchQuery.toLowerCase())) ||
      type.useCases.some((useCase) => useCase.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === null || type.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleCard = (name: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(name)) {
      newExpanded.delete(name);
    } else {
      newExpanded.add(name);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Типы данных
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Шпаргалка по типам данных в JavaScript
            </p>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 border border-white/20 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Поиск по типам данных..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className={
                  selectedCategory === null
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-md hover:from-purple-700 hover:to-blue-700"
                    : "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 hover:from-purple-200 hover:to-blue-200"
                }
              >
                Все типы
              </Button>
              <Button
                variant={selectedCategory === "primitive" ? "default" : "outline"}
                onClick={() => setSelectedCategory("primitive")}
                className={
                  selectedCategory === "primitive"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-md hover:from-purple-700 hover:to-blue-700"
                    : "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 hover:from-purple-200 hover:to-blue-200"
                }
              >
                Примитивы
              </Button>
              <Button
                variant={selectedCategory === "object" ? "default" : "outline"}
                onClick={() => setSelectedCategory("object")}
                className={
                  selectedCategory === "object"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-md hover:from-purple-700 hover:to-blue-700"
                    : "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 hover:from-purple-200 hover:to-blue-200"
                }
              >
                Объекты
              </Button>
            </div>
          </div>
        </div>

        <DataTypesSchema />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDataTypes.map((type) => (
            <div key={type.name}>
              <Card className="overflow-hidden bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-purple-700">
                        {type.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
                    </div>
                    <Badge variant={type.category === "primitive" ? "default" : "secondary"}>
                      {type.category === "primitive" ? "Примитив" : "Объект"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between">
                        Подробнее
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 pt-2">
                      {/* Ключевые моменты */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-purple-700">
                          Ключевые моменты
                        </h4>
                        <ul className="space-y-1">
                          {type.keyPoints.map((point, index) => (
                            <li key={index} className="text-sm flex items-start gap-2">
                              <span className="text-purple-500">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Методы */}
                      {type.methods && type.methods.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-blue-700">Методы</h4>
                          <ul className="space-y-1">
                            {type.methods.map((method, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>{method}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Примеры использования */}
                      {type.useCases && type.useCases.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-green-700">
                            Примеры использования
                          </h4>
                          <ul className="space-y-1">
                            {type.useCases.map((useCase, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <span className="text-green-500">•</span>
                                <span>{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Пример кода */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-gray-700">Пример</h4>
                        <div className="bg-gray-50 rounded-md p-3">
                          <pre className="text-sm">
                            <code>{type.example}</code>
                          </pre>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataTypes;
