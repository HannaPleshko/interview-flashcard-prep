
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
