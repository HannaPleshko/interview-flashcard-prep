
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  MousePointer, 
  Eye, 
  Edit, 
  Layers, 
  Search,
  Zap,
  Move,
  Copy,
  Target,
  RefreshCw
} from "lucide-react";
import Header from "@/components/Header";

const DOMReference = () => {
  const selectionMethods = [
    {
      id: "query-selectors",
      icon: Search,
      title: "Поиск элементов",
      description: "Методы для поиска элементов в DOM",
      example: `// По ID
const element = document.getElementById('myId');

// По классу
const elements = document.getElementsByClassName('myClass');
const element = document.querySelector('.myClass');
const allElements = document.querySelectorAll('.myClass');

// По тегу
const divs = document.getElementsByTagName('div');

// Универсальные селекторы
const firstButton = document.querySelector('button');
const allButtons = document.querySelectorAll('button');
const nested = document.querySelector('.parent > .child');`
    },
    {
      id: "creation",
      icon: Layers,
      title: "Создание элементов",
      description: "Создание новых DOM элементов",
      example: `// Создание элемента
const div = document.createElement('div');
const text = document.createTextNode('Привет!');

// Установка атрибутов
div.id = 'newDiv';
div.className = 'my-class';
div.setAttribute('data-value', '123');

// Добавление содержимого
div.textContent = 'Текст элемента';
div.innerHTML = '<strong>HTML</strong> содержимое';

// Добавление в DOM
document.body.appendChild(div);
document.body.insertBefore(div, firstChild);`
    },
    {
      id: "manipulation",
      icon: Edit,
      title: "Изменение элементов",
      description: "Изменение свойств и содержимого",
      example: `const element = document.querySelector('#myElement');

// Изменение текста
element.textContent = 'Новый текст';
element.innerHTML = '<em>HTML контент</em>';

// Работа с классами
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('active');
element.classList.contains('hidden'); // true/false

// Стили
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.cssText = 'color: red; font-size: 16px;';

// Атрибуты
element.setAttribute('title', 'Подсказка');
const value = element.getAttribute('data-id');
element.removeAttribute('hidden');`
    }
  ];

  const eventMethods = [
    {
      id: "event-listeners",
      icon: MousePointer,
      title: "Обработчики событий",
      description: "Добавление и удаление событий",
      example: `const button = document.querySelector('#myButton');

// Добавление обработчика
button.addEventListener('click', function(event) {
  console.log('Кнопка нажата!');
  event.preventDefault(); // Отменить действие по умолчанию
  event.stopPropagation(); // Остановить всплытие
});

// Стрелочная функция
button.addEventListener('click', (e) => {
  console.log('Координаты:', e.clientX, e.clientY);
});

// Удаление обработчика
function handleClick() { console.log('Click!'); }
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Один раз
button.addEventListener('click', handler, { once: true });`
    },
    {
      id: "event-types",
      icon: Target,
      title: "Типы событий",
      description: "Основные события DOM",
      example: `// События мыши
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);

// События клавиатуры
document.addEventListener('keydown', (e) => {
  console.log('Нажата клавиша:', e.key);
  if (e.key === 'Enter') { /* обработка */ }
});

// События формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // обработка отправки
});

input.addEventListener('input', (e) => {
  console.log('Значение:', e.target.value);
});

// События загрузки
window.addEventListener('load', () => {
  console.log('Страница загружена');
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM готов');
});`
    },
    {
      id: "delegation",
      icon: Zap,
      title: "Делегирование событий",
      description: "Эффективная обработка событий",
      example: `// Вместо добавления обработчика каждой кнопке
const container = document.querySelector('.buttons-container');

container.addEventListener('click', (event) => {
  // Проверяем, что клик был по кнопке
  if (event.target.matches('button')) {
    console.log('Нажата кнопка:', event.target.textContent);
  }
  
  // Более специфичная проверка
  if (event.target.classList.contains('delete-btn')) {
    deleteItem(event.target.dataset.id);
  }
});

// Работа с динамически добавляемыми элементами
document.addEventListener('click', (e) => {
  if (e.target.closest('.dynamic-button')) {
    // Обработка клика на динамической кнопке
  }
});`
    }
  ];

  const navigationMethods = [
    {
      id: "traversal",
      icon: Move,
      title: "Навигация по DOM",
      description: "Перемещение между элементами",
      example: `const element = document.querySelector('.current');

// Родительские элементы
const parent = element.parentNode;
const parentElement = element.parentElement;
const closest = element.closest('.container'); // Ближайший предок

// Дочерние элементы
const children = element.children; // HTMLCollection
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
const childNodes = element.childNodes; // включая текстовые узлы

// Соседние элементы
const next = element.nextElementSibling;
const prev = element.previousElementSibling;

// Проверки
if (element.hasChildNodes()) {
  console.log('Есть дочерние элементы');
}

if (element.contains(someOtherElement)) {
  console.log('Содержит элемент');
}`
    },
    {
      id: "modification",
      icon: Copy,
      title: "Перемещение и копирование",
      description: "Изменение структуры DOM",
      example: `const element = document.querySelector('.item');
const container = document.querySelector('.container');

// Перемещение
container.appendChild(element); // В конец
container.insertBefore(element, container.firstChild); // В начало

// Вставка относительно элемента
element.insertAdjacentElement('beforebegin', newElement);
element.insertAdjacentElement('afterend', newElement);
element.insertAdjacentHTML('beforeend', '<span>HTML</span>');

// Копирование
const clone = element.cloneNode(true); // true = с содержимым
container.appendChild(clone);

// Удаление
element.remove(); // Современный способ
parent.removeChild(element); // Старый способ

// Замена
parent.replaceChild(newElement, oldElement);`
    },
    {
      id: "measurements",
      icon: Eye,
      title: "Размеры и позиция",
      description: "Получение размеров элементов",
      example: `const element = document.querySelector('.box');

// Размеры элемента
const width = element.offsetWidth; // включая border и padding
const height = element.offsetHeight;
const clientWidth = element.clientWidth; // без border
const scrollWidth = element.scrollWidth; // полная ширина с прокруткой

// Позиция
const rect = element.getBoundingClientRect();
console.log('Top:', rect.top, 'Left:', rect.left);
console.log('Bottom:', rect.bottom, 'Right:', rect.right);

// Позиция относительно документа
const offsetTop = element.offsetTop;
const offsetLeft = element.offsetLeft;

// Прокрутка
element.scrollTop = 100; // Прокрутить вниз
element.scrollLeft = 50; // Прокрутить вправо
element.scrollIntoView(); // Прокрутить к элементу

// Размеры окна
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Справочник DOM JavaScript
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Полное руководство по работе с Document Object Model в JavaScript
          </p>
        </div>

        <Tabs defaultValue="selection" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="selection" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Поиск и создание
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <MousePointer className="h-4 w-4" />
              События
            </TabsTrigger>
            <TabsTrigger value="navigation" className="flex items-center gap-2">
              <Move className="h-4 w-4" />
              Навигация
            </TabsTrigger>
          </TabsList>

          <TabsContent value="selection">
            <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Поиск и создание элементов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {selectionMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <AccordionItem key={method.id} value={method.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{method.title}</div>
                              <div className="text-sm text-gray-600">{method.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-gray-900 rounded-lg p-4 mt-4">
                            <pre className="text-sm text-gray-100 overflow-x-auto">
                              <code>{method.example}</code>
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Работа с событиями
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {eventMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <AccordionItem key={method.id} value={method.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{method.title}</div>
                              <div className="text-sm text-gray-600">{method.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-gray-900 rounded-lg p-4 mt-4">
                            <pre className="text-sm text-gray-100 overflow-x-auto">
                              <code>{method.example}</code>
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="navigation">
            <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Навигация и изменение DOM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {navigationMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <AccordionItem key={method.id} value={method.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{method.title}</div>
                              <div className="text-sm text-gray-600">{method.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-gray-900 rounded-lg p-4 mt-4">
                            <pre className="text-sm text-gray-100 overflow-x-auto">
                              <code>{method.example}</code>
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              💡 Лучшие практики
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Используйте querySelector/querySelectorAll</strong> для гибкого поиска • 
              <strong>Делегируйте события</strong> для динамического контента • 
              <strong>Кэшируйте элементы</strong> для лучшей производительности
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DOMReference;
