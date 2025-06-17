
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

const AsyncJSReference = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Асинхронный JavaScript
            </h1>
            <p className="text-muted-foreground">Callbacks, Promises, async/await и работа с асинхронным кодом</p>
          </div>
        </div>

        <div className="bg-white/90 rounded-xl border border-purple-100 shadow p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="callbacks">
              <AccordionTrigger className="text-lg font-semibold">Callbacks (Колбэки)</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Функции, передаваемые в качестве аргументов другим функциям.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`function fetchData(callback) {
  setTimeout(() => {
    callback('Данные получены');
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Данные получены"
});`}
                  </pre>
                </div>
                <p><strong>Проблема:</strong> Callback Hell - вложенность колбэков затрудняет чтение кода.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="promises">
              <AccordionTrigger className="text-lg font-semibold">Promises (Промисы)</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Объекты, представляющие результат асинхронной операции.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve('Успех');
  } else {
    reject('Ошибка');
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));`}
                  </pre>
                </div>
                <p><strong>Состояния:</strong> pending, fulfilled, rejected</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="async-await">
              <AccordionTrigger className="text-lg font-semibold">Async/Await</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Синтаксический сахар для работы с промисами.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// Использование
const data = await fetchData();`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="promise-methods">
              <AccordionTrigger className="text-lg font-semibold">Методы Promise</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Promise.all - ждет все промисы
const results = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts')
]);

// Promise.race - первый выполнившийся
const first = await Promise.race([
  fetch('/api/fast'),
  fetch('/api/slow')
]);

// Promise.allSettled - все результаты
const settled = await Promise.allSettled([
  Promise.resolve('OK'),
  Promise.reject('Error')
]);`}
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

export default AsyncJSReference;
