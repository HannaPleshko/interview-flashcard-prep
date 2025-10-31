export interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
}

export type ProgressStatus = "learning" | "review" | "known";

export interface Technology {
  id: string;
  name: string;
  questions: Question[];
}

export const questionsData: Technology[] = [
  // Общее
  {
    id: "candidate_general_questions_answers",
    name: "Общие вопросы о кандидате",
    questions: [
      {
        id: "q-1",
        question: "Расскажите немного о себе и своём профессиональном опыте.",
        answer:
          "<p>Кратко опишите <strong>ключевые этапы</strong> карьеры (X лет опыта), вашу <strong>основную специализацию</strong> и 1-2 самых <strong>значимых проекта</strong> или достижения.</p><br/><p><strong>Важно:</strong> Держите фокус на релевантном опыте.</p>",
        difficulty: "easy",
      },
      {
        id: "q-2",
        question: "Как вы пришли в профессию программиста?",
        answer:
          "<p>Назовите <strong>первый толчок</strong> (самообучение, вуз, курсы) и объясните, что <strong>удержало</strong> вас в этой сфере (любопытство, решение проблем).</p>",
        difficulty: "easy",
      },
      {
        id: "q-3",
        question: "Чем вас привлекает IT-сфера?",
        answer:
          "<p>Укажите на:</p><ul><li><strong>непрерывное развитие</strong></li><li>возможность <strong>решать сложные задачи</strong></li><li><strong>создавать ценность</strong> (продукты, которыми пользуются люди)</li></ul>",
        difficulty: "easy",
      },
      {
        id: "q-4",
        question: "Какие направления в разработке вам наиболее интересны?",
        answer:
          "<p>Назовите 1-2 <strong>конкретных направления</strong> (например, бэкенд на C#, облачные сервисы, оптимизация) и объясните, почему они вас увлекают (например, сложность архитектуры).</p>",
        difficulty: "easy",
      },
      {
        id: "q-5",
        question: "Почему вы решили сменить текущее место работы?",
        answer:
          "<p>Сфокусируйтесь на:</p><ul><li><strong>мотивации к росту</strong></li><li><strong>поиске новых возможностей</strong> (технологии, масштаб, продукт)</li></ul><br/><p><strong>Важно:</strong> Не говорите о негативе (избегайте жалоб).</p>",
        difficulty: "easy",
      },
      {
        id: "q-6",
        question: "Что вам нравилось на прошлой работе, а что хотелось бы изменить?",
        answer:
          "<div><p><strong>Позитив:</strong> Назовите команду, продукт, или автономию.</p><br/><p><strong>Изменить:</strong> Назовите отсутствие роста, устаревшие технологии или желание большего масштаба.</p></div>",
        difficulty: "easy",
      },
      {
        id: "q-7",
        question: "Что для вас важно при выборе новой компании?",
        answer:
          "<p>Выберите <strong>3 ключевых фактора</strong> и кратко их обоснуйте:</p><ul><li>профессиональный рост</li><li>интересные задачи</li><li>сильная команда</li></ul>",
        difficulty: "easy",
      },
      {
        id: "q-8",
        question: "Почему вы откликнулись именно на нашу вакансию?",
        answer:
          "<p>Подчеркните:</p><ul><li><strong>совпадение ваших навыков</strong> с требованиями вакансии</li><li>ваш <strong>интерес к продукту/отрасли</strong> компании</li></ul>",
        difficulty: "easy",
      },
      {
        id: "q-9",
        question: "Какие задачи вам интересны, а какие — наоборот утомляют?",
        answer:
          "<div><p><strong>Интересны:</strong></p><ul><li>Новые вызовы</li><li>оптимизация</li><li>архитектура</li></ul><br/><p><strong>Утомляют (но выполнимы):</strong></p><ul><li>Рутинный легаси-саппорт</li><li>избыточная бюрократия</li></ul><br/><p><em>Смягчите формулировку</em></p></div>",
        difficulty: "easy",
      },
      {
        id: "q-10",
        question: "Как вы видите своё профессиональное развитие через 2–3 года?",
        answer:
          "<p>Опишите желаемую <strong>роль</strong> (Senior/Team Lead/Архитектор) и <strong>конкретные навыки</strong>, которые вы планируете освоить для достижения этой роли.</p>",
        difficulty: "easy",
      },
      {
        id: "q-11",
        question: "Какие новые технологии или навыки хотели бы освоить?",
        answer:
          "<p>Назовите <strong>2-3 актуальные технологии</strong>, связанные с вакансией (например, Kafka, gRPC, новые версии .NET), и поясните их ценность.</p>",
        difficulty: "easy",
      },
      {
        id: "q-12",
        question: "Насколько для вас важно обучение и развитие в компании?",
        answer:
          "<p>Ответьте <strong>«Очень важно»</strong> и приведите пример того, как вы учитесь сами (конференции, сертификаты).</p>",
        difficulty: "easy",
      },
      {
        id: "q-13",
        question: "Есть ли у вас долгосрочные карьерные цели?",
        answer:
          "<p>Подтвердите наличие целей и свяжите их с <strong>ценностью для бизнеса</strong> (например, стать ведущим экспертом, влиять на техническую стратегию).</p>",
        difficulty: "easy",
      },
      {
        id: "q-14",
        question: "В какой команде вам комфортнее работать: маленькой или большой?",
        answer:
          "<p>Ответ должен быть <strong>гибким</strong>: в малой — больше автономии, в большой — больше экспертизы. Выбирайте то, что ближе к вакансии.</p>",
        difficulty: "easy",
      },
      {
        id: "q-15",
        question: "Вы предпочитаете гибкий график или фиксированный?",
        answer:
          "Если компания ищет гибкость, подтвердите, что цените <strong>гибкость</strong> при условии соблюдения <strong>тайм-зоны команды</strong> и дедлайнов.",
        difficulty: "easy",
      },
      {
        id: "q-16",
        question: "Нравится ли вам работать удалённо или предпочтительнее офис?",
        answer:
          "Выберите <strong>предпочтительный для вакансии вариант</strong>, но подчеркните, что главное — это <strong>эффективность и коммуникация</strong>.",
        difficulty: "easy",
      },
      {
        id: "q-17",
        question: "Что для вас важно в командной работе?",
        answer:
          "Назовите <strong>открытую коммуникацию</strong>, <strong>взаимное уважение</strong> и <strong>общее видение цели</strong> (цель важнее личных амбиций).",
        difficulty: "easy",
      },
      {
        id: "q-18",
        question: "Какой менеджмент вам ближе: строгий контроль или больше свободы?",
        answer:
          "Скажите, что цените <strong>доверие и свободу</strong>, но при этом осознаёте необходимость <strong>ответственности</strong> и <strong>прозрачности отчетности</strong>.",
        difficulty: "easy",
      },
      {
        id: "q-19",
        question: "Что вас мотивирует на работе?",
        answer:
          "Назовите <strong>нематериальные</strong> факторы: решение сложных задач, видимый результат, профессиональный рост, а затем добавьте <strong>финансовую компенсацию</strong>.",
        difficulty: "easy",
      },
      {
        id: "q-20",
        question: "Какие факторы делают проект для вас интересным?",
        answer:
          "Укажите на <strong>технологическую сложность</strong>, <strong>новизну</strong> и <strong>влияние на конечного пользователя</strong> (ценность продукта).",
        difficulty: "easy",
      },
      {
        id: "q-21",
        question: "Что для вас важнее: деньги, технологии или команда?",
        answer:
          "Ответьте, что важен <strong>баланс</strong>, но если нужно выбрать, поставьте <strong>команду/технологии</strong> на первое место, так как они обеспечивают долгосрочный рост и удовольствие от работы.",
        difficulty: "easy",
      },
      {
        id: "q-22",
        question: "Какие ценности компании для вас особенно значимы?",
        answer:
          "Изучите ценности компании (например, инновации, клиентоориентированность) и выберите <strong>1-2, которые совпадают</strong> с вашими.",
        difficulty: "easy",
      },
      {
        id: "q-23",
        question: "Как вы обычно решаете конфликтные ситуации в команде?",
        answer:
          "<p>Подчеркните подход <strong>«проблема, а не личность»</strong>.</p><br/><p>Всегда ищите:</p><ul><li><strong>техническое решение</strong></li><li><strong>компромисс</strong> через диалог</li></ul>",
        difficulty: "easy",
      },
      {
        id: "q-24",
        question: "Как вы реагируете на критику?",
        answer:
          "<p>Скажите, что воспринимаете критику как <strong>возможность для роста</strong>; просите:</p><ul><li><strong>конкретные примеры</strong></li><li><strong>предложения по улучшению</strong></li></ul>",
        difficulty: "easy",
      },
      {
        id: "q-25",
        question: "Предпочитаете ли вы больше общаться устно или письменно?",
        answer:
          "<p>Предпочтите:</p><ul><li><strong>письменно для документации</strong> (логи, решения)</li><li><strong>устно для быстрого решения</strong> сложных, срочных вопросов</li></ul>",
        difficulty: "easy",
      },
      {
        id: "q-26",
        question: "Как часто вам комфортно получать обратную связь?",
        answer:
          "Скажите, что цените <strong>регулярную, неформальную</strong> обратную связь (например, после завершения задачи или раз в месяц), а не только раз в полгода.",
        difficulty: "easy",
      },
      {
        id: "q-27",
        question: "Когда вы могли бы выйти на работу?",
        answer:
          "Назовите <strong>реалистичный срок</strong> с учетом отработки на текущем месте (например, «через 2 недели» или «согласно трудовому кодексу»).",
        difficulty: "easy",
      },
      {
        id: "q-28",
        question: "Какие у вас ожидания по зарплате?",
        answer:
          "Назовите <strong>диапазон</strong>, а не фиксированное число, или дайте ответ в формате «Рыночный уровень для моей квалификации, около X».",
        difficulty: "easy",
      },
      {
        id: "q-29",
        question: "Какой формат работы для вас предпочтителен (офис, гибрид, удалёнка)?",
        answer:
          "Назовите <strong>предпочтительный для вас формат</strong>, который при этом <strong>соответствует формату вакансии</strong>.",
        difficulty: "easy",
      },
      {
        id: "q-30",
        question: "Есть ли у вас текущие предложения от других компаний?",
        answer:
          "Отвечайте <strong>честно, но кратко</strong>. Если есть, это подтверждает вашу востребованность. Если нет, сфокусируйтесь на сильном интересе к этой вакансии.",
        difficulty: "easy",
      },
      {
        id: "q-31",
        question: "Насколько вам важны соцпакет, страховка, гибкий график?",
        answer:
          "Подтвердите, что это <strong>важные, но вторичные</strong> факторы; приоритет — интересные задачи и рост.",
        difficulty: "easy",
      },
      {
        id: "q-32",
        question: "Что вы считаете своими сильными сторонами?",
        answer:
          "Назовите <strong>3 профессиональных качества</strong>, подкреплённых <strong>кратким примером</strong> (например, «системное мышление, что помогло при декомпозиции архитектуры»).",
        difficulty: "easy",
      },
      {
        id: "q-33",
        question: "А над чем хотели бы поработать и развить в себе?",
        answer:
          "Назовите <strong>контролируемый недостаток</strong> (например, «иногда слишком глубоко погружаюсь в детали») и <strong>план его исправления</strong> (например, «использую технику Pomodoro»).",
        difficulty: "easy",
      },
      {
        id: "q-34",
        question: "Как вы обычно справляетесь со стрессом и дедлайнами?",
        answer:
          "Опишите <strong>структурный подход</strong>: приоритизация задач, декомпозиция, своевременное оповещение команды о рисках.",
        difficulty: "easy",
      },
      {
        id: "q-35",
        question: "Есть ли у вас хобби или увлечения вне работы?",
        answer:
          "Назовите <strong>хобби</strong>, которое демонстрирует <strong>дополнительные качества</strong> (например, спорт — дисциплина, настолки — командная игра, чтение — саморазвитие).",
        difficulty: "easy",
      },
    ],
  },
  // English
  {
    id: "english_language_assessment_questions_full",
    name: "Questions for English",
    questions: [
      {
        id: "en-1",
        question: "Can you tell me a little bit about yourself?",
        answer:
          "I'm a <strong>Mid-level Software Developer</strong> with <strong>5 years of experience</strong>, primarily focused on <strong>C#/.NET back-end development</strong> for scalable <strong>e-commerce platforms</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-2",
        question: "How would you describe your background in software development?",
        answer:
          "My background is solid: I have a <strong>Master's degree</strong> in CS, and I've spent the last few years specializing in <strong>cloud-native solutions</strong> using <strong>Azure and Kubernetes</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-3",
        question: "What motivated you to become a programmer?",
        answer:
          "I've always been motivated by <strong>problem-solving</strong> and the process of <strong>building things</strong>. It's satisfying to take a complex idea and turn it into <strong>working, efficient code</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-4",
        question: "How long have you been working in IT?",
        answer:
          "I've been working professionally in the IT industry for <strong>six years</strong>, focusing exclusively on development roles in the last five.",
        difficulty: "easy",
      },
      {
        id: "en-5",
        question: "Could you walk me through your career path so far?",
        answer:
          "I started as a <strong>Junior Developer</strong> focused on testing and maintenance. I then moved to my current role, where I became the <strong>lead developer</strong> for a specific <strong>microservice</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-6",
        question: "Why are you looking for a new job right now?",
        answer:
          "I'm seeking a role with <strong>greater technical challenges</strong> and a <strong>larger scope</strong> for architectural decisions, which this position seems to offer.",
        difficulty: "easy",
      },
      {
        id: "en-7",
        question: "What do you like the most about your current position?",
        answer:
          "I truly enjoy the <strong>team collaboration</strong>; we have a very strong culture of <strong>code review</strong> and mutual support.",
        difficulty: "easy",
      },
      {
        id: "en-8",
        question: "What do you find challenging or frustrating in your current job?",
        answer:
          "The main challenge is the <strong>lack of budget for technology upgrades</strong>. I'm eager to work with more <strong>modern stacks</strong> to improve <strong>scalability</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-9",
        question: "Why did you decide to leave your last company?",
        answer:
          "I was ready for a <strong>new level of complexity</strong> and a chance to work with <strong>distributed systems</strong>, which wasn't available there.",
        difficulty: "easy",
      },
      {
        id: "en-10",
        question: "What are you looking for in your next role?",
        answer:
          "I'm looking for a role where I can <strong>drive technical excellence</strong>, contribute to a <strong>large-scale product</strong>, and <strong>mentor junior developers</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-11",
        question: "Why are you interested in our company?",
        answer:
          "I am very impressed by your work on <strong>[Product Name]</strong> and your focus on <strong>[Specific Technology Mentioned in Vacancy]</strong>. It aligns perfectly with my specialization.",
        difficulty: "easy",
      },
      {
        id: "en-12",
        question: "What attracted you to this position?",
        answer:
          "The opportunity to lead development on the <strong>payment gateway service</strong> is highly appealing, as it's an area where I have extensive experience in <strong>optimizing latency</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-13",
        question: "What do you know about our company?",
        answer:
          "I know you are a <strong>market leader</strong> in <strong>FinTech solutions</strong>, and you recently expanded your focus into <strong>AI-driven personalization</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-14",
        question: "How do you think you could contribute to our team?",
        answer:
          "I can immediately contribute my expertise in <strong>back-end performance tuning</strong> and help implement better <strong>CI/CD pipelines</strong> using my experience with <strong>GitHub Actions</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-15",
        question: "What expectations do you have from this role?",
        answer:
          "I expect to be given <strong>autonomy</strong> to solve technical problems, clear <strong>feedback</strong>, and opportunities for <strong>continuous technical training</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-16",
        question: "Where do you see yourself in two or three years?",
        answer:
          "I see myself as a <strong>Senior Developer</strong> or <strong>Tech Lead</strong> here, capable of influencing the <strong>architectural direction</strong> of a major product line.",
        difficulty: "easy",
      },
      {
        id: "en-17",
        question: "What skills or technologies would you like to improve?",
        answer:
          "I definitely want to deepen my skills in <strong>Go language</strong> for high-performance computing, and improve my knowledge of <strong>event sourcing patterns</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-18",
        question: "Do you prefer to grow as a specialist or move into management in the future?",
        answer:
          "My primary focus is on <strong>technical mastery</strong> right now. I want to become a <strong>Staff Engineer</strong> before considering a management track.",
        difficulty: "easy",
      },
      {
        id: "en-19",
        question: "How do you usually keep your skills up to date?",
        answer:
          "I follow key figures in the <strong>.NET community</strong>, attend the <strong>DevOps conference</strong> annually, and dedicate time to <strong>side projects</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-20",
        question: "Have you taken any courses or certifications recently?",
        answer:
          "Yes, I recently completed the <strong>AWS Certified Solutions Architect</strong> course, which gave me new insights into <strong>cost optimization</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-21",
        question: "Do you prefer working alone or in a team? Why?",
        answer:
          "I am most effective <strong>collaborating in a team</strong>, especially during <strong>design and code review</strong>. But I need focused <strong>solo time for coding</strong> and deep work.",
        difficulty: "easy",
      },
      {
        id: "en-22",
        question: "How do you usually organize your workday?",
        answer:
          "I start with <strong>prioritizing tasks</strong> in the morning. I allocate specific blocks for <strong>deep work</strong> (no meetings) and check communication channels later in the day.",
        difficulty: "easy",
      },
      {
        id: "en-23",
        question: "How do you handle working under tight deadlines?",
        answer:
          "I immediately <strong>break the task down</strong> into smaller, <strong>deliverable chunks</strong>, communicate the <strong>minimum viable product (MVP)</strong> scope, and inform the manager if the deadline is unrealistic.",
        difficulty: "easy",
      },
      {
        id: "en-24",
        question: "How do you usually deal with conflicts in a team?",
        answer:
          "I focus on the <strong>technical issue, not the personality</strong>. I try to <strong>mediate</strong> by asking for <strong>data or best practices</strong> to support the solution.",
        difficulty: "easy",
      },
      {
        id: "en-25",
        question: "What do you value the most in teamwork?",
        answer:
          "I value <strong>transparency</strong> and <strong>psychological safety</strong>. It's crucial that everyone feels comfortable pointing out errors without fear of criticism.",
        difficulty: "easy",
      },
      {
        id: "en-26",
        question: "How do you usually handle feedback from your manager?",
        answer:
          "I always <strong>welcome constructive criticism</strong> as a tool for growth. I usually <strong>ask clarifying questions</strong> and then create an <strong>action plan</strong> to address the feedback points.",
        difficulty: "easy",
      },
      {
        id: "en-27",
        question:
          "Can you describe a situation when you had to explain a technical topic to a non-technical person?",
        answer:
          "I once had to explain <strong>database sharding</strong> to the marketing team. I used the analogy of <strong>different warehouses</strong> for different geographical regions to keep it simple.",
        difficulty: "easy",
      },
      {
        id: "en-28",
        question: "Do you feel comfortable communicating in English during daily stand-ups?",
        answer:
          "Yes, absolutely. I’ve used English daily for the past three years for <strong>meetings, documentation, and chat communication</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-29",
        question: "Have you ever worked with international teams before?",
        answer:
          "Yes, in my last company, I worked closely with colleagues in <strong>Germany and India</strong>. It taught me the importance of <strong>clear written communication</strong> and being mindful of <strong>time zones</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-30",
        question: "How do you usually collaborate with remote colleagues?",
        answer:
          "We rely heavily on <strong>Slack for asynchronous updates</strong>, use <strong>Zoom for screen-sharing</strong>, and ensure all key decisions are <strong>documented in Confluence</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-31",
        question: "When would you be available to start?",
        answer:
          "I have a <strong>two-week notice period</strong> with my current employer, so I could start approximately <strong>October 15th</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-32",
        question: "What is your salary expectation?",
        answer:
          "Based on my experience and the industry average for this role in <strong>[City/Region]</strong>, I am looking for a range between <strong>X and Y</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-33",
        question: "Are you open to relocation?",
        answer:
          "I am open to the possibility, but I would primarily prefer a <strong>fully remote or hybrid</strong> arrangement, as noted in my application.",
        difficulty: "easy",
      },
      {
        id: "en-34",
        question: "Do you prefer remote work or office work?",
        answer:
          "I prefer a <strong>hybrid model</strong>—I value the <strong>focus of remote work</strong> but also the spontaneous collaboration you get in the office once or twice a week.",
        difficulty: "easy",
      },
      {
        id: "en-35",
        question: "What do you usually do in your free time?",
        answer:
          "I like to <strong>hike</strong> on weekends to disconnect, and I'm currently learning to play the <strong>electric guitar</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-36",
        question: "Do you have any hobbies?",
        answer:
          "Yes, my main hobby is <strong>competitive cycling</strong>; it helps me maintain discipline and focus.",
        difficulty: "easy",
      },
      {
        id: "en-37",
        question: "What kind of books or blogs do you like to read?",
        answer:
          "I primarily follow blogs on <strong>software architecture</strong> (like Martin Fowler) and enjoy reading classic <strong>sci-fi novels</strong> for relaxation.",
        difficulty: "easy",
      },
      {
        id: "en-38",
        question: "How was your weekend?",
        answer:
          "It was great, thank you. I spent Saturday <strong>refactoring some old code</strong> for my personal project, and Sunday was just for family and relaxation.",
        difficulty: "easy",
      },
      {
        id: "en-39",
        question: "What do you usually do after work to relax?",
        answer:
          "I usually go to the gym or spend time reading. It helps me <strong>switch my brain off</strong> from complex tasks.",
        difficulty: "easy",
      },
      {
        id: "en-40",
        question: "Have you traveled recently?",
        answer:
          "Yes, I took a short trip to <strong>Prague</strong> last month. I really enjoyed exploring the historical architecture there.",
        difficulty: "easy",
      },
      {
        id: "en-41",
        question: "Do you like working from home?",
        answer:
          "I do like the <strong>flexibility</strong> and the lack of commute, but I make an effort to <strong>socialize with my team</strong> regularly to avoid isolation.",
        difficulty: "easy",
      },
      {
        id: "en-42",
        question: "What’s your favorite way to learn new things?",
        answer:
          "I prefer <strong>hands-on learning</strong>. I usually start with a new technology by building a <strong>small proof-of-concept application</strong>.",
        difficulty: "easy",
      },
      {
        id: "en-43",
        question: "Do you follow any tech podcasts or YouTube channels?",
        answer:
          "Yes, I regularly listen to <strong>The Changelog</strong> podcast and follow <strong>Fireship</strong> on YouTube for quick updates on new frameworks.",
        difficulty: "easy",
      },
      {
        id: "en-44",
        question: "Can you tell me about the last movie or TV show you watched?",
        answer:
          "I recently watched the series <strong>'Severance'</strong>. I found the blend of <strong>technology and human psychology</strong> fascinating.",
        difficulty: "easy",
      },
    ],
  },
  // html
  {
    id: "html",
    name: "HTML",
    questions: [
      {
        id: "html-1",
        question: "Что такое HTML5?",
        answer:
          "HTML5 — это последняя версия языка разметки гипертекста, используемая для создания веб-страниц и приложений.<br/>Основные особенности:<br/>• Новые семантические элементы (header, footer, nav, article)<br/>• Поддержка мультимедиа без плагинов (audio, video)<br/>• Canvas и SVG для графики<br/>• Улучшенные формы с новыми типами input<br/>• LocalStorage и SessionStorage для хранения данных<br/>• Геолокация и другие API",
        difficulty: "easy",
      },
      {
        id: "html-2",
        question: "Какова базовая структура HTML документа?",
        answer:
          'Базовая структура HTML документа включает:<br/>• &lt;!DOCTYPE html&gt; — объявление типа документа<br/>• &lt;html&gt; — корневой элемент<br/>• &lt;head&gt; — метаданные документа (title, meta, link)<br/>• &lt;body&gt; — видимое содержимое страницы<br/><br/>Пример:<br/>&lt;!DOCTYPE html&gt;<br/>&lt;html lang="ru"&gt;<br/>&nbsp;&nbsp;&lt;head&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Заголовок&lt;/title&gt;<br/>&nbsp;&nbsp;&lt;/head&gt;<br/>&nbsp;&nbsp;&lt;body&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Контент --&gt;<br/>&nbsp;&nbsp;&lt;/body&gt;<br/>&lt;/html&gt;',
        difficulty: "easy",
      },
      {
        id: "html-3",
        question: "Для чего используется DOCTYPE?",
        answer:
          "DOCTYPE — это инструкция браузеру о версии HTML, в которой написан документ.<br/>• Определяет режим рендеринга (стандартный или совместимости)<br/>• В HTML5 используется простая форма: &lt;!DOCTYPE html&gt;<br/>• Должен быть первой строкой в документе<br/>• Без DOCTYPE браузер может перейти в режим совместимости (quirks mode)",
        difficulty: "easy",
      },
      {
        id: "html-4",
        question: "В чём разница между тегами <head> и <body>?",
        answer:
          "&lt;head&gt; содержит метаинформацию:<br/>• Заголовок страницы (title)<br/>• Мета-теги (charset, viewport, description)<br/>• Подключение CSS и JavaScript<br/>• Не отображается на странице<br/><br/>&lt;body&gt; содержит видимый контент:<br/>• Текст, изображения, видео<br/>• Все элементы интерфейса<br/>• Отображается пользователю",
        difficulty: "easy",
      },
      {
        id: "html-5",
        question: "Какие важные мета-теги существуют?",
        answer:
          'Основные мета-теги:<br/>• &lt;meta charset="UTF-8"&gt; — кодировка<br/>• &lt;meta name="viewport" content="width=device-width"&gt; — адаптивность<br/>• &lt;meta name="description" content="..."&gt; — описание для SEO<br/>• &lt;meta name="keywords" content="..."&gt; — ключевые слова (устарел)<br/>• &lt;meta name="author" content="..."&gt; — автор<br/>• &lt;meta property="og:title"&gt; — Open Graph для соцсетей',
        difficulty: "easy",
      },
      {
        id: "html-6",
        question: "Как подключить CSS к HTML?",
        answer:
          'Три способа подключения CSS:<br/><br/>1. Внешний файл (рекомендуется):<br/>&lt;link rel="stylesheet" href="style.css"&gt;<br/><br/>2. Внутренние стили:<br/>&lt;style&gt;<br/>&nbsp;&nbsp;p { color: red; }<br/>&lt;/style&gt;<br/><br/>3. Inline стили:<br/>&lt;p style="color: red;"&gt;Текст&lt;/p&gt;',
        difficulty: "easy",
      },
      {
        id: "html-7",
        question: "Как подключить JavaScript к HTML?",
        answer:
          "Способы подключения JavaScript:<br/><br/>1. Внешний файл:<br/>&lt;script src=\"script.js\"&gt;&lt;/script&gt;<br/><br/>2. Встроенный скрипт:<br/>&lt;script&gt;<br/>&nbsp;&nbsp;console.log('Hello');<br/>&lt;/script&gt;<br/><br/>Рекомендации:<br/>• Размещать перед &lt;/body&gt; для быстрой загрузки<br/>• Или использовать атрибуты defer/async в &lt;head&gt;",
        difficulty: "easy",
      },
      {
        id: "html-8",
        question: "Как добавить комментарий в HTML?",
        answer:
          "HTML комментарии:<br/>&lt;!-- Это комментарий --&gt;<br/><br/>Особенности:<br/>• Не отображаются на странице<br/>• Видны в исходном коде<br/>• Используются для пояснений и временного отключения кода<br/>• Могут быть многострочными",
        difficulty: "easy",
      },
      {
        id: "html-9",
        question: "Для чего нужен атрибут lang?",
        answer:
          'Атрибут lang указывает язык содержимого страницы:<br/>&lt;html lang="ru"&gt;<br/><br/>Преимущества:<br/>• Помогает поисковым системам<br/>• Улучшает доступность (screen readers)<br/>• Браузер может предложить перевод<br/>• Правильная расстановка переносов<br/><br/>Примеры: ru, en, en-US, ru-RU',
        difficulty: "easy",
      },
      {
        id: "html-10",
        question: "Что такое data-атрибуты?",
        answer:
          'Data-атрибуты позволяют хранить пользовательские данные в HTML элементах:<br/>&lt;div data-user-id="123" data-role="admin"&gt;&lt;/div&gt;<br/><br/>Доступ через JavaScript:<br/>element.dataset.userId // "123"<br/>element.dataset.role // "admin"<br/><br/>Преимущества:<br/>• Валидный HTML<br/>• Легкий доступ через dataset API<br/>• Не влияют на отображение',
        difficulty: "easy",
      },
      {
        id: "html-11",
        question: "В чём разница между <b> и <strong>?",
        answer:
          "&lt;b&gt; — визуальное выделение жирным:<br/>• Только стилистическое значение<br/>• Не имеет семантического смысла<br/><br/>&lt;strong&gt; — семантическое выделение важности:<br/>• Указывает на важность текста<br/>• Лучше для SEO и доступности<br/>• Screen readers выделяют интонацией<br/><br/>Рекомендуется использовать &lt;strong&gt;",
        difficulty: "easy",
      },
      {
        id: "html-12",
        question: "В чём разница между <em> и <i>?",
        answer:
          "&lt;em&gt; — семантический акцент:<br/>• Подчеркивает смысловое ударение<br/>• Читается с изменением интонации<br/>• Пример: Это &lt;em&gt;очень&lt;/em&gt; важно<br/><br/>&lt;i&gt; — визуальный курсив:<br/>• Только стилистическое оформление<br/>• Используется для терминов, названий<br/>• Пример: &lt;i&gt;Lorem ipsum&lt;/i&gt;<br/><br/>Предпочтительнее использовать &lt;em&gt;",
        difficulty: "easy",
      },
      {
        id: "html-13",
        question: "Что делают теги <small>, <s> и <mark>?",
        answer:
          "&lt;small&gt; — мелкий шрифт:<br/>• Для менее важного текста<br/>• Сноски, копирайты, дисклеймеры<br/><br/>&lt;s&gt; — зачеркнутый текст:<br/>• Неактуальная информация<br/>• Старые цены<br/><br/>&lt;mark&gt; — выделение маркером:<br/>• Подсветка важного текста<br/>• Результаты поиска<br/>• Визуально как желтый маркер",
        difficulty: "easy",
      },
      {
        id: "html-14",
        question: "Что такое семантический HTML?",
        answer:
          "Семантический HTML использует теги по их смысловому назначению.<br/><br/>Семантические теги:<br/>• &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;<br/>• &lt;main&gt;, &lt;article&gt;, &lt;section&gt;<br/>• &lt;aside&gt;, &lt;figure&gt;, &lt;figcaption&gt;<br/><br/>Преимущества:<br/>• Улучшает SEO<br/>• Повышает доступность<br/>• Упрощает поддержку кода<br/>• Помогает поисковым роботам",
        difficulty: "easy",
      },
      {
        id: "html-15",
        question: "Как создать параграфы и переносы строк?",
        answer:
          "Параграф — тег &lt;p&gt;:<br/>&lt;p&gt;Это параграф текста&lt;/p&gt;<br/>• Автоматические отступы сверху/снизу<br/>• Блочный элемент<br/><br/>Перенос строки — тег &lt;br&gt;:<br/>Первая строка&lt;br&gt;Вторая строка<br/>• Одиночный тег без закрывающего<br/>• Принудительный перенос<br/>• Не создает отступов",
        difficulty: "easy",
      },
      {
        id: "html-16",
        question: "Какие новые типы input появились в HTML5?",
        answer:
          "Новые типы input в HTML5:<br/>• email — проверка email<br/>• url — проверка URL<br/>• tel — телефонные номера<br/>• number — числовые значения<br/>• range — ползунок<br/>• date — выбор даты<br/>• time — выбор времени<br/>• color — палитра цветов<br/>• search — поисковое поле<br/><br/>Преимущества: встроенная валидация и мобильные клавиатуры",
        difficulty: "medium",
      },
      {
        id: "html-17",
        question: "Как работает элемент <canvas>?",
        answer:
          '&lt;canvas&gt; — область для рисования графики через JavaScript.<br/><br/>Создание:<br/>&lt;canvas id="myCanvas" width="200" height="100"&gt;&lt;/canvas&gt;<br/><br/>Использование:<br/>const ctx = canvas.getContext(\'2d\');<br/>ctx.fillRect(0, 0, 150, 75);<br/><br/>Применение:<br/>• Графики и диаграммы<br/>• Игры<br/>• Обработка изображений<br/>• Анимации',
        difficulty: "medium",
      },
      {
        id: "html-18",
        question:
          "Обязателен ли атрибут alt для элементов изображений? Если нет, то опишите варианты, когда можно оставить значение пустым. Пустое значение может повлиять на доступность?",
        answer:
          'Атрибут alt обязателен для изображений, но его значение может быть пустым (к примеру — alt=""). Пустое значение допустимо, когда изображение используется только в декоративных целях и не является содержимым. Таким образом, программы для озвучивания содержимого на экране будут игнорировать такие изображения. Использовать alt настоятельно рекомендуется, по назначению, без значений вроде "разделитель блоков".',
        difficulty: "medium",
      },
      {
        id: "html-19",
        question: "Как использовать аудио и видео в HTML5?",
        answer:
          'Элемент &lt;audio&gt;:<br/>&lt;audio controls&gt;<br/>&nbsp;&nbsp;&lt;source src="audio.mp3" type="audio/mpeg"&gt;<br/>&lt;/audio&gt;<br/><br/>Элемент &lt;video&gt;:<br/>&lt;video controls width="320" poster="preview.jpg"&gt;<br/>&nbsp;&nbsp;&lt;source src="video.mp4" type="video/mp4"&gt;<br/>&lt;/video&gt;<br/><br/>Атрибуты:<br/>• controls — панель управления<br/>• autoplay — автовоспроизведение<br/>• loop — зацикливание<br/>• muted — без звука',
        difficulty: "easy",
      },
      {
        id: "html-20",
        question: "Что такое SVG и как его использовать?",
        answer:
          'SVG — масштабируемая векторная графика.<br/><br/>Способы использования:<br/>1. Встроенный SVG:<br/>&lt;svg&gt;&lt;circle cx="50" cy="50" r="40"/&gt;&lt;/svg&gt;<br/><br/>2. Через img:<br/>&lt;img src="icon.svg"&gt;<br/><br/>3. В CSS:<br/>background-image: url(\'icon.svg\');<br/><br/>Преимущества:<br/>• Масштабируется без потери качества<br/>• Малый размер файлов<br/>• Можно стилизовать через CSS',
        difficulty: "medium",
      },
      {
        id: "html-21",
        question: "Опишите разницу между script, script async и script defer",
        answer:
          "script — браузер начнет загружать файл JS, как только встретит строку с его вызовом, при этом загрузка браузером оставшейся части HTML страницы, продолжится после того, как будет выполнен js скрипт. <br/><br/> script-async — браузер не остановит обработку HTML страницы, а будет читать ее дальше. После того как скрипт загрузится — он выполнится, не дожидаясь загрузки всей HTML страницы. Если скриптов несколько — первым отработает тот, который быстрее загрузится. <br/><br/> При использовании script-defer — также будет асинхронное выполнение скрипта, но в отличие от script-async — первым сработает тот скрипт, который встретился раньше. Еще одно отличие от async — это то, что script-defer сработает, когда вся страница HTML будет обработана браузером.",
        difficulty: "medium",
      },
      {
        id: "html-22",
        question:
          "Почему, как правило, лучше размещать подключение CSS внутри элемента head, а JS скриптов , перед закрывающимся тегом body? Знаете ли вы какие-либо исключения, приведите примеры ?",
        answer:
          "Стили рекомендуется подключать в head для того, чтобы страница как можно быстрее приняла свой внешний вид. Скрипты подключенные в head могут затормозить этот процесс, в связи с этим их рекомендуется подключать перед закрывающим тегом body. Исключением являются скрипты аналитики, для определения количества посетителей, которые не дождались загрузки страницы. В этом случае скрипт должен быть подключен в head",
        difficulty: "easy",
      },
      {
        id: "html-23",
        question: "Опишите разницу между cookies, sessionstorage и localstorage.",
        answer:
          "sessionstorage — хранит информацию в браузере, пока не закрыта вкладка, после ее закрытия — информация удаляется. localstorage — хранит информацию в браузере даже после того, как вкладка закрыта, не имеет срока жизни. cookies — хранят информацию, имеют срок жизни (expires), отправляются на сервер с запросом.",
        difficulty: "easy",
      },
      {
        id: "html-24",
        question: "Что такое Progressive Web Apps (PWA)?",
        answer:
          "PWA — веб-приложения с нативными возможностями.<br/><br/>Ключевые компоненты:<br/>• Service Workers — офлайн работа<br/>• Web App Manifest — установка на устройство<br/>• HTTPS — обязательная защита<br/><br/>Возможности:<br/>• Работа офлайн<br/>• Push-уведомления<br/>• Установка как приложение<br/>• Доступ к устройству (камера, геолокация)",
        difficulty: "hard",
      },
      {
        id: "html-25",
        question: "Как работает drag and drop в HTML5?",
        answer:
          'Атрибуты и события Drag & Drop:<br/><br/>Атрибуты:<br/>• draggable="true" — делает элемент перетаскиваемым<br/><br/>События перетаскиваемого элемента:<br/>• dragstart — начало перетаскивания<br/>• drag — процесс перетаскивания<br/>• dragend — конец перетаскивания<br/><br/>События целевого элемента:<br/>• dragenter, dragover — наведение<br/>• drop — отпускание<br/>• dragleave — уход с элемента',
        difficulty: "medium",
      },
      {
        id: "html-26",
        question: "Что такое Content Security Policy (CSP)?",
        answer:
          'CSP — политика безопасности контента, защищающая от XSS атак.<br/><br/>Настройка через мета-тег:<br/>&lt;meta http-equiv="Content-Security-Policy" content="default-src \'self\'"&gt;<br/><br/>Директивы:<br/>• default-src — источники по умолчанию<br/>• script-src — источники скриптов<br/>• style-src — источники стилей<br/>• img-src — источники изображений<br/><br/>Защищает от внедрения вредоносного кода',
        difficulty: "hard",
      },
      {
        id: "html-27",
        question: "Как оптимизировать загрузку изображений?",
        answer:
          'Методы оптимизации изображений:<br/><br/>1. Атрибут loading="lazy":<br/>&lt;img src="image.jpg" loading="lazy"&gt;<br/><br/>2. Элемент &lt;picture&gt; для адаптивности:<br/>&lt;picture&gt;<br/>&nbsp;&nbsp;&lt;source media="(max-width: 600px)" srcset="small.jpg"&gt;<br/>&nbsp;&nbsp;&lt;img src="large.jpg"&gt;<br/>&lt;/picture&gt;<br/><br/>3. Форматы нового поколения: WebP, AVIF<br/>4. Атрибут srcset для разных разрешений<br/>5. Правильные размеры через width/height',
        difficulty: "medium",
      },
      {
        id: "html-28",
        question: "Что такое Shadow DOM?",
        answer:
          "Shadow DOM — инкапсулированный DOM и стили компонента.<br/><br/>Особенности:<br/>• Изоляция стилей и скриптов<br/>• Скрытая внутренняя структура<br/>• Используется в Web Components<br/><br/>Создание:<br/>const shadow = element.attachShadow({mode: 'open'});<br/>shadow.innerHTML = '&lt;style&gt;...&lt;/style&gt;&lt;div&gt;...&lt;/div&gt;';<br/><br/>Применение: создание переиспользуемых компонентов",
        difficulty: "hard",
      },
      {
        id: "html-29",
        question: "Что такое валидный HTML и почему это важно?",
        answer:
          "Валидный HTML означает, что код HTML-страницы написан в соответствии с принятой структурой, правильным использование тегов и атрибутов и не содержит ошибок. Валидный HTML имеет большое значение для SEO-оптимизации и удобства создания и поддержки веб-страниц.",
        difficulty: "easy",
      },
      {
        id: "html-30",
        question: "Что такое ARIA атрибуты?",
        answer:
          'ARIA (Accessible Rich Internet Applications) — атрибуты для улучшения доступности.<br/><br/>Основные атрибуты:<br/>• aria-label — текстовая метка<br/>• aria-hidden — скрыть от screen readers<br/>• aria-live — объявление изменений<br/>• aria-describedby — дополнительное описание<br/>• role — роль элемента<br/><br/>Пример:<br/>&lt;button aria-label="Закрыть" aria-pressed="false"&gt;X&lt;/button&gt;',
        difficulty: "medium",
      },
      {
        id: "html-31",
        question:
          'Можно ли использовать более одного атрибута "class" для одного элемента, и если да, то как это делается?',
        answer:
          'НЕЛЬЗЯ использовать несколько атрибутов class для одного элемента. Но можно использовать более одного атрибуте "class" для одного элемента. Для этого нужно добавить еще один класс через пробел. Например: <div class="class1 class2">.',
        difficulty: "easy",
      },
      {
        id: "html-32",
        question:
          "Можно ли использовать более одного тега MAIN на странице и что будет происходить с их содержимым?",
        answer:
          "Нет, использовать более одного тега MAIN на странице нельзя согласно спецификации HTML5, и хотя все содержимое внутри дополнительных тегов MAIN будет визуально отображаться в браузере, это приведет к серьезным проблемам: нарушению семантической структуры документа, ошибкам валидации HTML, ухудшению доступности для скринридеров и потенциальным проблемам с SEO, поскольку вспомогательные технологии не смогут правильно определить основное содержание страницы.",
        difficulty: "easy",
      },
      {
        id: "html-33",
        question: "Что такое семантические теги и зачем они нужны?",
        answer:
          "Семантические теги - это теги, которые используются для определения содержимого веб-страницы по его значениям, а не для форматирования внешнего вида. Они помогают поисковым системам и другим программам лучше понимать содержимое страницы, что повышает ее доступность и SEO-оптимизацию. Примеры: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>.",
        difficulty: "easy",
      },
    ],
  },
  // css
  {
    id: "css",
    name: "CSS",
    questions: [
      {
        id: "css-1",
        question: "Что такое CSS?",
        answer:
          "<strong>CSS</strong> — это язык, который определяет, как элементы веб-страницы будут выглядеть, отвечая за их стиль, форматирование, цвета и расположение. Он используется для оформления документов, написанных на языках разметки, таких как HTML и XML, позволяя разделить структуру документа от его представления и сделать сайт визуально привлекательным и удобным для пользователя.",
        difficulty: "easy",
      },
      {
        id: "css-2",
        question:
          "Что такое БЭМ (Block-Element-Modifier) методология и какие преимущества она предоставляет?",
        answer: `
        <strong>БЭМ</strong> (Block-Element-Modifier) - методология именования CSS-классов для создания масштабируемой и поддерживаемой архитектуры.<br><br>

<strong>Решаемые проблемы:</strong><br>
• Конфликты имён классов в больших проектах<br>
• Низкая читаемость и понятность кода<br>
• Сложность рефакторинга и поддержки<br>
• Проблемы с каскадностью и специфичностью<br>
• Трудности командной разработки`,
        difficulty: "easy",
      },
      {
        id: "css-3",
        question: "Какие три основные сущности в методологии БЭМ?",
        answer: `
        <strong>БЭМ</strong> (Block-Element-Modifier) - методология именования CSS-классов для создания масштабируемой и поддерживаемой архитектуры.<br><br>

<strong>Решаемые проблемы:</strong><br>
• Конфликты имён классов в больших проектах<br>
• Низкая читаемость и понятность кода<br>
• Сложность рефакторинга и поддержки<br>
• Проблемы с каскадностью и специфичностью<br>
• Трудности командной разработки`,
        difficulty: "easy",
      },
      {
        id: "css-4",
        question: "Что такое CSS-селекторы и какие основные типы селекторов существуют?",
        answer:
          "<strong>CSS селекторы</strong> — это инструменты для выбора HTML-элементов и их стилизации. Они позволяют применять стили к конкретным элементам на основе их тегов, классов, идентификаторов и других характеристик.<br/><br/>Основные селекторы:<br/>1. Селектор по тегу <br/>2.Селектор по классу <br/>3. Селектор по ID <br/> 4. Универсальный селектор <br/> 5. Селектор по атрибуту",
        difficulty: "easy",
      },
      {
        id: "css-5",
        question:
          "Что такое 'селекторы атрибутов' (attribute selectors) и как они используются для выбора элементов по атрибутам?",
        answer:
          "[attribute] - элементы с атрибутом: a[target]<br/>[attribute=value] - с конкретным значением: a[target='_blank']<br/>[attribute^=value] - начинается с: img[src^='icon_']<br/>[attribute$=value] - заканчивается на<br/>[attribute*=value] - содержит.<br/>Полезны для стилизации по состоянию или типу.",
        difficulty: "easy",
      },
      {
        id: "css-6",
        question:
          "Что такое 'вложенные селекторы' (nested selectors) в CSS и как они используются?",
        answer:
          "Описание иерархии элементов для лучшей организации кода (в препроцессорах).<br/>Пример в Sass: .nav { ul { li { ... } } }<br/>Преимущества: читаемость, локальная область видимости, уменьшение повторений.<br/>Важно: избегать слишком глубокой вложенности (более 3-4 уровней).",
        difficulty: "easy",
      },
      {
        id: "css-7",
        question: "Что такое каскад в CSS и почему он важен?",
        answer: `<strong>Каскад</strong> - это механизм в CSS, который определяет, какие стили будут применены к элементу при наличии конфликтующих правил.<br><br>

<strong>CSS</strong> = Cascading Style Sheets (Каскадные таблицы стилей)<br><br>

<strong>Основная идея каскада:</strong><br>
• Стили "накладываются" друг на друга по определенным правилам<br>
• Браузер вычисляет финальные значения свойств для каждого элемента<br>
• Позволяет комбинировать стили из разных источников<br>
• Обеспечает предсказуемость и контролируемость стилизации`,
        difficulty: "easy",
      },
      {
        id: "css-8",
        question: "Какие факторы влияют на приоритетность стилей в каскаде?",
        answer: `<strong>1. Важность (!important)</strong><br>
• Наивысший приоритет<br>
• Переопределяет все другие правила<br>
• Использовать с осторожностью<br><br>

<strong>2. Источник стилей (по убыванию приоритета):</strong><br>
• Стили автора с !important<br>
• Стили пользователя с !important<br>
• Стили автора (обычные)<br>
• Стили пользователя (обычные)<br>
• Стили браузера (user-agent)<br><br>

<strong>3. Специфичность селектора</strong><br>
• ID селекторы: 100 очков<br>
• Классы, атрибуты: 10 очков<br>
• Элементы: 1 очко<br><br>

<strong>4. Порядок в коде</strong><br>
• При равных условиях побеждает последнее правило`,
        difficulty: "easy",
      },
      {
        id: "css-9",
        question: "Что такое специфичность селектора в CSS",
        answer: `
Специфичность селектора в CSS определяет, какой стиль будет применён, если несколько селекторов подходят к одному элементу. Чем выше специфичность, тем выше приоритет у стиля.<br><br>

Основой для расчёта специфичности служат три категории селекторов:<br>
• Идентификаторы (ID) - 100 очков за каждый<br>
• Классы, атрибуты и псевдоклассы - 10 очков за каждый<br>
• Элементы и псевдоэлементы - 1 очко за каждый<br><br>

Однако в полной иерархии приоритетов CSS существуют два дополнительных уровня, которые не входят в стандартный подсчёт:<br>
1. !important - переопределяет все обычные стили<br>
2. Inline-стили (атрибут style) - имеют приоритет над внешними CSS-правилами<br><br>

<strong>Примеры расчёта специфичности:</strong><br>
• #header .nav-item - 1 ID + 1 класс = 110 очков<br>
• div.container a:hover - 2 элемента + 2 класса = 22 очка<br>
• button.active - 1 элемент + 1 класс = 11 очков
`,
        difficulty: "easy",
      },
      {
        id: "css-10",
        question: "За что отвечает свойство display в CSS и какие есть основные значения?",
        answer: `<strong>Свойство display в CSS</strong><br>
Свойство display управляет тем, как элемент отображается на странице и взаимодействует с другими элементами.<br><br>

<strong>Основные значения display:</strong><br><br>

<strong>block</strong><br>
• Занимает всю доступную ширину<br>
• Начинается с новой строки<br>
• Можно задавать ширину, высоту, отступы<br>
• Примеры: div, section, header, p<br><br>

<strong>inline</strong><br>
• Располагается в строке с другими элементами<br>
• Ширина и высота определяются содержимым<br>
• Нельзя задавать ширину, высоту, вертикальные отступы<br>
• Примеры: span, a, strong, em<br><br>

<strong>inline-block</strong><br>
• Располагается в строке как inline-элемент<br>
• Но можно задавать ширину, высоту и отступы как у block<br>
• Идеален для кнопок, иконок, элементов навигации<br><br>

<strong>none</strong><br>
• Полностью скрывает элемент<br>
• Элемент не занимает место в потоке документа<br>
• Не отображается визуально и для скринридеров<br><br>

<strong>flex</strong><br>
• Создает flex-контейнер для одномерных макетов<br>
• Гибкое распределение пространства между элементами<br>
• Простое выравнивание по осям<br>
• Идеален для компонентов, навигации, карточек<br><br>

<strong>grid</strong><br>
• Создает grid-контейнер для двумерных макетов<br>
• Точное позиционирование в строках и колонках<br>
• Сложные сеточные структуры<br>
• Идеален для макетов страниц, галерей, форм<br><br>

<strong>table</strong><br>
• Элемент ведет себя как таблица<br>
• Дочерние элементы становятся ячейками таблицы<br>
• Полезно для табличных данных без семантической таблицы<br><br>

<strong>list-item</strong><br>
• Элемент ведет себя как пункт списка<br>
• Добавляется маркер (как у li)<br>
• Редко используется на практике<br><br>

<strong>run-in</strong><br>
• Экспериментальное значение<br>
• Элемент становится строчным или блочным в зависимости от контекста<br>
• Ограниченная поддержка браузерами`,
        difficulty: "easy",
      },
      {
        id: "css-11",
        question: "Какие альтернативы display: none с точки зрения доступности?",
        answer:
          "visibility: hidden (сохраняет место, но скрывает элемент).<br/>opacity: 0 (элемент прозрачен, но доступен для screen readers).<br/>position: absolute; left: -9999px (перемещает за экран).<br/>aria-hidden='true' (указывает screen readers игнорировать элемент).<br/>display: none полностью удаляет из DOM и недоступен для assistive technologies.",
        difficulty: "easy",
      },
      {
        id: "css-12",
        question: "Что такое Flexbox и какие основные свойства Flexbox контейнера и элементов?",
        answer: `<strong>Flexbox (Flexible Box Layout)</strong><br>
Flexbox — это система для создания одномерных макетов, где элементы располагаются в одном направлении (горизонтально или вертикально).<br><br>

<strong>Основные особенности Flexbox:</strong><br>
• Работает по одному измерению: row (строка) или column (колонка)<br>
• Элементы гибко изменяют размеры для заполнения доступного пространства<br>
• Идеален для выравнивания элементов по центру<br>
• Отлично подходит для распределения пространства между элементами<br>
• Прекрасно работает для адаптивных макетов компонентов<br><br>

<strong>Ключевые свойства Flexbox:</strong><br>
• display: flex - активация flex-контейнера<br>
• justify-content - выравнивание по главной оси<br>
• align-items - выравнивание по поперечной оси<br>
• flex-direction - направление элементов<br>
• flex-wrap - перенос элементов<br><br>
`,
        difficulty: "easy",
      },
      {
        id: "css-13",
        question:
          "Как работает система сеток в CSS Grid и какие есть основные свойства Grid контейнера?",
        answer: `
        <strong>CSS Grid Layout</strong><br>
CSS Grid — это мощная система для создания двумерных макетов, где элементы располагаются одновременно по горизонтали и вертикали.<br><br>

<strong>Основные особенности CSS Grid:</strong><br>
• Работает по двум осям: строкам и колонкам одновременно<br>
• Позволяет создавать сложные сеточные структуры<br>
• Обеспечивает точный контроль над размещением элементов в ячейках<br>
• Поддерживает создание адаптивных макетов без медиа-запросов<br>
• Идеален для создания каркасов страниц и сложных интерфейсов<br><br>

<strong>Ключевые свойства CSS Grid:</strong><br>
• display: grid - активация grid-контейнера<br>
• grid-template-columns - определение колонок<br>
• grid-template-rows - определение строк<br>
• grid-template-areas - именованные области сетки<br>
• gap - расстояние между элементами<br>
• grid-column/grid-row - размещение элементов<br><br>
`,
        difficulty: "easy",
      },
      {
        id: "css-14",
        question: "Что такое блочная модель элемента в CSS?",
        answer: `
<strong>Блочная модель</strong> - это фундаментальная концепция CSS, которая описывает, как браузер вычисляет размеры и расположение элементов на странице. Каждый элемент представляется в виде прямоугольного блока с определёнными свойствами.<br><br>

<strong>Основные компоненты блочной модели (изнутри наружу):</strong><br>
• Содержимое (content)<br>
• Внутренние отступы (padding)<br>
• Границы (border)<br>
• Внешние отступы (margin)        `,
        difficulty: "easy",
      },
      {
        id: "css-15",
        question: "Чем отличаются padding от margin в CSS?",
        answer: `
<strong>Padding (внутренний отступ):</strong><br>
• Находится <strong>внутри</strong> границы элемента<br>
• Создает пространство между содержимым и border<br>
• Фон элемента распространяется на область padding<br>
• Влияет на общий размер элемента (в зависимости от box-sizing)<br>
• Не схлопывается с отступами других элементов<br><br>

<strong>Margin (внешний отступ):</strong><br>
• Находится <strong>снаружи</strong> границы элемента<br>
• Создает пространство между элементом и соседями<br>
• Прозрачный - не наследует фон элемента<br>
• Не влияет на размер элемента (всегда добавляется к общим размерам)<br>
• Может схлопываться с margin соседних элементов<br><br>    `,
        difficulty: "easy",
      },
      {
        id: "css-16",
        question: "Что такое схлопывание margin (margin collapsing) в CSS?",
        answer: `
        <strong>Margin collapsing</strong> - это особенность CSS, при которой вертикальные внешние отступы (margin) смежных элементов не складываются, а объединяются в один отступ, равный большему из значений.<br><br>
        `,
        difficulty: "easy",
      },
      {
        id: "css-17",
        question: "За что отвечает свойство box-sizing в CSS?",
        answer:
          "Свойство box-sizing в CSS определяет, как рассчитываются размеры элемента, включая его паддинг (padding) и границу (border). Оно помогает контролировать, как будет вычисляться общая ширина и высота элемента при добавлении внутренних отступов и границ.",
        difficulty: "easy",
      },
      {
        id: "css-18",
        question: "Чем отличаются значения свойства box-sizing: content-box и border-box?",
        answer: `
        <strong>content-box (значение по умолчанию)</strong><br>
• width и height включают только содержимое<br>
• padding и border добавляются к указанной ширине/высоте<br>
• Элемент занимает больше места, чем указано в width/height<br>
• Общая ширина = width + padding + border<br><br>

<strong>border-box</strong><br>
• width и height включают содержимое, padding и border<br>
• padding и border "встроены" в указанную ширину/высоту<br>
• Элемент занимает ровно столько места, сколько указано в width/height<br>
• Общая ширина = width (уже включает padding и border)<br><br>
`,
        difficulty: "easy",
      },

      {
        id: "css-19",
        question: "Что такое семантическая верстка?",
        answer: `Семантическая верстка — это подход к созданию HTML-документов, при котором используются теги, отражающие смысл содержимого. В отличие от использования только <div> или <span>, семантические теги дают структуре документа больше значимости, делая его более понятным для людей, поисковых систем и вспомогательных технологий.`,
        difficulty: "easy",
      },
      {
        id: "css-20",
        question: "Почему семантическая верстка важна?",
        answer: `
<strong>Улучшение доступности</strong><br>
• Семантические теги помогают скринридерам и другим вспомогательным технологиям<br>
• Правильная интерпретация структуры контента для пользователей с ограниченными возможностями<br>
• Пример: тег &lt;article&gt; четко определяет независимый контент<br>
• Пример: &lt;nav&gt; идентифицирует навигационные блоки<br><br>

<strong>SEO (Поисковая оптимизация)</strong><br>
• Поисковые системы лучше понимают структуру страницы<br>
• Теги &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt; помогают определить важные разделы<br>
• Возможное улучшение позиций в поисковой выдаче<br>
• Более точная индексация контента<br><br>

<strong>Поддержка и расширяемость кода</strong><br>
• Повышенная читаемость и понятность кода<br>
• Быстрое понимание структуры страницы другими разработчиками<br>
• Упрощение внесения изменений и доработок<br>
• Снижение количества ошибок при поддержке проекта<br><br>

<strong>Совместимость и производительность</strong><br>
• Лучшая работа с различными браузерами и устройствами<br>
• Улучшенная производительность рендеринга<br>
• Оптимизированное отображение на мобильных устройствах<br>
• Будущая совместимость с новыми технологиями<br><br>`,
        difficulty: "easy",
      },
      {
        id: "css-21",
        question: "Какие основные семантические теги существуют?",
        answer: `
        <strong>Основные семантические теги:</strong><br>
• &lt;header&gt; - шапка страницы или раздела<br>
• &lt;nav&gt; - навигационное меню<br>
• &lt;main&gt; - основное содержимое страницы<br>
• &lt;article&gt; - независимая статья или запись<br>
• &lt;section&gt; - тематическая группа контента<br>
• &lt;aside&gt; - дополнительный, связанный контент<br>
• &lt;footer&gt; - подвал страницы или раздела`,
        difficulty: "easy",
      },
      {
        id: "css-22",
        question: "В чём основное отличие единиц px, em и rem в CSS?",
        answer: `
        <strong>px (пиксели)</strong><br>
• Абсолютная единица измерения<br>
• Фиксированный размер, не зависит от родительских элементов<br>
• Не адаптируется под пользовательские настройки масштабирования<br><br>

<strong>em (относительная единица)</strong><br>
• Относится к размеру шрифта родительского элемента<br>
• 1em = текущий font-size родителя<br>
• Может накапливаться при вложенности элементов<br><br>

<strong>rem (root em)</strong><br>
• Относится к размеру шрифта корневого элемента &lt;html&gt;<br>
• 1rem = font-size на уровне &lt;html&gt;<br>
• Не зависит от родительских элементов, более предсказуем<br><br>`,
        difficulty: "easy",
      },
      {
        id: "css-23",
        question:
          "Как работает наследование размеров при использовании em и почему это может быть проблемой?",
        answer: `
        <strong>Принцип работы em:</strong><br>
• 1em всегда равен текущему font-size родительского элемента<br>
• При вложенности элементов размеры могут умножаться друг на друга<br><br>

<strong>Пример проблемы с наследованием:</strong><br>
.outer {<br>
&nbsp;&nbsp;font-size: 16px;<br>
}<br><br>

.inner {<br>
&nbsp;&nbsp;font-size: 1.2em; /* 16px × 1.2 = 19.2px */<br>
}<br><br>

.inner .text {<br>
&nbsp;&nbsp;font-size: 1.2em; /* 19.2px × 1.2 = 23.04px */<br>
}<br><br>

<strong>Результат:</strong><br>
• Размер текста увеличивается с каждым уровнем вложенности<br>
• Сложно контролировать итоговые размеры в глубоких структурах<br>
• Непредсказуемое поведение при модификации кода`,
        difficulty: "easy",
      },
      {
        id: "css-24",
        question: "В каких случаях лучше использовать rem вместо em?",
        answer: `<strong>rem рекомендуется использовать для:</strong><br>
• Глобальной типографики и размеров текста<br>
• Адаптивного дизайна и layout-компонентов<br>
• Создания масштабируемых интерфейсов<br>
• Когда нужна предсказуемость во всей иерархии элементов<br><br>

<strong>Преимущества rem:</strong><br>
• Изменение одного значения в html влияет на все элементы<br>
• Нет эффекта накопления при вложенности<br>
• Проще поддерживать и масштабировать проект<br>
• Лучшая доступность для пользовательских настроек<br><br>

<strong>Пример использования rem:</strong><br>
html {<br>
&nbsp;&nbsp;font-size: 16px;<br>
}<br><br>

.button {<br>
&nbsp;&nbsp;font-size: 1.25rem; /* 20px */<br>
&nbsp;&nbsp;padding: 0.5rem 1rem; /* 8px 16px */<br>
&nbsp;&nbsp;margin-bottom: 1rem; /* 16px */<br>
}`,
        difficulty: "easy",
      },
      {
        id: "css-25",
        question: "Что такое viewport-единицы и чем они отличаются от обычных процентных значений?",
        answer: `<strong>Viewport-единицы - это относительные единицы, основанные на размерах области просмотра:</strong><br>
• 1vh = 1% от высоты окна браузера<br>
• 1vw = 1% от ширины окна браузера<br>
• 1vmin = 1% от меньшей стороны (ширины или высоты)<br>
• 1vmax = 1% от большей стороны (ширины или высоты)<br><br>

<strong>Отличие от процентных значений:</strong><br>
• % - относительны размеру родительского элемента<br>
• vh/vw - относительны размеру всего окна браузера<br>
• Viewport-единицы не зависят от структуры HTML-дерева`,
        difficulty: "easy",
      },
      {
        id: "css-26",
        question: "В каких практических случаях следует использовать vmin и vmax?",
        answer: `<strong>vmin используйте для:</strong><br>
• Создания квадратных элементов, которые помещаются в экран<br>
• Размеров шрифтов, которые должны быть читаемы на любом устройстве<br>
• Элементов, которые не должны выходить за границы меньшей стороны<br><br>

<strong>vmax используйте для:</strong><br>
• Фоновых изображений, занимающих всю большую сторону<br>
• Герой-секций, которые должны быть максимально заметными<br>
• Элементов, ориентированных на горизонтальную верстку<br><br>

<strong>Пример:</strong><br>
.hero-section {<br>
&nbsp;&nbsp;width: 100vmax;<br>
&nbsp;&nbsp;height: 100vmin;<br>
&nbsp;&nbsp;background: blue;<br>
}`,
        difficulty: "easy",
      },
      {
        id: "css-27",
        question: "Какая проблема с vh существует на мобильных устройствах и как её решить?",
        answer: `
        <strong>Проблема:</strong><br>
• На мобильных устройствах 100vh включает область за пределами видимой зоны<br>
• При скролле адресная строка меняет высоту viewport<br>
• Элементы с height: 100vh могут быть обрезаны<br><br>

<strong>Решение через JavaScript:</strong><br>
document.documentElement.style.setProperty('--vh', \`\${window.innerHeight * 0.01}px\`);<br><br>

window.addEventListener('resize', () => {<br>
&nbsp;&nbsp;document.documentElement.style.setProperty('--vh', \`\${window.innerHeight * 0.01}px\`);<br>
});<br><br>

<strong>Использование в CSS:</strong><br>
.full-height {<br>
&nbsp;&nbsp;height: calc(var(--vh, 1vh) * 100);<br>
}`,
        difficulty: "easy",
      },
      {
        id: "css-28",
        question: "Чем отличаются vw/vh от процентов (%) в контексте ширины и высоты?",
        answer: `<strong>vw/vh (viewport-единицы):</strong><br>
• Всегда относительно размеров окна браузера<br>
• Не зависят от родительских элементов<br>
• 50vw = всегда половина ширины окна<br>
• Идеально для полноэкранных布局ов<br><br>

<strong>% (проценты):</strong><br>
• Относительно размеров родительского элемента<br>
• Зависят от контекста и структуры HTML<br>
• 50% = половина ширины родителя<br>
• Идеально для компонентов внутри контейнеров<br><br>

<strong>Практический пример:</strong><br>
body { width: 80%; } /* 80% от окна браузера */<br>
.container { width: 50%; } /* 50% от body (40% от окна) */<br>
.element { width: 50vw; } /* всегда 50% от ширины окна */
`,
        difficulty: "easy",
      },
      {
        id: "css-29",
        question: "Что такое адаптивная верстка?",
        answer: `Адаптивная верстка — это подход к веб-дизайну, при котором сайт автоматически подстраивается под размер экрана устройства, на котором его просматривают. Это достигается с помощью гибких макетов, отзывчивых изображений и медиавыражений, которые позволяют изменять структуру страницы (например, размер шрифта, отступы и расположение блоков) для обеспечения комфортного использования на любом устройстве — от смартфона до десктопа. `,
        difficulty: "easy",
      },
      {
        id: "css-30",
        question: "Что такое медиа-запросы (media queries) и для чего они нужны в веб-разработке?",
        answer: `
       <strong>Медиа-запросы</strong> - это механизм в CSS, который позволяет применять стили в зависимости от характеристик устройства и браузера.<br><br>

<strong>Основные цели использования:</strong><br>
• Создание адаптивных интерфейсов для разных устройств<br>
• Корректное отображение на смартфонах, планшетах, ноутбуках и мониторах<br>
• Улучшение пользовательского опыта на всех типах экранов<br>
• Поддержка различных ориентаций устройств (портретная/ландшафтная)<br>
• Реализация темной/светлой темы согласно системным настройкам
        `,
        difficulty: "easy",
      },
      {
        id: "css-31",
        question: "Какие основные типы медиа-запросов существуют и когда их применять?",
        answer: `
        <strong>По ширине экрана (наиболее популярные):</strong><br>
• max-width - стили применяются при ширине меньше указанной<br>
• min-width - стили применяются при ширине больше указанной<br><br>

<strong>По характеристикам устройства:</strong><br>
• orientation - ориентация экрана (portrait/landscape)<br>
• resolution - плотность пикселей устройства<br>
• prefers-color-scheme - системная тема (dark/light)<br>
• hover - поддержка hover-эффектов<br><br>

<strong>Пример типичных брейкпоинтов:</strong><br>
@media (max-width: 768px) { /* Планшеты */ }<br>
@media (max-width: 480px) { /* Мобильные */ }<br>
@media (min-width: 1200px) { /* Десктоп */ }`,
        difficulty: "easy",
      },
      {
        id: "css-32",
        question: "Что такое Mobile-First подход и чем он лучше Desktop-First?",
        answer: `
        <strong>Mobile-First подход:</strong><br>
• Начинаем проектирование с мобильных устройств<br>
• Используем медиа-запросы с min-width для более широких экранов<br>
• Базовые стили пишутся для мобильных, затем добавляются улучшения для планшетов и десктопов<br><br>

<strong>Преимущества Mobile-First:</strong><br>
• Лучшая производительность на мобильных<br>
• Более чистый и семантичный код<br>
• Соответствие современным трендам (больше мобильных пользователей)<br>
• Упрощенная progressive enhancement<br><br>`,
        difficulty: "easy",
      },
      {
        id: "css-33",
        question: " Как создать адаптивную Grid сетку с помощью медиа-запросов?",
        answer: `
        <strong>Пример адаптивной grid-сетки:</strong><br>
.grid {<br>
&nbsp;&nbsp;display: grid;<br>
&nbsp;&nbsp;grid-template-columns: 1fr;<br>
&nbsp;&nbsp;gap: 20px;<br>
}<br><br>

@media (min-width: 768px) {<br>
&nbsp;&nbsp;.grid {<br>
&nbsp;&nbsp;&nbsp;&nbsp;grid-template-columns: repeat(2, 1fr);<br>
&nbsp;&nbsp;}<br>
}<br><br>

@media (min-width: 1024px) {<br>
&nbsp;&nbsp;.grid {<br>
&nbsp;&nbsp;&nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br>
&nbsp;&nbsp;}<br>
}<br><br>

<strong>Результат:</strong><br>
• Мобильные: 1 колонка<br>
• Планшеты: 2 колонки<br>
• Десктоп: 3 колонки`,
        difficulty: "easy",
      },
      {
        id: "css-34",
        question: "Что такое позиционирование и какие есть типы позиционирования?",
        answer: `
        Свойство position в CSS определяет, как элемент будет располагаться на странице и относительно чего он будет позиционироваться.<br><br>

<strong>Значения свойства position:</strong><br><br>

<strong>static</strong><br>
• Значение по умолчанию<br>
• Элемент располагается в документе согласно потоку<br>
• Не реагирует на свойства top, right, bottom, left, z-index<br><br>

<strong>relative</strong><br>
• Элемент остаётся в потоке<br>
• Можно сдвинуть с помощью top, right, bottom, left<br>
• Пространство, занимаемое элементом, остаётся на месте<br><br>

<strong>absolute</strong><br>
• Элемент удаляется из потока<br>
• Позиционируется относительно ближайшего предка с position: relative, absolute, fixed или sticky<br>
• Если такого предка нет - относительно body<br><br>

<strong>fixed</strong><br>
• Элемент удаляется из потока<br>
• Закрепляется относительно окна браузера<br>
• Не перемещается при прокрутке страницы<br>
• Идеально для фиксированных шапок и меню<br><br>

<strong>sticky</strong><br>
• Ведёт себя как relative в обычном состоянии<br>
• Фиксируется при прокрутке, когда достигает указанных границ<br>
• Позиционируется относительно окна браузера при фиксации<br><br>
`,
        difficulty: "easy",
      },
      {
        id: "css-35",
        question: "Как работает свойство z-index и как управлять стеком z-индексов?",
        answer:
          "z-index управляет порядком наложения элементов с позиционированием (не static). Чем больше значение, тем выше элемент в стеке. Если z-index не указан, порядок определяется последовательностью в HTML. Работает только на позиционированных элементах.",
        difficulty: "easy",
      },
      {
        id: "css-36",
        question:
          "Что такое 'переменные CSS' (CSS variables) и как они используются для упрощения стилизации?",
        answer:
          "Кастомные свойства для переиспользования значений.<br/>Определение: :root { --main-color: #007bff; }<br/>Использование: color: var(--main-color);<br/>Преимущества: легкость изменений, динамичность через JS, создание тем, модульность. Улучшают поддержку и читаемость кода.",
        difficulty: "easy",
      },
      {
        id: "css-37",
        question:
          "Какие преимущества и недостатки использования CSS-препроцессоров, таких как Sass или Less?",
        answer:
          "Преимущества: переменные, миксины, вложенность, математические операции, импорт файлов, условия и циклы.<br/>Недостатки: дополнительная сложность, этап компиляции, зависимость от инструментов, возможность создания избыточного кода, проблемы совместимости со старыми браузерами.",
        difficulty: "easy",
      },
      {
        id: "css-38",
        question: "Что такое 'миксины' (mixins) в препроцессорах CSS и как они используются?",
        answer:
          "Переиспользуемые блоки стилей в Sass/Less.<br/>Sass: @mixin button-style { ... } затем @include button-style;<br/>Less: .button-style() { ... } затем .button-style();<br/>Могут принимать параметры для гибкости. Упрощают поддержку, сокращают дублирование кода.",
        difficulty: "easy",
      },
      {
        id: "css-39",
        question: "Как работают псевдоклассы и псевдоэлементы в CSS",
        answer:
          "<strong>Псевдоклассы</strong> — это селекторы, которые позволяют выбирать элементы в определённом состоянии (например, при наведении курсора).<br/><br/>Примеры популярных псевдоклассов:<br/>1. :hover — при наведении мыши.<br/>2. :focus — при получении фокуса.<br/>3. :nth-child(n) — для выбора элемента по порядковому номеру.<br/>4. :checked — для отмеченных чекбоксов или радио-кнопок.<br/>5. :not(selector) — выбирает элементы, которые не соответствуют селектору.<strong><br/><br/>Псевдоэлементы</strong> позволяют стилизовать части элементов (например, первую букву или добавлять текст до элемента).<br/><br/>Примеры популярных псевдоэлементов:<br/>1. ::before — вставляет контент перед элементом.<br/>2. ::after — вставляет контент после элемента.<br/>3. ::first-letter — стилизует первую букву текста.<br/>4. ::first-line — стилизует первую строку текста.<br/>5. ::placeholder — стилизует текст внутри полей ввода.",
        difficulty: "easy",
      },
      {
        id: "css-40",
        question:
          "Как использовать псевдокласс :not() для выбора элементов, которые НЕ соответствуют определенному селектору?",
        answer:
          "Синтаксис: :not(selector) { стили }<br/>Пример: p:not(.special) выберет все p кроме тех, у которых класс special.<br/>Ограничения: можно указать только один селектор внутри :not(), элементы внутри выбранного селектора также исключаются. Мощный инструмент для инверсного выбора.",
        difficulty: "easy",
      },
      {
        id: "css-41",
        question: "Какие основные подходы к созданию анимаций в CSS?",
        answer: `
        <strong>1. Transition (Плавные переходы)</strong><br>
• Для простых эффектов при изменении состояний<br>
• Срабатывает при наведении, фокусе, изменении классов<br>
• Плавно изменяет свойства между двумя состояниями<br><br>

<strong>2. Animation (Ключевые кадры)</strong><br>
• Для сложных многошаговых анимаций<br>
• Позволяет создавать последовательности преобразований<br>
• Управление повторением, направлением и заполнением<br><br>

<strong>Ключевое отличие:</strong><br>
• Transition - реакция на изменение<br>
• Animation - автономная анимация по заданному сценарию`,
        difficulty: "easy",
      },
      {
        id: "css-42",
        question: "Какие свойства используются для создания плавных переходов (transition)?",
        answer: `
<strong>transition-property</strong><br>
• Указывает какие свойства анимировать<br>
• Пример: transition-property: opacity, transform;<br><br>

<strong>transition-duration</strong><br>
• Длительность перехода в секундах<br>
• Пример: transition-duration: 0.3s;<br><br>

<strong>transition-timing-function</strong><br>
• Кривая скорости анимации:<br>
• linear - равномерно<br>
• ease - быстро-медленно (по умолчанию)<br>
• ease-in - медленно-быстро<br>
• ease-out - быстро-медленно<br>
• cubic-bezier() - кастомная кривая<br><br>

<strong>transition-delay</strong><br>
• Задержка перед началом анимации<br>
• Пример: transition-delay: 0.1s;<br><br>

<strong>Сокращенная запись:</strong><br>
transition: all 0.3s ease-in-out 0.1s;`,
        difficulty: "easy",
      },
      {
        id: "css-43",
        question: "Как работают ключевые кадры (@keyframes) в CSS-анимациях?",
        answer: `
<strong>Синтаксис @keyframes:</strong><br>
@keyframes animationName {<br>
&nbsp;&nbsp;from { /* начальное состояние */ }<br>
&nbsp;&nbsp;to { /* конечное состояние */ }<br>
}<br><br>

<strong>Или с процентами:</strong><br>
@keyframes slide {<br>
&nbsp;&nbsp;0% { transform: translateX(0); }<br>
&nbsp;&nbsp;50% { transform: translateX(100px); }<br>
&nbsp;&nbsp;100% { transform: translateX(0); }<br>
}<br><br>

<strong>Пример простой анимации:</strong><br>
@keyframes fadeIn {<br>
&nbsp;&nbsp;from { opacity: 0; }<br>
&nbsp;&nbsp;to { opacity: 1; }<br>
}<br><br>

.element {<br>
&nbsp;&nbsp;animation: fadeIn 2s ease-in-out;<br>
}`,
        difficulty: "easy",
      },
      {
        id: "css-44",
        question:
          "Как создать анимацию с эффектом 'параллакса' (parallax scrolling) с использованием CSS?",
        answer:
          "Методы: background-attachment: fixed для фона, transform с perspective и translate3d, разные слои с position.<br/>Пример: .parallax { background-attachment: fixed; background-size: cover; }<br/>Можно комбинировать с JavaScript для более сложных эффектов. Учитывайте производительность.",
        difficulty: "easy",
      },
    ],
  },
  // JS
  {
    id: "javascript",
    name: "JavaScript",
    questions: [
      {
        id: "js-1",
        question: "Какие типы данных существуют в JavaScript?",
        answer:
          "В JavaScript есть примитивные и ссылочные типы данных.<br/><br/>Примитивные типы:<br/>• Boolean — логические значения true/false<br/>• Null — отсутствие значения<br/>• Undefined — переменная объявлена, но не инициализирована<br/>• Number — числовые значения<br/>• BigInt — целые числа произвольной точности<br/>• String — строки<br/>• Symbol — уникальные идентификаторы<br/><br/>Ссылочные типы:<br/>• Object — коллекции пар ключ-значение<br/>• Function — вызываемые объекты<br/>• Array, Date, RegExp — специальные объекты",
        difficulty: "easy",
      },
      {
        id: "js-2",
        question: "В чём разница между null и undefined?",
        answer:
          'null — намеренное отсутствие значения:<br/>• Явно присваивается разработчиком<br/>• Означает "пустое" или "несуществующее" значение<br/>• typeof null возвращает \'object\' (историческая ошибка)<br/><br/>undefined — отсутствие инициализации:<br/>• Переменная объявлена, но не инициализирована<br/>• Свойство объекта не существует<br/>• Функция не возвращает значение<br/>• Параметр функции не передан<br/><br/>При сравнении:<br/>• null == undefined // true<br/>• null === undefined // false',
        difficulty: "easy",
      },
      {
        id: "js-3",
        question: "Что такое приведение типов (type coercion)?",
        answer:
          "Приведение типов — автоматическое преобразование значений из одного типа в другой.<br/><br/>Явное приведение:<br/>• Number('5') // 5<br/>• String(123) // '123'<br/>• Boolean(1) // true<br/><br/>Неявное приведение:<br/>• '5' - 3 // 2 (строка преобразуется в число)<br/>• '5' + 3 // '53' (число преобразуется в строку)<br/>• if ('hello') // true (строка в boolean)<br/><br/>Правила:<br/>• В математических операциях (кроме +) строки → числа<br/>• При конкатенации (+) числа → строки<br/>• В логическом контексте всё → boolean",
        difficulty: "easy",
      },
      {
        id: "js-4",
        question: "Что такое поднятие (hoisting)?",
        answer:
          "Hoisting — механизм JavaScript, при котором объявления переменных и функций перемещаются в начало их области видимости во время компиляции.<br/><br/>Переменные var:<br/>• Поднимается объявление, но не инициализация<br/>• До инициализации имеют значение undefined<br/><br/>Функции:<br/>• Function declaration поднимается полностью<br/>• Можно вызывать до объявления<br/><br/>let и const:<br/>• Поднимаются, но находятся в temporal dead zone<br/>• Нельзя использовать до объявления<br/>• ReferenceError при попытке доступа<br/><br/>Пример:<br/>console.log(x); // undefined<br/>var x = 5;<br/>sayHi(); // работает<br/>function sayHi() { console.log('Hi'); }",
        difficulty: "medium",
      },
      {
        id: "js-5",
        question: "Какие типы областей видимости существуют в JavaScript?",
        answer:
          "Глобальная область видимости:<br/>• Переменные доступны везде в программе<br/>• Объявлены вне функций и блоков<br/>• В браузере привязаны к объекту window<br/><br/>Функциональная область видимости:<br/>• Переменные доступны только внутри функции<br/>• var имеет функциональную область видимости<br/><br/>Блочная область видимости (ES6):<br/>• Переменные доступны только внутри блока {}<br/>• let и const имеют блочную область видимости<br/>• Включает циклы, условия, любые блоки кода<br/><br/>Лексическая область видимости:<br/>• Вложенные функции имеют доступ к переменным внешних функций<br/>• Определяется местом написания кода",
        difficulty: "easy",
      },
      {
        id: "js-6",
        question: "В чём разница между == и ===?",
        answer:
          "== (нестрогое равенство):<br/>• Сравнивает только значения<br/>• Выполняет приведение типов<br/>• '5' == 5 // true<br/>• null == undefined // true<br/>• 0 == false // true<br/><br/>=== (строгое равенство):<br/>• Сравнивает значения и типы<br/>• Без приведения типов<br/>• '5' === 5 // false<br/>• null === undefined // false<br/>• 0 === false // false<br/><br/>Рекомендация:<br/>• Всегда используйте === для предсказуемости<br/>• == только когда нужна проверка null/undefined",
        difficulty: "easy",
      },
      {
        id: "js-7",
        question: "Что такое замыкание (closure)?",
        answer:
          "Замыкание — функция, имеющая доступ к переменным внешней функции даже после её завершения.<br/><br/>Компоненты замыкания:<br/>• Внешняя функция с локальными переменными<br/>• Внутренняя функция, использующая эти переменные<br/>• Возврат внутренней функции<br/><br/>Пример:<br/>function counter() {<br/>&nbsp;&nbsp;let count = 0;<br/>&nbsp;&nbsp;return function() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return ++count;<br/>&nbsp;&nbsp;};<br/>}<br/>const myCounter = counter();<br/>myCounter(); // 1<br/>myCounter(); // 2<br/><br/>Применение:<br/>• Приватные переменные<br/>• Модульный паттерн<br/>• Обработчики событий<br/>• Каррирование функций",
        difficulty: "medium",
      },
      {
        id: "js-8",
        question: "Как работает ключевое слово this?",
        answer:
          "this указывает на контекст выполнения функции.<br/><br/>В глобальной области:<br/>• Браузер: window<br/>• Node.js: global<br/>• Строгий режим: undefined<br/><br/>В методе объекта:<br/>• this = объект, вызвавший метод<br/><br/>В обычной функции:<br/>• Нестрогий режим: window/global<br/>• Строгий режим: undefined<br/><br/>В стрелочной функции:<br/>• this берётся из внешнего контекста<br/>• Не имеет собственного this<br/><br/>С call/apply/bind:<br/>• this явно задаётся первым аргументом<br/><br/>В конструкторе (new):<br/>• this = новый создаваемый объект",
        difficulty: "medium",
      },
      {
        id: "js-9",
        question: "В чём разница между обычными и стрелочными функциями?",
        answer:
          "Синтаксис:<br/>• Обычная: function name() {}<br/>• Стрелочная: () => {}<br/><br/>Контекст this:<br/>• Обычная: собственный this, зависит от вызова<br/>• Стрелочная: наследует this из внешнего контекста<br/><br/>arguments:<br/>• Обычная: имеет объект arguments<br/>• Стрелочная: не имеет arguments<br/><br/>Конструктор:<br/>• Обычная: можно использовать с new<br/>• Стрелочная: нельзя использовать с new<br/><br/>Hoisting:<br/>• Обычная (declaration): поднимается<br/>• Стрелочная: не поднимается<br/><br/>Когда использовать стрелочные:<br/>• Коллбэки и обработчики<br/>• Методы массивов (map, filter)<br/>• Когда нужен внешний this",
        difficulty: "easy",
      },
      {
        id: "js-10",
        question: "Что такое шаблонные литералы (template literals)?",
        answer:
          "Шаблонные литералы — способ создания строк с использованием обратных кавычек ``.<br/><br/>Возможности:<br/>• Интерполяция выражений: ${variable}<br/>• Многострочные строки без \\n<br/>• Теговые шаблоны для обработки<br/><br/>Примеры:<br/>const name = 'Иван';<br/>const greeting = `Привет, ${name}!`;<br/><br/>const multiline = `<br/>&nbsp;&nbsp;Первая строка<br/>&nbsp;&nbsp;Вторая строка<br/>`;<br/><br/>const calc = `Сумма: ${2 + 2}`;<br/><br/>Преимущества:<br/>• Читаемость кода<br/>• Удобная конкатенация<br/>• Вычисление выражений внутри строк",
        difficulty: "easy",
      },
      {
        id: "js-11",
        question: "Что такое функции высшего порядка?",
        answer:
          "Функция высшего порядка — функция, которая принимает другие функции как аргументы или возвращает функцию.<br/><br/>Характеристики:<br/>• Принимает функции как параметры<br/>• Возвращает функции как результат<br/>• Или то и другое<br/><br/>Встроенные примеры:<br/>• map() — преобразует элементы<br/>• filter() — фильтрует элементы<br/>• reduce() — сворачивает массив<br/>• forEach() — перебирает элементы<br/>• setTimeout() — отложенное выполнение<br/><br/>Пример создания:<br/>function multiplier(factor) {<br/>&nbsp;&nbsp;return num => num * factor;<br/>}<br/>const double = multiplier(2);<br/>double(5); // 10<br/><br/>Применение:<br/>• Композиция функций<br/>• Каррирование<br/>• Декораторы",
        difficulty: "medium",
      },
      {
        id: "js-12",
        question: "Являются ли функции в JavaScript объектами первого класса?",
        answer:
          "Да, функции в JavaScript — объекты первого класса (first-class citizens).<br/><br/>Это означает, что функции можно:<br/>• Присваивать переменным<br/>• Передавать как аргументы<br/>• Возвращать из других функций<br/>• Хранить в структурах данных<br/>• Создавать динамически<br/>• Иметь свойства и методы<br/><br/>Примеры:<br/>// Присваивание переменной<br/>const greet = function() { };<br/><br/>// Передача как аргумент<br/>array.map(function(x) { return x * 2; });<br/><br/>// Возврат из функции<br/>function createFunction() {<br/>&nbsp;&nbsp;return function() { };<br/>}<br/><br/>// Свойства функции<br/>greet.customProp = 'value';",
        difficulty: "easy",
      },
      {
        id: "js-13",
        question: "Какие концепции функционального программирования есть в JavaScript?",
        answer:
          'Основные концепции ФП в JavaScript:<br/><br/>Чистые функции:<br/>• Без побочных эффектов<br/>• Детерминированные результаты<br/>• Не изменяют внешнее состояние<br/><br/>Иммутабельность:<br/>• Не изменять существующие данные<br/>• Создавать новые версии<br/>• Использовать spread, Object.assign()<br/><br/>Функции высшего порядка:<br/>• map, filter, reduce<br/>• Композиция функций<br/>• Каррирование<br/><br/>Рекурсия:<br/>• Альтернатива циклам<br/>• Хвостовая рекурсия<br/><br/>Декларативный стиль:<br/>• Описываем "что", а не "как"<br/>• Цепочки методов<br/>• Функциональные выражения',
        difficulty: "medium",
      },
      {
        id: "js-14",
        question: "Что такое IIFE (Immediately Invoked Function Expression)?",
        answer:
          "IIFE — функция, которая выполняется сразу после создания.<br/><br/>Синтаксис:<br/>(function() {<br/>&nbsp;&nbsp;// код<br/>})();<br/><br/>или<br/><br/>(function() {<br/>&nbsp;&nbsp;// код<br/>}());<br/><br/>С параметрами:<br/>(function(name) {<br/>&nbsp;&nbsp;console.log(name);<br/>})('Иван');<br/><br/>Преимущества:<br/>• Изоляция области видимости<br/>• Избежание загрязнения глобальной области<br/>• Создание приватных переменных<br/>• Однократное выполнение кода<br/><br/>Применение:<br/>• Модульный паттерн<br/>• Инициализация приложения<br/>• Полифиллы и плагины<br/>• Избежание конфликтов имён",
        difficulty: "medium",
      },
      {
        id: "js-15",
        question: "Как создать приватные переменные в JavaScript?",
        answer:
          "Способы создания приватных переменных:<br/><br/>1. Замыкания:<br/>function Counter() {<br/>&nbsp;&nbsp;let count = 0; // приватная<br/>&nbsp;&nbsp;this.increment = () => ++count;<br/>&nbsp;&nbsp;this.getCount = () => count;<br/>}<br/><br/>2. IIFE и модульный паттерн:<br/>const module = (() => {<br/>&nbsp;&nbsp;let private = 0;<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;getPrivate: () => private<br/>&nbsp;&nbsp;};<br/>})();<br/><br/>3. WeakMap для классов:<br/>const privateData = new WeakMap();<br/>class MyClass {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;privateData.set(this, {secret: 42});<br/>&nbsp;&nbsp;}<br/>}<br/><br/>4. Символы (условно приватные):<br/>const _private = Symbol('private');<br/>obj[_private] = 'секрет';<br/><br/>5. Приватные поля классов (ES2022):<br/>class MyClass {<br/>&nbsp;&nbsp;#privateField = 42;<br/>}",
        difficulty: "medium",
      },
      {
        id: "js-16",
        question: "Что такое Event Loop и как он работает?",
        answer:
          "Event Loop — механизм, позволяющий JavaScript выполнять асинхронный код несмотря на однопоточность.<br/><br/>Компоненты:<br/>• Call Stack — стек вызовов функций<br/>• Web APIs — браузерные API (setTimeout, fetch)<br/>• Callback Queue — очередь коллбэков<br/>• Microtask Queue — очередь микрозадач (Promise)<br/>• Event Loop — цикл событий<br/><br/>Порядок выполнения:<br/>1. Синхронный код (Call Stack)<br/>2. Микрозадачи (Promise, queueMicrotask)<br/>3. Макрозадачи (setTimeout, setInterval)<br/><br/>Процесс:<br/>1. Выполняется весь синхронный код<br/>2. Проверяется очередь микрозадач<br/>3. Выполняется одна макрозадача<br/>4. Снова проверяются микрозадачи<br/>5. Цикл повторяется",
        difficulty: "hard",
      },
      {
        id: "js-17",
        question: "Что такое прототипное наследование?",
        answer:
          "Прототипное наследование — механизм, при котором объекты наследуют свойства и методы от других объектов через цепочку прототипов.<br/><br/>Основные концепции:<br/>• Каждый объект имеет [[Prototype]]<br/>• Доступ через __proto__ или Object.getPrototypeOf()<br/>• Функции имеют свойство prototype<br/><br/>Создание наследования:<br/>function Animal(name) {<br/>&nbsp;&nbsp;this.name = name;<br/>}<br/>Animal.prototype.speak = function() {<br/>&nbsp;&nbsp;console.log(this.name + ' издаёт звук');<br/>};<br/><br/>function Dog(name) {<br/>&nbsp;&nbsp;Animal.call(this, name);<br/>}<br/>Dog.prototype = Object.create(Animal.prototype);<br/>Dog.prototype.constructor = Dog;<br/><br/>ES6 классы:<br/>• Синтаксический сахар над прототипами<br/>• class, extends, super",
        difficulty: "medium",
      },
      {
        id: "js-18",
        question: "В чём разница между var, let и const?",
        answer:
          "var:<br/>• Функциональная область видимости<br/>• Поднимается с undefined<br/>• Можно переобъявлять<br/>• Можно изменять значение<br/>• Добавляется в window (глобально)<br/><br/>let:<br/>• Блочная область видимости<br/>• Temporal Dead Zone<br/>• Нельзя переобъявлять<br/>• Можно изменять значение<br/>• Не добавляется в window<br/><br/>const:<br/>• Блочная область видимости<br/>• Temporal Dead Zone<br/>• Нельзя переобъявлять<br/>• Нельзя переприсваивать<br/>• Объекты и массивы остаются мутабельными<br/>• Не добавляется в window<br/><br/>Рекомендации:<br/>• Используйте const по умолчанию<br/>• let когда нужно изменить значение<br/>• Избегайте var",
        difficulty: "easy",
      },
      {
        id: "js-19",
        question: "Что такое деструктуризация?",
        answer:
          "Деструктуризация — синтаксис для извлечения значений из массивов и объектов в отдельные переменные.<br/><br/>Массивы:<br/>const [a, b] = [1, 2];<br/>const [first, ...rest] = [1, 2, 3, 4];<br/>const [x, , z] = [1, 2, 3]; // пропуск<br/><br/>Объекты:<br/>const {name, age} = person;<br/>const {name: userName} = user; // переименование<br/>const {name = 'Guest'} = user; // значение по умолчанию<br/><br/>Вложенная деструктуризация:<br/>const {address: {city}} = person;<br/><br/>В параметрах функции:<br/>function greet({name, age}) {<br/>&nbsp;&nbsp;console.log(name, age);<br/>}<br/><br/>Обмен значениями:<br/>[a, b] = [b, a];",
        difficulty: "easy",
      },
      {
        id: "js-20",
        question: "Что такое spread и rest операторы?",
        answer:
          "Spread (...) — разворачивает итерируемые объекты:<br/><br/>Массивы:<br/>const arr = [1, 2, 3];<br/>const newArr = [...arr, 4, 5];<br/>const copy = [...arr];<br/>Math.max(...arr);<br/><br/>Объекты:<br/>const obj = {a: 1, b: 2};<br/>const newObj = {...obj, c: 3};<br/>const clone = {...obj};<br/><br/>Rest (...) — собирает остаточные элементы:<br/><br/>В функциях:<br/>function sum(...numbers) {<br/>&nbsp;&nbsp;return numbers.reduce((a, b) => a + b);<br/>}<br/><br/>В деструктуризации:<br/>const [first, ...rest] = [1, 2, 3, 4];<br/>const {a, ...others} = {a: 1, b: 2, c: 3};<br/><br/>Отличия:<br/>• Spread разворачивает<br/>• Rest собирает",
        difficulty: "easy",
      },
      {
        id: "js-21",
        question: "Что такое Promise и как с ними работать?",
        answer:
          "Promise — объект для работы с асинхронными операциями.<br/><br/>Состояния:<br/>• Pending — ожидание<br/>• Fulfilled — выполнено успешно<br/>• Rejected — отклонено с ошибкой<br/><br/>Создание:<br/>const promise = new Promise((resolve, reject) => {<br/>&nbsp;&nbsp;if (success) resolve(value);<br/>&nbsp;&nbsp;else reject(error);<br/>});<br/><br/>Использование:<br/>promise<br/>&nbsp;&nbsp;.then(result => console.log(result))<br/>&nbsp;&nbsp;.catch(error => console.error(error))<br/>&nbsp;&nbsp;.finally(() => console.log('Готово'));<br/><br/>Методы:<br/>• Promise.all() — все промисы<br/>• Promise.race() — первый выполненный<br/>• Promise.allSettled() — все результаты<br/>• Promise.any() — первый успешный",
        difficulty: "medium",
      },
      {
        id: "js-22",
        question: "Что такое async/await?",
        answer:
          "Async/await — синтаксический сахар для работы с промисами.<br/><br/>async функция:<br/>• Всегда возвращает Promise<br/>• Позволяет использовать await внутри<br/><br/>await:<br/>• Приостанавливает выполнение до разрешения промиса<br/>• Работает только в async функциях<br/>• Возвращает результат промиса<br/><br/>Пример:<br/>async function fetchData() {<br/>&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch(url);<br/>&nbsp;&nbsp;&nbsp;&nbsp;const data = await response.json();<br/>&nbsp;&nbsp;&nbsp;&nbsp;return data;<br/>&nbsp;&nbsp;} catch (error) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.error(error);<br/>&nbsp;&nbsp;}<br/>}<br/><br/>Преимущества:<br/>• Читаемый синхронный стиль<br/>• Удобная обработка ошибок<br/>• Избежание callback hell",
        difficulty: "medium",
      },
      {
        id: "js-23",
        question: "Как работают методы call, apply и bind?",
        answer:
          "call() — вызывает функцию с заданным this:<br/>func.call(thisArg, arg1, arg2);<br/>• Аргументы передаются через запятую<br/>• Вызывает функцию сразу<br/><br/>apply() — вызывает функцию с заданным this:<br/>func.apply(thisArg, [arg1, arg2]);<br/>• Аргументы передаются массивом<br/>• Вызывает функцию сразу<br/><br/>bind() — создаёт новую функцию с привязанным this:<br/>const newFunc = func.bind(thisArg, arg1, arg2);<br/>• Возвращает новую функцию<br/>• Не вызывает сразу<br/>• Можно частично применять аргументы<br/><br/>Примеры:<br/>const person = { name: 'Иван' };<br/>function greet(greeting) {<br/>&nbsp;&nbsp;console.log(`${greeting}, ${this.name}`);<br/>}<br/>greet.call(person, 'Привет');<br/>greet.apply(person, ['Привет']);<br/>const boundGreet = greet.bind(person);<br/>boundGreet('Привет');",
        difficulty: "medium",
      },
      {
        id: "js-24",
        question: "Что такое каррирование функций?",
        answer:
          "Каррирование — преобразование функции с множественными аргументами в последовательность функций с одним аргументом.<br/><br/>Обычная функция:<br/>function add(a, b, c) {<br/>&nbsp;&nbsp;return a + b + c;<br/>}<br/>add(1, 2, 3); // 6<br/><br/>Каррированная функция:<br/>function curry(a) {<br/>&nbsp;&nbsp;return function(b) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return function(c) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a + b + c;<br/>&nbsp;&nbsp;&nbsp;&nbsp;};<br/>&nbsp;&nbsp;};<br/>}<br/>curry(1)(2)(3); // 6<br/><br/>Универсальное каррирование:<br/>const curry = (fn) => {<br/>&nbsp;&nbsp;return function curried(...args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (args.length >= fn.length) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return fn.apply(this, args);<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;return (...nextArgs) => curried(...args, ...nextArgs);<br/>&nbsp;&nbsp;};<br/>};<br/><br/>Применение:<br/>• Частичное применение функций<br/>• Переиспользование логики<br/>• Композиция функций",
        difficulty: "hard",
      },
      {
        id: "js-25",
        question: "Что такое мемоизация?",
        answer:
          "Мемоизация — техника оптимизации, сохраняющая результаты вызовов функции для повторного использования.<br/><br/>Простая мемоизация:<br/>function memoize(fn) {<br/>&nbsp;&nbsp;const cache = {};<br/>&nbsp;&nbsp;return function(...args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const key = JSON.stringify(args);<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (key in cache) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return cache[key];<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;const result = fn.apply(this, args);<br/>&nbsp;&nbsp;&nbsp;&nbsp;cache[key] = result;<br/>&nbsp;&nbsp;&nbsp;&nbsp;return result;<br/>&nbsp;&nbsp;};<br/>}<br/><br/>Пример использования:<br/>const fibonacci = memoize(n => {<br/>&nbsp;&nbsp;if (n <= 1) return n;<br/>&nbsp;&nbsp;return fibonacci(n - 1) + fibonacci(n - 2);<br/>});<br/><br/>Когда применять:<br/>• Чистые функции<br/>• Дорогие вычисления<br/>• Частые повторные вызовы<br/>• Рекурсивные алгоритмы",
        difficulty: "hard",
      },
      {
        id: "js-26",
        question: "Что такое генераторы в JavaScript?",
        answer:
          "Генераторы — функции, которые могут приостанавливать и возобновлять выполнение.<br/><br/>Синтаксис:<br/>function* generator() {<br/>&nbsp;&nbsp;yield 1;<br/>&nbsp;&nbsp;yield 2;<br/>&nbsp;&nbsp;return 3;<br/>}<br/><br/>const gen = generator();<br/>gen.next(); // {value: 1, done: false}<br/>gen.next(); // {value: 2, done: false}<br/>gen.next(); // {value: 3, done: true}<br/><br/>Бесконечные последовательности:<br/>function* infiniteNumbers() {<br/>&nbsp;&nbsp;let i = 0;<br/>&nbsp;&nbsp;while (true) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;yield i++;<br/>&nbsp;&nbsp;}<br/>}<br/><br/>Итерация:<br/>for (const value of generator()) {<br/>&nbsp;&nbsp;console.log(value); // 1, 2<br/>}<br/><br/>Применение:<br/>• Ленивые вычисления<br/>• Итераторы<br/>• Управление асинхронным потоком<br/>• Бесконечные последовательности",
        difficulty: "hard",
      },
      {
        id: "js-27",
        question: "Что такое Symbol в JavaScript?",
        answer:
          "Symbol — примитивный тип для создания уникальных идентификаторов.<br/><br/>Создание:<br/>const sym1 = Symbol();<br/>const sym2 = Symbol('описание');<br/>sym1 === sym2; // false (всегда уникальны)<br/><br/>Глобальные символы:<br/>const globalSym = Symbol.for('app.id');<br/>const sameSym = Symbol.for('app.id');<br/>globalSym === sameSym; // true<br/><br/>Использование в объектах:<br/>const obj = {<br/>&nbsp;&nbsp;[Symbol('private')]: 'секрет',<br/>&nbsp;&nbsp;public: 'открыто'<br/>};<br/><br/>Встроенные символы:<br/>• Symbol.iterator — итератор<br/>• Symbol.toStringTag — [object Type]<br/>• Symbol.hasInstance — instanceof<br/><br/>Особенности:<br/>• Не перечисляются в for...in<br/>• Не видны в Object.keys()<br/>• Используются для приватных свойств",
        difficulty: "medium",
      },
      {
        id: "js-28",
        question: "Что такое Map и Set в JavaScript?",
        answer:
          "Map — коллекция пар ключ-значение:<br/>• Любые типы ключей (включая объекты)<br/>• Сохраняет порядок вставки<br/>• size для получения размера<br/><br/>const map = new Map();<br/>map.set('key', 'value');<br/>map.set(obj, 'object as key');<br/>map.get('key'); // 'value'<br/>map.has('key'); // true<br/>map.delete('key');<br/>map.clear();<br/><br/>Set — коллекция уникальных значений:<br/>• Только уникальные значения<br/>• Сохраняет порядок вставки<br/>• Проверка наличия O(1)<br/><br/>const set = new Set([1, 2, 2, 3]);<br/>set.add(4);<br/>set.has(2); // true<br/>set.delete(2);<br/>set.size; // 3<br/><br/>WeakMap и WeakSet:<br/>• Только объекты как ключи<br/>• Слабые ссылки<br/>• Автоматическая сборка мусора",
        difficulty: "medium",
      },
      {
        id: "js-29",
        question: "Что такое Proxy в JavaScript?",
        answer:
          "Proxy — объект-обёртка для перехвата и переопределения операций с объектом.<br/><br/>Создание:<br/>const proxy = new Proxy(target, handler);<br/><br/>Ловушки (traps):<br/>• get — чтение свойства<br/>• set — запись свойства<br/>• has — проверка in<br/>• deleteProperty — удаление<br/>• apply — вызов функции<br/><br/>Пример валидации:<br/>const user = new Proxy({}, {<br/>&nbsp;&nbsp;set(target, prop, value) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (prop === 'age' && value < 0) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new Error('Возраст не может быть отрицательным');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;target[prop] = value;<br/>&nbsp;&nbsp;&nbsp;&nbsp;return true;<br/>&nbsp;&nbsp;}<br/>});<br/><br/>Применение:<br/>• Валидация данных<br/>• Отслеживание изменений<br/>• Виртуальные свойства<br/>• Логирование доступа",
        difficulty: "hard",
      },
      {
        id: "js-30",
        question: "Что такое Web Workers?",
        answer:
          "Web Workers — API для выполнения JavaScript в фоновых потоках.<br/><br/>Основной поток:<br/>const worker = new Worker('worker.js');<br/>worker.postMessage({cmd: 'start', data: [1, 2, 3]});<br/>worker.onmessage = (e) => {<br/>&nbsp;&nbsp;console.log('Результат:', e.data);<br/>};<br/><br/>Worker файл (worker.js):<br/>self.onmessage = (e) => {<br/>&nbsp;&nbsp;const result = processData(e.data);<br/>&nbsp;&nbsp;self.postMessage(result);<br/>};<br/><br/>Ограничения:<br/>• Нет доступа к DOM<br/>• Нет доступа к window<br/>• Отдельный контекст выполнения<br/><br/>Типы воркеров:<br/>• Dedicated Workers — для одной страницы<br/>• Shared Workers — для нескольких страниц<br/>• Service Workers — для офлайн и кеширования<br/><br/>Применение:<br/>• Тяжёлые вычисления<br/>• Обработка больших данных<br/>• Фоновая синхронизация",
        difficulty: "hard",
      },

      {
        id: "js-31",
        question: "Что такое JSON и его основные методы?",
        answer:
          'JSON (JavaScript Object Notation) — текстовый формат обмена данными, основанный на JavaScript.<br/><br/><strong>Основные методы:</strong><br/><br/>JSON.stringify() — преобразует объект в JSON-строку:<br/>const user = { name: \'Иван\', age: 30 };<br/>const json = JSON.stringify(user);<br/>console.log(json); // \'{"name":"Иван","age":30}\'<br/><br/>JSON.parse() — преобразует JSON-строку в объект:<br/>const json = \'{"name":"Иван","age":30}\';<br/>const user = JSON.parse(json);<br/>console.log(user.name); // Иван<br/><br/><strong>Особенности stringify:</strong><br/>• undefined, функции и Symbol игнорируются<br/>• NaN и Infinity становятся null<br/>• Date становится строкой<br/>• Циклические ссылки вызывают ошибку',
        difficulty: "easy",
      },

      {
        id: "js-32",
        question: "В чём разница между slice и splice?",
        answer:
          "<strong>slice()</strong> — возвращает новый массив, не изменяя исходный:<br/>const arr = [1, 2, 3, 4, 5];<br/>const newArr = arr.slice(1, 3); // [2, 3]<br/>console.log(arr); // [1, 2, 3, 4, 5] — не изменился<br/><br/><strong>splice()</strong> — изменяет исходный массив:<br/>const arr = [1, 2, 3, 4, 5];<br/>const removed = arr.splice(1, 2); // удаляет 2 элемента с индекса 1<br/>console.log(removed); // [2, 3]<br/>console.log(arr); // [1, 4, 5] — изменился<br/><br/><strong>Основные отличия:</strong><br/>• slice не мутирует, splice мутирует<br/>• slice — для копирования части массива<br/>• splice — для удаления/добавления элементов",
        difficulty: "easy",
      },

      {
        id: "js-33",
        question: "Чем отличаются Map и обычный объект?",
        answer:
          "<strong>Ключи:</strong><br/>• Map — любые значения (объекты, функции, примитивы)<br/>• Object — только строки и Symbol<br/><br/><strong>Порядок элементов:</strong><br/>• Map — сохраняет порядок вставки<br/>• Object — не гарантирует порядок<br/><br/><strong>Размер:</strong><br/>• Map — свойство size<br/>• Object — нужно вручную считать ключи<br/><br/><strong>Итерирование:</strong><br/>• Map — напрямую итерируется<br/>• Object — нужен Object.keys()<br/><br/><strong>Производительность:</strong><br/>• Map — лучше при частом добавлении/удалении<br/>• Object — лучше для статичных данных<br/><br/>const map = new Map();<br/>map.set('key', 'value');<br/>map.set(obj, 'object as key');<br/>console.log(map.size); // 2",
        difficulty: "medium",
      },

      {
        id: "js-34",
        question: "Что такое Temporal Dead Zone?",
        answer:
          "Temporal Dead Zone (TDZ) — период между началом блока и инициализацией переменной let/const, когда переменная существует, но к ней нельзя обращаться.<br/><br/>function example() {<br/>&nbsp;&nbsp;// TDZ для переменной x начинается здесь<br/>&nbsp;&nbsp;console.log(x); // ReferenceError<br/>&nbsp;&nbsp;let x = 10; // TDZ заканчивается<br/>&nbsp;&nbsp;console.log(x); // 10<br/>}<br/><br/><strong>Особенности:</strong><br/>• Только для let и const<br/>• var не имеет TDZ (поднимается с undefined)<br/>• Обращение к переменной в TDZ вызывает ReferenceError<br/>• TDZ помогает избежать ошибок<br/><br/>if (true) {<br/>&nbsp;&nbsp;// TDZ для name<br/>&nbsp;&nbsp;console.log(name); // ReferenceError<br/>&nbsp;&nbsp;let name = 'Иван';<br/>}",
        difficulty: "medium",
      },

      {
        id: "js-35",
        question: "Что такое strict mode и зачем он нужен?",
        answer:
          "Strict mode ('use strict') — строгий режим выполнения JavaScript, который включает дополнительные проверки и запреты.<br/><br/><strong>Включение:</strong><br/>'use strict'; // в начале файла или функции<br/><br/><strong>Что запрещает:</strong><br/>• Использование необъявленных переменных<br/>• Удаление переменных/функций/аргументов<br/>• Дублирование параметров функции<br/>• Восьмеричные литералы (0123)<br/>• Запись в неизменяемые свойства<br/>• Использование with<br/>• eval создаёт локальную область<br/><br/><strong>Примеры:</strong><br/>'use strict';<br/>x = 10; // ReferenceError<br/>function test(a, a) {} // SyntaxError<br/><br/><strong>Преимущества:</strong><br/>• Легче писать безопасный код<br/>• Ловит распространённые ошибки<br/>• Запрещает проблемные конструкции",
        difficulty: "easy",
      },

      {
        id: "js-36",
        question: "Почему не стоит использовать eval?",
        answer:
          "eval() выполняет строку как JavaScript код, но это опасно и медленно.<br/><br/><strong>Проблемы безопасности:</strong><br/>• Выполняет любой код, в том числе вредоносный<br/>• Доступ к локальным переменным<br/>• Может изменить scope<br/><br/>// Опасно!<br/>const userInput = 'alert(document.cookie)';<br/>eval(userInput); // выполнит код пользователя<br/><br/><strong>Проблемы производительности:</strong><br/>• Не может быть оптимизирован движком<br/>• Замедляет весь scope<br/>• Запрещает минификацию переменных<br/><br/><strong>Альтернативы:</strong><br/>• Function constructor<br/>• JSON.parse() для данных<br/>• Объекты для динамического доступа к свойствам<br/><br/>// Вместо eval<br/>const obj = { a: 1, b: 2 };<br/>const key = 'a';<br/>console.log(obj[key]); // 1",
        difficulty: "medium",
      },

      {
        id: "js-37",
        question: "Чем отличаются setTimeout и setInterval?",
        answer:
          "<strong>setTimeout</strong> — выполняет функцию один раз через указанное время:<br/>setTimeout(() => {<br/>&nbsp;&nbsp;console.log('Выполнилось один раз');<br/>}, 1000);<br/><br/><strong>setInterval</strong> — выполняет функцию повторно через интервалы:<br/>const intervalId = setInterval(() => {<br/>&nbsp;&nbsp;console.log('Повторяется каждую секунду');<br/>}, 1000);<br/><br/><strong>Остановка выполнения:</strong><br/>const timerId = setTimeout(() => {}, 1000);<br/>clearTimeout(timerId);<br/><br/>const intervalId = setInterval(() => {}, 1000);<br/>clearInterval(intervalId);<br/><br/><strong>Важно:</strong><br/>• Минимальная задержка ~4мс в браузерах<br/>• setInterval не ждёт завершения функции<br/>• Для точных интервалов лучше использовать рекурсивный setTimeout",
        difficulty: "easy",
      },

      {
        id: "js-38",
        question: "Что такое event delegation (делегирование событий)?",
        answer:
          "Event delegation — техника обработки событий, при которой один обработчик на родителе обрабатывает события от дочерних элементов.<br/><br/><strong>Принцип работы:</strong><br/>• Событие всплывает от целевого элемента к родителям<br/>• Обработчик на родителе проверяет event.target<br/>• Обрабатывает только нужные элементы<br/><br/><strong>Пример:</strong><br/>document.querySelector('.list').addEventListener('click', (e) => {<br/>&nbsp;&nbsp;if (e.target.classList.contains('item')) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Клик по элементу:', e.target.textContent);<br/>&nbsp;&nbsp;}<br/>});<br/><br/><strong>Преимущества:</strong><br/>• Меньше обработчиков → меньше памяти<br/>• Работает с динамически добавленными элементами<br/>• Упрощает код<br/><br/><strong>Когда использовать:</strong><br/>• Много однотипных элементов<br/>• Динамическое добавление элементов<br/>• Списки, таблицы, меню",
        difficulty: "medium",
      },

      {
        id: "js-39",
        question: "Что такое polyfill?",
        answer:
          "Polyfill — код, который реализует функциональность, отсутствующую в старых браузерах.<br/><br/><strong>Пример polyfill для Array.includes:</strong><br/>if (!Array.prototype.includes) {<br/>&nbsp;&nbsp;Array.prototype.includes = function(element) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return this.indexOf(element) !== -1;<br/>&nbsp;&nbsp;};<br/>}<br/><br/><strong>Популярные polyfill библиотеки:</strong><br/>• core-js — самая полная<br/>• babel-polyfill — для Babel<br/>• polyfill.io — загружает только нужные<br/><br/><strong>Когда использовать:</strong><br/>• Для поддержки старых браузеров<br/>• При использовании новых API<br/>• Альтернатива транспиляции<br/><br/><strong>Отличие от shim:</strong><br/>• Polyfill — для браузерного API<br/>• Shim — более общий термин",
        difficulty: "medium",
      },

      {
        id: "js-40",
        question: "Что такое default parameters?",
        answer:
          "Default parameters — значения параметров по умолчанию, если аргумент не передан или undefined.<br/><br/><strong>Синтаксис:</strong><br/>function greet(name = 'Гость', greeting = 'Привет') {<br/>&nbsp;&nbsp;return `${greeting}, ${name}!`;<br/>}<br/><br/>console.log(greet()); // Привет, Гость!<br/>console.log(greet('Иван')); // Привет, Иван!<br/>console.log(greet('Иван', 'Здравствуйте')); // Здравствуйте, Иван!<br/><br/><strong>Особенности:</strong><br/>• Работают только для undefined, не для null<br/>• Можно использовать выражения<br/>• Могут ссылаться на предыдущие параметры<br/><br/>function sum(a, b = a * 2) {<br/>&nbsp;&nbsp;return a + b;<br/>}<br/>console.log(sum(5)); // 15<br/><br/><strong>До ES6 использовали:</strong><br/>function greet(name) {<br/>&nbsp;&nbsp;name = name || 'Гость';<br/>}",
        difficulty: "easy",
      },

      {
        id: "js-41",
        question: "Чем отличается for...of от for...in?",
        answer:
          "<strong>for...in</strong> — итерирует по перечисляемым свойствам объекта (ключам):<br/>const obj = { a: 1, b: 2 };<br/>for (let key in obj) {<br/>&nbsp;&nbsp;console.log(key); // 'a', 'b'<br/>}<br/><br/><strong>for...of</strong> — итерирует по значениям итерируемого объекта:<br/>const arr = [1, 2, 3];<br/>for (let value of arr) {<br/>&nbsp;&nbsp;console.log(value); // 1, 2, 3<br/>}<br/><br/><strong>Основные отличия:</strong><br/>• for...in для объектов (ключи)<br/>• for...of для массивов, строк, Map, Set (значения)<br/>• for...in проходит по унаследованным свойствам<br/>• for...of только для итерируемых объектов<br/><br/><strong>Не работает:</strong><br/>const obj = { a: 1 };<br/>for (let value of obj) {} // TypeError: obj is not iterable",
        difficulty: "easy",
      },

      {
        id: "js-42",
        question: "Что такое optional chaining (?.)?",
        answer:
          "Optional chaining (?.) — оператор безопасного доступа к вложенным свойствам объекта.<br/><br/><strong>Проблема без optional chaining:</strong><br/>const user = {};<br/>console.log(user.address.street); // TypeError<br/><br/><strong>Решение:</strong><br/>console.log(user?.address?.street); // undefined<br/><br/><strong>Применение:</strong><br/><br/>Свойства объекта:<br/>const name = user?.profile?.name;<br/><br/>Вызов методов:<br/>const result = obj.method?.();<br/><br/>Доступ к массиву:<br/>const item = arr?.[0];<br/><br/><strong>Важно:</strong><br/>• Возвращает undefined, если встретит null/undefined<br/>• Короткое замыкание — останавливает дальнейшую проверку<br/>• Не заменяет проверку на 0, false, ''<br/><br/>// Комбинация с nullish coalescing<br/>const name = user?.name ?? 'Гость';",
        difficulty: "easy",
      },

      {
        id: "js-43",
        question: "Что такое nullish coalescing operator (??)?",
        answer:
          "Nullish coalescing (??) — возвращает правый операнд, если левый null или undefined.<br/><br/><strong>Отличие от ||:</strong><br/>const count1 = 0 || 10; // 10 (|| для всех falsy)<br/>const count2 = 0 ?? 10; // 0 (?? только для null/undefined)<br/><br/><strong>Примеры:</strong><br/>const name = null ?? 'Гость'; // 'Гость'<br/>const age = undefined ?? 18; // 18<br/>const count = 0 ?? 5; // 0<br/>const empty = '' ?? 'текст'; // ''<br/>const isTrue = false ?? true; // false<br/><br/><strong>Применение:</strong><br/>// Установка значений по умолчанию<br/>const config = {<br/>&nbsp;&nbsp;timeout: settings.timeout ?? 1000,<br/>&nbsp;&nbsp;retries: settings.retries ?? 3<br/>};<br/><br/><strong>С optional chaining:</strong><br/>const userName = user?.name ?? 'Аноним';",
        difficulty: "easy",
      },

      {
        id: "js-44",
        question: "В чём разница между pass by value и pass by reference?",
        answer:
          "<strong>Pass by value (примитивы):</strong><br/>• Создаётся копия значения<br/>• Изменения не влияют на оригинал<br/><br/>let a = 10;<br/>let b = a; // копия значения<br/>b = 20;<br/>console.log(a); // 10 (не изменилось)<br/><br/><strong>Pass by reference (объекты):</strong><br/>• Передаётся ссылка на объект в памяти<br/>• Изменения влияют на оригинал<br/><br/>const obj1 = { name: 'Иван' };<br/>const obj2 = obj1; // ссылка<br/>obj2.name = 'Петр';<br/>console.log(obj1.name); // 'Петр' (изменилось)<br/><br/><strong>Функции:</strong><br/>function change(primitive, object) {<br/>&nbsp;&nbsp;primitive = 100; // не изменит оригинал<br/>&nbsp;&nbsp;object.value = 100; // изменит оригинал<br/>}<br/><br/>let num = 10;<br/>let obj = { value: 10 };<br/>change(num, obj);<br/>console.log(num, obj.value); // 10, 100",
        difficulty: "medium",
      },

      {
        id: "js-45",
        question: "Чем отличаются чистые и нечистые функции?",
        answer:
          "<strong>Чистая функция (Pure function):</strong><br/>• Всегда возвращает одинаковый результат для одинаковых аргументов<br/>• Не имеет побочных эффектов<br/>• Не зависит от внешнего состояния<br/><br/>// Чистая<br/>function add(a, b) {<br/>&nbsp;&nbsp;return a + b;<br/>}<br/><br/>// Чистая<br/>function multiply(arr, n) {<br/>&nbsp;&nbsp;return arr.map(x => x * n);<br/>}<br/><br/><strong>Нечистая функция (Impure function):</strong><br/>• Результат зависит от внешнего состояния<br/>• Имеет побочные эффекты<br/>• Может изменять аргументы<br/><br/>// Нечистая (изменяет внешнюю переменную)<br/>let total = 0;<br/>function addToTotal(n) {<br/>&nbsp;&nbsp;total += n;<br/>}<br/><br/>// Нечистая (зависит от Date)<br/>function getCurrentTime() {<br/>&nbsp;&nbsp;return new Date();<br/>}<br/><br/><strong>Преимущества чистых функций:</strong><br/>• Легче тестировать<br/>• Можно кешировать результаты<br/>• Легче отлаживать<br/>• Предсказуемое поведение",
        difficulty: "medium",
      },

      {
        id: "js-46",
        question: "Что такое debouncing и throttling?",
        answer:
          "<strong>Debouncing</strong> — откладывает выполнение функции до момента, когда прекратятся вызовы на определённое время.<br/><br/>function debounce(func, delay) {<br/>&nbsp;&nbsp;let timeout;<br/>&nbsp;&nbsp;return function(...args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;clearTimeout(timeout);<br/>&nbsp;&nbsp;&nbsp;&nbsp;timeout = setTimeout(() => func.apply(this, args), delay);<br/>&nbsp;&nbsp;};<br/>}<br/><br/>// Поиск: вызывается только после паузы в наборе<br/>const search = debounce((query) => {<br/>&nbsp;&nbsp;console.log('Поиск:', query);<br/>}, 500);<br/><br/><strong>Throttling</strong> — ограничивает частоту вызовов функции.<br/><br/>function throttle(func, delay) {<br/>&nbsp;&nbsp;let isThrottled = false;<br/>&nbsp;&nbsp;return function(...args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (isThrottled) return;<br/>&nbsp;&nbsp;&nbsp;&nbsp;func.apply(this, args);<br/>&nbsp;&nbsp;&nbsp;&nbsp;isThrottled = true;<br/>&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() => isThrottled = false, delay);<br/>&nbsp;&nbsp;};<br/>}<br/><br/>// Скролл: вызывается максимум раз в 100мс<br/>const handleScroll = throttle(() => {<br/>&nbsp;&nbsp;console.log('Скролл');<br/>}, 100);<br/><br/><strong>Когда использовать:</strong><br/>• Debounce: поиск, изменение размера окна, валидация<br/>• Throttle: скролл, ресайз, движение мыши",
        difficulty: "hard",
      },

      {
        id: "js-47",
        question: "Что такое localStorage и sessionStorage?",
        answer:
          "Web Storage API — механизм хранения данных в браузере в формате ключ-значение.<br/><br/><strong>localStorage:</strong><br/>• Данные сохраняются навсегда<br/>• Доступны между вкладками<br/>• Размер ~5-10 MB<br/><br/>localStorage.setItem('user', 'Иван');<br/>console.log(localStorage.getItem('user')); // 'Иван'<br/>localStorage.removeItem('user');<br/>localStorage.clear();<br/><br/><strong>sessionStorage:</strong><br/>• Данные удаляются при закрытии вкладки<br/>• Уникальны для каждой вкладки<br/>• Размер ~5-10 MB<br/><br/>sessionStorage.setItem('token', 'abc123');<br/>console.log(sessionStorage.getItem('token'));<br/><br/><strong>Особенности:</strong><br/>• Только строки (нужно JSON.stringify для объектов)<br/>• Синхронные операции<br/>• Только на клиенте<br/><br/>// Сохранение объекта<br/>const user = { name: 'Иван', age: 30 };<br/>localStorage.setItem('user', JSON.stringify(user));<br/>const saved = JSON.parse(localStorage.getItem('user'));",
        difficulty: "easy",
      },

      {
        id: "js-48",
        question: "Что такое Cookie и чем отличается от Web Storage?",
        answer:
          "<strong>Cookie</strong> — небольшие фрагменты данных, хранимые в браузере.<br/><br/>// Установка cookie<br/>document.cookie = 'username=Иван; max-age=3600; path=/';<br/><br/>// Чтение cookie<br/>console.log(document.cookie);<br/><br/><strong>Параметры cookie:</strong><br/>• expires/max-age — время жизни<br/>• path — путь доступности<br/>• domain — домен<br/>• secure — только HTTPS<br/>• httpOnly — недоступен из JavaScript<br/>• samesite — защита от CSRF<br/><br/><strong>Отличия от Web Storage:</strong><br/><br/>Cookie:<br/>• Размер: 4 KB<br/>• Отправляется на сервер с каждым запросом<br/>• Можно установить время жизни<br/>• Работает со старыми браузерами<br/><br/>Web Storage:<br/>• Размер: 5-10 MB<br/>• Только на клиенте<br/>• Проще API<br/>• Не отправляется на сервер",
        difficulty: "medium",
      },

      {
        id: "js-49",
        question: "Что такое Service Worker?",
        answer:
          "Service Worker — скрипт, работающий в фоне отдельно от веб-страницы, позволяющий реализовать оффлайн-функциональность.<br/><br/><strong>Регистрация:</strong><br/>if ('serviceWorker' in navigator) {<br/>&nbsp;&nbsp;navigator.serviceWorker.register('/sw.js')<br/>&nbsp;&nbsp;&nbsp;&nbsp;.then(reg => console.log('SW registered', reg))<br/>&nbsp;&nbsp;&nbsp;&nbsp;.catch(err => console.log('SW error', err));<br/>}<br/><br/><strong>Основные возможности:</strong><br/>• Кеширование ресурсов<br/>• Оффлайн работа<br/>• Push-уведомления<br/>• Фоновая синхронизация<br/>• Перехват сетевых запросов<br/><br/><strong>Жизненный цикл:</strong><br/>• Installing — установка<br/>• Installed/Waiting — ожидание активации<br/>• Activating — активация<br/>• Activated — активен<br/>• Redundant — заменён новой версией<br/><br/><strong>Ограничения:</strong><br/>• Только HTTPS<br/>• Нет доступа к DOM<br/>• Асинхронные API",
        difficulty: "hard",
      },

      {
        id: "js-50",
        question: "Какие методы есть у массивов для проверки элементов?",
        answer:
          "<strong>includes()</strong> — проверяет наличие элемента:<br/>const arr = [1, 2, 3];<br/>console.log(arr.includes(2)); // true<br/><br/><strong>some()</strong> — проверяет, есть ли хотя бы один элемент, удовлетворяющий условию:<br/>const arr = [1, 2, 3, 4];<br/>console.log(arr.some(x => x > 3)); // true<br/><br/><strong>every()</strong> — проверяет, все ли элементы удовлетворяют условию:<br/>const arr = [1, 2, 3, 4];<br/>console.log(arr.every(x => x > 0)); // true<br/><br/><strong>find()</strong> — возвращает первый найденный элемент:<br/>const arr = [1, 2, 3, 4];<br/>console.log(arr.find(x => x > 2)); // 3<br/><br/><strong>findIndex()</strong> — возвращает индекс первого найденного элемента:<br/>const arr = [1, 2, 3, 4];<br/>console.log(arr.findIndex(x => x > 2)); // 2<br/><br/><strong>indexOf()</strong> — возвращает индекс элемента:<br/>const arr = [1, 2, 3];<br/>console.log(arr.indexOf(2)); // 1",
        difficulty: "easy",
      },

      {
        id: "js-51",
        question: "Что такое Object.keys(), Object.values() и Object.entries()?",
        answer:
          "<strong>Object.keys()</strong> — возвращает массив ключей объекта:<br/>const user = { name: 'Иван', age: 30 };<br/>console.log(Object.keys(user)); // ['name', 'age']<br/><br/><strong>Object.values()</strong> — возвращает массив значений:<br/>const user = { name: 'Иван', age: 30 };<br/>console.log(Object.values(user)); // ['Иван', 30]<br/><br/><strong>Object.entries()</strong> — возвращает массив пар [ключ, значение]:<br/>const user = { name: 'Иван', age: 30 };<br/>console.log(Object.entries(user));<br/>// [['name', 'Иван'], ['age', 30]]<br/><br/><strong>Практическое применение:</strong><br/><br/>// Итерация по объекту<br/>Object.entries(user).forEach(([key, value]) => {<br/>&nbsp;&nbsp;console.log(`${key}: ${value}`);<br/>});<br/><br/>// Создание объекта из массива<br/>const entries = [['name', 'Иван'], ['age', 30]];<br/>const obj = Object.fromEntries(entries);",
        difficulty: "easy",
      },

      {
        id: "js-52",
        question: "Чем отличаются Object.freeze() и Object.seal()?",
        answer:
          "<strong>Object.freeze()</strong> — полностью замораживает объект:<br/>const obj = { name: 'Иван' };<br/>Object.freeze(obj);<br/>obj.name = 'Петр'; // не сработает<br/>obj.age = 30; // не сработает<br/>delete obj.name; // не сработает<br/><br/><strong>Object.seal()</strong> — запечатывает объект:<br/>const obj = { name: 'Иван' };<br/>Object.seal(obj);<br/>obj.name = 'Петр'; // сработает<br/>obj.age = 30; // не сработает<br/>delete obj.name; // не сработает<br/><br/><strong>Основные отличия:</strong><br/><br/>freeze:<br/>• Нельзя изменять значения<br/>• Нельзя добавлять свойства<br/>• Нельзя удалять свойства<br/>• Полная иммутабельность<br/><br/>seal:<br/>• Можно изменять значения<br/>• Нельзя добавлять свойства<br/>• Нельзя удалять свойства<br/><br/><strong>Проверка:</strong><br/>Object.isFrozen(obj);<br/>Object.isSealed(obj);",
        difficulty: "medium",
      },

      {
        id: "js-53",
        question: "Что такое WeakMap и WeakSet?",
        answer:
          "<strong>WeakMap</strong> — коллекция пар ключ-значение, где ключи только объекты и слабо удерживаются:<br/><br/>const wm = new WeakMap();<br/>let obj = { name: 'Иван' };<br/>wm.set(obj, 'some data');<br/>obj = null; // объект удалится из WeakMap автоматически<br/><br/><strong>WeakSet</strong> — коллекция уникальных объектов со слабыми ссылками:<br/><br/>const ws = new WeakSet();<br/>let obj = { name: 'Иван' };<br/>ws.add(obj);<br/>obj = null; // объект удалится из WeakSet<br/><br/><strong>Особенности:</strong><br/>• Ключи/значения только объекты<br/>• Не препятствуют сборке мусора<br/>• Нельзя итерировать<br/>• Нет свойства size<br/>• Нет метода clear()<br/><br/><strong>Применение:</strong><br/>• Хранение приватных данных<br/>• Кеширование без утечек памяти<br/>• Метаданные для объектов<br/><br/>// Приватные данные<br/>const privateData = new WeakMap();<br/>class User {<br/>&nbsp;&nbsp;constructor(name) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;privateData.set(this, { name });<br/>&nbsp;&nbsp;}<br/>}",
        difficulty: "hard",
      },

      {
        id: "js-54",
        question: "Что такое динамический импорт (Dynamic Import)?",
        answer:
          "Dynamic Import — загрузка модулей по требованию с помощью функции import().<br/><br/><strong>Синтаксис:</strong><br/>import('./module.js')<br/>&nbsp;&nbsp;.then(module => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;module.doSomething();<br/>&nbsp;&nbsp;})<br/>&nbsp;&nbsp;.catch(err => console.error(err));<br/><br/><strong>С async/await:</strong><br/>async function loadModule() {<br/>&nbsp;&nbsp;const module = await import('./module.js');<br/>&nbsp;&nbsp;module.doSomething();<br/>}<br/><br/><strong>Условная загрузка:</strong><br/>if (condition) {<br/>&nbsp;&nbsp;const module = await import('./heavy-module.js');<br/>}<br/><br/><strong>Преимущества:</strong><br/>• Уменьшение начального размера бандла<br/>• Загрузка по требованию<br/>• Code splitting<br/>• Условная загрузка модулей<br/><br/><strong>Применение:</strong><br/>• Ленивая загрузка компонентов<br/>• Загрузка полифиллов<br/>• A/B тестирование<br/>• Разделение кода по маршрутам",
        difficulty: "medium",
      },
      {
        id: "js-55",
        question: "Как работают методы preventDefault() и stopPropagation()?",
        answer:
          "<strong>preventDefault()</strong> — отменяет стандартное действие события:<br/><br/>// Отмена перехода по ссылке<br/>link.addEventListener('click', (e) => {<br/>&nbsp;&nbsp;e.preventDefault();<br/>&nbsp;&nbsp;console.log('Переход отменён');<br/>});<br/><br/>// Отмена отправки формы<br/>form.addEventListener('submit', (e) => {<br/>&nbsp;&nbsp;e.preventDefault();<br/>&nbsp;&nbsp;// Своя валидация<br/>});<br/><br/><strong>stopPropagation()</strong> — останавливает всплытие события:<br/><br/>child.addEventListener('click', (e) => {<br/>&nbsp;&nbsp;e.stopPropagation();<br/>&nbsp;&nbsp;console.log('Клик на child');<br/>});<br/><br/>parent.addEventListener('click', () => {<br/>&nbsp;&nbsp;console.log('Не выполнится');<br/>});<br/><br/><strong>stopImmediatePropagation()</strong> — останавливает всплытие и другие обработчики на том же элементе<br/><br/><strong>return false</strong> в обработчике:<br/>• Вызывает preventDefault()<br/>• Вызывает stopPropagation()<br/>• Останавливает выполнение",
        difficulty: "medium",
      },

      {
        id: "js-56",
        question: "Что такое BOM (Browser Object Model)?",
        answer:
          "BOM — объектная модель браузера для взаимодействия с окном браузера.<br/><br/><strong>Главные объекты:</strong><br/><br/><strong>window</strong> — глобальный объект браузера:<br/>window.innerWidth // ширина окна<br/>window.innerHeight // высота окна<br/>window.open('url') // открыть окно<br/>window.close() // закрыть окно<br/><br/><strong>location</strong> — информация о URL:<br/>location.href // полный URL<br/>location.protocol // http: или https:<br/>location.host // домен с портом<br/>location.pathname // путь<br/>location.search // query параметры<br/>location.hash // якорь<br/>location.reload() // перезагрузить<br/><br/><strong>navigator</strong> — информация о браузере:<br/>navigator.userAgent<br/>navigator.language<br/>navigator.onLine // есть ли интернет<br/><br/><strong>history</strong> — история переходов:<br/>history.back() // назад<br/>history.forward() // вперёд<br/>history.go(-2) // на 2 страницы назад<br/><br/><strong>screen</strong> — информация об экране:<br/>screen.width<br/>screen.height",
        difficulty: "easy",
      },

      {
        id: "js-57",
        question: "Что такое Same-Origin Policy?",
        answer:
          "Same-Origin Policy — политика безопасности, ограничивающая взаимодействие между разными источниками.<br/><br/><strong>Источник (origin) определяется тремя компонентами:</strong><br/>• Протокол (http/https)<br/>• Домен (example.com)<br/>• Порт (80, 443, 3000)<br/><br/><strong>Примеры:</strong><br/>https://example.com:443/page1<br/>https://example.com:443/page2 ✅ Same origin<br/><br/>http://example.com ❌ Другой протокол<br/>https://api.example.com ❌ Другой домен<br/>https://example.com:3000 ❌ Другой порт<br/><br/><strong>Что ограничивается:</strong><br/>• Доступ к DOM другого окна<br/>• AJAX запросы к другому домену<br/>• Чтение cookies другого домена<br/><br/><strong>Обход ограничений:</strong><br/>• CORS (Cross-Origin Resource Sharing)<br/>• JSONP (устаревший)<br/>• Proxy сервер<br/>• postMessage API для iframe<br/><br/><strong>CORS пример:</strong><br/>// На сервере<br/>Access-Control-Allow-Origin: https://example.com",
        difficulty: "medium",
      },

      {
        id: "js-58",
        question: "Что такое CORS?",
        answer:
          "CORS (Cross-Origin Resource Sharing) — механизм, позволяющий серверу указать, какие источники могут делать запросы.<br/><br/><strong>Простой запрос:</strong><br/>fetch('https://api.example.com/data')<br/>&nbsp;&nbsp;.then(response => response.json());<br/><br/>// Сервер отвечает с заголовком:<br/>Access-Control-Allow-Origin: *<br/>// или<br/>Access-Control-Allow-Origin: https://mysite.com<br/><br/><strong>Preflight запрос</strong> (OPTIONS) для сложных запросов:<br/>fetch('https://api.example.com/data', {<br/>&nbsp;&nbsp;method: 'POST',<br/>&nbsp;&nbsp;headers: { 'Content-Type': 'application/json' }<br/>});<br/><br/>// Браузер сначала шлёт OPTIONS запрос<br/>// Сервер отвечает:<br/>Access-Control-Allow-Origin: https://mysite.com<br/>Access-Control-Allow-Methods: POST, GET<br/>Access-Control-Allow-Headers: Content-Type<br/><br/><strong>С credentials:</strong><br/>fetch(url, { credentials: 'include' });<br/>// Сервер должен ответить:<br/>Access-Control-Allow-Credentials: true",
        difficulty: "medium",
      },

      {
        id: "js-59",
        question: "Что такое AJAX?",
        answer:
          "AJAX (Asynchronous JavaScript and XML) — технология асинхронного обмена данными с сервером без перезагрузки страницы.<br/><br/><strong>XMLHttpRequest (старый способ):</strong><br/>const xhr = new XMLHttpRequest();<br/>xhr.open('GET', '/api/data');<br/>xhr.onload = function() {<br/>&nbsp;&nbsp;if (xhr.status === 200) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(xhr.responseText);<br/>&nbsp;&nbsp;}<br/>};<br/>xhr.send();<br/><br/><strong>Fetch API (современный способ):</strong><br/>fetch('/api/data')<br/>&nbsp;&nbsp;.then(response => response.json())<br/>&nbsp;&nbsp;.then(data => console.log(data))<br/>&nbsp;&nbsp;.catch(error => console.error(error));<br/><br/><strong>Async/await:</strong><br/>async function getData() {<br/>&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch('/api/data');<br/>&nbsp;&nbsp;&nbsp;&nbsp;const data = await response.json();<br/>&nbsp;&nbsp;&nbsp;&nbsp;return data;<br/>&nbsp;&nbsp;} catch (error) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.error(error);<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Преимущества:</strong><br/>• Нет перезагрузки страницы<br/>• Лучший UX<br/>• Экономия трафика<br/>• Частичное обновление контента",
        difficulty: "easy",
      },

      {
        id: "js-60",
        question: "Что такое Fetch API и его отличия от XMLHttpRequest?",
        answer:
          "<strong>Fetch API</strong> — современный интерфейс для HTTP запросов на основе Promise.<br/><br/><strong>Базовый запрос:</strong><br/>fetch('https://api.example.com/users')<br/>&nbsp;&nbsp;.then(response => response.json())<br/>&nbsp;&nbsp;.then(data => console.log(data));<br/><br/><strong>POST запрос:</strong><br/>fetch('https://api.example.com/users', {<br/>&nbsp;&nbsp;method: 'POST',<br/>&nbsp;&nbsp;headers: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;'Content-Type': 'application/json'<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;body: JSON.stringify({ name: 'Иван' })<br/>});<br/><br/><strong>Отличия от XMLHttpRequest:</strong><br/><br/>Fetch:<br/>• Promise-based<br/>• Более чистый API<br/>• Не отклоняет промис при HTTP ошибках (404, 500)<br/>• Нет встроенного timeout<br/>• Нет отслеживания прогресса загрузки<br/><br/>XMLHttpRequest:<br/>• Callback-based<br/>• Более сложный API<br/>• Событие onerror при ошибках<br/>• Есть timeout<br/>• Есть события progress<br/><br/><strong>Обработка ошибок:</strong><br/>fetch(url)<br/>&nbsp;&nbsp;.then(res => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (!res.ok) throw new Error('HTTP error');<br/>&nbsp;&nbsp;&nbsp;&nbsp;return res.json();<br/>&nbsp;&nbsp;});",
        difficulty: "medium",
      },

      {
        id: "js-61",
        question: "Как отменить Fetch запрос?",
        answer:
          "Для отмены fetch запроса используется AbortController.<br/><br/><strong>Создание контроллера:</strong><br/>const controller = new AbortController();<br/>const signal = controller.signal;<br/><br/><strong>Fetch с signal:</strong><br/>fetch('https://api.example.com/data', { signal })<br/>&nbsp;&nbsp;.then(response => response.json())<br/>&nbsp;&nbsp;.then(data => console.log(data))<br/>&nbsp;&nbsp;.catch(err => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (err.name === 'AbortError') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Запрос отменён');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;});<br/><br/><strong>Отмена запроса:</strong><br/>controller.abort();<br/><br/><strong>Практический пример:</strong><br/>let controller;<br/><br/>function searchUsers(query) {<br/>&nbsp;&nbsp;// Отменяем предыдущий запрос<br/>&nbsp;&nbsp;if (controller) controller.abort();<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;controller = new AbortController();<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;return fetch(`/api/users?q=${query}`, {<br/>&nbsp;&nbsp;&nbsp;&nbsp;signal: controller.signal<br/>&nbsp;&nbsp;});<br/>}<br/><br/><strong>Timeout для fetch:</strong><br/>const controller = new AbortController();<br/>setTimeout(() => controller.abort(), 5000);<br/>fetch(url, { signal: controller.signal });",
        difficulty: "medium",
      },

      {
        id: "js-62",
        question: "Что такое Regular Expressions (RegExp)?",
        answer:
          "Regular Expressions — шаблоны для поиска и замены текста.<br/><br/><strong>Создание:</strong><br/>const regex1 = /pattern/flags;<br/>const regex2 = new RegExp('pattern', 'flags');<br/><br/><strong>Флаги:</strong><br/>• g — глобальный поиск<br/>• i — игнорировать регистр<br/>• m — многострочный режим<br/>• s — точка соответствует переносу строки<br/>• u — unicode<br/>• y — sticky<br/><br/><strong>Методы строк:</strong><br/>const str = 'Hello World';<br/>str.match(/hello/i); // ['Hello']<br/>str.search(/world/i); // 6<br/>str.replace(/world/i, 'JS'); // 'Hello JS'<br/>str.split(/\\s/); // ['Hello', 'World']<br/><br/><strong>Методы RegExp:</strong><br/>const regex = /\\d+/g;<br/>regex.test('123'); // true<br/>regex.exec('abc123def'); // ['123']<br/><br/><strong>Спецсимволы:</strong><br/>• \\d — цифра<br/>• \\w — буква, цифра, _<br/>• \\s — пробельный символ<br/>• . — любой символ<br/>• + — один или более<br/>• * — ноль или более<br/>• ? — ноль или один<br/>• ^ — начало строки<br/>• $ — конец строки",
        difficulty: "medium",
      },

      {
        id: "js-63",
        question: "Как проверить email с помощью RegExp?",
        answer:
          "<strong>Простая проверка:</strong><br/>const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;<br/><br/>function validateEmail(email) {<br/>&nbsp;&nbsp;return emailRegex.test(email);<br/>}<br/><br/>console.log(validateEmail('user@example.com')); // true<br/>console.log(validateEmail('invalid.email')); // false<br/><br/><strong>Более строгая проверка:</strong><br/>const strictEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;<br/><br/><strong>RFC 5322 совместимая (очень сложная):</strong><br/>const rfcEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;<br/><br/><strong>Важно:</strong><br/>• RegExp не заменяет серверную валидацию<br/>• Не ловит все невалидные email<br/>• Может отклонить валидные экзотические email<br/>• Лучше использовать HTML5 type='email' + серверная проверка",
        difficulty: "easy",
      },

      {
        id: "js-64",
        question: "Что такое Error handling и какие типы ошибок бывают?",
        answer:
          "<strong>Try-catch-finally:</strong><br/>try {<br/>&nbsp;&nbsp;// Код который может вызвать ошибку<br/>&nbsp;&nbsp;throw new Error('Что-то пошло не так');<br/>} catch (error) {<br/>&nbsp;&nbsp;// Обработка ошибки<br/>&nbsp;&nbsp;console.error(error.name); // 'Error'<br/>&nbsp;&nbsp;console.error(error.message); // 'Что-то пошло не так'<br/>} finally {<br/>&nbsp;&nbsp;// Выполнится в любом случае<br/>}<br/><br/><strong>Типы встроенных ошибок:</strong><br/><br/><strong>Error</strong> — базовая ошибка<br/><strong>SyntaxError</strong> — синтаксическая ошибка<br/><strong>ReferenceError</strong> — обращение к несуществующей переменной<br/><strong>TypeError</strong> — неверный тип<br/><strong>RangeError</strong> — число вне допустимого диапазона<br/><strong>URIError</strong> — неверное использование URI функций<br/><br/><strong>Создание своих ошибок:</strong><br/>class ValidationError extends Error {<br/>&nbsp;&nbsp;constructor(message) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;super(message);<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.name = 'ValidationError';<br/>&nbsp;&nbsp;}<br/>}<br/><br/>throw new ValidationError('Неверные данные');<br/><br/><strong>Обработка в async:</strong><br/>try {<br/>&nbsp;&nbsp;await fetchData();<br/>} catch (error) {<br/>&nbsp;&nbsp;console.error(error);<br/>}",
        difficulty: "easy",
      },

      {
        id: "js-65",
        question: "Что такое TypeScript и его преимущества?",
        answer:
          "TypeScript — типизированное надмножество JavaScript, компилируемое в обычный JS.<br/><br/><strong>Основные возможности:</strong><br/><br/>Статическая типизация:<br/>function greet(name: string): string {<br/>&nbsp;&nbsp;return `Hello, ${name}`;<br/>}<br/><br/>Интерфейсы:<br/>interface User {<br/>&nbsp;&nbsp;name: string;<br/>&nbsp;&nbsp;age: number;<br/>}<br/><br/>const user: User = {<br/>&nbsp;&nbsp;name: 'Иван',<br/>&nbsp;&nbsp;age: 30<br/>};<br/><br/>Enums:<br/>enum Color {<br/>&nbsp;&nbsp;Red,<br/>&nbsp;&nbsp;Green,<br/>&nbsp;&nbsp;Blue<br/>}<br/><br/>Generics:<br/>function identity<T>(arg: T): T {<br/>&nbsp;&nbsp;return arg;<br/>}<br/><br/><strong>Преимущества:</strong><br/>• Раннее обнаружение ошибок<br/>• Лучшая автодополнение в IDE<br/>• Рефакторинг безопаснее<br/>• Документация через типы<br/>• Легче поддерживать большие проекты<br/><br/><strong>Компиляция:</strong><br/>tsc file.ts // → file.js",
        difficulty: "medium",
      },

      {
        id: "js-66",
        question: "Что такое модули в JavaScript (ES6 modules)?",
        answer:
          "<strong>Export:</strong><br/><br/>// Named export<br/>export const name = 'Иван';<br/>export function greet() {}<br/><br/>// или<br/>const name = 'Иван';<br/>function greet() {}<br/>export { name, greet };<br/><br/>// Default export<br/>export default function() {}<br/>// или<br/>export default class User {}<br/><br/><strong>Import:</strong><br/><br/>// Named import<br/>import { name, greet } from './module.js';<br/><br/>// Переименование<br/>import { name as userName } from './module.js';<br/><br/>// Все экспорты<br/>import * as utils from './utils.js';<br/><br/>// Default import<br/>import MyFunction from './module.js';<br/><br/>// Смешанный импорт<br/>import React, { useState } from 'react';<br/><br/><strong>Особенности:</strong><br/>• Статический анализ<br/>• Tree shaking<br/>• Выполняются один раз<br/>• Строгий режим по умолчанию<br/>• Асинхронная загрузка<br/><br/><strong>В HTML:</strong><br/>&lt;script type='module' src='main.js'&gt;&lt;/script&gt;",
        difficulty: "easy",
      },

      {
        id: "js-67",
        question: "В чём разница между CommonJS и ES6 modules?",
        answer:
          "<strong>CommonJS (Node.js):</strong><br/><br/>// Export<br/>module.exports = function() {};<br/>// или<br/>exports.name = 'value';<br/><br/>// Import<br/>const myModule = require('./module');<br/><br/><strong>ES6 Modules:</strong><br/><br/>// Export<br/>export default function() {}<br/>export const name = 'value';<br/><br/>// Import<br/>import myModule from './module.js';<br/>import { name } from './module.js';<br/><br/><strong>Ключевые отличия:</strong><br/><br/>CommonJS:<br/>• Синхронная загрузка<br/>• Динамический (можно в условиях)<br/>• Копирование значений<br/>• require() — функция<br/>• Используется в Node.js<br/><br/>ES6 Modules:<br/>• Асинхронная загрузка<br/>• Статический (определяется при парсинге)<br/>• Live bindings (живые связи)<br/>• import — ключевое слово<br/>• Стандарт ECMAScript<br/>• Tree shaking<br/><br/><strong>Совместимость:</strong><br/>// В Node.js можно использовать ES6<br/>// добавив в package.json:<br/>\"type\": \"module\"",
        difficulty: "medium",
      },

      {
        id: "js-68",
        question: "Что такое Babel и для чего он нужен?",
        answer:
          'Babel — транспайлер, преобразующий современный JavaScript в код, совместимый со старыми браузерами.<br/><br/><strong>Что делает Babel:</strong><br/>• Преобразует ES6+ в ES5<br/>• Поддерживает экспериментальные фичи<br/>• Добавляет polyfills<br/>• Трансформирует JSX (React)<br/>• Минификация кода<br/><br/><strong>Пример трансформации:</strong><br/><br/>// Input (ES6)<br/>const greet = (name) => `Hello, ${name}`;<br/><br/>// Output (ES5)<br/>var greet = function(name) {<br/>&nbsp;&nbsp;return \'Hello, \' + name;<br/>};<br/><br/><strong>Установка:</strong><br/>npm install --save-dev @babel/core @babel/cli @babel/preset-env<br/><br/><strong>Конфигурация (.babelrc):</strong><br/>{<br/>&nbsp;&nbsp;"presets": ["@babel/preset-env"]<br/>}<br/><br/><strong>Использование:</strong><br/>babel src --out-dir dist<br/><br/><strong>Плагины:</strong><br/>• @babel/plugin-transform-arrow-functions<br/>• @babel/plugin-proposal-class-properties<br/>• И множество других',
        difficulty: "easy",
      },

      {
        id: "js-69",
        question: "Что такое Webpack и зачем он нужен?",
        answer:
          "Webpack — сборщик модулей (module bundler), объединяющий файлы проекта в оптимизированные бандлы.<br/><br/><strong>Основные возможности:</strong><br/>• Сборка модулей в один файл<br/>• Загрузка любых типов файлов (JS, CSS, images)<br/>• Code splitting<br/>• Hot Module Replacement<br/>• Минификация и оптимизация<br/>• Dev server с live reload<br/><br/><strong>Базовая конфигурация:</strong><br/>module.exports = {<br/>&nbsp;&nbsp;entry: './src/index.js',<br/>&nbsp;&nbsp;output: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;filename: 'bundle.js',<br/>&nbsp;&nbsp;&nbsp;&nbsp;path: path.resolve(__dirname, 'dist')<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;module: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;rules: [<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test: /\\.js$/,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;use: 'babel-loader'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test: /\\.css$/,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;use: ['style-loader', 'css-loader']<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;]<br/>&nbsp;&nbsp;}<br/>};<br/><br/><strong>Альтернативы:</strong><br/>• Vite<br/>• Rollup<br/>• Parcel<br/>• esbuild",
        difficulty: "medium",
      },

      {
        id: "js-70",
        question: "Что такое Tree Shaking?",
        answer:
          "Tree Shaking — удаление неиспользуемого кода при сборке проекта.<br/><br/><strong>Как работает:</strong><br/>• Анализирует импорты/экспорты<br/>• Определяет неиспользуемый код<br/>• Удаляет его из финального бандла<br/><br/><strong>Пример:</strong><br/><br/>// utils.js<br/>export function used() {<br/>&nbsp;&nbsp;return 'Используется';<br/>}<br/><br/>export function unused() {<br/>&nbsp;&nbsp;return 'НЕ используется';<br/>}<br/><br/>// main.js<br/>import { used } from './utils.js';<br/>used();<br/><br/>// В финальном бандле unused() не будет<br/><br/><strong>Требования:</strong><br/>• ES6 модули (не CommonJS)<br/>• Статические импорты<br/>• Режим production<br/><br/><strong>Webpack конфиг:</strong><br/>module.exports = {<br/>&nbsp;&nbsp;mode: 'production',<br/>&nbsp;&nbsp;optimization: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;usedExports: true<br/>&nbsp;&nbsp;}<br/>};<br/><br/><strong>Преимущества:</strong><br/>• Меньший размер бандла<br/>• Быстрая загрузка<br/>• Лучшая производительность",
        difficulty: "medium",
      },

      {
        id: "js-71",
        question: "Что такое Progressive Web App (PWA)?",
        answer:
          'PWA — веб-приложения с возможностями нативных приложений.<br/><br/><strong>Ключевые характеристики:</strong><br/>• Работают офлайн<br/>• Устанавливаются на устройство<br/>• Push-уведомления<br/>• Доступ с домашнего экрана<br/>• Быстрая загрузка<br/>• Responsive дизайн<br/><br/><strong>Технологии:</strong><br/><br/><strong>Service Worker</strong> — для офлайн работы:<br/>if (\'serviceWorker\' in navigator) {<br/>&nbsp;&nbsp;navigator.serviceWorker.register(\'/sw.js\');<br/>}<br/><br/><strong>Web App Manifest</strong> — метаданные приложения:<br/>{<br/>&nbsp;&nbsp;"name": "My App",<br/>&nbsp;&nbsp;"short_name": "App",<br/>&nbsp;&nbsp;"start_url": "/",<br/>&nbsp;&nbsp;"display": "standalone",<br/>&nbsp;&nbsp;"icons": [...]<br/>}<br/><br/><strong>Cache API</strong> — кеширование ресурсов<br/><strong>Fetch API</strong> — сетевые запросы<br/><strong>Push API</strong> — уведомления<br/><br/><strong>Преимущества:</strong><br/>• Одна кодовая база<br/>• SEO-friendly<br/>• Не нужен App Store<br/>• Меньше размер<br/>• Автообновление',
        difficulty: "hard",
      },

      {
        id: "js-72",
        question: "Что такое Intersection Observer API?",
        answer:
          "Intersection Observer API — асинхронное отслеживание пересечения элемента с viewport или родителем.<br/><br/><strong>Создание:</strong><br/>const observer = new IntersectionObserver((entries) => {<br/>&nbsp;&nbsp;entries.forEach(entry => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (entry.isIntersecting) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Элемент виден');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;});<br/>}, {<br/>&nbsp;&nbsp;threshold: 0.5 // 50% элемента видно<br/>});<br/><br/><strong>Наблюдение за элементом:</strong><br/>const target = document.querySelector('.my-element');<br/>observer.observe(target);<br/><br/><strong>Опции:</strong><br/>{<br/>&nbsp;&nbsp;root: null, // viewport по умолчанию<br/>&nbsp;&nbsp;rootMargin: '0px', // отступы<br/>&nbsp;&nbsp;threshold: [0, 0.5, 1] // массив порогов<br/>}<br/><br/><strong>Применение:</strong><br/>• Lazy loading изображений<br/>• Бесконечный скролл<br/>• Анимации при появлении<br/>• Аналитика видимости<br/>• Автозапуск видео<br/><br/><strong>Остановка наблюдения:</strong><br/>observer.unobserve(target);<br/>observer.disconnect();",
        difficulty: "medium",
      },

      {
        id: "js-73",
        question: "Что такое requestAnimationFrame?",
        answer:
          "requestAnimationFrame — метод для оптимизированной анимации, синхронизированной с частотой обновления экрана (~60 FPS).<br/><br/><strong>Базовое использование:</strong><br/>function animate() {<br/>&nbsp;&nbsp;// Анимационная логика<br/>&nbsp;&nbsp;element.style.left = position + 'px';<br/>&nbsp;&nbsp;position++;<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;if (position < 500) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;requestAnimationFrame(animate);<br/>&nbsp;&nbsp;}<br/>}<br/><br/>requestAnimationFrame(animate);<br/><br/><strong>Отмена анимации:</strong><br/>const animationId = requestAnimationFrame(animate);<br/>cancelAnimationFrame(animationId);<br/><br/><strong>С временными метками:</strong><br/>function animate(timestamp) {<br/>&nbsp;&nbsp;const elapsed = timestamp - startTime;<br/>&nbsp;&nbsp;// Используем elapsed для плавности<br/>&nbsp;&nbsp;requestAnimationFrame(animate);<br/>}<br/><br/>const startTime = performance.now();<br/>requestAnimationFrame(animate);<br/><br/><strong>Преимущества над setInterval:</strong><br/>• Оптимизировано браузером<br/>• Пауза при неактивной вкладке<br/>• Синхронизация с экраном<br/>• Плавная анимация<br/>• Экономия батареи<br/><br/><strong>Применение:</strong><br/>• Анимации<br/>• Игры<br/>• Визуализация данных",
        difficulty: "medium",
      },

      {
        id: "js-74",
        question: "Что такое MutationObserver?",
        answer:
          "MutationObserver — API для отслеживания изменений в DOM дереве.<br/><br/><strong>Создание наблюдателя:</strong><br/>const observer = new MutationObserver((mutations) => {<br/>&nbsp;&nbsp;mutations.forEach(mutation => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Тип изменения:', mutation.type);<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Изменённые узлы:', mutation.addedNodes);<br/>&nbsp;&nbsp;});<br/>});<br/><br/><strong>Запуск наблюдения:</strong><br/>const config = {<br/>&nbsp;&nbsp;childList: true, // дочерние элементы<br/>&nbsp;&nbsp;attributes: true, // атрибуты<br/>&nbsp;&nbsp;characterData: true, // текстовое содержимое<br/>&nbsp;&nbsp;subtree: true, // все потомки<br/>&nbsp;&nbsp;attributeOldValue: true, // старые значения<br/>&nbsp;&nbsp;characterDataOldValue: true<br/>};<br/><br/>observer.observe(targetNode, config);<br/><br/><strong>Остановка:</strong><br/>observer.disconnect();<br/><br/><strong>Применение:</strong><br/>• Реакция на динамические изменения<br/>• Отслеживание пользовательских действий<br/>• Синхронизация данных<br/>• Плагины и расширения<br/><br/><strong>Пример — lazy loading:</strong><br/>observer.observe(document.body, {<br/>&nbsp;&nbsp;childList: true,<br/>&nbsp;&nbsp;subtree: true<br/>});",
        difficulty: "medium",
      },

      {
        id: "js-75",
        question: "Что такое Proxy и Reflect?",
        answer:
          "<strong>Proxy</strong> — объект-обёртка для перехвата операций с другим объектом.<br/><br/><strong>Reflect</strong> — встроенный объект с методами для операций с объектами.<br/><br/><strong>Создание Proxy:</strong><br/>const target = { name: 'Иван' };<br/><br/>const handler = {<br/>&nbsp;&nbsp;get(target, prop) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Чтение ${prop}`);<br/>&nbsp;&nbsp;&nbsp;&nbsp;return Reflect.get(target, prop);<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;set(target, prop, value) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Запись ${prop} = ${value}`);<br/>&nbsp;&nbsp;&nbsp;&nbsp;return Reflect.set(target, prop, value);<br/>&nbsp;&nbsp;}<br/>};<br/><br/>const proxy = new Proxy(target, handler);<br/><br/><strong>Ловушки (traps):</strong><br/>• get — чтение свойства<br/>• set — запись свойства<br/>• has — оператор in<br/>• deleteProperty — delete<br/>• apply — вызов функции<br/>• construct — new<br/><br/><strong>Reflect методы:</strong><br/>Reflect.get(obj, 'prop')<br/>Reflect.set(obj, 'prop', value)<br/>Reflect.has(obj, 'prop')<br/>Reflect.deleteProperty(obj, 'prop')<br/><br/><strong>Применение:</strong><br/>• Валидация данных<br/>• Виртуальные свойства<br/>• Логирование<br/>• Реактивность (Vue 3)",
        difficulty: "hard",
      },

      {
        id: "js-76",
        question: "Что такое BigInt?",
        answer:
          "BigInt — примитивный тип для работы с целыми числами произвольной точности.<br/><br/><strong>Создание:</strong><br/>const bigInt1 = 1234567890123456789012345678901234567890n;<br/>const bigInt2 = BigInt('1234567890123456789012345678901234567890');<br/><br/><strong>Операции:</strong><br/>const a = 10n;<br/>const b = 20n;<br/><br/>console.log(a + b); // 30n<br/>console.log(a * b); // 200n<br/>console.log(b / a); // 2n<br/>console.log(b % a); // 0n<br/>console.log(a ** b); // возведение в степень<br/><br/><strong>Сравнение:</strong><br/>1n === 1 // false (разные типы)<br/>1n == 1 // true<br/>2n > 1 // true<br/><br/><strong>Ограничения:</strong><br/>• Нельзя смешивать с Number<br/>• Нельзя использовать Math методы<br/>• Деление округляется вниз<br/>• Нет десятичной части<br/><br/><strong>Преобразование:</strong><br/>Number(10n) // 10<br/>BigInt(10) // 10n<br/><br/><strong>Применение:</strong><br/>• Криптография<br/>• Точные финансовые расчёты<br/>• Большие числа<br/>• ID из баз данных",
        difficulty: "medium",
      },

      {
        id: "js-77",
        question: "Что такое Optional Catch Binding?",
        answer:
          "Optional Catch Binding (ES2019) — возможность опустить параметр error в блоке catch.<br/><br/><strong>Старый способ (обязательный параметр):</strong><br/>try {<br/>&nbsp;&nbsp;JSON.parse(text);<br/>} catch (error) {<br/>&nbsp;&nbsp;// error не используется<br/>&nbsp;&nbsp;console.log('Ошибка парсинга');<br/>}<br/><br/><strong>Новый способ (ES2019):</strong><br/>try {<br/>&nbsp;&nbsp;JSON.parse(text);<br/>} catch {<br/>&nbsp;&nbsp;// Нет параметра error<br/>&nbsp;&nbsp;console.log('Ошибка парсинга');<br/>}<br/><br/><strong>Когда использовать:</strong><br/>• Детали ошибки не нужны<br/>• Простое логирование<br/>• Fallback значения<br/><br/><strong>Пример с localStorage:</strong><br/>let data;<br/>try {<br/>&nbsp;&nbsp;data = JSON.parse(localStorage.getItem('data'));<br/>} catch {<br/>&nbsp;&nbsp;data = {}; // дефолтное значение<br/>}<br/><br/><strong>Браузерная поддержка:</strong><br/>• Chrome 66+<br/>• Firefox 58+<br/>• Safari 11.1+<br/>• Node.js 10+",
        difficulty: "easy",
      },

      {
        id: "js-78",
        question: "Что такое import.meta?",
        answer:
          "import.meta — объект с метаинформацией о текущем модуле.<br/><br/><strong>Основное свойство — url:</strong><br/>console.log(import.meta.url);<br/>// 'file:///home/user/project/module.js'<br/><br/><strong>Получение директории модуля:</strong><br/>const moduleDir = new URL('.', import.meta.url).pathname;<br/><br/><strong>Загрузка ресурсов относительно модуля:</strong><br/>const imageUrl = new URL('./image.png', import.meta.url).href;<br/>const img = document.createElement('img');<br/>img.src = imageUrl;<br/><br/><strong>В браузере:</strong><br/>// https://example.com/js/module.js<br/>console.log(import.meta.url);<br/>// 'https://example.com/js/module.js'<br/><br/><strong>В Node.js:</strong><br/>// file:///path/to/module.js<br/>console.log(import.meta.url);<br/><br/><strong>Применение:</strong><br/>• Определение пути к модулю<br/>• Загрузка ресурсов<br/>• Относительные импорты<br/>• Динамическая конфигурация<br/><br/><strong>Поддержка:</strong><br/>• Только в ES6 модулях<br/>• Не работает с CommonJS",
        difficulty: "medium",
      },

      {
        id: "js-79",
        question: "Что такое Numeric Separators?",
        answer:
          "Numeric Separators (ES2021) — использование символа _ для улучшения читаемости больших чисел.<br/><br/><strong>Примеры:</strong><br/>// Обычные числа<br/>const billion = 1_000_000_000;<br/>const bytes = 0b1111_1111; // бинарные<br/>const hex = 0xFF_FF_FF; // hex<br/><br/>// Десятичные числа<br/>const price = 123_456.78;<br/>const pi = 3.141_592_653;<br/><br/>// BigInt<br/>const bigNumber = 1_000_000_000_000n;<br/><br/><strong>Правила:</strong><br/>• Нельзя в начале или конце<br/>• Нельзя подряд несколько<br/>• Нельзя рядом с точкой<br/>• Только между цифрами<br/><br/><strong>Неправильно:</strong><br/>_1000 // ❌<br/>1000_ // ❌<br/>1__000 // ❌<br/>3._14 // ❌<br/><br/><strong>При парсинге игнорируются:</strong><br/>Number('1_000') // NaN<br/>parseInt('1_000') // 1<br/><br/><strong>Применение:</strong><br/>• Большие числа<br/>• Финансовые данные<br/>• Бинарные маски<br/>• Улучшение читаемости",
        difficulty: "easy",
      },

      {
        id: "js-80",
        question: "Что такое Logical Assignment Operators?",
        answer:
          "Logical Assignment Operators (ES2021) — комбинация логических операторов с присваиванием.<br/><br/><strong>Операторы:</strong><br/><br/><strong>||= (OR assignment):</strong><br/>// Присваивает, если falsy<br/>x ||= y<br/>// Эквивалент:<br/>x || (x = y)<br/><br/>let name;<br/>name ||= 'Гость'; // 'Гость'<br/><br/><strong>&&= (AND assignment):</strong><br/>// Присваивает, если truthy<br/>x &&= y<br/>// Эквивалент:<br/>x && (x = y)<br/><br/>let user = { name: 'Иван' };<br/>user.name &&= user.name.toUpperCase(); // 'ИВАН'<br/><br/><strong>??= (Nullish assignment):</strong><br/>// Присваивает, если null или undefined<br/>x ??= y<br/>// Эквивалент:<br/>x ?? (x = y)<br/><br/>let count = 0;<br/>count ??= 10; // count остаётся 0<br/><br/>let value;<br/>value ??= 42; // value становится 42<br/><br/><strong>Применение:</strong><br/>• Установка значений по умолчанию<br/>• Условное обновление<br/>• Более лаконичный код",
        difficulty: "medium",
      },
      {
        id: "js-81",
        question: "Что такое Promise.allSettled()?",
        answer:
          "Promise.allSettled() — ждёт завершения всех промисов независимо от их статуса (fulfilled или rejected).<br/><br/><strong>Синтаксис:</strong><br/>Promise.allSettled([promise1, promise2, promise3])<br/>&nbsp;&nbsp;.then(results => console.log(results));<br/><br/><strong>Возвращаемое значение:</strong><br/>// Массив объектов со статусом каждого промиса<br/>[<br/>&nbsp;&nbsp;{ status: 'fulfilled', value: 'результат 1' },<br/>&nbsp;&nbsp;{ status: 'rejected', reason: 'ошибка' },<br/>&nbsp;&nbsp;{ status: 'fulfilled', value: 'результат 3' }<br/>]<br/><br/><strong>Пример:</strong><br/>const promises = [<br/>&nbsp;&nbsp;fetch('/api/user'),<br/>&nbsp;&nbsp;fetch('/api/posts'),<br/>&nbsp;&nbsp;fetch('/api/invalid') // может упасть<br/>];<br/><br/>Promise.allSettled(promises).then(results => {<br/>&nbsp;&nbsp;results.forEach(result => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (result.status === 'fulfilled') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Успех:', result.value);<br/>&nbsp;&nbsp;&nbsp;&nbsp;} else {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Ошибка:', result.reason);<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;});<br/>});<br/><br/><strong>Отличие от Promise.all():</strong><br/>• Promise.all() — отклоняется при первой ошибке<br/>• Promise.allSettled() — всегда успешен",
        difficulty: "medium",
      },

      {
        id: "js-82",
        question: "Что такое Promise.any()?",
        answer:
          "Promise.any() — возвращает первый успешно выполненный промис. Отклоняется только если все промисы отклонены.<br/><br/><strong>Синтаксис:</strong><br/>Promise.any([promise1, promise2, promise3])<br/>&nbsp;&nbsp;.then(result => console.log(result))<br/>&nbsp;&nbsp;.catch(error => console.error(error));<br/><br/><strong>Пример:</strong><br/>const promises = [<br/>&nbsp;&nbsp;fetch('https://api1.com').then(() => 'API 1'),<br/>&nbsp;&nbsp;fetch('https://api2.com').then(() => 'API 2'),<br/>&nbsp;&nbsp;fetch('https://api3.com').then(() => 'API 3')<br/>];<br/><br/>Promise.any(promises)<br/>&nbsp;&nbsp;.then(result => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Первый успешный:', result);<br/>&nbsp;&nbsp;})<br/>&nbsp;&nbsp;.catch(error => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;// AggregateError: All promises were rejected<br/>&nbsp;&nbsp;});<br/><br/><strong>Применение:</strong><br/>• Запросы к нескольким серверам<br/>• Получение данных из fastest источника<br/>• Fallback стратегии<br/><br/><strong>Сравнение методов Promise:</strong><br/>• Promise.all() — все или ничего<br/>• Promise.race() — первый завершённый<br/>• Promise.any() — первый успешный<br/>• Promise.allSettled() — все результаты",
        difficulty: "medium",
      },

      {
        id: "js-83",
        question: "Что такое String.prototype.replaceAll()?",
        answer:
          "replaceAll() (ES2021) — заменяет все вхождения подстроки или паттерна в строке.<br/><br/><strong>С подстрокой:</strong><br/>const str = 'hello world, hello universe';<br/>const result = str.replaceAll('hello', 'hi');<br/>console.log(result); // 'hi world, hi universe'<br/><br/><strong>С RegExp (нужен флаг g):</strong><br/>const str = 'hello world, hello universe';<br/>const result = str.replaceAll(/hello/g, 'hi');<br/>console.log(result); // 'hi world, hi universe'<br/><br/><strong>С функцией:</strong><br/>const str = 'abc123def456';<br/>const result = str.replaceAll(/\\d+/g, (match) => {<br/>&nbsp;&nbsp;return Number(match) * 2;<br/>});<br/>console.log(result); // 'abc246def912'<br/><br/><strong>До ES2021 использовали:</strong><br/>// С глобальным regex<br/>str.replace(/hello/g, 'hi');<br/><br/>// Или split + join<br/>str.split('hello').join('hi');<br/><br/><strong>Важно:</strong><br/>• Не изменяет исходную строку<br/>• Возвращает новую строку",
        difficulty: "easy",
      },

      {
        id: "js-84",
        question: "Что такое WeakRef и FinalizationRegistry?",
        answer:
          "<strong>WeakRef</strong> — слабая ссылка на объект, не препятствующая сборке мусора.<br/><br/>const obj = { data: 'important' };<br/>const weakRef = new WeakRef(obj);<br/><br/>// Получение объекта<br/>const target = weakRef.deref();<br/>if (target) {<br/>&nbsp;&nbsp;console.log(target.data);<br/>} else {<br/>&nbsp;&nbsp;console.log('Объект удалён');<br/>}<br/><br/><strong>FinalizationRegistry</strong> — выполняет код после удаления объекта сборщиком мусора.<br/><br/>const registry = new FinalizationRegistry((value) => {<br/>&nbsp;&nbsp;console.log(`Объект ${value} удалён`);<br/>});<br/><br/>let obj = { name: 'test' };<br/>registry.register(obj, 'test-object');<br/><br/>obj = null; // После GC выполнится callback<br/><br/><strong>Применение:</strong><br/>• Кеширование с автоочисткой<br/>• Отслеживание жизненного цикла<br/>• Управление ресурсами<br/><br/><strong>Важно:</strong><br/>• Использовать с осторожностью<br/>• GC недетерминирован<br/>• Не гарантируется момент выполнения",
        difficulty: "hard",
      },

      {
        id: "js-85",
        question: "Что такое Top Level Await?",
        answer:
          "Top Level Await (ES2022) — использование await на верхнем уровне модуля без async функции.<br/><br/><strong>До ES2022:</strong><br/>(async () => {<br/>&nbsp;&nbsp;const data = await fetch('/api/data');<br/>&nbsp;&nbsp;const json = await data.json();<br/>})();<br/><br/><strong>С ES2022:</strong><br/>// Прямо в модуле<br/>const data = await fetch('/api/data');<br/>const json = await data.json();<br/><br/>export const users = json.users;<br/><br/><strong>Условная загрузка:</strong><br/>const language = await detectLanguage();<br/>const translations = await import(`./i18n/${language}.js`);<br/><br/><strong>Динамический импорт с ожиданием:</strong><br/>const module = await import('./module.js');<br/>module.init();<br/><br/><strong>Важные моменты:</strong><br/>• Работает только в модулях<br/>• Блокирует загрузку модуля<br/>• Другие модули ждут завершения<br/>• Полезно для инициализации<br/><br/><strong>Поддержка:</strong><br/>• Chrome 89+<br/>• Firefox 89+<br/>• Safari 15+<br/>• Node.js 14.8+",
        difficulty: "medium",
      },

      {
        id: "js-86",
        question: "Что такое Private Class Fields?",
        answer:
          "Private Class Fields (ES2022) — приватные поля и методы класса с префиксом #.<br/><br/><strong>Приватные поля:</strong><br/>class User {<br/>&nbsp;&nbsp;#password; // приватное поле<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;constructor(name, password) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.name = name; // публичное<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.#password = password; // приватное<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;checkPassword(input) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return this.#password === input;<br/>&nbsp;&nbsp;}<br/>}<br/><br/>const user = new User('Иван', 'secret123');<br/>console.log(user.name); // 'Иван'<br/>console.log(user.#password); // SyntaxError<br/><br/><strong>Приватные методы:</strong><br/>class Calculator {<br/>&nbsp;&nbsp;#validate(num) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return typeof num === 'number';<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;add(a, b) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (this.#validate(a) && this.#validate(b)) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a + b;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Статические приватные:</strong><br/>class Config {<br/>&nbsp;&nbsp;static #apiKey = 'secret';<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;static getKey() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return Config.#apiKey;<br/>&nbsp;&nbsp;}<br/>}",
        difficulty: "medium",
      },

      {
        id: "js-87",
        question: "Что такое Static Initialization Blocks?",
        answer:
          "Static Initialization Blocks (ES2022) — блоки для инициализации статических полей класса.<br/><br/><strong>Синтаксис:</strong><br/>class DatabaseConnection {<br/>&nbsp;&nbsp;static #connection;<br/>&nbsp;&nbsp;static #isInitialized = false;<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;static {<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Сложная инициализация<br/>&nbsp;&nbsp;&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.#connection = connectToDatabase();<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.#isInitialized = true;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('База данных подключена');<br/>&nbsp;&nbsp;&nbsp;&nbsp;} catch (error) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.error('Ошибка подключения:', error);<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;static getConnection() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return this.#connection;<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Множественные блоки:</strong><br/>class Config {<br/>&nbsp;&nbsp;static apiUrl;<br/>&nbsp;&nbsp;static timeout;<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;static {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.apiUrl = process.env.API_URL;<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;static {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.timeout = 5000;<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Применение:</strong><br/>• Сложная инициализация<br/>• Try-catch при инициализации<br/>• Множественные зависимости<br/>• Приватные вычисления",
        difficulty: "medium",
      },

      {
        id: "js-88",
        question: "Что такое Array.prototype.at()?",
        answer:
          "at() метод (ES2022) — получение элемента массива по индексу с поддержкой отрицательных индексов.<br/><br/><strong>Положительные индексы:</strong><br/>const arr = ['a', 'b', 'c', 'd'];<br/>console.log(arr.at(0)); // 'a'<br/>console.log(arr.at(2)); // 'c'<br/><br/><strong>Отрицательные индексы:</strong><br/>console.log(arr.at(-1)); // 'd' (последний)<br/>console.log(arr.at(-2)); // 'c' (предпоследний)<br/><br/><strong>Сравнение со старым способом:</strong><br/>// Старый способ для последнего элемента<br/>arr[arr.length - 1] // 'd'<br/><br/>// Новый способ<br/>arr.at(-1) // 'd'<br/><br/><strong>Работает и со строками:</strong><br/>const str = 'hello';<br/>console.log(str.at(-1)); // 'o'<br/><br/><strong>Преимущества:</strong><br/>• Короче для отрицательных индексов<br/>• Более читаемый код<br/>• Работает с TypedArray<br/><br/><strong>Возвращает undefined:</strong><br/>arr.at(100) // undefined<br/>arr.at(-100) // undefined",
        difficulty: "easy",
      },

      {
        id: "js-89",
        question: "Что такое Object.hasOwn()?",
        answer:
          "Object.hasOwn() (ES2022) — проверка наличия собственного свойства объекта. Более надёжная альтернатива hasOwnProperty.<br/><br/><strong>Синтаксис:</strong><br/>Object.hasOwn(obj, 'property')<br/><br/><strong>Пример:</strong><br/>const obj = {<br/>&nbsp;&nbsp;name: 'Иван',<br/>&nbsp;&nbsp;age: 30<br/>};<br/><br/>console.log(Object.hasOwn(obj, 'name')); // true<br/>console.log(Object.hasOwn(obj, 'toString')); // false<br/><br/><strong>Сравнение со старым способом:</strong><br/>// Старый способ<br/>obj.hasOwnProperty('name')<br/><br/>// Новый способ<br/>Object.hasOwn(obj, 'name')<br/><br/><strong>Проблемы hasOwnProperty:</strong><br/>// Может быть переопределён<br/>const obj = {<br/>&nbsp;&nbsp;hasOwnProperty: () => false<br/>};<br/>obj.hasOwnProperty('name'); // false (неправильно)<br/><br/>// Object.hasOwn работает корректно<br/>Object.hasOwn(obj, 'name'); // true<br/><br/><strong>С Object.create(null):</strong><br/>const obj = Object.create(null);<br/>obj.name = 'test';<br/>// obj.hasOwnProperty('name'); // ❌ Ошибка<br/>Object.hasOwn(obj, 'name'); // ✅ true",
        difficulty: "easy",
      },

      {
        id: "js-90",
        question: "Что такое Error Cause?",
        answer:
          "Error Cause (ES2022) — возможность указать причину ошибки через параметр cause.<br/><br/><strong>Синтаксис:</strong><br/>new Error(message, { cause: originalError })<br/><br/><strong>Пример цепочки ошибок:</strong><br/>async function loadUserData(userId) {<br/>&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch(`/api/users/${userId}`);<br/>&nbsp;&nbsp;&nbsp;&nbsp;return await response.json();<br/>&nbsp;&nbsp;} catch (error) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;throw new Error('Не удалось загрузить данные пользователя', {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cause: error<br/>&nbsp;&nbsp;&nbsp;&nbsp;});<br/>&nbsp;&nbsp;}<br/>}<br/><br/>try {<br/>&nbsp;&nbsp;await loadUserData(123);<br/>} catch (error) {<br/>&nbsp;&nbsp;console.log(error.message); // 'Не удалось загрузить...'<br/>&nbsp;&nbsp;console.log(error.cause); // Оригинальная ошибка fetch<br/>}<br/><br/><strong>Вложенные причины:</strong><br/>try {<br/>&nbsp;&nbsp;// код<br/>} catch (e1) {<br/>&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;// другой код<br/>&nbsp;&nbsp;} catch (e2) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;throw new Error('Финальная ошибка', {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cause: new Error('Промежуточная', { cause: e1 })<br/>&nbsp;&nbsp;&nbsp;&nbsp;});<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Применение:</strong><br/>• Сохранение контекста ошибок<br/>• Улучшенная отладка<br/>• Цепочка ошибок",
        difficulty: "medium",
      },

      {
        id: "js-91",
        question: "Что такое Atomics и SharedArrayBuffer?",
        answer:
          "<strong>SharedArrayBuffer</strong> — буфер разделяемой памяти между несколькими Workers.<br/><br/><strong>Создание:</strong><br/>const sharedBuffer = new SharedArrayBuffer(1024);<br/>const sharedArray = new Int32Array(sharedBuffer);<br/><br/>// Отправка в Worker<br/>worker.postMessage(sharedArray);<br/><br/><strong>Atomics</strong> — атомарные операции над SharedArrayBuffer.<br/><br/><strong>Основные методы:</strong><br/><br/>// Чтение/запись<br/>Atomics.load(typedArray, index)<br/>Atomics.store(typedArray, index, value)<br/><br/>// Математические операции<br/>Atomics.add(typedArray, index, value)<br/>Atomics.sub(typedArray, index, value)<br/><br/>// Ожидание/уведомление<br/>Atomics.wait(typedArray, index, expectedValue)<br/>Atomics.notify(typedArray, index, count)<br/><br/><strong>Пример счётчика:</strong><br/>// Main thread<br/>const sab = new SharedArrayBuffer(4);<br/>const view = new Int32Array(sab);<br/>worker.postMessage(sab);<br/><br/>// Worker<br/>Atomics.add(view, 0, 1); // Атомарно +1<br/><br/><strong>Применение:</strong><br/>• Многопоточные вычисления<br/>• Синхронизация между Workers<br/>• Высоконагруженные задачи",
        difficulty: "hard",
      },

      {
        id: "js-92",
        question: "Что такое Intl API?",
        answer:
          "Intl — встроенный API для интернационализации (форматирование дат, чисел, строк).<br/><br/><strong>Intl.DateTimeFormat</strong> — форматирование дат:<br/>const date = new Date();<br/><br/>// Русская локаль<br/>console.log(new Intl.DateTimeFormat('ru-RU').format(date));<br/>// 01.10.2025<br/><br/>// С опциями<br/>console.log(new Intl.DateTimeFormat('ru-RU', {<br/>&nbsp;&nbsp;year: 'numeric',<br/>&nbsp;&nbsp;month: 'long',<br/>&nbsp;&nbsp;day: 'numeric'<br/>}).format(date));<br/>// 1 октября 2025 г.<br/><br/><strong>Intl.NumberFormat</strong> — форматирование чисел:<br/>const number = 1234567.89;<br/><br/>console.log(new Intl.NumberFormat('ru-RU').format(number));<br/>// 1 234 567,89<br/><br/>// Валюта<br/>console.log(new Intl.NumberFormat('ru-RU', {<br/>&nbsp;&nbsp;style: 'currency',<br/>&nbsp;&nbsp;currency: 'RUB'<br/>}).format(number));<br/>// 1 234 567,89 ₽<br/><br/><strong>Intl.RelativeTimeFormat</strong>:<br/>const rtf = new Intl.RelativeTimeFormat('ru');<br/>console.log(rtf.format(-1, 'day')); // вчера<br/>console.log(rtf.format(2, 'week')); // через 2 недели<br/><br/><strong>Intl.PluralRules</strong> — правила множественного числа<br/><strong>Intl.Collator</strong> — сортировка строк",
        difficulty: "medium",
      },

      {
        id: "js-93",
        question: "Что такое Performance API?",
        answer:
          "Performance API — измерение производительности веб-приложений.<br/><br/><strong>performance.now()</strong> — точное время с высоким разрешением:<br/>const start = performance.now();<br/>// Код для измерения<br/>const end = performance.now();<br/>console.log(`Выполнение: ${end - start}мс`);<br/><br/><strong>performance.mark()</strong> — создание меток:<br/>performance.mark('start-task');<br/>// Код<br/>performance.mark('end-task');<br/><br/><strong>performance.measure()</strong> — измерение между метками:<br/>performance.measure('task-duration', 'start-task', 'end-task');<br/><br/>const measures = performance.getEntriesByName('task-duration');<br/>console.log(measures[0].duration);<br/><br/><strong>Navigation Timing:</strong><br/>const timing = performance.timing;<br/>const loadTime = timing.loadEventEnd - timing.navigationStart;<br/>console.log('Время загрузки:', loadTime);<br/><br/><strong>Resource Timing:</strong><br/>const resources = performance.getEntriesByType('resource');<br/>resources.forEach(resource => {<br/>&nbsp;&nbsp;console.log(resource.name, resource.duration);<br/>});<br/><br/><strong>Применение:</strong><br/>• Профилирование<br/>• Мониторинг производительности<br/>• Оптимизация",
        difficulty: "medium",
      },

      {
        id: "js-94",
        question: "Что такое WebSocket?",
        answer:
          "WebSocket — протокол полнодуплексной связи между клиентом и сервером через единое TCP соединение.<br/><br/><strong>Создание соединения:</strong><br/>const socket = new WebSocket('ws://localhost:8080');<br/><br/><strong>События:</strong><br/>socket.onopen = () => {<br/>&nbsp;&nbsp;console.log('Соединение открыто');<br/>&nbsp;&nbsp;socket.send('Привет, сервер!');<br/>};<br/><br/>socket.onmessage = (event) => {<br/>&nbsp;&nbsp;console.log('Получено:', event.data);<br/>};<br/><br/>socket.onerror = (error) => {<br/>&nbsp;&nbsp;console.error('Ошибка:', error);<br/>};<br/><br/>socket.onclose = () => {<br/>&nbsp;&nbsp;console.log('Соединение закрыто');<br/>};<br/><br/><strong>Отправка данных:</strong><br/>// Текст<br/>socket.send('Hello');<br/><br/>// JSON<br/>socket.send(JSON.stringify({ type: 'message', data: 'test' }));<br/><br/>// Blob или ArrayBuffer<br/>socket.send(blob);<br/><br/><strong>Закрытие соединения:</strong><br/>socket.close();<br/><br/><strong>Применение:</strong><br/>• Чаты в реальном времени<br/>• Онлайн игры<br/>• Живые уведомления<br/>• Совместное редактирование<br/>• Трейдинг платформы",
        difficulty: "medium",
      },

      {
        id: "js-95",
        question: "Что такое Drag and Drop API?",
        answer:
          "Drag and Drop API — встроенный API для реализации перетаскивания элементов.<br/><br/><strong>Делаем элемент перетаскиваемым:</strong><br/>&lt;div draggable='true' id='draggable'&gt;Перетащи меня&lt;/div&gt;<br/><br/><strong>События источника (draggable):</strong><br/>const draggable = document.getElementById('draggable');<br/><br/>draggable.addEventListener('dragstart', (e) => {<br/>&nbsp;&nbsp;e.dataTransfer.setData('text/plain', e.target.id);<br/>&nbsp;&nbsp;e.dataTransfer.effectAllowed = 'move';<br/>});<br/><br/>draggable.addEventListener('dragend', (e) => {<br/>&nbsp;&nbsp;console.log('Перетаскивание завершено');<br/>});<br/><br/><strong>События приёмника (drop zone):</strong><br/>const dropZone = document.getElementById('dropzone');<br/><br/>dropZone.addEventListener('dragover', (e) => {<br/>&nbsp;&nbsp;e.preventDefault(); // Разрешить drop<br/>&nbsp;&nbsp;e.dataTransfer.dropEffect = 'move';<br/>});<br/><br/>dropZone.addEventListener('drop', (e) => {<br/>&nbsp;&nbsp;e.preventDefault();<br/>&nbsp;&nbsp;const data = e.dataTransfer.getData('text/plain');<br/>&nbsp;&nbsp;const element = document.getElementById(data);<br/>&nbsp;&nbsp;dropZone.appendChild(element);<br/>});<br/><br/><strong>Применение:</strong><br/>• Файловые менеджеры<br/>• Конструкторы интерфейсов<br/>• Kanban доски<br/>• Загрузка файлов",
        difficulty: "medium",
      },

      {
        id: "js-96",
        question: "Что такое Web Workers и их типы?",
        answer:
          "Web Workers — JavaScript в фоновых потоках без блокировки UI.<br/><br/><strong>Dedicated Worker</strong> — для одной страницы:<br/><br/>// main.js<br/>const worker = new Worker('worker.js');<br/><br/>worker.postMessage({ data: [1, 2, 3] });<br/><br/>worker.onmessage = (e) => {<br/>&nbsp;&nbsp;console.log('Результат:', e.data);<br/>};<br/><br/>// worker.js<br/>self.onmessage = (e) => {<br/>&nbsp;&nbsp;const result = e.data.data.reduce((a, b) => a + b);<br/>&nbsp;&nbsp;self.postMessage(result);<br/>};<br/><br/><strong>Shared Worker</strong> — разделяемый между вкладками:<br/>const sharedWorker = new SharedWorker('shared-worker.js');<br/><br/>sharedWorker.port.postMessage('Hello');<br/>sharedWorker.port.onmessage = (e) => {<br/>&nbsp;&nbsp;console.log(e.data);<br/>};<br/><br/><strong>Service Worker</strong> — для PWA и кеширования<br/><br/><strong>Ограничения Workers:</strong><br/>• Нет доступа к DOM<br/>• Нет доступа к window<br/>• Нет синхронного XHR<br/>• Отдельная область видимости<br/><br/><strong>Применение:</strong><br/>• Тяжёлые вычисления<br/>• Обработка изображений<br/>• Парсинг больших данных",
        difficulty: "hard",
      },

      {
        id: "js-97",
        question: "Что такое Geolocation API?",
        answer:
          "Geolocation API — получение географического положения пользователя.<br/><br/><strong>Проверка поддержки:</strong><br/>if ('geolocation' in navigator) {<br/>&nbsp;&nbsp;// Поддерживается<br/>}<br/><br/><strong>Получение текущей позиции:</strong><br/>navigator.geolocation.getCurrentPosition(<br/>&nbsp;&nbsp;(position) => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const lat = position.coords.latitude;<br/>&nbsp;&nbsp;&nbsp;&nbsp;const lon = position.coords.longitude;<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Координаты: ${lat}, ${lon}`);<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;(error) => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.error('Ошибка:', error.message);<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;enableHighAccuracy: true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;timeout: 5000,<br/>&nbsp;&nbsp;&nbsp;&nbsp;maximumAge: 0<br/>&nbsp;&nbsp;}<br/>);<br/><br/><strong>Отслеживание позиции:</strong><br/>const watchId = navigator.geolocation.watchPosition(<br/>&nbsp;&nbsp;(position) => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Новая позиция:', position.coords);<br/>&nbsp;&nbsp;}<br/>);<br/><br/>// Остановка отслеживания<br/>navigator.geolocation.clearWatch(watchId);<br/><br/><strong>Доступные данные:</strong><br/>• latitude, longitude — координаты<br/>• accuracy — точность в метрах<br/>• altitude — высота<br/>• speed — скорость<br/>• heading — направление",
        difficulty: "easy",
      },

      {
        id: "js-98",
        question: "Что такое Notification API?",
        answer:
          "Notification API — отображение системных уведомлений пользователю.<br/><br/><strong>Запрос разрешения:</strong><br/>if ('Notification' in window) {<br/>&nbsp;&nbsp;Notification.requestPermission().then(permission => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (permission === 'granted') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Разрешение получено');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;});<br/>}<br/><br/><strong>Создание уведомления:</strong><br/>if (Notification.permission === 'granted') {<br/>&nbsp;&nbsp;const notification = new Notification('Новое сообщение', {<br/>&nbsp;&nbsp;&nbsp;&nbsp;body: 'У вас новое сообщение от Ивана',<br/>&nbsp;&nbsp;&nbsp;&nbsp;icon: '/icon.png',<br/>&nbsp;&nbsp;&nbsp;&nbsp;badge: '/badge.png',<br/>&nbsp;&nbsp;&nbsp;&nbsp;tag: 'message-1',<br/>&nbsp;&nbsp;&nbsp;&nbsp;requireInteraction: false<br/>&nbsp;&nbsp;});<br/>}<br/><br/><strong>События:</strong><br/>notification.onclick = () => {<br/>&nbsp;&nbsp;window.focus();<br/>&nbsp;&nbsp;notification.close();<br/>};<br/><br/>notification.onclose = () => {<br/>&nbsp;&nbsp;console.log('Уведомление закрыто');<br/>};<br/><br/><strong>Закрытие:</strong><br/>notification.close();<br/><br/><strong>Состояния разрешения:</strong><br/>• 'granted' — разрешено<br/>• 'denied' — запрещено<br/>• 'default' — не запрошено",
        difficulty: "easy",
      },

      {
        id: "js-99",
        question: "Что такое Clipboard API?",
        answer:
          "Clipboard API — асинхронная работа с буфером обмена.<br/><br/><strong>Чтение из буфера:</strong><br/>navigator.clipboard.readText()<br/>&nbsp;&nbsp;.then(text => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Текст из буфера:', text);<br/>&nbsp;&nbsp;})<br/>&nbsp;&nbsp;.catch(err => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.error('Ошибка чтения:', err);<br/>&nbsp;&nbsp;});<br/><br/><strong>Запись в буфер:</strong><br/>navigator.clipboard.writeText('Скопированный текст')<br/>&nbsp;&nbsp;.then(() => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Текст скопирован');<br/>&nbsp;&nbsp;})<br/>&nbsp;&nbsp;.catch(err => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.error('Ошибка записи:', err);<br/>&nbsp;&nbsp;});<br/><br/><strong>Копирование при клике:</strong><br/>button.addEventListener('click', async () => {<br/>&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;await navigator.clipboard.writeText(textToCopy);<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Скопировано!');<br/>&nbsp;&nbsp;} catch (err) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.error('Ошибка:', err);<br/>&nbsp;&nbsp;}<br/>});<br/><br/><strong>Работа с изображениями:</strong><br/>// Чтение<br/>const items = await navigator.clipboard.read();<br/><br/>// Запись<br/>await navigator.clipboard.write([<br/>&nbsp;&nbsp;new ClipboardItem({ 'image/png': blob })<br/>]);<br/><br/><strong>Требования:</strong><br/>• HTTPS<br/>• Разрешения пользователя",
        difficulty: "easy",
      },

      {
        id: "js-100",
        question: "Что такое IndexedDB?",
        answer:
          "IndexedDB — клиентская NoSQL база данных для хранения больших объёмов структурированных данных.<br/><br/><strong>Открытие базы:</strong><br/>const request = indexedDB.open('MyDatabase', 1);<br/><br/>request.onupgradeneeded = (event) => {<br/>&nbsp;&nbsp;const db = event.target.result;<br/>&nbsp;&nbsp;// Создание хранилища<br/>&nbsp;&nbsp;const objectStore = db.createObjectStore('users', {<br/>&nbsp;&nbsp;&nbsp;&nbsp;keyPath: 'id',<br/>&nbsp;&nbsp;&nbsp;&nbsp;autoIncrement: true<br/>&nbsp;&nbsp;});<br/>&nbsp;&nbsp;// Создание индекса<br/>&nbsp;&nbsp;objectStore.createIndex('name', 'name', { unique: false });<br/>};<br/><br/>request.onsuccess = (event) => {<br/>&nbsp;&nbsp;const db = event.target.result;<br/>};<br/><br/><strong>Добавление данных:</strong><br/>const transaction = db.transaction(['users'], 'readwrite');<br/>const objectStore = transaction.objectStore('users');<br/>objectStore.add({ name: 'Иван', age: 30 });<br/><br/><strong>Чтение данных:</strong><br/>const request = objectStore.get(1);<br/>request.onsuccess = () => {<br/>&nbsp;&nbsp;console.log(request.result);<br/>};<br/><br/><strong>Применение:</strong><br/>• Оффлайн приложения<br/>• Кеширование данных<br/>• Хранение файлов<br/>• PWA",
        difficulty: "hard",
      },
      {
        id: "js-101",
        question: "Что такое Server-Sent Events (SSE)?",
        answer:
          "Server-Sent Events — технология для получения автоматических обновлений от сервера через HTTP соединение.<br/><br/><strong>Создание соединения:</strong><br/>const eventSource = new EventSource('/api/events');<br/><br/><strong>Получение сообщений:</strong><br/>eventSource.onmessage = (event) => {<br/>&nbsp;&nbsp;console.log('Новое сообщение:', event.data);<br/>};<br/><br/><strong>Обработка событий:</strong><br/>eventSource.addEventListener('update', (event) => {<br/>&nbsp;&nbsp;const data = JSON.parse(event.data);<br/>&nbsp;&nbsp;console.log('Обновление:', data);<br/>});<br/><br/><strong>События соединения:</strong><br/>eventSource.onopen = () => {<br/>&nbsp;&nbsp;console.log('Соединение открыто');<br/>};<br/><br/>eventSource.onerror = (error) => {<br/>&nbsp;&nbsp;console.error('Ошибка:', error);<br/>};<br/><br/><strong>Закрытие:</strong><br/>eventSource.close();<br/><br/><strong>Формат данных на сервере:</strong><br/>data: {\"message\": \"hello\"}<br/>event: update<br/>id: 1<br/><br/><strong>Отличия от WebSocket:</strong><br/>• Только от сервера к клиенту<br/>• HTTP протокол<br/>• Автопереподключение<br/>• Проще в реализации<br/><br/><strong>Применение:</strong><br/>• Новости и уведомления<br/>• Статистика в реальном времени<br/>• Обновления статуса",
        difficulty: "medium",
      },

      {
        id: "js-102",
        question: "Что такое Custom Elements (Web Components)?",
        answer:
          "Custom Elements — создание собственных HTML элементов с инкапсулированной логикой.<br/><br/><strong>Создание элемента:</strong><br/>class MyButton extends HTMLElement {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;super();<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.attachShadow({ mode: 'open' });<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;connectedCallback() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.shadowRoot.innerHTML = `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;style&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;button { background: blue; color: white; }<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/style&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button&gt;${this.getAttribute('label')}&lt;/button&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;`;<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Регистрация:</strong><br/>customElements.define('my-button', MyButton);<br/><br/><strong>Использование:</strong><br/>&lt;my-button label=\"Нажми меня\"&gt;&lt;/my-button&gt;<br/><br/><strong>Жизненный цикл:</strong><br/>• constructor() — создание<br/>• connectedCallback() — добавлен в DOM<br/>• disconnectedCallback() — удалён из DOM<br/>• attributeChangedCallback() — атрибут изменён<br/>• adoptedCallback() — перемещён в другой документ<br/><br/><strong>Наблюдаемые атрибуты:</strong><br/>static get observedAttributes() {<br/>&nbsp;&nbsp;return ['label', 'disabled'];<br/>}<br/><br/><strong>Shadow DOM</strong> — инкапсуляция стилей и разметки",
        difficulty: "hard",
      },

      {
        id: "js-103",
        question: "Что такое History API?",
        answer:
          "History API — управление историей браузера без перезагрузки страницы.<br/><br/><strong>Основные методы:</strong><br/><br/><strong>pushState()</strong> — добавляет запись в историю:<br/>history.pushState(<br/>&nbsp;&nbsp;{ page: 1 }, // state объект<br/>&nbsp;&nbsp;'Title', // title (игнорируется)<br/>&nbsp;&nbsp;'/page1' // URL<br/>);<br/><br/><strong>replaceState()</strong> — заменяет текущую запись:<br/>history.replaceState({ page: 2 }, '', '/page2');<br/><br/><strong>Навигация:</strong><br/>history.back(); // назад<br/>history.forward(); // вперёд<br/>history.go(-2); // на 2 страницы назад<br/>history.go(1); // вперёд на 1<br/><br/><strong>Событие popstate:</strong><br/>window.addEventListener('popstate', (event) => {<br/>&nbsp;&nbsp;console.log('State:', event.state);<br/>&nbsp;&nbsp;// Обновить UI на основе state<br/>});<br/><br/><strong>Текущий state:</strong><br/>console.log(history.state);<br/><br/><strong>Длина истории:</strong><br/>console.log(history.length);<br/><br/><strong>Применение:</strong><br/>• SPA роутинг<br/>• Навигация без перезагрузки<br/>• Сохранение состояния приложения",
        difficulty: "medium",
      },

      {
        id: "js-104",
        question: "Что такое Page Visibility API?",
        answer:
          "Page Visibility API — определение видимости страницы для пользователя.<br/><br/><strong>Проверка видимости:</strong><br/>if (document.hidden) {<br/>&nbsp;&nbsp;console.log('Страница скрыта');<br/>} else {<br/>&nbsp;&nbsp;console.log('Страница видима');<br/>}<br/><br/><strong>Состояние видимости:</strong><br/>console.log(document.visibilityState);<br/>// 'visible' | 'hidden' | 'prerender'<br/><br/><strong>Отслеживание изменений:</strong><br/>document.addEventListener('visibilitychange', () => {<br/>&nbsp;&nbsp;if (document.hidden) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Страница скрыта<br/>&nbsp;&nbsp;&nbsp;&nbsp;pauseVideo();<br/>&nbsp;&nbsp;&nbsp;&nbsp;stopTimer();<br/>&nbsp;&nbsp;} else {<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Страница видима<br/>&nbsp;&nbsp;&nbsp;&nbsp;playVideo();<br/>&nbsp;&nbsp;&nbsp;&nbsp;startTimer();<br/>&nbsp;&nbsp;}<br/>});<br/><br/><strong>Практический пример:</strong><br/>let videoElement = document.querySelector('video');<br/><br/>document.addEventListener('visibilitychange', () => {<br/>&nbsp;&nbsp;if (document.hidden) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;videoElement.pause();<br/>&nbsp;&nbsp;} else {<br/>&nbsp;&nbsp;&nbsp;&nbsp;videoElement.play();<br/>&nbsp;&nbsp;}<br/>});<br/><br/><strong>Применение:</strong><br/>• Остановка анимаций при переключении вкладки<br/>• Пауза видео/аудио<br/>• Экономия ресурсов<br/>• Аналитика времени на странице",
        difficulty: "easy",
      },

      {
        id: "js-105",
        question: "Что такое Broadcast Channel API?",
        answer:
          "Broadcast Channel API — коммуникация между вкладками/окнами одного источника.<br/><br/><strong>Создание канала:</strong><br/>const channel = new BroadcastChannel('my_channel');<br/><br/><strong>Отправка сообщения:</strong><br/>channel.postMessage('Привет из вкладки 1');<br/>channel.postMessage({ type: 'update', data: 123 });<br/><br/><strong>Получение сообщений:</strong><br/>channel.onmessage = (event) => {<br/>&nbsp;&nbsp;console.log('Получено:', event.data);<br/>};<br/><br/>// Или через addEventListener<br/>channel.addEventListener('message', (event) => {<br/>&nbsp;&nbsp;console.log('Сообщение:', event.data);<br/>});<br/><br/><strong>Закрытие канала:</strong><br/>channel.close();<br/><br/><strong>Практический пример - синхронизация:</strong><br/>// Вкладка 1<br/>const channel = new BroadcastChannel('auth');<br/>channel.postMessage({ type: 'logout' });<br/><br/>// Вкладка 2<br/>const channel = new BroadcastChannel('auth');<br/>channel.onmessage = (e) => {<br/>&nbsp;&nbsp;if (e.data.type === 'logout') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;redirectToLogin();<br/>&nbsp;&nbsp;}<br/>};<br/><br/><strong>Применение:</strong><br/>• Синхронизация состояния<br/>• Выход из всех вкладок<br/>• Обновление данных<br/>• Уведомления между вкладками",
        difficulty: "medium",
      },

      {
        id: "js-106",
        question: "Что такое ResizeObserver?",
        answer:
          "ResizeObserver — отслеживание изменений размеров элемента.<br/><br/><strong>Создание наблюдателя:</strong><br/>const resizeObserver = new ResizeObserver((entries) => {<br/>&nbsp;&nbsp;for (let entry of entries) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const width = entry.contentRect.width;<br/>&nbsp;&nbsp;&nbsp;&nbsp;const height = entry.contentRect.height;<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Размер: ${width}x${height}`);<br/>&nbsp;&nbsp;}<br/>});<br/><br/><strong>Начало наблюдения:</strong><br/>const element = document.querySelector('.resizable');<br/>resizeObserver.observe(element);<br/><br/><strong>Остановка наблюдения:</strong><br/>resizeObserver.unobserve(element);<br/>resizeObserver.disconnect();<br/><br/><strong>Практический пример:</strong><br/>const observer = new ResizeObserver((entries) => {<br/>&nbsp;&nbsp;entries.forEach(entry => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (entry.contentRect.width < 400) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entry.target.classList.add('small');<br/>&nbsp;&nbsp;&nbsp;&nbsp;} else {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entry.target.classList.remove('small');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;});<br/>});<br/><br/>observer.observe(document.querySelector('.container'));<br/><br/><strong>Применение:</strong><br/>• Адаптивные компоненты<br/>• Canvas/WebGL ресайз<br/>• Динамические layout<br/>• Графики и визуализация",
        difficulty: "medium",
      },

      {
        id: "js-107",
        question: "Что такое requestIdleCallback?",
        answer:
          "requestIdleCallback — выполнение задач в свободное время браузера (когда он не занят).<br/><br/><strong>Базовое использование:</strong><br/>requestIdleCallback((deadline) => {<br/>&nbsp;&nbsp;while (deadline.timeRemaining() > 0 && tasks.length > 0) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const task = tasks.shift();<br/>&nbsp;&nbsp;&nbsp;&nbsp;task();<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;if (tasks.length > 0) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;requestIdleCallback(callback);<br/>&nbsp;&nbsp;}<br/>});<br/><br/><strong>С таймаутом:</strong><br/>requestIdleCallback(callback, { timeout: 2000 });<br/><br/><strong>Deadline объект:</strong><br/>deadline.timeRemaining() // оставшееся время в мс<br/>deadline.didTimeout // true если превышен timeout<br/><br/><strong>Отмена:</strong><br/>const id = requestIdleCallback(callback);<br/>cancelIdleCallback(id);<br/><br/><strong>Практический пример:</strong><br/>const tasks = [task1, task2, task3];<br/><br/>function processTasks(deadline) {<br/>&nbsp;&nbsp;while ((deadline.timeRemaining() > 0 || deadline.didTimeout)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&&  tasks.length > 0) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;tasks.shift()();<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;if (tasks.length > 0) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;requestIdleCallback(processTasks);<br/>&nbsp;&nbsp;}<br/>}<br/><br/>requestIdleCallback(processTasks);<br/><br/><strong>Применение:</strong><br/>• Аналитика<br/>• Предзагрузка данных<br/>• Неприоритетные задачи",
        difficulty: "medium",
      },

      {
        id: "js-108",
        question: "Что такое Memory Management и Garbage Collection в JavaScript?",
        answer:
          "<strong>Garbage Collection</strong> — автоматическое управление памятью, удаление неиспользуемых объектов.<br/><br/><strong>Алгоритм Mark-and-Sweep:</strong><br/>1. Начинает с корневых объектов (глобальные, стек)<br/>2. Помечает все достижимые объекты<br/>3. Удаляет непомеченные объекты<br/><br/><strong>Утечки памяти:</strong><br/><br/>1. Глобальные переменные:<br/>// Плохо<br/>function leak() {<br/>&nbsp;&nbsp;globalVar = 'утечка'; // без var/let/const<br/>}<br/><br/>2. Забытые таймеры:<br/>// Плохо<br/>setInterval(() => {<br/>&nbsp;&nbsp;const data = hugeArray;<br/>&nbsp;&nbsp;// data не очищается<br/>}, 1000);<br/><br/>3. Замыкания:<br/>function outer() {<br/>&nbsp;&nbsp;const bigData = new Array(1000000);<br/>&nbsp;&nbsp;return function() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;// bigData остаётся в памяти<br/>&nbsp;&nbsp;};<br/>}<br/><br/>4. DOM ссылки:<br/>const elements = [];<br/>elements.push(document.getElementById('button'));<br/>// Даже после удаления из DOM<br/><br/><strong>Предотвращение утечек:</strong><br/>• Удалять слушатели событий<br/>• Очищать таймеры<br/>• Использовать WeakMap/WeakSet<br/>• Удалять ссылки на DOM",
        difficulty: "hard",
      },

      {
        id: "js-109",
        question: "Что такое Temporal Dead Zone подробнее?",
        answer:
          "Temporal Dead Zone (TDZ) — период между входом в scope и инициализацией переменной let/const.<br/><br/><strong>Пример TDZ:</strong><br/>console.log(x); // ReferenceError: Cannot access 'x' before initialization<br/>let x = 5;<br/><br/><strong>С var такой проблемы нет:</strong><br/>console.log(y); // undefined (hoisting)<br/>var y = 5;<br/><br/><strong>TDZ в блоках:</strong><br/>let x = 'outer';<br/>{<br/>&nbsp;&nbsp;// TDZ начинается<br/>&nbsp;&nbsp;console.log(x); // ReferenceError<br/>&nbsp;&nbsp;let x = 'inner'; // TDZ заканчивается<br/>&nbsp;&nbsp;console.log(x); // 'inner'<br/>}<br/><br/><strong>TDZ и typeof:</strong><br/>// До ES6<br/>console.log(typeof undeclared); // 'undefined'<br/><br/>// ES6+<br/>console.log(typeof x); // ReferenceError<br/>let x;<br/><br/><strong>TDZ в параметрах функции:</strong><br/>function test(a = b, b = 2) { // ReferenceError<br/>&nbsp;&nbsp;return [a, b];<br/>}<br/><br/>// Правильно<br/>function test(a = 1, b = a + 1) { // OK<br/>&nbsp;&nbsp;return [a, b];<br/>}<br/><br/><strong>Почему TDZ полезен:</strong><br/>• Ловит ошибки использования до объявления<br/>• Делает код более предсказуемым<br/>• Заставляет соблюдать порядок",
        difficulty: "medium",
      },

      {
        id: "js-110",
        question: "Как работает сборка мусора в современных движках JavaScript?",
        answer:
          "<strong>Generational Garbage Collection</strong> — оптимизация GC разделением объектов на поколения.<br/><br/><strong>Поколения объектов:</strong><br/><br/><strong>Young Generation (новое поколение):</strong><br/>• Только что созданные объекты<br/>• Частая сборка (Scavenge)<br/>• Быстрая проверка<br/>• 90% объектов умирают молодыми<br/><br/><strong>Old Generation (старое поколение):</strong><br/>• Объекты пережившие несколько сборок<br/>• Редкая сборка (Mark-Sweep-Compact)<br/>• Медленная, но редкая<br/><br/><strong>Алгоритмы V8:</strong><br/><br/>1. <strong>Scavenge (для Young):</strong><br/>• Копирующий алгоритм<br/>• Быстрый<br/>• Делит пространство на From/To<br/><br/>2. <strong>Mark-Sweep (для Old):</strong><br/>• Помечает живые объекты<br/>• Удаляет мёртвые<br/>• Фрагментирует память<br/><br/>3. <strong>Mark-Compact:</strong><br/>• После Mark-Sweep<br/>• Дефрагментация<br/>• Медленнее, но реже<br/><br/><strong>Инкрементальная сборка:</strong><br/>• Разбивает работу на части<br/>• Не блокирует UI надолго<br/>• Чередуется с выполнением кода<br/><br/><strong>Конкурентная сборка:</strong><br/>• Параллельно с основным потоком<br/>• В фоновом потоке",
        difficulty: "hard",
      },

      {
        id: "js-111",
        question: "Что такое Event Loop подробнее?",
        answer:
          "Event Loop — механизм выполнения асинхронного кода в однопоточном JavaScript.<br/><br/><strong>Компоненты:</strong><br/><br/>1. <strong>Call Stack</strong> — стек вызовов функций<br/>2. <strong>Web APIs</strong> — setTimeout, fetch, DOM events<br/>3. <strong>Callback Queue (Task Queue)</strong> — очередь макрозадач<br/>4. <strong>Microtask Queue</strong> — очередь микрозадач<br/>5. <strong>Event Loop</strong> — координирует выполнение<br/><br/><strong>Алгоритм работы:</strong><br/><br/>while (true) {<br/>&nbsp;&nbsp;// 1. Выполнить весь синхронный код<br/>&nbsp;&nbsp;executeAllSyncCode();<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// 2. Выполнить ВСЕ микрозадачи<br/>&nbsp;&nbsp;while (microtaskQueue.length > 0) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;executeMicrotask();<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// 3. Отрисовка (если нужна)<br/>&nbsp;&nbsp;render();<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// 4. Выполнить ОДНУ макрозадачу<br/>&nbsp;&nbsp;if (macrotaskQueue.length > 0) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;executeMacrotask();<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Микрозадачи (высокий приоритет):</strong><br/>• Promise.then/catch/finally<br/>• queueMicrotask()<br/>• MutationObserver<br/><br/><strong>Макрозадачи (низкий приоритет):</strong><br/>• setTimeout/setInterval<br/>• setImmediate (Node.js)<br/>• I/O операции<br/>• UI rendering<br/><br/><strong>Пример порядка выполнения:</strong><br/>console.log('1');<br/>setTimeout(() => console.log('2'), 0);<br/>Promise.resolve().then(() => console.log('3'));<br/>console.log('4');<br/>// Вывод: 1, 4, 3, 2",
        difficulty: "hard",
      },

      {
        id: "js-112",
        question: "Что такое Hoisting подробнее?",
        answer:
          "Hoisting — поднятие объявлений переменных и функций в начало их области видимости.<br/><br/><strong>Function Declaration полностью поднимается:</strong><br/>sayHi(); // Работает<br/><br/>function sayHi() {<br/>&nbsp;&nbsp;console.log('Привет');<br/>}<br/><br/><strong>Function Expression не поднимается:</strong><br/>sayBye(); // ReferenceError<br/><br/>const sayBye = function() {<br/>&nbsp;&nbsp;console.log('Пока');<br/>};<br/><br/><strong>var поднимается с undefined:</strong><br/>console.log(x); // undefined<br/>var x = 5;<br/><br/>// Интерпретируется как:<br/>var x;<br/>console.log(x);<br/>x = 5;<br/><br/><strong>let/const поднимается, но в TDZ:</strong><br/>console.log(y); // ReferenceError<br/>let y = 5;<br/><br/><strong>Классы не поднимаются:</strong><br/>const p = new Person(); // ReferenceError<br/><br/>class Person {<br/>&nbsp;&nbsp;constructor() {}<br/>}<br/><br/><strong>Порядок hoisting:</strong><br/>1. Function declarations<br/>2. var переменные (с undefined)<br/>3. let/const (в TDZ)<br/><br/><strong>В функциях:</strong><br/>function test() {<br/>&nbsp;&nbsp;console.log(a); // undefined<br/>&nbsp;&nbsp;var a = 10;<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;function inner() {} // Полностью поднята<br/>}",
        difficulty: "medium",
      },

      {
        id: "js-113",
        question: "Что такое Lexical Environment?",
        answer:
          "Lexical Environment — структура данных, хранящая переменные и ссылку на внешнее окружение.<br/><br/><strong>Компоненты:</strong><br/>1. <strong>Environment Record</strong> — хранилище переменных<br/>2. <strong>Outer Reference</strong> — ссылка на внешнее окружение<br/><br/><strong>Пример:</strong><br/>let globalVar = 'global';<br/><br/>function outer() {<br/>&nbsp;&nbsp;let outerVar = 'outer';<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;function inner() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;let innerVar = 'inner';<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(globalVar, outerVar, innerVar);<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;inner();<br/>}<br/><br/><strong>Структура окружений:</strong><br/><br/>Global Lexical Environment:<br/>{<br/>&nbsp;&nbsp;environmentRecord: { globalVar: 'global' },<br/>&nbsp;&nbsp;outer: null<br/>}<br/><br/>outer() Lexical Environment:<br/>{<br/>&nbsp;&nbsp;environmentRecord: { outerVar: 'outer' },<br/>&nbsp;&nbsp;outer: Global Lexical Environment<br/>}<br/><br/>inner() Lexical Environment:<br/>{<br/>&nbsp;&nbsp;environmentRecord: { innerVar: 'inner' },<br/>&nbsp;&nbsp;outer: outer() Lexical Environment<br/>}<br/><br/><strong>Поиск переменной:</strong><br/>1. Ищет в текущем Environment Record<br/>2. Если не нашли, идёт по outer<br/>3. Повторяет до Global<br/>4. Если не нашли — ReferenceError<br/><br/><strong>Именно это обеспечивает:</strong><br/>• Замыкания<br/>• Области видимости<br/>• Доступ к внешним переменным",
        difficulty: "hard",
      },

      {
        id: "js-114",
        question: "Что такое Execution Context?",
        answer:
          "Execution Context — среда выполнения кода со всей необходимой информацией.<br/><br/><strong>Типы контекстов:</strong><br/><br/>1. <strong>Global Execution Context</strong><br/>• Создаётся при загрузке скрипта<br/>• Создаёт глобальный объект (window/global)<br/>• this = глобальный объект<br/><br/>2. <strong>Function Execution Context</strong><br/>• Создаётся при вызове функции<br/>• Свой Lexical Environment<br/>• Свой this<br/><br/>3. <strong>Eval Execution Context</strong><br/>• Создаётся при eval()<br/><br/><strong>Компоненты контекста:</strong><br/><br/>ExecutionContext = {<br/>&nbsp;&nbsp;// Lexical Environment<br/>&nbsp;&nbsp;LexicalEnvironment: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;EnvironmentRecord: {},<br/>&nbsp;&nbsp;&nbsp;&nbsp;outer: null<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;// Variable Environment (для var)<br/>&nbsp;&nbsp;VariableEnvironment: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;EnvironmentRecord: {},<br/>&nbsp;&nbsp;&nbsp;&nbsp;outer: null<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;// this binding<br/>&nbsp;&nbsp;ThisBinding: window/object<br/>}<br/><br/><strong>Фазы создания контекста:</strong><br/><br/>1. <strong>Creation Phase:</strong><br/>• Создаёт Lexical Environment<br/>• Создаёт Variable Environment<br/>• Определяет this<br/>• Hoisting переменных и функций<br/><br/>2. <strong>Execution Phase:</strong><br/>• Присваивает значения<br/>• Выполняет код построчно<br/><br/><strong>Call Stack хранит контексты:</strong><br/>[Global Context, outer Context, inner Context]",
        difficulty: "hard",
      },

      {
        id: "js-115",
        question: "В чём разница между Object.create() и конструктором?",
        answer:
          "<strong>Object.create()</strong> — создаёт объект с указанным прототипом:<br/><br/>const personProto = {<br/>&nbsp;&nbsp;greet() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Привет, я ${this.name}`);<br/>&nbsp;&nbsp;}<br/>};<br/><br/>const person = Object.create(personProto);<br/>person.name = 'Иван';<br/>person.greet(); // Привет, я Иван<br/><br/><strong>Конструктор</strong> — функция для создания объектов:<br/><br/>function Person(name) {<br/>&nbsp;&nbsp;this.name = name;<br/>}<br/><br/>Person.prototype.greet = function() {<br/>&nbsp;&nbsp;console.log(`Привет, я ${this.name}`);<br/>};<br/><br/>const person = new Person('Иван');<br/><br/><strong>Основные отличия:</strong><br/><br/>Object.create():<br/>• Прямо устанавливает прототип<br/>• Не вызывает функцию конструктора<br/>• Можно создать объект без прототипа: Object.create(null)<br/>• Более явный контроль над прототипом<br/><br/>Конструктор:<br/>• Выполняет инициализацию<br/>• Автоматически связывает с prototype<br/>• Использует new<br/>• Более традиционный ООП подход<br/><br/><strong>Object.create() с свойствами:</strong><br/>const obj = Object.create(proto, {<br/>&nbsp;&nbsp;name: { value: 'Иван', writable: true }<br/>});",
        difficulty: "medium",
      },

      {
        id: "js-116",
        question: "Что такое Property Descriptors?",
        answer:
          "Property Descriptors — объекты описывающие атрибуты свойств объекта.<br/><br/><strong>Получение дескриптора:</strong><br/>const obj = { name: 'Иван' };<br/>const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');<br/><br/>console.log(descriptor);<br/>// {<br/>//   value: 'Иван',<br/>//   writable: true,<br/>//   enumerable: true,<br/>//   configurable: true<br/>// }<br/><br/><strong>Атрибуты данных (Data Descriptor):</strong><br/>• <strong>value</strong> — значение свойства<br/>• <strong>writable</strong> — можно ли изменить<br/>• <strong>enumerable</strong> — видно в for...in<br/>• <strong>configurable</strong> — можно ли удалить/изменить атрибуты<br/><br/><strong>Атрибуты доступа (Accessor Descriptor):</strong><br/>• <strong>get</strong> — геттер<br/>• <strong>set</strong> — сеттер<br/>• <strong>enumerable</strong><br/>• <strong>configurable</strong><br/><br/><strong>Определение свойства:</strong><br/>Object.defineProperty(obj, 'age', {<br/>&nbsp;&nbsp;value: 30,<br/>&nbsp;&nbsp;writable: false, // только чтение<br/>&nbsp;&nbsp;enumerable: false, // не виден в циклах<br/>&nbsp;&nbsp;configurable: false // нельзя удалить<br/>});<br/><br/><strong>Геттер и сеттер:</strong><br/>Object.defineProperty(obj, 'fullName', {<br/>&nbsp;&nbsp;get() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return `${this.firstName} ${this.lastName}`;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;set(value) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;[this.firstName, this.lastName] = value.split(' ');<br/>&nbsp;&nbsp;}<br/>});",
        difficulty: "medium",
      },

      {
        id: "js-117",
        question: "Что такое Tail Call Optimization?",
        answer:
          "Tail Call Optimization (TCO) — оптимизация хвостовой рекурсии без увеличения стека вызовов.<br/><br/><strong>Обычная рекурсия (без TCO):</strong><br/>function factorial(n) {<br/>&nbsp;&nbsp;if (n === 1) return 1;<br/>&nbsp;&nbsp;return n * factorial(n - 1); // НЕ хвостовой вызов<br/>}<br/>// Стек: factorial(5) → factorial(4) → ... → overflow<br/><br/><strong>Хвостовая рекурсия:</strong><br/>function factorial(n, acc = 1) {<br/>&nbsp;&nbsp;if (n === 1) return acc;<br/>&nbsp;&nbsp;return factorial(n - 1, n * acc); // Хвостовой вызов<br/>}<br/>// С TCO стек не растёт<br/><br/><strong>Условия для TCO:</strong><br/>• Рекурсивный вызов последняя операция<br/>• Нет операций после return<br/>• Результат сразу возвращается<br/>• Strict mode<br/><br/><strong>НЕ хвостовой вызов:</strong><br/>return 1 + recursive(); // есть операция после<br/>return recursive() + 1; // есть операция после<br/><br/><strong>Хвостовой вызов:</strong><br/>return recursive(acc + 1); // только вызов<br/><br/><strong>Поддержка:</strong><br/>• Только Safari<br/>• В Chrome/Firefox нет<br/>• Node.js — флаг --harmony-tailcalls (устаревший)<br/><br/><strong>Обход без TCO — трамполин:</strong><br/>function trampoline(fn) {<br/>&nbsp;&nbsp;while (typeof fn === 'function') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;fn = fn();<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;return fn;<br/>}",
        difficulty: "hard",
      },

      {
        id: "js-118",
        question: "Что такое Tagged Template Literals?",
        answer:
          "Tagged Template Literals — вызов функции с помощью шаблонной строки для её обработки.<br/><br/><strong>Базовый синтаксис:</strong><br/>function tag(strings, ...values) {<br/>&nbsp;&nbsp;console.log(strings); // массив строк<br/>&nbsp;&nbsp;console.log(values); // массив значений<br/>}<br/><br/>const name = 'Иван';<br/>const age = 30;<br/>tag`Меня зовут ${name} и мне ${age} лет`;<br/>// strings: ['Меня зовут ', ' и мне ', ' лет']<br/>// values: ['Иван', 30]<br/><br/><strong>Практический пример - SQL:</strong><br/>function sql(strings, ...values) {<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;query: strings.join('?'),<br/>&nbsp;&nbsp;&nbsp;&nbsp;values: values<br/>&nbsp;&nbsp;};<br/>}<br/><br/>const userId = 123;<br/>const query = sql`SELECT * FROM users WHERE id = ${userId}`;<br/>// { query: 'SELECT * FROM users WHERE id = ?', values: [123] }<br/><br/><strong>HTML экранирование:</strong><br/>function html(strings, ...values) {<br/>&nbsp;&nbsp;return strings.reduce((result, str, i) => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const value = values[i - 1];<br/>&nbsp;&nbsp;&nbsp;&nbsp;const escaped = String(value)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(/&/g, '&amp;')<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(/</g, '&lt;')<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(/>/g, '&gt;');<br/>&nbsp;&nbsp;&nbsp;&nbsp;return result + escaped + str;<br/>&nbsp;&nbsp;});<br/>}<br/><br/><strong>Применение:</strong><br/>• Интернационализация<br/>• SQL запросы<br/>• HTML шаблоны<br/>• Styled Components",
        difficulty: "medium",
      },
      {
        id: "js-119",
        question: "Что такое async iteration и for await...of?",
        answer:
          "Async iteration — итерация по асинхронным данным с помощью for await...of.<br/><br/><strong>Async Iterator:</strong><br/>const asyncIterable = {<br/>&nbsp;&nbsp;async *[Symbol.asyncIterator]() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i < 3; i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await new Promise(resolve => setTimeout(resolve, 1000));<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yield i;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>};<br/><br/><strong>Использование for await...of:</strong><br/>async function process() {<br/>&nbsp;&nbsp;for await (const num of asyncIterable) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(num); // 0, 1, 2 (с задержкой)<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Async Generator:</strong><br/>async function* asyncGenerator() {<br/>&nbsp;&nbsp;let i = 0;<br/>&nbsp;&nbsp;while (i < 3) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;await new Promise(resolve => setTimeout(resolve, 1000));<br/>&nbsp;&nbsp;&nbsp;&nbsp;yield i++;<br/>&nbsp;&nbsp;}<br/>}<br/><br/>for await (const value of asyncGenerator()) {<br/>&nbsp;&nbsp;console.log(value);<br/>}<br/><br/><strong>Практический пример - чтение файлов:</strong><br/>async function* readFiles(files) {<br/>&nbsp;&nbsp;for (const file of files) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const content = await fetch(file).then(r => r.text());<br/>&nbsp;&nbsp;&nbsp;&nbsp;yield content;<br/>&nbsp;&nbsp;}<br/>}<br/><br/>for await (const content of readFiles(['a.txt', 'b.txt'])) {<br/>&nbsp;&nbsp;console.log(content);<br/>}<br/><br/><strong>Применение:</strong><br/>• Стриминг данных<br/>• Чтение больших файлов<br/>• Пагинация API",
        difficulty: "hard",
      },

      {
        id: "js-120",
        question: "Что такое Symbol.iterator и Symbol.asyncIterator?",
        answer:
          "<strong>Symbol.iterator</strong> — делает объект итерируемым для for...of.<br/><br/><strong>Создание итератора:</strong><br/>const range = {<br/>&nbsp;&nbsp;from: 1,<br/>&nbsp;&nbsp;to: 5,<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;[Symbol.iterator]() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current: this.from,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last: this.to,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (this.current <= this.last) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return { done: false, value: this.current++ };<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return { done: true };<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;};<br/>&nbsp;&nbsp;}<br/>};<br/><br/>for (let num of range) {<br/>&nbsp;&nbsp;console.log(num); // 1, 2, 3, 4, 5<br/>}<br/><br/><strong>С генератором (проще):</strong><br/>const range = {<br/>&nbsp;&nbsp;from: 1,<br/>&nbsp;&nbsp;to: 5,<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;*[Symbol.iterator]() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;for (let i = this.from; i <= this.to; i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yield i;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>};<br/><br/><strong>Symbol.asyncIterator</strong> — для асинхронной итерации:<br/>const asyncRange = {<br/>&nbsp;&nbsp;from: 1,<br/>&nbsp;&nbsp;to: 3,<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;async *[Symbol.asyncIterator]() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;for (let i = this.from; i <= this.to; i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await new Promise(r => setTimeout(r, 1000));<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yield i;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>};<br/><br/>for await (let num of asyncRange) {<br/>&nbsp;&nbsp;console.log(num);<br/>}",
        difficulty: "hard",
      },

      {
        id: "js-121",
        question: "Что такое Reflect API?",
        answer:
          "Reflect — встроенный объект с методами для перехвата операций JavaScript.<br/><br/><strong>Основные методы (аналогичны операторам):</strong><br/><br/><strong>Reflect.get()</strong> вместо obj.prop:<br/>const obj = { name: 'Иван' };<br/>console.log(Reflect.get(obj, 'name')); // 'Иван'<br/><br/><strong>Reflect.set()</strong> вместо obj.prop = value:<br/>Reflect.set(obj, 'age', 30);<br/>console.log(obj.age); // 30<br/><br/><strong>Reflect.has()</strong> вместо 'prop' in obj:<br/>console.log(Reflect.has(obj, 'name')); // true<br/><br/><strong>Reflect.deleteProperty()</strong> вместо delete obj.prop:<br/>Reflect.deleteProperty(obj, 'age');<br/><br/><strong>Reflect.apply()</strong> вместо func.apply():<br/>function sum(a, b) { return a + b; }<br/>console.log(Reflect.apply(sum, null, [1, 2])); // 3<br/><br/><strong>Reflect.construct()</strong> вместо new:<br/>class Person {<br/>&nbsp;&nbsp;constructor(name) { this.name = name; }<br/>}<br/>const person = Reflect.construct(Person, ['Иван']);<br/><br/><strong>С Proxy:</strong><br/>const handler = {<br/>&nbsp;&nbsp;get(target, prop, receiver) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Чтение ${prop}`);<br/>&nbsp;&nbsp;&nbsp;&nbsp;return Reflect.get(target, prop, receiver);<br/>&nbsp;&nbsp;}<br/>};<br/><br/><strong>Преимущества Reflect:</strong><br/>• Возвращает boolean вместо throw<br/>• Функциональный подход<br/>• Работает с Proxy<br/>• Более явный код",
        difficulty: "medium",
      },

      {
        id: "js-122",
        question: "Что такое метапрограммирование в JavaScript?",
        answer:
          "Метапрограммирование — программы, которые читают, анализируют или модифицируют другие программы или себя.<br/><br/><strong>Инструменты метапрограммирования:</strong><br/><br/><strong>1. Proxy и Reflect:</strong><br/>const validator = {<br/>&nbsp;&nbsp;set(target, prop, value) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (prop === 'age' && typeof value !== 'number') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new TypeError('Age должен быть числом');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;return Reflect.set(target, prop, value);<br/>&nbsp;&nbsp;}<br/>};<br/><br/>const person = new Proxy({}, validator);<br/><br/><strong>2. Symbol:</strong><br/>const hidden = Symbol('hidden');<br/>const obj = {<br/>&nbsp;&nbsp;[hidden]: 'секрет',<br/>&nbsp;&nbsp;public: 'открыто'<br/>};<br/><br/><strong>3. Object методы:</strong><br/>Object.defineProperty(obj, 'computed', {<br/>&nbsp;&nbsp;get() { return this.value * 2; }<br/>});<br/><br/><strong>4. Генераторы:</strong><br/>function* fibonacci() {<br/>&nbsp;&nbsp;let [a, b] = [0, 1];<br/>&nbsp;&nbsp;while (true) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;yield a;<br/>&nbsp;&nbsp;&nbsp;&nbsp;[a, b] = [b, a + b];<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>5. Декораторы (proposal):</strong><br/>@logged<br/>class MyClass {<br/>&nbsp;&nbsp;@readonly<br/>&nbsp;&nbsp;name = 'test';<br/>}<br/><br/><strong>Применение:</strong><br/>• Валидация данных<br/>• ORM<br/>• Реактивность (Vue, MobX)<br/>• Логирование<br/>• Кеширование",
        difficulty: "hard",
      },

      {
        id: "js-123",
        question: "Что такое коллбэк hell и как его избежать?",
        answer:
          "Callback Hell (пирамида doom) — множественная вложенность колбэков, затрудняющая чтение кода.<br/><br/><strong>Пример Callback Hell:</strong><br/>getData(function(a) {<br/>&nbsp;&nbsp;getMoreData(a, function(b) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;getMoreData(b, function(c) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getMoreData(c, function(d) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getMoreData(d, function(e) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// ...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br/>&nbsp;&nbsp;&nbsp;&nbsp;});<br/>&nbsp;&nbsp;});<br/>});<br/><br/><strong>Решение 1 - именованные функции:</strong><br/>function step1(data) {<br/>&nbsp;&nbsp;getMoreData(data, step2);<br/>}<br/>function step2(data) {<br/>&nbsp;&nbsp;getMoreData(data, step3);<br/>}<br/>getData(step1);<br/><br/><strong>Решение 2 - Promises:</strong><br/>getData()<br/>&nbsp;&nbsp;.then(a => getMoreData(a))<br/>&nbsp;&nbsp;.then(b => getMoreData(b))<br/>&nbsp;&nbsp;.then(c => getMoreData(c))<br/>&nbsp;&nbsp;.then(d => getMoreData(d))<br/>&nbsp;&nbsp;.catch(handleError);<br/><br/><strong>Решение 3 - Async/Await (лучшее):</strong><br/>async function processData() {<br/>&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const a = await getData();<br/>&nbsp;&nbsp;&nbsp;&nbsp;const b = await getMoreData(a);<br/>&nbsp;&nbsp;&nbsp;&nbsp;const c = await getMoreData(b);<br/>&nbsp;&nbsp;&nbsp;&nbsp;const d = await getMoreData(c);<br/>&nbsp;&nbsp;&nbsp;&nbsp;return d;<br/>&nbsp;&nbsp;} catch (error) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;handleError(error);<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Решение 4 - библиотеки (async.js)</strong>",
        difficulty: "easy",
      },

      {
        id: "js-124",
        question: "Что такое композиция функций?",
        answer:
          "Композиция функций — объединение простых функций в более сложные.<br/><br/><strong>Математическая композиция:</strong><br/>// (f ∘ g)(x) = f(g(x))<br/><br/><strong>Ручная композиция:</strong><br/>const compose = (f, g) => x => f(g(x));<br/><br/>const double = x => x * 2;<br/>const increment = x => x + 1;<br/><br/>const doubleThenIncrement = compose(increment, double);<br/>console.log(doubleThenIncrement(3)); // 7 (3*2+1)<br/><br/><strong>Композиция нескольких функций:</strong><br/>const compose = (...fns) => x =><br/>&nbsp;&nbsp;fns.reduceRight((acc, fn) => fn(acc), x);<br/><br/>const addTax = x => x * 1.2;<br/>const discount = x => x * 0.9;<br/>const round = x => Math.round(x);<br/><br/>const calculatePrice = compose(round, addTax, discount);<br/>console.log(calculatePrice(100)); // 108<br/><br/><strong>Pipe (обратный порядок):</strong><br/>const pipe = (...fns) => x =><br/>&nbsp;&nbsp;fns.reduce((acc, fn) => fn(acc), x);<br/><br/>const calculatePrice = pipe(discount, addTax, round);<br/><br/><strong>Практический пример:</strong><br/>const getUsers = () => fetch('/api/users');<br/>const parseJSON = res => res.json();<br/>const extractNames = users => users.map(u => u.name);<br/>const sortNames = names => names.sort();<br/><br/>const getUserNames = pipe(<br/>&nbsp;&nbsp;getUsers,<br/>&nbsp;&nbsp;parseJSON,<br/>&nbsp;&nbsp;extractNames,<br/>&nbsp;&nbsp;sortNames<br/>);",
        difficulty: "medium",
      },

      {
        id: "js-125",
        question: "Что такое паттерн Module?",
        answer:
          "Module Pattern — создание приватных и публичных методов/переменных через замыкания.<br/><br/><strong>Базовый модуль:</strong><br/>const Module = (function() {<br/>&nbsp;&nbsp;// Приватные переменные<br/>&nbsp;&nbsp;let privateVar = 'Приватно';<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Приватная функция<br/>&nbsp;&nbsp;function privateMethod() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(privateVar);<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Публичный API<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;publicMethod() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;privateMethod();<br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&nbsp;&nbsp;publicVar: 'Публично'<br/>&nbsp;&nbsp;};<br/>})();<br/><br/>Module.publicMethod(); // Работает<br/>Module.privateMethod(); // undefined<br/><br/><strong>Модуль с параметрами:</strong><br/>const Calculator = (function(initialValue) {<br/>&nbsp;&nbsp;let value = initialValue;<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;add(num) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value += num;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this;<br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&nbsp;&nbsp;subtract(num) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value -= num;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this;<br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&nbsp;&nbsp;getValue() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return value;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;};<br/>)(0);<br/><br/>Calculator.add(5).subtract(2).getValue(); // 3<br/><br/><strong>Revealing Module Pattern:</strong><br/>const Module = (function() {<br/>&nbsp;&nbsp;function privateFunc() {}<br/>&nbsp;&nbsp;function publicFunc1() {}<br/>&nbsp;&nbsp;function publicFunc2() {}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;method1: publicFunc1,<br/>&nbsp;&nbsp;&nbsp;&nbsp;method2: publicFunc2<br/>&nbsp;&nbsp;};<br/>})();",
        difficulty: "medium",
      },

      {
        id: "js-126",
        question: "Что такое паттерн Singleton?",
        answer:
          "Singleton — паттерн, гарантирующий что у класса только один экземпляр.<br/><br/><strong>С помощью IIFE:</strong><br/>const Singleton = (function() {<br/>&nbsp;&nbsp;let instance;<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;function createInstance() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: 'Я единственный',<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getName() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.name;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;};<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;getInstance() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!instance) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;instance = createInstance();<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return instance;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;};<br/>})();<br/><br/>const instance1 = Singleton.getInstance();<br/>const instance2 = Singleton.getInstance();<br/>console.log(instance1 === instance2); // true<br/><br/><strong>С помощью класса (ES6):</strong><br/>class Singleton {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (Singleton.instance) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return Singleton.instance;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;Singleton.instance = this;<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.data = [];<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;addData(item) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.data.push(item);<br/>&nbsp;&nbsp;}<br/>}<br/><br/>const s1 = new Singleton();<br/>const s2 = new Singleton();<br/>console.log(s1 === s2); // true<br/><br/><strong>Применение:</strong><br/>• Конфигурация приложения<br/>• Логирование<br/>• Подключение к БД<br/>• Кеш",
        difficulty: "medium",
      },

      {
        id: "js-127",
        question: "Что такое паттерн Observer (Наблюдатель)?",
        answer:
          "Observer — паттерн подписки объектов на события другого объекта.<br/><br/><strong>Реализация:</strong><br/>class Observable {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.observers = [];<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;subscribe(fn) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.observers.push(fn);<br/>&nbsp;&nbsp;&nbsp;&nbsp;return () => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.observers = this.observers.filter(sub => sub !== fn);<br/>&nbsp;&nbsp;&nbsp;&nbsp;};<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;notify(data) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.observers.forEach(observer => observer(data));<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Использование:</strong><br/>const observable = new Observable();<br/><br/>const unsubscribe1 = observable.subscribe(data => {<br/>&nbsp;&nbsp;console.log('Наблюдатель 1:', data);<br/>});<br/><br/>const unsubscribe2 = observable.subscribe(data => {<br/>&nbsp;&nbsp;console.log('Наблюдатель 2:', data);<br/>});<br/><br/>observable.notify('Новые данные'); // Оба получат<br/>unsubscribe1(); // Отписка<br/>observable.notify('Ещё данные'); // Только 2-й получит<br/><br/><strong>Практический пример - EventEmitter:</strong><br/>class EventEmitter {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.events = {};<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;on(event, callback) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (!this.events[event]) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.events[event] = [];<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.events[event].push(callback);<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;emit(event, data) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (this.events[event]) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.events[event].forEach(cb => cb(data));<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>}",
        difficulty: "medium",
      },

      {
        id: "js-128",
        question: "Что такое паттерн Factory?",
        answer:
          "Factory — паттерн создания объектов без указания конкретного класса.<br/><br/><strong>Простая фабрика:</strong><br/>class Car {<br/>&nbsp;&nbsp;constructor(type) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.type = type;<br/>&nbsp;&nbsp;}<br/>}<br/><br/>class Truck {<br/>&nbsp;&nbsp;constructor(type) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.type = type;<br/>&nbsp;&nbsp;}<br/>}<br/><br/>class VehicleFactory {<br/>&nbsp;&nbsp;createVehicle(type) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;switch(type) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 'car':<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return new Car('sedan');<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 'truck':<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return new Truck('pickup');<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new Error('Unknown type');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>}<br/><br/>const factory = new VehicleFactory();<br/>const car = factory.createVehicle('car');<br/><br/><strong>Фабричный метод:</strong><br/>class ButtonFactory {<br/>&nbsp;&nbsp;createButton(type) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;let button;<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (type === 'ios') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;button = new IOSButton();<br/>&nbsp;&nbsp;&nbsp;&nbsp;} else if (type === 'android') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;button = new AndroidButton();<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;return button;<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Практический пример:</strong><br/>function createUser(type, data) {<br/>&nbsp;&nbsp;const types = {<br/>&nbsp;&nbsp;&nbsp;&nbsp;admin: () => new Admin(data),<br/>&nbsp;&nbsp;&nbsp;&nbsp;moderator: () => new Moderator(data),<br/>&nbsp;&nbsp;&nbsp;&nbsp;guest: () => new Guest(data)<br/>&nbsp;&nbsp;};<br/>&nbsp;&nbsp;return types[type]();<br/>}<br/><br/><strong>Применение:</strong><br/>• Создание UI компонентов<br/>• Создание объектов с разной логикой<br/>• Абстракция создания",
        difficulty: "medium",
      },

      {
        id: "js-129",
        question: "Что такое NaN и как проверить значение на NaN?",
        answer:
          "NaN (Not-a-Number) — специальное числовое значение, означающее невалидное число.<br/><br/><strong>Как получить NaN:</strong><br/>console.log(0 / 0); // NaN<br/>console.log(Math.sqrt(-1)); // NaN<br/>console.log(parseInt('abc')); // NaN<br/>console.log(Number('hello')); // NaN<br/>console.log(undefined + 1); // NaN<br/><br/><strong>Особенность NaN:</strong><br/>console.log(NaN === NaN); // false<br/>console.log(NaN == NaN); // false<br/>// NaN не равен самому себе!<br/><br/><strong>Правильные способы проверки:</strong><br/><br/>1. <strong>isNaN()</strong> — преобразует в число:<br/>console.log(isNaN(NaN)); // true<br/>console.log(isNaN('hello')); // true (!'hello' → NaN)<br/>console.log(isNaN('123')); // false ('123' → 123)<br/><br/>2. <strong>Number.isNaN()</strong> — строгая проверка (лучше):<br/>console.log(Number.isNaN(NaN)); // true<br/>console.log(Number.isNaN('hello')); // false<br/>console.log(Number.isNaN('123')); // false<br/><br/>3. <strong>Object.is()</strong>:<br/>console.log(Object.is(value, NaN)); // true если NaN<br/><br/>4. <strong>Самопроверка</strong>:<br/>function isNaNValue(value) {<br/>&nbsp;&nbsp;return value !== value; // NaN единственное значение ≠ себе<br/>}<br/><br/><strong>typeof NaN:</strong><br/>console.log(typeof NaN); // 'number'",
        difficulty: "easy",
      },

      {
        id: "js-130",
        question: "Что такое оператор void?",
        answer:
          "Оператор void вычисляет выражение и возвращает undefined.<br/><br/><strong>Синтаксис:</strong><br/>void expression<br/><br/><strong>Примеры:</strong><br/>console.log(void 0); // undefined<br/>console.log(void(0)); // undefined<br/>console.log(void 'hello'); // undefined<br/>console.log(void(1 + 2)); // undefined<br/><br/><strong>Применение 1 - получение undefined:</strong><br/>// Безопасный способ получить undefined<br/>const undefinedValue = void 0;<br/>// вместо<br/>const undefinedValue = undefined; // может быть переопределён<br/><br/><strong>Применение 2 - ссылки без перехода:</strong><br/>&lt;a href='javascript:void(0)' onclick='doSomething()'&gt;Клик&lt;/a&gt;<br/>// Предотвращает переход по ссылке<br/><br/><strong>Применение 3 - IIFE:</strong><br/>void function() {<br/>&nbsp;&nbsp;console.log('IIFE');<br/>}();<br/>// Вместо<br/>(function() {<br/>&nbsp;&nbsp;console.log('IIFE');<br/>})();<br/><br/><strong>Применение 4 - стрелочные функции:</strong><br/>// Игнорирование возвращаемого значения<br/>button.onclick = () => void doSomething();<br/><br/><strong>В strict mode:</strong><br/>'use strict';<br/>void (function() {<br/>&nbsp;&nbsp;// Нестрогий режим внутри<br/>})();",
        difficulty: "medium",
      },

      {
        id: "js-131",
        question: "Что такое Object.preventExtensions(), Object.seal() и Object.freeze()?",
        answer:
          "Три уровня ограничения изменений объекта.<br/><br/><strong>Object.preventExtensions()</strong> — запрет добавления свойств:<br/>const obj = { name: 'Иван' };<br/>Object.preventExtensions(obj);<br/><br/>obj.name = 'Петр'; // ✅ Работает<br/>obj.age = 30; // ❌ Не работает<br/>delete obj.name; // ✅ Работает<br/><br/>console.log(Object.isExtensible(obj)); // false<br/><br/><strong>Object.seal()</strong> — запечатывание (нельзя добавлять/удалять):<br/>const obj = { name: 'Иван' };<br/>Object.seal(obj);<br/><br/>obj.name = 'Петр'; // ✅ Работает<br/>obj.age = 30; // ❌ Не работает<br/>delete obj.name; // ❌ Не работает<br/><br/>console.log(Object.isSealed(obj)); // true<br/><br/><strong>Object.freeze()</strong> — полная заморозка:<br/>const obj = { name: 'Иван' };<br/>Object.freeze(obj);<br/><br/>obj.name = 'Петр'; // ❌ Не работает<br/>obj.age = 30; // ❌ Не работает<br/>delete obj.name; // ❌ Не работает<br/><br/>console.log(Object.isFrozen(obj)); // true<br/><br/><strong>Таблица возможностей:</strong><br/><br/>preventExtensions:<br/>• Добавить: ❌<br/>• Изменить: ✅<br/>• Удалить: ✅<br/><br/>seal:<br/>• Добавить: ❌<br/>• Изменить: ✅<br/>• Удалить: ❌<br/><br/>freeze:<br/>• Добавить: ❌<br/>• Изменить: ❌<br/>• Удалить: ❌<br/><br/><strong>Важно:</strong> Все методы работают только на верхнем уровне (shallow)",
        difficulty: "medium",
      },

      {
        id: "js-132",
        question: "Что такое оператор запятая (comma operator)?",
        answer:
          "Оператор запятая вычисляет каждый операнд слева направо и возвращает значение последнего.<br/><br/><strong>Базовый пример:</strong><br/>let x = (1, 2, 3);<br/>console.log(x); // 3<br/><br/><strong>С выражениями:</strong><br/>let a = 1;<br/>let b = (a++, a + 5);<br/>console.log(a); // 2<br/>console.log(b); // 7<br/><br/><strong>В цикле for:</strong><br/>for (let i = 0, j = 10; i < j; i++, j--) {<br/>&nbsp;&nbsp;console.log(i, j);<br/>}<br/>// 0 10<br/>// 1 9<br/>// 2 8...<br/><br/><strong>Множественное присваивание:</strong><br/>let x, y, z;<br/>x = (y = 5, z = 10, y + z);<br/>console.log(x); // 15<br/>console.log(y); // 5<br/>console.log(z); // 10<br/><br/><strong>С return:</strong><br/>function test() {<br/>&nbsp;&nbsp;return (console.log('side effect'), 42);<br/>}<br/>console.log(test()); // 'side effect', затем 42<br/><br/><strong>Приоритет:</strong><br/>let x = 1, 2; // SyntaxError<br/>let x = (1, 2); // OK, x = 2<br/><br/><strong>На практике используется редко:</strong><br/>• Может снижать читаемость<br/>• Полезен в for циклах<br/>• Иногда в минифицированном коде",
        difficulty: "medium",
      },

      {
        id: "js-133",
        question: "Что такое Short-circuit evaluation?",
        answer:
          "Short-circuit evaluation — прекращение вычисления логических выражений при достижении определённого результата.<br/><br/><strong>Оператор && (AND):</strong><br/>// Если первое falsy, второе не вычисляется<br/>false && expensiveFunction(); // expensiveFunction не вызывается<br/>true && expensiveFunction(); // expensiveFunction вызывается<br/><br/><strong>Практическое применение &&:</strong><br/>// Условное выполнение<br/>isLoggedIn && redirectToDashboard();<br/><br/>// Проверка на существование<br/>user && user.name && console.log(user.name);<br/><br/>// React рендеринг<br/>{isVisible && &lt;Component /&gt;}<br/><br/><strong>Оператор || (OR):</strong><br/>// Если первое truthy, второе не вычисляется<br/>true || expensiveFunction(); // expensiveFunction не вызывается<br/>false || expensiveFunction(); // expensiveFunction вызывается<br/><br/><strong>Практическое применение ||:</strong><br/>// Значения по умолчанию<br/>const name = userName || 'Гость';<br/><br/>// Fallback цепочка<br/>const value = localStorage.get('key') || sessionStorage.get('key') || defaultValue;<br/><br/><strong>Nullish coalescing (??):</strong><br/>// Только для null/undefined<br/>const count = 0;<br/>const result1 = count || 10; // 10 (0 — falsy)<br/>const result2 = count ?? 10; // 0 (0 не null/undefined)<br/><br/><strong>Побочные эффекты:</strong><br/>let i = 0;<br/>false && i++; // i++ не выполнится<br/>console.log(i); // 0",
        difficulty: "medium",
      },

      {
        id: "js-134",
        question: "Что такое IIFE вариации?",
        answer:
          "IIFE (Immediately Invoked Function Expression) — функция, вызываемая сразу после создания.<br/><br/><strong>Классический IIFE:</strong><br/>(function() {<br/>&nbsp;&nbsp;console.log('IIFE');<br/>})();<br/><br/><strong>Альтернативный синтаксис:</strong><br/>(function() {<br/>&nbsp;&nbsp;console.log('IIFE');<br/>}());<br/><br/><strong>С параметрами:</strong><br/>(function(name, age) {<br/>&nbsp;&nbsp;console.log(name, age);<br/>})('Иван', 30);<br/><br/><strong>С возвращаемым значением:</strong><br/>const result = (function() {<br/>&nbsp;&nbsp;return 42;<br/>})();<br/><br/><strong>Стрелочная функция:</strong><br/>(() => {<br/>&nbsp;&nbsp;console.log('Arrow IIFE');<br/>})();<br/><br/><strong>Асинхронный IIFE:</strong><br/>(async function() {<br/>&nbsp;&nbsp;const data = await fetch('/api');<br/>&nbsp;&nbsp;console.log(data);<br/>})();<br/><br/><strong>С unary operators:</strong><br/>!function() { console.log('IIFE'); }();<br/>+function() { console.log('IIFE'); }();<br/>-function() { console.log('IIFE'); }();<br/>~function() { console.log('IIFE'); }();<br/>void function() { console.log('IIFE'); }();<br/><br/><strong>Именованный IIFE:</strong><br/>(function myIIFE() {<br/>&nbsp;&nbsp;console.log('Named IIFE');<br/>&nbsp;&nbsp;// Можно вызвать рекурсивно: myIIFE()<br/>})();<br/><br/><strong>Применение:</strong><br/>• Изоляция переменных<br/>• Модульный паттерн<br/>• Избежание глобального загрязнения",
        difficulty: "medium",
      },
      {
        id: "js-135",
        question: "В чём разница между isNaN() и Number.isNaN()?",
        answer:
          "<strong>isNaN()</strong> — преобразует аргумент в число, затем проверяет:<br/><br/>console.log(isNaN('hello')); // true (преобразует в NaN)<br/>console.log(isNaN('123')); // false (преобразует в 123)<br/>console.log(isNaN(true)); // false (преобразует в 1)<br/>console.log(isNaN(undefined)); // true (преобразует в NaN)<br/>console.log(isNaN({})); // true (преобразует в NaN)<br/><br/><strong>Number.isNaN()</strong> — строгая проверка без преобразования:<br/><br/>console.log(Number.isNaN('hello')); // false (не число)<br/>console.log(Number.isNaN('123')); // false (не NaN)<br/>console.log(Number.isNaN(NaN)); // true<br/>console.log(Number.isNaN(undefined)); // false<br/>console.log(Number.isNaN({})); // false<br/><br/><strong>Ключевое отличие:</strong><br/>// isNaN сначала пытается преобразовать в число<br/>isNaN(value) // → Number(value) → проверка на NaN<br/><br/>// Number.isNaN проверяет строго<br/>Number.isNaN(value) // → value === NaN (концептуально)<br/><br/><strong>Рекомендация:</strong><br/>Всегда используйте <strong>Number.isNaN()</strong> для точной проверки:<br/><br/>function isActuallyNaN(value) {<br/>&nbsp;&nbsp;return Number.isNaN(value);<br/>}",
        difficulty: "easy",
      },

      {
        id: "js-136",
        question: "Что такое ArrayBuffer и TypedArray?",
        answer:
          "<strong>ArrayBuffer</strong> — низкоуровневый контейнер для хранения бинарных данных фиксированного размера.<br/><br/><strong>Создание:</strong><br/>const buffer = new ArrayBuffer(16); // 16 байт<br/>console.log(buffer.byteLength); // 16<br/><br/><strong>TypedArray</strong> — представления для работы с ArrayBuffer:<br/><br/>// 8-битные целые<br/>const int8 = new Int8Array(buffer);<br/>const uint8 = new Uint8Array(buffer);<br/><br/>// 16-битные целые<br/>const int16 = new Int16Array(buffer);<br/>const uint16 = new Uint16Array(buffer);<br/><br/>// 32-битные целые<br/>const int32 = new Int32Array(buffer);<br/>const uint32 = new Uint32Array(buffer);<br/><br/>// Числа с плавающей точкой<br/>const float32 = new Float32Array(buffer);<br/>const float64 = new Float64Array(buffer);<br/><br/><strong>Работа с данными:</strong><br/>const buffer = new ArrayBuffer(8);<br/>const view = new Int32Array(buffer);<br/>view[0] = 42;<br/>view[1] = 100;<br/>console.log(view); // Int32Array [42, 100]<br/><br/><strong>DataView</strong> — гибкое представление:<br/>const buffer = new ArrayBuffer(8);<br/>const dataView = new DataView(buffer);<br/>dataView.setInt32(0, 42);<br/>dataView.setFloat32(4, 3.14);<br/><br/><strong>Применение:</strong><br/>• WebGL<br/>• Canvas API<br/>• Web Audio API<br/>• Работа с файлами<br/>• WebSockets бинарные данные",
        difficulty: "hard",
      },

      {
        id: "js-137",
        question: "Что такое label statement?",
        answer:
          "Label — метка для обозначения циклов и блоков, позволяющая использовать break/continue с конкретными циклами.<br/><br/><strong>Базовый синтаксис:</strong><br/>labelName: statement<br/><br/><strong>С вложенными циклами:</strong><br/>outer: for (let i = 0; i < 3; i++) {<br/>&nbsp;&nbsp;inner: for (let j = 0; j < 3; j++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (i === 1 && j === 1) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break outer; // Выход из внешнего цикла<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(i, j);<br/>&nbsp;&nbsp;}<br/>}<br/>// 0 0, 0 1, 0 2, 1 0<br/><br/><strong>Continue с меткой:</strong><br/>outer: for (let i = 0; i < 3; i++) {<br/>&nbsp;&nbsp;for (let j = 0; j < 3; j++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (j === 1) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue outer; // Переход к следующей итерации outer<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(i, j);<br/>&nbsp;&nbsp;}<br/>}<br/>// 0 0, 1 0, 2 0<br/><br/><strong>С блоками:</strong><br/>myBlock: {<br/>&nbsp;&nbsp;console.log('1');<br/>&nbsp;&nbsp;break myBlock; // Выход из блока<br/>&nbsp;&nbsp;console.log('2'); // Не выполнится<br/>}<br/>console.log('3');<br/><br/><strong>Поиск в матрице:</strong><br/>outerLoop: for (let row of matrix) {<br/>&nbsp;&nbsp;for (let value of row) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (value === target) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Найдено!');<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break outerLoop;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Важно:</strong> Используйте редко, код с метками труднее читать",
        difficulty: "medium",
      },

      {
        id: "js-138",
        question: "Что такое оператор instanceof и как он работает?",
        answer:
          "instanceof — проверяет, находится ли prototype конструктора в цепочке прототипов объекта.<br/><br/><strong>Базовое использование:</strong><br/>const arr = [];<br/>console.log(arr instanceof Array); // true<br/>console.log(arr instanceof Object); // true<br/><br/>class Animal {}<br/>class Dog extends Animal {}<br/>const dog = new Dog();<br/>console.log(dog instanceof Dog); // true<br/>console.log(dog instanceof Animal); // true<br/>console.log(dog instanceof Object); // true<br/><br/><strong>Как работает:</strong><br/>object instanceof Constructor<br/>// Проверяет:<br/>// Constructor.prototype в цепочке прототипов object?<br/><br/><strong>Алгоритм:</strong><br/>function myInstanceOf(obj, Constructor) {<br/>&nbsp;&nbsp;let proto = Object.getPrototypeOf(obj);<br/>&nbsp;&nbsp;while (proto !== null) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (proto === Constructor.prototype) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;proto = Object.getPrototypeOf(proto);<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;return false;<br/>}<br/><br/><strong>Особые случаи:</strong><br/>// Примитивы всегда false<br/>console.log(5 instanceof Number); // false<br/>console.log('hello' instanceof String); // false<br/><br/>// Но обёртки работают<br/>console.log(new Number(5) instanceof Number); // true<br/><br/><strong>Symbol.hasInstance</strong> — кастомизация:<br/>class MyClass {<br/>&nbsp;&nbsp;static [Symbol.hasInstance](obj) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return obj.isMyClass === true;<br/>&nbsp;&nbsp;}<br/>}<br/><br/>const obj = { isMyClass: true };<br/>console.log(obj instanceof MyClass); // true",
        difficulty: "medium",
      },

      {
        id: "js-139",
        question: "Что такое оператор in?",
        answer:
          "Оператор in проверяет наличие свойства в объекте или его цепочке прототипов.<br/><br/><strong>Базовое использование:</strong><br/>const obj = { name: 'Иван', age: 30 };<br/>console.log('name' in obj); // true<br/>console.log('toString' in obj); // true (из прототипа)<br/>console.log('salary' in obj); // false<br/><br/><strong>С массивами (проверка индексов):</strong><br/>const arr = ['a', 'b', 'c'];<br/>console.log(0 in arr); // true<br/>console.log(2 in arr); // true<br/>console.log(3 in arr); // false<br/>console.log('length' in arr); // true<br/><br/><strong>Разреженные массивы:</strong><br/>const sparse = [1, , 3];<br/>console.log(0 in sparse); // true<br/>console.log(1 in sparse); // false (пустой слот)<br/>console.log(2 in sparse); // true<br/><br/><strong>Отличие от hasOwnProperty:</strong><br/>const obj = { name: 'Иван' };<br/><br/>// in — проверяет всю цепочку<br/>console.log('toString' in obj); // true<br/><br/>// hasOwnProperty — только свои свойства<br/>console.log(obj.hasOwnProperty('toString')); // false<br/>console.log(obj.hasOwnProperty('name')); // true<br/><br/><strong>С Symbol:</strong><br/>const sym = Symbol('test');<br/>const obj = { [sym]: 'value' };<br/>console.log(sym in obj); // true<br/><br/><strong>Удалённые свойства:</strong><br/>const obj = { name: 'Иван' };<br/>delete obj.name;<br/>console.log('name' in obj); // false",
        difficulty: "easy",
      },

      {
        id: "js-140",
        question: "Что такое оператор delete и его особенности?",
        answer:
          "delete — удаляет свойство объекта. Возвращает true/false.<br/><br/><strong>Базовое использование:</strong><br/>const obj = { name: 'Иван', age: 30 };<br/>delete obj.age;<br/>console.log(obj); // { name: 'Иван' }<br/><br/><strong>Возвращаемое значение:</strong><br/>const obj = { x: 1 };<br/>console.log(delete obj.x); // true (удалено)<br/>console.log(delete obj.y); // true (не существовало)<br/><br/><strong>С массивами:</strong><br/>const arr = [1, 2, 3, 4];<br/>delete arr[1];<br/>console.log(arr); // [1, empty, 3, 4]<br/>console.log(arr.length); // 4 (не изменилась!)<br/>console.log(1 in arr); // false<br/><br/><strong>Нельзя удалить:</strong><br/><br/>1. Переменные (var, let, const):<br/>var x = 1;<br/>delete x; // false (в strict mode — SyntaxError)<br/><br/>2. Неконфигурируемые свойства:<br/>const obj = {};<br/>Object.defineProperty(obj, 'x', {<br/>&nbsp;&nbsp;value: 1,<br/>&nbsp;&nbsp;configurable: false<br/>});<br/>delete obj.x; // false<br/><br/>3. Встроенные свойства:<br/>delete Object.prototype; // false<br/>delete Array.length; // false<br/><br/><strong>В strict mode:</strong><br/>'use strict';<br/>const obj = {};<br/>Object.defineProperty(obj, 'x', {<br/>&nbsp;&nbsp;value: 1,<br/>&nbsp;&nbsp;configurable: false<br/>});<br/>delete obj.x; // TypeError<br/><br/><strong>Рекомендации:</strong><br/>• Для массивов используйте splice(), не delete<br/>• В strict mode больше ошибок",
        difficulty: "medium",
      },

      {
        id: "js-141",
        question: "Что такое оператор typeof и его особенности?",
        answer:
          "typeof — возвращает строку с типом операнда.<br/><br/><strong>Основные типы:</strong><br/>console.log(typeof 42); // 'number'<br/>console.log(typeof 'hello'); // 'string'<br/>console.log(typeof true); // 'boolean'<br/>console.log(typeof undefined); // 'undefined'<br/>console.log(typeof Symbol('s')); // 'symbol'<br/>console.log(typeof 123n); // 'bigint'<br/>console.log(typeof {}); // 'object'<br/>console.log(typeof function(){}); // 'function'<br/><br/><strong>Особенности и подводные камни:</strong><br/><br/>1. <strong>typeof null → 'object'</strong> (историческая ошибка):<br/>console.log(typeof null); // 'object' ❌<br/>// Правильная проверка на null:<br/>value === null<br/><br/>2. <strong>typeof [] → 'object'</strong>:<br/>console.log(typeof []); // 'object'<br/>// Правильная проверка массива:<br/>Array.isArray([])<br/><br/>3. <strong>typeof NaN → 'number'</strong>:<br/>console.log(typeof NaN); // 'number'<br/><br/>4. <strong>Необъявленные переменные:</strong><br/>console.log(typeof undeclaredVar); // 'undefined' (нет ошибки!)<br/>console.log(undeclaredVar); // ReferenceError<br/><br/>5. <strong>Функции — особый случай:</strong><br/>class MyClass {}<br/>console.log(typeof MyClass); // 'function'<br/><br/>6. <strong>С временной мёртвой зоной:</strong><br/>console.log(typeof x); // ReferenceError<br/>let x = 5;<br/><br/><strong>Практическое применение:</strong><br/>if (typeof window !== 'undefined') {<br/>&nbsp;&nbsp;// Код для браузера<br/>}",
        difficulty: "easy",
      },

      {
        id: "js-142",
        question: "Как работает сравнение объектов в JavaScript?",
        answer:
          "Объекты сравниваются по ссылке, не по значению.<br/><br/><strong>Сравнение по ссылке:</strong><br/>const obj1 = { name: 'Иван' };<br/>const obj2 = { name: 'Иван' };<br/>const obj3 = obj1;<br/><br/>console.log(obj1 === obj2); // false (разные объекты)<br/>console.log(obj1 === obj3); // true (та же ссылка)<br/><br/><strong>Массивы тоже сравниваются по ссылке:</strong><br/>console.log([1, 2, 3] === [1, 2, 3]); // false<br/>console.log([] === []); // false<br/><br/><strong>Глубокое сравнение (вручную):</strong><br/>function deepEqual(obj1, obj2) {<br/>&nbsp;&nbsp;// Проверка типов<br/>&nbsp;&nbsp;if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return obj1 === obj2;<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Проверка null<br/>&nbsp;&nbsp;if (obj1 === null || obj2 === null) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return obj1 === obj2;<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Проверка количества ключей<br/>&nbsp;&nbsp;const keys1 = Object.keys(obj1);<br/>&nbsp;&nbsp;const keys2 = Object.keys(obj2);<br/>&nbsp;&nbsp;if (keys1.length !== keys2.length) return false;<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Рекурсивная проверка значений<br/>&nbsp;&nbsp;for (let key of keys1) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (!deepEqual(obj1[key], obj2[key])) return false;<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;return true;<br/>}<br/><br/><strong>С библиотеками:</strong><br/>// Lodash<br/>_.isEqual(obj1, obj2);<br/><br/>// JSON (не работает с функциями, Symbol, undefined):<br/>JSON.stringify(obj1) === JSON.stringify(obj2);",
        difficulty: "medium",
      },

      {
        id: "js-143",
        question: "Что такое алгоритм приведения типов (Type Coercion)?",
        answer:
          "Type Coercion — автоматическое преобразование значений из одного типа в другой.<br/><br/><strong>Числовое преобразование:</strong><br/>console.log('5' - 3); // 2 (строка → число)<br/>console.log('5' * '2'); // 10<br/>console.log('10' / '2'); // 5<br/>console.log(true + 1); // 2 (true → 1)<br/>console.log(false + 1); // 1 (false → 0)<br/><br/><strong>Строковое преобразование:</strong><br/>console.log('5' + 3); // '53' (число → строка)<br/>console.log('Hello' + true); // 'Hellotrue'<br/>console.log('Value: ' + undefined); // 'Value: undefined'<br/><br/><strong>Логическое преобразование:</strong><br/>// Falsy значения:<br/>if ('') // false<br/>if (0) // false<br/>if (null) // false<br/>if (undefined) // false<br/>if (NaN) // false<br/>if (false) // false<br/><br/>// Всё остальное truthy<br/>if ('0') // true<br/>if ([]) // true<br/>if ({}) // true<br/><br/><strong>Сравнение с приведением (==):</strong><br/>console.log(5 == '5'); // true<br/>console.log(true == 1); // true<br/>console.log(false == 0); // true<br/>console.log(null == undefined); // true<br/>console.log('' == 0); // true<br/><br/><strong>Без приведения (===):</strong><br/>console.log(5 === '5'); // false<br/>console.log(true === 1); // false<br/><br/><strong>Странные случаи:</strong><br/>console.log([] + []); // '' (пустая строка)<br/>console.log([] + {}); // '[object Object]'<br/>console.log({} + []); // '[object Object]' или 0<br/>console.log(true + true + true); // 3<br/>console.log(true - true); // 0",
        difficulty: "medium",
      },

      {
        id: "js-144",
        question: "Что такое ToPrimitive и как он работает?",
        answer:
          "ToPrimitive — внутренняя операция преобразования объекта в примитив.<br/><br/><strong>Три режима преобразования:</strong><br/>• 'number' — для числовых операций<br/>• 'string' — для строковых операций<br/>• 'default' — неоднозначный контекст<br/><br/><strong>Алгоритм ToPrimitive:</strong><br/>1. Вызывает obj[Symbol.toPrimitive](hint)<br/>2. Если нет Symbol.toPrimitive:<br/>&nbsp;&nbsp;&nbsp;- для 'string': вызывает toString(), затем valueOf()<br/>&nbsp;&nbsp;&nbsp;- для 'number' и 'default': valueOf(), затем toString()<br/><br/><strong>Кастомное преобразование:</strong><br/>const obj = {<br/>&nbsp;&nbsp;value: 42,<br/>&nbsp;&nbsp;[Symbol.toPrimitive](hint) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('hint:', hint);<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (hint === 'number') return this.value;<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (hint === 'string') return `Value: ${this.value}`;<br/>&nbsp;&nbsp;&nbsp;&nbsp;return this.value; // default<br/>&nbsp;&nbsp;}<br/>};<br/><br/>console.log(+obj); // hint: number → 42<br/>console.log(`${obj}`); // hint: string → 'Value: 42'<br/>console.log(obj + 10); // hint: default → 52<br/><br/><strong>Без Symbol.toPrimitive:</strong><br/>const obj = {<br/>&nbsp;&nbsp;value: 100,<br/>&nbsp;&nbsp;toString() { return 'Obj'; },<br/>&nbsp;&nbsp;valueOf() { return this.value; }<br/>};<br/><br/>console.log(obj + 1); // 101 (valueOf)<br/>console.log(`${obj}`); // 'Obj' (toString)<br/>console.log(String(obj)); // 'Obj' (toString)<br/><br/><strong>Применение:</strong><br/>• Перегрузка операторов<br/>• Кастомное поведение при сравнении<br/>• Value objects",
        difficulty: "hard",
      },

      {
        id: "js-145",
        question: "Как работает оператор + с разными типами?",
        answer:
          "Оператор + имеет два режима: сложение чисел и конкатенация строк.<br/><br/><strong>Правила приоритета:</strong><br/>• Если хотя бы один операнд — строка → конкатенация<br/>• Иначе → числовое сложение<br/><br/><strong>Примеры:</strong><br/><br/><strong>Строки (конкатенация):</strong><br/>console.log('5' + 3); // '53'<br/>console.log(3 + '5'); // '35'<br/>console.log('Hello' + ' ' + 'World'); // 'Hello World'<br/>console.log('5' + '5'); // '55'<br/><br/><strong>Числа (сложение):</strong><br/>console.log(5 + 3); // 8<br/>console.log(5 + true); // 6 (true → 1)<br/>console.log(5 + false); // 5 (false → 0)<br/>console.log(5 + null); // 5 (null → 0)<br/><br/><strong>Смешанные типы:</strong><br/>console.log(1 + 2 + '3'); // '33' (слева направо: 3 + '3')<br/>console.log('1' + 2 + 3); // '123' ('1' + 2 → '12' + 3)<br/>console.log(1 + '2' + 3); // '123'<br/><br/><strong>Объекты и массивы:</strong><br/>console.log([1, 2] + [3, 4]); // '1,23,4'<br/>console.log({} + {}); // '[object Object][object Object]'<br/>console.log([] + []); // '' (пустая строка)<br/>console.log([] + {}); // '[object Object]'<br/><br/><strong>С undefined и NaN:</strong><br/>console.log(5 + undefined); // NaN<br/>console.log('5' + undefined); // '5undefined'<br/>console.log(5 + NaN); // NaN<br/>console.log('5' + NaN); // '5NaN'<br/><br/><strong>Унарный плюс:</strong><br/>console.log(+'5'); // 5 (преобразование в число)<br/>console.log(+true); // 1",
        difficulty: "medium",
      },

      {
        id: "js-146",
        question: "Что такое boxing и unboxing в JavaScript?",
        answer:
          "Boxing — автоматическое оборачивание примитива в объект-обёртку. Unboxing — обратный процесс.<br/><br/><strong>Boxing (автоматический):</strong><br/>const str = 'hello';<br/>console.log(str.toUpperCase()); // 'HELLO'<br/><br/>// За кулисами:<br/>// 1. Создаётся new String('hello')<br/>// 2. Вызывается метод toUpperCase()<br/>// 3. Объект-обёртка удаляется<br/><br/><strong>Примитивы без методов:</strong><br/>const num = 42;<br/>console.log(num.toString()); // '42'<br/><br/>const bool = true;<br/>console.log(bool.toString()); // 'true'<br/><br/><strong>Ручной boxing:</strong><br/>const strObj = new String('hello');<br/>console.log(typeof strObj); // 'object'<br/>console.log(strObj instanceof String); // true<br/><br/>const numObj = new Number(42);<br/>console.log(typeof numObj); // 'object'<br/><br/><strong>Unboxing (автоматический):</strong><br/>const strObj = new String('hello');<br/>const primitive = strObj.valueOf(); // 'hello'<br/>console.log(typeof primitive); // 'string'<br/><br/><strong>При операциях:</strong><br/>const num1 = new Number(5);<br/>const num2 = new Number(3);<br/>console.log(num1 + num2); // 8 (unboxing → 5 + 3)<br/><br/><strong>Сравнение:</strong><br/>console.log(new String('a') === 'a'); // false<br/>console.log(new String('a') == 'a'); // true (unboxing)<br/><br/><strong>Проблемы:</strong><br/>const x = new Boolean(false);<br/>if (x) { // true! (объект truthy)<br/>&nbsp;&nbsp;console.log('Выполнится');<br/>}",
        difficulty: "hard",
      },

      {
        id: "js-147",
        question: "Что такое Symbols и их применение?",
        answer:
          "Symbol — уникальный и неизменяемый примитивный тип для создания уникальных идентификаторов.<br/><br/><strong>Создание:</strong><br/>const sym1 = Symbol();<br/>const sym2 = Symbol('description');<br/>const sym3 = Symbol('description');<br/><br/>console.log(sym2 === sym3); // false (всегда уникальны)<br/><br/><strong>Глобальный реестр символов:</strong><br/>const sym1 = Symbol.for('app.id');<br/>const sym2 = Symbol.for('app.id');<br/>console.log(sym1 === sym2); // true<br/><br/>// Получение ключа<br/>console.log(Symbol.keyFor(sym1)); // 'app.id'<br/><br/><strong>Свойства объектов:</strong><br/>const id = Symbol('id');<br/>const user = {<br/>&nbsp;&nbsp;name: 'Иван',<br/>&nbsp;&nbsp;[id]: 123 // Symbol как ключ<br/>};<br/><br/>console.log(user[id]); // 123<br/><br/><strong>Скрытые свойства:</strong><br/>// Символы не видны в for...in и Object.keys()<br/>for (let key in user) {<br/>&nbsp;&nbsp;console.log(key); // только 'name'<br/>}<br/><br/>Object.keys(user); // ['name']<br/>Object.getOwnPropertySymbols(user); // [Symbol(id)]<br/><br/><strong>Well-known Symbols:</strong><br/>• Symbol.iterator — делает объект итерируемым<br/>• Symbol.toStringTag — изменяет [object Type]<br/>• Symbol.toPrimitive — преобразование в примитив<br/>• Symbol.hasInstance — кастомный instanceof<br/><br/><strong>Пример Symbol.toStringTag:</strong><br/>class MyClass {<br/>&nbsp;&nbsp;get [Symbol.toStringTag]() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return 'MyClass';<br/>&nbsp;&nbsp;}<br/>}<br/>console.log(Object.prototype.toString.call(new MyClass()));<br/>// '[object MyClass]'",
        difficulty: "medium",
      },
      {
        id: "js-148",
        question: "Что такое WeakRef и для чего он нужен?",
        answer:
          "WeakRef — слабая ссылка на объект, не препятствующая его удалению сборщиком мусора.<br/><br/><strong>Создание:</strong><br/>let obj = { name: 'Данные' };<br/>const weakRef = new WeakRef(obj);<br/><br/><strong>Получение значения:</strong><br/>const target = weakRef.deref();<br/>if (target) {<br/>&nbsp;&nbsp;console.log(target.name); // 'Данные'<br/>} else {<br/>&nbsp;&nbsp;console.log('Объект был удалён');<br/>}<br/><br/><strong>Пример кеша:</strong><br/>class Cache {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.cache = new Map();<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;set(key, value) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.cache.set(key, new WeakRef(value));<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;get(key) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const ref = this.cache.get(key);<br/>&nbsp;&nbsp;&nbsp;&nbsp;return ref?.deref();<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>С FinalizationRegistry:</strong><br/>const registry = new FinalizationRegistry((key) => {<br/>&nbsp;&nbsp;console.log(`Объект ${key} удалён`);<br/>});<br/><br/>let obj = { data: 'test' };<br/>const ref = new WeakRef(obj);<br/>registry.register(obj, 'myObject', ref);<br/><br/>obj = null; // После GC выполнится callback<br/><br/><strong>Важные моменты:</strong><br/>• Не гарантируется когда объект будет удалён<br/>• deref() может вернуть undefined<br/>• Используйте осторожно<br/>• Не для обычных задач<br/><br/><strong>Применение:</strong><br/>• Кеш с автоочисткой<br/>• Мониторинг объектов<br/>• Специфичные оптимизации памяти",
        difficulty: "hard",
      },

      {
        id: "js-149",
        question: "Что такое Номинальная и Структурная типизация?",
        answer:
          "<strong>JavaScript использует структурную (duck) типизацию</strong> — проверка по структуре, а не по имени типа.<br/><br/><strong>Структурная типизация:</strong><br/>// Если выглядит как утка и крякает как утка...<br/>function greet(obj) {<br/>&nbsp;&nbsp;if (typeof obj.name === 'string') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Hello, ${obj.name}`);<br/>&nbsp;&nbsp;}<br/>}<br/><br/>greet({ name: 'Иван' }); // Работает<br/>greet({ name: 'Петр', age: 30 }); // Тоже работает<br/><br/><strong>Номинальная типизация (TypeScript, Java):</strong><br/>// Проверка по имени класса/типа<br/>class User {<br/>&nbsp;&nbsp;constructor(public name: string) {}<br/>}<br/><br/>class Admin {<br/>&nbsp;&nbsp;constructor(public name: string) {}<br/>}<br/><br/>function greetUser(user: User) {<br/>&nbsp;&nbsp;console.log(user.name);<br/>}<br/><br/>greetUser(new Admin('test')); // Ошибка в номинальной<br/><br/><strong>Duck typing в JS:</strong><br/>// Проверяем возможности, а не тип<br/>function makeSound(animal) {<br/>&nbsp;&nbsp;if (typeof animal.speak === 'function') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;animal.speak();<br/>&nbsp;&nbsp;}<br/>}<br/><br/>makeSound({ speak: () => console.log('Гав') }); // OK<br/>makeSound({ speak: () => console.log('Мяу') }); // OK<br/><br/><strong>Проверка интерфейса:</strong><br/>function isIterable(obj) {<br/>&nbsp;&nbsp;return obj != null && typeof obj[Symbol.iterator] === 'function';<br/>}<br/><br/><strong>Преимущества структурной:</strong><br/>• Гибкость<br/>• Меньше boilerplate<br/>• Проще mock для тестов",
        difficulty: "hard",
      },

      {
        id: "js-150",
        question: "Что такое Nullish и Falsy значения?",
        answer:
          "<strong>Falsy</strong> — значения, преобразуемые в false в логическом контексте:<br/><br/>if (false) // false<br/>if (0) // false<br/>if (-0) // false<br/>if (0n) // false (BigInt)<br/>if ('') // false<br/>if (null) // false<br/>if (undefined) // false<br/>if (NaN) // false<br/><br/><strong>Все остальное — Truthy:</strong><br/>if ('0') // true (строка!)<br/>if ('false') // true (строка!)<br/>if ([]) // true (пустой массив!)<br/>if ({}) // true (пустой объект!)<br/>if (function(){}) // true<br/><br/><strong>Nullish</strong> — только null и undefined:<br/><br/>// С оператором ||<br/>const count = 0;<br/>const result1 = count || 10; // 10 (0 falsy)<br/><br/>// С оператором ??<br/>const result2 = count ?? 10; // 0 (0 не nullish)<br/><br/><strong>Разница между || и ??:</strong><br/>// || проверяет на falsy<br/>console.log('' || 'default'); // 'default'<br/>console.log(0 || 42); // 42<br/>console.log(false || true); // true<br/><br/>// ?? проверяет только на null/undefined<br/>console.log('' ?? 'default'); // ''<br/>console.log(0 ?? 42); // 0<br/>console.log(false ?? true); // false<br/><br/><strong>Практическое применение:</strong><br/>function setConfig(config) {<br/>&nbsp;&nbsp;// Плохо: теряем 0 и ''<br/>&nbsp;&nbsp;this.timeout = config.timeout || 1000;<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Хорошо: сохраняем 0 и ''<br/>&nbsp;&nbsp;this.timeout = config.timeout ?? 1000;<br/>}",
        difficulty: "easy",
      },

      {
        id: "js-151",
        question: "Что такое Optional chaining с функциями и массивами?",
        answer:
          "Optional chaining (?.) работает не только с объектами, но и с функциями и массивами.<br/><br/><strong>С функциями:</strong><br/>const user = {<br/>&nbsp;&nbsp;name: 'Иван',<br/>&nbsp;&nbsp;admin: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;permissions: () => ['read', 'write']<br/>&nbsp;&nbsp;}<br/>};<br/><br/>// Безопасный вызов метода<br/>console.log(user.admin?.permissions?.()); // ['read', 'write']<br/>console.log(user.guest?.permissions?.()); // undefined<br/><br/><strong>С массивами:</strong><br/>const users = [<br/>&nbsp;&nbsp;{ name: 'Иван' },<br/>&nbsp;&nbsp;{ name: 'Петр' }<br/>];<br/><br/>console.log(users?.[0]?.name); // 'Иван'<br/>console.log(users?.[5]?.name); // undefined<br/>console.log(nullArray?.[0]); // undefined<br/><br/><strong>Динамические свойства:</strong><br/>const obj = { a: 1, b: 2 };<br/>const key = 'c';<br/>console.log(obj?.[key]); // undefined<br/><br/><strong>Вложенные структуры:</strong><br/>const data = {<br/>&nbsp;&nbsp;users: [<br/>&nbsp;&nbsp;&nbsp;&nbsp;{ profile: { getName: () => 'Иван' } }<br/>&nbsp;&nbsp;]<br/>};<br/><br/>console.log(data?.users?.[0]?.profile?.getName?.()); // 'Иван'<br/>console.log(data?.users?.[1]?.profile?.getName?.()); // undefined<br/><br/><strong>С delete:</strong><br/>delete user?.profile?.avatar;<br/><br/><strong>Не работает на левой стороне присваивания:</strong><br/>obj?.property = value; // SyntaxError<br/><br/><strong>Практический пример:</strong><br/>function processData(api) {<br/>&nbsp;&nbsp;const data = api?.getData?.();<br/>&nbsp;&nbsp;const firstItem = data?.[0];<br/>&nbsp;&nbsp;return firstItem?.value ?? 'default';<br/>}",
        difficulty: "medium",
      },

      {
        id: "js-152",
        question: "Как работает async/await с циклами?",
        answer:
          "Async/await в циклах требует внимательности для правильной последовательной или параллельной обработки.<br/><br/><strong>Последовательное выполнение (for...of):</strong><br/>const urls = ['url1', 'url2', 'url3'];<br/><br/>for (const url of urls) {<br/>&nbsp;&nbsp;const data = await fetch(url);<br/>&nbsp;&nbsp;console.log(data);<br/>}<br/>// Ждёт каждый запрос по очереди<br/><br/><strong>Параллельное выполнение (Promise.all):</strong><br/>const promises = urls.map(url => fetch(url));<br/>const results = await Promise.all(promises);<br/>// Все запросы одновременно<br/><br/><strong>❌ forEach не работает с await:</strong><br/>urls.forEach(async (url) => {<br/>&nbsp;&nbsp;const data = await fetch(url); // НЕ ждёт!<br/>&nbsp;&nbsp;console.log(data);<br/>});<br/>console.log('Выполнится сразу');<br/><br/><strong>✅ for...of с await:</strong><br/>for (const url of urls) {<br/>&nbsp;&nbsp;const data = await fetch(url); // Ждёт<br/>&nbsp;&nbsp;console.log(data);<br/>}<br/><br/><strong>Параллельно с ограничением:</strong><br/>async function processInBatches(items, batchSize) {<br/>&nbsp;&nbsp;for (let i = 0; i < items.length; i += batchSize) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const batch = items.slice(i, i + batchSize);<br/>&nbsp;&nbsp;&nbsp;&nbsp;await Promise.all(batch.map(item => processItem(item)));<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Reduce с await:</strong><br/>const result = await urls.reduce(async (acc, url) => {<br/>&nbsp;&nbsp;const accumulated = await acc;<br/>&nbsp;&nbsp;const data = await fetch(url);<br/>&nbsp;&nbsp;return [...accumulated, data];<br/>}, Promise.resolve([]));<br/><br/><strong>Map с await:</strong><br/>const results = await Promise.all(<br/>&nbsp;&nbsp;urls.map(async (url) => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return await fetch(url);<br/>&nbsp;&nbsp;})<br/>);",
        difficulty: "medium",
      },

      {
        id: "js-153",
        question: "Что такое AbortController для отмены операций?",
        answer:
          "AbortController — API для отмены асинхронных операций (fetch, событий и т.д.).<br/><br/><strong>Базовое использование:</strong><br/>const controller = new AbortController();<br/>const signal = controller.signal;<br/><br/>fetch('/api/data', { signal })<br/>&nbsp;&nbsp;.then(response => response.json())<br/>&nbsp;&nbsp;.catch(err => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (err.name === 'AbortError') {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Запрос отменён');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;});<br/><br/>// Отмена<br/>controller.abort();<br/><br/><strong>Отмена предыдущего запроса:</strong><br/>let controller;<br/><br/>async function search(query) {<br/>&nbsp;&nbsp;// Отменяем предыдущий запрос<br/>&nbsp;&nbsp;controller?.abort();<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;controller = new AbortController();<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch(`/api/search?q=${query}`, {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signal: controller.signal<br/>&nbsp;&nbsp;&nbsp;&nbsp;});<br/>&nbsp;&nbsp;&nbsp;&nbsp;return await response.json();<br/>&nbsp;&nbsp;} catch (err) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (err.name !== 'AbortError') throw err;<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>С timeout:</strong><br/>const controller = new AbortController();<br/>setTimeout(() => controller.abort(), 5000);<br/><br/>fetch('/api/data', { signal: controller.signal });<br/><br/><strong>Отмена addEventListener:</strong><br/>const controller = new AbortController();<br/><br/>button.addEventListener('click', () => {<br/>&nbsp;&nbsp;console.log('Клик');<br/>}, { signal: controller.signal });<br/><br/>// Удаляет слушателя<br/>controller.abort();<br/><br/><strong>Проверка отмены:</strong><br/>signal.addEventListener('abort', () => {<br/>&nbsp;&nbsp;console.log('Операция отменена');<br/>});<br/><br/>if (signal.aborted) {<br/>&nbsp;&nbsp;console.log('Уже отменено');<br/>}<br/><br/><strong>Свой async код:</strong><br/>async function myAsyncFunction(signal) {<br/>&nbsp;&nbsp;if (signal.aborted) throw new Error('Aborted');<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;await someOperation();<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;if (signal.aborted) throw new Error('Aborted');<br/>}",
        difficulty: "medium",
      },

      {
        id: "js-154",
        question: "Что такое Event Capturing и Event Bubbling подробнее?",
        answer:
          "Два механизма распространения событий в DOM.<br/><br/><strong>Три фазы события:</strong><br/>1. <strong>Capturing</strong> (погружение) — от window к target<br/>2. <strong>Target</strong> — на целевом элементе<br/>3. <strong>Bubbling</strong> (всплытие) — от target к window<br/><br/><strong>HTML структура:</strong><br/>&lt;div id='outer'&gt;<br/>&nbsp;&nbsp;&lt;div id='middle'&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id='inner'&gt;Клик&lt;/div&gt;<br/>&nbsp;&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;<br/><br/><strong>Bubbling (по умолчанию):</strong><br/>outer.addEventListener('click', () => console.log('outer'));<br/>middle.addEventListener('click', () => console.log('middle'));<br/>inner.addEventListener('click', () => console.log('inner'));<br/><br/>// Клик на inner → 'inner', 'middle', 'outer'<br/><br/><strong>Capturing (useCapture: true):</strong><br/>outer.addEventListener('click', () => console.log('outer'), true);<br/>middle.addEventListener('click', () => console.log('middle'), true);<br/>inner.addEventListener('click', () => console.log('inner'), true);<br/><br/>// Клик на inner → 'outer', 'middle', 'inner'<br/><br/><strong>Полный цикл:</strong><br/>outer.addEventListener('click', () => console.log('outer capture'), true);<br/>outer.addEventListener('click', () => console.log('outer bubble'));<br/>inner.addEventListener('click', () => console.log('inner'));<br/><br/>// Клик на inner:<br/>// 'outer capture', 'inner', 'outer bubble'<br/><br/><strong>Остановка распространения:</strong><br/>element.addEventListener('click', (e) => {<br/>&nbsp;&nbsp;e.stopPropagation(); // останавливает bubbling<br/>&nbsp;&nbsp;console.log('Stopped');<br/>});<br/><br/><strong>event.target vs event.currentTarget:</strong><br/>• target — элемент, на котором произошло событие<br/>• currentTarget — элемент с обработчиком",
        difficulty: "medium",
      },

      {
        id: "js-155",
        question: "Что такое Custom Events?",
        answer:
          "Custom Events — создание и отправка собственных событий.<br/><br/><strong>Создание события:</strong><br/>const event = new CustomEvent('myevent', {<br/>&nbsp;&nbsp;detail: { message: 'Hello' },<br/>&nbsp;&nbsp;bubbles: true,<br/>&nbsp;&nbsp;cancelable: true<br/>});<br/><br/><strong>Отправка события:</strong><br/>element.dispatchEvent(event);<br/><br/><strong>Обработка:</strong><br/>element.addEventListener('myevent', (e) => {<br/>&nbsp;&nbsp;console.log(e.detail.message); // 'Hello'<br/>});<br/><br/><strong>Практический пример - компонент:</strong><br/>class Counter extends HTMLElement {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;super();<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.count = 0;<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;increment() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.count++;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Отправка события<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.dispatchEvent(new CustomEvent('countchange', {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;detail: { count: this.count },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bubbles: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;}));<br/>&nbsp;&nbsp;}<br/>}<br/><br/>// Использование<br/>counter.addEventListener('countchange', (e) => {<br/>&nbsp;&nbsp;console.log('New count:', e.detail.count);<br/>});<br/><br/><strong>Event с данными:</strong><br/>document.dispatchEvent(new CustomEvent('user:login', {<br/>&nbsp;&nbsp;detail: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;username: 'ivan',<br/>&nbsp;&nbsp;&nbsp;&nbsp;timestamp: Date.now()<br/>&nbsp;&nbsp;}<br/>}));<br/><br/><strong>Отменяемое событие:</strong><br/>const event = new CustomEvent('confirm', {<br/>&nbsp;&nbsp;cancelable: true<br/>});<br/><br/>element.addEventListener('confirm', (e) => {<br/>&nbsp;&nbsp;if (!userConfirmed) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();<br/>&nbsp;&nbsp;}<br/>});<br/><br/>if (!element.dispatchEvent(event)) {<br/>&nbsp;&nbsp;console.log('Отменено');<br/>}",
        difficulty: "medium",
      },

      {
        id: "js-156",
        question: "Как работает метод bind() подробнее?",
        answer:
          "bind() создаёт новую функцию с привязанным this и частичным применением аргументов.<br/><br/><strong>Привязка this:</strong><br/>const user = {<br/>&nbsp;&nbsp;name: 'Иван',<br/>&nbsp;&nbsp;greet() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Привет, ${this.name}`);<br/>&nbsp;&nbsp;}<br/>};<br/><br/>const greet = user.greet;<br/>greet(); // undefined (потерян контекст)<br/><br/>const boundGreet = user.greet.bind(user);<br/>boundGreet(); // 'Привет, Иван'<br/><br/><strong>Частичное применение аргументов:</strong><br/>function multiply(a, b) {<br/>&nbsp;&nbsp;return a * b;<br/>}<br/><br/>const double = multiply.bind(null, 2);<br/>console.log(double(5)); // 10<br/>console.log(double(10)); // 20<br/><br/><strong>С методами:</strong><br/>const module = {<br/>&nbsp;&nbsp;x: 42,<br/>&nbsp;&nbsp;getX() { return this.x; }<br/>};<br/><br/>const unboundGetX = module.getX;<br/>console.log(unboundGetX()); // undefined<br/><br/>const boundGetX = unboundGetX.bind(module);<br/>console.log(boundGetX()); // 42<br/><br/><strong>В обработчиках событий:</strong><br/>class Component {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.count = 0;<br/>&nbsp;&nbsp;&nbsp;&nbsp;// Привязываем в конструкторе<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.handleClick = this.handleClick.bind(this);<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;handleClick() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.count++;<br/>&nbsp;&nbsp;}<br/>}<br/><br/><strong>Реализация bind вручную:</strong><br/>Function.prototype.myBind = function(context, ...args) {<br/>&nbsp;&nbsp;const fn = this;<br/>&nbsp;&nbsp;return function(...newArgs) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return fn.apply(context, [...args, ...newArgs]);<br/>&nbsp;&nbsp;};<br/>}<br/><br/><strong>Важно:</strong><br/>• bind() возвращает новую функцию<br/>• Нельзя повторно привязать this<br/>• Не работает со стрелочными функциями",
        difficulty: "medium",
      },

      {
        id: "js-157",
        question: "В чём разница между apply() и call()?",
        answer:
          "apply() и call() вызывают функцию с указанным this, но отличаются способом передачи аргументов.<br/><br/><strong>call() — аргументы через запятую:</strong><br/>function greet(greeting, punctuation) {<br/>&nbsp;&nbsp;return `${greeting}, ${this.name}${punctuation}`;<br/>}<br/><br/>const user = { name: 'Иван' };<br/>console.log(greet.call(user, 'Привет', '!')); // 'Привет, Иван!'<br/><br/><strong>apply() — аргументы массивом:</strong><br/>console.log(greet.apply(user, ['Привет', '!'])); // 'Привет, Иван!'<br/><br/><strong>Когда использовать apply:</strong><br/>// Когда аргументы уже в массиве<br/>const numbers = [5, 6, 2, 3, 7];<br/>const max = Math.max.apply(null, numbers);<br/>console.log(max); // 7<br/><br/>// С ES6 можно использовать spread<br/>const max2 = Math.max(...numbers);<br/><br/><strong>Заимствование методов:</strong><br/>const arrayLike = {<br/>&nbsp;&nbsp;0: 'a',<br/>&nbsp;&nbsp;1: 'b',<br/>&nbsp;&nbsp;2: 'c',<br/>&nbsp;&nbsp;length: 3<br/>};<br/><br/>// Используем метод массива<br/>Array.prototype.slice.call(arrayLike); // ['a', 'b', 'c']<br/>Array.prototype.forEach.call(arrayLike, item => {<br/>&nbsp;&nbsp;console.log(item);<br/>});<br/><br/><strong>Разница в сигнатуре:</strong><br/>func.call(thisArg, arg1, arg2, ...)<br/>func.apply(thisArg, [arg1, arg2, ...])<br/><br/><strong>Производительность:</strong><br/>// call чуть быстрее, если мало аргументов<br/>// apply удобнее, если аргументы в массиве<br/><br/><strong>Мнемоника:</strong><br/>• <strong>C</strong>all → <strong>C</strong>omma (через запятую)<br/>• <strong>A</strong>pply → <strong>A</strong>rray (массив)",
        difficulty: "easy",
      },

      {
        id: "js-158",
        question: "Что такое arguments объект?",
        answer:
          "arguments — array-like объект, содержащий все аргументы, переданные в функцию.<br/><br/><strong>Базовое использование:</strong><br/>function sum() {<br/>&nbsp;&nbsp;let total = 0;<br/>&nbsp;&nbsp;for (let i = 0; i < arguments.length; i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;total += arguments[i];<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;return total;<br/>}<br/><br/>console.log(sum(1, 2, 3, 4)); // 10<br/><br/><strong>Свойства arguments:</strong><br/>function test(a, b) {<br/>&nbsp;&nbsp;console.log(arguments.length); // количество аргументов<br/>&nbsp;&nbsp;console.log(arguments[0]); // первый аргумент<br/>&nbsp;&nbsp;console.log(arguments.callee); // сама функция (deprecated)<br/>}<br/><br/><strong>Array-like, но не Array:</strong><br/>function test() {<br/>&nbsp;&nbsp;console.log(Array.isArray(arguments)); // false<br/>&nbsp;&nbsp;console.log(arguments instanceof Array); // false<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Нет методов массива<br/>&nbsp;&nbsp;// arguments.forEach(); // ❌ TypeError<br/>}<br/><br/><strong>Преобразование в массив:</strong><br/>// ES5<br/>const args = Array.prototype.slice.call(arguments);<br/><br/>// ES6<br/>const args = Array.from(arguments);<br/>const args = [...arguments];<br/><br/><strong>Rest параметры (современная альтернатива):</strong><br/>function sum(...numbers) {<br/>&nbsp;&nbsp;return numbers.reduce((a, b) => a + b, 0);<br/>}<br/><br/><strong>Не работает в стрелочных функциях:</strong><br/>const arrow = () => {<br/>&nbsp;&nbsp;console.log(arguments); // ReferenceError<br/>};<br/><br/>// Используйте rest<br/>const arrow = (...args) => {<br/>&nbsp;&nbsp;console.log(args); // ✅<br/>};<br/><br/><strong>Связь с параметрами:</strong><br/>function test(a, b) {<br/>&nbsp;&nbsp;arguments[0] = 10;<br/>&nbsp;&nbsp;console.log(a); // 10 (в non-strict)<br/>}",
        difficulty: "medium",
      },
    ],
  },
  // OOP
  {
    id: "oop",
    name: "OOP",
    questions: [
      {
        id: "oop-1",
        question: "Что такое ООП и назовите его 4 основных столпа.",
        answer:
          "<strong>Объектно-Ориентированное Программирование (ООП)</strong> — это парадигма, которая организует код вокруг <strong>объектов</strong>, объединяющих данные (свойства) и поведение (методы). Это позволяет создавать более модульный, гибкий и повторно используемый код. \n\n<strong>4 основных столпа (принципа) ООП:</strong>\n1. <strong>Инкапсуляция (Encapsulation)</strong>\n2. <strong>Наследование (Inheritance)</strong>\n3. <strong>Полиморфизм (Polymorphism)</strong>\n4. <strong>Абстракция (Abstraction)</strong>",
        difficulty: "easy",
      },
      {
        id: "oop-2",
        question: "Объясните концепции Классов (Classes) и Объектов (Objects).",
        answer:
          "* <strong>Класс (Class):</strong> Это <strong>шаблон</strong> или <strong>чертеж</strong> для создания объектов. Он определяет общие свойства (атрибуты) и поведение (методы), которыми будут обладать все его экземпляры.\n* <strong>Объект (Object):</strong> Это конкретный <strong>экземпляр</strong> класса. У каждого объекта есть своя уникальная идентичность, состояние (текущие значения свойств) и поведение.\n\n<strong>Пример (TS):</strong>\n```typescript\nclass Car { /* Класс */\n  model: string;\n  constructor(model: string) { this.model = model; }\n}\nconst myCar = new Car('Tesla'); // Объект (экземпляр)\n```",
        difficulty: "easy",
      },
      {
        id: "oop-3",
        question: "Что такое Инкапсуляция и как она реализуется в TypeScript/JavaScript?",
        answer:
          "<strong>Инкапсуляция</strong> — это объединение данных и методов, работающих с этими данными, в единый блок (Класс), а также <strong>скрытие</strong> внутренней реализации (состояния) от внешнего доступа. Это обеспечивает <strong>целостность данных</strong>.\n\nВ <strong>TypeScript</strong> это реализуется через модификаторы доступа: `public`, `private`, `protected`. В <strong>JavaScript</strong> (до приватных полей `#`): через соглашения (префикс `_`) или замыкания.\n\n<strong>Пример (TS с `private`):</strong>\n```typescript\nclass Account {\n  private balance: number = 0; \n  public deposit(amount: number) { \n    if (amount > 0) this.balance += amount; \n  }\n  public getBalance(): number { return this.balance; }\n}\n```",
        difficulty: "medium",
      },
      {
        id: "oop-4",
        question: "Что такое Наследование и как оно работает в JavaScript/TypeScript?",
        answer:
          "<strong>Наследование</strong> — это механизм, который позволяет новому классу (<strong>дочернему/наследнику</strong>) приобретать свойства и методы существующего класса (<strong>родительского/базового</strong>). Оно устанавливает отношение <strong>\"является-чем-то\" (is-a)</strong> и способствует повторному использованию кода.\n\nВ JS/TS для этого используется ключевое слово <strong>`extends`</strong> и вызов <strong>`super()`</strong> в конструкторе наследника.\n\n<strong>Пример (JS):</strong>\n```javascript\nclass Animal { \n  constructor(name) { this.name = name; }\n  makeSound() { console.log('Some sound'); }\n}\nclass Dog extends Animal {\n  makeSound() { console.log('Woof'); } // Переопределение\n}\nconst dog = new Dog('Buddy');\ndog.makeSound(); // Output: Woof\n```",
        difficulty: "medium",
      },
      {
        id: "oop-5",
        question: "Что такое Полиморфизм и какие его типы существуют?",
        answer:
          "<strong>Полиморфизм</strong> (многообразие форм) позволяет объектам из разных классов отвечать на одно и то же сообщение (вызов метода) <strong>по-разному</strong>, при этом сохраняя общий интерфейс. Это позволяет писать более общий и гибкий код.\n\n<strong>Типы полиморфизма:</strong>\n1. <strong>Наследование (Runtime Polymorphism):</strong> Достигается через <strong>переопределение (Method Overriding)</strong> метода родительского класса в дочернем (как в примере выше).\n2. <strong>Интерфейсы/Абстрактные классы:</strong> Объекты, реализующие один и тот же интерфейс, могут быть обработаны одинаково.\n\n<strong>Пример (TS с интерфейсом):</strong>\n```typescript\ninterface Speaker { speak(): void; }\nclass Cat implements Speaker { speak() { console.log('Meow'); } }\nclass Duck implements Speaker { speak() { console.log('Quack'); } }\n// Функция принимает любой объект, реализующий Speaker\nfunction animalSpeak(animal: Speaker) { animal.speak(); }\n```",
        difficulty: "medium",
      },
      {
        id: "oop-6",
        question: "Что такое Абстракция и как она реализуется в TypeScript?",
        answer:
          "<strong>Абстракция</strong> — это процесс сосредоточения на <strong>существенных</strong> характеристиках объекта, игнорируя незначительные детали реализации. Она предоставляет <strong>простой интерфейс</strong> для сложных внутренних систем.\n\nВ <strong>TypeScript</strong> она реализуется через <strong>Интерфейсы (`interface`)</strong> и <strong>Абстрактные Классы (`abstract class`)</strong>.\n\n<strong>Пример (TS с абстрактным классом):</strong>\n```typescript\nabstract class Geometry {\n  abstract calculateArea(): number; // Метод должен быть реализован наследниками\n  display() { console.log('Calculating geometry...'); }\n}\nclass Circle extends Geometry {\n  constructor(private radius: number) { super(); }\n  calculateArea() { return Math.PI * this.radius * this.radius; }\n}\n// let shape = new Geometry(); // Ошибка, абстрактный класс нельзя инстанцировать\n```",
        difficulty: "medium",
      },
      {
        id: "oop-7",
        question: "Какова роль Конструктора (Constructor)?",
        answer:
          "<strong>Конструктор</strong> — это специальный метод внутри класса, который <strong>автоматически вызывается</strong> при создании (инстанцировании) нового объекта. Его основная роль — <strong>инициализировать</strong> состояние нового объекта, присваивая начальные значения его свойствам.\n\nВ JS/TS используется метод с именем <strong>`constructor`</strong>.\n\n<strong>Пример (JS):</strong>\n```javascript\nclass Person {\n  constructor(firstName, lastName) { // Конструктор\n    this.firstName = firstName;\n    this.lastName = lastName;\n    this.fullName = `${firstName} ${lastName}`;\n  }\n}\n```",
        difficulty: "easy",
      },
      {
        id: "oop-8",
        question: "В чем разница между Методом (Method) и Функцией (Function)?",
        answer:
          "* <strong>Функция:</strong> Блок кода, который может быть вызван <strong>самостоятельно</strong>, независимо от какого-либо объекта.\n* <strong>Метод:</strong> Это <strong>функция, определенная внутри класса</strong> (или объекта) и связанная с ним. Метод всегда вызывается в контексте объекта и имеет доступ к его данным через ключевое слово <strong>`this`</strong>.\n\n<strong>Пример (JS):</strong>\n```javascript\nfunction standaloneLog(msg) { console.log(msg); } // Функция\n\nclass Logger {\n  log(msg) { console.log(this.prefix + msg); } // Метод\n}\n```",
        difficulty: "easy",
      },
      {
        id: "oop-9",
        question: "Что такое «Согласованность» (Cohesion) и «Связность» (Coupling) в ООП?",
        answer:
          "* <strong>Согласованность (Cohesion):</strong> Мера того, насколько тесно связаны и сфокусированы на одной задаче методы и свойства внутри <strong>одного класса</strong>. <strong>Высокая согласованность</strong> (класс делает одно дело, и делает его хорошо) — это хорошо.\n* <strong>Связность (Coupling):</strong> Мера зависимости <strong>двух разных классов</strong> или модулей друг от друга. <strong>Низкая связность</strong> (классы минимально зависят друг от друга) — это хорошо, так как упрощает изменения и тестирование.",
        difficulty: "medium",
      },
      {
        id: "oop-10",
        question: "Что такое Интерфейс (Interface) в TypeScript?",
        answer:
          "<strong>Интерфейс (`interface`)</strong> — это мощная функция TypeScript, которая определяет <strong>контракт</strong> на структуру объекта. Он описывает, какие свойства и методы должен иметь объект, который его реализует, но <strong>не содержит никакой реализации</strong>.\n\n<strong>Использование:</strong> Обеспечивает строгую типизацию, используется для полиморфизма и как описание API.\n\n<strong>Пример (TS):</strong>\n```typescript\ninterface User {\n  id: number;\n  email: string;\n  logAccess(): void;\n}\n\nclass Admin implements User { \n  id: number = 1;\n  email: string = 'admin@';\n  logAccess() { console.log('Admin logged in.'); }\n}\n```",
        difficulty: "medium",
      },
      {
        id: "oop-11",
        question: "Объясните разницу между Композицией и Агрегацией.",
        answer:
          'Обе концепции описывают отношение <strong>"имеет-в-себе" (has-a)</strong>, но различаются силой связи:\n* <strong>Композиция (Composition):</strong> <strong>Сильная</strong> зависимость. Части <strong>не могут существовать</strong> без целого. При уничтожении целого, части также уничтожаются.\n* <strong>Агрегация (Aggregation):</strong> <strong>Слабая</strong> зависимость. Части могут <strong>продолжать существовать</strong> независимо от целого. Целое использует части, но не управляет их жизненным циклом.\n\n<strong>Пример Композиции (JS):</strong> Класс `Engine` создается внутри класса `Car` (двигатель не может существовать сам по себе).',
        difficulty: "medium",
      },
      {
        id: "oop-12",
        question: "Как в JavaScript/TypeScript создать статическое свойство или метод?",
        answer:
          "Статические члены класса принадлежат <strong>самому классу</strong>, а не его экземплярам (объектам). Они полезны для служебных функций, которые не зависят от состояния конкретного объекта (например, фабричные методы, константы).\n\nДля создания статических членов используется ключевое слово <strong>`static`</strong>.\n\n<strong>Пример (TS):</strong>\n```typescript\nclass Validator {\n  static MIN_LENGTH: number = 5; // Статическое свойство\n\n  static validate(input: string): boolean { // Статический метод\n    return input.length >= Validator.MIN_LENGTH;\n  }\n}\n\nconsole.log(Validator.validate('hello')); // Вызов через класс\n// const v = new Validator(); v.validate() // Ошибка\n```",
        difficulty: "medium",
      },
      {
        id: "oop-13",
        question: "Что такое перегрузка (Overloading) и поддерживает ли ее JavaScript/TypeScript?",
        answer:
          "<strong>Перегрузка метода (Method Overloading)</strong> — это возможность определить <strong>несколько методов</strong> с <strong>одним и тем же именем</strong>, но с <strong>разными сигнатурами</strong> (разное количество или типы параметров).\n\n* <strong>JavaScript:</strong> <strong>Не поддерживает</strong> перегрузку, так как функции определяются только по имени (последняя определенная функция переписывает предыдущие).\n* <strong>TypeScript:</strong> <strong>Эмулирует</strong> перегрузку для целей типизации (объявления нескольких сигнатур), но фактическая реализация метода должна быть <strong>одна</strong>, обрабатывающая все возможные сигнатуры.\n\n<strong>Пример эмуляции в TS:</strong>\n```typescript\nfunction sum(a: number, b: number): number;\nfunction sum(a: number, b: number, c: number): number;\nfunction sum(a: number, b: number, c?: number): number { // Единая реализация\n  return a + b + (c || 0);\n}\n```",
        difficulty: "hard",
      },
      {
        id: "oop-14",
        question: "Как работают геттеры (Getters) и сеттеры (Setters) в JS/TS?",
        answer:
          "<strong>Геттеры и Сеттеры</strong> используются для <strong>контролируемого доступа</strong> к свойствам объекта (реализуя инкапсуляцию).\n\n* <strong>Геттер (`get`):</strong> Специальный метод, который вызывается при <strong>чтении</strong> свойства. Он позволяет выполнить дополнительную логику перед возвратом значения.\n* <strong>Сеттер (`set`):</strong> Специальный метод, который вызывается при <strong>записи</strong> значения в свойство. Он позволяет выполнять валидацию или другую логику перед изменением внутреннего состояния.\n\n<strong>Пример (JS):</strong>\n```javascript\nclass Box {\n  constructor(w) { this._width = w; }\n  get width() { return this._width; } // Чтение\n  set width(newW) { \n    if (newW > 0) this._width = newW; // Валидация\n  }\n}\nconst box = new Box(10);\nbox.width = -5; // Вызов сеттера, не изменяет _width\n```",
        difficulty: "medium",
      },
      {
        id: "oop-15",
        question: "В чем главное отличие между ООП и Процедурным Программированием?",
        answer:
          "<strong>Процедурное Программирование:</strong> Сосредоточено на <strong>функциях</strong> (процедурах) и <strong>логике</strong> последовательного выполнения шагов. Данные и функции обычно разделены (фокус на *что* делать).\n\n<strong>ООП:</strong> Сосредоточено на <strong>объектах</strong>, которые объединяют данные и методы. Данные и поведение неразрывно связаны (фокус на *кто* это делает).\n\nООП лучше подходит для больших, сложных систем, где необходимы <strong>инкапсуляция</strong> и <strong>иерархия</strong> (наследование).",
        difficulty: "easy",
      },
    ],
  },
  // react
  {
    id: "react-web",
    name: "React",
    questions: [
      {
        id: "rct-1",
        question: "Что такое React и каковы его ключевые концепции?",
        answer:
          "<strong>React</strong> — это front-end JavaScript-библиотека с открытым исходным кодом, предназначенная для создания пользовательских интерфейсов, основанных на переиспользуемых компонентах.<br/><br/><strong>Ключевые концепции:</strong><br/>1. <strong>Виртуальный DOM (Virtual DOM):</strong> Легковесное представление реального DOM в памяти. React сравнивает его при изменениях и обновляет только измененные части реального DOM, что обеспечивает высокую производительность.<br/>2. <strong>Компоненты:</strong> Модульные, переиспользуемые блоки, инкапсулирующие логику и внешний вид. Бывают <strong>классовые</strong> и <strong>функциональные</strong> (с Хуками).<br/>3. <strong>Однонаправленный поток данных (Unidirectional Data-flow):</strong> Данные передаются от родительского компонента к дочернему через <strong>пропсы</strong> (props). Это упрощает отслеживание изменений и отладку.<br/>4. <strong>JSX:</strong> Синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код прямо в файлах JS для декларативного описания UI.",
        difficulty: "easy",
      },
      {
        id: "rct-2",
        question:
          "Объясните концепцию Виртуального DOM (Virtual DOM) и как она влияет на производительность.",
        answer:
          "<strong>Виртуальный DOM</strong> — это абстракция или легкое, находящееся в памяти, представление реального <strong>DOM (Document Object Model)</strong> браузера.<br/><br/><strong>Принцип работы:</strong><br/>1. <strong>Инициализация/Изменение состояния:</strong> При старте или изменении состояния (`state`/`props`) React создает новое дерево Виртуального DOM.<br/>2. <strong>Реконсиляция (Reconciliation):</strong> React сравнивает новое дерево с предыдущим состоянием (теневой копией), чтобы определить, какие узлы были изменены. Это называется <strong>Диффинг (Diffing)</strong>.<br/>3. <strong>Пакетное обновление (Batched Update):</strong> React собирает минимальный набор необходимых изменений и применяет их одним пакетом к <strong>реальному DOM</strong>.<br/><br/>Это <strong>значительно повышает производительность</strong>, так как прямые манипуляции с реальным DOM (которые являются дорогостоящими операциями) минимизируются, а обновления происходят максимально эффективно.",
        difficulty: "medium",
      },
      {
        id: "rct-3",
        question:
          "В чем разница между Классовыми (Class) и Функциональными (Functional) компонентами?",
        answer:
          "Основное различие исторически заключалось в управлении состоянием и жизненным циклом, но <strong>Хуки (Hooks)</strong>, представленные в React 16.8, уравняли их возможности.<br/><br/>| Аспект | Классовый Компонент | Функциональный Компонент |<br/>| :--- | :--- | :--- |<br/>| <strong>Определение</strong> | Использует `class ... extends Component` | Использует `function` или стрелочную функцию |<br/>| <strong>Состояние</strong> | Управляется через `this.state` и `this.setState()` | Управляется через Хук `useState()` |<br/>| <strong>Жизненный цикл</strong> | Использует методы жизненного цикла (`componentDidMount`, `shouldComponentUpdate` и т.д.) | Управляется через Хук `useEffect()` |<br/>| <strong>`this` контекст</strong> | Используется (нужна привязка методов) | Не используется |<br/><br/><strong>Современная практика</strong> предпочитает <strong>функциональные компоненты с Хуками</strong> за их простоту, меньшую многословность и лучшую переиспользуемость логики.",
        difficulty: "medium",
      },
      {
        id: "rct-4",
        question: "Что такое JSX и зачем его использовать в React?",
        answer:
          "<strong>JSX (JavaScript XML)</strong> — это синтаксическое расширение для JavaScript, которое позволяет разработчикам описывать UI с помощью знакомого <strong>HTML-подобного синтаксиса</strong> внутри JavaScript-кода.<br/><br/><strong>Преимущества:</strong><br/>1. <strong>Читаемость:</strong> Код становится более понятным и декларативным, так как структура UI визуально напоминает HTML.<br/>2. <strong>Компактность:</strong> Позволяет избежать длинных вызовов `React.createElement()`, в которые JSX транспилируется.<br/>3. <strong>Эффективность разработки:</strong> Современные IDE и линтеры (ESLint) обеспечивают лучшую поддержку автодополнения и проверки типов при работе с JSX.<br/><br/><strong>Транспиляция:</strong> Babel автоматически преобразует JSX-код (например, `<h1>Hello</h1>`) в вызовы чистого JavaScript (например, `React.createElement('h1', null, 'Hello')`), понятные браузеру.",
        difficulty: "easy",
      },
      {
        id: "rct-5",
        question: "В чем разница между Props и State в React?",
        answer:
          "И <strong>Пропсы (Props)</strong>, и <strong>Состояние (State)</strong> используются для хранения данных в компоненте, но выполняют разные роли.<br/><br/>| Аспект | Props (Свойства) | State (Состояние) |<br/>| :--- | :--- | :--- |<br/>| <strong>Назначение</strong> | Передача данных от родителя к дочернему компоненту. | Управление данными внутри самого компонента. |<br/>| <strong>Изменяемость</strong> | <strong>Неизменяемы (Immutable)</strong>; доступны только для чтения дочерним компонентом. | <strong>Изменяемы (Mutable)</strong>; компонент может изменять свое состояние. |<br/>| <strong>Инициализация</strong> | Задаются родительским компонентом. | Инициализируется внутри компонента (`this.state` или `useState`). |<br/>| <strong>Перерисовка</strong> | Изменение пропсов родителя вызывает перерисовку дочернего. | Изменение состояния компонента вызывает его перерисовку. |<br/><br/><strong>Правило:</strong> Используйте <strong>пропсы</strong> для данных, которые приходят извне и не меняются. Используйте <strong>состояние</strong> для данных, которые должны меняться со временем в ответ на действия пользователя или запросы.",
        difficulty: "easy",
      },
      {
        id: "rct-6",
        question: "Как происходит обработка событий (Event Handling) в React?",
        answer:
          "React унифицирует систему событий браузеров через механизм <strong>Синтетических Событий (Synthetic Events)</strong>.<br/><br/><strong>Ключевые моменты:</strong><br/>1. <strong>Кроссбраузерность:</strong> Синтетические события оборачивают нативные события браузера, обеспечивая согласованный интерфейс и поведение во всех браузерах.<br/>2. <strong>Именование:</strong> В React события именуются в <strong>`camelCase`</strong> (например, `onClick` вместо `onclick` в HTML).<br/>3. <strong>Привязка:</strong> Функция-обработчик передается как пропс к элементу (`<button onClick={handleClick}>`).<br/>4. <strong>Предотвращение по умолчанию:</strong> Чтобы остановить поведение браузера по умолчанию (например, отправку формы), используется метод `event.preventDefault()` внутри обработчика, как в примере ниже.<br/><br/>```javascript<br/>// Пример обработки события формы<br/>handleSubmit(event) {<br/>&nbsp;&nbsp;event.preventDefault(); // Предотвращает перезагрузку страницы<br/>&nbsp;&nbsp;alert('Форма отправлена!');<br/>}<br/><br/>// В render<br/>return (<br/>&nbsp;&nbsp;<form onSubmit={this.handleSubmit}><br/>&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"submit\">Отправить</button><br/>&nbsp;&nbsp;</form><br/>);<br/>```",
        difficulty: "medium",
      },
      {
        id: "rct-7",
        question: "Что такое Хук useState() и как он используется в функциональных компонентах?",
        answer:
          "<strong>`useState`</strong> — это встроенный <strong>React Хук</strong>, который позволяет функциональным компонентам иметь <strong>локальное состояние</strong>.<br/><br/><strong>Использование:</strong><br/>Он возвращает массив из двух элементов: текущее значение состояния и функцию-сеттер для его обновления.<br/><br/>```javascript<br/>import React, { useState } from 'react';<br/><br/>const Counter = () => {<br/>&nbsp;&nbsp;// [Текущее значение, Функция для обновления]<br/>&nbsp;&nbsp;const [count, setCount] = useState(0); // 0 — начальное значение<br/><br/>&nbsp;&nbsp;return (<br/>&nbsp;&nbsp;&nbsp;&nbsp;<div><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>Счет: {count}</p><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Вызов сеттера для обновления состояния и перерисовки<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => setCount(count + 1)}>Инкремент</button><br/>&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;);<br/>};<br/>```<br/><br/><strong>Ключевой момент:</strong> При вызове функции-сеттера (`setCount`), React <strong>перерисовывает</strong> компонент с новым значением состояния.",
        difficulty: "easy",
      },
      {
        id: "rct-8",
        question: "Как дочерний компонент может обновить состояние родительского компонента?",
        answer:
          "React придерживается <strong>однонаправленного потока данных (Parent-to-Child)</strong>. Чтобы дочерний компонент мог изменить состояние родителя, необходимо использовать <strong>паттерн Callback-функции через пропсы</strong>.<br/><br/><strong>Механизм:</strong><br/>1. <strong>Родительский компонент</strong> определяет функцию, которая обновляет его состояние.<br/>2. Эта функция <strong>передается как пропс</strong> дочернему компоненту.<br/>3. <strong>Дочерний компонент</strong> вызывает эту функцию-пропс (callback) в ответ на событие (например, нажатие кнопки), передавая ей новое значение.<br/><br/><strong>Пример:</strong><br/>```javascript<br/>// В Родительском компоненте<br/>function Parent() {<br/>&nbsp;&nbsp;const [data, setData] = useState('');<br/>&nbsp;&nbsp;const updateState = (newData) => setData(newData); // Функция для обновления<br/>&nbsp;&nbsp;return <Child onDataChange={updateState} />;<br/>}<br/><br/>// В Дочернем компоненте<br/>function Child({ onDataChange }) {<br/>&nbsp;&nbsp;const handleClick = () => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;onDataChange('Новые данные от дочернего компонента'); // Вызов callback<br/>&nbsp;&nbsp;};<br/>&nbsp;&nbsp;return <button onClick={handleClick}>Обновить Родителя</button>;<br/>}<br/>```",
        difficulty: "medium",
      },
      {
        id: "rct-9",
        question: "Что такое 'Поднятие состояния' (Lifting State Up) и когда это необходимо?",
        answer:
          "<strong>Поднятие состояния (Lifting State Up)</strong> — это архитектурный паттерн в React, при котором локальное состояние нескольких дочерних компонентов перемещается (поднимается) в их ближайший общий <strong>родительский компонент</strong>.<br/><br/><strong>Необходимость:</strong><br/>Паттерн необходим, когда <strong>два или более компонента-брата</strong> должны быть <strong>синхронизированы</strong> и совместно использовать или влиять на одни и те же данные. Если данные должны быть общими, они должны жить в их ближайшем общем предке.<br/><br/><strong>Принцип:</strong><br/>1. <strong>Родитель</strong> хранит общее состояние.<br/>2. <strong>Родитель</strong> передает данные вниз как <strong>пропсы</strong>.<br/>3. <strong>Родитель</strong> передает функции для изменения состояния вниз как <strong>пропсы-callback</strong>.<br/><br/>*Пример: Калькулятор, где два поля ввода (длина и ширина) должны влиять на один компонент результата (площадь). Состояние длины и ширины поднимается в общий компонент-калькулятор.*",
        difficulty: "medium",
      },
      {
        id: "rct-10",
        question: "Сравните Redux и Context API для управления глобальным состоянием.",
        answer:
          'Оба инструмента решают проблему <strong>Prop Drilling</strong> (передачи пропсов через множество уровней), но имеют разную сложность и цели.<br/><br/>| Аспект | Context API | Redux |<br/>| :--- | :--- | :--- |<br/>| <strong>Сложность</strong> | Проще, встроен в React, минимум кода. | Сложнее, требует установки библиотеки, <strong>Actions, Reducers, Store</strong>.<br/>| <strong>Производительность</strong> | При изменении провайдера <strong>все</strong> подписанные компоненты перерисовываются (может быть медленно). | Высокая, перерисовывает только компоненты, подписанные на <strong>конкретные части</strong> состояния. |<br/>| <strong>Прогнозируемость</strong> | Менее строгий поток, что может усложнить отладку. | <strong>Строгий, предсказуемый</strong> однонаправленный поток (идеально для крупных команд/проектов). |<br/>| <strong>Инструменты</strong> | Минимум отладочных инструментов. | <strong>Redux DevTools</strong> — мощный инструмент для "путешествия во времени" и отслеживания изменений. |<br/><br/><strong>Вывод:</strong><br/>* <strong>Context API:</strong> Идеален для <strong>нечасто меняющегося</strong> и <strong>некритичного</strong> состояния (тема приложения, язык пользователя).<br/>* <strong>Redux:</strong> Идеален для <strong>сложного, часто меняющегося</strong> состояния в <strong>крупных</strong> корпоративных приложениях.',
        difficulty: "hard",
      },
    ],
  },
  // react native
  {
    id: "react-native",
    name: "React Native",
    questions: [
      {
        id: "rn-1",
        question: "Что такое React Native и в чем его ключевое отличие от React?",
        answer:
          "<strong>React Native</strong> — фреймворк, который расширяет возможности React, позволяя создавать <strong>нативные мобильные приложения</strong> для iOS и Android с использованием JavaScript и React. <br/><br/><strong>Ключевые отличия от React (Web):</strong><br/>• <strong>Платформа:</strong> React – для веба (браузер), React Native – для мобильных устройств.<br/>• <strong>Рендеринг:</strong> React использует <strong>DOM</strong> браузера, React Native рендерит с помощью <strong>нативных компонентов</strong> (через Bridge).<br/>• <strong>Компоненты:</strong> Используются специфичные нативные компоненты, например, `<View>`, `<Text>`, `<Button>`, вместо веб-элементов (`<div>`, `<span>`, `<button>`).<br/>• <strong>API:</strong> React Native имеет доступ к нативным API устройства (Камера, GPS, Сенсоры).<br/><br/><strong>Пример (кнопка):</strong><br/>В React (Web):<br/>```javascript<br/>// Используется HTML-элемент<br/>return <button onClick={...}>Click</button>;<br/>```<br/>В React Native:<br/>```javascript<br/>import { Button } from 'react-native';<br/>// Используется нативный компонент<br/>return <Button title=\"Click\" onPress={...} />;<br/>```",
        difficulty: "easy",
      },
      {
        id: "rn-2",
        question: "Объясните концепцию 'Learn Once, Write Anywhere' в контексте React Native.",
        answer:
          "Это означает <strong>повторное использование логики</strong> и архитектуры React на разных платформах. Главная идея — <strong>Code Reusability</strong> (переиспользование кода), а не 100% общность кода.<br/><br/><strong>Ключевые аспекты:</strong><br/>1. <strong>Общая бизнес-логика:</strong> Функциональные компоненты, хуки, Redux-логика и большая часть JavaScript-кода могут быть общими.<br/>2. <strong>Адаптация:</strong> Нативный внешний вид (UI/UX) и взаимодействие с устройством (Permissions) могут потребовать платформо-специфичного кода.<br/><br/><strong>Механизмы адаптации:</strong><br/>• <strong>Platform API:</strong> Использование `Platform.OS === 'ios'` для логических ветвлений.<br/>• <strong>Специфичные файлы:</strong> Создание файлов с расширением `.ios.js` или `.android.js` (например, `Header.ios.js`), чтобы импортировать нужный модуль автоматически.",
        difficulty: "easy",
      },
      {
        id: "rn-3",
        question: "Каковы основные шаги для создания базового приложения React Native?",
        answer:
          "Процесс создания включает настройку окружения и инициализацию проекта. Обычно используют <strong>Expo CLI</strong> (для простоты) или <strong>React Native CLI</strong> (для сложных проектов с нативными модулями).<br/><br/><strong>Шаги с React Native CLI:</strong><br/>1. <strong>Установка зависимостей:</strong> Убедиться, что установлены <strong>Node.js</strong>, <strong>JDK</strong> и необходимые инструменты iOS/Android.<br/>2. <strong>Инициализация проекта:</strong><br/>```bash<br/>npx react-native init MyApp<br/>cd MyApp<br/>```<br/>3. <strong>Запуск:</strong><br/>```bash<br/>npx react-native run-android<br/># или<br/>npx react-native run-ios<br/>```<br/><strong>Структура проекта:</strong><br/>• `index.js` или `App.js`: Точка входа в приложение.<br/>• `android/` и `ios/`: Содержат нативные проекты.<br/>• `package.json`: Управление зависимостями.<br/><br/>*Я использую Expo для быстрого прототипирования, так как он упрощает настройку нативного окружения.*",
        difficulty: "easy",
      },
      {
        id: "rn-4",
        question:
          "Какие типы компонентов существуют в React Native? Приведите пример кастомного компонента.",
        answer:
          "В React Native компоненты делятся на две основные группы:<br/><br/>1. <strong>Базовые (Core Components):</strong> Встроенные элементы, которые напрямую соответствуют нативным UI-блокам. Они являются основой для всего: `<View>`, `<Text>`, `<Image>`, `<Button>`, `<TextInput>`.<br/>2. <strong>Кастомные (Custom Components):</strong> Компоненты, созданные разработчиком. Они обычно состоят из базовых компонентов и инкапсулируют сложную логику, стили и поведение. Они обеспечивают <strong>модульность</strong> и <strong>переиспользование</strong>.<br/><br/><strong>Пример кастомного компонента:</strong><br/>```javascript<br/>// CustomButton.js<br/>import { TouchableOpacity, Text, StyleSheet } from 'react-native';<br/><br/>const CustomButton = ({ title, onPress }) => (<br/>&nbsp;&nbsp;<TouchableOpacity style={styles.button} onPress={onPress}><br/>&nbsp;&nbsp;&nbsp;&nbsp;<Text style={styles.text}>{title}</Text><br/>&nbsp;&nbsp;</TouchableOpacity><br/>);<br/><br/>// Кастомный компонент инкапсулирует TouchableOpacity<br/>// и Text, предоставляя простой интерфейс (props: title, onPress).<br/>```",
        difficulty: "medium",
      },
      {
        id: "rn-5",
        question: "Для чего нужна функция render() в компонентах React Native (и React)?",
        answer:
          "Функция <strong>`render()`</strong> (или её тело в функциональных компонентах) является обязательным методом и отвечает за <strong>описание визуального вывода</strong> компонента. <br/><br/><strong>Назначение:</strong><br/>• <strong>Возврат JSX:</strong> Она принимает пропсы и стейт и возвращает <strong>JSX</strong> — декларативный «чертеж» пользовательского интерфейса.<br/>• <strong>Виртуальный DOM:</strong> Когда состояние (`state`) или пропсы (`props`) компонента изменяются, `render()` вызывается снова. Результат сравнивается с предыдущим состоянием <strong>Виртуального DOM</strong>, и только необходимые изменения применяются к нативному UI.<br/>• <strong>Условный рендеринг:</strong> Позволяет динамически решать, какие элементы показывать пользователю (например, скрывать список, если он пуст).<br/><br/>*В функциональных компонентах роль `render()` выполняет сама функция, возвращая JSX.*",
        difficulty: "medium",
      },
      {
        id: "rn-6",
        question: "Что такое JSX в React Native и как он обрабатывается?",
        answer:
          '<strong>JSX (JavaScript XML)</strong> — это синтаксическое расширение JavaScript, которое позволяет писать HTML-подобную структуру прямо в файлах JS.<br/><br/><strong>Роль в RN:</strong> JSX используется для декларативного описания UI-дерева из нативных компонентов (`<View>`, `<Text>`).<br/><br/><strong>Обработка (Транспиляция):</strong><br/>1. Разработчик пишет JSX.<br/>2. <strong>Babel</strong> (транспайлер) преобразует JSX в чистый JavaScript, используя вызовы `React.createElement()`.<br/>3. <strong>React Native Bridge</strong> получает эту структуру и преобразует ее в соответствующие <strong>нативные представления</strong> (iOS: `UIView`, Android: `android.view`).<br/><br/><strong>Пример транспайлинга:</strong><br/>JSX:<br/>```jsx<br/>return <Text>Hello</Text>;<br/>```<br/>Транспайлинг в JS:<br/>```javascript<br/>return React.createElement(Text, null, "Hello");<br/>```',
        difficulty: "easy",
      },
      {
        id: "rn-7",
        question: "Назовите 5-7 ключевых (Core) компонентов React Native и их назначение.",
        answer:
          "Ключевые компоненты (Core Components) являются основой для построения любого интерфейса в React Native. Они напрямую мапятся на нативные элементы:<br/><br/>1. <strong>`<View>`:</strong> Самый базовый контейнер для построения UI. Поддерживает стили, Flexbox и служит 'блоком' разметки. Аналог `div` в вебе.<br/>2. <strong>`<Text>`:</strong> Используется исключительно для отображения текста и его стилизации. Все текстовые узлы должны быть внутри этого компонента.<br/>3. <strong>`<Image>`:</strong> Отображает изображения, локальные или сетевые.<br/>4. <strong>`<Button>` / `<TouchableOpacity>`:</strong> Элементы для обработки нажатий. `<Button>` — базовый нативный, `<TouchableOpacity>` — более гибкий, уменьшающий прозрачность при касании.<br/>5. <strong>`<TextInput>`:</strong> Компонент для ввода текста (однострочного или многострочного).<br/>6. <strong>`<ScrollView>`:</strong> Контейнер, который позволяет прокручивать содержимое, если оно превышает размер экрана.<br/>7. <strong>`<FlatList>` / `<SectionList>`:</strong> Высокопроизводительные, 'виртуализированные' компоненты для эффективного рендеринга больших списков данных (отличаются способом группировки).",
        difficulty: "medium",
      },
      {
        id: "rn-8",
        question: "Как осуществляется управление состоянием (State Management) в React Native?",
        answer:
          "Управление состоянием делится на локальное и глобальное.<br/><br/><strong>Локальное состояние (Local State):</strong><br/>• Используется для данных, нужных только одному компоненту (например, состояние открытого модального окна, значение в поле ввода).<br/>• Применяется <strong>хук `useState`</strong>.<br/>```javascript<br/>const [count, setCount] = useState(0);<br/>```<br/><br/><strong>Глобальное состояние (Global/Shared State):</strong><br/>• Используется для данных, общих для многих компонентов (например, данные пользователя, тема приложения, корзина).<br/>• <strong>Context API:</strong> Встроенный инструмент для передачи состояния глубоко по дереву компонентов. Часто используется вместе с `useReducer` для сложной логики.<br/>• <strong>Внешние библиотеки:</strong> <strong>Redux, Zustand, Recoil</strong> и другие для более масштабируемых, предсказуемых и отлаживаемых решений.",
        difficulty: "medium",
      },
      {
        id: "rn-9",
        question: "Что такое Props и почему они важны для компонентов RN?",
        answer:
          "<strong>Props (Properties)</strong> — это объект, который содержит данные, передаваемые <strong>сверху вниз</strong> (от родительского компонента к дочернему).<br/><br/><strong>Важность:</strong><br/>1. <strong>Однонаправленный поток данных:</strong> Обеспечивает предсказуемость, так как данные текут только в одном направлении, делая отладку проще.<br/>2. <strong>Инкапсуляция и переиспользование:</strong> Позволяют настраивать поведение и внешний вид дочернего компонента без изменения его внутреннего кода, создавая универсальные блоки.<br/>3. <strong>Иммутабельность:</strong> Дочерний компонент <strong>не должен</strong> изменять пропсы, которые он получает. Они доступны только для чтения, что обеспечивает <strong>Single Source of Truth</strong>.<br/><br/><strong>Пример использования Prop Types:</strong><br/>Использование библиотеки `prop-types` (или TypeScript) для статической проверки типов пропсов в разработке, что повышает надежность кода.<br/>```javascript<br/>// Указываем, что 'name' должен быть строкой и обязателен<br/>MyComponent.propTypes = {<br/>&nbsp;&nbsp;name: PropTypes.string.isRequired,<br/>};<br/>```",
        difficulty: "easy",
      },
      {
        id: "rn-10",
        question: "Как работает Flexbox в React Native и в чем его отличие от веба?",
        answer:
          "<strong>Flexbox</strong> — это система CSS-стилей для компоновки, которая является <strong>основным механизмом разметки</strong> в React Native.<br/><br/><strong>Как работает:</strong><br/>• Используется для распределения пространства, выравнивания и упорядочивания элементов внутри контейнера (`<View>`).<br/>• Все компоненты, которые поддерживают стили, могут быть Flex-контейнерами или Flex-элементами.<br/><br/><strong>Ключевые отличия от Web (CSS):</strong><br/>1. <strong>Направление по умолчанию:</strong> В React Native по умолчанию используется `flexDirection: 'column'` (элементы располагаются вертикально), в отличие от веба, где по умолчанию `row`.<br/>2. <strong>`flex` свойство:</strong> В RN `flex: 1` означает, что элемент займет всё доступное пространство контейнера (аналог `flex-grow: 1`).<br/><br/><strong>Пример (вертикальная разметка):</strong><br/>```javascript<br/>const styles = StyleSheet.create({<br/>&nbsp;&nbsp;container: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;flex: 1, // Занять весь экран<br/>&nbsp;&nbsp;&nbsp;&nbsp;flexDirection: 'column', // По умолчанию<br/>&nbsp;&nbsp;&nbsp;&nbsp;justifyContent: 'center', // Выравнивание по вертикали<br/>&nbsp;&nbsp;},<br/>});<br/>```",
        difficulty: "medium",
      },
      {
        id: "rn-11",
        question:
          "Какие основные инструменты и стратегии вы используете для отладки (Debugging) приложений React Native?",
        answer:
          "Отладка в RN требует сочетания традиционных и специфических инструментов, поскольку код выполняется в разных средах.<br/><br/><strong>Инструменты:</strong><br/>1. <strong>React Native Debugger / Flipper:</strong> Единый инструмент, объединяющий инспектор компонентов (React DevTools) и консоль (Chrome DevTools) для просмотра сетевых запросов, логов и состояния Redux.<br/>2. <strong>Консольное логирование:</strong> Использую `console.log/warn/error` для быстрого вывода информации. `console.assert` для условных проверок.<br/>3. <strong>Эмуляторы/Симуляторы и физические устройства:</strong> Обязательное тестирование, так как баги могут проявляться только на конкретном устройстве.<br/>4. <strong>Redux DevTools:</strong> Для отслеживания изменений глобального состояния.<br/><br/><strong>Стратегии:</strong><br/>• <strong>Изоляция:</strong> В случае сложного бага временно удаляю или комментирую части кода (использую принцип 'бинарного поиска') до нахождения источника проблемы.<br/>• <strong>Защита от `undefined`:</strong> Активно использую оператор опциональной цепочки (`?.`) и условный рендеринг, чтобы избежать ошибок при доступе к несуществующим свойствам.<br/>• <strong>HMR (Hot Module Replacement):</strong> Использую горячую перезагрузку для сохранения состояния приложения при внесении изменений в код, что ускоряет процесс отладки.",
        difficulty: "medium",
      },
      {
        id: "rn-12",
        question: "Объясните разницу между Hot Reloading и Live Reloading (Full Reloading).",
        answer:
          "Оба механизма используются для ускорения разработки, но работают по-разному:<br/><br/>| Механизм | Описание | Сохранение состояния | Скорость | Применение |<br/>| :--- | :--- | :--- | :--- | :--- |<br/>| <strong>Hot Reloading</strong> | Заменяет только измененные модули в реальном времени. | <strong>Да</strong> | Быстро | Изменения стилей/логики |<br/>| <strong>Live Reloading</strong> | Перезагружает всё приложение с нуля. | <strong>Нет</strong> | Медленно | Изменения, влияющие на нативный код |<br/><br/><strong>Hot Reloading (HMR):</strong><br/>• <strong>Преимущество:</strong> Сохраняет текущее состояние компонента (например, текст в поле ввода, положение в списке).<br/>• <strong>Недостаток:</strong> Может не сработать для некоторых изменений (например, нативного кода или глобальных переменных).<br/><br/><strong>Live Reloading (Полная перезагрузка):</strong><br/>• <strong>Преимущество:</strong> Гарантированно отражает все изменения, включая нативные модули.<br/>• <strong>Недостаток:</strong> Теряется текущее состояние, что замедляет тестирование интерактивных элементов.",
        difficulty: "easy",
      },
      {
        id: "rn-13",
        question:
          "Опишите базовые компоненты React Native для обработки пользовательского ввода (Text Input, Picker, Touchables).",
        answer:
          "React Native предоставляет специфические компоненты для обработки ввода, которые используют нативные элементы платформ.<br/><br/><strong>1. `<TextInput>`:</strong><br/>• Для ввода текста (аналог `<input type='text'>` или `<textarea>`).<br/>• Поддерживает <strong>`onChangeText`</strong> для отслеживания ввода и <strong>`value`</strong> для контролируемого компонента.<br/>• Имеет свойства для клавиатуры (`keyboardType`), автозаполнения (`autoCompleteType`) и безопасности ввода (`secureTextEntry`).<br/><br/><strong>2. `<Picker>`:</strong><br/>• Компонент для выбора одного значения из дискретного набора опций (аналог `<select>`).<br/>• На iOS и Android может выглядеть и работать по-разному, используя нативные элементы выбора.<br/><br/><strong>3. Touchables (Обработка касаний):</strong><br/>• Базовый `<Button>` слишком ограничен.<br/>• <strong>`<TouchableOpacity>`:</strong> Снижает прозрачность области при нажатии, давая визуальный отклик. Наиболее часто используемый.<br/>• <strong>`<TouchableHighlight>`:</strong> Подсвечивает область, меняя фон. Используется реже.<br/>• <strong>`<TouchableWithoutFeedback>`:</strong> Реагирует на касание, но не дает визуального отклика.",
        difficulty: "medium",
      },
    ],
  },
  // Next
  {
    id: "nextjs",
    name: "Next.js",
    questions: [
      {
        id: "nj-1",
        question: "Что такое Next.js и каковы его основные возможности?",
        answer:
          "<strong>Next.js</strong> — это полнофункциональный <strong>React-фреймворк</strong> для создания продакшн-приложений. Он предоставляет набор инструментов и конфигураций, которые упрощают разработку современных, высокопроизводительных веб-приложений.<br/><br/><strong>Основные возможности (Rendering Strategies):</strong><br/>1. <strong>Server-Side Rendering (SSR):</strong> Генерация HTML на сервере при каждом запросе.<br/>2. <strong>Static Site Generation (SSG):</strong> Пре-рендеринг HTML во время сборки (`build time`).<br/>3. <strong>Incremental Static Regeneration (ISR):</strong> Обновление статических страниц через заданный интервал.<br/>4. <strong>Гибридный рендеринг:</strong> Возможность использовать разные стратегии для разных страниц.<br/><br/><strong>Дополнительные функции:</strong><br/>• <strong>Маршрутизация на основе файловой системы (File-system routing).</strong><br/>• <strong>Автоматическое разделение кода (Code Splitting).</strong><br/>• <strong>API Routes</strong> для создания бэкенд-эндпоинтов.",
        difficulty: "easy",
      },
      {
        id: "nj-2",
        question: "Сравните Next.js и Create React App (CRA).",
        answer:
          "Основное различие в том, что <strong>CRA</strong> — это инструмент для быстрого старта <strong>клиентских</strong> приложений (SPA), а <strong>Next.js</strong> — это <strong>фреймворк для полного стека (Full-stack)</strong>, который включает серверный рендеринг.<br/><br/>| Аспект | Next.js | Create React App (CRA) |<br/>| :--- | :--- | :--- |<br/>| <strong>Рендеринг</strong> | Встроенные SSR, SSG, ISR и CSR. | <strong>Только CSR</strong> (Client-Side Rendering). |<br/>| <strong>SEO</strong> | Отличное, благодаря SSG/SSR, контент виден поисковикам сразу. | Плохое, требует сторонних библиотек (например, React Helmet) или SSR-оберток. |<br/>| <strong>Маршрутизация</strong> | <strong>Автоматическая</strong>, на основе файловой системы (`pages/`). | <strong>Ручная</strong>, требует установки и настройки `react-router-dom`. |<br/>| <strong>API</strong> | Встроенные <strong>API Routes</strong> для создания бэкенда. | Отсутствуют, нужно развертывать отдельный сервер (Express, Node.js). |<br/>| <strong>Конфигурация</strong> | Фреймворк с 'батарейками в комплекте' и гибкой конфигурацией. | Набор скриптов с жесткой конфигурацией (сложно 'эджектить'). |",
        difficulty: "medium",
      },
      {
        id: "nj-3",
        question: "Как создать новое Next.js приложение?",
        answer:
          "Самый простой и рекомендуемый способ создать новое Next.js приложение — использовать команду <strong>`create-next-app`</strong> через `npx` (для Node.js 12+):<br/><br/>```bash<br/>npx create-next-app my-next-app<br/>```<br/><br/><strong>`npx`</strong> выполнит последнюю версию пакета, даже если он не установлен глобально. Вместо `my-next-app` укажите имя вашей рабочей директории. Этот скрипт автоматически настроит базовую файловую структуру, включая каталог `pages/`, и установит все необходимые зависимости.",
        difficulty: "easy",
      },
      {
        id: "nj-4",
        question: "Объясните Server-Side Rendering (SSR) в контексте Next.js.",
        answer:
          "<strong>Server-Side Rendering (SSR)</strong> — это метод рендеринга, при котором HTML для страницы генерируется <strong>на сервере при каждом запросе</strong> пользователя. Это обеспечивает отображение актуальных данных.<br/><br/><strong>Механизм:</strong><br/>1. Пользователь запрашивает URL.<br/>2. Сервер Next.js выполняет функцию <strong>`getServerSideProps`</strong> на запрошенной странице.<br/>3. Сервер генерирует полную HTML-страницу, включая актуальные данные, и отправляет ее браузеру.<br/>4. После загрузки HTML, клиентский JS 'оживляет' страницу (процесс <strong>гидратации</strong>).<br/><br/><strong>Использование:</strong> Для активации SSR на странице необходимо <strong>экспортировать</strong> асинхронную функцию <strong>`getServerSideProps`</strong>.",
        difficulty: "medium",
      },
      {
        id: "nj-5",
        question: "Каталог `pages` в Next.js: его роль и как он сопоставляется с маршрутами?",
        answer:
          "Каталог <strong>`pages`</strong> служит основным <strong>инструментом определения маршрутов</strong> в Next.js. Каждая компонента-страница, расположенная внутри этого каталога, автоматически становится URL-маршрутом (Page-based routing).<br/><br/><strong>Ключевые сопоставления:</strong><br/>• <strong>Корневой маршрут:</strong> `pages/index.js` $\rightarrow$ `/`<br/>• <strong>Вложенный маршрут:</strong> `pages/about.js` $\rightarrow$ `/about`<br/>• <strong>Маршрут секции:</strong> `pages/posts/index.js` $\rightarrow$ `/posts`<br/>• <strong>Динамический маршрут:</strong> `pages/posts/[id].js` $\rightarrow$ `/posts/:id`<br/><br/><strong>Специальные файлы:</strong><br/>• <strong>`_app.js`:</strong> Главная компонента, обертывающая все страницы (для глобальных стилей, контекста).<br/>• <strong>`_document.js`:</strong> Настраивает серверный рендеринг HTML-документа (теги `<html>`, `<body>`).<br/>• <strong>`404.js`:</strong> Пользовательская страница для обработки 404 ошибок.",
        difficulty: "easy",
      },
      {
        id: "nj-6",
        question: "Как реализовать Server-Side Rendering (SSR) на конкретной странице?",
        answer:
          "Для реализации SSR на странице необходимо <strong>экспортировать</strong> асинхронную функцию <strong>`getServerSideProps`</strong> из файла страницы.<br/><br/><strong>Принцип работы `getServerSideProps`:</strong><br/>1. Эта функция запускается <strong>при каждом запросе</strong> к странице.<br/>2. Она выполняется <strong>исключительно на сервере</strong> и никогда не попадает в клиентский бандл.<br/>3. Возвращает объект с ключом `props`, которые передаются в компонент страницы.<br/><br/><strong>Пример:</strong><br/>```javascript<br/>export default function ServerSide({ time }) {<br/>&nbsp;&nbsp;return <p>Current time: {time}</p>;<br/>}<br/>export async function getServerSideProps() {<br/>&nbsp;&nbsp;// Получение данных при каждом запросе<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;props: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time: new Date().toISOString(), // Актуальное время<br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;};<br/>}<br/>```",
        difficulty: "medium",
      },
      {
        id: "nj-7",
        question: "Какие расширения файлов поддерживаются для страниц и компонентов в Next.js?",
        answer:
          "Next.js имеет встроенную поддержку различных файловых расширений для компонентов страниц, стилей и других ресурсов:<br/><br/><strong>Страницы/Компоненты:</strong><br/>• <strong>`.js`</strong> или <strong>`.jsx`</strong> (стандартный JavaScript/React)<br/>• <strong>`.ts`</strong> или <strong>`.tsx`</strong> (TypeScript/React)<br/>• <strong>`.mdx`</strong> (Markdown с возможностью встраивания JSX/React компонентов)<br/><br/><strong>Стилизация:</strong><br/>• <strong>`.css`</strong> (Стандартный CSS)<br/>• <strong>`.module.css`</strong> (CSS Modules для локальной области видимости)<br/>• <strong>`.scss`</strong> или <strong>`.sass`</strong> (при установке `sass`)<br/><br/>Благодаря этой гибкости разработчики могут использовать предпочтительные инструменты, включая TypeScript, без дополнительной сложной настройки.",
        difficulty: "easy",
      },
      {
        id: "nj-8",
        question: "Как используются переменные окружения (Environment Variables) в Next.js?",
        answer:
          "Переменные окружения используются для настройки параметров приложения в зависимости от среды (разработка, тестирование, продакшн) и хранения <strong>конфиденциальных данных</strong>.<br/><br/><strong>Механизм:</strong><br/>1. <strong>Файлы:</strong> Переменные объявляются в файлах `.env.local` (или `.env.development`, `.env.production`).<br/>2. <strong>Доступ:</strong> Доступ к ним осуществляется через `process.env.<VARIABLE_NAME>`.<br/><br/><strong>Видимость (Критически важно):</strong><br/>• <strong>Серверные:</strong> По умолчанию переменные доступны <strong>только на сервере</strong> (ключи БД, секреты API).<br/>• <strong>Клиентские:</strong> Чтобы сделать переменную доступной <strong>в браузере</strong>, ей нужно добавить префикс <strong>`NEXT_PUBLIC_`</strong> (например, `NEXT_PUBLIC_GA_KEY`). <strong>Никогда</strong> не храните секретные ключи с этим префиксом.",
        difficulty: "medium",
      },
      {
        id: "nj-9",
        question:
          "Что такое Automatic Static Optimization (Автоматическая статическая оптимизация) в Next.js?",
        answer:
          "<strong>Automatic Static Optimization</strong> — это механизм, при котором Next.js <strong>автоматически</strong> определяет, какие страницы можно преобразовать в статический HTML <strong>во время сборки</strong>, если они <strong>не</strong> используют методы серверного рендеринга (`getServerSideProps`) и <strong>не</strong> запрашивают данные.<br/><br/><strong>Принцип работы:</strong><br/>Next.js сканирует страницы; если страница может быть отрендерена без данных, которые нужно получать во время запроса, она статически оптимизируется. Это обеспечивает <strong>максимальную скорость загрузки</strong>, так как страница обслуживается CDN без необходимости запускать Node.js сервер.<br/><br/>*Пример: Страница `/about` или `/contact`, которая не требует динамических данных.*",
        difficulty: "medium",
      },
      {
        id: "nj-10",
        question: "Объясните File-based routing в Next.js.",
        answer:
          "<strong>File-based routing</strong> (маршрутизация на основе файловой системы) — это основной механизм маршрутизации в Next.js. Структура каталогов и файлов внутри папки <strong>`pages`</strong> напрямую определяет URL-адреса приложения.<br/><br/><strong>Пример структуры:</strong><br/>```<br/>pages/<br/>├── index.js // /<br/>├── cart.js // /cart<br/>└── products/<br/>    ├── index.js // /products<br/>    └── [product-id].js // /products/:product-id<br/>```<br/><br/><strong>Преимущество:</strong> Это упрощает организацию кода, поскольку вы видите структуру URL-адресов прямо в файловой системе. Не требуется ручная настройка маршрутов.",
        difficulty: "easy",
      },
      {
        id: "nj-11",
        question: "Что такое Dynamic Routes (Динамические маршруты) и как их настроить?",
        answer:
          "<strong>Динамические маршруты</strong> позволяют URL-адресу иметь переменные сегменты, которые могут быть получены страницей для загрузки соответствующего контента (например, статьи, товары).<br/><br/><strong>Настройка:</strong><br/>Используйте <strong>квадратные скобки</strong> вокруг имени параметра в имени файла.<br/>• <strong>Один параметр:</strong> `pages/post/[id].js` $\rightarrow$ извлекается `router.query.id`.<br/>• <strong>Catch-All (Перехватывающий) маршрут:</strong> Используется синтаксис <strong>`pages/doc/[...slug].js`</strong>.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Он перехватывает <strong>все вложенные пути</strong> (например, `/doc/intro/setup`) и возвращает их как массив строк (`router.query.slug`).",
        difficulty: "medium",
      },
      {
        id: "nj-12",
        question: "Как получить параметры URL (Query Parameters) в компоненте страницы Next.js?",
        answer:
          "Для доступа к параметрам URL (как динамическим сегментам, так и query-параметрам) используется <strong>Хук `useRouter`</strong> из `next/router`.<br/><br/><strong>Шаги:</strong><br/>1. Импортировать `useRouter`.<br/>2. Вызвать хук для получения объекта `router`.<br/>3. Доступ к параметрам через <strong>`router.query`</strong>.<br/><br/><strong>Пример:</strong> Если URL `/products/123?sort=price`<br/>```javascript<br/>import { useRouter } from 'next/router';<br/>// ...<br/>const router = useRouter();<br/>const { id, sort } = router.query; // id=123, sort=price<br/>```",
        difficulty: "easy",
      },
      {
        id: "nj-13",
        question: "Для чего используется компонент `<Link>` в Next.js?",
        answer:
          "Компонент <strong>`<Link>`</strong> из `next/link` — это основной инструмент для <strong>клиентской навигации</strong> внутри Next.js приложения. Он улучшает производительность и пользовательский опыт.<br/><br/><strong>Ключевые функции:</strong><br/>1. <strong>Клиентская навигация:</strong> Предотвращает полную перезагрузку страницы, обеспечивая мгновенные переходы.<br/>2. <strong>Предварительная загрузка (Prefetching):</strong> Автоматически загружает JavaScript-бандл целевой страницы при появлении ссылки в области просмотра, ускоряя переход.<br/>3. <strong>Code Splitting:</strong> Работает с автоматическим разделением кода, загружая только нужный код.",
        difficulty: "easy",
      },
      {
        id: "nj-14",
        question: "Что такое Catch-All Routes (Перехватывающие маршруты) и когда они используются?",
        answer:
          "<strong>Catch-All Routes</strong> (маршруты 'поймать все') позволяют динамическому маршруту сопоставляться <strong>с любым количеством сегментов пути</strong>.<br/><br/><strong>Настройка:</strong> Используется синтаксис <strong>`pages/dir/[...slug].js`</strong>.<br/><br/><strong>Использование:</strong><br/>• <strong>Сложные URL:</strong> Идеально подходят для секций документации или блогов, где статьи могут иметь вложенные пути (например, `/docs/guide/introduction`).<br/>• <strong>Обработка 404:</strong> Могут служить для создания пользовательских обработчиков неизвестных путей внутри определенной директории.<br/><br/>Маршрутизатор возвращает параметры как <strong>массив строк</strong> в `router.query.slug`.",
        difficulty: "medium",
      },
      {
        id: "nj-15",
        question: "Что такое `getStaticProps` и когда его следует использовать?",
        answer:
          "<strong>`getStaticProps`</strong> — это асинхронная функция, которая выполняется <strong>только на сервере во время сборки (`build time`)</strong> для предварительной загрузки данных.<br/><br/><strong>Ключевые особенности:</strong><br/>1. <strong>Стратегия рендеринга:</strong> Включает <strong>Static Site Generation (SSG)</strong>. Страница становится статичным HTML-файлом.<br/>2. <strong>`revalidate`:</strong> Может возвращать поле `revalidate: N` для включения <strong>Incremental Static Regeneration (ISR)</strong>, обновляя статическую страницу через `N` секунд без пересборки.<br/><br/><strong>Использование:</strong><br/>Идеально подходит для страниц, контент которых <strong>не меняется часто</strong> (блоги, документация, страницы товаров), так как обеспечивает максимальную скорость и отличное <strong>SEO</strong>.",
        difficulty: "medium",
      },
    ],
  },
  // Angular
  {
    id: "angular",
    name: "Angular",
    questions: [
      {
        id: "ang-1",
        question: "Что такое Angular и каковы его ключевые особенности?",
        answer:
          "<strong>Angular</strong> — это структурная, <strong>TypeScript-ориентированная</strong> платформа с открытым исходным кодом для создания <strong>одностраничных приложений (SPA)</strong>. Ключевые особенности: <strong>Компонентная архитектура</strong>, <strong>Модульность</strong> (через NG Modules), <strong>Внедрение зависимостей (DI)</strong>, <strong>Шаблоны (Templates)</strong>, <strong>Директивы</strong>, и работа с <strong>Observables</strong> для асинхронных операций.",
        difficulty: "easy",
      },
      {
        id: "ang-2",
        question: "Объясните концепцию связывания данных (Data Binding) в Angular и его типы.",
        answer:
          '<strong>Связывание данных</strong> — это механизм, который синхронизирует данные между <strong>Компонентом (модель)</strong> и <strong>DOM (представление)</strong>.\n\n<strong>Типы связывания:</strong>\n1. <strong>Одностороннее (One-Way):</strong> Интерполяция `{{ value }}`, Связывание свойств `[property]="value"`, Связывание событий `(event)="handler()"`.\n2. <strong>Двустороннее (Two-Way):</strong> Использует синтаксис <strong>`[(ngModel)]`</strong> для синхронизации в обе стороны (особенно в формах).',
        difficulty: "medium",
      },
      {
        id: "ang-3",
        question: "Опишите архитектуру приложения Angular.",
        answer:
          "Архитектура Angular основана на <strong>модульности</strong> и <strong>компонентах</strong>. Она состоит из четырех основных элементов:\n1. <strong>Модули (NG Modules):</strong> Контейнеры, группирующие функциональность.\n2. <strong>Компоненты (Components):</strong> Основные строительные блоки UI.\n3. <strong>Сервисы (Services):</strong> Классы для общей, переиспользуемой логики (работа с API, управление данными).\n4. <strong>Маршрутизатор (Router):</strong> Модуль для управления навигацией.\nДанные обычно следуют <strong>однонаправленным потоком</strong> через `@Input()` и `@Output()`.",
        difficulty: "medium",
      },
      {
        id: "ang-4",
        question: "Что такое Компонент (Component) в Angular?",
        answer:
          "<strong>Компонент</strong> — это фундаментальный строительный блок Angular, представляющий собой часть пользовательского интерфейса. Каждый компонент состоит из:\n• <strong>Класса (TypeScript)</strong>: Содержит логику и данные, помечен декоратором <strong>`@Component()`</strong>.\n• <strong>Шаблона (Template)</strong>: HTML-код, определяющий структуру UI.\n• <strong>Стилей (Styles)</strong>: CSS-код, который по умолчанию <strong>изолирован</strong> и применяется только к данному компоненту. Компоненты образуют <strong>Дерево Компонентов (Component Tree)</strong>.",
        difficulty: "easy",
      },
      {
        id: "ang-5",
        question: "Что такое Директивы (Directives) и их типы?",
        answer:
          "<strong>Директивы</strong> — это маркеры на элементе DOM, которые предписывают Angular прикрепить к этому элементу особое поведение или трансформировать его структуру.\n\n<strong>Типы директив:</strong>\n1. <strong>Компоненты (`@Component`)</strong>.\n2. **Структурные (`*`):<strong> Изменяют структуру DOM. Примеры: </strong>`*ngIf`<strong>, </strong>`*ngFor`<strong>.\n3. </strong>Атрибутные (`@Directive`):<strong> Изменяют внешний вид или поведение элемента. Примеры: </strong>`[ngStyle]`<strong>, </strong>`[ngClass]`**.",
        difficulty: "easy",
      },
      {
        id: "ang-6",
        question: "Какова роль Сервисов (Services) в Angular?",
        answer:
          "<strong>Сервисы</strong> используются для <strong>разделения ответственности</strong> и <strong>повторного использования кода (DRY)</strong>. Они содержат бизнес-логику, общие данные или логику работы с HTTP. Сервисы являются <strong>синглтонами</strong> (по умолчанию, если предоставлены в `providedIn: 'root'`) и внедряются в компоненты или другие сервисы с помощью <strong>Внедрения Зависимостей (DI)</strong>.",
        difficulty: "easy",
      },
      {
        id: "ang-7",
        question: "Что такое Внедрение Зависимостей (Dependency Injection - DI) в Angular?",
        answer:
          "<strong>DI</strong> — это основной шаблон проектирования, который позволяет компонентам или сервисам получать свои зависимости (другие сервисы) <strong>извне</strong>.\n\n<strong>Механизм:</strong>\n1. <strong>Регистрация:</strong> Сервис регистрируется как <strong>провайдер</strong> (например, в `@Injectable({ providedIn: 'root' })`).\n2. <strong>Инжектирование:</strong> Angular автоматически создает и предоставляет нужный экземпляр сервиса в <strong>конструктор</strong> компонента. Это обеспечивает модульность и тестируемость.",
        difficulty: "medium",
      },
      {
        id: "ang-8",
        question: "Что такое Модули (Modules) в Angular и их типы?",
        answer:
          "<strong>Модуль (NG Module)</strong> — это контейнер, определенный декоратором <strong>`@NgModule`</strong>, который группирует логически связанные компоненты, директивы, сервисы и пайпы. Они помогают организовать приложение.\n\n<strong>Типы модулей:</strong>\n1. <strong>Корневой Модуль (Root Module):</strong> (`AppModule`) — входная точка приложения.\n2. <strong>Модули Функций (Feature Modules):</strong> Группируют функциональность по конкретной теме. Могут быть <strong>лениво загружаемыми (Lazy-Loaded)</strong> для оптимизации времени запуска.",
        difficulty: "easy",
      },
      {
        id: "ang-9",
        question: "Как обрабатываются события (Events) в Angular?",
        answer:
          'События обрабатываются с помощью <strong>связывания событий (Event Binding)</strong> в шаблоне, используя синтаксис <strong>`(event)="handler($event)"`</strong>.\n\nAngular слушает DOM-событие (например, `click`) и вызывает соответствующий метод в классе компонента, передавая при необходимости объект события <strong>`$event`</strong>. Это <strong>декларативный подход</strong>. Также возможен <strong>императивный подход</strong> через `ViewChild` и `addEventListener`.',
        difficulty: "easy",
      },
      {
        id: "ang-10",
        question: "Как реализовать двустороннее связывание данных (Two-Way Binding)?",
        answer:
          'Двустороннее связывание в Angular реализуется с помощью директивы <strong>`[(ngModel)]`</strong> (синтаксис \'banana in a box\').\n\n<strong>Требования:</strong>\n1. Импортировать <strong>`FormsModule`</strong> в модуль.\n2. Использовать `[(ngModel)]` на элементе ввода, привязанном к свойству компонента: `<input [(ngModel)]="name" name="inputName" />`',
        difficulty: "easy",
      },
      {
        id: "ang-11",
        question: "В чем разница между Компонентами и Директивами?",
        answer:
          "<strong>Компоненты</strong> (`@Component`) — это <strong>основные строительные блоки UI</strong>, которые <strong>всегда имеют свой шаблон и стили</strong>.\n\n<strong>Директивы</strong> (`@Directive`) — это <strong>маркеры</strong>, которые <strong>добавляют поведение</strong> или <strong>трансформируют</strong> существующие элементы DOM или компоненты. Они могут не иметь своего шаблона (например, атрибутные директивы, как `ngClass`).",
        difficulty: "medium",
      },
      {
        id: "ang-12",
        question: "Что такое Пайпы (Pipes) в Angular?",
        answer:
          "<strong>Пайпы</strong> — это классы, помеченные декоратором `@Pipe`, которые используются для <strong>трансформации данных</strong> (форматирования) прямо в шаблоне для отображения пользователю. Они не меняют исходные данные компонента. \n\n<strong>Синтаксис:</strong> `{{ value | pipeName: param1 }}`. Примеры: <strong>`date`</strong>, <strong>`currency`</strong>, <strong>`uppercase`</strong>.",
        difficulty: "easy",
      },
      {
        id: "ang-13",
        question: "Сравните Template-Driven Forms и Reactive Forms.",
        answer:
          "<strong>Template-Driven Forms (TDF):</strong> Логика управляется директивами в <strong>HTML-шаблоне</strong>. Проще для простых форм.\n\n<strong>Reactive Forms (RF):</strong> Форма и ее элементы создаются <strong>программно</strong> в <strong>классе компонента</strong> (`FormGroup`, `FormControl`). Рекомендуется для сложных форм из-за лучшего контроля, масштабируемости и тестируемости.",
        difficulty: "medium",
      },
      {
        id: "ang-14",
        question: "Какова роль Angular CLI?",
        answer:
          "<strong>Angular CLI (Command Line Interface)</strong> — это мощный инструмент командной строки, который <strong>автоматизирует</strong> и <strong>ускоряет</strong> разработку Angular-приложений.\n\n<strong>Ключевые возможности:</strong> Инициализация проекта (`ng new`), <strong>Генерация кода</strong> (`ng generate component`), запуск сервера (`ng serve`), <strong>Сборка для продакшна</strong> с оптимизацией (`ng build --prod`).",
        difficulty: "easy",
      },
      {
        id: "ang-15",
        question: "Как выполнять HTTP-запросы в Angular?",
        answer:
          "HTTP-запросы выполняются с помощью встроенного сервиса <strong>`HttpClient`</strong>, который необходимо <strong>инжектировать</strong> в конструктор (обычно в сервисном классе).\n\n<strong>Шаги:</strong>\n1. Импортировать <strong>`HttpClientModule`</strong> в модуль.\n2. Инжектировать <strong>`HttpClient`</strong>.\n3. Использовать методы `this.http.get()`, `post()`, `put()`, `delete()`, которые возвращают <strong>Observable</strong> (требуют подписки <strong>`.subscribe()`</strong>).",
        difficulty: "easy",
      },
      {
        id: "ang-16",
        question:
          "Жизненный цикл компонента: какие есть хуки (ngOnInit, ngOnChanges, ngOnDestroy и др.)?",
        answer:
          "<strong>Хуки Жизненного Цикла</strong> — это методы, которые Angular вызывает в определенные моменты существования компонента/директивы.<br/><br/><strong>Ключевые хуки:</strong><br/>1. <strong><code>ngOnChanges</code></strong>: Вызывается при изменении входных свойств (<code>@Input()</code>).<br/>2. <strong><code>ngOnInit</code></strong>: Вызывается один раз после первого <code>ngOnChanges</code>; используется для инициализации данных.<br/>3. <strong><code>ngDoCheck</code></strong>: Вызывается сразу после CD. Используется для реализации своей логики CD.<br/>4. <strong><code>ngAfterContentInit/Checked</code></strong>: Для инициализации/проверки контента, вставленного через <code><ng-content></code>.<br/>5. <strong><code>ngAfterViewInit/Checked</code></strong>: Для инициализации/проверки элементов, полученных через <code>ViewChild</code>/<code>ViewChildren</code>.<br/>6. <strong><code>ngOnDestroy</code></strong>: Вызывается непосредственно перед уничтожением компонента; используется для отписки от Observables и очистки ресурсов.",
        difficulty: "medium",
      },
      {
        id: "ang-17",
        question: "Объясните разницу между @Input() и @Output().",
        answer:
          "Это механизмы для <strong>взаимодействия компонентов</strong> в Дереве Компонентов.<br/><br/>1. <strong><code>@Input()</code>:</strong> Позволяет <strong>родительскому компоненту</strong> передавать <strong>данные вниз</strong> (в дочерний).<br/>2. <strong><code>@Output()</code>:</strong> Позволяет <strong>дочернему компоненту</strong> отправлять <strong>события вверх</strong> (родительскому) с помощью экземпляра <strong><code>EventEmitter</code></strong>.",
        difficulty: "easy",
      },
      {
        id: "ang-18",
        question: "Что такое Observables (RxJS) и чем они отличаются от Promise?",
        answer:
          "<strong>Observable (RxJS)</strong> — это поток данных, который может выдавать <strong>ноль, одно или несколько значений</strong> с течением времени (ленивый, многократный, отменяемый).<br/><br/><strong>Promise</strong> — выдает <strong>одно значение</strong> (или ошибку) и завершается (неленивый, однократный, неотменяемый).",
        difficulty: "medium",
      },
      {
        id: "ang-19",
        question: "Как работает Routing в Angular? Что такое lazy loading модулей?",
        answer:
          "<strong>Маршрутизация (Routing)</strong> позволяет приложению перемещаться между различными представлениями (компонентами) без перезагрузки страницы, используя API истории браузера. Навигация настраивается в конфигурации маршрутов.<br/><br/><strong>Lazy Loading (Ленивая загрузка)</strong> — это архитектурный паттерн, при котором <strong>Feature Module</strong> загружается не при старте приложения, а <strong>только при первом обращении к его маршрутам</strong>. Это значительно уменьшает начальный размер бандла и ускоряет запуск приложения.",
        difficulty: "medium",
      },
      {
        id: "ang-20",
        question: "Что такое Guard в Angular (CanActivate, CanDeactivate и т.д.)?",
        answer:
          "<strong>Гарды (Guards)</strong> — это классы, реализующие определенные интерфейсы (<code>CanActivate</code>, <code>CanDeactivate</code> и др.), которые позволяют <strong>управлять доступом</strong> к маршрутам. Они запускаются до или после навигации.<br/><br/>* <strong><code>CanActivate</code></strong>: Разрешает/запрещает доступ к маршруту.<br/>* <strong><code>CanDeactivate</code></strong>: Разрешает/запрещает уход с маршрута (например, если форма не сохранена).",
        difficulty: "medium",
      },
      {
        id: "ang-21",
        question: "Что такое Change Detection и какие есть стратегии (Default vs OnPush)?",
        answer:
          "<strong>Change Detection (CD)</strong> — механизм, который <strong>проверяет изменения</strong> в модели данных и <strong>обновляет DOM</strong>, чтобы отобразить новое состояние.<br/><br/><strong>Стратегии:</strong><br/>1. <strong><code>Default</code> (CheckAlways)</strong>: Компонент проверяется при <strong>любом</strong> событии (клика, таймера, HTTP-запроса) в приложении.<br/>2. <strong><code>OnPush</code> (CheckOnce)</strong>: Компонент проверяется <strong>только</strong> если изменились входные свойства (<code>@Input()</code>) по ссылке (не мутация) или если произошло событие внутри компонента.",
        difficulty: "hard",
      },
      {
        id: "ang-22",
        question: "Как работает механизм Zone.js и зачем он нужен Angular?",
        answer:
          '<strong>Zone.js</strong> — это библиотека, которая <strong>патчит</strong> (обертывает) асинхронные API браузера (<code>setTimeout</code>, <code>addEventListener</code>, <code>Promise</code> и др.), создавая <strong>"зоны" выполнения</strong>.<br/><br/><strong>Роль в Angular:</strong> Когда асинхронная операция в зоне завершается, Zone.js уведомляет Angular о потенциальном изменении данных. Это автоматически <strong>запускает цикл Change Detection</strong>, освобождая разработчика от ручного вызова CD.',
        difficulty: "hard",
      },
      {
        id: "ang-23",
        question:
          "Объясните internals работы Change Detection и как OnPush влияет на производительность.",
        answer:
          "Внутренне CD — это <strong>обход Дерева Компонентов (Component Tree)</strong> сверху вниз. Для каждого компонента Angular сравнивает <strong>предыдущее значение</strong> свойства с <strong>текущим</strong> и при расхождении обновляет DOM.<br/><br/><strong><code>OnPush</code> Влияние:</strong> Значительно <strong>повышает производительность</strong>, так как Angular может <strong>пропускать поддерево</strong> компонентов, если их входные данные (<code>@Input</code>) не изменились по ссылке, а также не было событий внутри компонента. Это минимизирует количество проверок.",
        difficulty: "hard",
      },
      {
        id: "ang-24",
        question: "Что такое Ahead-of-Time (AOT) компиляция и чем она отличается от JIT?",
        answer:
          "<strong>AOT (Ahead-of-Time)</strong> — компиляция шаблонов и компонентов **во время сборки** (build time), до того, как код будет запущен в браузере. <br/><br/>**JIT (Just-in-Time)** — компиляция происходит **в браузере во время выполнения**.<br/><br/>**Преимущества AOT:** Более быстрая загрузка (нет компиляции в браузере), меньший размер бандла (удаляется компилятор), более ранняя ловля ошибок шаблонов.",
        difficulty: "medium",
      },
      {
        id: "ang-25",
        question: "Чем отличаются ViewChild и ContentChild? В каких случаях использовать?",
        answer:
          "Оба декоратора используются для получения доступа к элементам в шаблоне компонента.<br/><br/>1. <strong><code>@ViewChild()</code>:</strong> Получает ссылку на элемент (HTML, компонент или директиву), который находится **в собственном шаблоне** компонента.<br/>2. <strong><code>@ContentChild()</code>:</strong> Получает ссылку на элемент, который был **вставлен** в компонент через механизм <strong>проекции контента (<code><ng-content></code>)</strong>.",
        difficulty: "medium",
      },
      {
        id: "ang-26",
        question: "Разница между Subject, BehaviorSubject, ReplaySubject, AsyncSubject (RxJS).",
        answer:
          "Все они являются <strong>Observable</strong>, которые также могут быть <strong>Observer</strong> (то есть, они могут и генерировать, и принимать значения).<br/><br/>1. <strong><code>Subject</code></strong>: Обычный вещатель, не хранит состояние. Подписчики получают **только будущие** значения.<br/>2. <strong><code>BehaviorSubject</code></strong>: Хранит <strong>текущее значение</strong> (требует начального). Подписчики получают **сразу последнее** значение, затем будущие.<br/>3. <strong><code>ReplaySubject</code></strong>: Хранит <strong>буфер</strong> из $N$ последних значений (кеширует их). Подписчики получают эти $N$ значений сразу.<br/>4. <strong><code>AsyncSubject</code></strong>: Отправляет <strong>только последнее</strong> значение, и только **после** вызова <code>complete()</code>.",
        difficulty: "hard",
      },
      {
        id: "ang-27",
        question: "Что такое Ivy renderer и чем он отличается от старого View Engine?",
        answer:
          "<strong>Ivy</strong> — это кодовое название для переработанного <strong>движка рендеринга и компилятора Angular</strong> (начиная с Angular 9).<br/><br/><strong>Ключевые отличия:</strong><br/>1. <strong>Tree-shaking:</strong> Значительно лучше удаляет неиспользуемый код, уменьшая размер бандла.<br/>2. <strong>Locality:</strong> Компилирует каждый компонент независимо (быстрее).<br/>3. <strong>Agnostic:</strong> Улучшает совместимость с другими фреймворками (Micro Frontends).<br/>4. **Smaller Bundle Size.**",
        difficulty: "medium",
      },
      {
        id: "ang-28",
        question: "Что такое NgZone.run() и NgZone.runOutsideAngular()? Когда использовать?",
        answer:
          "Это методы для работы с <strong>Zone.js</strong> и механизмом Change Detection.<br/><br/>1. <strong><code>NgZone.run(callback)</code>:</strong> Выполняет код **внутри зоны Angular**. Это **гарантирует** запуск Change Detection после выполнения <code>callback</code>. Используется редко, чаще всего для принудительного запуска CD после кода, который был запущен <code>runOutsideAngular</code>.<br/>2. <strong><code>NgZone.runOutsideAngular(callback)</code>:</strong> Выполняет код **вне зоны Angular**. Это <strong>предотвращает запуск Change Detection</strong>. Используется для высокочастотных, не влияющих на данные событий (например, движения мыши, анимации), чтобы избежать постоянного запуска CD и улучшить производительность.",
        difficulty: "hard",
      },
      {
        id: "ang-29",
        question:
          "Как работает оптимизация tree-shaking в Angular и зачем нужны providedIn: 'root'?",
        answer:
          "<strong>Tree-shaking</strong> — это процесс удаления \"мертвого\" кода (функций, классов), который был импортирован, но никогда не использовался, во время сборки.<br/><br/><strong><code>providedIn: 'root'</code>:</strong> Когда сервис зарегистрирован таким образом, Angular CLI может легко определить, **используется ли** этот сервис где-либо в приложении. Если он не инжектируется ни в один класс, компилятор AOT <strong>полностью удаляет</strong> этот сервис из финального бандла, обеспечивая эффективный tree-shaking и уменьшение размера кода.",
        difficulty: "medium",
      },
      {
        id: "ang-30",
        question: "Что такое State Management (NgRx, Akita, NGXS)? Какие плюсы и минусы у NgRx?",
        answer:
          "<strong>State Management</strong> — это паттерны и библиотеки для <strong>централизованного управления состоянием приложения</strong> (данными), особенно в больших SPA, для обеспечения предсказуемости.<br/><br/>**NgRx (Redux-подобный):**<br/>* **Плюсы:** Предсказуемость (однонаправленный поток данных), мощные инструменты для отладки (DevTools), отличная масштабируемость.<br/>* **Минусы:** Много boilerplate-кода (Action, Reducer, Effect), высокий порог входа, требует больше времени на реализацию простых функций.",
        difficulty: "medium",
      },
      {
        id: "ang-31",
        question:
          "Какие есть стратегии оптимизации производительности Angular-приложения (CD, trackBy, detach, memoization)?",
        answer:
          "Основные стратегии:<br/>1.  <strong>Change Detection:</strong> Переход на стратегию <strong><code>OnPush</code></strong>.<br/>2.  <strong><code>trackBy</code> (в <code>*ngFor</code>):</strong> Помогает Angular более эффективно обновлять DOM-элементы в циклах, предотвращая перерисовку всего списка при добавлении/удалении одного элемента.<br/>3.  <strong><code>detach</code>/<code>attach</code>:</strong> Вручную отключает/включает поддерево компонентов из цикла CD для высокочастотных изменений (используется <code>ChangeDetectorRef</code>).<br/>4.  <strong>Lazy Loading:</strong> Ленивая загрузка модулей.<br/>5.  **AOT/Tree-Shaking.**<br/>6.  **Memoization (Пайпы):** Использование <code>Pure Pipes</code>, которые выполняются только при изменении входных данных.",
        difficulty: "hard",
      },
    ],
  },
  // AngularJS
  {
    id: "angularjs",
    name: "AngularJS",
    questions: [
      {
        id: "ajs-1",
        question: "Что такое AngularJS и каковы его ключевые особенности?",
        answer:
          "<strong>AngularJS</strong> — это JavaScript-фреймворк с открытым исходным кодом (версия 1.x), разработанный Google для создания <strong>одностраничных приложений (SPA)</strong>. Ключевые особенности:\n1. <strong>Двустороннее связывание данных (Two-Way Data Binding).</strong>\n2. <strong>MVC-архитектура.</strong>\n3. <strong>Внедрение зависимостей (DI).</strong>\n4. <strong>Директивы</strong> (для расширения HTML).\n5. Концепция <strong>Scope</strong>.",
        difficulty: "easy",
      },
      {
        id: "ajs-2",
        question: "Как AngularJS реализует двустороннее связывание данных?",
        answer:
          "Двустороннее связывание данных обеспечивает автоматическую синхронизацию между <strong>Моделью (данные в `$scope`)</strong> и <strong>Представлением (HTML/UI)</strong>. Когда данные в модели изменяются, представление обновляется, и наоборот. Это реализуется через директиву <strong>`ngModel`</strong> и цикл <strong>`$digest`</strong>.\n\n<strong>Преимущество:</strong> Значительно уменьшает необходимость ручной манипуляции с DOM и обработки событий.",
        difficulty: "easy",
      },
      {
        id: "ajs-3",
        question:
          "Что такое Директивы (Directives) в AngularJS и приведите примеры основных директив.",
        answer:
          "<strong>Директивы</strong> — это маркеры в DOM-элементе (атрибуты, элементы, комментарии или классы), которые сообщают компилятору AngularJS о необходимости прикрепить к этому элементу особое поведение или трансформировать DOM.\n\n<strong>Примеры:</strong>\n* <strong>`ng-app`</strong>: Определяет корневой элемент приложения.\n* <strong>`ng-controller`</strong>: Привязывает контроллер к представлению.\n* <strong>`ng-model`</strong>: Реализует двустороннее связывание данных.\n* <strong>`ng-repeat`</strong>: Итерация по коллекциям.\n* <strong>`ng-click`</strong>: Обработка событий клика.",
        difficulty: "easy",
      },
      {
        id: "ajs-4",
        question: "Объясните механизм Цикла `$digest` в AngularJS.",
        answer:
          "Цикл <strong>`$digest`</strong> — это ядро механизма двустороннего связывания. Он отвечает за синхронизацию Модели и Представления. Цикл запускается автоматически при стандартных событиях (например, `ng-click`, HTTP-ответы).\n\n<strong>Механизм:</strong>\n1. AngularJS запускает <strong>Грязную Проверку (Dirty-Checking)</strong>, перебирая все <strong>`$watch`</strong>-выражения.\n2. Сравниваются текущие значения модели с предыдущими.\n3. Если обнаружено изменение, соответствующее <strong>Представление</strong> обновляется, а цикл повторяется.\n\nЦикл продолжается до стабилизации (не обнаружено больше изменений) или достижения лимита итераций (для предотвращения бесконечных циклов).",
        difficulty: "medium",
      },
      {
        id: "ajs-5",
        question: "Когда и как можно вручную запустить Цикл `$digest`?",
        answer:
          "Цикл `$digest` запускается вручную, когда изменения в Модели происходят <strong>вне контекста AngularJS</strong> (например, в колбэках сторонних библиотек, `setTimeout`, или нативных обработчиках DOM-событий).\n\n<strong>Методы запуска:</strong>\n1. <strong>`$scope.$apply()`:</strong> Рекомендуемый способ. Он запускает цикл `$digest` от <strong>`$rootScope`</strong> вниз по иерархии. Если изменения произошли вне Angular, используйте `$apply()`.\n2. <strong>`$scope.$digest()`:</strong> Запускает цикл `$digest` только на <strong>текущей области видимости (`$scope`) и ее дочерних</strong> областях. Используется, когда вы уверены, что изменения произошли в рамках Angular, но нужно более локальное обновление.",
        difficulty: "medium",
      },
      {
        id: "ajs-6",
        question: "Какова роль `Controller` в AngularJS?",
        answer:
          "<strong>Контроллер</strong> — это JavaScript-функция (класс), которая содержит <strong>бизнес-логику</strong> и <strong>инициализирует `$scope`</strong>, который связывает Модель (данные) с Представлением (HTML).\n\n<strong>Ключевые обязанности:</strong>\n1. <strong>Управление `$scope`:</strong> Прикрепление свойств и функций к `$scope`.\n2. <strong>Обработка данных:</strong> Загрузка начальных данных и обработка ввода пользователя.\n3. <strong>Обработка событий:</strong> Реагирование на события DOM (через директивы типа `ng-click`).\n\nКонтроллер привязывается к представлению с помощью директивы <strong>`ng-controller`</strong>.",
        difficulty: "easy",
      },
      {
        id: "ajs-7",
        question: "Что такое `Scope` в AngularJS?",
        answer:
          "<strong>`$scope`</strong> — это объект, который служит <strong>клеем</strong> между <strong>Контроллером</strong> и <strong>Представлением (View)</strong>. Он представляет собой контекст выполнения выражений и является двусторонним мостом для данных.\n\n<strong>Особенности:</strong>\n* Имеет иерархическую структуру (<strong>Scope Hierarchy</strong>), наследуя свойства от родительских областей.\n* Содержит <strong>watchers</strong>, которые отслеживаются циклом `$digest`.\n* Управляется жизненным циклом (создается при привязке контроллера и уничтожается при удалении элемента DOM).",
        difficulty: "easy",
      },
      {
        id: "ajs-8",
        question: "Объясните Иерархию Scope (Scope Hierarchy) в AngularJS.",
        answer:
          "Иерархия Scope — это <strong>древовидная структура</strong> областей видимости в приложении AngularJS. Она повторяет структуру DOM, к которой привязаны контроллеры или директивы.\n\n1. <strong>`$rootScope`:</strong> <strong>Глобальная</strong> область видимости, родитель всех остальных областей.\n2. <strong>`$scope`:</strong> Создается для каждого контроллера. Наследует свойства от родительского scope (прототипное наследование).\n\n<strong>Поток данных:</strong> По умолчанию дочерние scope могут считывать свойства родителя, но запись (примитивных типов) создает новое свойство в дочернем scope. Рекомендуется использовать <strong>'dot' rule</strong> (привязывать данные к объекту, например, `user.name`) для избежания проблем наследования.",
        difficulty: "medium",
      },
      {
        id: "ajs-9",
        question: "Что такое `$rootScope` и почему следует избегать его частого использования?",
        answer:
          "<strong>`$rootScope`</strong> — это <strong>самый верхний Scope</strong> в иерархии, доступный во всем приложении. Он используется для хранения данных или функций, которые должны быть доступны <strong>глобально</strong>.\n\n<strong>Почему следует избегать частого использования:</strong>\n1. <strong>Проблемы отладки:</strong> Глобальное состояние усложняет отслеживание источника изменений.\n2. <strong>Производительность:</strong> Любое изменение в `$rootScope` запускает цикл `$digest` по всему приложению.\n3. <strong>Тестирование:</strong> Снижает модульность и усложняет изолированное тестирование.",
        difficulty: "medium",
      },
      {
        id: "ajs-10",
        question: "Какова роль директивы `ng-app`?",
        answer:
          '<strong>`ng-app`</strong> — это директива, которая <strong>инициализирует (бутстрапит)</strong> приложение AngularJS. Она:\n1. Определяет <strong>корневой элемент</strong> приложения (чаще всего на `<html>` или `<body>`).\n2. <strong>Автоматически</strong> загружает соответствующий <strong>модуль</strong> AngularJS (если указано имя модуля, например, `ng-app="myApp"`).\n3. Создает <strong>`$rootScope`</strong>.',
        difficulty: "easy",
      },
      {
        id: "ajs-11",
        question: "Для чего используется директива `ng-model`?",
        answer:
          "<strong>`ng-model`</strong> — это основная директива для <strong>двустороннего связывания данных</strong> в элементах формы (input, select, textarea).\n\n<strong>Функции:</strong>\n1. Связывает значение элемента формы со свойством в `$scope`.\n2. Предоставляет информацию о <strong>валидности</strong> поля формы (через `$error` и классы CSS, такие как `ng-invalid`).\n3. Отслеживает изменения, чтобы инициировать цикл `$digest`.",
        difficulty: "easy",
      },
      {
        id: "ajs-12",
        question: "Как можно обмениваться данными между контроллерами в AngularJS?",
        answer:
          "Для обмена данными между контроллерами используются три основных механизма:\n\n1. <strong>Сервисы (Services):</strong> Рекомендуемый способ. Создайте <strong>синглтон-сервис</strong>, который будет хранить и управлять общими данными. Контроллеры инжектируют этот сервис для доступа к данным.\n2. <strong>События Scope:</strong> Используйте <strong>`$emit`</strong> (событие вверх по иерархии) и <strong>`$broadcast`</strong> (событие вниз по иерархии) для уведомления других контроллеров об изменениях.\n3. <strong>Наследование (Parent-Child):</strong> Если контроллеры находятся в иерархии, дочерний контроллер может считывать свойства родительского scope.",
        difficulty: "medium",
      },
      {
        id: "ajs-13",
        question: "Назовите основные встроенные Сервисы (Services) в AngularJS.",
        answer:
          "<strong>Сервисы</strong> — это синглтон-объекты, которые предоставляют общие функциональные возможности.\n\n<strong>Основные встроенные сервисы:</strong>\n* <strong>`$http`</strong>: Для асинхронной связи с удаленными серверами (AJAX/RESTful API).\n* <strong>`$scope`</strong>: Объект, связывающий Модель и Представление.\n* <strong>`$rootScope`</strong>: Глобальный Scope.\n* <strong>`$location`</strong>: Для работы с URL-адресом браузера и его изменения.\n* <strong>`$timeout`</strong>: Обертка для нативного `setTimeout()`.\n* <strong>`$interval`</strong>: Обертка для нативного `setInterval()`.\n* <strong>`$q`</strong>: Для работы с асинхронными операциями и Promises.",
        difficulty: "medium",
      },
      {
        id: "ajs-14",
        question:
          "Как определить пользовательский сервис в AngularJS (Factory, Service, Provider)?",
        answer:
          "Пользовательские сервисы можно создать тремя способами:\n\n1. <strong>`.factory(name, func)`:</strong> Самый распространенный. Функция `func` выполняется один раз и <strong>возвращает объект</strong>, который будет инжектирован. Позволяет создавать сложные объекты и инжектировать другие зависимости.\n2. <strong>`.service(name, func)`:</strong> Функция `func` — это <strong>конструктор</strong>. AngularJS вызывает его с помощью оператора `new` и инжектирует полученный экземпляр.\n3. <strong>`.provider(name, func)`:</strong> Наиболее гибкий. Позволяет <strong>конфигурировать сервис</strong> до начала работы приложения с помощью метода `$get`.",
        difficulty: "medium",
      },
      {
        id: "ajs-15",
        question: "Как определяется и используется метод контроллера в AngularJS?",
        answer:
          'Метод контроллера — это функция, прикрепленная к объекту `$scope` внутри контроллера.\n\n<strong>Определение:</strong>\n```javascript\napp.controller(\'MyController\', function($scope) {\n  $scope.userName = \'Гость\';\n  $scope.greet = function(name) {\n    alert(\'Привет, \' + name);\n  };\n});\n```\n\n<strong>Использование в HTML:</strong>\nМетод вызывается с помощью директив событий, например, <strong>`ng-click`</strong>:\n```html\n<div ng-controller="MyController">\n  <input type="text" ng-model="userName" />\n  <button ng-click="greet(userName)">Поприветствовать</button>\n</div>\n```',
        difficulty: "easy",
      },
    ],
  },
  // TS
  {
    id: "typescript",
    name: "TypeScript",
    questions: [
      {
        id: "ts-1",
        question: "Что такое TypeScript и каковы его основные преимущества?",
        answer:
          "<strong>TypeScript</strong> — это статически типизированный (statically-typed) <strong>суперсет (Superset) JavaScript</strong>, разработанный Microsoft. Весь код TypeScript компилируется (транспилируется) в обычный, исполняемый браузерами JavaScript.<br/><br/><strong>Основные преимущества:</strong><br/>1. <strong>Статическая типизация:</strong> Позволяет определять типы переменных, параметров и возвращаемых значений, что помогает <strong>отлавливать ошибки на этапе компиляции</strong>, а не в рантайме.<br/>2. <strong>Улучшенный инструментарий (Tooling):</strong> Обеспечивает более качественное автодополнение (autocompletion), рефакторинг и навигацию по коду в IDE (VS Code).<br/>3. <strong>Совместимость с ES:</strong> Поддерживает все современные функции ECMAScript (ES6+) и может компилировать код для разных версий JS.<br/>4. <strong>Читаемость и поддерживаемость:</strong> Благодаря явным типам и структуре, код становится более понятным и легче масштабируется на больших проектах.",
        difficulty: "easy",
      },
      {
        id: "ts-2",
        question: "Почему TypeScript называют 'суперсетом JavaScript'?",
        answer:
          "TypeScript является 'суперсетом JavaScript', потому что <strong>любой валидный JavaScript-код также является валидным TypeScript-кодом</strong>.<br/><br/>Это означает, что TypeScript включает в себя весь синтаксис и функциональность JavaScript и <strong>добавляет свои собственные функции поверх</strong> него, не нарушая существующий код.<br/><br/><strong>Ключевые добавления:</strong><br/>• <strong>Аннотации типов:</strong> Возможность явного указания типов (`let num: number = 5;`).<br/>• <strong>Интерфейсы, Дженерики, Декораторы</strong> и другие продвинутые концепции.<br/>• <strong>Функции ES следующего поколения</strong> (например, `private`/`public` модификаторы в классах).<br/><br/>Эта особенность обеспечивает плавный переход при миграции существующих JavaScript-кодовых баз на TypeScript.",
        difficulty: "easy",
      },
      {
        id: "ts-3",
        question: "Назовите основные базовые типы данных в TypeScript.",
        answer:
          "TypeScript предоставляет богатый набор примитивных и структурных типов для обеспечения строгой типизации:<br/><br/>1. <strong>Примитивные типы:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`number`</strong>: Для всех чисел (целых и с плавающей точкой).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`string`</strong>: Для текстовых данных.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`boolean`</strong>: Для логических значений (`true` / `false`).<br/>2. <strong>Специальные типы:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Array` / `number[]`</strong>: Для массивов.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Tuple`</strong>: Для массивов с фиксированным количеством элементов и известными типами каждого элемента (например, `[string, number]`).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Enum`</strong>: Набор именованных констант (например, `enum HttpMethods { GET, POST }`).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Any`</strong>: Динамический тип, который отключает проверку типов (следует избегать).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Void`</strong>: Тип возвращаемого значения для функций, которые ничего не возвращают.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Never`</strong>: Тип для значений, которые никогда не могут возникнуть (например, функция, которая всегда выбрасывает исключение).",
        difficulty: "easy",
      },
      {
        id: "ts-4",
        question:
          "Объясните использование let, const и var для объявления переменных в TypeScript.",
        answer:
          "TypeScript использует стандартные методы объявления переменных из ECMAScript 2015 (ES6), дополняя их статической типизацией.<br/><br/>| Ключевое слово | Область видимости (Scope) | Переназначаемость (Reassignable) | Рекомендация |<br/>| :--- | :--- | :--- | :--- |<br/>| <strong>`const`</strong> | Блочная (`{...}`) | <strong>Нет (Immutable reference)</strong> | Используйте по умолчанию, чтобы предотвратить случайное изменение. |<br/>| <strong>`let`</strong> | Блочная (`{...}`) | <strong>Да (Mutable)</strong> | Используйте, когда переменная должна быть переназначена. |<br/>| <strong>`var`</strong> | Функциональная или Глобальная | Да | Избегайте, так как приводит к 'подъему' (`hoisting`) и непредсказуемости. |<br/><br/><strong>Типизация:</strong> В TypeScript вы можете явно указать тип (`let name: string = 'Alice';`) или позволить компилятору <strong>инферировать</strong> тип на основе присвоенного значения (`let age = 30;` -> `age` будет `number`).",
        difficulty: "easy",
      },
      {
        id: "ts-5",
        question: "Что такое Interface (Интерфейс) в TypeScript и для чего он используется?",
        answer:
          "<strong>Интерфейс (`Interface`)</strong> в TypeScript — это мощная конструкция, которая определяет <strong>контракт</strong> на структуру объекта (или класса, или функции). Он используется исключительно на этапе компиляции для проверки типов и не генерирует JavaScript-код.<br/><br/><strong>Ключевые возможности:</strong><br/>1. <strong>Определение структуры объекта:</strong> Гарантирует, что объект имеет определенный набор свойств и методов с нужными типами.<br/>2. <strong>Необязательные свойства:</strong> Свойства можно пометить как необязательные с помощью символа `?` (например, `age?: number`).<br/>3. <strong>Свойства только для чтения:</strong> Используется ключевое слово `readonly` (например, `readonly id: number`).<br/>4. <strong>Контракт для классов:</strong> Класс может `implements` (реализовывать) интерфейс, обязуясь предоставить все его члены.<br/><br/><strong>Пример:</strong><br/>```typescript<br/>interface Point {<br/>&nbsp;&nbsp;x: number;<br/>&nbsp;&nbsp;y: number;<br/>}<br/><br/>// Функция принимает только объекты, соответствующие структуре Point<br/>function printPoint(p: Point) { ... }<br/>```",
        difficulty: "medium",
      },
      {
        id: "ts-6",
        question: "Что такое Enum (Перечисления) в TypeScript и в каких случаях их используют?",
        answer:
          "<strong>Enum (Перечисление)</strong> — это тип данных, который позволяет определить набор <strong>именованных констант</strong>. Он повышает читаемость кода, заменяя 'магические числа' или строки осмысленными именами.<br/><br/><strong>Виды Enums:</strong><br/>1. <strong>Числовые (Standard Enum):</strong> Значения по умолчанию начинаются с 0, но могут быть переопределены.<br/>```typescript<br/>enum Direction { Up, Down, Left, Right }<br/>let move = Direction.Up; // move === 0<br/>```<br/>2. <strong>Строковые (String Enum):</strong> Значениям явно присваиваются строки. Это обеспечивает лучшую читаемость и отладку в рантайме.<br/>```typescript<br/>enum MediaTypes { Image = 'image', Video = 'video' }<br/>const selected = MediaTypes.Image; // selected === 'image'<br/>```<br/><br/><strong>Использование:</strong> Enums идеальны для <strong>дискретных, фиксированных наборов значений</strong>, таких как режимы, статусы, HTTP-методы или дни недели. Они обеспечивают <strong>типобезопасность</strong> при работе с этими константами.",
        difficulty: "medium",
      },
      {
        id: "ts-7",
        question:
          "Как определяется функция в TypeScript? Расскажите об основных элементах сигнатуры.",
        answer:
          'Определение функции в TypeScript включает строгую типизацию ее <strong>сигнатуры</strong> (параметров) и <strong>возвращаемого значения</strong>.<br/><br/><strong>Элементы сигнатуры функции:</strong><br/>1. <strong>Имена и типы параметров:</strong> Каждый параметр явно типизируется.<br/>2. <strong>Тип возвращаемого значения:</strong> Указывается после списка параметров через двоеточие (`: type`). Если функция ничего не возвращает, используется тип <strong>`void`</strong>.<br/>3. <strong>Необязательные (`?`) и Параметры по умолчанию:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Необязательные:</strong> `function func(name: string, title?: string)`.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>По умолчанию:</strong> `function func(name: string = "Гость")`.<br/>4. <strong>Rest-параметры:</strong> Позволяют функции принимать любое количество аргументов определенного типа, используя синтаксис `...names: string[]`.<br/><br/><strong>Пример:</strong><br/>```typescript<br/>// Имена: string, id: number; Возвращаемый тип: boolean<br/>function isValidUser(name: string, id: number): boolean {<br/>&nbsp;&nbsp;if (id > 0) return true;<br/>&nbsp;&nbsp;return false;<br/>}<br/>```',
        difficulty: "medium",
      },
      {
        id: "ts-8",
        question: "Что такое Type Inference (Инференция типов) и как она работает?",
        answer:
          "<strong>Инференция типов (Type Inference)</strong> — это ключевая особенность TypeScript, позволяющая компилятору <strong>автоматически определять тип</strong> переменной, выражения или возвращаемого значения функции на основе его присвоенного значения или контекста, без необходимости явного указания типа разработчиком.<br/><br/><strong>Принцип работы:</strong><br/>• Когда переменная объявляется и сразу инициализируется, TypeScript использует тип инициализирующего значения.<br/>• <strong>Пример:</strong> `let price = 100;` $\rightarrow$ TypeScript инферирует `price` как `number`.<br/>• <strong>Пример:</strong> `let names = ['Alice', 'Bob'];` $\rightarrow$ TypeScript инферирует `names` как `string[]`.<br/><br/><strong>Преимущество:</strong> Это позволяет писать более <strong>лаконичный и чистый код</strong>, при этом сохраняя все преимущества статической типизации (компилятор все равно будет проверять на ошибки).",
        difficulty: "easy",
      },
      {
        id: "ts-9",
        question: "Опишите процесс компиляции TypeScript в JavaScript и роль tsconfig.json.",
        answer:
          'Процесс компиляции (транспиляции) преобразует файлы TypeScript (`.ts` или `.tsx`) в чистый JavaScript (`.js`), который может быть выполнен браузером или Node.js.<br/><br/><strong>Шаги процесса:</strong><br/>1. <strong>Конфигурация (`tsconfig.json`):</strong> Это основной файл конфигурации, который указывает <strong>компилятору TypeScript (`tsc`)</strong>:<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Какие файлы</strong> включить и исключить.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Целевой стандарт JS</strong> (`"target": "ES5"` или `"ES2020"`).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Систему модулей</strong> (`"module": "commonjs"` или `"esnext"`).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Каталог для выходных файлов</strong> (`"outDir": "dist"`).<br/>2. <strong>Выполнение (`tsc`):</strong> Разработчик запускает команду `tsc` (TypeScript Compiler).<br/>3. <strong>Компиляция:</strong> Компилятор читает файлы, проверяет типы, применяет все указанные настройки и генерирует соответствующие JavaScript-файлы.',
        difficulty: "medium",
      },
      {
        id: "ts-10",
        question:
          "Какие уникальные особенности классов есть в TypeScript по сравнению с ES6 классами?",
        answer:
          "TypeScript расширяет стандартный синтаксис классов ES6, добавляя функции, специфичные для объектно-ориентированного программирования и типизации:<br/><br/>1. <strong>Модификаторы доступа (`Access Modifiers`):</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`public`</strong> (по умолчанию): Доступен везде.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`private`</strong>: Доступен только внутри объявляющего класса.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`protected`</strong>: Доступен внутри класса и его подклассов.<br/>2. <strong>Абстрактные классы (`Abstract Classes`):</strong> Классы, которые нельзя инстанциировать напрямую, служат 'чертежом' для других классов и могут содержать <strong>абстрактные методы</strong> (без реализации).<br/>3. <strong>Свойства только для чтения (`readonly`):</strong> Свойство, которое может быть установлено только при объявлении или в конструкторе.<br/>4. <strong>Параметры свойств в конструкторе:</strong> Сокращенный синтаксис для создания и инициализации свойства класса прямо в аргументах конструктора (например, `constructor(private name: string)`).",
        difficulty: "medium",
      },
      {
        id: "ts-11",
        question: "Как работает наследование (Inheritance) классов в TypeScript?",
        answer:
          "TypeScript использует ключевое слово <strong>`extends`</strong> из ES6 для реализации классического, основанного на классах, наследования.<br/><br/><strong>Ключевые принципы:</strong><br/>1. <strong>Наследование:</strong> Дочерний класс (`extends`) наследует все методы и свойства родительского класса.<br/>2. <strong>Конструктор (`constructor`):</strong> Дочерний класс, который имеет собственный конструктор, должен обязательно вызвать конструктор родителя с помощью ключевого слова <strong>`super()`</strong>.<br/>3. <strong>Переопределение (`Override`):</strong> Дочерний класс может переопределить метод, который существует в родительском классе, используя то же имя и сигнатуру. При этом внутри переопределенного метода можно вызвать метод родителя через `super.methodName()`.<br/><br/><strong>Пример:</strong><br/>```typescript<br/>class Animal { /* ... */ }<br/>class Snake extends Animal {<br/>&nbsp;&nbsp;constructor(name: string) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;super(name); // Обязательный вызов родительского конструктора<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;move() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;super.move(5); // Вызов метода родителя<br/>&nbsp;&nbsp;}<br/>}<br/>```",
        difficulty: "medium",
      },
      {
        id: "ts-12",
        question:
          "Что такое Access Modifiers (Модификаторы доступа) и как они используются в классах?",
        answer:
          "<strong>Модификаторы доступа</strong> в TypeScript используются для контроля <strong>видимости</strong> и <strong>доступности</strong> членов класса (свойств и методов). Это ключевой элемент, обеспечивающий <strong>инкапсуляцию</strong> (сокрытие данных).<br/><br/><strong>Три основных модификатора:</strong><br/>1. <strong>`public`:</strong> Член доступен отовсюду: изнутри класса, извне и в подклассах. Это <strong>модификатор по умолчанию</strong>.<br/>2. <strong>`protected`:</strong> Член доступен только <strong>внутри класса</strong> и <strong>внутри всех его подклассов</strong> (помогают в реализации отношений 'является-чем-то', 'is-a').<br/>3. <strong>`private`:</strong> Член доступен <strong>только внутри объявляющего класса</strong>. Он полностью скрыт от внешнего мира и от подклассов.<br/><br/><strong>На заметку:</strong> Модификаторы доступа TypeScript не гарантируют 100% защиты в скомпилированном JavaScript (так как JS не имеет нативной поддержки), но они <strong>принудительно проверяются на этапе компиляции</strong>, что является критичным для поддержания порядка в коде.",
        difficulty: "medium",
      },
      {
        id: "ts-13",
        question: "Объясните концепцию Abstract Classes (Абстрактных классов) в TypeScript.",
        answer:
          "<strong>Абстрактный класс</strong> — это класс-<strong>чертеж</strong> или <strong>шаблон</strong>, который предназначен для наследования другими классами и <strong>не может быть инстанциирован</strong> (создан объект) самостоятельно.<br/><br/><strong>Ключевые особенности:</strong><br/>1. <strong>Ключевое слово `abstract`:</strong> Используется при объявлении класса и его абстрактных методов.<br/>2. <strong>Абстрактные методы:</strong> Методы, которые объявлены (`abstract someMethod(): void;`) <strong>без реализации</strong>. Любой класс, который наследует абстрактный класс, <strong>обязан</strong> предоставить конкретную реализацию для всех абстрактных методов.<br/>3. <strong>Обычные методы/свойства:</strong> Абстрактный класс может также содержать полностью реализованные методы и свойства, которые наследуются как обычно.<br/><br/><strong>Использование:</strong> Абстрактные классы используются для <strong>обеспечения общего контракта</strong> и логики для группы тесно связанных подклассов, гарантируя, что каждый подкласс реализует определенные, критически важные функции.",
        difficulty: "hard",
      },
    ],
  },
  // node.js
  {
    id: "nodejs",
    name: "Node.js",
    questions: [
      {
        id: "node-1",
        question: "Что такое Node.js и каковы его ключевые особенности?",
        answer:
          "<strong>Node.js</strong> — это кроссплатформенная <strong>среда выполнения JavaScript</strong> с открытым исходным кодом, предназначенная для выполнения кода вне браузера (обычно на сервере). Она построена на движке <strong>V8 Google Chrome</strong>.\n\n<strong>Ключевые особенности:</strong>\n1. <strong>Асинхронность и неблокирующий I/O</strong>.\n2. <strong>Однопоточная модель</strong> с использованием цикла событий (Event Loop).\n3. Обширная экосистема <strong>NPM (Node Package Manager)</strong>.\n4. Идеально подходит для создания <strong>высоконагруженных, I/O-интенсивных</strong> приложений (чаты, API-серверы, стриминг данных).",
        difficulty: "easy",
      },
      {
        id: "node-2",
        question:
          "Как Node.js достигает высокой производительности с использованием одного потока?",
        answer:
          "Node.js использует <strong>однопоточную модель</strong> для основного кода, но полагается на <strong>неблокирующий I/O</strong> и <strong>Цикл Событий (Event Loop)</strong>. \n\nКогда Node.js сталкивается с I/O-операцией (например, чтение файла, запрос к базе данных), он <strong>не блокирует основной поток</strong>, а передает задачу системе и продолжает обрабатывать новые запросы. По завершении I/O-операции, результат возвращается в Event Loop через <strong>очередь колбэков</strong>.\n\nДля <strong>CPU-интенсивных задач</strong> Node.js использует <strong>пул потоков libuv</strong> (или <strong>Worker Threads</strong>), чтобы не блокировать Event Loop.",
        difficulty: "medium",
      },
      {
        id: "node-3",
        question: "Объясните концепцию Event Loop в Node.js.",
        answer:
          "<strong>Event Loop</strong> — это основной механизм, который позволяет Node.js выполнять <strong>неблокирующие I/O-операции</strong>, несмотря на то, что JavaScript является однопоточным. \n\nОн постоянно проверяет <strong>Call Stack</strong> и <strong>Очередь колбэков (Callback Queue)</strong>. Если Call Stack пуст, Event Loop переносит задачи из очереди колбэков в Call Stack для выполнения. Он имеет несколько фаз (timers, pending callbacks, poll, check, close), которые определяют порядок выполнения асинхронных задач.",
        difficulty: "medium",
      },
      {
        id: "node-4",
        question: "В чем разница между блокирующим и неблокирующим I/O?",
        answer:
          "<strong>Блокирующий I/O (Синхронный):</strong> Процесс <strong>останавливается</strong> и ждет завершения I/O-операции (например, завершения чтения файла) перед тем, как перейти к следующей задаче. Это снижает производительность сервера.\n\n<strong>Неблокирующий I/O (Асинхронный):</strong> Процесс <strong>не ждет</strong> завершения I/O-операции. Он отправляет запрос, продолжает выполнять другие задачи и использует <strong>колбэк (callback)</strong> для обработки результата, когда операция завершится. Node.js использует неблокирующий I/O по умолчанию (например, `fs.readFile` вместо `fs.readFileSync`).",
        difficulty: "easy",
      },
      {
        id: "node-5",
        question: "Что такое `process.nextTick()` и как он взаимодействует с Event Loop?",
        answer:
          "`process.nextTick()` помещает колбэк в <strong>Microtask Queue</strong> (или `nextTick` Queue) — <strong>наиболее приоритетную</strong> очередь в Node.js.\n\nКолбэки из `process.nextTick()` выполняются <strong>сразу после завершения текущей фазы</strong> Event Loop (или рекурсивно до ее опустошения), но <strong>до</strong> начала следующей фазы (и до <strong>Macrotask Queue</strong>, куда попадают `setTimeout` и `setImmediate`). Он используется для асинхронного, но максимально быстрого выполнения кода.",
        difficulty: "hard",
      },
      {
        id: "node-6",
        question: "Объясните, что такое NPM (Node Package Manager) и его основные функции.",
        answer:
          "<strong>NPM</strong> — это <strong>стандартный менеджер пакетов</strong> для Node.js и самая большая в мире библиотека программного обеспечения. \n\n<strong>Основные функции:</strong>\n1. <strong>Установка пакетов:</strong> Устанавливает зависимости для проекта (`npm install [package]`).\n2. <strong>Управление зависимостями:</strong> Управляет версиями и зависимостями, указанными в <strong>`package.json`</strong>.\n3. <strong>Реестр (Registry):</strong> Центральное хранилище для публикации и поиска модулей.\n4. <strong>Скрипты:</strong> Позволяет определять пользовательские команды (например, `npm run start`) в файле `package.json`.",
        difficulty: "easy",
      },
      {
        id: "node-7",
        question: "Какова роль файла `package.json`?",
        answer:
          "`package.json` — это <strong>манифест</strong> проекта Node.js. Он содержит <strong>метаданные</strong> о проекте и является основным файлом для управления зависимостями и скриптами.\n\n<strong>Ключевые элементы:</strong>\n* <strong>`name`</strong> и <strong>`version`</strong>.\n* <strong>`main`</strong>: Точка входа в приложение.\n* <strong>`scripts`</strong>: Пользовательские команды (например, для запуска, тестирования, сборки).\n* <strong>`dependencies`</strong>: Пакеты, необходимые для <strong>продакшна</strong>.\n* <strong>`devDependencies`</strong>: Пакеты, необходимые только для <strong>разработки</strong> (тестирование, линтинг и т.д.).",
        difficulty: "easy",
      },
      {
        id: "node-8",
        question: "Что такое `package-lock.json` и зачем он нужен?",
        answer:
          "<strong>`package-lock.json`</strong> (или `yarn.lock` для Yarn) — это файл, который автоматически генерируется менеджером пакетов и <strong>фиксирует точные версии</strong> всех установленных зависимостей (включая подзависимости).\n\n<strong>Назначение:</strong> Обеспечить <strong>детерминированность</strong> и <strong>воспроизводимость</strong> сборок. Гарантирует, что при установке пакетов на другом компьютере или в другой среде (CI/CD) будут установлены <strong>абсолютно те же самые</strong> версии, предотвращая конфликты, вызванные незначительными обновлениями пакетов.",
        difficulty: "medium",
      },
      {
        id: "node-9",
        question: "Назовите 5 основных встроенных (Core) модулей Node.js.",
        answer:
          "Встроенные модули не требуют установки через NPM и доступны по умолчанию через функцию `require()`.\n\n1. <strong>`http/https`</strong>: Для создания веб-серверов и клиентов, работы с HTTP/HTTPS-протоколами.\n2. <strong>`fs` (File System)</strong>: Для работы с файловой системой (чтение, запись, удаление файлов).\n3. <strong>`path`</strong>: Для работы с путями к файлам и каталогам.\n4. <strong>`os`</strong>: Предоставляет информацию об операционной системе (память, CPU, сетевые интерфейсы).\n5. <strong>`events`</strong>: Реализует паттерн 'EventEmitter' (для работы с событиями).",
        difficulty: "easy",
      },
      {
        id: "node-10",
        question: "Как создать простой HTTP-сервер в Node.js?",
        answer:
          "Для создания HTTP-сервера используется встроенный модуль <strong>`http`</strong>.\n\n<strong>Шаги:</strong>\n1. Импортировать модуль `http`.\n2. Вызвать `http.createServer()` с колбэком, который принимает объекты <strong>`req`</strong> (запрос) и <strong>`res`</strong> (ответ).\n3. Использовать `res.writeHead()` для установки заголовков и `res.end()` для отправки ответа.\n4. Вызвать `.listen()` для указания порта, который будет прослушивать сервер.\n\n```javascript\nconst http = require('http');\nhttp.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello Node.js!');\n}).listen(3000);\n```",
        difficulty: "easy",
      },
      {
        id: "node-11",
        question: "Как модуль `fs` работает с файлами (синхронно vs. асинхронно)?",
        answer:
          "Модуль <strong>`fs`</strong> предоставляет как <strong>синхронные</strong>, так и <strong>асинхронные</strong> методы для операций с файловой системой.\n\n* <strong>Асинхронные методы (рекомендуемые):</strong> Используют колбэк (или Promises) и <strong>не блокируют Event Loop</strong> (например, `fs.readFile()`). Это необходимо для масштабируемых серверных приложений.\n* <strong>Синхронные методы:</strong> Блокируют выполнение всего основного потока до завершения операции (например, `fs.readFileSync()`). Их следует использовать только в простых скриптах или во время инициализации, где блокировка допустима.",
        difficulty: "medium",
      },
      {
        id: "node-12",
        question: "Что такое EventEmitter в Node.js?",
        answer:
          "<strong>`EventEmitter`</strong> — это класс, реализующий <strong>паттерн Наблюдатель (Observer pattern)</strong>. Он позволяет объектам испускать (emit) именованные события, а другим объектам — подписываться на эти события и реагировать на них (слушать, on).\n\n<strong>Применение:</strong> Является основой для многих встроенных модулей (например, Streams, HTTP) и необходим для создания <strong>событийно-ориентированного</strong> кода.\n\n```javascript\nconst EventEmitter = require('events');\nconst emitter = new EventEmitter();\nemitter.on('data', (data) => console.log(data));\nemitter.emit('data', 'Received!');\n```",
        difficulty: "easy",
      },
      {
        id: "node-13",
        question: "Что такое Streams (Потоки) в Node.js и их типы?",
        answer:
          "<strong>Streams</strong> — это абстрактный интерфейс, предназначенный для <strong>эффективной обработки I/O-данных</strong> (например, чтение/запись больших файлов, обработка HTTP-запросов). Они передают данные <strong>порциями (chunks)</strong>, что уменьшает потребление памяти и позволяет начать обработку до того, как все данные будут доступны.\n\n<strong>Типы Streams:</strong>\n1. <strong>Readable (Читаемый):</strong> Источник данных (например, `fs.createReadStream`).\n2. <strong>Writable (Записываемый):</strong> Приемник данных (например, `fs.createWriteStream`).\n3. <strong>Duplex (Дуплексный):</strong> Читаемый и записываемый (например, сетевой сокет `net.Socket`).\n4. <strong>Transform (Преобразующий):</strong> Дуплексный, который может изменять данные по мере их прохождения (например, `zlib.createGzip`).",
        difficulty: "medium",
      },
      {
        id: "node-14",
        question: "Для чего используется класс `Buffer` в Node.js?",
        answer:
          "<strong>`Buffer`</strong> — это встроенный класс, предназначенный для работы с <strong>сырыми двоичными данными (raw binary data)</strong>, которые хранятся как последовательность октетов (байтов).\n\n<strong>Назначение:</strong>\n* Является основным объектом для взаимодействия с <strong>I/O-операциями</strong> (файлы, сеть, Streams).\n* Используется для работы с двоичными протоколами, криптографией или кодировками (UTF-8, Base64).\n* <strong>Буферы имеют фиксированный размер</strong> после создания и не могут быть изменены.",
        difficulty: "medium",
      },
      {
        id: "node-15",
        question:
          "Как работают `setTimeout`, `setImmediate` и `process.nextTick` относительно Event Loop?",
        answer:
          "Все три функции асинхронны, но имеют разный приоритет:\n\n1. <strong>`process.nextTick()`:</strong> Выполняется в <strong>Microtask Queue</strong>, имеет <strong>наивысший приоритет</strong>. Выполняется <strong>до</strong> начала следующей фазы Event Loop.\n2. <strong>Promises (resolve/then):</strong> Выполняются в <strong>Microtask Queue</strong>, имеют высокий приоритет, но после `nextTick()`.\n3. <strong>`setImmediate()`:</strong> Выполняется в фазе <strong>Check</strong> (сразу после фазы Poll), обычно выполняется <strong>перед</strong> `setTimeout(() => {}, 0)`.\n4. <strong>`setTimeout(..., 0)`:</strong> Выполняется в фазе <strong>Timers</strong>. Выполняется после `nextTick()` и `Promise`, и, в зависимости от загрузки системы, может выполниться позже или раньше `setImmediate()` (но `setImmediate` гарантированно выполнится в следующей итерации).",
        difficulty: "hard",
      },
    ],
  },
  // SQL
  {
    id: "sql",
    name: "SQL",
    questions: [
      {
        id: "sql-1",
        question: "Что такое SQL и для чего он используется?",
        answer: `<strong>SQL (Structured Query Language)</strong> — это стандартный язык для взаимодействия с реляционными базами данных. Он используется для определения, управления и извлечения данных из баз данных.<br><br>

<strong>С помощью SQL можно выполнять следующие операции:</strong><br>
• Создание новых баз данных и таблиц<br>
• Вставка новых данных в таблицы<br>
• Чтение данных с использованием запросов<br>
• Обновление существующих данных<br>
• Удаление данных<br>
• Управление доступом и разрешениями
`,
        difficulty: "easy",
      },

      {
        id: "sql-2",
        question: "Что подразумевается под СУБД? Какие существуют типы СУБД?",
        answer: `<strong>СУБД (Система управления базами данных):</strong><br>
        Программное обеспечение, которое обеспечивает создание, хранение, модификацию и управление данными в базе. СУБД взаимодействует с пользователями и приложениями, позволяя выполнять операции чтения, изменения и удаления данных.<br><br>
        <strong>Основные типы СУБД:</strong><br>
        • <strong>Реляционные (RDBMS):</strong> данные хранятся в виде таблиц, связанных между собой отношениями. Примеры: MySQL, PostgreSQL, Oracle.<br>
        • <strong>Нереляционные (NoSQL):</strong> данные хранятся в виде документов, ключ-значение, графов или колонок. Примеры: MongoDB, Redis, Cassandra.<br><br>
        <strong>Итог:</strong><br>
        Реляционные СУБД — структурированные и используют SQL, а нереляционные — гибкие и подходят для неструктурированных данных.`,
        difficulty: "easy",
      },
      {
        id: "sql-3",
        question: "Объясните различия между DDL, DML и DCL в SQL?",
        answer: `<strong>DDL (Data Definition Language) - Определение данных:</strong><br>
• CREATE - создание объектов (баз, таблиц, индексов)<br>
• ALTER - изменение структуры объектов<br>
• DROP - удаление объектов<br>
• TRUNCATE - очистка таблиц<br><br>

<strong>DML (Data Manipulation Language) - Манипуляция данными:</strong><br>
• SELECT - выборка данных<br>
• INSERT - вставка новых записей<br>
• UPDATE - обновление существующих записей<br>
• DELETE - удаление записей<br><br>

<strong>DCL (Data Control Language) - Управление доступом:</strong><br>
• GRANT - предоставление прав<br>
• REVOKE - отзыв прав<br><br>

<strong>TCL (Transaction Control Language) - Управление транзакциями:</strong><br>
• COMMIT - подтверждение транзакции<br>
• ROLLBACK - откат транзакции`,
        difficulty: "easy",
      },
      {
        id: "sql-4",
        question: "Как добавить новый столбец в существующую таблицу?",
        answer: `<strong>Добавление столбца в таблицу:</strong><br>
        Используется команда <strong>ALTER TABLE</strong> с оператором <strong>ADD</strong> для добавления нового столбца.<br><br>
        <strong>Синтаксис:</strong><br>
        ALTER TABLE table_name<br>
        ADD column_name data_type [constraints];<br><br>
        <strong>Пример:</strong><br>
        ALTER TABLE employees<br>
        ADD birth_date DATE;`,
        difficulty: "easy",
      },
      {
        id: "sql-5",
        question: "Что такое ограничения (Constraints)?",
        answer: `<strong>Ограничения (Constraints) в SQL:</strong><br>
        Используются для задания правил целостности и корректности данных в таблице. Позволяют контролировать значения, которые могут храниться в столбцах, и обеспечивают согласованность данных.<br><br>
        <strong>Основные типы ограничений:</strong><br>
        • <strong>NOT NULL:</strong> запрещает хранить пустые значения в столбце.<br>
        • <strong>CHECK:</strong> задаёт условие, которому должны соответствовать значения столбца.<br>
        • <strong>DEFAULT:</strong> устанавливает значение по умолчанию, если пользователь не указал его явно.<br>
        • <strong>UNIQUE:</strong> гарантирует, что все значения в столбце будут уникальны.<br>
        • <strong>PRIMARY KEY:</strong> уникально идентифицирует каждую строку таблицы.<br>
        • <strong>FOREIGN KEY:</strong> обеспечивает ссылочную целостность между таблицами.`,
        difficulty: "easy",
      },
      {
        id: "sql-6",
        question: "Что такое уникальный ключ (Unique key)?",
        answer: `<strong>Уникальный ключ (Unique Key) в SQL:</strong><br>
          Однозначно идентифицирует каждую строку в таблице, гарантируя уникальность значений в заданном столбце или комбинации столбцов.<br><br>
          <strong>Особенности Unique Key:</strong><br>
          • В одной таблице может быть несколько уникальных ключей.<br>
          • Допускаются NULL-значения (в зависимости от СУБД; например, в SQL Server одно NULL-значение допустимо в поле с UNIQUE KEY).`,
        difficulty: "easy",
      },

      {
        id: "sql-7",
        question: "Что такое первичный ключ (Primary key)?",
        answer: `<strong>Первичный ключ (Primary Key) в SQL:</strong><br>
        Столбец или набор столбцов, которые однозначно идентифицируют каждую запись в таблице.<br><br>
        <strong>Особенности первичного ключа:</strong><br>
        • Значения первичного ключа уникальны для каждой строки.<br>
        • Не допускаются NULL-значения.<br>
        • В таблице может быть только один первичный ключ.<br>
        • Часто используется для создания связей с внешними ключами в других таблицах.`,
        difficulty: "easy",
      },

      {
        id: "sql-8",
        question: "Что такое внешний ключ (Foreign key)?",
        answer: `<strong>Внешний ключ (Foreign Key) в SQL:</strong><br>
        Используется для поддержания ссылочной целостности между таблицами, обеспечивая связь между данными.<br><br>
        <strong>Особенности внешнего ключа:</strong><br>
        • В дочерней таблице ссылается на первичный ключ родительской таблицы.<br>
        • Ограничение внешнего ключа предотвращает действия, которые нарушают связь между родительской и дочерней таблицами.`,
        difficulty: "easy",
      },
      {
        id: "sql-9",
        question: "Что такое индекс?",
        answer: `<strong>Индекс в SQL:</strong><br>
          Структура данных, создаваемая для одного или нескольких столбцов таблицы, чтобы ускорить поиск и извлечение записей.<br><br>
          <strong>Особенности индексов:</strong><br>
          • Создаёт отдельную структуру для быстрого доступа к данным.<br>
          • Улучшает производительность SELECT-запросов.<br>
          • Может замедлять операции INSERT, UPDATE и DELETE из-за необходимости обновления индекса.`,
        difficulty: "easy",
      },
      {
        id: "sql-10",
        question: "В чем разница между кластеризованным и некластеризованным индексами в SQL?",
        answer: `<strong>Кластеризованный индекс (Clustered Index):</strong><br>
          • Изменяет физический порядок хранения строк в таблице согласно индексируемому столбцу.<br>
          • Обеспечивает быстрый доступ к данным за счет упорядоченной структуры.<br>
          • На одну таблицу может быть только один кластеризованный индекс.<br><br>
          <strong>Некластеризованный индекс (Non-Clustered Index):</strong><br>
          • Не меняет способ хранения строк в таблице, создаёт отдельный объект с указателями на данные.<br>
          • Доступ к данным через указатели происходит немного медленнее, чем у кластеризованного индекса.<br>
          • В одной таблице может быть несколько некластеризованных индексов.`,
        difficulty: "easy",
      },

      {
        id: "sql-11",
        question: "Как выглядит базовая структура SQL запроса SELECT?",
        answer: `<strong>Базовая структура SELECT в SQL:</strong><br>
            SELECT столбцы<br>
            FROM таблица<br>
            WHERE условие<br>
            GROUP BY столбцы<br>
            HAVING условие_для_групп<br>
            ORDER BY столбцы ASC|DESC;<br><br>
            <strong>Пояснение:</strong><br>
            • <strong>SELECT:</strong> указывает, какие столбцы извлечь.<br>
            • <strong>FROM:</strong> таблица, из которой берутся данные.<br>
            • <strong>WHERE:</strong> фильтрует строки по условию.<br>
            • <strong>GROUP BY:</strong> группирует строки для агрегатных функций.<br>
            • <strong>HAVING:</strong> фильтрует группы после агрегирования.<br>
            • <strong>ORDER BY:</strong> сортирует результат по указанным столбцам.`,
        difficulty: "easy",
      },
      {
        id: "sql-12",
        question: "Что такое Alias в SQL?",
        answer: `<strong>Alias (Псевдоним) в SQL:</strong><br>
        Имя, назначенное таблице или столбцу в запросе для упрощения чтения или сокращения ввода.<br><br>
        <strong>Особенности использования:</strong><br>
        • Позволяет временно переименовать таблицы или столбцы в рамках запроса.<br>
        • Полезно, если имена длинные или сложные для ввода.<br>
        • Пример для столбца: SELECT first_name AS Name FROM employees;<br>
        • Пример для таблицы: SELECT e.first_name FROM employees AS e;`,
        difficulty: "easy",
      },
      {
        id: "sql-13",
        question: "Что такое агрегатные функции? Приведите примеры",
        answer: `<strong>Агрегатные функции в SQL:</strong><br>
        Выполняют вычисления над набором значений и возвращают одно значение. Часто используются с GROUP BY для анализа данных.<br><br>
        <strong>Основные агрегатные функции:</strong><br>
        • <strong>COUNT()</strong> — подсчитывает количество строк.<br>
        • <strong>SUM()</strong> — вычисляет сумму значений.<br>
        • <strong>AVG()</strong> — вычисляет среднее значение.<br>
        • <strong>MAX()</strong> — находит максимальное значение.<br>
        • <strong>MIN()</strong> — находит минимальное значение.<br><br>
        <strong>Примеры использования:</strong><br>
        • Подсчет количества сотрудников:<br>
        SELECT COUNT(*) FROM employees;<br>
        • Средняя зарплата по отделам:<br>
        SELECT department_id, AVG(salary) AS average_salary FROM employees GROUP BY department_id;<br>
        • Максимальная зарплата в компании:<br>
        SELECT MAX(salary) FROM employees;<br>
        • Суммарные продажи за месяц:<br>
        SELECT SUM(amount) FROM sales WHERE sale_date BETWEEN '2023-01-01' AND '2023-01-31';`,
        difficulty: "easy",
      },

      {
        id: "sql-14",
        question: "В чем разница между предложениями HAVING и WHERE?",
        answer: `<strong>WHERE в SQL:</strong><br>
        Фильтрует строки до группировки; используется для условий на отдельные записи.<br><br>
        <strong>HAVING в SQL:</strong><br>
        Фильтрует группы после применения GROUP BY; используется для условий на агрегатные функции (SUM, COUNT, AVG и т.д.).<br><br>
        <strong>Ключевое отличие:</strong><br>
        • WHERE работает с отдельными строками, HAVING — с группами строк после агрегирования.`,
        difficulty: "easy",
      },
      {
        id: "sql-15",
        question: "Как использовать оператор LIKE и для чего он применяется?",
        answer: `<strong>Оператор LIKE в SQL:</strong><br>
        Используется в WHERE для поиска строк, соответствующих заданному шаблону.<br><br>
        <strong>Подстановочные символы:</strong><br>
        • % — соответствует любой последовательности символов (включая нулевую длину).<br>
        • _ — соответствует ровно одному любому символу.<br><br>
        <strong>Примеры использования:</strong><br>
        • Строки, начинающиеся с "А":<br>
        SELECT * FROM employees WHERE name LIKE 'А%';<br>
        • Строки, оканчивающиеся на "e":<br>
        SELECT * FROM employees WHERE name LIKE '%e';<br>
        • Строки, где второй символ — "a":<br>
        SELECT * FROM employees WHERE name LIKE '_a%';`,
        difficulty: "easy",
      },
      {
        id: "sql-16",
        question: "В чем разница между операторами DELETE и TRUNCATE?",
        answer: `<strong>DELETE в SQL:</strong><br>
              • Удаляет выбранные строки из таблицы по условию WHERE.<br>
              • Каждое удаление фиксируется как отдельная транзакция (можно откатить с помощью ROLLBACK).<br>
              • Медленнее при удалении большого объема данных.<br><br>
              <strong>TRUNCATE в SQL:</strong><br>
              • Удаляет все строки из таблицы без условия WHERE.<br>
              • Операция фиксируется как одна транзакция и обычно не может быть откатана.<br>
              • Быстрее, так как не сканирует отдельные строки и не логирует каждую запись отдельно.`,
        difficulty: "easy",
      },
      {
        id: "sql-17",
        question: "Что такое выражение GROUP BY и как оно используется?",
        answer: `<strong>GROUP BY в SQL:</strong><br>
        Выражение, которое группирует строки таблицы на основе значений одного или нескольких столбцов, позволяя выполнять агрегатные функции над каждой группой.<br><br>
        <strong>Особенности использования:</strong><br>
        • Используется вместе с агрегатными функциями, такими как COUNT, SUM, AVG, MIN, MAX.<br>
        • Позволяет объединять данные для анализа, например, подсчет количества заказов по каждому клиенту.<br>
        • Все столбцы в SELECT, не участвующие в агрегатных функциях, должны быть указаны в GROUP BY.`,
        difficulty: "easy",
      },
      {
        id: "sql-18",
        question: "Перечислите различные типы связей в SQL.",
        answer: `<strong>Типы связей в SQL:</strong><br> • <strong>One-to-One (Один к одному):</strong> каждая запись в одной таблице связана максимум с одной записью в другой таблице.<br> • <strong>One-to-Many / Many-to-One (Один ко многим / Многие к одному):</strong> одна запись в таблице связана с несколькими записями в другой таблице; наиболее распространённый тип.<br> • <strong>Many-to-Many (Многие ко многим):</strong> несколько записей в одной таблице могут быть связаны с несколькими записями в другой таблице; реализуется через промежуточную таблицу.<br> • <strong>Self-Referencing Relationships (Самоссылочные связи):</strong> таблица имеет связь с самой собой, например, для представления иерархий или родственных связей.`,
        difficulty: "easy",
      },
      {
        id: "sql-19",
        question: "Как реализовать отношения многие-ко-многим в SQL?",
        answer: `<strong>Отношения многие-ко-многим в SQL:</strong><br>
          Возникают, когда одна запись в первой таблице может соответствовать нескольким записям во второй таблице и наоборот.<br>
          Реализуются с помощью промежуточной таблицы, содержащей внешние ключи на обе основные таблицы.<br><br>
          <strong>Шаги реализации:</strong><br>
          Создайте две основные таблицы (например, Student и Course).<br>
          Создайте промежуточную таблицу (например, StudentCourse) с внешними ключами на первичные ключи обеих таблиц.<br>
          Определите составной первичный ключ для уникальности пар и внешние ключи для ссылочной целостности.<br><br>
          <strong>Пример:</strong><br>
          CREATE TABLE Student (<br>
            StudentID INT PRIMARY KEY,<br>
            Name VARCHAR(100)<br>
          );<br><br>
          CREATE TABLE Course (<br>
            CourseID INT PRIMARY KEY,<br>
            Title VARCHAR(100)<br>
          );<br><br>
          CREATE TABLE StudentCourse (<br>
            StudentID INT,<br>
            CourseID INT,<br>
            PRIMARY KEY (StudentID, CourseID),<br>
            FOREIGN KEY (StudentID) REFERENCES Student(StudentID),<br>
            FOREIGN KEY (CourseID) REFERENCES Course(CourseID)<br>
          );<br><br>
          Промежуточная таблица хранит пары StudentID и CourseID, обеспечивая уникальность связей и целостность данных.`,
        difficulty: "easy",
      },
      {
        id: "sql-20",
        question: "Что такое Join в SQL и каких основных видов он бывает?",
        answer: `<strong>JOIN в SQL:</strong><br>
          Используется для объединения строк из двух или более таблиц по связанным столбцам (обычно по внешнему ключу). Позволяет получать данные из нескольких таблиц в одном запросе.<br><br>
          <strong>Основные виды JOIN:</strong><br>
          • <strong>INNER JOIN:</strong> возвращает только строки, у которых есть совпадения в обеих таблицах.<br>
          • <strong>LEFT JOIN:</strong> возвращает все строки из левой таблицы и совпадающие из правой, при отсутствии совпадений — заполняет NULL.<br>
          • <strong>RIGHT JOIN:</strong> возвращает все строки из правой таблицы и совпадающие из левой.<br>
          • <strong>FULL JOIN:</strong> возвращает все строки из обеих таблиц, заполняя NULL там, где нет совпадений.`,
        difficulty: "easy",
      },
      {
        id: "sql-21",
        question: "Что такое Self-Join?",
        answer: `<strong>Self-Join в SQL:</strong><br>
        Соединение таблицы самой с собой для сопоставления строк внутри одной таблицы.<br><br>
        <strong>Особенности Self-Join:</strong><br>
        • Используется, когда записи в таблице должны быть связаны с другими записями той же таблицы.<br>
        • Часто применяется для поиска иерархических связей или сравнения данных внутри таблицы.<br>
        • Для различения двух экземпляров таблицы используют псевдонимы (Alias).<br>
        • Пример: SELECT e1.name, e2.name FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.employee_id;`,
        difficulty: "easy",
      },

      {
        id: "sql-22",
        question: "Объясните разницу между UNION и UNION ALL",
        answer: `<strong>UNION в SQL:</strong><br>
• Объединяет результаты двух или более SELECT-запросов.<br>
• Удаляет дубликаты из объединенного результата.<br>
• Пример:<br>
SELECT column_list FROM table1<br>
UNION<br>
SELECT column_list FROM table2;<br><br>
<strong>UNION ALL в SQL:</strong><br>
• Объединяет результаты двух или более SELECT-запросов.<br>
• Сохраняет все дубликаты.<br>
• Выполняется быстрее, так как не удаляет дубликаты.<br>
• Пример:<br>
SELECT column_list FROM table1<br>
UNION ALL<br>
SELECT column_list FROM table2;`,
        difficulty: "easy",
      },

      {
        id: "sql-23",
        question: "Что такое нормализация?",
        answer: `Нормализация — это процесс организации данных в базе данных, включающий создание таблиц и установление отношений между ними в соответствии с правилами, которые обеспечивают защиту данных и делают базу данных более гибкой, устраняя избыточность и несогласованные зависимости.`,
        difficulty: "easy",
      },
      {
        id: "sql-24",
        question: "Что такое денормализация?",
        answer: `Денормализация - это обратный процесс нормализации, при котором нормализованная схема преобразуется в схему, содержащую избыточную информацию. Производительность повышается за счет использования избыточности и обеспечения согласованности избыточных данных. Причиной выполнения денормализации являются накладные расходы, возникающие в процессоре запросов из-за чрезмерно нормализованной структуры.`,
        difficulty: "easy",
      },

      {
        id: "sql-25",
        question: "Объясните различные типы нормализации",
        answer: `<strong>Типы нормализации (Normal Forms) в SQL:</strong><br> • <strong>1NF (Первая нормальная форма):</strong> исключает повторяющиеся группы и гарантирует, что все столбцы содержат атомарные значения.<br> • <strong>2NF (Вторая нормальная форма):</strong> данные находятся в 1NF, и все неключевые атрибуты полностью зависят от всего первичного ключа.<br> • <strong>3NF (Третья нормальная форма):</strong> данные находятся во 2NF, и каждое неключевое значение зависит только от первичного ключа, без зависимостей между неключевыми столбцами.`,
        difficulty: "easy",
      },

      {
        id: "sql-26",
        question: "Как оптимизировать производительность SQL-запросов?",
        answer: `<strong>Оптимизация производительности SQL-запросов:</strong><br> • <strong>Использовать индексы:</strong> создавайте на столбцах, часто используемых в WHERE, JOIN и ORDER BY; избегайте избыточных индексов.<br> • <strong>Избегать SELECT *:</strong> выбирайте только необходимые столбцы, чтобы уменьшить объем передаваемых данных.<br> • <strong>Оптимизировать условия JOIN и WHERE:</strong> используйте равенство (=) вместо неравенства, избегайте функций на индексируемых столбцах.<br> • <strong>Ограничивать результаты (LIMIT):</strong> возвращайте только нужное количество строк.<br> • <strong>Заменять подзапросы на JOIN или EXISTS:</strong> особенно коррелированные подзапросы.<br> • <strong>Кеширование часто используемых данных:</strong> применять материализованные представления или кеширование на уровне приложения.<br> • <strong>Профилирование и анализ:</strong> использовать EXPLAIN или EXPLAIN PLAN для изучения плана выполнения запросов.`,
        difficulty: "easy",
      },

      {
        id: "sql-27",
        question: "Объясните транзакционные команды COMMIT и ROLLBACK.",
        answer: `<strong>COMMIT в SQL:</strong><br>
          Фиксирует текущую транзакцию, делая все изменения постоянными и видимыми для других пользователей.<br>
          После COMMIT отменить изменения нельзя.<br><br>
          <strong>Пример:</strong><br>
          BEGIN TRANSACTION;<br>
          UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;<br>
          UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;<br>
          COMMIT;<br><br>
          <strong>ROLLBACK в SQL:</strong><br>
          Отменяет текущую транзакцию, откатывая все изменения к состоянию до её начала.<br><br>
          <strong>Пример:</strong><br>
          BEGIN TRANSACTION;<br>
          DELETE FROM orders WHERE order_date < '2022-01-01';<br>
          -- Если передумали<br>
          ROLLBACK;`,
        difficulty: "easy",
      },

      {
        id: "sql-28",
        question: "Что такое свойство ACID в базе данных?",
        answer: `<strong>Свойство ACID в базах данных:</strong><br>
        ACID — набор принципов, обеспечивающих надежную обработку транзакций.<br><br>
        <strong>Компоненты ACID:</strong><br>
        • <strong>Atomicity (Атомарность):</strong> транзакция выполняется полностью или не выполняется вовсе; при сбое состояние базы данных не меняется.<br>
        • <strong>Consistency (Согласованность):</strong> данные после транзакции остаются корректными и соответствуют всем правилам валидации.<br>
        • <strong>Isolation (Изолированность):</strong> параллельные транзакции не мешают друг другу, обеспечивая корректность изменений.<br>
        • <strong>Durability (Долговечность):</strong> после подтверждения транзакции (COMMIT) все изменения сохраняются, даже при сбое системы или потере питания.`,
        difficulty: "easy",
      },

      {
        id: "sql-29",
        question: "Что вы подразумеваете под «триггером» в SQL?",
        answer: `<strong>Триггер в SQL:</strong><br>
          Специальный тип хранимой процедуры, который автоматически выполняется при определённых событиях изменения данных в таблице.<br><br>
          <strong>Особенности триггеров:</strong><br>
          • Срабатывает на операции INSERT, UPDATE или DELETE.<br>
          • Позволяет автоматически выполнять набор инструкций при изменении данных.<br>
          • Используется для поддержания целостности данных, аудита и автоматизации процессов.`,
        difficulty: "easy",
      },
      {
        id: "sql-30",
        question: "Что такое подзапрос в SQL?",
        answer: `<strong>Подзапрос в SQL:</strong><br>
            Это запрос, вложенный внутрь другого запроса (основного), для получения данных, которые затем используются внешним запросом.<br><br>
            <strong>Особенности подзапросов:</strong><br>
            • Выполняется перед основным запросом, и его результат передаётся внешнему запросу.<br>
            • Может использоваться в SELECT, UPDATE, DELETE или INSERT.<br>
            • Поддерживает операторы сравнения (> , < , = и др.) для фильтрации данных.`,
        difficulty: "easy",
      },
      {
        id: "sql-31",
        question: "Как удалить дубликаты в результате SQL-запроса?",
        answer: `<strong>Удаление дубликатов в SQL:</strong><br>
        Используется ключевое слово <strong>DISTINCT</strong> в SELECT, чтобы вернуть только уникальные строки.<br><br>
        <strong>Пример:</strong><br>
        SELECT DISTINCT position<br>
        FROM employees;`,
        difficulty: "easy",
      },
    ],
  },
  // MongoDB
  {
    id: "mongodb",
    name: "MongoDB",
    questions: [
      {
        id: "mdb-1",
        question: "Что такое MongoDB и какой тип базы данных она представляет?",
        answer:
          "<strong>MongoDB</strong> — это кроссплатформенная, документоориентированная база данных <strong>NoSQL</strong>. Она использует гибкую схему и хранит данные в формате <strong>BSON (Binary JSON)</strong>. MongoDB разработана для высокой производительности, доступности и горизонтальной масштабируемости.\n\n<strong>Ключевые особенности:</strong> Схема без жесткой структуры, масштабирование через <strong>шардинг</strong> (Sharding), высокая доступность через <strong>реплика-сеты</strong> (Replica Sets).",
        difficulty: "easy",
      },
      {
        id: "mdb-2",
        question: "Объясните иерархию хранения данных в MongoDB, сравнив ее с SQL.",
        answer:
          "В MongoDB данные организованы следующим образом:\n\n* <strong>Database (База данных):</strong> Эквивалентно базе данных в SQL.\n* <strong>Collection (Коллекция):</strong> Эквивалентно <strong>Таблице</strong> в SQL. Коллекция — это группа документов.\n* <strong>Document (Документ):</strong> Эквивалентно <strong>Строке</strong> (Row) в SQL. Документ — это основная единица хранения данных, состоящая из пар ключ-значение (подобно JSON-объекту).\n* <strong>Field (Поле):</strong> Эквивалентно <strong>Столбцу</strong> (Column) в SQL. Поле представляет собой отдельный атрибут данных внутри документа.",
        difficulty: "easy",
      },
      {
        id: "mdb-3",
        question: "Что такое <strong>_id</strong> в MongoDB и каковы его свойства?",
        answer:
          "<strong>_id</strong> — это <strong>первичный ключ</strong> каждого документа в коллекции. Он должен быть <strong>уникальным</strong> в пределах коллекции и является <strong>обязательным</strong>.\n\nПо умолчанию MongoDB генерирует <strong>ObjectId</strong>, который представляет собой 12-байтовое BSON-значение, состоящее из:\n1. <strong>Timestamp</strong> (отметка времени).\n2. <strong>ID машины</strong> (Machine ID).\n3. <strong>ID процесса</strong> (Process ID).\n4. <strong>Счетчик</strong> (Incrementing counter).\n\n<strong>Свойство:</strong> Благодаря включенному Timestamp, ObjectId'ы обеспечивают <strong>естественный порядок сортировки по времени</strong> создания документа.",
        difficulty: "medium",
      },
      {
        id: "mdb-4",
        question:
          "Как MongoDB реализует отношения между данными (Relations)? Назовите два подхода.",
        answer:
          'В отличие от SQL с явными JOIN\'ами, MongoDB использует подходы, основанные на гибкости документов:\n\n1. <strong>Встраивание (Embedding):</strong> Связанные данные хранятся <strong>внутри</strong> одного родительского документа (например, список комментариев внутри документа поста). <strong>Плюсы:</strong> Быстрое чтение (не требуется JOIN), атомарность на уровне документа. <strong>Минусы:</strong> Рост размера документа (ограничение 16 МБ).\n2. <strong>Ссылки (Referencing):</strong> В одном документе хранится <strong>_id</strong> другого документа (подобно Foreign Key в SQL). <strong>Плюсы:</strong> Уменьшение размера документов, лучшая нормализация. <strong>Минусы:</strong> Требуются дополнительные запросы для "разрешения" ссылок (эмулирование JOIN).',
        difficulty: "medium",
      },
      {
        id: "mdb-5",
        question: "Что такое Replica Set (Реплика-сет) и для чего он нужен?",
        answer:
          "<strong>Replica Set</strong> — это группа процессов MongoDB (серверов), обеспечивающих <strong>высокую доступность (High Availability)</strong> и <strong>избыточность данных (Redundancy)</strong>.\n\n<strong>Состав:</strong>\n* <strong>Primary (Первичный):</strong> Сервер, который принимает все операции записи. Чтение может идти как с Primary, так и с Secondary.\n* <strong>Secondary (Вторичный):</strong> Серверы, которые реплицируют данные с Primary. Используются для чтения, а также для автоматического <strong>Failover</strong> (переключения) в случае сбоя Primary.\n\n<strong>Цель:</strong> Обеспечение <strong>автоматического переключения на резервный сервер</strong> в случае отказа основного.",
        difficulty: "medium",
      },
      {
        id: "mdb-6",
        question: "Что такое Sharding (Шардинг) и в каких случаях он используется?",
        answer:
          "<strong>Sharding (Шардирование)</strong> — это метод <strong>горизонтального масштабирования</strong> MongoDB, при котором данные распределяются между несколькими независимыми серверами (шардами). Это позволяет обрабатывать огромные объемы данных и высокую нагрузку, которая не умещается на одном сервере.\n\n<strong>Используется, когда:</strong>\n1. Объем данных <strong>превышает</strong> возможности хранения одного сервера.\n2. Требуется <strong>высокая пропускная способность</strong> операций чтения/записи, которую не может обеспечить один сервер.\n\n<strong>Ключевой элемент:</strong> <strong>Shard Key (Ключ шардирования)</strong>, который определяет, на какой шард попадет документ.",
        difficulty: "hard",
      },
      {
        id: "mdb-7",
        question: "Что такое <strong>Aggregation Pipeline</strong> (Конвейер Агрегации)?",
        answer:
          "<strong>Aggregation Pipeline</strong> — это основной инструмент MongoDB для выполнения сложных <strong>операций ETL</strong> (Extract, Transform, Load) и аналитики. Это <strong>многоступенчатый процесс</strong>, где документы проходят через последовательность операторов (стадий).\n\n<strong>Основные стадии (примеры):</strong>\n* <strong>`$match`:</strong> Фильтрует документы (аналог `WHERE`).\n* <strong>`$group`:</strong> Группирует документы и вычисляет агрегированные значения (аналог `GROUP BY`).\n* <strong>`$project`:</strong> Выбирает, переименовывает или создает новые поля.\n* <strong>`$sort`:</strong> Сортирует документы.\n\n<strong>Пример:</strong> `db.orders.aggregate([ { $match: { status: 'A' } }, { $group: { _id: '$cust_id', total: { $sum: '$amount' } } } ])`",
        difficulty: "medium",
      },
      {
        id: "mdb-8",
        question: "Каково ограничение на размер документа в MongoDB?",
        answer:
          "Максимальный размер <strong>BSON-документа</strong> в MongoDB составляет <strong>16 мегабайт (16 MB)</strong>. Это ограничение существует для обеспечения того, чтобы документ не использовал чрезмерное количество оперативной памяти при передаче или обработке, а также для предотвращения неэффективных схем встраивания (Embedding).",
        difficulty: "easy",
      },
      {
        id: "mdb-9",
        question: "Объясните атомарность в MongoDB.",
        answer:
          "MongoDB гарантирует <strong>атомарность</strong> для операций <strong>на уровне одного документа</strong>. Это означает, что если вы вносите несколько изменений в один документ, либо все изменения будут успешно применены, либо ни одно из них. Это обеспечивает <strong>целостность данных</strong> внутри одного документа.\n\nДля обеспечения атомарности <strong>множества документов</strong> (Multi-Document Transactions) используются <strong>многодокументные транзакции</strong>, доступные с версии MongoDB 4.0 (для Replica Sets) и 4.2 (для Sharded Clusters), которые обеспечивают гарантии <strong>ACID</strong>.",
        difficulty: "medium",
      },
      {
        id: "mdb-10",
        question: "Как работают индексы в MongoDB и на что они влияют?",
        answer:
          "<strong>Индексы</strong> в MongoDB работают так же, как и в SQL: они хранят упорядоченный набор значений полей, позволяя СУБД быстро находить документы, не сканируя всю коллекцию.\n\n<strong>Влияние:</strong>\n* <strong>Положительное (Чтение):</strong> Ускоряют запросы `find()`, `$sort` и `$group` по индексированным полям.\n* <strong>Отрицательное (Запись):</strong> Замедляют операции `insert`, `update` и `delete`, так как при изменении документа необходимо обновить и соответствующие индексы.",
        difficulty: "medium",
      },
      {
        id: "mdb-11",
        question:
          "Приведите пример команды для вставки одного и множества документов в MongoDB Shell.",
        answer:
          "<strong>Вставка одного документа (Insert One):</strong>\n```javascript\ndb.users.insertOne({\n  name: 'Alice',\n  age: 30,\n  status: 'active'\n});\n```\n<strong>Вставка множества документов (Insert Many):</strong>\n```javascript\ndb.users.insertMany([\n  { name: 'Bob', age: 25 },\n  { name: 'Charlie', age: 40 }\n]);\n```",
        difficulty: "easy",
      },
      {
        id: "mdb-12",
        question: "Приведите пример команды для чтения (поиска) документов, где возраст больше 30.",
        answer:
          "Для поиска используется метод `find()`. Условие `{ age: { $gt: 30 } }` — это фильтр, использующий <strong>оператор сравнения `$gt` (greater than)</strong>.\n\n```javascript\ndb.users.find({\n  age: { $gt: 30 } \n});\n```\n<strong>Дополнительно (Проекция):</strong> Чтобы вернуть только поля `name` и `age`, исключив `_id`:\n```javascript\ndb.users.find(\n  { age: { $gt: 30 } },\n  { name: 1, age: 1, _id: 0 }\n);\n```",
        difficulty: "easy",
      },
      {
        id: "mdb-13",
        question: "Приведите пример команды для обновления поля (только имени) в одном документе.",
        answer:
          "Для выборочного обновления используется метод <strong>`updateOne()`</strong> с <strong>оператором `$set`</strong>.\n\n```javascript\ndb.users.updateOne(\n  { name: 'Alice' }, // Фильтр (какой документ обновить)\n  { $set: { email: 'alice.new@example.com' } } // Операция обновления\n);\n```",
        difficulty: "medium",
      },
      {
        id: "mdb-14",
        question: "Объясните разницу между `$set` и `$push` при обновлении.",
        answer:
          "* <strong>`$set`:</strong> Используется для <strong>установки</strong> значения поля. Если поле существует, оно обновляется; если нет — создается. Используется для скалярных значений (строки, числа) или для <strong>замены</strong> всего массива/встроенного объекта.\n* <strong>`$push`:</strong> Используется для <strong>добавления</strong> элемента в <strong>конец массива</strong>. Если поле не является массивом, `update` выдаст ошибку.\n\n<strong>Пример `$push`:</strong>\n```javascript\ndb.users.updateOne(\n  { name: 'Alice' },\n  { $push: { hobbies: 'Gardening' } } // Добавить 'Gardening' в массив hobbies\n);\n```",
        difficulty: "medium",
      },
      {
        id: "mdb-15",
        question: "В чем главное отличие MongoDB от традиционных SQL-баз данных?",
        answer:
          "Главное отличие в <strong>модели данных и схеме</strong>:\n\n| Критерий | MongoDB (NoSQL) | SQL (Relational) |\n| :--- | :--- | :--- |\n| <strong>Модель данных</strong> | Документы (JSON-like) | Таблицы (Строки и столбцы) |\n| <strong>Схема</strong> | <strong>Гибкая/Динамическая</strong> (Schema-less) | <strong>Жесткая/Предварительно определенная</strong> |\n| <strong>Связи</strong> | Встраивание (Embedding) или Ссылки (Referencing) | Явные <strong>Foreign Keys</strong> и <strong>JOIN</strong> |\n| <strong>Масштабирование</strong> | Горизонтальное (Sharding) | Традиционно вертикальное (наращивание мощности) |",
        difficulty: "medium",
      },
    ],
  },
  // security
  {
    id: "security",
    name: "Безопасность",
    questions: [
      {
        id: "sec-1",
        question: "Что такое XSS и как его предотвратить?",
        answer:
          "XSS (Cross-Site Scripting) — внедрение вредоносного кода. Предотвращается через экранирование, CSP, HttpOnly cookies, Content-Type.",
        difficulty: "medium",
      },
      {
        id: "sec-2",
        question: "Объясните CSRF атаки",
        answer:
          "CSRF (Cross-Site Request Forgery) — выполнение действий от имени пользователя. Предотвращается через CSRF токены, SameSite cookies.",
        difficulty: "medium",
      },
      {
        id: "sec-3",
        question: "Что такое SQL инъекции?",
        answer:
          "SQL инъекции — внедрение SQL кода через пользовательский ввод. Предотвращается через параметризованные запросы, ORM, валидацию.",
        difficulty: "medium",
      },
      {
        id: "sec-4",
        question: "Объясните OAuth 2.0",
        answer:
          "OAuth 2.0 — протокол авторизации. Использует токены доступа, refresh токены, разные гранты (authorization code, client credentials).",
        difficulty: "hard",
      },
      {
        id: "sec-5",
        question: "Что такое JWT и как его безопасно использовать?",
        answer:
          "JWT — токен для передачи данных. Безопасность обеспечивается через подпись, короткое время жизни, хранение в HttpOnly cookies.",
        difficulty: "medium",
      },
      {
        id: "sec-6",
        question: "Объясните HTTPS и SSL/TLS",
        answer:
          "HTTPS — защищенный HTTP через SSL/TLS. Обеспечивает шифрование, аутентификацию, целостность данных.",
        difficulty: "medium",
      },
      {
        id: "sec-7",
        question: "Что такое CORS и как его настроить?",
        answer:
          "CORS (Cross-Origin Resource Sharing) — механизм доступа к ресурсам с других доменов. Настраивается через заголовки Access-Control-*.",
        difficulty: "medium",
      },
      {
        id: "sec-8",
        question: "Объясните Content Security Policy",
        answer:
          "CSP — механизм безопасности, контролирующий ресурсы, которые может загружать страница. Предотвращает XSS, инъекции.",
        difficulty: "hard",
      },
      {
        id: "sec-9",
        question: "Что такое rate limiting?",
        answer:
          "Rate limiting ограничивает количество запросов от клиента. Защищает от DDoS, брутфорса, злоупотребления API.",
        difficulty: "medium",
      },
      {
        id: "sec-10",
        question: "Объясните безопасное хранение паролей",
        answer:
          "Пароли хешируются с солью через bcrypt, Argon2. Никогда не хранятся в открытом виде. Используется много итераций.",
        difficulty: "medium",
      },
    ],
  },
  // C#
  {
    id: "csharp",
    name: "C# Fundamentals",
    questions: [
      {
        id: "cs-1",
        question: "Что такое C# и каковы его основные характеристики?",
        answer:
          "<strong>C# (Си-шарп)</strong> — это современный, объектно-ориентированный (ООП) и типобезопасный язык программирования, разработанный Microsoft в рамках платформы <strong>.NET</strong>. \n\n<strong>Основные характеристики:</strong>\n1. <strong>Объектно-ориентированный:</strong> Поддерживает инкапсуляцию, наследование, полиморфизм.\n2. <strong>Типобезопасность:</strong> Проверка типов происходит на этапе компиляции, минимизируя ошибки в рантайме.\n3. <strong>Автоматическое управление памятью:</strong> Использует <strong>сборщик мусора (Garbage Collector, GC)</strong>.\n4. <strong>Интероперабельность:</strong> Легко взаимодействует с кодом, написанным на других языках .NET.",
        difficulty: "easy",
      },
      {
        id: "cs-2",
        question:
          "Объясните разницу между Value Types (Значимые типы) и Reference Types (Ссылочные типы).",
        answer:
          "<strong>Значимые типы (Value Types):</strong>\n* Хранят свои данные <strong>напрямую в стеке</strong> (или внутри объекта/структуры).\n* При присваивании создается <strong>полная копия значения</strong>.\n* Примеры: `int`, `char`, `bool`, `struct`, `enum`.\n\n<strong>Ссылочные типы (Reference Types):</strong>\n* Хранят <strong>ссылку (адрес)</strong> на данные, которые расположены <strong>в управляемой куче (Managed Heap)</strong>.\n* При присваивании создается <strong>копия ссылки</strong>, и обе переменные указывают на один и тот же объект.\n* Примеры: `class`, `string`, `array`, `delegate`, `object`.",
        difficulty: "medium",
      },
      {
        id: "cs-3",
        question:
          "Что такое Boxing (Упаковка) и Unboxing (Распаковка) и каковы их последствия для производительности?",
        answer:
          "* <strong>Boxing (Упаковка):</strong> Процесс <strong>неявного</strong> преобразования <strong>значимого типа</strong> (например, `int`) в <strong>ссылочный тип</strong> (`object` или интерфейс).\n* <strong>Unboxing (Распаковка):</strong> Процесс <strong>явного</strong> преобразования <strong>ссылочного типа</strong> (содержащего упакованное значение) обратно в <strong>значимый тип</strong>.\n\n<strong>Последствия для производительности:</strong> Оба процесса являются <strong>ресурсоемкими</strong> операциями, так как Boxing требует <strong>выделения памяти в куче</strong>, а Unboxing требует <strong>проверки типа</strong> в рантайме. Чрезмерное использование Boxing/Unboxing приводит к замедлению работы и дополнительной нагрузке на сборщик мусора.",
        difficulty: "medium",
      },
      {
        id: "cs-4",
        question:
          "Объясните назначение ключевых слов `using` (директива) и `using` (оператор/блок).",
        answer:
          "В C# ключевое слово `using` используется в двух разных контекстах:\n\n1. <strong>Директива `using` (в начале файла):</strong> Используется для <strong>импорта пространств имен</strong> (`Namespaces`), чтобы можно было обращаться к типам без указания их полного имени.\n   * *Пример:* `using System.Collections.Generic;`\n\n2. <strong>Оператор `using` (блок):</strong> Используется для <strong>автоматического и гарантированного освобождения неуправляемых ресурсов</strong> (например, файловых потоков, подключений к БД). Тип, используемый в блоке `using`, должен реализовывать интерфейс <strong>`IDisposable`</strong>.\n   * *Пример:* `using (var file = new FileStream(...)) { ... }` (метод `Dispose()` будет вызван автоматически).",
        difficulty: "medium",
      },
      {
        id: "cs-5",
        question: "В чем разница между `const` и `readonly`?",
        answer:
          "Оба ключевых слова используются для создания неизменяемых (иммутабельных) полей, но имеют важные отличия:\n\n| Критерий | `const` | `readonly` |\n| :--- | :--- | :--- |\n| <strong>Время инициализации</strong> | <strong>Compile-time</strong> (во время компиляции) | <strong>Run-time</strong> (во время выполнения) |\n| <strong>Где инициализируется</strong> | Только в момент объявления поля | В момент объявления ИЛИ в <strong>конструкторе</strong> |\n| <strong>Типы</strong> | Ограничен примитивами, `string` и `null` | Любые типы (Value и Reference Types) |\n| <strong>Область видимости</strong> | <strong>Статическое</strong> поле по умолчанию (значение одно для всех экземпляров) | Может быть <strong>полем экземпляра</strong> (значение может быть разным для каждого объекта) |",
        difficulty: "medium",
      },
      {
        id: "cs-6",
        question: "Что такое `namespace` (пространство имен) и для чего оно используется?",
        answer:
          "<strong>Namespace</strong> — это механизм C# для <strong>организации кода</strong> и <strong>предотвращения конфликтов имен</strong> (Name Collisions). Он служит логическим контейнером для группировки связанных классов, структур, интерфейсов и других типов.\n\n<strong>Пример:</strong> Два разных разработчика могут создать класс с именем `Logger`. Если они помещены в разные пространства имен (`MyCompany.App1` и `MyCompany.App2`), то их можно использовать одновременно без конфликтов.",
        difficulty: "easy",
      },
      {
        id: "cs-7",
        question: "Объясните работу сборщика мусора (Garbage Collector, GC) в .NET.",
        answer:
          '<strong>Сборщик мусора (GC)</strong> — это часть <strong>CLR (Common Language Runtime)</strong>, которая автоматически управляет памятью <strong>кучи (Heap)</strong>, выделенной для ссылочных типов. \n\n<strong>Принцип работы (Mark and Sweep):</strong>\n1. <strong>Определение достижимости (Marking):</strong> GC определяет, какие объекты в куче <strong>достижимы</strong> (то есть, на них есть ссылки из стека или других корней).\n2. <strong>Сборка (Sweeping):</strong> GC освобождает память, занятую <strong>недостижимыми</strong> объектами.\n3. <strong>Компактизация (Compacting):</strong> После освобождения памяти GC может переместить оставшиеся объекты, чтобы устранить фрагментацию памяти.\n\nGC использует <strong>поколения (Generations 0, 1, 2)</strong>: новые объекты создаются в Gen 0, и чем дольше объект "живет", тем выше его поколение, и тем реже GC его проверяет.',
        difficulty: "medium",
      },
      {
        id: "cs-8",
        question:
          "Какое ключевое слово используется для явного освобождения неуправляемых ресурсов, и какой интерфейс должен быть реализован?",
        answer:
          "Для явного освобождения <strong>неуправляемых ресурсов</strong> (таких как файловые потоки, сетевые подключения, хэндлы ОС) используется паттерн <strong>`IDisposable`</strong>.\n\n* <strong>Интерфейс:</strong> Должен быть реализован интерфейс <strong>`System.IDisposable`</strong>, который содержит единственный метод <strong>`Dispose()`</strong>.\n* <strong>Использование:</strong> Ресурсы, реализующие `IDisposable`, должны быть использованы внутри блока <strong>`using`</strong>, который гарантированно вызывает метод `Dispose()`, даже если внутри блока произойдет исключение.",
        difficulty: "medium",
      },
      {
        id: "cs-9",
        question: "В чем разница между оператором `==` и методом `.Equals()`?",
        answer:
          "Поведение зависит от типа:\n\n* <strong>Для значимых типов (`int`, `struct`):</strong> И `==`, и `.Equals()` по умолчанию сравнивают <strong>сами значения</strong>.\n* <strong>Для ссылочных типов (`class`, `object`):</strong>\n    * <strong>`==`:</strong> По умолчанию сравнивает <strong>ссылки</strong> (проверяет, указывают ли две переменные на <strong>один и тот же объект</strong> в памяти).\n    * <strong>`.Equals()`:</strong> По умолчанию (в базовом классе `object`) также сравнивает ссылки. Однако этот метод <strong>часто переопределяется</strong> (например, в `string` или ваших кастомных классах), чтобы сравнивать <strong>фактическое содержимое/значение</strong> объектов.",
        difficulty: "medium",
      },
      {
        id: "cs-10",
        question: "Для чего используется ключевое слово `var`?",
        answer:
          "Ключевое слово <strong>`var`</strong> используется для <strong>неявной типизации</strong> локальных переменных. Это означает, что тип переменной определяется (выводится) <strong>компилятором</strong> на основе типа выражения, используемого для инициализации.\n\n<strong>Особенности:</strong>\n* <strong>Не является динамическим типом:</strong> Тип фиксируется во время компиляции (C# остается строго типизированным).\n* <strong>Обязательна инициализация:</strong> Переменная должна быть инициализирована в момент объявления.\n* <strong>Используется для анонимных типов:</strong> Обязателен при работе с <strong>анонимными типами</strong> в <strong>LINQ</strong>.",
        difficulty: "easy",
      },
      {
        id: "cs-11",
        question: "Что такое `struct` и чем он отличается от `class`?",
        answer:
          "<strong>`struct` (Структура)</strong> — это пользовательский <strong>значимый тип (Value Type)</strong>, который обычно используется для представления небольших, связанных групп данных, где важна производительность и семантика копирования.\n\n<strong>Отличия от `class`:</strong>\n1. <strong>Тип:</strong> `struct` — значимый тип (стек); `class` — ссылочный тип (куча).\n2. <strong>Наследование:</strong> Структуры <strong>не поддерживают наследование</strong> (не могут наследоваться от другого класса/структуры, кроме `System.ValueType`). Классы поддерживают наследование.\n3. <strong>Конструктор по умолчанию:</strong> До C# 10 структуры <strong>не могли</strong> объявлять конструктор без параметров (по умолчанию всегда был конструктор с нулевыми значениями). Классы могут.",
        difficulty: "medium",
      },
      {
        id: "cs-12",
        question: "Объясните назначение ключевых слов `checked` и `unchecked`.",
        answer:
          'Эти ключевые слова управляют поведением C# при <strong>переполнении (Overflow)</strong> целочисленных арифметических операций.\n\n* <strong>`checked`:</strong> Инструктирует CLR генерировать <strong>`OverflowException`</strong> при переполнении. Это обеспечивает безопасные, но более медленные вычисления.\n* <strong>`unchecked`:</strong> Инструктирует CLR игнорировать переполнение, позволяя результату <strong>"заворачиваться"</strong> (например, `int.MaxValue + 1` станет `int.MinValue`). Это быстрее, но потенциально небезопасно.\n\nПоведение по умолчанию зависит от контекста: в консольных приложениях и библиотеках обычно `unchecked`, в константах итераторов — `checked`.',
        difficulty: "medium",
      },
      {
        id: "cs-13",
        question: "Что такое Nullable Types (Обнуляемые типы)?",
        answer:
          "<strong>Nullable Types</strong> позволяют <strong>значимым типам (Value Types)</strong> принимать значение <strong>`null`</strong> в дополнение к их обычному диапазону значений. Значимые типы по умолчанию не могут быть `null`.\n\n<strong>Синтаксис:</strong> Добавление вопросительного знака `?` после имени типа (например, `int?`, `DateTime?`).\n\n<strong>Реализация:</strong> `Nullable<T>` — это структура, которая имеет два поля: `Value` (само значение) и `HasValue` (логический флаг, указывающий, присвоено ли значение, или же это `null`).",
        difficulty: "easy",
      },
      {
        id: "cs-14",
        question: "Что такое `ref`, `out` и `in` параметры и в чем их ключевые различия?",
        answer:
          "Эти модификаторы используются для передачи аргументов по ссылке:\n\n| Модификатор | Назначение | Инициализация аргумента |\n| :--- | :--- | :--- |\n| <strong>`ref`</strong> | Передача по ссылке (двунаправленная) | Должен быть <strong>инициализирован</strong> вызывающим кодом <strong>до</strong> вызова метода. |\n| <strong>`out`</strong> | Передача по ссылке (выходное значение) | <strong>Не должен</strong> быть инициализирован до вызова. Метод <strong>обязан</strong> присвоить ему значение. |\n| <strong>`in`</strong> | Передача по ссылке (только для чтения) | Должен быть инициализирован до вызова. Метод <strong>не может</strong> изменить его значение (гарантия иммутабельности внутри метода). |",
        difficulty: "hard",
      },
      {
        id: "cs-15",
        question: "Объясните концепцию LINQ.",
        answer:
          '<strong>LINQ (Language Integrated Query)</strong> — это набор технологий, введенных в C# 3.0, которые позволяют писать <strong>запросы</strong> непосредственно внутри языка C# (или VB.NET) к различным источникам данных. \n\n<strong>Источники данных (LINQ Providers):</strong>\n* <strong>LINQ to Objects:</strong> Запросы к коллекциям в памяти (`List<T>`, массивы).\n* <strong>LINQ to SQL / LINQ to Entities:</strong> Запросы к реляционным базам данных (преобразуются в SQL).\n* <strong>LINQ to XML:</strong> Запросы к XML-документам.\n\n<strong>Преимущество:</strong> Обеспечивает единый, типобезопасный синтаксис запросов (например, `from c in customers where c.City == "London" select c`).',
        difficulty: "medium",
      },
    ],
  },
];

export const getTechnologyQuestions = (techId: string): Question[] => {
  const tech = questionsData.find((t) => t.id === techId);
  return tech ? tech.questions : [];
};

export const getAllQuestions = (): Question[] => {
  return questionsData.flatMap((tech) => tech.questions);
};
