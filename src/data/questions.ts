
export interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Technology {
  id: string;
  name: string;
  questions: Question[];
}

export const questionsData: Technology[] = [
  {
    id: "html",
    name: "HTML",
    questions: [
      {
        id: "html-1",
        question: "Что такое HTML и для чего он используется?",
        answer: "HTML (HyperText Markup Language) — это язык разметки, используемый для создания структуры веб-страниц. Он определяет содержимое и организацию элементов на странице с помощью тегов.",
        difficulty: "easy"
      },
      {
        id: "html-2",
        question: "В чем разница между блочными и строчными элементами?",
        answer: "Блочные элементы (div, p, h1) занимают всю доступную ширину и начинаются с новой строки. Строчные элементы (span, a, strong) занимают только необходимое пространство и располагаются в одной строке.",
        difficulty: "medium"
      },
      {
        id: "html-3",
        question: "Что такое семантические теги HTML5?",
        answer: "Семантические теги HTML5 (header, nav, main, article, section, aside, footer) придают смысловое значение содержимому, улучшая SEO и доступность сайта.",
        difficulty: "medium"
      },
      {
        id: "html-4",
        question: "Что такое DOCTYPE и зачем он нужен?",
        answer: "DOCTYPE сообщает браузеру о версии HTML и режиме отображения документа. <!DOCTYPE html> включает стандартный режим HTML5.",
        difficulty: "easy"
      },
      {
        id: "html-5",
        question: "В чем разница между <div> и <span>?",
        answer: "<div> — блочный элемент для группировки контента, <span> — строчный элемент для стилизации части текста без переноса строки.",
        difficulty: "easy"
      },
      {
        id: "html-6",
        question: "Что такое атрибут alt у изображений?",
        answer: "Атрибут alt предоставляет альтернативный текст для изображения, который отображается при загрузке или для screen readers, улучшая доступность.",
        difficulty: "easy"
      },
      {
        id: "html-7",
        question: "Объясните разницу между id и class",
        answer: "id — уникальный идентификатор элемента (должен быть один на странице), class — класс для группы элементов с общими стилями.",
        difficulty: "medium"
      },
      {
        id: "html-8",
        question: "Что такое Web Components?",
        answer: "Web Components — это набор веб-стандартов для создания переиспользуемых пользовательских элементов (Custom Elements, Shadow DOM, HTML Templates).",
        difficulty: "hard"
      },
      {
        id: "html-9",
        question: "Как работает Local Storage?",
        answer: "Local Storage позволяет хранить данные в браузере пользователя без истечения срока действия до явного удаления или очистки браузера.",
        difficulty: "medium"
      },
      {
        id: "html-10",
        question: "Что такое Shadow DOM?",
        answer: "Shadow DOM — это изолированное DOM-дерево, прикрепленное к элементу, которое скрывает разметку и стили от основного документа.",
        difficulty: "hard"
      },
      {
        id: "html-11",
        question: "Объясните meta теги viewport",
        answer: "Meta viewport контролирует отображение страницы на мобильных устройствах: <meta name='viewport' content='width=device-width, initial-scale=1'>",
        difficulty: "medium"
      },
      {
        id: "html-12",
        question: "Что такое Progressive Web Apps (PWA)?",
        answer: "PWA — веб-приложения, которые используют современные веб-технологии для обеспечения нативного пользовательского опыта (Service Workers, Web App Manifest).",
        difficulty: "hard"
      },
      {
        id: "html-13",
        question: "В чем разница между sessionStorage и localStorage?",
        answer: "localStorage хранит данные до явного удаления, sessionStorage — только на время сессии браузера (до закрытия вкладки).",
        difficulty: "medium"
      },
      {
        id: "html-14",
        question: "Что такое ARIA атрибуты?",
        answer: "ARIA (Accessible Rich Internet Applications) атрибуты улучшают доступность веб-контента для пользователей с ограниченными возможностями.",
        difficulty: "medium"
      },
      {
        id: "html-15",
        question: "Объясните HTML5 History API",
        answer: "History API позволяет управлять историей браузера: pushState() добавляет записи, replaceState() заменяет, popstate события обрабатывают навигацию.",
        difficulty: "hard"
      },
      {
        id: "html-16",
        question: "Что такое критический CSS?",
        answer: "Критический CSS — это минимальный набор стилей, необходимый для отображения видимой части страницы, загружаемый inline для ускорения рендеринга.",
        difficulty: "hard"
      },
      {
        id: "html-17",
        question: "Как работает атрибут defer у script?",
        answer: "defer откладывает выполнение скрипта до полной загрузки HTML, сохраняя порядок выполнения скриптов.",
        difficulty: "medium"
      },
      {
        id: "html-18",
        question: "Что такое атрибут async у script?",
        answer: "async загружает скрипт асинхронно и выполняет сразу после загрузки, не блокируя парсинг HTML.",
        difficulty: "medium"
      },
      {
        id: "html-19",
        question: "Объясните Content Security Policy (CSP)",
        answer: "CSP — механизм безопасности, контролирующий ресурсы, которые может загружать страница, предотвращая XSS атаки.",
        difficulty: "hard"
      },
      {
        id: "html-20",
        question: "Что такое preload и prefetch?",
        answer: "preload — приоритетная загрузка критических ресурсов, prefetch — загрузка ресурсов с низким приоритетом для будущего использования.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "css",
    name: "CSS",
    questions: [
      {
        id: "css-1",
        question: "Что такое CSS и как он работает?",
        answer: "CSS (Cascading Style Sheets) — это язык стилей, используемый для описания внешнего вида HTML-документов. Он работает по принципу каскада, где стили применяются в порядке приоритета.",
        difficulty: "easy"
      },
      {
        id: "css-2",
        question: "Объясните CSS Box Model",
        answer: "CSS Box Model описывает прямоугольные блоки, генерируемые для элементов. Состоит из: content (содержимое), padding (внутренние отступы), border (граница), margin (внешние отступы).",
        difficulty: "medium"
      },
      {
        id: "css-3",
        question: "В чем разница между position: absolute и position: relative?",
        answer: "position: relative позиционирует элемент относительно его нормального положения. position: absolute позиционирует элемент относительно ближайшего позиционированного предка.",
        difficulty: "hard"
      },
      {
        id: "css-4",
        question: "Что такое CSS специфичность?",
        answer: "Специфичность определяет приоритет CSS правил: inline стили (1000), ID (100), классы/атрибуты/псевдоклассы (10), элементы (1).",
        difficulty: "medium"
      },
      {
        id: "css-5",
        question: "Объясните Flexbox",
        answer: "Flexbox — одномерная система компоновки для выравнивания и распределения пространства между элементами в контейнере.",
        difficulty: "medium"
      },
      {
        id: "css-6",
        question: "Что такое CSS Grid?",
        answer: "CSS Grid — двумерная система компоновки для создания сложных макетов с помощью строк и столбцов.",
        difficulty: "medium"
      },
      {
        id: "css-7",
        question: "В чем разница между display: none и visibility: hidden?",
        answer: "display: none полностью удаляет элемент из потока документа, visibility: hidden скрывает элемент, но сохраняет его место.",
        difficulty: "easy"
      },
      {
        id: "css-8",
        question: "Что такое CSS переменные (custom properties)?",
        answer: "CSS переменные позволяют хранить значения для переиспользования: --main-color: blue; color: var(--main-color);",
        difficulty: "medium"
      },
      {
        id: "css-9",
        question: "Объясните z-index",
        answer: "z-index контролирует порядок наложения позиционированных элементов по оси Z. Элементы с большим z-index отображаются поверх элементов с меньшим.",
        difficulty: "medium"
      },
      {
        id: "css-10",
        question: "Что такое CSS-in-JS?",
        answer: "CSS-in-JS — подход к стилизации, где CSS пишется внутри JavaScript, обеспечивая динамические стили и изоляцию компонентов.",
        difficulty: "hard"
      },
      {
        id: "css-11",
        question: "Объясните CSS критический путь рендеринга",
        answer: "Критический путь — последовательность шагов браузера для отображения страницы: DOM → CSSOM → Render Tree → Layout → Paint.",
        difficulty: "hard"
      },
      {
        id: "css-12",
        question: "Что такое медиа-запросы?",
        answer: "Медиа-запросы позволяют применять стили в зависимости от характеристик устройства: @media (max-width: 768px) { ... }",
        difficulty: "easy"
      },
      {
        id: "css-13",
        question: "Объясните CSS псевдоклассы и псевдоэлементы",
        answer: "Псевдоклассы (:hover, :focus) стилизуют состояния элементов. Псевдоэлементы (::before, ::after) создают виртуальные элементы.",
        difficulty: "medium"
      },
      {
        id: "css-14",
        question: "Что такое CSS анимации?",
        answer: "CSS анимации позволяют плавно изменять свойства элементов с помощью @keyframes и animation свойств.",
        difficulty: "medium"
      },
      {
        id: "css-15",
        question: "Объясните CSS transforms",
        answer: "Transform позволяет изменять элементы: translate() (перемещение), rotate() (поворот), scale() (масштабирование), skew() (наклон).",
        difficulty: "medium"
      },
      {
        id: "css-16",
        question: "Что такое CSS Containment?",
        answer: "CSS Containment позволяет изолировать части DOM для оптимизации рендеринга: contain: layout style paint size.",
        difficulty: "hard"
      },
      {
        id: "css-17",
        question: "Объясните CSS Houdini",
        answer: "CSS Houdini — набор API для расширения CSS, позволяющий разработчикам создавать собственные CSS свойства и функции.",
        difficulty: "hard"
      },
      {
        id: "css-18",
        question: "Что такое CSS субпиксельное сглаживание?",
        answer: "Субпиксельное сглаживание использует RGB субпиксели для более четкого отображения текста на LCD мониторах.",
        difficulty: "hard"
      },
      {
        id: "css-19",
        question: "Объясните CSS логические свойства",
        answer: "Логические свойства (margin-block-start вместо margin-top) адаптируются к направлению письма и языку документа.",
        difficulty: "hard"
      },
      {
        id: "css-20",
        question: "Что такое CSS Container Queries?",
        answer: "Container Queries позволяют применять стили на основе размера контейнера, а не viewport: @container (min-width: 300px) { ... }",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "javascript",
    name: "JavaScript",
    questions: [
      {
        id: "js-1",
        question: "Что такое замыкания (closures) в JavaScript?",
        answer: "Замыкание — это функция, которая имеет доступ к переменным из внешней области видимости даже после того, как внешняя функция завершила выполнение. Это позволяет создавать приватные переменные и методы.",
        difficulty: "hard"
      },
      {
        id: "js-2",
        question: "В чем разница между var, let и const?",
        answer: "var имеет функциональную область видимости и поднимается. let и const имеют блочную область видимости. const нельзя переназначить, но объекты и массивы можно изменять.",
        difficulty: "medium"
      },
      {
        id: "js-3",
        question: "Что такое Event Loop в JavaScript?",
        answer: "Event Loop — это механизм, который позволяет JavaScript выполнять неблокирующие операции, перемещая колбэки из очереди задач в стек вызовов, когда стек становится пустым.",
        difficulty: "hard"
      },
      {
        id: "js-4",
        question: "Объясните hoisting в JavaScript",
        answer: "Hoisting — это поднятие объявлений переменных и функций в начало их области видимости во время компиляции.",
        difficulty: "medium"
      },
      {
        id: "js-5",
        question: "Что такое this в JavaScript?",
        answer: "this — ключевое слово, которое ссылается на объект, в контексте которого выполняется функция. Значение this зависит от способа вызова функции.",
        difficulty: "medium"
      },
      {
        id: "js-6",
        question: "В чем разница между == и ===?",
        answer: "== выполняет приведение типов перед сравнением, === сравнивает без приведения типов (строгое равенство).",
        difficulty: "easy"
      },
      {
        id: "js-7",
        question: "Что такое Promise в JavaScript?",
        answer: "Promise — объект, представляющий результат асинхронной операции. Может быть в состоянии pending, fulfilled или rejected.",
        difficulty: "medium"
      },
      {
        id: "js-8",
        question: "Объясните async/await",
        answer: "async/await — синтаксический сахар для работы с Promise. async функция возвращает Promise, await приостанавливает выполнение до разрешения Promise.",
        difficulty: "medium"
      },
      {
        id: "js-9",
        question: "Что такое прототипы в JavaScript?",
        answer: "Каждый объект в JavaScript имеет прототип — другой объект, от которого он наследует свойства и методы через prototype chain.",
        difficulty: "hard"
      },
      {
        id: "js-10",
        question: "Объясните методы call, apply и bind",
        answer: "call и apply вызывают функцию с заданным this, различаются передачей аргументов. bind создает новую функцию с привязанным this.",
        difficulty: "hard"
      },
      {
        id: "js-11",
        question: "Что такое модули в JavaScript?",
        answer: "Модули позволяют организовать код в отдельные файлы с помощью export/import, обеспечивая инкапсуляцию и переиспользование.",
        difficulty: "medium"
      },
      {
        id: "js-12",
        question: "Объясните деструктуризацию",
        answer: "Деструктуризация позволяет извлекать значения из массивов или объектов в отдельные переменные: const {name, age} = person;",
        difficulty: "easy"
      },
      {
        id: "js-13",
        question: "Что такое spread и rest операторы?",
        answer: "Spread (...) распаковывает элементы, rest (...) собирает элементы в массив. Spread используется при вызове, rest в параметрах.",
        difficulty: "medium"
      },
      {
        id: "js-14",
        question: "Объясните WeakMap и WeakSet",
        answer: "WeakMap и WeakSet хранят слабые ссылки на объекты, позволяя сборщику мусора удалять неиспользуемые объекты.",
        difficulty: "hard"
      },
      {
        id: "js-15",
        question: "Что такое Proxy в JavaScript?",
        answer: "Proxy позволяет перехватывать и переопределять операции с объектами (get, set, has, deleteProperty и др.).",
        difficulty: "hard"
      },
      {
        id: "js-16",
        question: "Объясните Symbol в JavaScript",
        answer: "Symbol — примитивный тип данных для создания уникальных идентификаторов, часто используется для приватных свойств.",
        difficulty: "hard"
      },
      {
        id: "js-17",
        question: "Что такое генераторы (generators)?",
        answer: "Генераторы — функции, которые могут приостанавливать и возобновлять выполнение с помощью yield, возвращая итератор.",
        difficulty: "hard"
      },
      {
        id: "js-18",
        question: "Объясните Map и Set",
        answer: "Map — коллекция ключ-значение с любыми типами ключей. Set — коллекция уникальных значений любого типа.",
        difficulty: "medium"
      },
      {
        id: "js-19",
        question: "Что такое temporal dead zone?",
        answer: "Temporal Dead Zone — период между началом блока и инициализацией let/const переменной, где обращение к ней вызывает ReferenceError.",
        difficulty: "hard"
      },
      {
        id: "js-20",
        question: "Объясните microtasks и macrotasks",
        answer: "Microtasks (Promise, queueMicrotask) имеют более высокий приоритет чем macrotasks (setTimeout, setInterval) в Event Loop.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "react",
    name: "React",
    questions: [
      {
        id: "react-1",
        question: "Что такое JSX?",
        answer: "JSX (JavaScript XML) — это синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код в JavaScript. Babel транспилирует JSX в вызовы React.createElement().",
        difficulty: "easy"
      },
      {
        id: "react-2",
        question: "Объясните разницу между состоянием (state) и пропсами (props)",
        answer: "Props — это неизменяемые данные, передаваемые от родительского компонента к дочернему. State — это локальные изменяемые данные компонента, которые могут обновляться с помощью setState или useState.",
        difficulty: "medium"
      },
      {
        id: "react-3",
        question: "Что такое хуки (hooks) в React?",
        answer: "Хуки — это функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах. Примеры: useState, useEffect, useContext, useMemo.",
        difficulty: "medium"
      },
      {
        id: "react-4",
        question: "Объясните жизненный цикл компонентов React",
        answer: "Жизненный цикл включает: Mounting (componentDidMount), Updating (componentDidUpdate), Unmounting (componentWillUnmount). В функциональных компонентах используется useEffect.",
        difficulty: "medium"
      },
      {
        id: "react-5",
        question: "Что такое Virtual DOM?",
        answer: "Virtual DOM — это JavaScript представление реального DOM в памяти. React использует его для оптимизации обновлений, сравнивая изменения и обновляя только необходимые элементы.",
        difficulty: "medium"
      },
      {
        id: "react-6",
        question: "Объясните useEffect хук",
        answer: "useEffect выполняет побочные эффекты в функциональных компонентах: запросы к API, подписки, изменение DOM. Может имитировать componentDidMount, componentDidUpdate, componentWillUnmount.",
        difficulty: "medium"
      },
      {
        id: "react-7",
        question: "Что такое Context API?",
        answer: "Context API позволяет передавать данные через дерево компонентов без прокидывания props через все уровни. Используется для глобального состояния.",
        difficulty: "medium"
      },
      {
        id: "react-8",
        question: "В чем разница между useMemo и useCallback?",
        answer: "useMemo мемоизирует результат вычислений, useCallback мемоизирует саму функцию. Оба используются для оптимизации производительности.",
        difficulty: "hard"
      },
      {
        id: "react-9",
        question: "Что такое reconciliation в React?",
        answer: "Reconciliation — процесс сравнения нового Virtual DOM с предыдущим и определения минимальных изменений для обновления реального DOM.",
        difficulty: "hard"
      },
      {
        id: "react-10",
        question: "Объясните useReducer хук",
        answer: "useReducer — альтернатива useState для сложного состояния. Принимает reducer функцию и начальное состояние, возвращает текущее состояние и dispatch функцию.",
        difficulty: "medium"
      },
      {
        id: "react-11",
        question: "Что такое HOC (Higher-Order Components)?",
        answer: "HOC — функция, которая принимает компонент и возвращает новый компонент с дополнительными свойствами или поведением.",
        difficulty: "hard"
      },
      {
        id: "react-12",
        question: "Объясните render props паттерн",
        answer: "Render props — техника совместного использования кода между компонентами с помощью prop, значение которого является функцией.",
        difficulty: "hard"
      },
      {
        id: "react-13",
        question: "Что такое React.memo?",
        answer: "React.memo — HOC для мемоизации функциональных компонентов. Предотвращает ненужные перерендеры, если props не изменились.",
        difficulty: "medium"
      },
      {
        id: "react-14",
        question: "Объясните useRef хук",
        answer: "useRef возвращает изменяемый ref объект, который сохраняет значение между рендерами. Используется для доступа к DOM элементам или хранения значений.",
        difficulty: "medium"
      },
      {
        id: "react-15",
        question: "Что такое Suspense в React?",
        answer: "Suspense позволяет компонентам 'ждать' что-то перед рендерингом, показывая fallback UI во время загрузки данных или кода.",
        difficulty: "hard"
      },
      {
        id: "react-16",
        question: "Объясните Error Boundaries",
        answer: "Error Boundaries — компоненты, которые перехватывают JavaScript ошибки в дереве компонентов и отображают fallback UI вместо краха приложения.",
        difficulty: "hard"
      },
      {
        id: "react-17",
        question: "Что такое React Fiber?",
        answer: "React Fiber — новая архитектура reconciler в React 16+, позволяющая прерывать, приостанавливать и возобновлять работу для лучшей производительности.",
        difficulty: "hard"
      },
      {
        id: "react-18",
        question: "Объясните Concurrent Features в React 18",
        answer: "Concurrent Features включают автоматический батчинг, Suspense для SSR, useTransition и useDeferredValue для оптимизации производительности.",
        difficulty: "hard"
      },
      {
        id: "react-19",
        question: "Что такое React Server Components?",
        answer: "Server Components рендерятся на сервере, позволяя уменьшить размер бандла и улучшить производительность за счет серверного рендеринга части компонентов.",
        difficulty: "hard"
      },
      {
        id: "react-20",
        question: "Объясните useLayoutEffect",
        answer: "useLayoutEffect работает синхронно после всех DOM мутаций, но до отрисовки браузером. Используется для измерений DOM и предотвращения мерцания.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "typescript",
    name: "TypeScript",
    questions: [
      {
        id: "ts-1",
        question: "Что такое TypeScript и зачем он нужен?",
        answer: "TypeScript — это надмножество JavaScript, добавляющее статическую типизацию. Он помогает обнаруживать ошибки на этапе разработки и улучшает IntelliSense.",
        difficulty: "easy"
      },
      {
        id: "ts-2",
        question: "Объясните основные типы данных в TypeScript",
        answer: "Основные типы: number, string, boolean, array, tuple, enum, any, void, null, undefined, never, object.",
        difficulty: "easy"
      },
      {
        id: "ts-3",
        question: "Что такое интерфейсы в TypeScript?",
        answer: "Интерфейсы определяют структуру объектов, описывая какие свойства и методы должны быть у объекта. Они используются для типизации.",
        difficulty: "medium"
      },
      {
        id: "ts-4",
        question: "В чем разница между interface и type?",
        answer: "Interface может быть расширен и объединен, type более гибкий для union/intersection типов. Interface лучше для объектов, type для сложных типов.",
        difficulty: "medium"
      },
      {
        id: "ts-5",
        question: "Что такое дженерики (generics)?",
        answer: "Дженерики позволяют создавать переиспользуемые компоненты, работающие с различными типами, сохраняя типизацию: function identity<T>(arg: T): T",
        difficulty: "medium"
      },
      {
        id: "ts-6",
        question: "Объясните Union и Intersection типы",
        answer: "Union (A | B) означает 'либо A, либо B'. Intersection (A & B) означает 'и A, и B одновременно'.",
        difficulty: "medium"
      },
      {
        id: "ts-7",
        question: "Что такое Type Guards?",
        answer: "Type Guards — это функции или выражения, которые сужают тип в определенном блоке кода: typeof, instanceof, in оператор.",
        difficulty: "hard"
      },
      {
        id: "ts-8",
        question: "Объясните Mapped Types",
        answer: "Mapped Types создают новые типы, преобразуя каждое свойство существующего типа: type Readonly<T> = { readonly [P in keyof T]: T[P] }",
        difficulty: "hard"
      },
      {
        id: "ts-9",
        question: "Что такое Conditional Types?",
        answer: "Conditional Types позволяют создавать типы на основе условий: T extends U ? X : Y",
        difficulty: "hard"
      },
      {
        id: "ts-10",
        question: "Объясните keyof оператор",
        answer: "keyof создает union тип из всех ключей объектного типа: keyof { a: number, b: string } дает 'a' | 'b'",
        difficulty: "medium"
      },
      {
        id: "ts-11",
        question: "Что такое утилитарные типы (Utility Types)?",
        answer: "Встроенные типы для трансформации: Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>, Record<K,T>, Exclude<T,U>, Extract<T,U>",
        difficulty: "medium"
      },
      {
        id: "ts-12",
        question: "Объясните декораторы в TypeScript",
        answer: "Декораторы — это метафункции, которые могут изменять классы, методы, свойства или параметры во время объявления.",
        difficulty: "hard"
      },
      {
        id: "ts-13",
        question: "Что такое модули в TypeScript?",
        answer: "Модули организуют код в отдельные файлы с помощью export/import. TypeScript поддерживает CommonJS, AMD, ES6 модули.",
        difficulty: "medium"
      },
      {
        id: "ts-14",
        question: "Объясните namespace в TypeScript",
        answer: "Namespace группирует связанный код в именованные области видимости, предотвращая конфликты имен в глобальной области.",
        difficulty: "medium"
      },
      {
        id: "ts-15",
        question: "Что такое Declaration Merging?",
        answer: "Declaration Merging позволяет объединять несколько объявлений с одинаковым именем в одно определение.",
        difficulty: "hard"
      },
      {
        id: "ts-16",
        question: "Объясните Template Literal Types",
        answer: "Template Literal Types создают новые строковые типы на основе шаблонных строк: type Greeting = `hello ${string}`",
        difficulty: "hard"
      },
      {
        id: "ts-17",
        question: "Что такое Nominal Typing vs Structural Typing?",
        answer: "TypeScript использует structural typing (совместимость по структуре), в отличие от nominal typing (совместимость по имени типа).",
        difficulty: "hard"
      },
      {
        id: "ts-18",
        question: "Объясните const assertions",
        answer: "Const assertions (as const) делают типы более точными, превращая массивы в readonly tuples, а объекты в readonly.",
        difficulty: "medium"
      },
      {
        id: "ts-19",
        question: "Что такое Abstract Classes?",
        answer: "Abstract классы не могут быть инстанцированы напрямую и могут содержать абстрактные методы, которые должны быть реализованы в наследниках.",
        difficulty: "medium"
      },
      {
        id: "ts-20",
        question: "Объясните Variance в TypeScript",
        answer: "Variance определяет как наследование типов влияет на их совместимость: covariance (T<A> <: T<B> если A <: B), contravariance (обратное).",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "nodejs",
    name: "Node.js",
    questions: [
      {
        id: "node-1",
        question: "Что такое Node.js?",
        answer: "Node.js — это серверная платформа, построенная на движке V8, позволяющая выполнять JavaScript код вне браузера для создания серверных приложений.",
        difficulty: "easy"
      },
      {
        id: "node-2",
        question: "Объясните Event Loop в Node.js",
        answer: "Event Loop обрабатывает асинхронные операции в Node.js, используя фазы: timers, pending callbacks, idle/prepare, poll, check, close callbacks.",
        difficulty: "hard"
      },
      {
        id: "node-3",
        question: "Что такое npm?",
        answer: "npm (Node Package Manager) — это пакетный менеджер для Node.js, позволяющий устанавливать, управлять и публиковать JavaScript пакеты.",
        difficulty: "easy"
      },
      {
        id: "node-4",
        question: "В чем разница между require() и import?",
        answer: "require() — CommonJS синтаксис, синхронный, работает во время выполнения. import — ES6 модули, поддерживает tree-shaking, статический анализ.",
        difficulty: "medium"
      },
      {
        id: "node-5",
        question: "Что такое middleware в Express.js?",
        answer: "Middleware — функции, которые выполняются между запросом и ответом, имеют доступ к req, res объектам и next() функции для передачи управления.",
        difficulty: "medium"
      },
      {
        id: "node-6",
        question: "Объясните streams в Node.js",
        answer: "Streams позволяют читать/записывать данные по частям: Readable (чтение), Writable (запись), Duplex (чтение+запись), Transform (преобразование).",
        difficulty: "hard"
      },
      {
        id: "node-7",
        question: "Что такое Buffer в Node.js?",
        answer: "Buffer — это глобальный класс для работы с бинарными данными в Node.js, представляет фиксированный размер памяти вне V8 heap.",
        difficulty: "medium"
      },
      {
        id: "node-8",
        question: "Объясните процесс child_process",
        answer: "child_process модуль позволяет создавать дочерние процессы: spawn(), exec(), execFile(), fork() для выполнения внешних команд.",
        difficulty: "hard"
      },
      {
        id: "node-9",
        question: "Что такое cluster в Node.js?",
        answer: "Cluster модуль позволяет создавать дочерние процессы, разделяющие серверные порты, для использования всех CPU ядер.",
        difficulty: "hard"
      },
      {
        id: "node-10",
        question: "Объясните callback, Promise и async/await",
        answer: "Callback — функция обратного вызова. Promise — объект для асинхронных операций. async/await — синтаксический сахар для Promise.",
        difficulty: "medium"
      },
      {
        id: "node-11",
        question: "Что такое worker_threads в Node.js?",
        answer: "Worker threads позволяют выполнять JavaScript код в параллельных потоках, полезно для CPU-интенсивных задач.",
        difficulty: "hard"
      },
      {
        id: "node-12",
        question: "Объясните process объект",
        answer: "process — глобальный объект, предоставляющий информацию о текущем Node.js процессе: argv, env, exit(), cwd(), platform.",
        difficulty: "medium"
      },
      {
        id: "node-13",
        question: "Что такое REPL в Node.js?",
        answer: "REPL (Read-Eval-Print Loop) — интерактивная оболочка для выполнения JavaScript команд в реальном времени.",
        difficulty: "easy"
      },
      {
        id: "node-14",
        question: "Объясните разницу между process.nextTick() и setImmediate()",
        answer: "process.nextTick() выполняется в начале следующей итерации Event Loop, setImmediate() — в check фазе текущей итерации.",
        difficulty: "hard"
      },
      {
        id: "node-15",
        question: "Что такое libuv?",
        answer: "libuv — C библиотека, обеспечивающая асинхронный I/O в Node.js через Event Loop, thread pool и работу с файловой системой.",
        difficulty: "hard"
      },
      {
        id: "node-16",
        question: "Объясните модуль fs",
        answer: "fs модуль предоставляет API для работы с файловой системой: readFile(), writeFile(), mkdir(), stat() и их синхронные версии.",
        difficulty: "medium"
      },
      {
        id: "node-17",
        question: "Что такое CommonJS?",
        answer: "CommonJS — стандарт модульной системы для JavaScript, использующий require() для импорта и module.exports для экспорта.",
        difficulty: "medium"
      },
      {
        id: "node-18",
        question: "Объясните http модуль",
        answer: "http модуль позволяет создавать HTTP серверы и клиенты: createServer(), request(), response объекты для обработки запросов.",
        difficulty: "medium"
      },
      {
        id: "node-19",
        question: "Что такое package.json?",
        answer: "package.json — файл конфигурации проекта, содержащий метаданные: название, версию, зависимости, скрипты, точку входа.",
        difficulty: "easy"
      },
      {
        id: "node-20",
        question: "Объясните память и garbage collection в Node.js",
        answer: "Node.js использует V8 garbage collector: young generation (Scavenge), old generation (Mark-Sweep-Compact), память делится на heap и stack.",
        difficulty: "hard"
      }
    ]
  }
];

export const getTechnologyQuestions = (techId: string): Question[] => {
  const tech = questionsData.find(t => t.id === techId);
  return tech ? tech.questions : [];
};

export const getAllQuestions = (): Question[] => {
  return questionsData.flatMap(tech => tech.questions);
};
