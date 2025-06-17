
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WebAPIReference = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
            <Globe className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Web API
            </h1>
            <p className="text-muted-foreground">Популярные браузерные API для веб-разработки</p>
          </div>
        </div>

        <div className="bg-white/90 rounded-xl border border-purple-100 shadow p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="fetch">
              <AccordionTrigger className="text-lg font-semibold">Fetch API</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Современный способ выполнения HTTP-запросов.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// GET запрос
const response = await fetch('/api/users');
const users = await response.json();

// POST запрос
const response = await fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John' })
});

// Обработка ошибок
if (!response.ok) {
  throw new Error('Network response was not ok');
}`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="localstorage">
              <AccordionTrigger className="text-lg font-semibold">Local Storage</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Хранение данных в браузере пользователя.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Сохранение данных
localStorage.setItem('user', JSON.stringify({
  name: 'John',
  age: 30
}));

// Получение данных
const user = JSON.parse(localStorage.getItem('user'));

// Удаление
localStorage.removeItem('user');

// Очистка всего
localStorage.clear();

// Проверка поддержки
if (typeof Storage !== 'undefined') {
  // LocalStorage поддерживается
}`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="geolocation">
              <AccordionTrigger className="text-lg font-semibold">Geolocation API</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Получение географического местоположения пользователя.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Получить текущее местоположение
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(\`Координаты: \${lat}, \${lng}\`);
  },
  (error) => {
    console.error('Ошибка:', error.message);
  }
);

// Отслеживание местоположения
const watchId = navigator.geolocation.watchPosition(
  (position) => {
    // Обновление позиции
  }
);

// Остановка отслеживания
navigator.geolocation.clearWatch(watchId);`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="intersection-observer">
              <AccordionTrigger className="text-lg font-semibold">Intersection Observer</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Отслеживание пересечения элементов с viewport.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }
);

// Наблюдение за элементами
document.querySelectorAll('.lazy-load')
  .forEach(el => observer.observe(el));`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="web-workers">
              <AccordionTrigger className="text-lg font-semibold">Web Workers</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Выполнение JavaScript в фоновом потоке.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Создание воркера
const worker = new Worker('worker.js');

// Отправка данных воркеру
worker.postMessage({ cmd: 'start', data: [1, 2, 3] });

// Получение ответа от воркера
worker.onmessage = function(e) {
  console.log('Результат:', e.data);
};

// worker.js
self.onmessage = function(e) {
  const { cmd, data } = e.data;
  
  if (cmd === 'start') {
    const result = data.reduce((a, b) => a + b, 0);
    self.postMessage(result);
  }
};`}
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

export default WebAPIReference;
