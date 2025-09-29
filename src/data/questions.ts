export interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export type ProgressStatus = 'learning' | 'review' | 'known';

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
        question: "Что такое HTML и какие принципы лежат в его основе?",
        answer: "HTML (от англ. HyperText Markup Language) - язык разметки гипертекста, который используется для создания и структурирования веб-страниц. Основными принципами, лежащими в основе HTML, являются иерархическая структура документа, использование тегов и атрибутов для определения структуры и содержания документа, а также основное правило, согласно которому каждый тег должен иметь начальный и конечный элементы.",
        difficulty: "easy"
      },
      {
        id: "html-2",
        question: "В чем разница между блочными и строчными элементами?",
        answer: "Блочные элементы (div, p, h1) занимают всю доступную ширину и начинаются с новой строки. Строчные элементы (span, a, strong) занимают только необходимое пространство и располагаются в одной строке.",
        difficulty: "easy"
      },
      {
        id: "html-3",
        question: "Что такое семантические теги HTML5?",
        answer: "Семантические теги HTML5 (header, nav, main, article, section, aside, footer) придают смысловое значение содержимому, улучшая SEO и доступность сайта.",
        difficulty: "easy"
      },
      {
        id: "html-4",
        question: "Что такое DOCTYPE и зачем он нужен?",
        answer: "DOCTYPE сообщает браузеру о версии HTML и режиме отображения документа. <!DOCTYPE html> включает стандартный режим HTML5.",
        difficulty: "easy"
      },
      {
        id: "html-5",
        question: "Какой тег используется для создания ссылок?",
        answer: "Для создания ссылки используется тег <a>. Атрибут href определяет URL-адрес страницы, на которую нужно перейти при клике на ссылке. Также можно добавлять дополнительные атрибуты, такие как title и target.",
        difficulty: "easy"
      },
      
      {
        id: "html-6",
        question: "Какой тег используется для вставки изображений и какие атрибуты могут использоваться?",
        answer: "Для вставки изображений используется тег <img>. Атрибуты, которые могут использоваться, включают в себя: src (указывает путь к файлу изображения), alt (определяет альтернативный текст, который будет отображаться, если изображение не будет загружено) и другие.",
        difficulty: "easy"
      },
      {
        id: "html-7",
        question: "Что такое атрибут и какие атрибуты могут использоваться с тегом? <a>",
        answer: "Атрибут - это дополнительная характеристика, которая может быть назначена HTML-элементу. Атрибуты, которые могут использоваться с тегом <a>, включают в себя: href (определяет ссылку), title (определяет всплывающую подсказку), target (определяет целевое окно или фрейм).",
        difficulty: "easy"
      },
      {
        id: "html-8",
        question: "Что такое метатеги и зачем они используются?",
        answer: "Метатеги (meta tags) - это HTML-элементы, которые указывают метаданные для веб-страницы, такие как описание, ключевые слова, автор, язык, кодировку и другие. Они используются для улучшения качества и читабельности кода, а также помогают улучшить SEO-оптимизацию веб-страниц.",
        difficulty: "easy"
      },
      {
        id: "html-9",
        question: "Какой тег используется для создания списка и какие его виды существуют?",
        answer: "Для создания списка можно использовать тег <ul> для неупорядоченного списка и тег <ol> для упорядоченного списка. Внутри этих тегов можно использовать тег <li>, который определяет элемент списка.",
        difficulty: "easy"
      },
      {
        id: "html-10",
        question: "Что такое валидный HTML и почему это важно?",
        answer: "Валидный HTML означает, что код HTML-страницы написан в соответствии с принятой структурой, правильным использование тегов и атрибутов и не содержит ошибок. Валидный HTML имеет большое значение для SEO-оптимизации и удобства создания и поддержки веб-страниц.",
        difficulty: "easy"
      },
    
      {
        id: "html-11",
        question: "Объясните meta тег viewport",
        answer: "Meta viewport контролирует отображение страницы на мобильных устройствах: <meta name='viewport' content='width=device-width, initial-scale=1'>",
        difficulty: "easy"
      },
      {
        id: "html-12",
        question: "Почему используется атрибут alt при вставке изображений, и как он влияет на SEO?",
        answer: "Атрибут alt используется для задания альтернативного текста для изображения. Этот текст будет отображаться в случае, если браузер по какой-то причине не сможет загрузить изображение, а также для пользователей, использующих программы чтения страниц для слабовидящих, которые не могут прочитать содержимое изображения. Атрибут alt также влияет на SEO, так как поисковые системы могут использовать его для индексации и ранжирования страниц.",
        difficulty: "easy"
      },
    
      {
        id: "html-13",
        question: "Что такое data-атрибуты и как они могут использоваться в HTML?",
        answer: "Data-атрибуты представляют собой атрибуты, имя которых начинается с префикса \"data-\". Они могут использоваться для хранения дополнительных данных, связанных с элементом, которые не отображаются на странице, но могут быть использованы JavaScript-скриптами для манипулирования содержимым страницы.",
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
        question: "Опиши базовую структуру HTML-документа",
        answer: "Базовая структура состоит из объявления типа документа <!DOCTYPE html>, корневого тега <html> с разделами <head> (для метаинформации) и <body> (для содержимого страницы).",
        difficulty: "easy"
      },
      {
        id: "html-16",
        question: "Можно ли использовать более одного тега MAIN на странице и что будет происходить с их содержимым?",
        answer: "В HTML5 может быть использован только один тег <main>. Если на странице есть более одного тега <main>, то только первый будет учитываться при интерпретации содержимого. Остальные будут проигнорированы.",
        difficulty: "easy"
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
        difficulty: "easy"
      },
      {
        id: "css-3",
        question: "В чем разница между position: absolute и position: relative?",
        answer: "position: relative позиционирует элемент относительно его нормального положения. position: absolute позиционирует элемент относительно ближайшего позиционированного предка.",
        difficulty: "easy"
      },
      {
        id: "css-5",
        question: "Объясните Flexbox",
        answer: "Flexbox — одномерная система компоновки для выравнивания и распределения пространства между элементами в контейнере.",
        difficulty: "easy"
      },
      {
        id: "css-6",
        question: "Что такое CSS Grid?",
        answer: "CSS Grid — двумерная система компоновки для создания сложных макетов с помощью строк и столбцов.",
        difficulty: "easy"
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
        difficulty: "easy"
      },
      {
        id: "css-9",
        question: "Объясните z-index",
        answer: "z-index контролирует порядок наложения позиционированных элементов по оси Z. Элементы с большим z-index отображаются поверх элементов с меньшим.",
        difficulty: "easy"
      },
      {
        id: "css-10",
        question: "Как работает специфичность в CSS?",
        answer: "Специфичность в CSS определяет, какой стиль будет применен к элементу, если на него одновременно действуют несколько правил. Когда браузер сталкивается с несколькими правилами, определяется их приоритетность на основе специфичности, чтобы определить, какое правило будет применено.",
        difficulty: "easy"
      },
      {
        id: "css-11",
        question: "Что такое БЭМ (Block-Element-Modifier)",
        answer: "Методология БЭМ (Block-Element-Modifier) — это подход к организации CSS-кода через разделение интерфейса на независимые блоки, их внутренние элементы и модификаторы для изменения внешнего вида или состояния. Блок — это независимый компонент (например, menu), элемент — часть блока (например, menu__item), а модификатор — изменение блока/элемента (например, menu--hidden).",
        difficulty: "easy"
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
        difficulty: "easy"
      },
      {
        id: "css-14",
        question: "Что такое CSS анимации?",
        answer: "CSS анимации позволяют плавно изменять свойства элементов с помощью @keyframes и animation свойств.",
        difficulty: "easy"
      },
      {
        id: "css-15",
        question: "Объясните CSS transforms",
        answer: "Transform позволяет изменять элементы: translate() (перемещение), rotate() (поворот), scale() (масштабирование), skew() (наклон).",
        difficulty: "easy"
      },
      {
        id: "css-16",
        question: "Как работают псевдоэлементы ::before и ::after?",
        answer: "Псевдоэлементы ::before и ::after являются частью CSS и представляют собой виртуальные элементы, которые можно добавить к контенту выбранных элементов. Они позволяют вставлять дополнительный контент перед или после содержимого элемента без изменения его структуры в HTML.",
        difficulty: "easy"
      },
       {
        id: "css-17",
        question: "Какие основные свойства Flexbox контейнера и элементов?",
        answer: "Основные свойства Flexbox для контейнера: display: flex создаёт flex-контейнер; flex-direction задаёт направление главной оси; flex-wrap управляет переносом элементов; justify-content выравнивает элементы по главной оси; align-items выравнивает по поперечной оси; align-content распределяет строки при переносе.",
        difficulty: "easy"
      },
      {
        id: "css-18",
        question: "В каких случаях их следует использовать Grid?",
        answer: "Для сложных двумерных макетов (дашборды, галереи, новостные ленты). Когда нужно точное позиционирование элементов в сетке. Для создания адаптивных макетов с перераспределением контента. Когда нужно управлять выравниванием и промежутками между элементами",
        difficulty: "easy"
      },
      {
        id: "css-19",
        question: "Какие преимущества использования CSS-препроцессоров?",
        answer: "CSS-препроцессоры добавляют переменные, вложенность, миксины и функции, что ускоряет разработку и упрощает поддержку кода.",
        difficulty: "easy"
      },
      {
        id: "css-",
        question: "",
        answer: "",
        difficulty: "easy"
      },
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
      },
      {
        id: "js-21",
        question: "Что такое Web Workers и как их использовать?",
        answer: "Web Workers выполняют JavaScript в фоновом потоке. Создаются через new Worker(), общаются через postMessage().",
        difficulty: "hard"
      },
      {
        id: "js-22",
        question: "Объясните работу Service Workers",
        answer: "Service Workers — прокси между приложением и сетью. Используются для кэширования, офлайн-работы, push-уведомлений.",
        difficulty: "hard"
      },
      {
        id: "js-23",
        question: "Что такое WebAssembly?",
        answer: "WebAssembly — бинарный формат для выполнения кода в браузере. Позволяет запускать код на C++, Rust с высокой производительностью.",
        difficulty: "hard"
      },
      {
        id: "js-24",
        question: "Объясните работу WebSocket API",
        answer: "WebSocket API обеспечивает двустороннюю связь: new WebSocket(), onopen, onmessage, send(), close().",
        difficulty: "hard"
      },
      {
        id: "js-25",
        question: "Что такое IndexedDB?",
        answer: "IndexedDB — низкоуровневое API для хранения больших объемов данных в браузере. Поддерживает индексы, транзакции, версионирование.",
        difficulty: "hard"
      },
      {
        id: "js-26",
        question: "Объясните работу Intersection Observer API",
        answer: "Intersection Observer отслеживает появление элементов в viewport: new IntersectionObserver(callback, options).",
        difficulty: "medium"
      },
      {
        id: "js-27",
        question: "Что такое ResizeObserver?",
        answer: "ResizeObserver отслеживает изменения размеров элементов: new ResizeObserver(callback).",
        difficulty: "medium"
      },
      {
        id: "js-28",
        question: "Объясните работу Performance API",
        answer: "Performance API измеряет производительность: performance.now(), performance.mark(), performance.measure().",
        difficulty: "hard"
      },
      {
        id: "js-29",
        question: "Что такое Web Audio API?",
        answer: "Web Audio API создает и обрабатывает звук: AudioContext, OscillatorNode, GainNode, AudioBuffer.",
        difficulty: "hard"
      },
      {
        id: "js-30",
        question: "Объясните работу WebRTC",
        answer: "WebRTC обеспечивает peer-to-peer связь: getUserMedia(), RTCPeerConnection, RTCDataChannel.",
        difficulty: "hard"
      },
      {
        id: "js-31",
        question: "Что такое строгий режим ('use strict')?",
        answer: "Строгий режим включает дополнительные проверки и ограничения в JavaScript: запрещает неявное создание глобальных переменных, дублирование параметров, использование this без контекста.",
        difficulty: "easy"
      },
      {
        id: "js-32",
        question: "Как работает оператор typeof?",
        answer: "typeof возвращает строку с типом операнда: 'number', 'string', 'boolean', 'undefined', 'object', 'function'. Имеет особенности с null (возвращает 'object') и массивом (возвращает 'object').",
        difficulty: "easy"
      },
      {
        id: "js-33",
        question: "В чем разница между null и undefined?",
        answer: "undefined — переменная объявлена, но не инициализирована. null — явное отсутствие значения. typeof undefined возвращает 'undefined', typeof null возвращает 'object'.",
        difficulty: "easy"
      },
      {
        id: "js-34",
        question: "Как работает оператор instanceof?",
        answer: "instanceof проверяет, является ли объект экземпляром класса или конструктора: obj instanceof Class. Проверяет цепочку прототипов.",
        difficulty: "easy"
      },
      {
        id: "js-35",
        question: "Что такое NaN и как его проверить?",
        answer: "NaN (Not a Number) — результат некорректной математической операции. Проверяется через isNaN() или Number.isNaN(). NaN не равен самому себе.",
        difficulty: "easy"
      },
      {
        id: "js-36",
        question: "Как работает оператор spread (...) в массивах?",
        answer: "Spread оператор распаковывает элементы массива: [...arr1, ...arr2] объединяет массивы, [...arr] создает копию массива.",
        difficulty: "easy"
      },
      {
        id: "js-37",
        question: "Что такое деструктуризация массивов?",
        answer: "Деструктуризация позволяет извлекать элементы массива в переменные: const [first, second] = arr. Можно использовать значения по умолчанию и пропускать элементы.",
        difficulty: "easy"
      },
      {
        id: "js-38",
        question: "Как работает метод map()?",
        answer: "map() создает новый массив, применяя функцию к каждому элементу: arr.map(x => x * 2). Не изменяет исходный массив.",
        difficulty: "easy"
      },
      {
        id: "js-39",
        question: "В чем разница между forEach и map?",
        answer: "forEach выполняет функцию для каждого элемента, но не возвращает новый массив. map создает новый массив с результатами вызова функции.",
        difficulty: "easy"
      },
      {
        id: "js-40",
        question: "Как работает метод filter()?",
        answer: "filter() создает новый массив с элементами, прошедшими проверку: arr.filter(x => x > 5). Возвращает пустой массив, если ни один элемент не прошел проверку.",
        difficulty: "easy"
      },
      {
        id: "js-41",
        question: "Что такое метод reduce()?",
        answer: "reduce() применяет функцию к каждому элементу, накапливая результат: arr.reduce((acc, curr) => acc + curr, 0). Второй аргумент — начальное значение.",
        difficulty: "medium"
      },
      {
        id: "js-42",
        question: "Как работает оператор rest (...) в параметрах функции?",
        answer: "Rest оператор собирает оставшиеся аргументы в массив: function sum(...args). Позволяет работать с произвольным количеством аргументов.",
        difficulty: "easy"
      },
      {
        id: "js-43",
        question: "Что такое стрелочные функции?",
        answer: "Стрелочные функции — короткий синтаксис для функций: const add = (a, b) => a + b. Не имеют своего this, arguments, super.",
        difficulty: "easy"
      },
      {
        id: "js-44",
        question: "Как работает метод slice()?",
        answer: "slice() создает копию части массива: arr.slice(1, 3). Не изменяет исходный массив. Без аргументов создает полную копию.",
        difficulty: "easy"
      },
      {
        id: "js-45",
        question: "В чем разница между slice() и splice()?",
        answer: "slice() создает копию части массива, не изменяя исходный. splice() изменяет исходный массив, удаляя или добавляя элементы.",
        difficulty: "easy"
      },
      {
        id: "js-46",
        question: "Как работает метод concat()?",
        answer: "concat() объединяет массивы: arr1.concat(arr2). Не изменяет исходные массивы. Может принимать несколько аргументов.",
        difficulty: "easy"
      },
      {
        id: "js-47",
        question: "Что такое метод includes()?",
        answer: "includes() проверяет наличие элемента в массиве: arr.includes(5). Возвращает true/false. Работает с примитивами и объектами.",
        difficulty: "easy"
      },
      {
        id: "js-48",
        question: "Как работает метод indexOf()?",
        answer: "indexOf() возвращает индекс первого вхождения элемента: arr.indexOf(5). Возвращает -1, если элемент не найден.",
        difficulty: "easy"
      },
      {
        id: "js-49",
        question: "Что такое метод find()?",
        answer: "find() возвращает первый элемент, удовлетворяющий условию: arr.find(x => x > 5). Возвращает undefined, если элемент не найден.",
        difficulty: "easy"
      },
      {
        id: "js-50",
        question: "Как работает метод some()?",
        answer: "some() проверяет, удовлетворяет ли хотя бы один элемент условию: arr.some(x => x > 5). Возвращает true/false.",
        difficulty: "easy"
      },
      {
        id: "js-51",
        question: "Что такое прототипное наследование в JavaScript?",
        answer: "Прототипное наследование — механизм, при котором объекты наследуют свойства и методы от других объектов через цепочку прототипов. Каждый объект имеет скрытое свойство [[Prototype]], которое ссылается на его прототип.",
        difficulty: "medium"
      },
      {
        id: "js-52",
        question: "Как работает Object.create()?",
        answer: "Object.create() создает новый объект с указанным прототипом: Object.create(proto, propertiesObject). Позволяет создавать объекты без конструкторов и настраивать их свойства.",
        difficulty: "medium"
      },
      {
        id: "js-53",
        question: "Что такое дескрипторы свойств в JavaScript?",
        answer: "Дескрипторы свойств определяют поведение свойства: value, writable, enumerable, configurable. Доступны через Object.getOwnPropertyDescriptor() и Object.defineProperty().",
        difficulty: "medium"
      },
      {
        id: "js-54",
        question: "Объясните работу Promise.all() и Promise.race()",
        answer: "Promise.all() ждет выполнения всех промисов и возвращает массив результатов. Promise.race() возвращает результат первого выполненного промиса. Оба возвращают Promise.",
        difficulty: "medium"
      },
      {
        id: "js-55",
        question: "Что такое async/await и как обрабатывать ошибки?",
        answer: "async/await — синтаксический сахар для работы с Promise. Ошибки обрабатываются через try/catch. async функция всегда возвращает Promise.",
        difficulty: "medium"
      },
      {
        id: "js-56",
        question: "Как работает Event Loop в JavaScript?",
        answer: "Event Loop обрабатывает асинхронные операции: сначала выполняет синхронный код, затем microtasks (Promise), затем macrotasks (setTimeout, setInterval).",
        difficulty: "medium"
      },
      {
        id: "js-57",
        question: "Что такое замыкания (closures) и как они работают?",
        answer: "Замыкание — функция, которая имеет доступ к переменным из внешней области видимости. Сохраняет ссылку на переменные даже после завершения выполнения внешней функции.",
        difficulty: "medium"
      },
      {
        id: "js-58",
        question: "Объясните работу this в JavaScript",
        answer: "this — контекст выполнения функции. Зависит от способа вызова: в методе объекта — сам объект, в обычной функции — window/undefined, в стрелочной — внешний контекст.",
        difficulty: "medium"
      },
      {
        id: "js-59",
        question: "Что такое WeakMap и WeakSet?",
        answer: "WeakMap и WeakSet хранят слабые ссылки на объекты, позволяя сборщику мусора удалять неиспользуемые объекты. Не итерируемы, ключи WeakMap — только объекты.",
        difficulty: "medium"
      },
      {
        id: "js-60",
        question: "Как работает Proxy в JavaScript?",
        answer: "Proxy — объект-обертка, перехватывающий операции с объектом: get, set, has, deleteProperty и др. Позволяет кастомизировать поведение объекта.",
        difficulty: "medium"
      },
      {
        id: "js-61",
        question: "Что такое Symbol в JavaScript?",
        answer: "Symbol — примитивный тип данных для создания уникальных идентификаторов. Используется для создания приватных свойств и специальных методов объектов.",
        difficulty: "medium"
      },
      {
        id: "js-62",
        question: "Объясните работу генераторов (generators)",
        answer: "Генераторы — функции, которые могут приостанавливать выполнение через yield. Возвращают итератор. Позволяют создавать асинхронный код в синхронном стиле.",
        difficulty: "medium"
      },
      {
        id: "js-63",
        question: "Что такое декораторы в JavaScript?",
        answer: "Декораторы — функции, которые модифицируют классы, методы или свойства. Используются для добавления функциональности без изменения исходного кода.",
        difficulty: "medium"
      },
      {
        id: "js-64",
        question: "Как работает Object.freeze() и Object.seal()?",
        answer: "Object.freeze() делает объект неизменяемым. Object.seal() запрещает добавлять/удалять свойства, но позволяет изменять существующие. Оба возвращают модифицированный объект.",
        difficulty: "medium"
      },
      {
        id: "js-65",
        question: "Что такое Reflect в JavaScript?",
        answer: "Reflect — встроенный объект, предоставляющий методы для перехватываемых операций. Используется с Proxy для создания более предсказуемого поведения.",
        difficulty: "medium"
      },
      {
        id: "js-66",
        question: "Объясните работу async итераторов",
        answer: "Async итераторы позволяют асинхронно перебирать данные. Используют Symbol.asyncIterator и методы next(), return(), throw(). Поддерживаются в for await...of.",
        difficulty: "medium"
      },
      {
        id: "js-67",
        question: "Что такое BigInt в JavaScript?",
        answer: "BigInt — тип данных для работы с целыми числами произвольной точности. Создается через n суффикс или BigInt(). Нельзя смешивать с обычными числами.",
        difficulty: "medium"
      },
      {
        id: "js-68",
        question: "Как работает Optional Chaining (?.)",
        answer: "Optional Chaining позволяет безопасно обращаться к вложенным свойствам объекта. Возвращает undefined вместо ошибки, если промежуточное свойство null или undefined.",
        difficulty: "medium"
      },
      {
        id: "js-69",
        question: "Что такое Nullish Coalescing (??)?",
        answer: "Nullish Coalescing возвращает правый операнд, если левый равен null или undefined. В отличие от ||, не заменяет другие falsy значения (0, '', false).",
        difficulty: "medium"
      },
      {
        id: "js-70",
        question: "Объясните работу Intl API",
        answer: "Intl API предоставляет интернационализацию: форматирование дат, чисел, строк, сортировку. Использует Intl.DateTimeFormat, Intl.NumberFormat, Intl.Collator.",
        difficulty: "medium"
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
      },
      {
        id: "node-21",
        question: "Что такое PM2 и зачем он нужен?",
        answer: "PM2 — это менеджер процессов для Node.js приложений, обеспечивающий балансировку нагрузки, автоматический перезапуск, логирование и мониторинг.",
        difficulty: "medium"
      },
      {
        id: "node-22",
        question: "Объясните разницу между process.env и dotenv",
        answer: "process.env — глобальный объект с переменными окружения. dotenv — пакет для загрузки переменных из .env файла в process.env.",
        difficulty: "easy"
      },
      {
        id: "node-23",
        question: "Что такое JWT и как его использовать в Node.js?",
        answer: "JWT (JSON Web Token) — стандарт для создания токенов доступа. В Node.js используется для аутентификации через jsonwebtoken пакет.",
        difficulty: "medium"
      },
      {
        id: "node-24",
        question: "Объясните паттерн Repository в Node.js",
        answer: "Repository паттерн абстрагирует доступ к данным, инкапсулируя логику работы с базой данных в отдельном слое.",
        difficulty: "hard"
      },
      {
        id: "node-25",
        question: "Что такое Rate Limiting и как его реализовать?",
        answer: "Rate Limiting ограничивает количество запросов от клиента. Реализуется через middleware с использованием Redis или in-memory хранилища.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "database",
    name: "Базы данных",
    questions: [
      {
        id: "db-1",
        question: "В чем разница между SQL и NoSQL базами данных?",
        answer: "SQL — реляционные БД с фиксированной схемой и ACID. NoSQL — нереляционные БД с гибкой схемой, высокой производительностью и масштабируемостью.",
        difficulty: "medium"
      },
      {
        id: "db-2",
        question: "Что такое индексы в базах данных?",
        answer: "Индексы — структуры данных, ускоряющие поиск записей. Улучшают производительность SELECT, но замедляют INSERT/UPDATE/DELETE.",
        difficulty: "medium"
      },
      {
        id: "db-3",
        question: "Объясните нормализацию баз данных",
        answer: "Нормализация — процесс организации данных для минимизации избыточности: 1NF (атомарность), 2NF (зависимость от ключа), 3NF (транзитивная зависимость).",
        difficulty: "hard"
      },
      {
        id: "db-4",
        question: "Что такое транзакции и ACID?",
        answer: "ACID: Atomicity (атомарность), Consistency (согласованность), Isolation (изоляция), Durability (долговечность). Транзакции обеспечивают целостность данных.",
        difficulty: "medium"
      },
      {
        id: "db-5",
        question: "Объясните разницу между MongoDB и PostgreSQL",
        answer: "MongoDB — документоориентированная NoSQL БД, гибкая схема. PostgreSQL — реляционная SQL БД с поддержкой JSON и сложных запросов.",
        difficulty: "medium"
      },
      {
        id: "db-6",
        question: "Что такое Redis и когда его использовать?",
        answer: "Redis — in-memory хранилище данных типа ключ-значение. Используется для кэширования, сессий, очередей, pub/sub.",
        difficulty: "medium"
      },
      {
        id: "db-7",
        question: "Объясните шардирование баз данных",
        answer: "Шардирование — горизонтальное разделение данных между несколькими серверами для масштабирования и распределения нагрузки.",
        difficulty: "hard"
      },
      {
        id: "db-8",
        question: "Что такое репликация в базах данных?",
        answer: "Репликация — копирование данных между серверами для отказоустойчивости, балансировки нагрузки и географического распределения.",
        difficulty: "medium"
      },
      {
        id: "db-9",
        question: "Объясните разницу между LEFT, RIGHT и INNER JOIN",
        answer: "INNER JOIN — только совпадающие записи. LEFT JOIN — все записи из левой таблицы. RIGHT JOIN — все записи из правой таблицы.",
        difficulty: "medium"
      },
      {
        id: "db-10",
        question: "Что такое ORM и зачем он нужен?",
        answer: "ORM (Object-Relational Mapping) — технология для работы с БД через объекты. Примеры: Sequelize, TypeORM, Mongoose.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "sql",
    name: "SQL",
    questions: [
      {
        id: "sql-1",
        question: "Что такое SQL и какие основные команды он включает?",
        answer: "SQL (Structured Query Language) — язык для работы с реляционными базами данных. Основные команды: SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP.",
        difficulty: "easy"
      },
      {
        id: "sql-2",
        question: "Объясните разницу между INNER JOIN и LEFT JOIN",
        answer: "INNER JOIN возвращает только совпадающие записи из обеих таблиц. LEFT JOIN возвращает все записи из левой таблицы и совпадающие из правой.",
        difficulty: "medium"
      },
      {
        id: "sql-3",
        question: "Что такое индексы в SQL?",
        answer: "Индексы — структуры данных, ускоряющие поиск записей. Улучшают производительность SELECT, но замедляют INSERT/UPDATE/DELETE.",
        difficulty: "medium"
      },
      {
        id: "sql-4",
        question: "Объясните нормализацию баз данных",
        answer: "Нормализация — процесс организации данных для минимизации избыточности: 1NF (атомарность), 2NF (зависимость от ключа), 3NF (транзитивная зависимость).",
        difficulty: "hard"
      },
      {
        id: "sql-5",
        question: "Что такое транзакции и ACID?",
        answer: "ACID: Atomicity (атомарность), Consistency (согласованность), Isolation (изоляция), Durability (долговечность). Транзакции обеспечивают целостность данных.",
        difficulty: "medium"
      },
      {
        id: "sql-6",
        question: "Как работает GROUP BY?",
        answer: "GROUP BY группирует строки по указанным столбцам. Используется с агрегатными функциями (COUNT, SUM, AVG, MAX, MIN).",
        difficulty: "medium"
      },
      {
        id: "sql-7",
        question: "Что такое подзапросы (subqueries)?",
        answer: "Подзапросы — запросы внутри других запросов. Могут быть в WHERE, FROM, SELECT. Используются для сложной фильтрации и агрегации.",
        difficulty: "medium"
      },
      {
        id: "sql-8",
        question: "Объясните разницу между HAVING и WHERE",
        answer: "WHERE фильтрует строки до группировки, HAVING — после. HAVING используется с GROUP BY для фильтрации групп.",
        difficulty: "medium"
      },
      {
        id: "sql-9",
        question: "Что такое оконные функции?",
        answer: "Оконные функции выполняют вычисления над набором строк: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(). Используют OVER().",
        difficulty: "hard"
      },
      {
        id: "sql-10",
        question: "Как работает UNION?",
        answer: "UNION объединяет результаты нескольких SELECT запросов. Удаляет дубликаты. UNION ALL сохраняет дубликаты.",
        difficulty: "medium"
      },
      {
        id: "sql-11",
        question: "Что такое внешние ключи (foreign keys)?",
        answer: "Внешние ключи обеспечивают ссылочную целостность между таблицами. Создаются через FOREIGN KEY CONSTRAINT.",
        difficulty: "medium"
      },
      {
        id: "sql-12",
        question: "Объясните разницу между DELETE и TRUNCATE",
        answer: "DELETE удаляет строки с возможностью отката. TRUNCATE удаляет все строки без возможности отката, сбрасывает автоинкремент.",
        difficulty: "medium"
      },
      {
        id: "sql-13",
        question: "Что такое представления (views)?",
        answer: "Представления — виртуальные таблицы на основе SELECT запроса. Упрощают сложные запросы, обеспечивают безопасность данных.",
        difficulty: "medium"
      },
      {
        id: "sql-14",
        question: "Как работает EXISTS?",
        answer: "EXISTS проверяет наличие записей в подзапросе. Возвращает TRUE, если подзапрос возвращает хотя бы одну строку.",
        difficulty: "medium"
      },
      {
        id: "sql-15",
        question: "Что такое хранимые процедуры?",
        answer: "Хранимые процедуры — набор SQL команд, сохраненных в базе данных. Улучшают производительность, безопасность, переиспользуемость кода.",
        difficulty: "hard"
      },
      {
        id: "sql-16",
        question: "Объясните разницу между CHAR и VARCHAR",
        answer: "CHAR имеет фиксированную длину, дополняется пробелами. VARCHAR имеет переменную длину, занимает только необходимое пространство.",
        difficulty: "easy"
      },
      {
        id: "sql-17",
        question: "Что такое триггеры?",
        answer: "Триггеры — процедуры, автоматически выполняемые при определенных событиях (INSERT, UPDATE, DELETE).",
        difficulty: "hard"
      },
      {
        id: "sql-18",
        question: "Как работает CASE в SQL?",
        answer: "CASE — условный оператор: CASE WHEN condition THEN result ELSE default END. Используется для условной логики в запросах.",
        difficulty: "medium"
      },
      {
        id: "sql-19",
        question: "Что такое CTE (Common Table Expressions)?",
        answer: "CTE — временные результаты запроса, доступные в рамках одного запроса. Создаются через WITH. Улучшают читаемость сложных запросов.",
        difficulty: "hard"
      },
      {
        id: "sql-20",
        question: "Объясните разницу между IN и EXISTS",
        answer: "IN проверяет наличие значения в списке. EXISTS проверяет наличие записей в подзапросе. EXISTS обычно эффективнее для больших наборов данных.",
        difficulty: "medium"
      },
      {
        id: "sql-21",
        question: "Что такое партиционирование таблиц?",
        answer: "Партиционирование — разделение таблицы на логические части. Улучшает производительность запросов и управление данными.",
        difficulty: "hard"
      },
      {
        id: "sql-22",
        question: "Как работает FULL OUTER JOIN?",
        answer: "FULL OUTER JOIN возвращает все записи из обеих таблиц. Если нет совпадения, заполняет NULL. Эквивалентен UNION LEFT и RIGHT JOIN.",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "testing",
    name: "Тестирование",
    questions: [
      {
        id: "test-1",
        question: "В чем разница между unit, integration и e2e тестами?",
        answer: "Unit тесты проверяют отдельные компоненты. Integration тесты проверяют взаимодействие компонентов. E2E тесты проверяют весь процесс от начала до конца.",
        difficulty: "medium"
      },
      {
        id: "test-2",
        question: "Что такое TDD и BDD?",
        answer: "TDD (Test-Driven Development) — разработка через тестирование. BDD (Behavior-Driven Development) — разработка через описание поведения.",
        difficulty: "medium"
      },
      {
        id: "test-3",
        question: "Объясните моки и стабы в тестировании",
        answer: "Моки — объекты, имитирующие поведение реальных объектов. Стабы — объекты, возвращающие предопределенные ответы.",
        difficulty: "medium"
      },
      {
        id: "test-4",
        question: "Что такое Jest и как его использовать?",
        answer: "Jest — фреймворк для тестирования JavaScript. Поддерживает моки, снапшоты, асинхронное тестирование и покрытие кода.",
        difficulty: "medium"
      },
      {
        id: "test-5",
        question: "Объясните тестирование асинхронного кода",
        answer: "Асинхронное тестирование использует async/await, done callback или возврат Promise. Важно правильно обрабатывать таймауты и ошибки.",
        difficulty: "hard"
      },
      {
        id: "test-6",
        question: "Что такое CI/CD и как его настроить?",
        answer: "CI (Continuous Integration) — автоматическая сборка и тестирование. CD (Continuous Deployment) — автоматический деплой. Настраивается через GitHub Actions, Jenkins, GitLab CI.",
        difficulty: "medium"
      },
      {
        id: "test-7",
        question: "Объясните тестирование React компонентов",
        answer: "React компоненты тестируются с помощью React Testing Library и Jest. Проверяются рендеринг, события, состояние и пропсы.",
        difficulty: "medium"
      },
      {
        id: "test-8",
        question: "Что такое snapshot тестирование?",
        answer: "Snapshot тестирование сохраняет результат рендеринга компонента и сравнивает его с предыдущими версиями при следующих тестах.",
        difficulty: "medium"
      },
      {
        id: "test-9",
        question: "Объясните тестирование API",
        answer: "API тестирование проверяет эндпоинты, статусы, заголовки, тело ответа. Используются инструменты: Postman, Supertest, Jest.",
        difficulty: "medium"
      },
      {
        id: "test-10",
        question: "Что такое performance тестирование?",
        answer: "Performance тестирование проверяет скорость, отзывчивость, стабильность и масштабируемость приложения под нагрузкой.",
        difficulty: "hard"
      }
    ]
  },
  {
    id: "security",
    name: "Безопасность",
    questions: [
      {
        id: "sec-1",
        question: "Что такое XSS и как его предотвратить?",
        answer: "XSS (Cross-Site Scripting) — внедрение вредоносного кода. Предотвращается через экранирование, CSP, HttpOnly cookies, Content-Type.",
        difficulty: "medium"
      },
      {
        id: "sec-2",
        question: "Объясните CSRF атаки",
        answer: "CSRF (Cross-Site Request Forgery) — выполнение действий от имени пользователя. Предотвращается через CSRF токены, SameSite cookies.",
        difficulty: "medium"
      },
      {
        id: "sec-3",
        question: "Что такое SQL инъекции?",
        answer: "SQL инъекции — внедрение SQL кода через пользовательский ввод. Предотвращается через параметризованные запросы, ORM, валидацию.",
        difficulty: "medium"
      },
      {
        id: "sec-4",
        question: "Объясните OAuth 2.0",
        answer: "OAuth 2.0 — протокол авторизации. Использует токены доступа, refresh токены, разные гранты (authorization code, client credentials).",
        difficulty: "hard"
      },
      {
        id: "sec-5",
        question: "Что такое JWT и как его безопасно использовать?",
        answer: "JWT — токен для передачи данных. Безопасность обеспечивается через подпись, короткое время жизни, хранение в HttpOnly cookies.",
        difficulty: "medium"
      },
      {
        id: "sec-6",
        question: "Объясните HTTPS и SSL/TLS",
        answer: "HTTPS — защищенный HTTP через SSL/TLS. Обеспечивает шифрование, аутентификацию, целостность данных.",
        difficulty: "medium"
      },
      {
        id: "sec-7",
        question: "Что такое CORS и как его настроить?",
        answer: "CORS (Cross-Origin Resource Sharing) — механизм доступа к ресурсам с других доменов. Настраивается через заголовки Access-Control-*.",
        difficulty: "medium"
      },
      {
        id: "sec-8",
        question: "Объясните Content Security Policy",
        answer: "CSP — механизм безопасности, контролирующий ресурсы, которые может загружать страница. Предотвращает XSS, инъекции.",
        difficulty: "hard"
      },
      {
        id: "sec-9",
        question: "Что такое rate limiting?",
        answer: "Rate limiting ограничивает количество запросов от клиента. Защищает от DDoS, брутфорса, злоупотребления API.",
        difficulty: "medium"
      },
      {
        id: "sec-10",
        question: "Объясните безопасное хранение паролей",
        answer: "Пароли хешируются с солью через bcrypt, Argon2. Никогда не хранятся в открытом виде. Используется много итераций.",
        difficulty: "medium"
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
