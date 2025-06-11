import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Hash, 
  Type, 
  List, 
  CheckSquare, 
  Calendar, 
  FunctionSquare,
  ChevronDown,
  ChevronUp,
  Code,
  Copy,
  ExternalLink,
  Search,
  X,
  Box
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";

const DATA_TYPES = [
  {
    id: 'number',
    name: 'Числа',
    icon: Hash,
    color: 'from-blue-500 to-cyan-500',
    methods: [
      {
        category: 'Базовые методы',
        items: [
          {
            name: 'Number.isInteger()',
            description: 'Проверяет, является ли значение целым числом',
            example: 'Number.isInteger(42) // true\nNumber.isInteger(42.0) // true\nNumber.isInteger(42.1) // false',
            usage: 'Используется для проверки целых чисел'
          },
          {
            name: 'Number.isFinite()',
            description: 'Проверяет, является ли значение конечным числом',
            example: 'Number.isFinite(42) // true\nNumber.isFinite(Infinity) // false',
            usage: 'Для проверки конечности числа'
          },
          {
            name: 'Number.parseFloat()',
            description: 'Преобразует строку в число с плавающей точкой',
            example: 'Number.parseFloat("42.5") // 42.5',
            usage: 'Для преобразования строк в числа'
          },
          {
            name: 'Number.parseInt()',
            description: 'Преобразует строку в целое число',
            example: 'Number.parseInt("42.9") // 42',
            usage: 'Для преобразования строк в целые числа'
          },
          {
            name: 'Number.isNaN()',
            description: 'Проверяет, является ли значение NaN',
            example: 'Number.isNaN(NaN) // true\nNumber.isNaN(42) // false',
            usage: 'Для проверки на NaN'
          }
        ]
      },
      {
        category: 'Math методы',
        items: [
          {
            name: 'Math.round()',
            description: 'Округляет число до ближайшего целого',
            example: 'Math.round(4.5) // 5\nMath.round(4.4) // 4',
            usage: 'Для округления чисел'
          },
          {
            name: 'Math.floor()',
            description: 'Округляет число вниз',
            example: 'Math.floor(4.9) // 4',
            usage: 'Для округления в меньшую сторону'
          },
          {
            name: 'Math.ceil()',
            description: 'Округляет число вверх',
            example: 'Math.ceil(4.1) // 5',
            usage: 'Для округления в большую сторону'
          },
          {
            name: 'Math.max()',
            description: 'Возвращает наибольшее из чисел',
            example: 'Math.max(1, 2, 3) // 3',
            usage: 'Для поиска максимального значения'
          },
          {
            name: 'Math.min()',
            description: 'Возвращает наименьшее из чисел',
            example: 'Math.min(1, 2, 3) // 1',
            usage: 'Для поиска минимального значения'
          },
          {
            name: 'Math.random()',
            description: 'Возвращает случайное число от 0 до 1',
            example: 'Math.random() // например: 0.123456789',
            usage: 'Для генерации случайных чисел'
          },
          {
            name: 'Math.pow()',
            description: 'Возводит число в степень',
            example: 'Math.pow(2, 3) // 8',
            usage: 'Для возведения в степень'
          },
          {
            name: 'Math.sqrt()',
            description: 'Возвращает квадратный корень числа',
            example: 'Math.sqrt(16) // 4',
            usage: 'Для вычисления квадратного корня'
          }
        ]
      }
    ]
  },
  {
    id: 'string',
    name: 'Строки',
    icon: Type,
    color: 'from-green-500 to-emerald-500',
    methods: [
      {
        category: 'Базовые методы',
        items: [
          {
            name: 'toUpperCase()',
            description: 'Преобразует строку в верхний регистр',
            example: '"hello".toUpperCase() // "HELLO"',
            usage: 'Для преобразования в верхний регистр'
          },
          {
            name: 'toLowerCase()',
            description: 'Преобразует строку в нижний регистр',
            example: '"HELLO".toLowerCase() // "hello"',
            usage: 'Для преобразования в нижний регистр'
          },
          {
            name: 'trim()',
            description: 'Удаляет пробелы с обоих концов строки',
            example: '"  hello  ".trim() // "hello"',
            usage: 'Для удаления лишних пробелов'
          },
          {
            name: 'trimStart()',
            description: 'Удаляет пробелы в начале строки',
            example: '"  hello".trimStart() // "hello"',
            usage: 'Для удаления пробелов в начале'
          },
          {
            name: 'trimEnd()',
            description: 'Удаляет пробелы в конце строки',
            example: '"hello  ".trimEnd() // "hello"',
            usage: 'Для удаления пробелов в конце'
          }
        ]
      },
      {
        category: 'Поиск и замена',
        items: [
          {
            name: 'includes()',
            description: 'Проверяет, содержит ли строка подстроку',
            example: '"hello".includes("ell") // true',
            usage: 'Для поиска подстроки'
          },
          {
            name: 'startsWith()',
            description: 'Проверяет, начинается ли строка с подстроки',
            example: '"hello".startsWith("he") // true',
            usage: 'Для проверки начала строки'
          },
          {
            name: 'endsWith()',
            description: 'Проверяет, заканчивается ли строка подстрокой',
            example: '"hello".endsWith("lo") // true',
            usage: 'Для проверки конца строки'
          },
          {
            name: 'replace()',
            description: 'Заменяет подстроку на другую',
            example: '"hello".replace("l", "L") // "heLlo"',
            usage: 'Для замены текста'
          },
          {
            name: 'replaceAll()',
            description: 'Заменяет все вхождения подстроки',
            example: '"hello".replaceAll("l", "L") // "heLLo"',
            usage: 'Для замены всех вхождений'
          },
          {
            name: 'indexOf()',
            description: 'Возвращает индекс первого вхождения подстроки',
            example: '"hello".indexOf("l") // 2',
            usage: 'Для поиска позиции подстроки'
          },
          {
            name: 'lastIndexOf()',
            description: 'Возвращает индекс последнего вхождения подстроки',
            example: '"hello".lastIndexOf("l") // 3',
            usage: 'Для поиска последней позиции'
          }
        ]
      },
      {
        category: 'Разбиение и объединение',
        items: [
          {
            name: 'split()',
            description: 'Разбивает строку на массив по разделителю',
            example: '"hello,world".split(",") // ["hello", "world"]',
            usage: 'Для разбиения строки на части'
          },
          {
            name: 'join()',
            description: 'Объединяет элементы массива в строку',
            example: '["hello", "world"].join(" ") // "hello world"',
            usage: 'Для объединения массива в строку'
          },
          {
            name: 'concat()',
            description: 'Объединяет строки',
            example: '"hello".concat(" ", "world") // "hello world"',
            usage: 'Для объединения строк'
          }
        ]
      },
      {
        category: 'Извлечение подстрок',
        items: [
          {
            name: 'slice()',
            description: 'Извлекает часть строки',
            example: '"hello".slice(1, 4) // "ell"',
            usage: 'Для извлечения части строки'
          },
          {
            name: 'substring()',
            description: 'Извлекает часть строки между индексами',
            example: '"hello".substring(1, 4) // "ell"',
            usage: 'Для извлечения подстроки'
          },
          {
            name: 'substr()',
            description: 'Извлекает подстроку указанной длины',
            example: '"hello".substr(1, 3) // "ell"',
            usage: 'Для извлечения подстроки по длине'
          }
        ]
      }
    ]
  },
  {
    id: 'array',
    name: 'Массивы',
    icon: List,
    color: 'from-purple-500 to-pink-500',
    methods: [
      {
        category: 'Методы изменения',
        items: [
          {
            name: 'push()',
            description: 'Добавляет элемент в конец массива',
            example: 'const arr = [1, 2];\narr.push(3); // [1, 2, 3]',
            usage: 'Для добавления элементов'
          },
          {
            name: 'pop()',
            description: 'Удаляет последний элемент массива',
            example: 'const arr = [1, 2, 3];\narr.pop(); // [1, 2]',
            usage: 'Для удаления последнего элемента'
          },
          {
            name: 'unshift()',
            description: 'Добавляет элемент в начало массива',
            example: 'const arr = [1, 2];\narr.unshift(0); // [0, 1, 2]',
            usage: 'Для добавления в начало'
          },
          {
            name: 'shift()',
            description: 'Удаляет первый элемент массива',
            example: 'const arr = [1, 2, 3];\narr.shift(); // [2, 3]',
            usage: 'Для удаления первого элемента'
          },
          {
            name: 'splice()',
            description: 'Изменяет массив, удаляя или добавляя элементы',
            example: 'const arr = [1, 2, 3];\narr.splice(1, 1, 4); // [1, 4, 3]',
            usage: 'Для изменения массива'
          }
        ]
      },
      {
        category: 'Методы преобразования',
        items: [
          {
            name: 'map()',
            description: 'Создает новый массив с результатами вызова функции',
            example: '[1, 2, 3].map(x => x * 2) // [2, 4, 6]',
            usage: 'Для преобразования элементов'
          },
          {
            name: 'filter()',
            description: 'Создает новый массив с элементами, прошедшими проверку',
            example: '[1, 2, 3].filter(x => x > 1) // [2, 3]',
            usage: 'Для фильтрации элементов'
          },
          {
            name: 'reduce()',
            description: 'Сворачивает массив в одно значение',
            example: '[1, 2, 3].reduce((a, b) => a + b) // 6',
            usage: 'Для свертки массива'
          },
          {
            name: 'flat()',
            description: 'Сглаживает вложенные массивы',
            example: '[1, [2, 3]].flat() // [1, 2, 3]',
            usage: 'Для работы с вложенными массивами'
          },
          {
            name: 'flatMap()',
            description: 'Сначала применяет map, затем flat',
            example: '[1, 2].flatMap(x => [x, x * 2]) // [1, 2, 2, 4]',
            usage: 'Для преобразования и сглаживания'
          }
        ]
      },
      {
        category: 'Методы поиска',
        items: [
          {
            name: 'find()',
            description: 'Находит первый элемент, удовлетворяющий условию',
            example: '[1, 2, 3].find(x => x > 1) // 2',
            usage: 'Для поиска элемента'
          },
          {
            name: 'findIndex()',
            description: 'Находит индекс первого подходящего элемента',
            example: '[1, 2, 3].findIndex(x => x > 1) // 1',
            usage: 'Для поиска индекса'
          },
          {
            name: 'includes()',
            description: 'Проверяет наличие элемента в массиве',
            example: '[1, 2, 3].includes(2) // true',
            usage: 'Для проверки наличия элемента'
          },
          {
            name: 'indexOf()',
            description: 'Возвращает индекс элемента',
            example: '[1, 2, 3].indexOf(2) // 1',
            usage: 'Для поиска индекса элемента'
          }
        ]
      },
      {
        category: 'Методы сортировки',
        items: [
          {
            name: 'sort()',
            description: 'Сортирует элементы массива',
            example: '[3, 1, 2].sort() // [1, 2, 3]',
            usage: 'Для сортировки массива'
          },
          {
            name: 'reverse()',
            description: 'Переворачивает порядок элементов',
            example: '[1, 2, 3].reverse() // [3, 2, 1]',
            usage: 'Для изменения порядка'
          }
        ]
      }
    ]
  },
  {
    id: 'object',
    name: 'Объекты',
    color: 'from-yellow-400 to-orange-400',
    icon: Box,
    methods: [
      {
        category: 'Базовые методы',
        items: [
          {
            name: 'Object.keys()',
            description: 'Возвращает массив собственных перечисляемых ключей объекта.',
            example: 'Object.keys({a: 1, b: 2}); // ["a", "b"]',
            usage: 'Для получения всех ключей объекта.'
          },
          {
            name: 'Object.values()',
            description: 'Возвращает массив значений всех собственных перечисляемых свойств объекта.',
            example: 'Object.values({a: 1, b: 2}); // [1, 2]',
            usage: 'Для получения всех значений объекта.'
          },
          {
            name: 'Object.entries()',
            description: 'Возвращает массив пар [ключ, значение] для всех собственных перечисляемых свойств объекта.',
            example: 'Object.entries({a: 1, b: 2}); // [["a", 1], ["b", 2]]',
            usage: 'Для перебора ключей и значений объекта.'
          },
          {
            name: 'Object.assign()',
            description: 'Копирует значения всех перечисляемых свойств из одного или нескольких объектов в целевой объект.',
            example: 'Object.assign({}, {a: 1}, {b: 2}); // {a: 1, b: 2}',
            usage: 'Для объединения объектов.'
          },
          {
            name: 'Object.hasOwn()',
            description: 'Проверяет, содержит ли объект собственное свойство с указанным именем.',
            example: 'Object.hasOwn({a: 1}, "a"); // true',
            usage: 'Для проверки наличия свойства.'
          },
          {
            name: 'Object.freeze()',
            description: 'Замораживает объект: делает его неизменяемым.',
            example: 'const obj = {a: 1}; Object.freeze(obj); obj.a = 2; // obj.a === 1',
            usage: 'Для защиты объекта от изменений.'
          },
          {
            name: 'Object.seal()',
            description: 'Запечатывает объект: нельзя добавлять/удалять свойства, но можно изменять существующие.',
            example: 'const obj = {a: 1}; Object.seal(obj); delete obj.a; // obj.a === 1',
            usage: 'Для ограничения изменений структуры объекта.'
          },
          {
            name: 'Object.create()',
            description: 'Создаёт новый объект с указанным прототипом.',
            example: 'const proto = {greet() {return "hi"}}; const obj = Object.create(proto); obj.greet(); // "hi"',
            usage: 'Для создания объектов с определённым прототипом.'
          },
          {
            name: 'Object.getOwnPropertyNames()',
            description: 'Возвращает массив всех свойств (включая неперечисляемые) объекта.',
            example: 'Object.getOwnPropertyNames({a: 1, b: 2}); // ["a", "b"]',
            usage: 'Для получения всех свойств объекта.'
          },
          {
            name: 'Object.getPrototypeOf()',
            description: 'Возвращает прототип указанного объекта.',
            example: 'Object.getPrototypeOf([]) === Array.prototype; // true',
            usage: 'Для получения прототипа объекта.'
          },
          {
            name: 'Object.fromEntries()',
            description: 'Преобразует список пар [ключ, значение] в объект.',
            example: 'Object.fromEntries([["a", 1], ["b", 2]]); // {a: 1, b: 2}',
            usage: 'Для преобразования массива пар в объект.'
          },
          {
            name: 'Object.is()',
            description: 'Определяет, являются ли два значения одинаковыми.',
            example: 'Object.is(NaN, NaN); // true',
            usage: 'Для строгого сравнения значений.'
          },
          {
            name: 'Object.defineProperty()',
            description: 'Определяет новое или изменяет существующее свойство непосредственно на объекте.',
            example: 'Object.defineProperty(obj, "a", {value: 42});',
            usage: 'Для управления свойствами объекта.'
          },
          {
            name: 'hasOwnProperty()',
            description: 'Проверяет, содержит ли объект собственное свойство с указанным именем (на прототипе).',
            example: 'const obj = {a: 1}; obj.hasOwnProperty("a"); // true',
            usage: 'Для проверки наличия собственного свойства у объекта.'
          }
        ]
      }
    ]
  },
  {
    id: 'date',
    name: 'Даты',
    icon: Calendar,
    color: 'from-red-500 to-rose-500',
    methods: [
      {
        category: 'Методы работы с датами',
        items: [
          {
            name: 'getDate()',
            description: 'Возвращает день месяца',
            example: 'new Date().getDate() // текущий день',
            usage: 'Для получения дня месяца'
          },
          {
            name: 'getMonth()',
            description: 'Возвращает месяц (0-11)',
            example: 'new Date().getMonth() // текущий месяц',
            usage: 'Для получения месяца'
          },
          {
            name: 'getFullYear()',
            description: 'Возвращает год',
            example: 'new Date().getFullYear() // текущий год',
            usage: 'Для получения года'
          },
          {
            name: 'getHours()',
            description: 'Возвращает часы',
            example: 'new Date().getHours() // текущий час',
            usage: 'Для получения часов'
          },
          {
            name: 'getMinutes()',
            description: 'Возвращает минуты',
            example: 'new Date().getMinutes() // текущие минуты',
            usage: 'Для получения минут'
          },
          {
            name: 'getSeconds()',
            description: 'Возвращает секунды',
            example: 'new Date().getSeconds() // текущие секунды',
            usage: 'Для получения секунд'
          },
          {
            name: 'getTime()',
            description: 'Возвращает timestamp',
            example: 'new Date().getTime() // текущий timestamp',
            usage: 'Для получения timestamp'
          }
        ]
      },
      {
        category: 'Методы установки',
        items: [
          {
            name: 'setDate()',
            description: 'Устанавливает день месяца',
            example: 'const date = new Date();\ndate.setDate(15)',
            usage: 'Для установки дня'
          },
          {
            name: 'setMonth()',
            description: 'Устанавливает месяц',
            example: 'const date = new Date();\ndate.setMonth(5)',
            usage: 'Для установки месяца'
          },
          {
            name: 'setFullYear()',
            description: 'Устанавливает год',
            example: 'const date = new Date();\ndate.setFullYear(2024)',
            usage: 'Для установки года'
          }
        ]
      },
      {
        category: 'Методы форматирования',
        items: [
          {
            name: 'toLocaleDateString()',
            description: 'Возвращает дату в локальном формате',
            example: 'new Date().toLocaleDateString() // "01.01.2024"',
            usage: 'Для форматирования даты'
          },
          {
            name: 'toLocaleTimeString()',
            description: 'Возвращает время в локальном формате',
            example: 'new Date().toLocaleTimeString() // "12:00:00"',
            usage: 'Для форматирования времени'
          },
          {
            name: 'toISOString()',
            description: 'Возвращает дату в формате ISO',
            example: 'new Date().toISOString() // "2024-01-01T12:00:00.000Z"',
            usage: 'Для ISO формата'
          }
        ]
      }
    ]
  },
  {
    id: 'function',
    name: 'Функции',
    icon: FunctionSquare,
    color: 'from-indigo-500 to-violet-500',
    methods: [
      {
        category: 'Методы функций',
        items: [
          {
            name: 'bind()',
            description: 'Создает новую функцию с привязанным контекстом',
            example: 'const boundFn = fn.bind(this)',
            usage: 'Для привязки контекста'
          },
          {
            name: 'call()',
            description: 'Вызывает функцию с указанным контекстом',
            example: 'fn.call(this, arg1, arg2)',
            usage: 'Для вызова с контекстом'
          },
          {
            name: 'apply()',
            description: 'Вызывает функцию с массивом аргументов',
            example: 'fn.apply(this, [arg1, arg2])',
            usage: 'Для вызова с массивом аргументов'
          }
        ]
      },
    ]
  }
];

