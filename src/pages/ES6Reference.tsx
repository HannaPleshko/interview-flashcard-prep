
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ES6Reference = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ES6+ Возможности
            </h1>
            <p className="text-muted-foreground">Современные возможности JavaScript</p>
          </div>
        </div>

        <div className="bg-white/90 rounded-xl border border-purple-100 shadow p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="destructuring">
              <AccordionTrigger className="text-lg font-semibold">Деструктуризация</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Извлечение значений из массивов и объектов.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Деструктуризация объектов
const user = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = user;

// С переименованием
const { name: userName } = user;

// Со значениями по умолчанию
const { country = 'USA' } = user;

// Деструктуризация массивов
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;

// Пропуск элементов
const [, , third] = colors;

// Rest оператор
const [head, ...tail] = colors;`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="arrow-functions">
              <AccordionTrigger className="text-lg font-semibold">Стрелочные функции</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Краткий синтаксис для объявления функций.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Обычная функция
function add(a, b) {
  return a + b;
}

// Стрелочная функция
const add = (a, b) => a + b;

// С одним параметром (скобки не нужны)
const double = x => x * 2;

// Без параметров
const random = () => Math.random();

// Возврат объекта (нужны скобки)
const createUser = name => ({ name, id: Date.now() });

// Особенности this
const obj = {
  name: 'Object',
  regularFunction() {
    console.log(this.name); // 'Object'
  },
  arrowFunction: () => {
    console.log(this.name); // undefined (this = window)
  }
};`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="template-literals">
              <AccordionTrigger className="text-lg font-semibold">Шаблонные строки</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Удобный способ создания строк с переменными.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`const name = 'John';
const age = 30;

// Интерполяция переменных
const message = \`Привет, меня зовут \${name} и мне \${age} лет\`;

// Многострочные строки
const html = \`
  <div>
    <h1>\${name}</h1>
    <p>Возраст: \${age}</p>
  </div>
\`;

// Вызов функций
const price = 100;
const total = \`Итого: \${(price * 1.2).toFixed(2)}$\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}

const highlighted = highlight\`User \${name} is \${age} years old\`;`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="spread-rest">
              <AccordionTrigger className="text-lg font-semibold">Spread и Rest операторы</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Операторы для работы с массивами и объектами.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Spread оператор
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Копирование массива
const copy = [...arr1];

// Spread в объектах
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, city: 'NYC' };

// Rest в функциях
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10

// Rest в деструктуризации
const [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]

const { name, ...otherProps } = user;
// name = 'John', otherProps = { age: 30 }`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="modules">
              <AccordionTrigger className="text-lg font-semibold">Модули ES6</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Система модулей для организации кода.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// math.js - экспорт
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

// Экспорт по умолчанию
export default function multiply(a, b) {
  return a * b;
}

// main.js - импорт
import multiply, { PI, add } from './math.js';

// Импорт всего модуля
import * as math from './math.js';

// Переименование при импорте
import { add as sum } from './math.js';

// Динамический импорт
const module = await import('./math.js');

// Условный импорт
if (condition) {
  const { feature } = await import('./feature.js');
}`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ES6Reference;