const Methods = () => {
  const [selectedType, setSelectedType] = useState('number');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Автоматически открываем категории при поиске
  useEffect(() => {
    if (searchQuery.trim()) {
      const newExpandedCategories = filteredDataTypes.flatMap(type =>
        type.methods.map((_, index) => `${type.id}-${index}`)
      );
      setExpandedCategories(newExpandedCategories);
    } else {
      setExpandedCategories([]);
    }
  }, [searchQuery]);

  // Функция для подсветки найденного текста
  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.toLowerCase() ? 
        <span key={i} className="bg-yellow-200 text-yellow-900 px-1 rounded">{part}</span> : 
        part
    );
  };

  const filteredDataTypes = useMemo(() => {
    if (!searchQuery.trim()) return DATA_TYPES;

    const query = searchQuery.toLowerCase();
    return DATA_TYPES.map(type => ({
      ...type,
      methods: type.methods.map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.example.toLowerCase().includes(query) ||
          item.usage.toLowerCase().includes(query)
        )
      })).filter(category => category.items.length > 0)
    })).filter(type => type.methods.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Методы JavaScript
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Справочник по методам работы с различными типами данных</p>
            </div>
          </div>
          <div className="w-full sm:w-auto flex justify-end">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Поиск методов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-20"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Типы данных</h2>
              <div className="space-y-2">
                {DATA_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      selectedType === type.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${type.color}`}>
                      <type.icon className={`h-5 w-5 ${selectedType === type.id ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <span className="font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-6">
              {searchQuery ? (
                <div className="space-y-6">
                  {filteredDataTypes.map((type) => (
                    <div key={type.id}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${type.color}`}>
                            <type.icon className="h-6 w-6 text-white" />
                          </div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            {type.name}
                          </h2>
                        </div>
                      </div>
                      {searchQuery && (
                        <p className="text-sm text-gray-500 -mt-4 mb-6">
                          Найдено методов: {type.methods.reduce((sum, category) => 
                            sum + category.items.length, 0
                          )}
                        </p>
                      )}

                      <Accordion 
                        type="multiple" 
                        value={expandedCategories}
                        onValueChange={setExpandedCategories}
                        className="space-y-4"
                      >
                        {type.methods.map((category, index) => (
                          <AccordionItem
                            key={index}
                            value={`${type.id}-${index}`}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100">
                              <span className="font-medium">{category.category}</span>
                            </AccordionTrigger>
                            <AccordionContent className="p-4 space-y-4">
                              {category.items.map((method, methodIndex) => (
                                <div
                                  key={methodIndex}
                                  className="border border-gray-200 rounded-lg p-4"
                                >
                                  <div className="flex items-start justify-between gap-4">
                                    <div>
                                      <h3 className="font-medium text-gray-900 mb-2">
                                        {highlightText(method.name)}
                                      </h3>
                                      <p className="text-sm text-gray-600 mb-3">
                                        {highlightText(method.description)}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {highlightText(method.usage)}
                                      </p>
                                    </div>
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleCopy(method.example)}
                                            className="text-gray-400 hover:text-blue-600"
                                          >
                                            <Copy className="h-4 w-4" />
                                          </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          {copiedCode === method.example ? 'Скопировано!' : 'Копировать код'}
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </div>
                                  <div className="mt-3 bg-gray-50 rounded p-3">
                                    <pre className="text-sm font-mono text-blue-600 whitespace-pre-wrap">
                                      {highlightText(method.example)}
                                    </pre>
                                  </div>
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              ) : (
                filteredDataTypes
                  .filter(type => type.id === selectedType)
                  .map((type) => (
                    <div key={type.id} className="space-y-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${type.color}`}>
                            <type.icon className="h-6 w-6 text-white" />
                          </div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            {type.name}
                          </h2>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="space-y-4">
                        {type.methods.map((category, index) => (
                          <AccordionItem
                            key={index}
                            value={`category-${index}`}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100">
                              <span className="font-medium">{category.category}</span>
                            </AccordionTrigger>
                            <AccordionContent className="p-4 space-y-4">
                              {category.items.map((method, methodIndex) => (
                                <div
                                  key={methodIndex}
                                  className="border border-gray-200 rounded-lg p-4"
                                >
                                  <div className="flex items-start justify-between gap-4">
                                    <div>
                                      <h3 className="font-medium text-gray-900 mb-2">
                                        {method.name}
                                      </h3>
                                      <p className="text-sm text-gray-600 mb-3">
                                        {method.description}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {method.usage}
                                      </p>
                                    </div>
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleCopy(method.example)}
                                            className="text-gray-400 hover:text-blue-600"
                                          >
                                            <Copy className="h-4 w-4" />
                                          </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          {copiedCode === method.example ? 'Скопировано!' : 'Копировать код'}
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </div>
                                  <div className="mt-3 bg-gray-50 rounded p-3">
                                    <pre className="text-sm font-mono text-blue-600 whitespace-pre-wrap">
                                      {method.example}
                                    </pre>
                                  </div>
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Methods; 