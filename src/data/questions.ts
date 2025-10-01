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
  // Общее
  {
    "id": "candidate_general_questions_answers",
    "name": "Общие вопросы о кандидате",
    "questions": [
      {
        "id": "q-1",
        "question": "Расскажите немного о себе и своём профессиональном опыте.",
        "answer": "<p>Кратко опишите <strong>ключевые этапы</strong> карьеры (X лет опыта), вашу <strong>основную специализацию</strong> и 1-2 самых <strong>значимых проекта</strong> или достижения.</p><br/><p><strong>Важно:</strong> Держите фокус на релевантном опыте.</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-2",
        "question": "Как вы пришли в профессию программиста?",
        "answer": "<p>Назовите <strong>первый толчок</strong> (самообучение, вуз, курсы) и объясните, что <strong>удержало</strong> вас в этой сфере (любопытство, решение проблем).</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-3",
        "question": "Чем вас привлекает IT-сфера?",
        "answer": "<p>Укажите на:</p><ul><li><strong>непрерывное развитие</strong></li><li>возможность <strong>решать сложные задачи</strong></li><li><strong>создавать ценность</strong> (продукты, которыми пользуются люди)</li></ul>",
        "difficulty": "easy"
      },
      {
        "id": "q-4",
        "question": "Какие направления в разработке вам наиболее интересны?",
        "answer": "<p>Назовите 1-2 <strong>конкретных направления</strong> (например, бэкенд на C#, облачные сервисы, оптимизация) и объясните, почему они вас увлекают (например, сложность архитектуры).</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-5",
        "question": "Почему вы решили сменить текущее место работы?",
        "answer": "<p>Сфокусируйтесь на:</p><ul><li><strong>мотивации к росту</strong></li><li><strong>поиске новых возможностей</strong> (технологии, масштаб, продукт)</li></ul><br/><p><strong>Важно:</strong> Не говорите о негативе (избегайте жалоб).</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-6",
        "question": "Что вам нравилось на прошлой работе, а что хотелось бы изменить?",
        "answer": "<div><p><strong>Позитив:</strong> Назовите команду, продукт, или автономию.</p><br/><p><strong>Изменить:</strong> Назовите отсутствие роста, устаревшие технологии или желание большего масштаба.</p></div>",
        "difficulty": "easy"
      },
      {
        "id": "q-7",
        "question": "Что для вас важно при выборе новой компании?",
        "answer": "<p>Выберите <strong>3 ключевых фактора</strong> и кратко их обоснуйте:</p><ul><li>профессиональный рост</li><li>интересные задачи</li><li>сильная команда</li></ul>",
        "difficulty": "easy"
      },
      {
        "id": "q-8",
        "question": "Почему вы откликнулись именно на нашу вакансию?",
        "answer": "<p>Подчеркните:</p><ul><li><strong>совпадение ваших навыков</strong> с требованиями вакансии</li><li>ваш <strong>интерес к продукту/отрасли</strong> компании</li></ul>",
        "difficulty": "easy"
      },
      {
        "id": "q-9",
        "question": "Какие задачи вам интересны, а какие — наоборот утомляют?",
        "answer": "<div><p><strong>Интересны:</strong></p><ul><li>Новые вызовы</li><li>оптимизация</li><li>архитектура</li></ul><br/><p><strong>Утомляют (но выполнимы):</strong></p><ul><li>Рутинный легаси-саппорт</li><li>избыточная бюрократия</li></ul><br/><p><em>Смягчите формулировку</em></p></div>",
        "difficulty": "easy"
      },
      {
        "id": "q-10",
        "question": "Как вы видите своё профессиональное развитие через 2–3 года?",
        "answer": "<p>Опишите желаемую <strong>роль</strong> (Senior/Team Lead/Архитектор) и <strong>конкретные навыки</strong>, которые вы планируете освоить для достижения этой роли.</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-11",
        "question": "Какие новые технологии или навыки хотели бы освоить?",
        "answer": "<p>Назовите <strong>2-3 актуальные технологии</strong>, связанные с вакансией (например, Kafka, gRPC, новые версии .NET), и поясните их ценность.</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-12",
        "question": "Насколько для вас важно обучение и развитие в компании?",
        "answer": "<p>Ответьте <strong>«Очень важно»</strong> и приведите пример того, как вы учитесь сами (конференции, сертификаты).</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-13",
        "question": "Есть ли у вас долгосрочные карьерные цели?",
        "answer": "<p>Подтвердите наличие целей и свяжите их с <strong>ценностью для бизнеса</strong> (например, стать ведущим экспертом, влиять на техническую стратегию).</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-14",
        "question": "В какой команде вам комфортнее работать: маленькой или большой?",
        "answer": "<p>Ответ должен быть <strong>гибким</strong>: в малой — больше автономии, в большой — больше экспертизы. Выбирайте то, что ближе к вакансии.</p>",
        "difficulty": "easy"
      },
      {
        "id": "q-15",
        "question": "Вы предпочитаете гибкий график или фиксированный?",
        "answer": "Если компания ищет гибкость, подтвердите, что цените <strong>гибкость</strong> при условии соблюдения <strong>тайм-зоны команды</strong> и дедлайнов.",
        "difficulty": "easy"
      },
      {
        "id": "q-16",
        "question": "Нравится ли вам работать удалённо или предпочтительнее офис?",
        "answer": "Выберите <strong>предпочтительный для вакансии вариант</strong>, но подчеркните, что главное — это <strong>эффективность и коммуникация</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "q-17",
        "question": "Что для вас важно в командной работе?",
        "answer": "Назовите <strong>открытую коммуникацию</strong>, <strong>взаимное уважение</strong> и <strong>общее видение цели</strong> (цель важнее личных амбиций).",
        "difficulty": "easy"
      },
      {
        "id": "q-18",
        "question": "Какой менеджмент вам ближе: строгий контроль или больше свободы?",
        "answer": "Скажите, что цените <strong>доверие и свободу</strong>, но при этом осознаёте необходимость <strong>ответственности</strong> и <strong>прозрачности отчетности</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "q-19",
        "question": "Что вас мотивирует на работе?",
        "answer": "Назовите <strong>нематериальные</strong> факторы: решение сложных задач, видимый результат, профессиональный рост, а затем добавьте <strong>финансовую компенсацию</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "q-20",
        "question": "Какие факторы делают проект для вас интересным?",
        "answer": "Укажите на <strong>технологическую сложность</strong>, <strong>новизну</strong> и <strong>влияние на конечного пользователя</strong> (ценность продукта).",
        "difficulty": "easy"
      },
      {
        "id": "q-21",
        "question": "Что для вас важнее: деньги, технологии или команда?",
        "answer": "Ответьте, что важен <strong>баланс</strong>, но если нужно выбрать, поставьте <strong>команду/технологии</strong> на первое место, так как они обеспечивают долгосрочный рост и удовольствие от работы.",
        "difficulty": "easy"
      },
      {
        "id": "q-22",
        "question": "Какие ценности компании для вас особенно значимы?",
        "answer": "Изучите ценности компании (например, инновации, клиентоориентированность) и выберите <strong>1-2, которые совпадают</strong> с вашими.",
        "difficulty": "easy"
      },
      {
        "id": "q-23",
        "question": "Как вы обычно решаете конфликтные ситуации в команде?",
        "answer": "<p>Подчеркните подход <strong>«проблема, а не личность»</strong>.</p><br/><p>Всегда ищите:</p><ul><li><strong>техническое решение</strong></li><li><strong>компромисс</strong> через диалог</li></ul>",
        "difficulty": "easy"
      },
      {
        "id": "q-24",
        "question": "Как вы реагируете на критику?",
        "answer": "<p>Скажите, что воспринимаете критику как <strong>возможность для роста</strong>; просите:</p><ul><li><strong>конкретные примеры</strong></li><li><strong>предложения по улучшению</strong></li></ul>",
        "difficulty": "easy"
      },
      {
        "id": "q-25",
        "question": "Предпочитаете ли вы больше общаться устно или письменно?",
        "answer": "<p>Предпочтите:</p><ul><li><strong>письменно для документации</strong> (логи, решения)</li><li><strong>устно для быстрого решения</strong> сложных, срочных вопросов</li></ul>",
        "difficulty": "easy"
      },
      {
        "id": "q-26",
        "question": "Как часто вам комфортно получать обратную связь?",
        "answer": "Скажите, что цените <strong>регулярную, неформальную</strong> обратную связь (например, после завершения задачи или раз в месяц), а не только раз в полгода.",
        "difficulty": "easy"
      },
      {
        "id": "q-27",
        "question": "Когда вы могли бы выйти на работу?",
        "answer": "Назовите <strong>реалистичный срок</strong> с учетом отработки на текущем месте (например, «через 2 недели» или «согласно трудовому кодексу»).",
        "difficulty": "easy"
      },
      {
        "id": "q-28",
        "question": "Какие у вас ожидания по зарплате?",
        "answer": "Назовите <strong>диапазон</strong>, а не фиксированное число, или дайте ответ в формате «Рыночный уровень для моей квалификации, около X».",
        "difficulty": "easy"
      },
      {
        "id": "q-29",
        "question": "Какой формат работы для вас предпочтителен (офис, гибрид, удалёнка)?",
        "answer": "Назовите <strong>предпочтительный для вас формат</strong>, который при этом <strong>соответствует формату вакансии</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "q-30",
        "question": "Есть ли у вас текущие предложения от других компаний?",
        "answer": "Отвечайте <strong>честно, но кратко</strong>. Если есть, это подтверждает вашу востребованность. Если нет, сфокусируйтесь на сильном интересе к этой вакансии.",
        "difficulty": "easy"
      },
      {
        "id": "q-31",
        "question": "Насколько вам важны соцпакет, страховка, гибкий график?",
        "answer": "Подтвердите, что это <strong>важные, но вторичные</strong> факторы; приоритет — интересные задачи и рост.",
        "difficulty": "easy"
      },
      {
        "id": "q-32",
        "question": "Что вы считаете своими сильными сторонами?",
        "answer": "Назовите <strong>3 профессиональных качества</strong>, подкреплённых <strong>кратким примером</strong> (например, «системное мышление, что помогло при декомпозиции архитектуры»).",
        "difficulty": "easy"
      },
      {
        "id": "q-33",
        "question": "А над чем хотели бы поработать и развить в себе?",
        "answer": "Назовите <strong>контролируемый недостаток</strong> (например, «иногда слишком глубоко погружаюсь в детали») и <strong>план его исправления</strong> (например, «использую технику Pomodoro»).",
        "difficulty": "easy"
      },
      {
        "id": "q-34",
        "question": "Как вы обычно справляетесь со стрессом и дедлайнами?",
        "answer": "Опишите <strong>структурный подход</strong>: приоритизация задач, декомпозиция, своевременное оповещение команды о рисках.",
        "difficulty": "easy"
      },
      {
        "id": "q-35",
        "question": "Есть ли у вас хобби или увлечения вне работы?",
        "answer": "Назовите <strong>хобби</strong>, которое демонстрирует <strong>дополнительные качества</strong> (например, спорт — дисциплина, настолки — командная игра, чтение — саморазвитие).",
        "difficulty": "easy"
      }
    ]
  },
  // English
  {
    "id": "english_language_assessment_questions_full",
    "name": "Questions for English",
    "questions": [
      {
        "id": "en-1",
        "question": "Can you tell me a little bit about yourself?",
        "answer": "I'm a <strong>Mid-level Software Developer</strong> with <strong>5 years of experience</strong>, primarily focused on <strong>C#/.NET back-end development</strong> for scalable <strong>e-commerce platforms</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-2",
        "question": "How would you describe your background in software development?",
        "answer": "My background is solid: I have a <strong>Master's degree</strong> in CS, and I've spent the last few years specializing in <strong>cloud-native solutions</strong> using <strong>Azure and Kubernetes</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-3",
        "question": "What motivated you to become a programmer?",
        "answer": "I've always been motivated by <strong>problem-solving</strong> and the process of <strong>building things</strong>. It's satisfying to take a complex idea and turn it into <strong>working, efficient code</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-4",
        "question": "How long have you been working in IT?",
        "answer": "I've been working professionally in the IT industry for <strong>six years</strong>, focusing exclusively on development roles in the last five.",
        "difficulty": "easy"
      },
      {
        "id": "en-5",
        "question": "Could you walk me through your career path so far?",
        "answer": "I started as a <strong>Junior Developer</strong> focused on testing and maintenance. I then moved to my current role, where I became the <strong>lead developer</strong> for a specific <strong>microservice</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-6",
        "question": "Why are you looking for a new job right now?",
        "answer": "I'm seeking a role with <strong>greater technical challenges</strong> and a <strong>larger scope</strong> for architectural decisions, which this position seems to offer.",
        "difficulty": "easy"
      },
      {
        "id": "en-7",
        "question": "What do you like the most about your current position?",
        "answer": "I truly enjoy the <strong>team collaboration</strong>; we have a very strong culture of <strong>code review</strong> and mutual support.",
        "difficulty": "easy"
      },
      {
        "id": "en-8",
        "question": "What do you find challenging or frustrating in your current job?",
        "answer": "The main challenge is the <strong>lack of budget for technology upgrades</strong>. I'm eager to work with more <strong>modern stacks</strong> to improve <strong>scalability</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-9",
        "question": "Why did you decide to leave your last company?",
        "answer": "I was ready for a <strong>new level of complexity</strong> and a chance to work with <strong>distributed systems</strong>, which wasn't available there.",
        "difficulty": "easy"
      },
      {
        "id": "en-10",
        "question": "What are you looking for in your next role?",
        "answer": "I'm looking for a role where I can <strong>drive technical excellence</strong>, contribute to a <strong>large-scale product</strong>, and <strong>mentor junior developers</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-11",
        "question": "Why are you interested in our company?",
        "answer": "I am very impressed by your work on <strong>[Product Name]</strong> and your focus on <strong>[Specific Technology Mentioned in Vacancy]</strong>. It aligns perfectly with my specialization.",
        "difficulty": "easy"
      },
      {
        "id": "en-12",
        "question": "What attracted you to this position?",
        "answer": "The opportunity to lead development on the <strong>payment gateway service</strong> is highly appealing, as it's an area where I have extensive experience in <strong>optimizing latency</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-13",
        "question": "What do you know about our company?",
        "answer": "I know you are a <strong>market leader</strong> in <strong>FinTech solutions</strong>, and you recently expanded your focus into <strong>AI-driven personalization</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-14",
        "question": "How do you think you could contribute to our team?",
        "answer": "I can immediately contribute my expertise in <strong>back-end performance tuning</strong> and help implement better <strong>CI/CD pipelines</strong> using my experience with <strong>GitHub Actions</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-15",
        "question": "What expectations do you have from this role?",
        "answer": "I expect to be given <strong>autonomy</strong> to solve technical problems, clear <strong>feedback</strong>, and opportunities for <strong>continuous technical training</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-16",
        "question": "Where do you see yourself in two or three years?",
        "answer": "I see myself as a <strong>Senior Developer</strong> or <strong>Tech Lead</strong> here, capable of influencing the <strong>architectural direction</strong> of a major product line.",
        "difficulty": "easy"
      },
      {
        "id": "en-17",
        "question": "What skills or technologies would you like to improve?",
        "answer": "I definitely want to deepen my skills in <strong>Go language</strong> for high-performance computing, and improve my knowledge of <strong>event sourcing patterns</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-18",
        "question": "Do you prefer to grow as a specialist or move into management in the future?",
        "answer": "My primary focus is on <strong>technical mastery</strong> right now. I want to become a <strong>Staff Engineer</strong> before considering a management track.",
        "difficulty": "easy"
      },
      {
        "id": "en-19",
        "question": "How do you usually keep your skills up to date?",
        "answer": "I follow key figures in the <strong>.NET community</strong>, attend the <strong>DevOps conference</strong> annually, and dedicate time to <strong>side projects</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-20",
        "question": "Have you taken any courses or certifications recently?",
        "answer": "Yes, I recently completed the <strong>AWS Certified Solutions Architect</strong> course, which gave me new insights into <strong>cost optimization</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-21",
        "question": "Do you prefer working alone or in a team? Why?",
        "answer": "I am most effective <strong>collaborating in a team</strong>, especially during <strong>design and code review</strong>. But I need focused <strong>solo time for coding</strong> and deep work.",
        "difficulty": "easy"
      },
      {
        "id": "en-22",
        "question": "How do you usually organize your workday?",
        "answer": "I start with <strong>prioritizing tasks</strong> in the morning. I allocate specific blocks for <strong>deep work</strong> (no meetings) and check communication channels later in the day.",
        "difficulty": "easy"
      },
      {
        "id": "en-23",
        "question": "How do you handle working under tight deadlines?",
        "answer": "I immediately <strong>break the task down</strong> into smaller, <strong>deliverable chunks</strong>, communicate the <strong>minimum viable product (MVP)</strong> scope, and inform the manager if the deadline is unrealistic.",
        "difficulty": "easy"
      },
      {
        "id": "en-24",
        "question": "How do you usually deal with conflicts in a team?",
        "answer": "I focus on the <strong>technical issue, not the personality</strong>. I try to <strong>mediate</strong> by asking for <strong>data or best practices</strong> to support the solution.",
        "difficulty": "easy"
      },
      {
        "id": "en-25",
        "question": "What do you value the most in teamwork?",
        "answer": "I value <strong>transparency</strong> and <strong>psychological safety</strong>. It's crucial that everyone feels comfortable pointing out errors without fear of criticism.",
        "difficulty": "easy"
      },
      {
        "id": "en-26",
        "question": "How do you usually handle feedback from your manager?",
        "answer": "I always <strong>welcome constructive criticism</strong> as a tool for growth. I usually <strong>ask clarifying questions</strong> and then create an <strong>action plan</strong> to address the feedback points.",
        "difficulty": "easy"
      },
      {
        "id": "en-27",
        "question": "Can you describe a situation when you had to explain a technical topic to a non-technical person?",
        "answer": "I once had to explain <strong>database sharding</strong> to the marketing team. I used the analogy of <strong>different warehouses</strong> for different geographical regions to keep it simple.",
        "difficulty": "easy"
      },
      {
        "id": "en-28",
        "question": "Do you feel comfortable communicating in English during daily stand-ups?",
        "answer": "Yes, absolutely. I’ve used English daily for the past three years for <strong>meetings, documentation, and chat communication</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-29",
        "question": "Have you ever worked with international teams before?",
        "answer": "Yes, in my last company, I worked closely with colleagues in <strong>Germany and India</strong>. It taught me the importance of <strong>clear written communication</strong> and being mindful of <strong>time zones</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-30",
        "question": "How do you usually collaborate with remote colleagues?",
        "answer": "We rely heavily on <strong>Slack for asynchronous updates</strong>, use <strong>Zoom for screen-sharing</strong>, and ensure all key decisions are <strong>documented in Confluence</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-31",
        "question": "When would you be available to start?",
        "answer": "I have a <strong>two-week notice period</strong> with my current employer, so I could start approximately <strong>October 15th</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-32",
        "question": "What is your salary expectation?",
        "answer": "Based on my experience and the industry average for this role in <strong>[City/Region]</strong>, I am looking for a range between <strong>X and Y</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-33",
        "question": "Are you open to relocation?",
        "answer": "I am open to the possibility, but I would primarily prefer a <strong>fully remote or hybrid</strong> arrangement, as noted in my application.",
        "difficulty": "easy"
      },
      {
        "id": "en-34",
        "question": "Do you prefer remote work or office work?",
        "answer": "I prefer a <strong>hybrid model</strong>—I value the <strong>focus of remote work</strong> but also the spontaneous collaboration you get in the office once or twice a week.",
        "difficulty": "easy"
      },
      {
        "id": "en-35",
        "question": "What do you usually do in your free time?",
        "answer": "I like to <strong>hike</strong> on weekends to disconnect, and I'm currently learning to play the <strong>electric guitar</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-36",
        "question": "Do you have any hobbies?",
        "answer": "Yes, my main hobby is <strong>competitive cycling</strong>; it helps me maintain discipline and focus.",
        "difficulty": "easy"
      },
      {
        "id": "en-37",
        "question": "What kind of books or blogs do you like to read?",
        "answer": "I primarily follow blogs on <strong>software architecture</strong> (like Martin Fowler) and enjoy reading classic <strong>sci-fi novels</strong> for relaxation.",
        "difficulty": "easy"
      },
      {
        "id": "en-38",
        "question": "How was your weekend?",
        "answer": "It was great, thank you. I spent Saturday <strong>refactoring some old code</strong> for my personal project, and Sunday was just for family and relaxation.",
        "difficulty": "easy"
      },
      {
        "id": "en-39",
        "question": "What do you usually do after work to relax?",
        "answer": "I usually go to the gym or spend time reading. It helps me <strong>switch my brain off</strong> from complex tasks.",
        "difficulty": "easy"
      },
      {
        "id": "en-40",
        "question": "Have you traveled recently?",
        "answer": "Yes, I took a short trip to <strong>Prague</strong> last month. I really enjoyed exploring the historical architecture there.",
        "difficulty": "easy"
      },
      {
        "id": "en-41",
        "question": "Do you like working from home?",
        "answer": "I do like the <strong>flexibility</strong> and the lack of commute, but I make an effort to <strong>socialize with my team</strong> regularly to avoid isolation.",
        "difficulty": "easy"
      },
      {
        "id": "en-42",
        "question": "What’s your favorite way to learn new things?",
        "answer": "I prefer <strong>hands-on learning</strong>. I usually start with a new technology by building a <strong>small proof-of-concept application</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "en-43",
        "question": "Do you follow any tech podcasts or YouTube channels?",
        "answer": "Yes, I regularly listen to <strong>The Changelog</strong> podcast and follow <strong>Fireship</strong> on YouTube for quick updates on new frameworks.",
        "difficulty": "easy"
      },
      {
        "id": "en-44",
        "question": "Can you tell me about the last movie or TV show you watched?",
        "answer": "I recently watched the series <strong>'Severance'</strong>. I found the blend of <strong>technology and human psychology</strong> fascinating.",
        "difficulty": "easy"
      }
    ]
  },
  // html
  {
    id: "html",
    name: "HTML",
    questions: [
      {
        id: "html-1",
        question: "Что такое HTML5?",
        answer: "HTML5 — это последняя версия языка разметки гипертекста, используемая для создания веб-страниц и приложений.<br/>Основные особенности:<br/>• Новые семантические элементы (header, footer, nav, article)<br/>• Поддержка мультимедиа без плагинов (audio, video)<br/>• Canvas и SVG для графики<br/>• Улучшенные формы с новыми типами input<br/>• LocalStorage и SessionStorage для хранения данных<br/>• Геолокация и другие API",
        difficulty: "easy"
      },
      {
        id: "html-2",
        question: "Какова базовая структура HTML документа?",
        answer: "Базовая структура HTML документа включает:<br/>• &lt;!DOCTYPE html&gt; — объявление типа документа<br/>• &lt;html&gt; — корневой элемент<br/>• &lt;head&gt; — метаданные документа (title, meta, link)<br/>• &lt;body&gt; — видимое содержимое страницы<br/><br/>Пример:<br/>&lt;!DOCTYPE html&gt;<br/>&lt;html lang=\"ru\"&gt;<br/>&nbsp;&nbsp;&lt;head&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Заголовок&lt;/title&gt;<br/>&nbsp;&nbsp;&lt;/head&gt;<br/>&nbsp;&nbsp;&lt;body&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Контент --&gt;<br/>&nbsp;&nbsp;&lt;/body&gt;<br/>&lt;/html&gt;",
        difficulty: "easy"
      },
      {
        id: "html-3",
        question: "Для чего используется DOCTYPE?",
        answer: "DOCTYPE — это инструкция браузеру о версии HTML, в которой написан документ.<br/>• Определяет режим рендеринга (стандартный или совместимости)<br/>• В HTML5 используется простая форма: &lt;!DOCTYPE html&gt;<br/>• Должен быть первой строкой в документе<br/>• Без DOCTYPE браузер может перейти в режим совместимости (quirks mode)",
        difficulty: "easy"
      },
      {
        id: "html-4",
        question: "В чём разница между тегами <head> и <body>?",
        answer: "&lt;head&gt; содержит метаинформацию:<br/>• Заголовок страницы (title)<br/>• Мета-теги (charset, viewport, description)<br/>• Подключение CSS и JavaScript<br/>• Не отображается на странице<br/><br/>&lt;body&gt; содержит видимый контент:<br/>• Текст, изображения, видео<br/>• Все элементы интерфейса<br/>• Отображается пользователю",
        difficulty: "easy"
      },
      {
        id: "html-5",
        question: "Какие важные мета-теги существуют?",
        answer: "Основные мета-теги:<br/>• &lt;meta charset=\"UTF-8\"&gt; — кодировка<br/>• &lt;meta name=\"viewport\" content=\"width=device-width\"&gt; — адаптивность<br/>• &lt;meta name=\"description\" content=\"...\"&gt; — описание для SEO<br/>• &lt;meta name=\"keywords\" content=\"...\"&gt; — ключевые слова (устарел)<br/>• &lt;meta name=\"author\" content=\"...\"&gt; — автор<br/>• &lt;meta property=\"og:title\"&gt; — Open Graph для соцсетей",
        difficulty: "easy"
      },
      {
        id: "html-6",
        question: "Как подключить CSS к HTML?",
        answer: "Три способа подключения CSS:<br/><br/>1. Внешний файл (рекомендуется):<br/>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;<br/><br/>2. Внутренние стили:<br/>&lt;style&gt;<br/>&nbsp;&nbsp;p { color: red; }<br/>&lt;/style&gt;<br/><br/>3. Inline стили:<br/>&lt;p style=\"color: red;\"&gt;Текст&lt;/p&gt;",
        difficulty: "easy"
      },
      {
        id: "html-7",
        question: "Как подключить JavaScript к HTML?",
        answer: "Способы подключения JavaScript:<br/><br/>1. Внешний файл:<br/>&lt;script src=\"script.js\"&gt;&lt;/script&gt;<br/><br/>2. Встроенный скрипт:<br/>&lt;script&gt;<br/>&nbsp;&nbsp;console.log('Hello');<br/>&lt;/script&gt;<br/><br/>Рекомендации:<br/>• Размещать перед &lt;/body&gt; для быстрой загрузки<br/>• Или использовать атрибуты defer/async в &lt;head&gt;",
        difficulty: "easy"
      },
      {
        id: "html-8",
        question: "Как добавить комментарий в HTML?",
        answer: "HTML комментарии:<br/>&lt;!-- Это комментарий --&gt;<br/><br/>Особенности:<br/>• Не отображаются на странице<br/>• Видны в исходном коде<br/>• Используются для пояснений и временного отключения кода<br/>• Могут быть многострочными",
        difficulty: "easy"
      },
      {
        id: "html-9",
        question: "Для чего нужен атрибут lang?",
        answer: "Атрибут lang указывает язык содержимого страницы:<br/>&lt;html lang=\"ru\"&gt;<br/><br/>Преимущества:<br/>• Помогает поисковым системам<br/>• Улучшает доступность (screen readers)<br/>• Браузер может предложить перевод<br/>• Правильная расстановка переносов<br/><br/>Примеры: ru, en, en-US, ru-RU",
        difficulty: "easy"
      },
      {
        id: "html-10",
        question: "Что такое data-атрибуты?",
        answer: "Data-атрибуты позволяют хранить пользовательские данные в HTML элементах:<br/>&lt;div data-user-id=\"123\" data-role=\"admin\"&gt;&lt;/div&gt;<br/><br/>Доступ через JavaScript:<br/>element.dataset.userId // \"123\"<br/>element.dataset.role // \"admin\"<br/><br/>Преимущества:<br/>• Валидный HTML<br/>• Легкий доступ через dataset API<br/>• Не влияют на отображение",
        difficulty: "easy"
      },
      {
        id: "html-11",
        question: "В чём разница между <b> и <strong>?",
        answer: "&lt;b&gt; — визуальное выделение жирным:<br/>• Только стилистическое значение<br/>• Не имеет семантического смысла<br/><br/>&lt;strong&gt; — семантическое выделение важности:<br/>• Указывает на важность текста<br/>• Лучше для SEO и доступности<br/>• Screen readers выделяют интонацией<br/><br/>Рекомендуется использовать &lt;strong&gt;",
        difficulty: "easy"
      },
      {
        id: "html-12",
        question: "В чём разница между <em> и <i>?",
        answer: "&lt;em&gt; — семантический акцент:<br/>• Подчеркивает смысловое ударение<br/>• Читается с изменением интонации<br/>• Пример: Это &lt;em&gt;очень&lt;/em&gt; важно<br/><br/>&lt;i&gt; — визуальный курсив:<br/>• Только стилистическое оформление<br/>• Используется для терминов, названий<br/>• Пример: &lt;i&gt;Lorem ipsum&lt;/i&gt;<br/><br/>Предпочтительнее использовать &lt;em&gt;",
        difficulty: "easy"
      },
      {
        id: "html-13",
        question: "Что делают теги <small>, <s> и <mark>?",
        answer: "&lt;small&gt; — мелкий шрифт:<br/>• Для менее важного текста<br/>• Сноски, копирайты, дисклеймеры<br/><br/>&lt;s&gt; — зачеркнутый текст:<br/>• Неактуальная информация<br/>• Старые цены<br/><br/>&lt;mark&gt; — выделение маркером:<br/>• Подсветка важного текста<br/>• Результаты поиска<br/>• Визуально как желтый маркер",
        difficulty: "easy"
      },
      {
        id: "html-14",
        question: "Что такое семантический HTML?",
        answer: "Семантический HTML использует теги по их смысловому назначению.<br/><br/>Семантические теги:<br/>• &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;<br/>• &lt;main&gt;, &lt;article&gt;, &lt;section&gt;<br/>• &lt;aside&gt;, &lt;figure&gt;, &lt;figcaption&gt;<br/><br/>Преимущества:<br/>• Улучшает SEO<br/>• Повышает доступность<br/>• Упрощает поддержку кода<br/>• Помогает поисковым роботам",
        difficulty: "easy"
      },
      {
        id: "html-15",
        question: "Как создать параграфы и переносы строк?",
        answer: "Параграф — тег &lt;p&gt;:<br/>&lt;p&gt;Это параграф текста&lt;/p&gt;<br/>• Автоматические отступы сверху/снизу<br/>• Блочный элемент<br/><br/>Перенос строки — тег &lt;br&gt;:<br/>Первая строка&lt;br&gt;Вторая строка<br/>• Одиночный тег без закрывающего<br/>• Принудительный перенос<br/>• Не создает отступов",
        difficulty: "easy"
      },
      {
        id: "html-16",
        question: "Какие новые типы input появились в HTML5?",
        answer: "Новые типы input в HTML5:<br/>• email — проверка email<br/>• url — проверка URL<br/>• tel — телефонные номера<br/>• number — числовые значения<br/>• range — ползунок<br/>• date — выбор даты<br/>• time — выбор времени<br/>• color — палитра цветов<br/>• search — поисковое поле<br/><br/>Преимущества: встроенная валидация и мобильные клавиатуры",
        difficulty: "medium"
      },
      {
        id: "html-17",
        question: "Как работает элемент <canvas>?",
        answer: "&lt;canvas&gt; — область для рисования графики через JavaScript.<br/><br/>Создание:<br/>&lt;canvas id=\"myCanvas\" width=\"200\" height=\"100\"&gt;&lt;/canvas&gt;<br/><br/>Использование:<br/>const ctx = canvas.getContext('2d');<br/>ctx.fillRect(0, 0, 150, 75);<br/><br/>Применение:<br/>• Графики и диаграммы<br/>• Игры<br/>• Обработка изображений<br/>• Анимации",
        difficulty: "medium"
      },
      {
        id: "html-18",
        question: "В чём разница между localStorage и sessionStorage?",
        answer: "localStorage:<br/>• Хранит данные без срока истечения<br/>• Данные сохраняются после закрытия браузера<br/>• Доступны во всех вкладках домена<br/>• Объем: ~5-10 MB<br/><br/>sessionStorage:<br/>• Хранит данные одной сессии<br/>• Удаляется при закрытии вкладки<br/>• Доступны только в текущей вкладке<br/>• Объем: ~5-10 MB<br/><br/>Методы одинаковые: setItem, getItem, removeItem",
        difficulty: "medium"
      },
      {
        id: "html-19",
        question: "Как использовать аудио и видео в HTML5?",
        answer: "Элемент &lt;audio&gt;:<br/>&lt;audio controls&gt;<br/>&nbsp;&nbsp;&lt;source src=\"audio.mp3\" type=\"audio/mpeg\"&gt;<br/>&lt;/audio&gt;<br/><br/>Элемент &lt;video&gt;:<br/>&lt;video controls width=\"320\" poster=\"preview.jpg\"&gt;<br/>&nbsp;&nbsp;&lt;source src=\"video.mp4\" type=\"video/mp4\"&gt;<br/>&lt;/video&gt;<br/><br/>Атрибуты:<br/>• controls — панель управления<br/>• autoplay — автовоспроизведение<br/>• loop — зацикливание<br/>• muted — без звука",
        difficulty: "medium"
      },
      {
        id: "html-20",
        question: "Что такое SVG и как его использовать?",
        answer: "SVG — масштабируемая векторная графика.<br/><br/>Способы использования:<br/>1. Встроенный SVG:<br/>&lt;svg&gt;&lt;circle cx=\"50\" cy=\"50\" r=\"40\"/&gt;&lt;/svg&gt;<br/><br/>2. Через img:<br/>&lt;img src=\"icon.svg\"&gt;<br/><br/>3. В CSS:<br/>background-image: url('icon.svg');<br/><br/>Преимущества:<br/>• Масштабируется без потери качества<br/>• Малый размер файлов<br/>• Можно стилизовать через CSS",
        difficulty: "medium"
      },
      {
        id: "html-21",
        question: "Что такое атрибут defer и async у тега script?",
        answer: "async:<br/>• Скрипт загружается параллельно<br/>• Выполняется сразу после загрузки<br/>• Прерывает парсинг HTML<br/>• Порядок выполнения не гарантирован<br/><br/>defer:<br/>• Скрипт загружается параллельно<br/>• Выполняется после парсинга DOM<br/>• Не блокирует рендеринг<br/>• Сохраняет порядок выполнения<br/><br/>Без атрибутов: блокирует парсинг HTML",
        difficulty: "medium"
      },
      {
        id: "html-22",
        question: "Как сделать форму доступной (accessible)?",
        answer: "Правила доступных форм:<br/>• Использовать &lt;label&gt; для всех input<br/>• Атрибут for должен совпадать с id input<br/>• Группировать связанные поля через &lt;fieldset&gt;<br/>• Добавлять aria-label для иконок<br/>• Указывать required для обязательных полей<br/>• Использовать правильные типы input<br/>• Добавлять подсказки через placeholder<br/>• Показывать понятные сообщения об ошибках",
        difficulty: "medium"
      },
      {
        id: "html-23",
        question: "Что такое Web Workers?",
        answer: "Web Workers позволяют выполнять JavaScript в фоновом потоке.<br/><br/>Особенности:<br/>• Не блокируют главный поток<br/>• Не имеют доступа к DOM<br/>• Общаются через postMessage<br/>• Подходят для тяжелых вычислений<br/><br/>Создание:<br/>const worker = new Worker('worker.js');<br/>worker.postMessage({cmd: 'start'});<br/>worker.onmessage = (e) =&gt; console.log(e.data);",
        difficulty: "hard"
      },
      {
        id: "html-24",
        question: "Что такое Progressive Web Apps (PWA)?",
        answer: "PWA — веб-приложения с нативными возможностями.<br/><br/>Ключевые компоненты:<br/>• Service Workers — офлайн работа<br/>• Web App Manifest — установка на устройство<br/>• HTTPS — обязательная защита<br/><br/>Возможности:<br/>• Работа офлайн<br/>• Push-уведомления<br/>• Установка как приложение<br/>• Доступ к устройству (камера, геолокация)",
        difficulty: "hard"
      },
      {
        id: "html-25",
        question: "Как работает drag and drop в HTML5?",
        answer: "Атрибуты и события Drag & Drop:<br/><br/>Атрибуты:<br/>• draggable=\"true\" — делает элемент перетаскиваемым<br/><br/>События перетаскиваемого элемента:<br/>• dragstart — начало перетаскивания<br/>• drag — процесс перетаскивания<br/>• dragend — конец перетаскивания<br/><br/>События целевого элемента:<br/>• dragenter, dragover — наведение<br/>• drop — отпускание<br/>• dragleave — уход с элемента",
        difficulty: "medium"
      },
      {
        id: "html-26",
        question: "Что такое Content Security Policy (CSP)?",
        answer: "CSP — политика безопасности контента, защищающая от XSS атак.<br/><br/>Настройка через мета-тег:<br/>&lt;meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\"&gt;<br/><br/>Директивы:<br/>• default-src — источники по умолчанию<br/>• script-src — источники скриптов<br/>• style-src — источники стилей<br/>• img-src — источники изображений<br/><br/>Защищает от внедрения вредоносного кода",
        difficulty: "hard"
      },
      {
        id: "html-27",
        question: "Как оптимизировать загрузку изображений?",
        answer: "Методы оптимизации изображений:<br/><br/>1. Атрибут loading=\"lazy\":<br/>&lt;img src=\"image.jpg\" loading=\"lazy\"&gt;<br/><br/>2. Элемент &lt;picture&gt; для адаптивности:<br/>&lt;picture&gt;<br/>&nbsp;&nbsp;&lt;source media=\"(max-width: 600px)\" srcset=\"small.jpg\"&gt;<br/>&nbsp;&nbsp;&lt;img src=\"large.jpg\"&gt;<br/>&lt;/picture&gt;<br/><br/>3. Форматы нового поколения: WebP, AVIF<br/>4. Атрибут srcset для разных разрешений<br/>5. Правильные размеры через width/height",
        difficulty: "medium"
      },
      {
        id: "html-28",
        question: "Что такое Shadow DOM?",
        answer: "Shadow DOM — инкапсулированный DOM и стили компонента.<br/><br/>Особенности:<br/>• Изоляция стилей и скриптов<br/>• Скрытая внутренняя структура<br/>• Используется в Web Components<br/><br/>Создание:<br/>const shadow = element.attachShadow({mode: 'open'});<br/>shadow.innerHTML = '&lt;style&gt;...&lt;/style&gt;&lt;div&gt;...&lt;/div&gt;';<br/><br/>Применение: создание переиспользуемых компонентов",
        difficulty: "hard"
      },
      {
        id: "html-29",
        question: "Какие есть способы валидации форм?",
        answer: "HTML5 валидация:<br/>• required — обязательное поле<br/>• pattern=\"[0-9]{3}\" — регулярное выражение<br/>• min/max — для чисел и дат<br/>• minlength/maxlength — длина текста<br/>• type=\"email/url/tel\" — встроенная проверка<br/><br/>JavaScript валидация:<br/>• element.checkValidity() — проверка<br/>• element.setCustomValidity() — свое сообщение<br/>• novalidate — отключение HTML5 валидации",
        difficulty: "medium"
      },
      {
        id: "html-30",
        question: "Что такое ARIA атрибуты?",
        answer: "ARIA (Accessible Rich Internet Applications) — атрибуты для улучшения доступности.<br/><br/>Основные атрибуты:<br/>• aria-label — текстовая метка<br/>• aria-hidden — скрыть от screen readers<br/>• aria-live — объявление изменений<br/>• aria-describedby — дополнительное описание<br/>• role — роль элемента<br/><br/>Пример:<br/>&lt;button aria-label=\"Закрыть\" aria-pressed=\"false\"&gt;X&lt;/button&gt;",
        difficulty: "medium"
      }
    ]
  },
  // css
  {
    id: "css",
    name: "CSS",
    questions: [
      {
        id: "css-1",
        question: "Как работает специфичность в CSS?",
        answer: "Специфичность определяет приоритет применения стилей. Считается по весам: инлайн-стили (1000), ID (100), классы/атрибуты/псевдоклассы (10), элементы/псевдоэлементы (1). Чем выше вес, тем выше приоритет. При равной специфичности побеждает последнее правило в коде.",
        difficulty: "easy"
      },
      {
        id: "css-2",
        question: "Что такое БЭМ (Block-Element-Modifier) методология и какие преимущества она предоставляет?",
        answer: "БЭМ - методология именования классов. Блок - независимый компонент, элемент - часть блока, модификатор - изменение внешнего вида.<br/>Преимущества: четкая структура, масштабируемость, переиспользование кода, легкая поддержка, удобная командная работа.",
        difficulty: "easy"
      },
      {
        id: "css-3",
        question: "Как работают псевдоэлементы ::before и ::after?",
        answer: "::before добавляет виртуальный элемент перед содержимым, ::after - после. Они не существуют в HTML, но можно задать стили и контент через свойство content. Используются для декоративных элементов, иконок, эффектов без изменения разметки.",
        difficulty: "easy"
      },
      {
        id: "css-4",
        question: "Что такое Flexbox и какие основные свойства Flexbox контейнера и элементов?",
        answer: "Flexbox - технология для создания гибких макетов.<br/>Свойства контейнера: display: flex, flex-direction, flex-wrap, justify-content, align-items, align-content.<br/>Свойства элементов: flex-grow, flex-shrink, flex-basis, flex, align-self.",
        difficulty: "easy"
      },
      {
        id: "css-5",
        question: "Как работает система сеток в CSS Grid?",
        answer: "CSS Grid создает двумерные сетки. Контейнер определяется через display: grid, затем задается структура через grid-template-rows и grid-template-columns. Элементы размещаются с помощью grid-row и grid-column. Позволяет создавать сложные макеты без float.",
        difficulty: "easy"
      },
      {
        id: "css-6",
        question: "Каким образом можно создать анимацию с использованием CSS?",
        answer: "С помощью @keyframes и свойства animation. Определяете ключевые кадры с нужными стилями, затем применяете анимацию к элементу, указывая имя, длительность и функцию времени. Можно зациклить через animation-iteration-count: infinite.",
        difficulty: "easy"
      },
      {
        id: "css-7",
        question: "Что такое CSS-переменные (кастомные свойства) и какие преимущества они предоставляют?",
        answer: "CSS-переменные (--имя) - значения, определяемые один раз и используемые через var(--имя).<br/>Преимущества: удобство изменений в одном месте, переиспользование, легкость создания тем, динамическое изменение через JavaScript, улучшение читаемости кода.",
        difficulty: "easy"
      },
      {
        id: "css-8",
        question: "Какие различия между позиционированием relative, absolute и fixed?",
        answer: "relative - элемент остается в потоке, можно сдвинуть относительно его позиции.<br/>absolute - вырывается из потока, позиционируется относительно ближайшего предка с position.<br/>fixed - позиционируется относительно viewport, остается на месте при прокрутке.",
        difficulty: "easy"
      },
      {
        id: "css-9",
        question: "Что такое CSS-гриды и в каких случаях их следует использовать?",
        answer: "CSS Grid - система двумерных сеток для сложных макетов.<br/>Используется для: сложных макетов (дашборды, журнальные статьи), равномерного выравнивания, адаптивного дизайна, переупорядочивания элементов на разных экранах.",
        difficulty: "easy"
      },
      {
        id: "css-10",
        question: "Как работает понятие 'контроль переполнения' (overflow) и его свойства?",
        answer: "overflow управляет отображением контента, не вмещающегося в элемент.<br/>Значения: visible (по умолчанию, контент виден), hidden (скрыт), scroll (всегда полосы прокрутки), auto (полосы только при необходимости). Есть overflow-x и overflow-y для контроля по осям.",
        difficulty: "easy"
      },
      {
        id: "css-11",
        question: "Что такое 'резиновый' и 'адаптивный' дизайн? В чем разница между ними?",
        answer: "Резиновый дизайн - размеры элементов изменяются пропорционально окну браузера.<br/>Адаптивный дизайн - изменяется не только размер, но и структура, расположение элементов с помощью медиазапросов для разных устройств. Адаптивный более гибкий и точно настраивается.",
        difficulty: "easy"
      },
      {
        id: "css-12",
        question: "Как работает свойство z-index и как управлять стеком z-индексов?",
        answer: "z-index управляет порядком наложения элементов с позиционированием (не static). Чем больше значение, тем выше элемент в стеке. Если z-index не указан, порядок определяется последовательностью в HTML. Работает только на позиционированных элементах.",
        difficulty: "easy"
      },
      {
        id: "css-13",
        question: "Что такое 'рендеринговая цепочка' и как CSS влияет на процесс рендеринга в браузере?",
        answer: "Рендеринговая цепочка - последовательность шагов браузера для отображения страницы: получение HTML/CSS, построение DOM и CSSOM, создание рендерингового дерева, вычисление макета, отрисовка.<br/>CSS влияет через: блокирующий рендеринг, размер файлов, сложность селекторов, рефлоу при изменениях.",
        difficulty: "easy"
      },
      {
        id: "css-14",
        question: "Какие преимущества и недостатки использования CSS-препроцессоров, таких как Sass или Less?",
        answer: "Преимущества: переменные, миксины, вложенность, математические операции, импорт файлов, условия и циклы.<br/>Недостатки: дополнительная сложность, этап компиляции, зависимость от инструментов, возможность создания избыточного кода, проблемы совместимости со старыми браузерами.",
        difficulty: "easy"
      },
      {
        id: "css-15",
        question: "Что такое 'рефлов' и 'рефлоу' в контексте CSS и как они влияют на производительность?",
        answer: "Reflow - пересчет геометрии и позиций элементов при изменении размеров/структуры.<br/>Repaint - обновление визуального представления без пересчета геометрии.<br/>Оба процесса требуют ресурсов CPU, замедляют отклик. Для оптимизации: группировать изменения, использовать CSS-трансформации, избегать частых изменений.",
        difficulty: "easy"
      },
      {
        id: "css-16",
        question: "Какие различия между псевдоклассами :nth-child и :nth-of-type?",
        answer: ":nth-child выбирает n-ый дочерний элемент независимо от типа.<br/>:nth-of-type выбирает n-ый элемент конкретного типа среди соседей.<br/>Пример: li:nth-child(2) выберет второй дочерний элемент (даже если это не li), а li:nth-of-type(2) выберет второй li-элемент.",
        difficulty: "easy"
      },
      {
        id: "css-17",
        question: "Что такое 'вендорные префиксы' в CSS и зачем они используются?",
        answer: "Вендорные префиксы (-webkit-, -moz-, -ms-, -o-) - префиксы для экспериментальных CSS-свойств в разных браузерах. Используются для: тестирования новых функций, обеспечения совместимости, поддержки старых браузеров. Сегодня менее актуальны, лучше использовать автопрефиксеры.",
        difficulty: "easy"
      },
      {
        id: "css-18",
        question: "Какие механизмы доступности (accessibility) следует учитывать при разработке с использованием CSS?",
        answer: "Контрастность текста и фона, не только цвет для передачи информации, альтернативный текст для изображений, правильный порядок чтения, видимость фокуса, управление клавиатурой, масштабируемость текста, избегать display: none для важного контента, адаптивный дизайн, тестирование со screen readers.",
        difficulty: "easy"
      },
      {
        id: "css-19",
        question: "Что такое 'критический путь рендеринга' и как CSS может влиять на него?",
        answer: "Критический путь рендеринга - последовательность шагов для первичного отображения контента: загрузка ресурсов, построение DOM и CSSOM, создание рендер-дерева, макет, отрисовка.<br/>CSS влияет через: блокирующий рендеринг, критический CSS (инлайн стили для первого экрана), асинхронную загрузку, минификацию.",
        difficulty: "easy"
      },
      {
        id: "css-20",
        question: "Как работает механизм наследования в CSS? Какие свойства наследуются, а какие нет?",
        answer: "Наследуются: шрифты (font-family, font-size), цвет текста (color), текстовые свойства (line-height, text-align), некоторые свойства списков.<br/>Не наследуются: размеры (width, height), позиционирование, фон, границы, display, visibility. Наследование упрощает стилизацию дочерних элементов.",
        difficulty: "easy"
      },
      {
        id: "css-21",
        question: "Что такое 'кросс-браузерная совместимость' и какие стратегии существуют для обеспечения её в CSS?",
        answer: "Способность сайта работать одинаково в разных браузерах.<br/>Стратегии: соблюдение стандартов, использование reset/normalize.css, тестирование в разных браузерах, вендорные префиксы, прогрессивное улучшение, медиазапросы, инструменты типа BrowserStack, резервные варианты для старых браузеров.",
        difficulty: "easy"
      },
      {
        id: "css-22",
        question: "Какие альтернативы display: none с точки зрения доступности?",
        answer: "visibility: hidden (сохраняет место, но скрывает элемент).<br/>opacity: 0 (элемент прозрачен, но доступен для screen readers).<br/>position: absolute; left: -9999px (перемещает за экран).<br/>aria-hidden='true' (указывает screen readers игнорировать элемент).<br/>display: none полностью удаляет из DOM и недоступен для assistive technologies.",
        difficulty: "easy"
      },
      {
        id: "css-23",
        question: "Что такое 'флексибильность' и 'эластичность' в контексте CSS? Какие свойства соответствуют этим понятиям?",
        answer: "Флексибильность - способность элементов изменять размеры в зависимости от пространства через Flexbox (display: flex, flex-direction, flex-wrap, justify-content, align-items).<br/>Эластичность - изменение размеров для гармоничного макета через CSS Grid (display: grid, grid-template-columns/rows, grid-gap).",
        difficulty: "easy"
      },
      {
        id: "css-24",
        question: "Какие методы оптимизации производительности CSS вы знаете?",
        answer: "Минификация и сжатие, комбинирование файлов, критический CSS (инлайн для первого экрана), удаление неиспользуемого кода, автопрефиксер, объединение изображений в спрайты, отложенная загрузка некритических стилей, кэширование, сжатие GZIP, упрощение селекторов, использование системных шрифтов.",
        difficulty: "easy"
      },
      {
        id: "css-25",
        question: "Что такое 'ретинизация' изображений и как связано с CSS?",
        answer: "Ретинизация - создание изображений с высоким разрешением для экранов с высокой плотностью пикселей (retina displays). В CSS используются медиазапросы (@media с min-device-pixel-ratio) для загрузки версий с разным разрешением и background-size для корректного масштабирования.",
        difficulty: "easy"
      },
      {
        id: "css-26",
        question: "Какие нововведения были введены в CSS3 по сравнению с CSS2?",
        answer: "Flexbox и Grid, анимации (@keyframes) и переходы (transition), тени (box-shadow, text-shadow), градиенты, @font-face для подключения шрифтов, медиазапросы, псевдоэлементы ::before/::after, новые селекторы, border-radius, множественные фоны, transform, rgba цвета, CSS переменные.",
        difficulty: "easy"
      },
      {
        id: "css-27",
        question: "Что такое 'крест-браузерное тестирование' (cross-browser testing) и как оно применяется к CSS?",
        answer: "Проверка веб-сайта на разных браузерах и их версиях для обеспечения одинакового отображения.<br/>В CSS проверяется: отображение свойств, совместимость значений, работа анимаций, медиазапросы, вендорные префиксы. Используются инструменты типа BrowserStack, CrossBrowserTesting.",
        difficulty: "easy"
      },
      {
        id: "css-28",
        question: "Каким образом CSS может влиять на SEO (оптимизацию для поисковых систем)?",
        answer: "Скорость загрузки (минификация, сжатие), мобильная адаптивность (responsive design), семантическая разметка, правильная структура контента (заголовки h1-h6), оптимизация изображений через CSS, быстрая загрузка критического CSS, улучшение пользовательского опыта. Избегать скрытия контента через display: none для SEO.",
        difficulty: "easy"
      },
      {
        id: "css-29",
        question: "Что такое 'гибкая' (fluid) и 'фиксированная' (fixed) верстка? Какие преимущества и недостатки каждого подхода?",
        answer: "Гибкая - размеры в относительных единицах (%), адаптируется к экрану. Преимущества: адаптивность, широкий охват. Недостатки: сложность контроля макета.<br/>Фиксированная - размеры в px, постоянные. Преимущества: полный контроль. Недостатки: неадаптивность, проблемы на мобильных.",
        difficulty: "easy"
      },
      {
        id: "css-30",
        question: "Какие методы обеспечивают поддержку многоязычности и локализации с использованием CSS?",
        answer: "Адаптивные шрифты для разных языков, свойства text-align и direction (для RTL языков), локализованные стили через атрибут lang, селекторы языка ([lang='en']), разные классы для регионов, псевдоэлементы :lang() для специфичных стилей, гибкая верстка для текстов разной длины.",
        difficulty: "easy"
      },
      {
        id: "css-31",
        question: "Какие преимущества имеет использование методологии CSS-in-JS по сравнению с обычными CSS файлами?",
        answer: "Локализация стилей внутри компонентов, избежание конфликтов, динамические стили на основе состояния, автоматическая оптимизация и минимизация, изоляция компонентов, легкость темизации, переиспользование стилей с компонентами.<br/>Недостатки: дополнительная сложность, требует обучения.",
        difficulty: "easy"
      },
      {
        id: "css-32",
        question: "Что такое 'переполнение контейнера' (overflow) и как управлять им при разработке интерфейса?",
        answer: "Ситуация, когда содержимое выходит за границы элемента. Управление через overflow со значениями: visible (виден за границами), hidden (скрыт), scroll (полосы прокрутки всегда), auto (полосы при необходимости). Также overflow-x, overflow-y для отдельных осей.",
        difficulty: "easy"
      },
      {
        id: "css-33",
        question: "Как работают CSS-градиенты и какие типы градиентов существуют?",
        answer: "Градиенты создают плавные переходы между цветами.<br/>Типы: linear-gradient (линейный вдоль оси), radial-gradient (радиальный от центра), conic-gradient (конический вокруг точки), repeating-linear-gradient и repeating-radial-gradient (повторяющиеся). Задаются через background или background-image.",
        difficulty: "easy"
      },
      {
        id: "css-34",
        question: "Что такое 'респонсивные изображения' и как обеспечить их корректную загрузку на разных устройствах?",
        answer: "Изображения, адаптирующиеся к разным экранам.<br/>Методы: атрибут srcset (список изображений разных размеров), sizes (размеры для разных экранов), элемент picture (разные источники для сценариев), CSS с max-width: 100% и height: auto, медиазапросы для background-image.",
        difficulty: "easy"
      },
      {
        id: "css-35",
        question: "Какие новые возможности по работе с текстом были добавлены в CSS3?",
        answer: "@font-face для подключения шрифтов, text-shadow для теней, word-wrap и overflow-wrap для переноса, text-overflow для обрезки, hyphens для переносов, letter-spacing и word-spacing, text-align-last, text-transform, writing-mode для направления текста, font-feature-settings для функций шрифтов.",
        difficulty: "easy"
      },
      {
        id: "css-36",
        question: "Что такое 'медиа-запросы' (media queries) и как они используются для создания адаптивного дизайна?",
        answer: "Техника применения стилей на основе характеристик устройства (ширина экрана, ориентация, разрешение). Используются в @media правилах.<br/>Пример: @media (max-width: 768px) { ... } применит стили для экранов до 768px. Основа адаптивного дизайна для разных устройств.",
        difficulty: "easy"
      },
      {
        id: "css-37",
        question: "Какие способы вертикального выравнивания элементов в CSS вы знаете?",
        answer: "Flexbox (align-items: center), CSS Grid (align-items: center), position: absolute + transform: translateY(-50%), display: table-cell + vertical-align: middle, псевдоэлемент ::before с vertical-align, margin: auto во Flexbox. Выбор метода зависит от контекста и структуры макета.",
        difficulty: "easy"
      },
      {
        id: "css-38",
        question: "Что такое 'плавающие элементы' (floats) в CSS и как они влияют на макет?",
        answer: "Float позволяет элементам 'плавать' по краям, обтекаясь текстом. Использовались для многоколоночных макетов.<br/>Проблемы: схлопывание высоты контейнера, сложность с доступностью.<br/>Сегодня вместо float рекомендуется Flexbox и Grid, которые более предсказуемы и мощны.",
        difficulty: "easy"
      },
      {
        id: "css-39",
        question: "Какие преимущества и недостатки имеют иконочные шрифты по сравнению с SVG иконками?",
        answer: "Иконочные шрифты: легкость использования, простое изменение размера/цвета, спрайты. Недостатки: ограниченность деталей, один цвет.<br/>SVG: высокая детализация, множество цветов, анимации, масштабируемость. Недостатки: сложность внедрения, больший размер файлов. SVG предпочтительнее для сложных иконок.",
        difficulty: "easy"
      },
      {
        id: "css-40",
        question: "Что такое 'сгенерированный контент' (generated content) и как он может использоваться в CSS?",
        answer: "Контент, добавляемый через ::before и ::after псевдоэлементы с помощью свойства content. Используется для: декоративных элементов, иконок, стрелок, меток, числовых списков без изменения HTML. Важно учитывать доступность - декоративный контент не должен влиять на семантику.",
        difficulty: "easy"
      },
      {
        id: "css-41",
        question: "Как работает система единиц измерения rem в CSS? В чем её преимущества перед px и em?",
        answer: "rem (root em) - относительная единица от размера шрифта корневого элемента html.<br/>Преимущества: предсказуемость (не зависит от вложенности как em), избежание каскада размеров, универсальность, простота масштабирования всей страницы через изменение root, доступность (пользователи могут менять размер).",
        difficulty: "easy"
      },
      {
        id: "css-42",
        question: "Что такое 'скользящий эффект' (parallax) в веб-дизайне и как его реализовать с помощью CSS?",
        answer: "Эффект, когда элементы движутся с разной скоростью при прокрутке, создавая глубину.<br/>Реализация: background-attachment: fixed для фона, transform с perspective, псевдоэлементы с разным позиционированием. Можно комбинировать с JavaScript для более сложных эффектов. Важно учитывать производительность.",
        difficulty: "easy"
      },
      {
        id: "css-43",
        question: "Как работают фильтры в CSS и какие виды фильтров существуют?",
        answer: "Свойство filter применяет визуальные эффекты к элементам.<br/>Виды: brightness (яркость), contrast (контрастность), saturate (насыщенность), blur (размытие), hue-rotate (поворот тона), invert (инверсия), opacity (прозрачность), sepia (сепия), drop-shadow (тень).<br/>Пример: filter: brightness(150%).",
        difficulty: "easy"
      },
      {
        id: "css-44",
        question: "Что такое 'каскадность' (cascading) в CSS и какие приоритеты применения стилей в селекторах?",
        answer: "Каскадность - механизм определения, какой стиль применить при конфликтах.<br/>Приоритеты: 1) !important (наивысший), 2) специфичность селектора (ID > class > element), 3) порядок в коде (последний побеждает), 4) происхождение (inline > internal > external). Понимание каскадности критично для управления стилями.",
        difficulty: "easy"
      },
      {
        id: "css-45",
        question: "Какие методы оптимизации загрузки CSS на веб-странице вы знаете?",
        answer: "Минификация и сжатие CSS, комбинирование файлов, асинхронная загрузка (async), отложенная загрузка (defer), критический CSS inline в head, кэширование с правильными заголовками, сжатие GZIP/Brotli, удаление неиспользуемых стилей, медиазапросы для условной загрузки, использование CDN.",
        difficulty: "easy"
      },
      {
        id: "css-46",
        question: "Что такое 'доступность первого взгляда' (First Meaningful Paint) и как CSS может повлиять на этот показатель?",
        answer: "FMP - время отображения основного контента, понятного пользователю.<br/>CSS влияет через: загрузку критических стилей inline, отложенную загрузку некритических, минификацию, уменьшение блокирующего рендеринга, оптимизацию изображений, сокрытие невидимых элементов. Быстрый FMP улучшает пользовательский опыт.",
        difficulty: "easy"
      },
      {
        id: "css-47",
        question: "Как использовать псевдокласс :not() для выбора элементов, которые НЕ соответствуют определенному селектору?",
        answer: "Синтаксис: :not(selector) { стили }<br/>Пример: p:not(.special) выберет все p кроме тех, у которых класс special.<br/>Ограничения: можно указать только один селектор внутри :not(), элементы внутри выбранного селектора также исключаются. Мощный инструмент для инверсного выбора.",
        difficulty: "easy"
      },
      {
        id: "css-48",
        question: "Что такое 'градиентные переходы' (gradient transitions) в CSS и как их создать с помощью анимаций?",
        answer: "Плавные переходы между разными состояниями градиента.<br/>Создание: используйте @keyframes с изменением background-image от одного gradient к другому, примените через animation.<br/>Пример: @keyframes gradient-transition { 0% { linear-gradient(red, blue) } 100% { linear-gradient(yellow, green) } }",
        difficulty: "easy"
      },
      {
        id: "css-49",
        question: "Какие методы сглаживания шрифтов существуют в CSS и как они влияют на внешний вид текста?",
        answer: "Основные методы: антиалиасинг (стандартный, плавные переходы между цветами), сглаживающее поднятие (теневые эффекты для жирности), пиксельное сглаживание (четкие пиксельные края).<br/>Выбор метода зависит от браузера и ОС. Браузеры обычно автоматически применяют оптимальный метод.",
        difficulty: "easy"
      },
      {
        id: "css-50",
        question: "Что такое 'медиа-типы' (media types) в CSS и для чего они используются?",
        answer: "Спецификации для определения типа устройства: screen (экраны), print (печать), speech (голосовые браузеры), all (все типы).<br/>Используются в @media правилах: @media print { ... } для печати.<br/>Позволяют адаптировать стили к разным контекстам использования.",
        difficulty: "easy"
      },
      {
        id: "css-51",
        question: "Как работает псевдоэлемент ::first-letter и как его использовать для стилизации первой буквы абзаца?",
        answer: "::first-letter стилизует первую букву элемента.<br/>Пример: p::first-letter { font-size: 2em; color: red; }<br/>Ограничения: применяется только к первой букве первого элемента, ограничен базовыми свойствами (размер, цвет, фон). Поддержка может различаться в браузерах.",
        difficulty: "easy"
      },
      {
        id: "css-52",
        question: "Что такое 'вложенные селекторы' (nested selectors) в CSS и как они используются?",
        answer: "Описание иерархии элементов для лучшей организации кода (в препроцессорах).<br/>Пример в Sass: .nav { ul { li { ... } } }<br/>Преимущества: читаемость, локальная область видимости, уменьшение повторений.<br/>Важно: избегать слишком глубокой вложенности (более 3-4 уровней).",
        difficulty: "easy"
      },
      {
        id: "css-53",
        question: "Как можно реализовать эффект 'скользящей шапки' (sticky header) с помощью CSS?",
        answer: "Используйте position: sticky с top: 0.<br/>Пример: .header { position: sticky; top: 0; z-index: 100; }<br/>Элемент остается видимым при прокрутке. Поддержка может различаться в старых браузерах, для них может понадобиться JavaScript fallback.",
        difficulty: "easy"
      },
      {
        id: "css-54",
        question: "Что такое 'CSS-перехватчики' (CSS Houdini) и какие API они предоставляют для расширения CSS?",
        answer: "Набор API для создания собственных CSS-модулей и расширения возможностей CSS.<br/>API: Paint API (кастомное рисование), Layout API (контроль расположения), Animation API (кастомные анимации), Typed OM API (доступ к DOM в CSS), Font Metrics API. Открывает новые возможности для сложных эффектов.",
        difficulty: "easy"
      },
      {
        id: "css-55",
        question: "Какие свойства в CSS используются для управления текстовым оформлением?",
        answer: "font-family, font-size, font-weight, font-style, text-align, line-height, letter-spacing, word-spacing, text-decoration, text-transform, color, text-shadow, white-space, vertical-align, text-overflow. Комбинирование этих свойств создает разнообразные стили текста.",
        difficulty: "easy"
      },
      {
        id: "css-56",
        question: "Что такое 'псевдоэлемент ::marker' и как он используется для стилизации маркеров списков?",
        answer: "::marker стилизует маркеры элементов списка li.<br/>Пример: li::marker { content: '→'; color: blue; font-weight: bold; }<br/>Позволяет создавать кастомные маркеры. Поддержка ограничена в некоторых браузерах, проверяйте совместимость на Can I use.",
        difficulty: "easy"
      },
      {
        id: "css-57",
        question: "Как создать анимацию 'плавное появление' (fade-in) элемента при загрузке страницы с помощью CSS?",
        answer: "Используйте opacity с transition или animation.<br/>CSS: .element { opacity: 0; transition: opacity 1s; }<br/>JavaScript: setTimeout(() => element.classList.add('show'), 100);<br/>CSS: .element.show { opacity: 1; }<br/>Или через @keyframes с animation от opacity: 0 до 1.",
        difficulty: "easy"
      },
      {
        id: "css-58",
        question: "Что такое 'границы' (box sizing) в CSS и какие значения они могут иметь?",
        answer: "box-sizing определяет, как вычисляется общая ширина/высота элемента.<br/>content-box (default): размер = content, padding и border добавляются.<br/>border-box: размер включает content, padding и border.<br/>border-box упрощает контроль размеров, рекомендуется для современной верстки.",
        difficulty: "easy"
      },
      {
        id: "css-59",
        question: "Какие методы 'обнуления стилей' (CSS resets) существуют и для чего они используются?",
        answer: "Методы для стандартизации отображения в разных браузерах:<br/>Eric Meyer's Reset (полный сброс), Normalize.css (нормализация с сохранением полезных стилей), Reset.css (радикальный сброс), Reboot (Bootstrap).<br/>Цель: предсказуемость, кросс-браузерность, сокращение времени разработки.",
        difficulty: "easy"
      },
      {
        id: "css-60",
        question: "Что такое 'селекторы состояний' (state selectors) в CSS и как они используются для стилизации интерактивных элементов?",
        answer: "Псевдоклассы для стилей в зависимости от состояния: :hover (наведение), :active (активация), :focus (фокус), :visited (посещенные ссылки), :disabled (отключено), :checked (выбрано).<br/>Пример: .button:hover { background: blue; }<br/>Делают интерфейсы более интерактивными и отзывчивыми.",
        difficulty: "easy"
      },
      {
        id: "css-61",
        question: "Как работает свойство will-change и в каких случаях оно может быть полезным?",
        answer: "will-change предупреждает браузер о предстоящих изменениях для оптимизации.<br/>Пример: .element { will-change: transform, opacity; }<br/>Полезно для: анимаций, трансформаций, скроллинга, параллакса, сложных DOM структур.<br/>Важно: использовать осторожно, только когда необходимо, иначе может ухудшить производительность.",
        difficulty: "easy"
      },
      {
        id: "css-62",
        question: "Что такое 'полифиллы' (polyfills) в контексте CSS и зачем они используются?",
        answer: "Код для поддержки новых CSS-функций в старых браузерах.<br/>Примеры: полифиллы для Flexbox, Grid, CSS-переменных, анимаций в старых IE.<br/>Используются для обеспечения совместимости. Недостатки: дополнительная нагрузка на загрузку и производительность. Применять разумно.",
        difficulty: "easy"
      },
      {
        id: "css-63",
        question: "Как работает свойство clip-path и как оно может быть использовано для создания необычных форм элементов?",
        answer: "clip-path создает обрезанные области вокруг элемента.<br/>Значения: геометрические формы (circle, ellipse), polygon() для многоугольников, URL на SVG-маску.<br/>Пример: clip-path: polygon(50% 0%, 0% 100%, 100% 100%); создаст треугольник.<br/>Поддержка различается в браузерах.",
        difficulty: "easy"
      },
      {
        id: "css-64",
        question: "Что такое 'комбинаторы соседства' (adjacent sibling combinators) в CSS и как они применяются для стилизации элементов на одном уровне вложенности?",
        answer: "+ (плюс) - выбирает элемент сразу после указанного. Пример: h1 + p { ... } выберет первый p после h1.<br/>~ (тильда) - выбирает все элементы после указанного на том же уровне. Пример: h1 ~ p выберет все p после h1.",
        difficulty: "easy"
      },
      {
        id: "css-65",
        question: "Как создать анимацию с эффектом 'параллакса' (parallax scrolling) с использованием CSS?",
        answer: "Методы: background-attachment: fixed для фона, transform с perspective и translate3d, разные слои с position.<br/>Пример: .parallax { background-attachment: fixed; background-size: cover; }<br/>Можно комбинировать с JavaScript для более сложных эффектов. Учитывайте производительность.",
        difficulty: "easy"
      },
      {
        id: "css-66",
        question: "Что такое 'селекторы атрибутов' (attribute selectors) и как они используются для выбора элементов по атрибутам?",
        answer: "[attribute] - элементы с атрибутом: a[target]<br/>[attribute=value] - с конкретным значением: a[target='_blank']<br/>[attribute^=value] - начинается с: img[src^='icon_']<br/>[attribute$=value] - заканчивается на<br/>[attribute*=value] - содержит.<br/>Полезны для стилизации по состоянию или типу.",
        difficulty: "easy"
      },
      {
        id: "css-67",
        question: "Какие методы подходят для создания анимации в CSS, помимо @keyframes?",
        answer: "transition - плавные переходы между состояниями при изменении свойств.<br/>transform - трансформации (rotate, scale, translate) с transition.<br/>animation - с параметрами без @keyframes.<br/>Комбинирование методов создает сложные эффекты. transition проще, но менее гибок чем @keyframes.",
        difficulty: "easy"
      },
      {
        id: "css-68",
        question: "Что такое 'CSS Grid Layout' и какие особенности этой системы сеток?",
        answer: "Мощная система для двумерных сеток.<br/>Особенности: контроль строк и столбцов одновременно, точное позиционирование (grid-row, grid-column), автоматическое распределение, фракции (fr), minmax(), медиазапросы для адаптивности, gap для промежутков. Идеален для сложных макетов.",
        difficulty: "easy"
      },
      {
        id: "css-69",
        question: "Каким образом можно создать адаптивные иконки с использованием CSS?",
        answer: "Методы: background-image с background-size и медиазапросами, SVG с viewBox (масштабируются), иконочные шрифты с font-size.<br/>Пример SVG: width: 100%; height: auto; fill: currentColor;<br/>SVG предпочтительнее - масштабируемость без потери качества, легко менять цвет.",
        difficulty: "easy"
      },
      {
        id: "css-70",
        question: "Что такое 'миксины' (mixins) в препроцессорах CSS и как они используются?",
        answer: "Переиспользуемые блоки стилей в Sass/Less.<br/>Sass: @mixin button-style { ... } затем @include button-style;<br/>Less: .button-style() { ... } затем .button-style();<br/>Могут принимать параметры для гибкости. Упрощают поддержку, сокращают дублирование кода.",
        difficulty: "easy"
      },
      {
        id: "css-71",
        question: "Какие методы обеспечения безопасности (security) применяются к CSS?",
        answer: "Экранирование и фильтрация пользовательского ввода, отсутствие чувствительных данных в CSS, CSP (Content Security Policy) заголовки, санирование стилей, минимизация !important, обновление библиотек, правильные разрешения на файлы, HTTPS для защиты передачи. Предотвращение CSS-инъекций и XSS.",
        difficulty: "easy"
      },
      {
        id: "css-72",
        question: "Что такое 'контентные контроли' (content control) в CSS и как они могут использоваться для создания интерактивных элементов?",
        answer: "Стилизованные элементы форм (checkbox, radio, range) для интерактивности без JavaScript.<br/>Используется appearance: none для сброса стандартных стилей, затем кастомная стилизация.<br/>Псевдоэлементы (::before, ::-webkit-slider-thumb) для деталей. Поддержка различается в браузерах.",
        difficulty: "easy"
      },
      {
        id: "css-73",
        question: "Как можно создать горизонтальное меню навигации с использованием CSS?",
        answer: "Методы: display: flex с justify-content для выравнивания, display: inline-block для li, float (устаревший).<br/>Пример Flexbox: .menu { display: flex; } .menu li { margin: 0 15px; }<br/>Flexbox - современный подход, проще и гибче.",
        difficulty: "easy"
      },
      {
        id: "css-74",
        question: "Что такое 'спрайты' (sprites) в CSS и как они используются для управления изображениями?",
        answer: "Объединение множества маленьких изображений в одно большое для оптимизации.<br/>Используется background-image с background-position для показа нужной части.<br/>Преимущества: сокращение HTTP-запросов, быстрая загрузка, лучшее кэширование. Сегодня часто заменяется SVG-спрайтами.",
        difficulty: "easy"
      },
      {
        id: "css-75",
        question: "Какие методы улучшения производительности CSS можно применить для снижения времени загрузки страницы?",
        answer: "Минификация и сжатие, комбинирование файлов, критический CSS inline, удаление неиспользуемого кода, спрайты, отложенная загрузка, кэширование, GZIP/Brotli сжатие, упрощение селекторов, системные шрифты, CDN, медиазапросы для условной загрузки.",
        difficulty: "easy"
      },
      {
        id: "css-76",
        question: "Что такое 'семантическая верстка' (semantic markup) в CSS и как она влияет на поисковую оптимизацию (SEO)?",
        answer: "Использование HTML-тегов по смыслу (header, nav, main, article, footer) с соответствующей CSS-стилизацией.<br/>Влияние на SEO: поисковики лучше понимают структуру, улучшается доступность, правильная иерархия заголовков, определение ключевых элементов. Повышает релевантность в поиске.",
        difficulty: "easy"
      },
      {
        id: "css-77",
        question: "Как можно реализовать анимацию появления (fade-in) элементов при прокрутке страницы с помощью CSS и JavaScript?",
        answer: "CSS: opacity: 0 и transition: opacity 1s.<br/>JavaScript: Intersection Observer отслеживает видимость элемента, при появлении добавляет класс с opacity: 1.<br/>Пример: if (entry.intersectionRatio > 0) { entry.target.style.opacity = '1'; }<br/>Более гибко чем чистый CSS.",
        difficulty: "easy"
      },
      {
        id: "css-78",
        question: "Что такое 'псевдокласс :focus' и как он используется для стилизации элементов при получении ими фокуса?",
        answer: ":focus применяется когда элемент получает фокус (клик или Tab).<br/>Пример: input:focus { border: 2px solid blue; outline: none; }<br/>Важно для доступности - пользователи клавиатуры должны видеть, где фокус. Не удаляйте outline без замены визуального индикатора.",
        difficulty: "easy"
      },
      {
        id: "css-79",
        question: "Как создать анимацию 'пульсации' (pulse) элемента с помощью CSS?",
        answer: "@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } }<br/>.element { animation: pulse 2s infinite; }<br/>Изменяет размер и прозрачность циклически. Можно настроить параметры для желаемого эффекта.",
        difficulty: "easy"
      },
      {
        id: "css-80",
        question: "Что такое 'переменные окружения' (environment variables) в препроцессорах CSS и как они могут быть полезны для настройки стилей?",
        answer: "Именованные значения вне файлов стилей для гибкой настройки.<br/>Sass: $primary-color: #007bff; затем color: $primary-color;<br/>Преимущества: модульность, легкость изменений в одном месте, адаптация к разным средам (dev/prod), централизованная настройка тем.",
        difficulty: "easy"
      },
      {
        id: "css-81",
        question: "Каким образом можно стилизовать формы (input, textarea, select) с использованием CSS?",
        answer: "Изменение фона, границ, шрифтов через базовые свойства. При фокусе: border-color, box-shadow, outline: none (с заменой). Кастомные элементы: appearance: none, затем своя стилизация. Для select: псевдоэлементы для стрелки. Учитывать доступность и UX.",
        difficulty: "easy"
      },
      {
        id: "css-82",
        question: "Что такое 'анимации ключевых кадров' (keyframe animations) в CSS и как они работают?",
        answer: "Плавные переходы между состояниями через @keyframes.<br/>Процесс: 1) Определить ключевые кадры (@keyframes name { 0% {...} 100% {...} }), 2) Применить через animation: name 2s infinite.<br/>Браузер интерполирует значения между кадрами. Гибче transition.",
        difficulty: "easy"
      },
      {
        id: "css-83",
        question: "Какие свойства CSS используются для управления внешними отступами и полями элементов?",
        answer: "margin - внешний отступ (margin-top, margin-right, margin-bottom, margin-left).<br/>padding - внутренний отступ (padding-top, padding-right, padding-bottom, padding-left).<br/>Сокращенная запись: margin: 10px 20px 15px 5px (верх, право, низ, лево).<br/>margin: 10px 20px (верх/низ, лево/право).",
        difficulty: "easy"
      },
      {
        id: "css-84",
        question: "Что такое 'флекс-контейнер' (flex container) и 'флекс-элементы' (flex items) в контексте CSS Flexbox?",
        answer: "Флекс-контейнер - родительский элемент с display: flex или inline-flex.<br/>Флекс-элементы - прямые дочерние элементы контейнера, автоматически становятся гибкими.<br/>Контейнер управляет расположением элементов вдоль главной и поперечной осей. Мощный инструмент для одномерных макетов.",
        difficulty: "easy"
      },
      {
        id: "css-85",
        question: "Как можно выровнять элементы по вертикали с использованием CSS?",
        answer: "Flexbox: display: flex; align-items: center.<br/>Grid: display: grid; align-items: center.<br/>Position: position: absolute; top: 50%; transform: translateY(-50%).<br/>Table: display: table-cell; vertical-align: middle.<br/>Margin auto во Flexbox.<br/>Выбор зависит от контекста.",
        difficulty: "easy"
      },
      {
        id: "css-86",
        question: "Что такое 'гибридные сетки' (hybrid grids) в CSS и как они могут быть использованы для создания сложных макетов?",
        answer: "Комбинирование Grid и Flexbox в одном макете.<br/>Подход: Grid для основной структуры страницы, Flexbox внутри ячеек для контента.<br/>Преимущества: гибкость, адаптивность, использование сильных сторон обеих технологий. Усложняет поддержку, но эффективен для сложных интерфейсов.",
        difficulty: "easy"
      },
      {
        id: "css-87",
        question: "Как работает 'вендорное префиксирование' (vendor prefixes) и зачем оно используется в CSS?",
        answer: "Добавление префиксов (-webkit-, -moz-, -ms-, -o-) к экспериментальным свойствам для разных браузеров.<br/>Пример: -webkit-transform, -moz-transform, transform.<br/>Цель: тестирование новых функций, совместимость. Сегодня менее актуально, используйте Autoprefixer для автоматизации.",
        difficulty: "easy"
      },
      {
        id: "css-88",
        question: "Что такое 'флекс-обёртка' (flex-wrap) в контексте CSS Flexbox и как оно влияет на макет?",
        answer: "flex-wrap определяет перенос элементов на новую строку/столбец.<br/>Значения: nowrap (default, в одну линию), wrap (перенос при необходимости), wrap-reverse (перенос в обратном порядке).<br/>Пример: display: flex; flex-wrap: wrap; - элементы переносятся для адаптивности.",
        difficulty: "easy"
      },
      {
        id: "css-89",
        question: "Как создать адаптивную галерею изображений с использованием CSS?",
        answer: "Flexbox: display: flex; flex-wrap: wrap; justify-content: space-between.<br/>Для items: flex: 1; margin: 10px;<br/>Для img: width: 100%; height: auto;<br/>Grid альтернатива: display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)).<br/>Медиазапросы для дополнительной адаптивности.",
        difficulty: "easy"
      },
      {
        id: "css-90",
        question: "Что такое 'базовые стили' (normalize.css, reset.css) и какое их значение для веб-разработки?",
        answer: "Стандартизация отображения элементов в разных браузерах.<br/>Reset.css - полный сброс стилей браузера.<br/>Normalize.css - нормализация с сохранением полезных стилей.<br/>Значение: предсказуемость, кросс-браузерность, сокращение времени разработки, основа для дизайна. Normalize более популярен сегодня.",
        difficulty: "easy"
      },
      {
        id: "css-91",
        question: "Как работает 'переполнение по контенту' (content overflow) и как его контролировать с помощью CSS?",
        answer: "Когда содержимое превышает размеры элемента.<br/>Контроль через overflow: visible (виден), hidden (скрыт), scroll (полосы всегда), auto (полосы при необходимости).<br/>Также overflow-x, overflow-y для осей.<br/>Важно для UX - правильный контроль обеспечивает доступность контента.",
        difficulty: "easy"
      },
      {
        id: "css-92",
        question: "Что такое 'критический путь рендеринга' (Critical Rendering Path) и как CSS может влиять на него?",
        answer: "Последовательность шагов браузера для отображения: загрузка, DOM, CSSOM, рендер-дерево, макет, отрисовка.<br/>CSS влияет: блокирующая загрузка, критический CSS inline, минификация, асинхронная загрузка, сжатие. Оптимизация ускоряет первое отображение контента.",
        difficulty: "easy"
      },
      {
        id: "css-93",
        question: "Каким образом можно создать анимацию текста, меняющего цвет, размер и стиль с помощью CSS?",
        answer: "@keyframes textAnim { 0% { color: red; font-size: 16px; } 50% { color: blue; font-size: 24px; font-weight: bold; } 100% { color: green; font-size: 16px; } }<br/>.text { animation: textAnim 3s infinite; }<br/>Изменяет свойства текста плавно циклически.",
        difficulty: "easy"
      },
      {
        id: "css-94",
        question: "Что такое 'переменные CSS' (CSS variables) и как они используются для упрощения стилизации?",
        answer: "Кастомные свойства для переиспользования значений.<br/>Определение: :root { --main-color: #007bff; }<br/>Использование: color: var(--main-color);<br/>Преимущества: легкость изменений, динамичность через JS, создание тем, модульность. Улучшают поддержку и читаемость кода.",
        difficulty: "easy"
      },
      {
        id: "css-95",
        question: "Как можно создать адаптивные таблицы с использованием CSS?",
        answer: "Методы: гибкая ширина столбцов (%), скрытие столбцов через медиазапросы (display: none), адаптивные ячейки (изменение font-size, text-overflow), горизонтальная прокрутка (overflow-x: auto), псевдоэлементы для заголовков на мобильных. Комбинировать для лучшего UX.",
        difficulty: "easy"
      },
      {
        id: "css-96",
        question: "Что такое 'затенение элементов' (element shadowing) в CSS и как оно может быть использовано для изменения стиля элементов в зависимости от их расположения?",
        answer: "Изменение стиля элементов на основе позиции относительно других.<br/>Пример: .parent:hover .child { transform: translateY(-10px); }<br/>Используется для интерактивных эффектов, подсветки, анимаций при наведении. Создает динамичный интерфейс без JavaScript.",
        difficulty: "easy"
      },
      {
        id: "css-97",
        question: "Каким образом можно создать анимацию 'мерцания' (flicker) элемента с использованием CSS?",
        answer: "@keyframes flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }<br/>.element { animation: flicker 1s infinite; }<br/>.element:hover { animation: none; }<br/>Элемент циклически меняет прозрачность. Можно настроить параметры. Использовать осторожно - может вызывать дискомфорт.",
        difficulty: "easy"
      },
      {
        id: "css-98",
        question: "Что такое 'гибкие изображения' (fluid images) и как они могут быть реализованы с помощью CSS?",
        answer: "Изображения, адаптирующиеся к контейнеру с сохранением пропорций.<br/>Методы: max-width: 100%; height: auto, width: 100%; height: auto, аспектные отношения через padding-bottom, object-fit: cover.<br/>Предотвращают искажение и обеспечивают адаптивность.",
        difficulty: "easy"
      },
      {
        id: "css-99",
        question: "Как создать 'слайдер' (slider) с переключением слайдов с использованием CSS?",
        answer: "Используйте input[type='radio'] со скрытием, связанные label для навигации, :checked для переключения.<br/>CSS: input:checked ~ .slides { transform: translateX(-100%); }<br/>Переключение через transform. Для сложных слайдеров лучше использовать JavaScript.",
        difficulty: "easy"
      },
      {
        id: "css-100",
        question: "Что такое 'горизонтальная прокрутка' (horizontal scrolling) и как её реализовать с помощью CSS?",
        answer: "Прокрутка контента горизонтально при нехватке места.<br/>Реализация: .container { width: 100%; overflow-x: auto; white-space: nowrap; }<br/>Для контента: display: inline-block.<br/>Браузер добавит горизонтальную полосу при необходимости. Полезно для галерей, таблиц, длинного контента.",
        difficulty: "easy"
      }
    ]
  },
  // JS
  {
    id: "javascript",
    name: "JavaScript",
    questions: [
      {
        id: "js-1",
        question: "Какие типы данных существуют в JavaScript?",
        answer: "В JavaScript есть примитивные и ссылочные типы данных.<br/><br/>Примитивные типы:<br/>• Boolean — логические значения true/false<br/>• Null — отсутствие значения<br/>• Undefined — переменная объявлена, но не инициализирована<br/>• Number — числовые значения<br/>• BigInt — целые числа произвольной точности<br/>• String — строки<br/>• Symbol — уникальные идентификаторы<br/><br/>Ссылочные типы:<br/>• Object — коллекции пар ключ-значение<br/>• Function — вызываемые объекты<br/>• Array, Date, RegExp — специальные объекты",
        difficulty: "easy"
      },
      {
        id: "js-2",
        question: "В чём разница между null и undefined?",
        answer: "null — намеренное отсутствие значения:<br/>• Явно присваивается разработчиком<br/>• Означает \"пустое\" или \"несуществующее\" значение<br/>• typeof null возвращает 'object' (историческая ошибка)<br/><br/>undefined — отсутствие инициализации:<br/>• Переменная объявлена, но не инициализирована<br/>• Свойство объекта не существует<br/>• Функция не возвращает значение<br/>• Параметр функции не передан<br/><br/>При сравнении:<br/>• null == undefined // true<br/>• null === undefined // false",
        difficulty: "easy"
      },
      {
        id: "js-3",
        question: "Что такое приведение типов (type coercion)?",
        answer: "Приведение типов — автоматическое преобразование значений из одного типа в другой.<br/><br/>Явное приведение:<br/>• Number('5') // 5<br/>• String(123) // '123'<br/>• Boolean(1) // true<br/><br/>Неявное приведение:<br/>• '5' - 3 // 2 (строка преобразуется в число)<br/>• '5' + 3 // '53' (число преобразуется в строку)<br/>• if ('hello') // true (строка в boolean)<br/><br/>Правила:<br/>• В математических операциях (кроме +) строки → числа<br/>• При конкатенации (+) числа → строки<br/>• В логическом контексте всё → boolean",
        difficulty: "easy"
      },
      {
        id: "js-4",
        question: "Что такое поднятие (hoisting)?",
        answer: "Hoisting — механизм JavaScript, при котором объявления переменных и функций перемещаются в начало их области видимости во время компиляции.<br/><br/>Переменные var:<br/>• Поднимается объявление, но не инициализация<br/>• До инициализации имеют значение undefined<br/><br/>Функции:<br/>• Function declaration поднимается полностью<br/>• Можно вызывать до объявления<br/><br/>let и const:<br/>• Поднимаются, но находятся в temporal dead zone<br/>• Нельзя использовать до объявления<br/>• ReferenceError при попытке доступа<br/><br/>Пример:<br/>console.log(x); // undefined<br/>var x = 5;<br/>sayHi(); // работает<br/>function sayHi() { console.log('Hi'); }",
        difficulty: "medium"
      },
      {
        id: "js-5",
        question: "Какие типы областей видимости существуют в JavaScript?",
        answer: "Глобальная область видимости:<br/>• Переменные доступны везде в программе<br/>• Объявлены вне функций и блоков<br/>• В браузере привязаны к объекту window<br/><br/>Функциональная область видимости:<br/>• Переменные доступны только внутри функции<br/>• var имеет функциональную область видимости<br/><br/>Блочная область видимости (ES6):<br/>• Переменные доступны только внутри блока {}<br/>• let и const имеют блочную область видимости<br/>• Включает циклы, условия, любые блоки кода<br/><br/>Лексическая область видимости:<br/>• Вложенные функции имеют доступ к переменным внешних функций<br/>• Определяется местом написания кода",
        difficulty: "easy"
      },
      {
        id: "js-6",
        question: "В чём разница между == и ===?",
        answer: "== (нестрогое равенство):<br/>• Сравнивает только значения<br/>• Выполняет приведение типов<br/>• '5' == 5 // true<br/>• null == undefined // true<br/>• 0 == false // true<br/><br/>=== (строгое равенство):<br/>• Сравнивает значения и типы<br/>• Без приведения типов<br/>• '5' === 5 // false<br/>• null === undefined // false<br/>• 0 === false // false<br/><br/>Рекомендация:<br/>• Всегда используйте === для предсказуемости<br/>• == только когда нужна проверка null/undefined",
        difficulty: "easy"
      },
      {
        id: "js-7",
        question: "Что такое замыкание (closure)?",
        answer: "Замыкание — функция, имеющая доступ к переменным внешней функции даже после её завершения.<br/><br/>Компоненты замыкания:<br/>• Внешняя функция с локальными переменными<br/>• Внутренняя функция, использующая эти переменные<br/>• Возврат внутренней функции<br/><br/>Пример:<br/>function counter() {<br/>&nbsp;&nbsp;let count = 0;<br/>&nbsp;&nbsp;return function() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return ++count;<br/>&nbsp;&nbsp;};<br/>}<br/>const myCounter = counter();<br/>myCounter(); // 1<br/>myCounter(); // 2<br/><br/>Применение:<br/>• Приватные переменные<br/>• Модульный паттерн<br/>• Обработчики событий<br/>• Каррирование функций",
        difficulty: "medium"
      },
      {
        id: "js-8",
        question: "Как работает ключевое слово this?",
        answer: "this указывает на контекст выполнения функции.<br/><br/>В глобальной области:<br/>• Браузер: window<br/>• Node.js: global<br/>• Строгий режим: undefined<br/><br/>В методе объекта:<br/>• this = объект, вызвавший метод<br/><br/>В обычной функции:<br/>• Нестрогий режим: window/global<br/>• Строгий режим: undefined<br/><br/>В стрелочной функции:<br/>• this берётся из внешнего контекста<br/>• Не имеет собственного this<br/><br/>С call/apply/bind:<br/>• this явно задаётся первым аргументом<br/><br/>В конструкторе (new):<br/>• this = новый создаваемый объект",
        difficulty: "medium"
      },
      {
        id: "js-9",
        question: "В чём разница между обычными и стрелочными функциями?",
        answer: "Синтаксис:<br/>• Обычная: function name() {}<br/>• Стрелочная: () => {}<br/><br/>Контекст this:<br/>• Обычная: собственный this, зависит от вызова<br/>• Стрелочная: наследует this из внешнего контекста<br/><br/>arguments:<br/>• Обычная: имеет объект arguments<br/>• Стрелочная: не имеет arguments<br/><br/>Конструктор:<br/>• Обычная: можно использовать с new<br/>• Стрелочная: нельзя использовать с new<br/><br/>Hoisting:<br/>• Обычная (declaration): поднимается<br/>• Стрелочная: не поднимается<br/><br/>Когда использовать стрелочные:<br/>• Коллбэки и обработчики<br/>• Методы массивов (map, filter)<br/>• Когда нужен внешний this",
        difficulty: "easy"
      },
      {
        id: "js-10",
        question: "Что такое шаблонные литералы (template literals)?",
        answer: "Шаблонные литералы — способ создания строк с использованием обратных кавычек ``.<br/><br/>Возможности:<br/>• Интерполяция выражений: ${variable}<br/>• Многострочные строки без \\n<br/>• Теговые шаблоны для обработки<br/><br/>Примеры:<br/>const name = 'Иван';<br/>const greeting = `Привет, ${name}!`;<br/><br/>const multiline = `<br/>&nbsp;&nbsp;Первая строка<br/>&nbsp;&nbsp;Вторая строка<br/>`;<br/><br/>const calc = `Сумма: ${2 + 2}`;<br/><br/>Преимущества:<br/>• Читаемость кода<br/>• Удобная конкатенация<br/>• Вычисление выражений внутри строк",
        difficulty: "easy"
      },
      {
        id: "js-11",
        question: "Что такое функции высшего порядка?",
        answer: "Функция высшего порядка — функция, которая принимает другие функции как аргументы или возвращает функцию.<br/><br/>Характеристики:<br/>• Принимает функции как параметры<br/>• Возвращает функции как результат<br/>• Или то и другое<br/><br/>Встроенные примеры:<br/>• map() — преобразует элементы<br/>• filter() — фильтрует элементы<br/>• reduce() — сворачивает массив<br/>• forEach() — перебирает элементы<br/>• setTimeout() — отложенное выполнение<br/><br/>Пример создания:<br/>function multiplier(factor) {<br/>&nbsp;&nbsp;return num => num * factor;<br/>}<br/>const double = multiplier(2);<br/>double(5); // 10<br/><br/>Применение:<br/>• Композиция функций<br/>• Каррирование<br/>• Декораторы",
        difficulty: "medium"
      },
      {
        id: "js-12",
        question: "Являются ли функции в JavaScript объектами первого класса?",
        answer: "Да, функции в JavaScript — объекты первого класса (first-class citizens).<br/><br/>Это означает, что функции можно:<br/>• Присваивать переменным<br/>• Передавать как аргументы<br/>• Возвращать из других функций<br/>• Хранить в структурах данных<br/>• Создавать динамически<br/>• Иметь свойства и методы<br/><br/>Примеры:<br/>// Присваивание переменной<br/>const greet = function() { };<br/><br/>// Передача как аргумент<br/>array.map(function(x) { return x * 2; });<br/><br/>// Возврат из функции<br/>function createFunction() {<br/>&nbsp;&nbsp;return function() { };<br/>}<br/><br/>// Свойства функции<br/>greet.customProp = 'value';",
        difficulty: "easy"
      },
      {
        id: "js-13",
        question: "Какие концепции функционального программирования есть в JavaScript?",
        answer: "Основные концепции ФП в JavaScript:<br/><br/>Чистые функции:<br/>• Без побочных эффектов<br/>• Детерминированные результаты<br/>• Не изменяют внешнее состояние<br/><br/>Иммутабельность:<br/>• Не изменять существующие данные<br/>• Создавать новые версии<br/>• Использовать spread, Object.assign()<br/><br/>Функции высшего порядка:<br/>• map, filter, reduce<br/>• Композиция функций<br/>• Каррирование<br/><br/>Рекурсия:<br/>• Альтернатива циклам<br/>• Хвостовая рекурсия<br/><br/>Декларативный стиль:<br/>• Описываем \"что\", а не \"как\"<br/>• Цепочки методов<br/>• Функциональные выражения",
        difficulty: "medium"
      },
      {
        id: "js-14",
        question: "Что такое IIFE (Immediately Invoked Function Expression)?",
        answer: "IIFE — функция, которая выполняется сразу после создания.<br/><br/>Синтаксис:<br/>(function() {<br/>&nbsp;&nbsp;// код<br/>})();<br/><br/>или<br/><br/>(function() {<br/>&nbsp;&nbsp;// код<br/>}());<br/><br/>С параметрами:<br/>(function(name) {<br/>&nbsp;&nbsp;console.log(name);<br/>})('Иван');<br/><br/>Преимущества:<br/>• Изоляция области видимости<br/>• Избежание загрязнения глобальной области<br/>• Создание приватных переменных<br/>• Однократное выполнение кода<br/><br/>Применение:<br/>• Модульный паттерн<br/>• Инициализация приложения<br/>• Полифиллы и плагины<br/>• Избежание конфликтов имён",
        difficulty: "medium"
      },
      {
        id: "js-15",
        question: "Как создать приватные переменные в JavaScript?",
        answer: "Способы создания приватных переменных:<br/><br/>1. Замыкания:<br/>function Counter() {<br/>&nbsp;&nbsp;let count = 0; // приватная<br/>&nbsp;&nbsp;this.increment = () => ++count;<br/>&nbsp;&nbsp;this.getCount = () => count;<br/>}<br/><br/>2. IIFE и модульный паттерн:<br/>const module = (() => {<br/>&nbsp;&nbsp;let private = 0;<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;getPrivate: () => private<br/>&nbsp;&nbsp;};<br/>})();<br/><br/>3. WeakMap для классов:<br/>const privateData = new WeakMap();<br/>class MyClass {<br/>&nbsp;&nbsp;constructor() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;privateData.set(this, {secret: 42});<br/>&nbsp;&nbsp;}<br/>}<br/><br/>4. Символы (условно приватные):<br/>const _private = Symbol('private');<br/>obj[_private] = 'секрет';<br/><br/>5. Приватные поля классов (ES2022):<br/>class MyClass {<br/>&nbsp;&nbsp;#privateField = 42;<br/>}",
        difficulty: "medium"
      },
      {
        id: "js-16",
        question: "Что такое Event Loop и как он работает?",
        answer: "Event Loop — механизм, позволяющий JavaScript выполнять асинхронный код несмотря на однопоточность.<br/><br/>Компоненты:<br/>• Call Stack — стек вызовов функций<br/>• Web APIs — браузерные API (setTimeout, fetch)<br/>• Callback Queue — очередь коллбэков<br/>• Microtask Queue — очередь микрозадач (Promise)<br/>• Event Loop — цикл событий<br/><br/>Порядок выполнения:<br/>1. Синхронный код (Call Stack)<br/>2. Микрозадачи (Promise, queueMicrotask)<br/>3. Макрозадачи (setTimeout, setInterval)<br/><br/>Процесс:<br/>1. Выполняется весь синхронный код<br/>2. Проверяется очередь микрозадач<br/>3. Выполняется одна макрозадача<br/>4. Снова проверяются микрозадачи<br/>5. Цикл повторяется",
        difficulty: "hard"
      },
      {
        id: "js-17",
        question: "Что такое прототипное наследование?",
        answer: "Прототипное наследование — механизм, при котором объекты наследуют свойства и методы от других объектов через цепочку прототипов.<br/><br/>Основные концепции:<br/>• Каждый объект имеет [[Prototype]]<br/>• Доступ через __proto__ или Object.getPrototypeOf()<br/>• Функции имеют свойство prototype<br/><br/>Создание наследования:<br/>function Animal(name) {<br/>&nbsp;&nbsp;this.name = name;<br/>}<br/>Animal.prototype.speak = function() {<br/>&nbsp;&nbsp;console.log(this.name + ' издаёт звук');<br/>};<br/><br/>function Dog(name) {<br/>&nbsp;&nbsp;Animal.call(this, name);<br/>}<br/>Dog.prototype = Object.create(Animal.prototype);<br/>Dog.prototype.constructor = Dog;<br/><br/>ES6 классы:<br/>• Синтаксический сахар над прототипами<br/>• class, extends, super",
        difficulty: "medium"
      },
      {
        id: "js-18",
        question: "В чём разница между var, let и const?",
        answer: "var:<br/>• Функциональная область видимости<br/>• Поднимается с undefined<br/>• Можно переобъявлять<br/>• Можно изменять значение<br/>• Добавляется в window (глобально)<br/><br/>let:<br/>• Блочная область видимости<br/>• Temporal Dead Zone<br/>• Нельзя переобъявлять<br/>• Можно изменять значение<br/>• Не добавляется в window<br/><br/>const:<br/>• Блочная область видимости<br/>• Temporal Dead Zone<br/>• Нельзя переобъявлять<br/>• Нельзя переприсваивать<br/>• Объекты и массивы остаются мутабельными<br/>• Не добавляется в window<br/><br/>Рекомендации:<br/>• Используйте const по умолчанию<br/>• let когда нужно изменить значение<br/>• Избегайте var",
        difficulty: "easy"
      },
      {
        id: "js-19",
        question: "Что такое деструктуризация?",
        answer: "Деструктуризация — синтаксис для извлечения значений из массивов и объектов в отдельные переменные.<br/><br/>Массивы:<br/>const [a, b] = [1, 2];<br/>const [first, ...rest] = [1, 2, 3, 4];<br/>const [x, , z] = [1, 2, 3]; // пропуск<br/><br/>Объекты:<br/>const {name, age} = person;<br/>const {name: userName} = user; // переименование<br/>const {name = 'Guest'} = user; // значение по умолчанию<br/><br/>Вложенная деструктуризация:<br/>const {address: {city}} = person;<br/><br/>В параметрах функции:<br/>function greet({name, age}) {<br/>&nbsp;&nbsp;console.log(name, age);<br/>}<br/><br/>Обмен значениями:<br/>[a, b] = [b, a];",
        difficulty: "easy"
      },
      {
        id: "js-20",
        question: "Что такое spread и rest операторы?",
        answer: "Spread (...) — разворачивает итерируемые объекты:<br/><br/>Массивы:<br/>const arr = [1, 2, 3];<br/>const newArr = [...arr, 4, 5];<br/>const copy = [...arr];<br/>Math.max(...arr);<br/><br/>Объекты:<br/>const obj = {a: 1, b: 2};<br/>const newObj = {...obj, c: 3};<br/>const clone = {...obj};<br/><br/>Rest (...) — собирает остаточные элементы:<br/><br/>В функциях:<br/>function sum(...numbers) {<br/>&nbsp;&nbsp;return numbers.reduce((a, b) => a + b);<br/>}<br/><br/>В деструктуризации:<br/>const [first, ...rest] = [1, 2, 3, 4];<br/>const {a, ...others} = {a: 1, b: 2, c: 3};<br/><br/>Отличия:<br/>• Spread разворачивает<br/>• Rest собирает",
        difficulty: "easy"
      },
      {
        id: "js-21",
        question: "Что такое Promise и как с ними работать?",
        answer: "Promise — объект для работы с асинхронными операциями.<br/><br/>Состояния:<br/>• Pending — ожидание<br/>• Fulfilled — выполнено успешно<br/>• Rejected — отклонено с ошибкой<br/><br/>Создание:<br/>const promise = new Promise((resolve, reject) => {<br/>&nbsp;&nbsp;if (success) resolve(value);<br/>&nbsp;&nbsp;else reject(error);<br/>});<br/><br/>Использование:<br/>promise<br/>&nbsp;&nbsp;.then(result => console.log(result))<br/>&nbsp;&nbsp;.catch(error => console.error(error))<br/>&nbsp;&nbsp;.finally(() => console.log('Готово'));<br/><br/>Методы:<br/>• Promise.all() — все промисы<br/>• Promise.race() — первый выполненный<br/>• Promise.allSettled() — все результаты<br/>• Promise.any() — первый успешный",
        difficulty: "medium"
      },
      {
        id: "js-22",
        question: "Что такое async/await?",
        answer: "Async/await — синтаксический сахар для работы с промисами.<br/><br/>async функция:<br/>• Всегда возвращает Promise<br/>• Позволяет использовать await внутри<br/><br/>await:<br/>• Приостанавливает выполнение до разрешения промиса<br/>• Работает только в async функциях<br/>• Возвращает результат промиса<br/><br/>Пример:<br/>async function fetchData() {<br/>&nbsp;&nbsp;try {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch(url);<br/>&nbsp;&nbsp;&nbsp;&nbsp;const data = await response.json();<br/>&nbsp;&nbsp;&nbsp;&nbsp;return data;<br/>&nbsp;&nbsp;} catch (error) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.error(error);<br/>&nbsp;&nbsp;}<br/>}<br/><br/>Преимущества:<br/>• Читаемый синхронный стиль<br/>• Удобная обработка ошибок<br/>• Избежание callback hell",
        difficulty: "medium"
      },
      {
        id: "js-23",
        question: "Как работают методы call, apply и bind?",
        answer: "call() — вызывает функцию с заданным this:<br/>func.call(thisArg, arg1, arg2);<br/>• Аргументы передаются через запятую<br/>• Вызывает функцию сразу<br/><br/>apply() — вызывает функцию с заданным this:<br/>func.apply(thisArg, [arg1, arg2]);<br/>• Аргументы передаются массивом<br/>• Вызывает функцию сразу<br/><br/>bind() — создаёт новую функцию с привязанным this:<br/>const newFunc = func.bind(thisArg, arg1, arg2);<br/>• Возвращает новую функцию<br/>• Не вызывает сразу<br/>• Можно частично применять аргументы<br/><br/>Примеры:<br/>const person = { name: 'Иван' };<br/>function greet(greeting) {<br/>&nbsp;&nbsp;console.log(`${greeting}, ${this.name}`);<br/>}<br/>greet.call(person, 'Привет');<br/>greet.apply(person, ['Привет']);<br/>const boundGreet = greet.bind(person);<br/>boundGreet('Привет');",
        difficulty: "medium"
      },
      {
        id: "js-24",
        question: "Что такое каррирование функций?",
        answer: "Каррирование — преобразование функции с множественными аргументами в последовательность функций с одним аргументом.<br/><br/>Обычная функция:<br/>function add(a, b, c) {<br/>&nbsp;&nbsp;return a + b + c;<br/>}<br/>add(1, 2, 3); // 6<br/><br/>Каррированная функция:<br/>function curry(a) {<br/>&nbsp;&nbsp;return function(b) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return function(c) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a + b + c;<br/>&nbsp;&nbsp;&nbsp;&nbsp;};<br/>&nbsp;&nbsp;};<br/>}<br/>curry(1)(2)(3); // 6<br/><br/>Универсальное каррирование:<br/>const curry = (fn) => {<br/>&nbsp;&nbsp;return function curried(...args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (args.length >= fn.length) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return fn.apply(this, args);<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;return (...nextArgs) => curried(...args, ...nextArgs);<br/>&nbsp;&nbsp;};<br/>};<br/><br/>Применение:<br/>• Частичное применение функций<br/>• Переиспользование логики<br/>• Композиция функций",
        difficulty: "hard"
      },
      {
        id: "js-25",
        question: "Что такое мемоизация?",
        answer: "Мемоизация — техника оптимизации, сохраняющая результаты вызовов функции для повторного использования.<br/><br/>Простая мемоизация:<br/>function memoize(fn) {<br/>&nbsp;&nbsp;const cache = {};<br/>&nbsp;&nbsp;return function(...args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;const key = JSON.stringify(args);<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (key in cache) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return cache[key];<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;const result = fn.apply(this, args);<br/>&nbsp;&nbsp;&nbsp;&nbsp;cache[key] = result;<br/>&nbsp;&nbsp;&nbsp;&nbsp;return result;<br/>&nbsp;&nbsp;};<br/>}<br/><br/>Пример использования:<br/>const fibonacci = memoize(n => {<br/>&nbsp;&nbsp;if (n <= 1) return n;<br/>&nbsp;&nbsp;return fibonacci(n - 1) + fibonacci(n - 2);<br/>});<br/><br/>Когда применять:<br/>• Чистые функции<br/>• Дорогие вычисления<br/>• Частые повторные вызовы<br/>• Рекурсивные алгоритмы",
        difficulty: "hard"
      },
      {
        id: "js-26",
        question: "Что такое генераторы в JavaScript?",
        answer: "Генераторы — функции, которые могут приостанавливать и возобновлять выполнение.<br/><br/>Синтаксис:<br/>function* generator() {<br/>&nbsp;&nbsp;yield 1;<br/>&nbsp;&nbsp;yield 2;<br/>&nbsp;&nbsp;return 3;<br/>}<br/><br/>const gen = generator();<br/>gen.next(); // {value: 1, done: false}<br/>gen.next(); // {value: 2, done: false}<br/>gen.next(); // {value: 3, done: true}<br/><br/>Бесконечные последовательности:<br/>function* infiniteNumbers() {<br/>&nbsp;&nbsp;let i = 0;<br/>&nbsp;&nbsp;while (true) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;yield i++;<br/>&nbsp;&nbsp;}<br/>}<br/><br/>Итерация:<br/>for (const value of generator()) {<br/>&nbsp;&nbsp;console.log(value); // 1, 2<br/>}<br/><br/>Применение:<br/>• Ленивые вычисления<br/>• Итераторы<br/>• Управление асинхронным потоком<br/>• Бесконечные последовательности",
        difficulty: "hard"
      },
      {
        id: "js-27",
        question: "Что такое Symbol в JavaScript?",
        answer: "Symbol — примитивный тип для создания уникальных идентификаторов.<br/><br/>Создание:<br/>const sym1 = Symbol();<br/>const sym2 = Symbol('описание');<br/>sym1 === sym2; // false (всегда уникальны)<br/><br/>Глобальные символы:<br/>const globalSym = Symbol.for('app.id');<br/>const sameSym = Symbol.for('app.id');<br/>globalSym === sameSym; // true<br/><br/>Использование в объектах:<br/>const obj = {<br/>&nbsp;&nbsp;[Symbol('private')]: 'секрет',<br/>&nbsp;&nbsp;public: 'открыто'<br/>};<br/><br/>Встроенные символы:<br/>• Symbol.iterator — итератор<br/>• Symbol.toStringTag — [object Type]<br/>• Symbol.hasInstance — instanceof<br/><br/>Особенности:<br/>• Не перечисляются в for...in<br/>• Не видны в Object.keys()<br/>• Используются для приватных свойств",
        difficulty: "medium"
      },
      {
        id: "js-28",
        question: "Что такое Map и Set в JavaScript?",
        answer: "Map — коллекция пар ключ-значение:<br/>• Любые типы ключей (включая объекты)<br/>• Сохраняет порядок вставки<br/>• size для получения размера<br/><br/>const map = new Map();<br/>map.set('key', 'value');<br/>map.set(obj, 'object as key');<br/>map.get('key'); // 'value'<br/>map.has('key'); // true<br/>map.delete('key');<br/>map.clear();<br/><br/>Set — коллекция уникальных значений:<br/>• Только уникальные значения<br/>• Сохраняет порядок вставки<br/>• Проверка наличия O(1)<br/><br/>const set = new Set([1, 2, 2, 3]);<br/>set.add(4);<br/>set.has(2); // true<br/>set.delete(2);<br/>set.size; // 3<br/><br/>WeakMap и WeakSet:<br/>• Только объекты как ключи<br/>• Слабые ссылки<br/>• Автоматическая сборка мусора",
        difficulty: "medium"
      },
      {
        id: "js-29",
        question: "Что такое Proxy в JavaScript?",
        answer: "Proxy — объект-обёртка для перехвата и переопределения операций с объектом.<br/><br/>Создание:<br/>const proxy = new Proxy(target, handler);<br/><br/>Ловушки (traps):<br/>• get — чтение свойства<br/>• set — запись свойства<br/>• has — проверка in<br/>• deleteProperty — удаление<br/>• apply — вызов функции<br/><br/>Пример валидации:<br/>const user = new Proxy({}, {<br/>&nbsp;&nbsp;set(target, prop, value) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (prop === 'age' && value < 0) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new Error('Возраст не может быть отрицательным');<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;target[prop] = value;<br/>&nbsp;&nbsp;&nbsp;&nbsp;return true;<br/>&nbsp;&nbsp;}<br/>});<br/><br/>Применение:<br/>• Валидация данных<br/>• Отслеживание изменений<br/>• Виртуальные свойства<br/>• Логирование доступа",
        difficulty: "hard"
      },
      {
        id: "js-30",
        question: "Что такое Web Workers?",
        answer: "Web Workers — API для выполнения JavaScript в фоновых потоках.<br/><br/>Основной поток:<br/>const worker = new Worker('worker.js');<br/>worker.postMessage({cmd: 'start', data: [1, 2, 3]});<br/>worker.onmessage = (e) => {<br/>&nbsp;&nbsp;console.log('Результат:', e.data);<br/>};<br/><br/>Worker файл (worker.js):<br/>self.onmessage = (e) => {<br/>&nbsp;&nbsp;const result = processData(e.data);<br/>&nbsp;&nbsp;self.postMessage(result);<br/>};<br/><br/>Ограничения:<br/>• Нет доступа к DOM<br/>• Нет доступа к window<br/>• Отдельный контекст выполнения<br/><br/>Типы воркеров:<br/>• Dedicated Workers — для одной страницы<br/>• Shared Workers — для нескольких страниц<br/>• Service Workers — для офлайн и кеширования<br/><br/>Применение:<br/>• Тяжёлые вычисления<br/>• Обработка больших данных<br/>• Фоновая синхронизация",
        difficulty: "hard"
      }
    ]
  },
  // OOP
  {
    "id": "oop",
    "name": "OOP",
    "questions": [
      {
        "id": "oop-1",
        "question": "Что такое ООП и назовите его 4 основных столпа.",
        "answer": "<strong>Объектно-Ориентированное Программирование (ООП)</strong> — это парадигма, которая организует код вокруг <strong>объектов</strong>, объединяющих данные (свойства) и поведение (методы). Это позволяет создавать более модульный, гибкий и повторно используемый код. \n\n<strong>4 основных столпа (принципа) ООП:</strong>\n1. <strong>Инкапсуляция (Encapsulation)</strong>\n2. <strong>Наследование (Inheritance)</strong>\n3. <strong>Полиморфизм (Polymorphism)</strong>\n4. <strong>Абстракция (Abstraction)</strong>",
        "difficulty": "easy"
      },
      {
        "id": "oop-2",
        "question": "Объясните концепции Классов (Classes) и Объектов (Objects).",
        "answer": "* <strong>Класс (Class):</strong> Это <strong>шаблон</strong> или <strong>чертеж</strong> для создания объектов. Он определяет общие свойства (атрибуты) и поведение (методы), которыми будут обладать все его экземпляры.\n* <strong>Объект (Object):</strong> Это конкретный <strong>экземпляр</strong> класса. У каждого объекта есть своя уникальная идентичность, состояние (текущие значения свойств) и поведение.\n\n<strong>Пример (TS):</strong>\n```typescript\nclass Car { /* Класс */\n  model: string;\n  constructor(model: string) { this.model = model; }\n}\nconst myCar = new Car('Tesla'); // Объект (экземпляр)\n```",
        "difficulty": "easy"
      },
      {
        "id": "oop-3",
        "question": "Что такое Инкапсуляция и как она реализуется в TypeScript/JavaScript?",
        "answer": "<strong>Инкапсуляция</strong> — это объединение данных и методов, работающих с этими данными, в единый блок (Класс), а также <strong>скрытие</strong> внутренней реализации (состояния) от внешнего доступа. Это обеспечивает <strong>целостность данных</strong>.\n\nВ <strong>TypeScript</strong> это реализуется через модификаторы доступа: `public`, `private`, `protected`. В <strong>JavaScript</strong> (до приватных полей `#`): через соглашения (префикс `_`) или замыкания.\n\n<strong>Пример (TS с `private`):</strong>\n```typescript\nclass Account {\n  private balance: number = 0; \n  public deposit(amount: number) { \n    if (amount > 0) this.balance += amount; \n  }\n  public getBalance(): number { return this.balance; }\n}\n```",
        "difficulty": "medium"
      },
      {
        "id": "oop-4",
        "question": "Что такое Наследование и как оно работает в JavaScript/TypeScript?",
        "answer": "<strong>Наследование</strong> — это механизм, который позволяет новому классу (<strong>дочернему/наследнику</strong>) приобретать свойства и методы существующего класса (<strong>родительского/базового</strong>). Оно устанавливает отношение <strong>\"является-чем-то\" (is-a)</strong> и способствует повторному использованию кода.\n\nВ JS/TS для этого используется ключевое слово <strong>`extends`</strong> и вызов <strong>`super()`</strong> в конструкторе наследника.\n\n<strong>Пример (JS):</strong>\n```javascript\nclass Animal { \n  constructor(name) { this.name = name; }\n  makeSound() { console.log('Some sound'); }\n}\nclass Dog extends Animal {\n  makeSound() { console.log('Woof'); } // Переопределение\n}\nconst dog = new Dog('Buddy');\ndog.makeSound(); // Output: Woof\n```",
        "difficulty": "medium"
      },
      {
        "id": "oop-5",
        "question": "Что такое Полиморфизм и какие его типы существуют?",
        "answer": "<strong>Полиморфизм</strong> (многообразие форм) позволяет объектам из разных классов отвечать на одно и то же сообщение (вызов метода) <strong>по-разному</strong>, при этом сохраняя общий интерфейс. Это позволяет писать более общий и гибкий код.\n\n<strong>Типы полиморфизма:</strong>\n1. <strong>Наследование (Runtime Polymorphism):</strong> Достигается через <strong>переопределение (Method Overriding)</strong> метода родительского класса в дочернем (как в примере выше).\n2. <strong>Интерфейсы/Абстрактные классы:</strong> Объекты, реализующие один и тот же интерфейс, могут быть обработаны одинаково.\n\n<strong>Пример (TS с интерфейсом):</strong>\n```typescript\ninterface Speaker { speak(): void; }\nclass Cat implements Speaker { speak() { console.log('Meow'); } }\nclass Duck implements Speaker { speak() { console.log('Quack'); } }\n// Функция принимает любой объект, реализующий Speaker\nfunction animalSpeak(animal: Speaker) { animal.speak(); }\n```",
        "difficulty": "medium"
      },
      {
        "id": "oop-6",
        "question": "Что такое Абстракция и как она реализуется в TypeScript?",
        "answer": "<strong>Абстракция</strong> — это процесс сосредоточения на <strong>существенных</strong> характеристиках объекта, игнорируя незначительные детали реализации. Она предоставляет <strong>простой интерфейс</strong> для сложных внутренних систем.\n\nВ <strong>TypeScript</strong> она реализуется через <strong>Интерфейсы (`interface`)</strong> и <strong>Абстрактные Классы (`abstract class`)</strong>.\n\n<strong>Пример (TS с абстрактным классом):</strong>\n```typescript\nabstract class Geometry {\n  abstract calculateArea(): number; // Метод должен быть реализован наследниками\n  display() { console.log('Calculating geometry...'); }\n}\nclass Circle extends Geometry {\n  constructor(private radius: number) { super(); }\n  calculateArea() { return Math.PI * this.radius * this.radius; }\n}\n// let shape = new Geometry(); // Ошибка, абстрактный класс нельзя инстанцировать\n```",
        "difficulty": "medium"
      },
      {
        "id": "oop-7",
        "question": "Какова роль Конструктора (Constructor)?",
        "answer": "<strong>Конструктор</strong> — это специальный метод внутри класса, который <strong>автоматически вызывается</strong> при создании (инстанцировании) нового объекта. Его основная роль — <strong>инициализировать</strong> состояние нового объекта, присваивая начальные значения его свойствам.\n\nВ JS/TS используется метод с именем <strong>`constructor`</strong>.\n\n<strong>Пример (JS):</strong>\n```javascript\nclass Person {\n  constructor(firstName, lastName) { // Конструктор\n    this.firstName = firstName;\n    this.lastName = lastName;\n    this.fullName = `${firstName} ${lastName}`;\n  }\n}\n```",
        "difficulty": "easy"
      },
      {
        "id": "oop-8",
        "question": "В чем разница между Методом (Method) и Функцией (Function)?",
        "answer": "* <strong>Функция:</strong> Блок кода, который может быть вызван <strong>самостоятельно</strong>, независимо от какого-либо объекта.\n* <strong>Метод:</strong> Это <strong>функция, определенная внутри класса</strong> (или объекта) и связанная с ним. Метод всегда вызывается в контексте объекта и имеет доступ к его данным через ключевое слово <strong>`this`</strong>.\n\n<strong>Пример (JS):</strong>\n```javascript\nfunction standaloneLog(msg) { console.log(msg); } // Функция\n\nclass Logger {\n  log(msg) { console.log(this.prefix + msg); } // Метод\n}\n```",
        "difficulty": "easy"
      },
      {
        "id": "oop-9",
        "question": "Что такое «Согласованность» (Cohesion) и «Связность» (Coupling) в ООП?",
        "answer": "* <strong>Согласованность (Cohesion):</strong> Мера того, насколько тесно связаны и сфокусированы на одной задаче методы и свойства внутри <strong>одного класса</strong>. <strong>Высокая согласованность</strong> (класс делает одно дело, и делает его хорошо) — это хорошо.\n* <strong>Связность (Coupling):</strong> Мера зависимости <strong>двух разных классов</strong> или модулей друг от друга. <strong>Низкая связность</strong> (классы минимально зависят друг от друга) — это хорошо, так как упрощает изменения и тестирование.",
        "difficulty": "medium"
      },
      {
        "id": "oop-10",
        "question": "Что такое Интерфейс (Interface) в TypeScript?",
        "answer": "<strong>Интерфейс (`interface`)</strong> — это мощная функция TypeScript, которая определяет <strong>контракт</strong> на структуру объекта. Он описывает, какие свойства и методы должен иметь объект, который его реализует, но <strong>не содержит никакой реализации</strong>.\n\n<strong>Использование:</strong> Обеспечивает строгую типизацию, используется для полиморфизма и как описание API.\n\n<strong>Пример (TS):</strong>\n```typescript\ninterface User {\n  id: number;\n  email: string;\n  logAccess(): void;\n}\n\nclass Admin implements User { \n  id: number = 1;\n  email: string = 'admin@';\n  logAccess() { console.log('Admin logged in.'); }\n}\n```",
        "difficulty": "medium"
      },
      {
        "id": "oop-11",
        "question": "Объясните разницу между Композицией и Агрегацией.",
        "answer": "Обе концепции описывают отношение <strong>\"имеет-в-себе\" (has-a)</strong>, но различаются силой связи:\n* <strong>Композиция (Composition):</strong> <strong>Сильная</strong> зависимость. Части <strong>не могут существовать</strong> без целого. При уничтожении целого, части также уничтожаются.\n* <strong>Агрегация (Aggregation):</strong> <strong>Слабая</strong> зависимость. Части могут <strong>продолжать существовать</strong> независимо от целого. Целое использует части, но не управляет их жизненным циклом.\n\n<strong>Пример Композиции (JS):</strong> Класс `Engine` создается внутри класса `Car` (двигатель не может существовать сам по себе).",
        "difficulty": "medium"
      },
      {
        "id": "oop-12",
        "question": "Как в JavaScript/TypeScript создать статическое свойство или метод?",
        "answer": "Статические члены класса принадлежат <strong>самому классу</strong>, а не его экземплярам (объектам). Они полезны для служебных функций, которые не зависят от состояния конкретного объекта (например, фабричные методы, константы).\n\nДля создания статических членов используется ключевое слово <strong>`static`</strong>.\n\n<strong>Пример (TS):</strong>\n```typescript\nclass Validator {\n  static MIN_LENGTH: number = 5; // Статическое свойство\n\n  static validate(input: string): boolean { // Статический метод\n    return input.length >= Validator.MIN_LENGTH;\n  }\n}\n\nconsole.log(Validator.validate('hello')); // Вызов через класс\n// const v = new Validator(); v.validate() // Ошибка\n```",
        "difficulty": "medium"
      },
      {
        "id": "oop-13",
        "question": "Что такое перегрузка (Overloading) и поддерживает ли ее JavaScript/TypeScript?",
        "answer": "<strong>Перегрузка метода (Method Overloading)</strong> — это возможность определить <strong>несколько методов</strong> с <strong>одним и тем же именем</strong>, но с <strong>разными сигнатурами</strong> (разное количество или типы параметров).\n\n* <strong>JavaScript:</strong> <strong>Не поддерживает</strong> перегрузку, так как функции определяются только по имени (последняя определенная функция переписывает предыдущие).\n* <strong>TypeScript:</strong> <strong>Эмулирует</strong> перегрузку для целей типизации (объявления нескольких сигнатур), но фактическая реализация метода должна быть <strong>одна</strong>, обрабатывающая все возможные сигнатуры.\n\n<strong>Пример эмуляции в TS:</strong>\n```typescript\nfunction sum(a: number, b: number): number;\nfunction sum(a: number, b: number, c: number): number;\nfunction sum(a: number, b: number, c?: number): number { // Единая реализация\n  return a + b + (c || 0);\n}\n```",
        "difficulty": "hard"
      },
      {
        "id": "oop-14",
        "question": "Как работают геттеры (Getters) и сеттеры (Setters) в JS/TS?",
        "answer": "<strong>Геттеры и Сеттеры</strong> используются для <strong>контролируемого доступа</strong> к свойствам объекта (реализуя инкапсуляцию).\n\n* <strong>Геттер (`get`):</strong> Специальный метод, который вызывается при <strong>чтении</strong> свойства. Он позволяет выполнить дополнительную логику перед возвратом значения.\n* <strong>Сеттер (`set`):</strong> Специальный метод, который вызывается при <strong>записи</strong> значения в свойство. Он позволяет выполнять валидацию или другую логику перед изменением внутреннего состояния.\n\n<strong>Пример (JS):</strong>\n```javascript\nclass Box {\n  constructor(w) { this._width = w; }\n  get width() { return this._width; } // Чтение\n  set width(newW) { \n    if (newW > 0) this._width = newW; // Валидация\n  }\n}\nconst box = new Box(10);\nbox.width = -5; // Вызов сеттера, не изменяет _width\n```",
        "difficulty": "medium"
      },
      {
        "id": "oop-15",
        "question": "В чем главное отличие между ООП и Процедурным Программированием?",
        "answer": "<strong>Процедурное Программирование:</strong> Сосредоточено на <strong>функциях</strong> (процедурах) и <strong>логике</strong> последовательного выполнения шагов. Данные и функции обычно разделены (фокус на *что* делать).\n\n<strong>ООП:</strong> Сосредоточено на <strong>объектах</strong>, которые объединяют данные и методы. Данные и поведение неразрывно связаны (фокус на *кто* это делает).\n\nООП лучше подходит для больших, сложных систем, где необходимы <strong>инкапсуляция</strong> и <strong>иерархия</strong> (наследование).",
        "difficulty": "easy"
      }
    ]
  },
  // react
  {
    id: "react-web",
    name: "React",
    questions: [
      {
        id: "rct-1",
        question: "Что такое React и каковы его ключевые концепции?",
        answer: "<strong>React</strong> — это front-end JavaScript-библиотека с открытым исходным кодом, предназначенная для создания пользовательских интерфейсов, основанных на переиспользуемых компонентах.<br/><br/><strong>Ключевые концепции:</strong><br/>1. <strong>Виртуальный DOM (Virtual DOM):</strong> Легковесное представление реального DOM в памяти. React сравнивает его при изменениях и обновляет только измененные части реального DOM, что обеспечивает высокую производительность.<br/>2. <strong>Компоненты:</strong> Модульные, переиспользуемые блоки, инкапсулирующие логику и внешний вид. Бывают <strong>классовые</strong> и <strong>функциональные</strong> (с Хуками).<br/>3. <strong>Однонаправленный поток данных (Unidirectional Data-flow):</strong> Данные передаются от родительского компонента к дочернему через <strong>пропсы</strong> (props). Это упрощает отслеживание изменений и отладку.<br/>4. <strong>JSX:</strong> Синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код прямо в файлах JS для декларативного описания UI.",
        difficulty: "easy"
      },
      {
        id: "rct-2",
        question: "Объясните концепцию Виртуального DOM (Virtual DOM) и как она влияет на производительность.",
        answer: "<strong>Виртуальный DOM</strong> — это абстракция или легкое, находящееся в памяти, представление реального <strong>DOM (Document Object Model)</strong> браузера.<br/><br/><strong>Принцип работы:</strong><br/>1. <strong>Инициализация/Изменение состояния:</strong> При старте или изменении состояния (`state`/`props`) React создает новое дерево Виртуального DOM.<br/>2. <strong>Реконсиляция (Reconciliation):</strong> React сравнивает новое дерево с предыдущим состоянием (теневой копией), чтобы определить, какие узлы были изменены. Это называется <strong>Диффинг (Diffing)</strong>.<br/>3. <strong>Пакетное обновление (Batched Update):</strong> React собирает минимальный набор необходимых изменений и применяет их одним пакетом к <strong>реальному DOM</strong>.<br/><br/>Это <strong>значительно повышает производительность</strong>, так как прямые манипуляции с реальным DOM (которые являются дорогостоящими операциями) минимизируются, а обновления происходят максимально эффективно.",
        difficulty: "medium"
      },
      {
        id: "rct-3",
        question: "В чем разница между Классовыми (Class) и Функциональными (Functional) компонентами?",
        answer: "Основное различие исторически заключалось в управлении состоянием и жизненным циклом, но <strong>Хуки (Hooks)</strong>, представленные в React 16.8, уравняли их возможности.<br/><br/>| Аспект | Классовый Компонент | Функциональный Компонент |<br/>| :--- | :--- | :--- |<br/>| <strong>Определение</strong> | Использует `class ... extends Component` | Использует `function` или стрелочную функцию |<br/>| <strong>Состояние</strong> | Управляется через `this.state` и `this.setState()` | Управляется через Хук `useState()` |<br/>| <strong>Жизненный цикл</strong> | Использует методы жизненного цикла (`componentDidMount`, `shouldComponentUpdate` и т.д.) | Управляется через Хук `useEffect()` |<br/>| <strong>`this` контекст</strong> | Используется (нужна привязка методов) | Не используется |<br/><br/><strong>Современная практика</strong> предпочитает <strong>функциональные компоненты с Хуками</strong> за их простоту, меньшую многословность и лучшую переиспользуемость логики.",
        difficulty: "medium"
      },
      {
        id: "rct-4",
        question: "Что такое JSX и зачем его использовать в React?",
        answer: "<strong>JSX (JavaScript XML)</strong> — это синтаксическое расширение для JavaScript, которое позволяет разработчикам описывать UI с помощью знакомого <strong>HTML-подобного синтаксиса</strong> внутри JavaScript-кода.<br/><br/><strong>Преимущества:</strong><br/>1. <strong>Читаемость:</strong> Код становится более понятным и декларативным, так как структура UI визуально напоминает HTML.<br/>2. <strong>Компактность:</strong> Позволяет избежать длинных вызовов `React.createElement()`, в которые JSX транспилируется.<br/>3. <strong>Эффективность разработки:</strong> Современные IDE и линтеры (ESLint) обеспечивают лучшую поддержку автодополнения и проверки типов при работе с JSX.<br/><br/><strong>Транспиляция:</strong> Babel автоматически преобразует JSX-код (например, `<h1>Hello</h1>`) в вызовы чистого JavaScript (например, `React.createElement('h1', null, 'Hello')`), понятные браузеру.",
        difficulty: "easy"
      },
      {
        id: "rct-5",
        question: "В чем разница между Props и State в React?",
        answer: "И <strong>Пропсы (Props)</strong>, и <strong>Состояние (State)</strong> используются для хранения данных в компоненте, но выполняют разные роли.<br/><br/>| Аспект | Props (Свойства) | State (Состояние) |<br/>| :--- | :--- | :--- |<br/>| <strong>Назначение</strong> | Передача данных от родителя к дочернему компоненту. | Управление данными внутри самого компонента. |<br/>| <strong>Изменяемость</strong> | <strong>Неизменяемы (Immutable)</strong>; доступны только для чтения дочерним компонентом. | <strong>Изменяемы (Mutable)</strong>; компонент может изменять свое состояние. |<br/>| <strong>Инициализация</strong> | Задаются родительским компонентом. | Инициализируется внутри компонента (`this.state` или `useState`). |<br/>| <strong>Перерисовка</strong> | Изменение пропсов родителя вызывает перерисовку дочернего. | Изменение состояния компонента вызывает его перерисовку. |<br/><br/><strong>Правило:</strong> Используйте <strong>пропсы</strong> для данных, которые приходят извне и не меняются. Используйте <strong>состояние</strong> для данных, которые должны меняться со временем в ответ на действия пользователя или запросы.",
        difficulty: "easy"
      },
      {
        id: "rct-6",
        question: "Как происходит обработка событий (Event Handling) в React?",
        answer: "React унифицирует систему событий браузеров через механизм <strong>Синтетических Событий (Synthetic Events)</strong>.<br/><br/><strong>Ключевые моменты:</strong><br/>1. <strong>Кроссбраузерность:</strong> Синтетические события оборачивают нативные события браузера, обеспечивая согласованный интерфейс и поведение во всех браузерах.<br/>2. <strong>Именование:</strong> В React события именуются в <strong>`camelCase`</strong> (например, `onClick` вместо `onclick` в HTML).<br/>3. <strong>Привязка:</strong> Функция-обработчик передается как пропс к элементу (`<button onClick={handleClick}>`).<br/>4. <strong>Предотвращение по умолчанию:</strong> Чтобы остановить поведение браузера по умолчанию (например, отправку формы), используется метод `event.preventDefault()` внутри обработчика, как в примере ниже.<br/><br/>```javascript<br/>// Пример обработки события формы<br/>handleSubmit(event) {<br/>&nbsp;&nbsp;event.preventDefault(); // Предотвращает перезагрузку страницы<br/>&nbsp;&nbsp;alert('Форма отправлена!');<br/>}<br/><br/>// В render<br/>return (<br/>&nbsp;&nbsp;<form onSubmit={this.handleSubmit}><br/>&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"submit\">Отправить</button><br/>&nbsp;&nbsp;</form><br/>);<br/>```",
        difficulty: "medium"
      },
      {
        id: "rct-7",
        question: "Что такое Хук useState() и как он используется в функциональных компонентах?",
        answer: "<strong>`useState`</strong> — это встроенный <strong>React Хук</strong>, который позволяет функциональным компонентам иметь <strong>локальное состояние</strong>.<br/><br/><strong>Использование:</strong><br/>Он возвращает массив из двух элементов: текущее значение состояния и функцию-сеттер для его обновления.<br/><br/>```javascript<br/>import React, { useState } from 'react';<br/><br/>const Counter = () => {<br/>&nbsp;&nbsp;// [Текущее значение, Функция для обновления]<br/>&nbsp;&nbsp;const [count, setCount] = useState(0); // 0 — начальное значение<br/><br/>&nbsp;&nbsp;return (<br/>&nbsp;&nbsp;&nbsp;&nbsp;<div><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>Счет: {count}</p><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Вызов сеттера для обновления состояния и перерисовки<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => setCount(count + 1)}>Инкремент</button><br/>&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;);<br/>};<br/>```<br/><br/><strong>Ключевой момент:</strong> При вызове функции-сеттера (`setCount`), React <strong>перерисовывает</strong> компонент с новым значением состояния.",
        difficulty: "easy"
      },
      {
        id: "rct-8",
        question: "Как дочерний компонент может обновить состояние родительского компонента?",
        answer: "React придерживается <strong>однонаправленного потока данных (Parent-to-Child)</strong>. Чтобы дочерний компонент мог изменить состояние родителя, необходимо использовать <strong>паттерн Callback-функции через пропсы</strong>.<br/><br/><strong>Механизм:</strong><br/>1. <strong>Родительский компонент</strong> определяет функцию, которая обновляет его состояние.<br/>2. Эта функция <strong>передается как пропс</strong> дочернему компоненту.<br/>3. <strong>Дочерний компонент</strong> вызывает эту функцию-пропс (callback) в ответ на событие (например, нажатие кнопки), передавая ей новое значение.<br/><br/><strong>Пример:</strong><br/>```javascript<br/>// В Родительском компоненте<br/>function Parent() {<br/>&nbsp;&nbsp;const [data, setData] = useState('');<br/>&nbsp;&nbsp;const updateState = (newData) => setData(newData); // Функция для обновления<br/>&nbsp;&nbsp;return <Child onDataChange={updateState} />;<br/>}<br/><br/>// В Дочернем компоненте<br/>function Child({ onDataChange }) {<br/>&nbsp;&nbsp;const handleClick = () => {<br/>&nbsp;&nbsp;&nbsp;&nbsp;onDataChange('Новые данные от дочернего компонента'); // Вызов callback<br/>&nbsp;&nbsp;};<br/>&nbsp;&nbsp;return <button onClick={handleClick}>Обновить Родителя</button>;<br/>}<br/>```",
        difficulty: "medium"
      },
      {
        id: "rct-9",
        question: "Что такое 'Поднятие состояния' (Lifting State Up) и когда это необходимо?",
        answer: "<strong>Поднятие состояния (Lifting State Up)</strong> — это архитектурный паттерн в React, при котором локальное состояние нескольких дочерних компонентов перемещается (поднимается) в их ближайший общий <strong>родительский компонент</strong>.<br/><br/><strong>Необходимость:</strong><br/>Паттерн необходим, когда <strong>два или более компонента-брата</strong> должны быть <strong>синхронизированы</strong> и совместно использовать или влиять на одни и те же данные. Если данные должны быть общими, они должны жить в их ближайшем общем предке.<br/><br/><strong>Принцип:</strong><br/>1. <strong>Родитель</strong> хранит общее состояние.<br/>2. <strong>Родитель</strong> передает данные вниз как <strong>пропсы</strong>.<br/>3. <strong>Родитель</strong> передает функции для изменения состояния вниз как <strong>пропсы-callback</strong>.<br/><br/>*Пример: Калькулятор, где два поля ввода (длина и ширина) должны влиять на один компонент результата (площадь). Состояние длины и ширины поднимается в общий компонент-калькулятор.*",
        difficulty: "medium"
      },
      {
        id: "rct-10",
        question: "Сравните Redux и Context API для управления глобальным состоянием.",
        answer: "Оба инструмента решают проблему <strong>Prop Drilling</strong> (передачи пропсов через множество уровней), но имеют разную сложность и цели.<br/><br/>| Аспект | Context API | Redux |<br/>| :--- | :--- | :--- |<br/>| <strong>Сложность</strong> | Проще, встроен в React, минимум кода. | Сложнее, требует установки библиотеки, <strong>Actions, Reducers, Store</strong>.<br/>| <strong>Производительность</strong> | При изменении провайдера <strong>все</strong> подписанные компоненты перерисовываются (может быть медленно). | Высокая, перерисовывает только компоненты, подписанные на <strong>конкретные части</strong> состояния. |<br/>| <strong>Прогнозируемость</strong> | Менее строгий поток, что может усложнить отладку. | <strong>Строгий, предсказуемый</strong> однонаправленный поток (идеально для крупных команд/проектов). |<br/>| <strong>Инструменты</strong> | Минимум отладочных инструментов. | <strong>Redux DevTools</strong> — мощный инструмент для \"путешествия во времени\" и отслеживания изменений. |<br/><br/><strong>Вывод:</strong><br/>* <strong>Context API:</strong> Идеален для <strong>нечасто меняющегося</strong> и <strong>некритичного</strong> состояния (тема приложения, язык пользователя).<br/>* <strong>Redux:</strong> Идеален для <strong>сложного, часто меняющегося</strong> состояния в <strong>крупных</strong> корпоративных приложениях.",
        difficulty: "hard"
      }
    ]
  },
  // react native 
  {
    id: "react-native",
    name: "React Native",
    questions: [
      {
        id: "rn-1",
        question: "Что такое React Native и в чем его ключевое отличие от React?",
        answer: "<strong>React Native</strong> — фреймворк, который расширяет возможности React, позволяя создавать <strong>нативные мобильные приложения</strong> для iOS и Android с использованием JavaScript и React. <br/><br/><strong>Ключевые отличия от React (Web):</strong><br/>• <strong>Платформа:</strong> React – для веба (браузер), React Native – для мобильных устройств.<br/>• <strong>Рендеринг:</strong> React использует <strong>DOM</strong> браузера, React Native рендерит с помощью <strong>нативных компонентов</strong> (через Bridge).<br/>• <strong>Компоненты:</strong> Используются специфичные нативные компоненты, например, `<View>`, `<Text>`, `<Button>`, вместо веб-элементов (`<div>`, `<span>`, `<button>`).<br/>• <strong>API:</strong> React Native имеет доступ к нативным API устройства (Камера, GPS, Сенсоры).<br/><br/><strong>Пример (кнопка):</strong><br/>В React (Web):<br/>```javascript<br/>// Используется HTML-элемент<br/>return <button onClick={...}>Click</button>;<br/>```<br/>В React Native:<br/>```javascript<br/>import { Button } from 'react-native';<br/>// Используется нативный компонент<br/>return <Button title=\"Click\" onPress={...} />;<br/>```",
        difficulty: "easy"
      },
      {
        id: "rn-2",
        question: "Объясните концепцию 'Learn Once, Write Anywhere' в контексте React Native.",
        answer: "Это означает <strong>повторное использование логики</strong> и архитектуры React на разных платформах. Главная идея — <strong>Code Reusability</strong> (переиспользование кода), а не 100% общность кода.<br/><br/><strong>Ключевые аспекты:</strong><br/>1. <strong>Общая бизнес-логика:</strong> Функциональные компоненты, хуки, Redux-логика и большая часть JavaScript-кода могут быть общими.<br/>2. <strong>Адаптация:</strong> Нативный внешний вид (UI/UX) и взаимодействие с устройством (Permissions) могут потребовать платформо-специфичного кода.<br/><br/><strong>Механизмы адаптации:</strong><br/>• <strong>Platform API:</strong> Использование `Platform.OS === 'ios'` для логических ветвлений.<br/>• <strong>Специфичные файлы:</strong> Создание файлов с расширением `.ios.js` или `.android.js` (например, `Header.ios.js`), чтобы импортировать нужный модуль автоматически.",
        difficulty: "easy"
      },
      {
        id: "rn-3",
        question: "Каковы основные шаги для создания базового приложения React Native?",
        answer: "Процесс создания включает настройку окружения и инициализацию проекта. Обычно используют <strong>Expo CLI</strong> (для простоты) или <strong>React Native CLI</strong> (для сложных проектов с нативными модулями).<br/><br/><strong>Шаги с React Native CLI:</strong><br/>1. <strong>Установка зависимостей:</strong> Убедиться, что установлены <strong>Node.js</strong>, <strong>JDK</strong> и необходимые инструменты iOS/Android.<br/>2. <strong>Инициализация проекта:</strong><br/>```bash<br/>npx react-native init MyApp<br/>cd MyApp<br/>```<br/>3. <strong>Запуск:</strong><br/>```bash<br/>npx react-native run-android<br/># или<br/>npx react-native run-ios<br/>```<br/><strong>Структура проекта:</strong><br/>• `index.js` или `App.js`: Точка входа в приложение.<br/>• `android/` и `ios/`: Содержат нативные проекты.<br/>• `package.json`: Управление зависимостями.<br/><br/>*Я использую Expo для быстрого прототипирования, так как он упрощает настройку нативного окружения.*",
        difficulty: "easy"
      },
      {
        id: "rn-4",
        question: "Какие типы компонентов существуют в React Native? Приведите пример кастомного компонента.",
        answer: "В React Native компоненты делятся на две основные группы:<br/><br/>1. <strong>Базовые (Core Components):</strong> Встроенные элементы, которые напрямую соответствуют нативным UI-блокам. Они являются основой для всего: `<View>`, `<Text>`, `<Image>`, `<Button>`, `<TextInput>`.<br/>2. <strong>Кастомные (Custom Components):</strong> Компоненты, созданные разработчиком. Они обычно состоят из базовых компонентов и инкапсулируют сложную логику, стили и поведение. Они обеспечивают <strong>модульность</strong> и <strong>переиспользование</strong>.<br/><br/><strong>Пример кастомного компонента:</strong><br/>```javascript<br/>// CustomButton.js<br/>import { TouchableOpacity, Text, StyleSheet } from 'react-native';<br/><br/>const CustomButton = ({ title, onPress }) => (<br/>&nbsp;&nbsp;<TouchableOpacity style={styles.button} onPress={onPress}><br/>&nbsp;&nbsp;&nbsp;&nbsp;<Text style={styles.text}>{title}</Text><br/>&nbsp;&nbsp;</TouchableOpacity><br/>);<br/><br/>// Кастомный компонент инкапсулирует TouchableOpacity<br/>// и Text, предоставляя простой интерфейс (props: title, onPress).<br/>```",
        difficulty: "medium"
      },
      {
        id: "rn-5",
        question: "Для чего нужна функция render() в компонентах React Native (и React)?",
        answer: "Функция <strong>`render()`</strong> (или её тело в функциональных компонентах) является обязательным методом и отвечает за <strong>описание визуального вывода</strong> компонента. <br/><br/><strong>Назначение:</strong><br/>• <strong>Возврат JSX:</strong> Она принимает пропсы и стейт и возвращает <strong>JSX</strong> — декларативный «чертеж» пользовательского интерфейса.<br/>• <strong>Виртуальный DOM:</strong> Когда состояние (`state`) или пропсы (`props`) компонента изменяются, `render()` вызывается снова. Результат сравнивается с предыдущим состоянием <strong>Виртуального DOM</strong>, и только необходимые изменения применяются к нативному UI.<br/>• <strong>Условный рендеринг:</strong> Позволяет динамически решать, какие элементы показывать пользователю (например, скрывать список, если он пуст).<br/><br/>*В функциональных компонентах роль `render()` выполняет сама функция, возвращая JSX.*",
        difficulty: "medium"
      },
      {
        id: "rn-6",
        question: "Что такое JSX в React Native и как он обрабатывается?",
        answer: "<strong>JSX (JavaScript XML)</strong> — это синтаксическое расширение JavaScript, которое позволяет писать HTML-подобную структуру прямо в файлах JS.<br/><br/><strong>Роль в RN:</strong> JSX используется для декларативного описания UI-дерева из нативных компонентов (`<View>`, `<Text>`).<br/><br/><strong>Обработка (Транспиляция):</strong><br/>1. Разработчик пишет JSX.<br/>2. <strong>Babel</strong> (транспайлер) преобразует JSX в чистый JavaScript, используя вызовы `React.createElement()`.<br/>3. <strong>React Native Bridge</strong> получает эту структуру и преобразует ее в соответствующие <strong>нативные представления</strong> (iOS: `UIView`, Android: `android.view`).<br/><br/><strong>Пример транспайлинга:</strong><br/>JSX:<br/>```jsx<br/>return <Text>Hello</Text>;<br/>```<br/>Транспайлинг в JS:<br/>```javascript<br/>return React.createElement(Text, null, \"Hello\");<br/>```",
        difficulty: "easy"
      },
      {
        id: "rn-7",
        question: "Назовите 5-7 ключевых (Core) компонентов React Native и их назначение.",
        answer: "Ключевые компоненты (Core Components) являются основой для построения любого интерфейса в React Native. Они напрямую мапятся на нативные элементы:<br/><br/>1. <strong>`<View>`:</strong> Самый базовый контейнер для построения UI. Поддерживает стили, Flexbox и служит 'блоком' разметки. Аналог `div` в вебе.<br/>2. <strong>`<Text>`:</strong> Используется исключительно для отображения текста и его стилизации. Все текстовые узлы должны быть внутри этого компонента.<br/>3. <strong>`<Image>`:</strong> Отображает изображения, локальные или сетевые.<br/>4. <strong>`<Button>` / `<TouchableOpacity>`:</strong> Элементы для обработки нажатий. `<Button>` — базовый нативный, `<TouchableOpacity>` — более гибкий, уменьшающий прозрачность при касании.<br/>5. <strong>`<TextInput>`:</strong> Компонент для ввода текста (однострочного или многострочного).<br/>6. <strong>`<ScrollView>`:</strong> Контейнер, который позволяет прокручивать содержимое, если оно превышает размер экрана.<br/>7. <strong>`<FlatList>` / `<SectionList>`:</strong> Высокопроизводительные, 'виртуализированные' компоненты для эффективного рендеринга больших списков данных (отличаются способом группировки).",
        difficulty: "medium"
      },
      {
        id: "rn-8",
        question: "Как осуществляется управление состоянием (State Management) в React Native?",
        answer: "Управление состоянием делится на локальное и глобальное.<br/><br/><strong>Локальное состояние (Local State):</strong><br/>• Используется для данных, нужных только одному компоненту (например, состояние открытого модального окна, значение в поле ввода).<br/>• Применяется <strong>хук `useState`</strong>.<br/>```javascript<br/>const [count, setCount] = useState(0);<br/>```<br/><br/><strong>Глобальное состояние (Global/Shared State):</strong><br/>• Используется для данных, общих для многих компонентов (например, данные пользователя, тема приложения, корзина).<br/>• <strong>Context API:</strong> Встроенный инструмент для передачи состояния глубоко по дереву компонентов. Часто используется вместе с `useReducer` для сложной логики.<br/>• <strong>Внешние библиотеки:</strong> <strong>Redux, Zustand, Recoil</strong> и другие для более масштабируемых, предсказуемых и отлаживаемых решений.",
        difficulty: "medium"
      },
      {
        id: "rn-9",
        question: "Что такое Props и почему они важны для компонентов RN?",
        answer: "<strong>Props (Properties)</strong> — это объект, который содержит данные, передаваемые <strong>сверху вниз</strong> (от родительского компонента к дочернему).<br/><br/><strong>Важность:</strong><br/>1. <strong>Однонаправленный поток данных:</strong> Обеспечивает предсказуемость, так как данные текут только в одном направлении, делая отладку проще.<br/>2. <strong>Инкапсуляция и переиспользование:</strong> Позволяют настраивать поведение и внешний вид дочернего компонента без изменения его внутреннего кода, создавая универсальные блоки.<br/>3. <strong>Иммутабельность:</strong> Дочерний компонент <strong>не должен</strong> изменять пропсы, которые он получает. Они доступны только для чтения, что обеспечивает <strong>Single Source of Truth</strong>.<br/><br/><strong>Пример использования Prop Types:</strong><br/>Использование библиотеки `prop-types` (или TypeScript) для статической проверки типов пропсов в разработке, что повышает надежность кода.<br/>```javascript<br/>// Указываем, что 'name' должен быть строкой и обязателен<br/>MyComponent.propTypes = {<br/>&nbsp;&nbsp;name: PropTypes.string.isRequired,<br/>};<br/>```",
        difficulty: "easy"
      },
      {
        id: "rn-10",
        question: "Как работает Flexbox в React Native и в чем его отличие от веба?",
        answer: "<strong>Flexbox</strong> — это система CSS-стилей для компоновки, которая является <strong>основным механизмом разметки</strong> в React Native.<br/><br/><strong>Как работает:</strong><br/>• Используется для распределения пространства, выравнивания и упорядочивания элементов внутри контейнера (`<View>`).<br/>• Все компоненты, которые поддерживают стили, могут быть Flex-контейнерами или Flex-элементами.<br/><br/><strong>Ключевые отличия от Web (CSS):</strong><br/>1. <strong>Направление по умолчанию:</strong> В React Native по умолчанию используется `flexDirection: 'column'` (элементы располагаются вертикально), в отличие от веба, где по умолчанию `row`.<br/>2. <strong>`flex` свойство:</strong> В RN `flex: 1` означает, что элемент займет всё доступное пространство контейнера (аналог `flex-grow: 1`).<br/><br/><strong>Пример (вертикальная разметка):</strong><br/>```javascript<br/>const styles = StyleSheet.create({<br/>&nbsp;&nbsp;container: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;flex: 1, // Занять весь экран<br/>&nbsp;&nbsp;&nbsp;&nbsp;flexDirection: 'column', // По умолчанию<br/>&nbsp;&nbsp;&nbsp;&nbsp;justifyContent: 'center', // Выравнивание по вертикали<br/>&nbsp;&nbsp;},<br/>});<br/>```",
        difficulty: "medium"
      },
      {
        id: "rn-11",
        question: "Какие основные инструменты и стратегии вы используете для отладки (Debugging) приложений React Native?",
        answer: "Отладка в RN требует сочетания традиционных и специфических инструментов, поскольку код выполняется в разных средах.<br/><br/><strong>Инструменты:</strong><br/>1. <strong>React Native Debugger / Flipper:</strong> Единый инструмент, объединяющий инспектор компонентов (React DevTools) и консоль (Chrome DevTools) для просмотра сетевых запросов, логов и состояния Redux.<br/>2. <strong>Консольное логирование:</strong> Использую `console.log/warn/error` для быстрого вывода информации. `console.assert` для условных проверок.<br/>3. <strong>Эмуляторы/Симуляторы и физические устройства:</strong> Обязательное тестирование, так как баги могут проявляться только на конкретном устройстве.<br/>4. <strong>Redux DevTools:</strong> Для отслеживания изменений глобального состояния.<br/><br/><strong>Стратегии:</strong><br/>• <strong>Изоляция:</strong> В случае сложного бага временно удаляю или комментирую части кода (использую принцип 'бинарного поиска') до нахождения источника проблемы.<br/>• <strong>Защита от `undefined`:</strong> Активно использую оператор опциональной цепочки (`?.`) и условный рендеринг, чтобы избежать ошибок при доступе к несуществующим свойствам.<br/>• <strong>HMR (Hot Module Replacement):</strong> Использую горячую перезагрузку для сохранения состояния приложения при внесении изменений в код, что ускоряет процесс отладки.",
        difficulty: "medium"
      },
      {
        id: "rn-12",
        question: "Объясните разницу между Hot Reloading и Live Reloading (Full Reloading).",
        answer: "Оба механизма используются для ускорения разработки, но работают по-разному:<br/><br/>| Механизм | Описание | Сохранение состояния | Скорость | Применение |<br/>| :--- | :--- | :--- | :--- | :--- |<br/>| <strong>Hot Reloading</strong> | Заменяет только измененные модули в реальном времени. | <strong>Да</strong> | Быстро | Изменения стилей/логики |<br/>| <strong>Live Reloading</strong> | Перезагружает всё приложение с нуля. | <strong>Нет</strong> | Медленно | Изменения, влияющие на нативный код |<br/><br/><strong>Hot Reloading (HMR):</strong><br/>• <strong>Преимущество:</strong> Сохраняет текущее состояние компонента (например, текст в поле ввода, положение в списке).<br/>• <strong>Недостаток:</strong> Может не сработать для некоторых изменений (например, нативного кода или глобальных переменных).<br/><br/><strong>Live Reloading (Полная перезагрузка):</strong><br/>• <strong>Преимущество:</strong> Гарантированно отражает все изменения, включая нативные модули.<br/>• <strong>Недостаток:</strong> Теряется текущее состояние, что замедляет тестирование интерактивных элементов.",
        difficulty: "easy"
      },
      {
        id: "rn-13",
        question: "Опишите базовые компоненты React Native для обработки пользовательского ввода (Text Input, Picker, Touchables).",
        answer: "React Native предоставляет специфические компоненты для обработки ввода, которые используют нативные элементы платформ.<br/><br/><strong>1. `<TextInput>`:</strong><br/>• Для ввода текста (аналог `<input type='text'>` или `<textarea>`).<br/>• Поддерживает <strong>`onChangeText`</strong> для отслеживания ввода и <strong>`value`</strong> для контролируемого компонента.<br/>• Имеет свойства для клавиатуры (`keyboardType`), автозаполнения (`autoCompleteType`) и безопасности ввода (`secureTextEntry`).<br/><br/><strong>2. `<Picker>`:</strong><br/>• Компонент для выбора одного значения из дискретного набора опций (аналог `<select>`).<br/>• На iOS и Android может выглядеть и работать по-разному, используя нативные элементы выбора.<br/><br/><strong>3. Touchables (Обработка касаний):</strong><br/>• Базовый `<Button>` слишком ограничен.<br/>• <strong>`<TouchableOpacity>`:</strong> Снижает прозрачность области при нажатии, давая визуальный отклик. Наиболее часто используемый.<br/>• <strong>`<TouchableHighlight>`:</strong> Подсвечивает область, меняя фон. Используется реже.<br/>• <strong>`<TouchableWithoutFeedback>`:</strong> Реагирует на касание, но не дает визуального отклика.",
        difficulty: "medium"
      }
    ]
  },
  // Next
  {
    id: "nextjs",
    name: "Next.js",
    questions: [
      {
        id: "nj-1",
        question: "Что такое Next.js и каковы его основные возможности?",
        answer: "<strong>Next.js</strong> — это полнофункциональный <strong>React-фреймворк</strong> для создания продакшн-приложений. Он предоставляет набор инструментов и конфигураций, которые упрощают разработку современных, высокопроизводительных веб-приложений.<br/><br/><strong>Основные возможности (Rendering Strategies):</strong><br/>1. <strong>Server-Side Rendering (SSR):</strong> Генерация HTML на сервере при каждом запросе.<br/>2. <strong>Static Site Generation (SSG):</strong> Пре-рендеринг HTML во время сборки (`build time`).<br/>3. <strong>Incremental Static Regeneration (ISR):</strong> Обновление статических страниц через заданный интервал.<br/>4. <strong>Гибридный рендеринг:</strong> Возможность использовать разные стратегии для разных страниц.<br/><br/><strong>Дополнительные функции:</strong><br/>• <strong>Маршрутизация на основе файловой системы (File-system routing).</strong><br/>• <strong>Автоматическое разделение кода (Code Splitting).</strong><br/>• <strong>API Routes</strong> для создания бэкенд-эндпоинтов.",
        difficulty: "easy"
      },
      {
        id: "nj-2",
        question: "Сравните Next.js и Create React App (CRA).",
        answer: "Основное различие в том, что <strong>CRA</strong> — это инструмент для быстрого старта <strong>клиентских</strong> приложений (SPA), а <strong>Next.js</strong> — это <strong>фреймворк для полного стека (Full-stack)</strong>, который включает серверный рендеринг.<br/><br/>| Аспект | Next.js | Create React App (CRA) |<br/>| :--- | :--- | :--- |<br/>| <strong>Рендеринг</strong> | Встроенные SSR, SSG, ISR и CSR. | <strong>Только CSR</strong> (Client-Side Rendering). |<br/>| <strong>SEO</strong> | Отличное, благодаря SSG/SSR, контент виден поисковикам сразу. | Плохое, требует сторонних библиотек (например, React Helmet) или SSR-оберток. |<br/>| <strong>Маршрутизация</strong> | <strong>Автоматическая</strong>, на основе файловой системы (`pages/`). | <strong>Ручная</strong>, требует установки и настройки `react-router-dom`. |<br/>| <strong>API</strong> | Встроенные <strong>API Routes</strong> для создания бэкенда. | Отсутствуют, нужно развертывать отдельный сервер (Express, Node.js). |<br/>| <strong>Конфигурация</strong> | Фреймворк с 'батарейками в комплекте' и гибкой конфигурацией. | Набор скриптов с жесткой конфигурацией (сложно 'эджектить'). |",
        difficulty: "medium"
      },
      {
        id: "nj-3",
        question: "Как создать новое Next.js приложение?",
        answer: "Самый простой и рекомендуемый способ создать новое Next.js приложение — использовать команду <strong>`create-next-app`</strong> через `npx` (для Node.js 12+):<br/><br/>```bash<br/>npx create-next-app my-next-app<br/>```<br/><br/><strong>`npx`</strong> выполнит последнюю версию пакета, даже если он не установлен глобально. Вместо `my-next-app` укажите имя вашей рабочей директории. Этот скрипт автоматически настроит базовую файловую структуру, включая каталог `pages/`, и установит все необходимые зависимости.",
        difficulty: "easy"
      },
      {
        id: "nj-4",
        question: "Объясните Server-Side Rendering (SSR) в контексте Next.js.",
        answer: "<strong>Server-Side Rendering (SSR)</strong> — это метод рендеринга, при котором HTML для страницы генерируется <strong>на сервере при каждом запросе</strong> пользователя. Это обеспечивает отображение актуальных данных.<br/><br/><strong>Механизм:</strong><br/>1. Пользователь запрашивает URL.<br/>2. Сервер Next.js выполняет функцию <strong>`getServerSideProps`</strong> на запрошенной странице.<br/>3. Сервер генерирует полную HTML-страницу, включая актуальные данные, и отправляет ее браузеру.<br/>4. После загрузки HTML, клиентский JS 'оживляет' страницу (процесс <strong>гидратации</strong>).<br/><br/><strong>Использование:</strong> Для активации SSR на странице необходимо <strong>экспортировать</strong> асинхронную функцию <strong>`getServerSideProps`</strong>.",
        difficulty: "medium"
      },
      {
        id: "nj-5",
        question: "Каталог `pages` в Next.js: его роль и как он сопоставляется с маршрутами?",
        answer: "Каталог <strong>`pages`</strong> служит основным <strong>инструментом определения маршрутов</strong> в Next.js. Каждая компонента-страница, расположенная внутри этого каталога, автоматически становится URL-маршрутом (Page-based routing).<br/><br/><strong>Ключевые сопоставления:</strong><br/>• <strong>Корневой маршрут:</strong> `pages/index.js` $\rightarrow$ `/`<br/>• <strong>Вложенный маршрут:</strong> `pages/about.js` $\rightarrow$ `/about`<br/>• <strong>Маршрут секции:</strong> `pages/posts/index.js` $\rightarrow$ `/posts`<br/>• <strong>Динамический маршрут:</strong> `pages/posts/[id].js` $\rightarrow$ `/posts/:id`<br/><br/><strong>Специальные файлы:</strong><br/>• <strong>`_app.js`:</strong> Главная компонента, обертывающая все страницы (для глобальных стилей, контекста).<br/>• <strong>`_document.js`:</strong> Настраивает серверный рендеринг HTML-документа (теги `<html>`, `<body>`).<br/>• <strong>`404.js`:</strong> Пользовательская страница для обработки 404 ошибок.",
        difficulty: "easy"
      },
      {
        id: "nj-6",
        question: "Как реализовать Server-Side Rendering (SSR) на конкретной странице?",
        answer: "Для реализации SSR на странице необходимо <strong>экспортировать</strong> асинхронную функцию <strong>`getServerSideProps`</strong> из файла страницы.<br/><br/><strong>Принцип работы `getServerSideProps`:</strong><br/>1. Эта функция запускается <strong>при каждом запросе</strong> к странице.<br/>2. Она выполняется <strong>исключительно на сервере</strong> и никогда не попадает в клиентский бандл.<br/>3. Возвращает объект с ключом `props`, которые передаются в компонент страницы.<br/><br/><strong>Пример:</strong><br/>```javascript<br/>export default function ServerSide({ time }) {<br/>&nbsp;&nbsp;return <p>Current time: {time}</p>;<br/>}<br/>export async function getServerSideProps() {<br/>&nbsp;&nbsp;// Получение данных при каждом запросе<br/>&nbsp;&nbsp;return {<br/>&nbsp;&nbsp;&nbsp;&nbsp;props: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time: new Date().toISOString(), // Актуальное время<br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;};<br/>}<br/>```",
        difficulty: "medium"
      },
      {
        id: "nj-7",
        question: "Какие расширения файлов поддерживаются для страниц и компонентов в Next.js?",
        answer: "Next.js имеет встроенную поддержку различных файловых расширений для компонентов страниц, стилей и других ресурсов:<br/><br/><strong>Страницы/Компоненты:</strong><br/>• <strong>`.js`</strong> или <strong>`.jsx`</strong> (стандартный JavaScript/React)<br/>• <strong>`.ts`</strong> или <strong>`.tsx`</strong> (TypeScript/React)<br/>• <strong>`.mdx`</strong> (Markdown с возможностью встраивания JSX/React компонентов)<br/><br/><strong>Стилизация:</strong><br/>• <strong>`.css`</strong> (Стандартный CSS)<br/>• <strong>`.module.css`</strong> (CSS Modules для локальной области видимости)<br/>• <strong>`.scss`</strong> или <strong>`.sass`</strong> (при установке `sass`)<br/><br/>Благодаря этой гибкости разработчики могут использовать предпочтительные инструменты, включая TypeScript, без дополнительной сложной настройки.",
        difficulty: "easy"
      },
      {
        id: "nj-8",
        question: "Как используются переменные окружения (Environment Variables) в Next.js?",
        answer: "Переменные окружения используются для настройки параметров приложения в зависимости от среды (разработка, тестирование, продакшн) и хранения <strong>конфиденциальных данных</strong>.<br/><br/><strong>Механизм:</strong><br/>1. <strong>Файлы:</strong> Переменные объявляются в файлах `.env.local` (или `.env.development`, `.env.production`).<br/>2. <strong>Доступ:</strong> Доступ к ним осуществляется через `process.env.<VARIABLE_NAME>`.<br/><br/><strong>Видимость (Критически важно):</strong><br/>• <strong>Серверные:</strong> По умолчанию переменные доступны <strong>только на сервере</strong> (ключи БД, секреты API).<br/>• <strong>Клиентские:</strong> Чтобы сделать переменную доступной <strong>в браузере</strong>, ей нужно добавить префикс <strong>`NEXT_PUBLIC_`</strong> (например, `NEXT_PUBLIC_GA_KEY`). <strong>Никогда</strong> не храните секретные ключи с этим префиксом.",
        difficulty: "medium"
      },
      {
        id: "nj-9",
        question: "Что такое Automatic Static Optimization (Автоматическая статическая оптимизация) в Next.js?",
        answer: "<strong>Automatic Static Optimization</strong> — это механизм, при котором Next.js <strong>автоматически</strong> определяет, какие страницы можно преобразовать в статический HTML <strong>во время сборки</strong>, если они <strong>не</strong> используют методы серверного рендеринга (`getServerSideProps`) и <strong>не</strong> запрашивают данные.<br/><br/><strong>Принцип работы:</strong><br/>Next.js сканирует страницы; если страница может быть отрендерена без данных, которые нужно получать во время запроса, она статически оптимизируется. Это обеспечивает <strong>максимальную скорость загрузки</strong>, так как страница обслуживается CDN без необходимости запускать Node.js сервер.<br/><br/>*Пример: Страница `/about` или `/contact`, которая не требует динамических данных.*",
        difficulty: "medium"
      },
      {
        id: "nj-10",
        question: "Объясните File-based routing в Next.js.",
        answer: "<strong>File-based routing</strong> (маршрутизация на основе файловой системы) — это основной механизм маршрутизации в Next.js. Структура каталогов и файлов внутри папки <strong>`pages`</strong> напрямую определяет URL-адреса приложения.<br/><br/><strong>Пример структуры:</strong><br/>```<br/>pages/<br/>├── index.js // /<br/>├── cart.js // /cart<br/>└── products/<br/>    ├── index.js // /products<br/>    └── [product-id].js // /products/:product-id<br/>```<br/><br/><strong>Преимущество:</strong> Это упрощает организацию кода, поскольку вы видите структуру URL-адресов прямо в файловой системе. Не требуется ручная настройка маршрутов.",
        difficulty: "easy"
      },
      {
        id: "nj-11",
        question: "Что такое Dynamic Routes (Динамические маршруты) и как их настроить?",
        answer: "<strong>Динамические маршруты</strong> позволяют URL-адресу иметь переменные сегменты, которые могут быть получены страницей для загрузки соответствующего контента (например, статьи, товары).<br/><br/><strong>Настройка:</strong><br/>Используйте <strong>квадратные скобки</strong> вокруг имени параметра в имени файла.<br/>• <strong>Один параметр:</strong> `pages/post/[id].js` $\rightarrow$ извлекается `router.query.id`.<br/>• <strong>Catch-All (Перехватывающий) маршрут:</strong> Используется синтаксис <strong>`pages/doc/[...slug].js`</strong>.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Он перехватывает <strong>все вложенные пути</strong> (например, `/doc/intro/setup`) и возвращает их как массив строк (`router.query.slug`).",
        difficulty: "medium"
      },
      {
        id: "nj-12",
        question: "Как получить параметры URL (Query Parameters) в компоненте страницы Next.js?",
        answer: "Для доступа к параметрам URL (как динамическим сегментам, так и query-параметрам) используется <strong>Хук `useRouter`</strong> из `next/router`.<br/><br/><strong>Шаги:</strong><br/>1. Импортировать `useRouter`.<br/>2. Вызвать хук для получения объекта `router`.<br/>3. Доступ к параметрам через <strong>`router.query`</strong>.<br/><br/><strong>Пример:</strong> Если URL `/products/123?sort=price`<br/>```javascript<br/>import { useRouter } from 'next/router';<br/>// ...<br/>const router = useRouter();<br/>const { id, sort } = router.query; // id=123, sort=price<br/>```",
        difficulty: "easy"
      },
      {
        id: "nj-13",
        question: "Для чего используется компонент `<Link>` в Next.js?",
        answer: "Компонент <strong>`<Link>`</strong> из `next/link` — это основной инструмент для <strong>клиентской навигации</strong> внутри Next.js приложения. Он улучшает производительность и пользовательский опыт.<br/><br/><strong>Ключевые функции:</strong><br/>1. <strong>Клиентская навигация:</strong> Предотвращает полную перезагрузку страницы, обеспечивая мгновенные переходы.<br/>2. <strong>Предварительная загрузка (Prefetching):</strong> Автоматически загружает JavaScript-бандл целевой страницы при появлении ссылки в области просмотра, ускоряя переход.<br/>3. <strong>Code Splitting:</strong> Работает с автоматическим разделением кода, загружая только нужный код.",
        difficulty: "easy"
      },
      {
        id: "nj-14",
        question: "Что такое Catch-All Routes (Перехватывающие маршруты) и когда они используются?",
        answer: "<strong>Catch-All Routes</strong> (маршруты 'поймать все') позволяют динамическому маршруту сопоставляться <strong>с любым количеством сегментов пути</strong>.<br/><br/><strong>Настройка:</strong> Используется синтаксис <strong>`pages/dir/[...slug].js`</strong>.<br/><br/><strong>Использование:</strong><br/>• <strong>Сложные URL:</strong> Идеально подходят для секций документации или блогов, где статьи могут иметь вложенные пути (например, `/docs/guide/introduction`).<br/>• <strong>Обработка 404:</strong> Могут служить для создания пользовательских обработчиков неизвестных путей внутри определенной директории.<br/><br/>Маршрутизатор возвращает параметры как <strong>массив строк</strong> в `router.query.slug`.",
        difficulty: "medium"
      },
      {
        id: "nj-15",
        question: "Что такое `getStaticProps` и когда его следует использовать?",
        answer: "<strong>`getStaticProps`</strong> — это асинхронная функция, которая выполняется <strong>только на сервере во время сборки (`build time`)</strong> для предварительной загрузки данных.<br/><br/><strong>Ключевые особенности:</strong><br/>1. <strong>Стратегия рендеринга:</strong> Включает <strong>Static Site Generation (SSG)</strong>. Страница становится статичным HTML-файлом.<br/>2. <strong>`revalidate`:</strong> Может возвращать поле `revalidate: N` для включения <strong>Incremental Static Regeneration (ISR)</strong>, обновляя статическую страницу через `N` секунд без пересборки.<br/><br/><strong>Использование:</strong><br/>Идеально подходит для страниц, контент которых <strong>не меняется часто</strong> (блоги, документация, страницы товаров), так как обеспечивает максимальную скорость и отличное <strong>SEO</strong>.",
        difficulty: "medium"
      }
    ]
  },
  // Angular
  {
    "id": "angular",
    "name": "Angular",
    "questions": [
      {
        "id": "ang-1",
        "question": "Что такое Angular и каковы его ключевые особенности?",
        "answer": "<strong>Angular</strong> — это структурная, <strong>TypeScript-ориентированная</strong> платформа с открытым исходным кодом для создания <strong>одностраничных приложений (SPA)</strong>. Ключевые особенности: <strong>Компонентная архитектура</strong>, <strong>Модульность</strong> (через NG Modules), <strong>Внедрение зависимостей (DI)</strong>, <strong>Шаблоны (Templates)</strong>, <strong>Директивы</strong>, и работа с <strong>Observables</strong> для асинхронных операций.",
        "difficulty": "easy"
      },
      {
        "id": "ang-2",
        "question": "Объясните концепцию связывания данных (Data Binding) в Angular и его типы.",
        "answer": "<strong>Связывание данных</strong> — это механизм, который синхронизирует данные между <strong>Компонентом (модель)</strong> и <strong>DOM (представление)</strong>.\n\n<strong>Типы связывания:</strong>\n1. <strong>Одностороннее (One-Way):</strong> Интерполяция `{{ value }}`, Связывание свойств `[property]=\"value\"`, Связывание событий `(event)=\"handler()\"`.\n2. <strong>Двустороннее (Two-Way):</strong> Использует синтаксис <strong>`[(ngModel)]`</strong> для синхронизации в обе стороны (особенно в формах).",
        "difficulty": "medium"
      },
      {
        "id": "ang-3",
        "question": "Опишите архитектуру приложения Angular.",
        "answer": "Архитектура Angular основана на <strong>модульности</strong> и <strong>компонентах</strong>. Она состоит из четырех основных элементов:\n1. <strong>Модули (NG Modules):</strong> Контейнеры, группирующие функциональность.\n2. <strong>Компоненты (Components):</strong> Основные строительные блоки UI.\n3. <strong>Сервисы (Services):</strong> Классы для общей, переиспользуемой логики (работа с API, управление данными).\n4. <strong>Маршрутизатор (Router):</strong> Модуль для управления навигацией.\nДанные обычно следуют <strong>однонаправленным потоком</strong> через `@Input()` и `@Output()`.",
        "difficulty": "medium"
      },
      {
        "id": "ang-4",
        "question": "Что такое Компонент (Component) в Angular?",
        "answer": "<strong>Компонент</strong> — это фундаментальный строительный блок Angular, представляющий собой часть пользовательского интерфейса. Каждый компонент состоит из:\n• <strong>Класса (TypeScript)</strong>: Содержит логику и данные, помечен декоратором <strong>`@Component()`</strong>.\n• <strong>Шаблона (Template)</strong>: HTML-код, определяющий структуру UI.\n• <strong>Стилей (Styles)</strong>: CSS-код, который по умолчанию <strong>изолирован</strong> и применяется только к данному компоненту. Компоненты образуют <strong>Дерево Компонентов (Component Tree)</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "ang-5",
        "question": "Что такое Директивы (Directives) и их типы?",
        "answer": "<strong>Директивы</strong> — это маркеры на элементе DOM, которые предписывают Angular прикрепить к этому элементу особое поведение или трансформировать его структуру.\n\n<strong>Типы директив:</strong>\n1. <strong>Компоненты (`@Component`)</strong>.\n2. **Структурные (`*`):<strong> Изменяют структуру DOM. Примеры: </strong>`*ngIf`<strong>, </strong>`*ngFor`<strong>.\n3. </strong>Атрибутные (`@Directive`):<strong> Изменяют внешний вид или поведение элемента. Примеры: </strong>`[ngStyle]`<strong>, </strong>`[ngClass]`**.",
        "difficulty": "easy"
      },
      {
        "id": "ang-6",
        "question": "Какова роль Сервисов (Services) в Angular?",
        "answer": "<strong>Сервисы</strong> используются для <strong>разделения ответственности</strong> и <strong>повторного использования кода (DRY)</strong>. Они содержат бизнес-логику, общие данные или логику работы с HTTP. Сервисы являются <strong>синглтонами</strong> (по умолчанию, если предоставлены в `providedIn: 'root'`) и внедряются в компоненты или другие сервисы с помощью <strong>Внедрения Зависимостей (DI)</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "ang-7",
        "question": "Что такое Внедрение Зависимостей (Dependency Injection - DI) в Angular?",
        "answer": "<strong>DI</strong> — это основной шаблон проектирования, который позволяет компонентам или сервисам получать свои зависимости (другие сервисы) <strong>извне</strong>.\n\n<strong>Механизм:</strong>\n1. <strong>Регистрация:</strong> Сервис регистрируется как <strong>провайдер</strong> (например, в `@Injectable({ providedIn: 'root' })`).\n2. <strong>Инжектирование:</strong> Angular автоматически создает и предоставляет нужный экземпляр сервиса в <strong>конструктор</strong> компонента. Это обеспечивает модульность и тестируемость.",
        "difficulty": "medium"
      },
      {
        "id": "ang-8",
        "question": "Что такое Модули (Modules) в Angular и их типы?",
        "answer": "<strong>Модуль (NG Module)</strong> — это контейнер, определенный декоратором <strong>`@NgModule`</strong>, который группирует логически связанные компоненты, директивы, сервисы и пайпы. Они помогают организовать приложение.\n\n<strong>Типы модулей:</strong>\n1. <strong>Корневой Модуль (Root Module):</strong> (`AppModule`) — входная точка приложения.\n2. <strong>Модули Функций (Feature Modules):</strong> Группируют функциональность по конкретной теме. Могут быть <strong>лениво загружаемыми (Lazy-Loaded)</strong> для оптимизации времени запуска.",
        "difficulty": "easy"
      },
      {
        "id": "ang-9",
        "question": "Как обрабатываются события (Events) в Angular?",
        "answer": "События обрабатываются с помощью <strong>связывания событий (Event Binding)</strong> в шаблоне, используя синтаксис <strong>`(event)=\"handler($event)\"`</strong>.\n\nAngular слушает DOM-событие (например, `click`) и вызывает соответствующий метод в классе компонента, передавая при необходимости объект события <strong>`$event`</strong>. Это <strong>декларативный подход</strong>. Также возможен <strong>императивный подход</strong> через `ViewChild` и `addEventListener`.",
        "difficulty": "easy"
      },
      {
        "id": "ang-10",
        "question": "Как реализовать двустороннее связывание данных (Two-Way Binding)?",
        "answer": "Двустороннее связывание в Angular реализуется с помощью директивы <strong>`[(ngModel)]`</strong> (синтаксис 'banana in a box').\n\n<strong>Требования:</strong>\n1. Импортировать <strong>`FormsModule`</strong> в модуль.\n2. Использовать `[(ngModel)]` на элементе ввода, привязанном к свойству компонента: `<input [(ngModel)]=\"name\" name=\"inputName\" />`",
        "difficulty": "easy"
      },
      {
        "id": "ang-11",
        "question": "В чем разница между Компонентами и Директивами?",
        "answer": "<strong>Компоненты</strong> (`@Component`) — это <strong>основные строительные блоки UI</strong>, которые <strong>всегда имеют свой шаблон и стили</strong>.\n\n<strong>Директивы</strong> (`@Directive`) — это <strong>маркеры</strong>, которые <strong>добавляют поведение</strong> или <strong>трансформируют</strong> существующие элементы DOM или компоненты. Они могут не иметь своего шаблона (например, атрибутные директивы, как `ngClass`).",
        "difficulty": "medium"
      },
      {
        "id": "ang-12",
        "question": "Что такое Пайпы (Pipes) в Angular?",
        "answer": "<strong>Пайпы</strong> — это классы, помеченные декоратором `@Pipe`, которые используются для <strong>трансформации данных</strong> (форматирования) прямо в шаблоне для отображения пользователю. Они не меняют исходные данные компонента. \n\n<strong>Синтаксис:</strong> `{{ value | pipeName: param1 }}`. Примеры: <strong>`date`</strong>, <strong>`currency`</strong>, <strong>`uppercase`</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "ang-13",
        "question": "Сравните Template-Driven Forms и Reactive Forms.",
        "answer": "<strong>Template-Driven Forms (TDF):</strong> Логика управляется директивами в <strong>HTML-шаблоне</strong>. Проще для простых форм.\n\n<strong>Reactive Forms (RF):</strong> Форма и ее элементы создаются <strong>программно</strong> в <strong>классе компонента</strong> (`FormGroup`, `FormControl`). Рекомендуется для сложных форм из-за лучшего контроля, масштабируемости и тестируемости.",
        "difficulty": "medium"
      },
      {
        "id": "ang-14",
        "question": "Какова роль Angular CLI?",
        "answer": "<strong>Angular CLI (Command Line Interface)</strong> — это мощный инструмент командной строки, который <strong>автоматизирует</strong> и <strong>ускоряет</strong> разработку Angular-приложений.\n\n<strong>Ключевые возможности:</strong> Инициализация проекта (`ng new`), <strong>Генерация кода</strong> (`ng generate component`), запуск сервера (`ng serve`), <strong>Сборка для продакшна</strong> с оптимизацией (`ng build --prod`).",
        "difficulty": "easy"
      },
      {
        "id": "ang-15",
        "question": "Как выполнять HTTP-запросы в Angular?",
        "answer": "HTTP-запросы выполняются с помощью встроенного сервиса <strong>`HttpClient`</strong>, который необходимо <strong>инжектировать</strong> в конструктор (обычно в сервисном классе).\n\n<strong>Шаги:</strong>\n1. Импортировать <strong>`HttpClientModule`</strong> в модуль.\n2. Инжектировать <strong>`HttpClient`</strong>.\n3. Использовать методы `this.http.get()`, `post()`, `put()`, `delete()`, которые возвращают <strong>Observable</strong> (требуют подписки <strong>`.subscribe()`</strong>).",
        "difficulty": "easy"
      },
      {
        "id": "ang-16",
        "question": "Жизненный цикл компонента: какие есть хуки (ngOnInit, ngOnChanges, ngOnDestroy и др.)?",
        "answer": "<strong>Хуки Жизненного Цикла</strong> — это методы, которые Angular вызывает в определенные моменты существования компонента/директивы.<br/><br/><strong>Ключевые хуки:</strong><br/>1. <strong><code>ngOnChanges</code></strong>: Вызывается при изменении входных свойств (<code>@Input()</code>).<br/>2. <strong><code>ngOnInit</code></strong>: Вызывается один раз после первого <code>ngOnChanges</code>; используется для инициализации данных.<br/>3. <strong><code>ngDoCheck</code></strong>: Вызывается сразу после CD. Используется для реализации своей логики CD.<br/>4. <strong><code>ngAfterContentInit/Checked</code></strong>: Для инициализации/проверки контента, вставленного через <code><ng-content></code>.<br/>5. <strong><code>ngAfterViewInit/Checked</code></strong>: Для инициализации/проверки элементов, полученных через <code>ViewChild</code>/<code>ViewChildren</code>.<br/>6. <strong><code>ngOnDestroy</code></strong>: Вызывается непосредственно перед уничтожением компонента; используется для отписки от Observables и очистки ресурсов.",
        "difficulty": "medium"
      },
      {
        "id": "ang-17",
        "question": "Объясните разницу между @Input() и @Output().",
        "answer": "Это механизмы для <strong>взаимодействия компонентов</strong> в Дереве Компонентов.<br/><br/>1. <strong><code>@Input()</code>:</strong> Позволяет <strong>родительскому компоненту</strong> передавать <strong>данные вниз</strong> (в дочерний).<br/>2. <strong><code>@Output()</code>:</strong> Позволяет <strong>дочернему компоненту</strong> отправлять <strong>события вверх</strong> (родительскому) с помощью экземпляра <strong><code>EventEmitter</code></strong>.",
        "difficulty": "easy"
      },
      {
        "id": "ang-18",
        "question": "Что такое Observables (RxJS) и чем они отличаются от Promise?",
        "answer": "<strong>Observable (RxJS)</strong> — это поток данных, который может выдавать <strong>ноль, одно или несколько значений</strong> с течением времени (ленивый, многократный, отменяемый).<br/><br/><strong>Promise</strong> — выдает <strong>одно значение</strong> (или ошибку) и завершается (неленивый, однократный, неотменяемый).",
        "difficulty": "medium"
      },
      {
        "id": "ang-19",
        "question": "Как работает Routing в Angular? Что такое lazy loading модулей?",
        "answer": "<strong>Маршрутизация (Routing)</strong> позволяет приложению перемещаться между различными представлениями (компонентами) без перезагрузки страницы, используя API истории браузера. Навигация настраивается в конфигурации маршрутов.<br/><br/><strong>Lazy Loading (Ленивая загрузка)</strong> — это архитектурный паттерн, при котором <strong>Feature Module</strong> загружается не при старте приложения, а <strong>только при первом обращении к его маршрутам</strong>. Это значительно уменьшает начальный размер бандла и ускоряет запуск приложения.",
        "difficulty": "medium"
      },
      {
        "id": "ang-20",
        "question": "Что такое Guard в Angular (CanActivate, CanDeactivate и т.д.)?",
        "answer": "<strong>Гарды (Guards)</strong> — это классы, реализующие определенные интерфейсы (<code>CanActivate</code>, <code>CanDeactivate</code> и др.), которые позволяют <strong>управлять доступом</strong> к маршрутам. Они запускаются до или после навигации.<br/><br/>* <strong><code>CanActivate</code></strong>: Разрешает/запрещает доступ к маршруту.<br/>* <strong><code>CanDeactivate</code></strong>: Разрешает/запрещает уход с маршрута (например, если форма не сохранена).",
        "difficulty": "medium"
      },
      {
        "id": "ang-21",
        "question": "Что такое Change Detection и какие есть стратегии (Default vs OnPush)?",
        "answer": "<strong>Change Detection (CD)</strong> — механизм, который <strong>проверяет изменения</strong> в модели данных и <strong>обновляет DOM</strong>, чтобы отобразить новое состояние.<br/><br/><strong>Стратегии:</strong><br/>1. <strong><code>Default</code> (CheckAlways)</strong>: Компонент проверяется при <strong>любом</strong> событии (клика, таймера, HTTP-запроса) в приложении.<br/>2. <strong><code>OnPush</code> (CheckOnce)</strong>: Компонент проверяется <strong>только</strong> если изменились входные свойства (<code>@Input()</code>) по ссылке (не мутация) или если произошло событие внутри компонента.",
        "difficulty": "hard"
      },
      {
        "id": "ang-22",
        "question": "Как работает механизм Zone.js и зачем он нужен Angular?",
        "answer": "<strong>Zone.js</strong> — это библиотека, которая <strong>патчит</strong> (обертывает) асинхронные API браузера (<code>setTimeout</code>, <code>addEventListener</code>, <code>Promise</code> и др.), создавая <strong>\"зоны\" выполнения</strong>.<br/><br/><strong>Роль в Angular:</strong> Когда асинхронная операция в зоне завершается, Zone.js уведомляет Angular о потенциальном изменении данных. Это автоматически <strong>запускает цикл Change Detection</strong>, освобождая разработчика от ручного вызова CD.",
        "difficulty": "hard"
      },
      {
        "id": "ang-23",
        "question": "Объясните internals работы Change Detection и как OnPush влияет на производительность.",
        "answer": "Внутренне CD — это <strong>обход Дерева Компонентов (Component Tree)</strong> сверху вниз. Для каждого компонента Angular сравнивает <strong>предыдущее значение</strong> свойства с <strong>текущим</strong> и при расхождении обновляет DOM.<br/><br/><strong><code>OnPush</code> Влияние:</strong> Значительно <strong>повышает производительность</strong>, так как Angular может <strong>пропускать поддерево</strong> компонентов, если их входные данные (<code>@Input</code>) не изменились по ссылке, а также не было событий внутри компонента. Это минимизирует количество проверок.",
        "difficulty": "hard"
      },
      {
        "id": "ang-24",
        "question": "Что такое Ahead-of-Time (AOT) компиляция и чем она отличается от JIT?",
        "answer": "<strong>AOT (Ahead-of-Time)</strong> — компиляция шаблонов и компонентов **во время сборки** (build time), до того, как код будет запущен в браузере. <br/><br/>**JIT (Just-in-Time)** — компиляция происходит **в браузере во время выполнения**.<br/><br/>**Преимущества AOT:** Более быстрая загрузка (нет компиляции в браузере), меньший размер бандла (удаляется компилятор), более ранняя ловля ошибок шаблонов.",
        "difficulty": "medium"
      },
      {
        "id": "ang-25",
        "question": "Чем отличаются ViewChild и ContentChild? В каких случаях использовать?",
        "answer": "Оба декоратора используются для получения доступа к элементам в шаблоне компонента.<br/><br/>1. <strong><code>@ViewChild()</code>:</strong> Получает ссылку на элемент (HTML, компонент или директиву), который находится **в собственном шаблоне** компонента.<br/>2. <strong><code>@ContentChild()</code>:</strong> Получает ссылку на элемент, который был **вставлен** в компонент через механизм <strong>проекции контента (<code><ng-content></code>)</strong>.",
        "difficulty": "medium"
      },
      {
        "id": "ang-26",
        "question": "Разница между Subject, BehaviorSubject, ReplaySubject, AsyncSubject (RxJS).",
        "answer": "Все они являются <strong>Observable</strong>, которые также могут быть <strong>Observer</strong> (то есть, они могут и генерировать, и принимать значения).<br/><br/>1. <strong><code>Subject</code></strong>: Обычный вещатель, не хранит состояние. Подписчики получают **только будущие** значения.<br/>2. <strong><code>BehaviorSubject</code></strong>: Хранит <strong>текущее значение</strong> (требует начального). Подписчики получают **сразу последнее** значение, затем будущие.<br/>3. <strong><code>ReplaySubject</code></strong>: Хранит <strong>буфер</strong> из $N$ последних значений (кеширует их). Подписчики получают эти $N$ значений сразу.<br/>4. <strong><code>AsyncSubject</code></strong>: Отправляет <strong>только последнее</strong> значение, и только **после** вызова <code>complete()</code>.",
        "difficulty": "hard"
      },
      {
        "id": "ang-27",
        "question": "Что такое Ivy renderer и чем он отличается от старого View Engine?",
        "answer": "<strong>Ivy</strong> — это кодовое название для переработанного <strong>движка рендеринга и компилятора Angular</strong> (начиная с Angular 9).<br/><br/><strong>Ключевые отличия:</strong><br/>1. <strong>Tree-shaking:</strong> Значительно лучше удаляет неиспользуемый код, уменьшая размер бандла.<br/>2. <strong>Locality:</strong> Компилирует каждый компонент независимо (быстрее).<br/>3. <strong>Agnostic:</strong> Улучшает совместимость с другими фреймворками (Micro Frontends).<br/>4. **Smaller Bundle Size.**",
        "difficulty": "medium"
      },
      {
        "id": "ang-28",
        "question": "Что такое NgZone.run() и NgZone.runOutsideAngular()? Когда использовать?",
        "answer": "Это методы для работы с <strong>Zone.js</strong> и механизмом Change Detection.<br/><br/>1. <strong><code>NgZone.run(callback)</code>:</strong> Выполняет код **внутри зоны Angular**. Это **гарантирует** запуск Change Detection после выполнения <code>callback</code>. Используется редко, чаще всего для принудительного запуска CD после кода, который был запущен <code>runOutsideAngular</code>.<br/>2. <strong><code>NgZone.runOutsideAngular(callback)</code>:</strong> Выполняет код **вне зоны Angular**. Это <strong>предотвращает запуск Change Detection</strong>. Используется для высокочастотных, не влияющих на данные событий (например, движения мыши, анимации), чтобы избежать постоянного запуска CD и улучшить производительность.",
        "difficulty": "hard"
      },
      {
        "id": "ang-29",
        "question": "Как работает оптимизация tree-shaking в Angular и зачем нужны providedIn: 'root'?",
        "answer": "<strong>Tree-shaking</strong> — это процесс удаления \"мертвого\" кода (функций, классов), который был импортирован, но никогда не использовался, во время сборки.<br/><br/><strong><code>providedIn: 'root'</code>:</strong> Когда сервис зарегистрирован таким образом, Angular CLI может легко определить, **используется ли** этот сервис где-либо в приложении. Если он не инжектируется ни в один класс, компилятор AOT <strong>полностью удаляет</strong> этот сервис из финального бандла, обеспечивая эффективный tree-shaking и уменьшение размера кода.",
        "difficulty": "medium"
      },
      {
        "id": "ang-30",
        "question": "Что такое State Management (NgRx, Akita, NGXS)? Какие плюсы и минусы у NgRx?",
        "answer": "<strong>State Management</strong> — это паттерны и библиотеки для <strong>централизованного управления состоянием приложения</strong> (данными), особенно в больших SPA, для обеспечения предсказуемости.<br/><br/>**NgRx (Redux-подобный):**<br/>* **Плюсы:** Предсказуемость (однонаправленный поток данных), мощные инструменты для отладки (DevTools), отличная масштабируемость.<br/>* **Минусы:** Много boilerplate-кода (Action, Reducer, Effect), высокий порог входа, требует больше времени на реализацию простых функций.",
        "difficulty": "medium"
      },
      {
        "id": "ang-31",
        "question": "Какие есть стратегии оптимизации производительности Angular-приложения (CD, trackBy, detach, memoization)?",
        "answer": "Основные стратегии:<br/>1.  <strong>Change Detection:</strong> Переход на стратегию <strong><code>OnPush</code></strong>.<br/>2.  <strong><code>trackBy</code> (в <code>*ngFor</code>):</strong> Помогает Angular более эффективно обновлять DOM-элементы в циклах, предотвращая перерисовку всего списка при добавлении/удалении одного элемента.<br/>3.  <strong><code>detach</code>/<code>attach</code>:</strong> Вручную отключает/включает поддерево компонентов из цикла CD для высокочастотных изменений (используется <code>ChangeDetectorRef</code>).<br/>4.  <strong>Lazy Loading:</strong> Ленивая загрузка модулей.<br/>5.  **AOT/Tree-Shaking.**<br/>6.  **Memoization (Пайпы):** Использование <code>Pure Pipes</code>, которые выполняются только при изменении входных данных.",
        "difficulty": "hard"
      }


    ]
  },
  // AngularJS
  {
    "id": "angularjs",
    "name": "AngularJS",
    "questions": [
      {
        "id": "ajs-1",
        "question": "Что такое AngularJS и каковы его ключевые особенности?",
        "answer": "<strong>AngularJS</strong> — это JavaScript-фреймворк с открытым исходным кодом (версия 1.x), разработанный Google для создания <strong>одностраничных приложений (SPA)</strong>. Ключевые особенности:\n1. <strong>Двустороннее связывание данных (Two-Way Data Binding).</strong>\n2. <strong>MVC-архитектура.</strong>\n3. <strong>Внедрение зависимостей (DI).</strong>\n4. <strong>Директивы</strong> (для расширения HTML).\n5. Концепция <strong>Scope</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "ajs-2",
        "question": "Как AngularJS реализует двустороннее связывание данных?",
        "answer": "Двустороннее связывание данных обеспечивает автоматическую синхронизацию между <strong>Моделью (данные в `$scope`)</strong> и <strong>Представлением (HTML/UI)</strong>. Когда данные в модели изменяются, представление обновляется, и наоборот. Это реализуется через директиву <strong>`ngModel`</strong> и цикл <strong>`$digest`</strong>.\n\n<strong>Преимущество:</strong> Значительно уменьшает необходимость ручной манипуляции с DOM и обработки событий.",
        "difficulty": "easy"
      },
      {
        "id": "ajs-3",
        "question": "Что такое Директивы (Directives) в AngularJS и приведите примеры основных директив.",
        "answer": "<strong>Директивы</strong> — это маркеры в DOM-элементе (атрибуты, элементы, комментарии или классы), которые сообщают компилятору AngularJS о необходимости прикрепить к этому элементу особое поведение или трансформировать DOM.\n\n<strong>Примеры:</strong>\n* <strong>`ng-app`</strong>: Определяет корневой элемент приложения.\n* <strong>`ng-controller`</strong>: Привязывает контроллер к представлению.\n* <strong>`ng-model`</strong>: Реализует двустороннее связывание данных.\n* <strong>`ng-repeat`</strong>: Итерация по коллекциям.\n* <strong>`ng-click`</strong>: Обработка событий клика.",
        "difficulty": "easy"
      },
      {
        "id": "ajs-4",
        "question": "Объясните механизм Цикла `$digest` в AngularJS.",
        "answer": "Цикл <strong>`$digest`</strong> — это ядро механизма двустороннего связывания. Он отвечает за синхронизацию Модели и Представления. Цикл запускается автоматически при стандартных событиях (например, `ng-click`, HTTP-ответы).\n\n<strong>Механизм:</strong>\n1. AngularJS запускает <strong>Грязную Проверку (Dirty-Checking)</strong>, перебирая все <strong>`$watch`</strong>-выражения.\n2. Сравниваются текущие значения модели с предыдущими.\n3. Если обнаружено изменение, соответствующее <strong>Представление</strong> обновляется, а цикл повторяется.\n\nЦикл продолжается до стабилизации (не обнаружено больше изменений) или достижения лимита итераций (для предотвращения бесконечных циклов).",
        "difficulty": "medium"
      },
      {
        "id": "ajs-5",
        "question": "Когда и как можно вручную запустить Цикл `$digest`?",
        "answer": "Цикл `$digest` запускается вручную, когда изменения в Модели происходят <strong>вне контекста AngularJS</strong> (например, в колбэках сторонних библиотек, `setTimeout`, или нативных обработчиках DOM-событий).\n\n<strong>Методы запуска:</strong>\n1. <strong>`$scope.$apply()`:</strong> Рекомендуемый способ. Он запускает цикл `$digest` от <strong>`$rootScope`</strong> вниз по иерархии. Если изменения произошли вне Angular, используйте `$apply()`.\n2. <strong>`$scope.$digest()`:</strong> Запускает цикл `$digest` только на <strong>текущей области видимости (`$scope`) и ее дочерних</strong> областях. Используется, когда вы уверены, что изменения произошли в рамках Angular, но нужно более локальное обновление.",
        "difficulty": "medium"
      },
      {
        "id": "ajs-6",
        "question": "Какова роль `Controller` в AngularJS?",
        "answer": "<strong>Контроллер</strong> — это JavaScript-функция (класс), которая содержит <strong>бизнес-логику</strong> и <strong>инициализирует `$scope`</strong>, который связывает Модель (данные) с Представлением (HTML).\n\n<strong>Ключевые обязанности:</strong>\n1. <strong>Управление `$scope`:</strong> Прикрепление свойств и функций к `$scope`.\n2. <strong>Обработка данных:</strong> Загрузка начальных данных и обработка ввода пользователя.\n3. <strong>Обработка событий:</strong> Реагирование на события DOM (через директивы типа `ng-click`).\n\nКонтроллер привязывается к представлению с помощью директивы <strong>`ng-controller`</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "ajs-7",
        "question": "Что такое `Scope` в AngularJS?",
        "answer": "<strong>`$scope`</strong> — это объект, который служит <strong>клеем</strong> между <strong>Контроллером</strong> и <strong>Представлением (View)</strong>. Он представляет собой контекст выполнения выражений и является двусторонним мостом для данных.\n\n<strong>Особенности:</strong>\n* Имеет иерархическую структуру (<strong>Scope Hierarchy</strong>), наследуя свойства от родительских областей.\n* Содержит <strong>watchers</strong>, которые отслеживаются циклом `$digest`.\n* Управляется жизненным циклом (создается при привязке контроллера и уничтожается при удалении элемента DOM).",
        "difficulty": "easy"
      },
      {
        "id": "ajs-8",
        "question": "Объясните Иерархию Scope (Scope Hierarchy) в AngularJS.",
        "answer": "Иерархия Scope — это <strong>древовидная структура</strong> областей видимости в приложении AngularJS. Она повторяет структуру DOM, к которой привязаны контроллеры или директивы.\n\n1. <strong>`$rootScope`:</strong> <strong>Глобальная</strong> область видимости, родитель всех остальных областей.\n2. <strong>`$scope`:</strong> Создается для каждого контроллера. Наследует свойства от родительского scope (прототипное наследование).\n\n<strong>Поток данных:</strong> По умолчанию дочерние scope могут считывать свойства родителя, но запись (примитивных типов) создает новое свойство в дочернем scope. Рекомендуется использовать <strong>'dot' rule</strong> (привязывать данные к объекту, например, `user.name`) для избежания проблем наследования.",
        "difficulty": "medium"
      },
      {
        "id": "ajs-9",
        "question": "Что такое `$rootScope` и почему следует избегать его частого использования?",
        "answer": "<strong>`$rootScope`</strong> — это <strong>самый верхний Scope</strong> в иерархии, доступный во всем приложении. Он используется для хранения данных или функций, которые должны быть доступны <strong>глобально</strong>.\n\n<strong>Почему следует избегать частого использования:</strong>\n1. <strong>Проблемы отладки:</strong> Глобальное состояние усложняет отслеживание источника изменений.\n2. <strong>Производительность:</strong> Любое изменение в `$rootScope` запускает цикл `$digest` по всему приложению.\n3. <strong>Тестирование:</strong> Снижает модульность и усложняет изолированное тестирование.",
        "difficulty": "medium"
      },
      {
        "id": "ajs-10",
        "question": "Какова роль директивы `ng-app`?",
        "answer": "<strong>`ng-app`</strong> — это директива, которая <strong>инициализирует (бутстрапит)</strong> приложение AngularJS. Она:\n1. Определяет <strong>корневой элемент</strong> приложения (чаще всего на `<html>` или `<body>`).\n2. <strong>Автоматически</strong> загружает соответствующий <strong>модуль</strong> AngularJS (если указано имя модуля, например, `ng-app=\"myApp\"`).\n3. Создает <strong>`$rootScope`</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "ajs-11",
        "question": "Для чего используется директива `ng-model`?",
        "answer": "<strong>`ng-model`</strong> — это основная директива для <strong>двустороннего связывания данных</strong> в элементах формы (input, select, textarea).\n\n<strong>Функции:</strong>\n1. Связывает значение элемента формы со свойством в `$scope`.\n2. Предоставляет информацию о <strong>валидности</strong> поля формы (через `$error` и классы CSS, такие как `ng-invalid`).\n3. Отслеживает изменения, чтобы инициировать цикл `$digest`.",
        "difficulty": "easy"
      },
      {
        "id": "ajs-12",
        "question": "Как можно обмениваться данными между контроллерами в AngularJS?",
        "answer": "Для обмена данными между контроллерами используются три основных механизма:\n\n1. <strong>Сервисы (Services):</strong> Рекомендуемый способ. Создайте <strong>синглтон-сервис</strong>, который будет хранить и управлять общими данными. Контроллеры инжектируют этот сервис для доступа к данным.\n2. <strong>События Scope:</strong> Используйте <strong>`$emit`</strong> (событие вверх по иерархии) и <strong>`$broadcast`</strong> (событие вниз по иерархии) для уведомления других контроллеров об изменениях.\n3. <strong>Наследование (Parent-Child):</strong> Если контроллеры находятся в иерархии, дочерний контроллер может считывать свойства родительского scope.",
        "difficulty": "medium"
      },
      {
        "id": "ajs-13",
        "question": "Назовите основные встроенные Сервисы (Services) в AngularJS.",
        "answer": "<strong>Сервисы</strong> — это синглтон-объекты, которые предоставляют общие функциональные возможности.\n\n<strong>Основные встроенные сервисы:</strong>\n* <strong>`$http`</strong>: Для асинхронной связи с удаленными серверами (AJAX/RESTful API).\n* <strong>`$scope`</strong>: Объект, связывающий Модель и Представление.\n* <strong>`$rootScope`</strong>: Глобальный Scope.\n* <strong>`$location`</strong>: Для работы с URL-адресом браузера и его изменения.\n* <strong>`$timeout`</strong>: Обертка для нативного `setTimeout()`.\n* <strong>`$interval`</strong>: Обертка для нативного `setInterval()`.\n* <strong>`$q`</strong>: Для работы с асинхронными операциями и Promises.",
        "difficulty": "medium"
      },
      {
        "id": "ajs-14",
        "question": "Как определить пользовательский сервис в AngularJS (Factory, Service, Provider)?",
        "answer": "Пользовательские сервисы можно создать тремя способами:\n\n1. <strong>`.factory(name, func)`:</strong> Самый распространенный. Функция `func` выполняется один раз и <strong>возвращает объект</strong>, который будет инжектирован. Позволяет создавать сложные объекты и инжектировать другие зависимости.\n2. <strong>`.service(name, func)`:</strong> Функция `func` — это <strong>конструктор</strong>. AngularJS вызывает его с помощью оператора `new` и инжектирует полученный экземпляр.\n3. <strong>`.provider(name, func)`:</strong> Наиболее гибкий. Позволяет <strong>конфигурировать сервис</strong> до начала работы приложения с помощью метода `$get`.",
        "difficulty": "medium"
      },
      {
        "id": "ajs-15",
        "question": "Как определяется и используется метод контроллера в AngularJS?",
        "answer": "Метод контроллера — это функция, прикрепленная к объекту `$scope` внутри контроллера.\n\n<strong>Определение:</strong>\n```javascript\napp.controller('MyController', function($scope) {\n  $scope.userName = 'Гость';\n  $scope.greet = function(name) {\n    alert('Привет, ' + name);\n  };\n});\n```\n\n<strong>Использование в HTML:</strong>\nМетод вызывается с помощью директив событий, например, <strong>`ng-click`</strong>:\n```html\n<div ng-controller=\"MyController\">\n  <input type=\"text\" ng-model=\"userName\" />\n  <button ng-click=\"greet(userName)\">Поприветствовать</button>\n</div>\n```",
        "difficulty": "easy"
      }
    ]
  },
  // TS
  {
    id: "typescript",
    name: "TypeScript",
    questions: [
      {
        id: "ts-1",
        question: "Что такое TypeScript и каковы его основные преимущества?",
        answer: "<strong>TypeScript</strong> — это статически типизированный (statically-typed) <strong>суперсет (Superset) JavaScript</strong>, разработанный Microsoft. Весь код TypeScript компилируется (транспилируется) в обычный, исполняемый браузерами JavaScript.<br/><br/><strong>Основные преимущества:</strong><br/>1. <strong>Статическая типизация:</strong> Позволяет определять типы переменных, параметров и возвращаемых значений, что помогает <strong>отлавливать ошибки на этапе компиляции</strong>, а не в рантайме.<br/>2. <strong>Улучшенный инструментарий (Tooling):</strong> Обеспечивает более качественное автодополнение (autocompletion), рефакторинг и навигацию по коду в IDE (VS Code).<br/>3. <strong>Совместимость с ES:</strong> Поддерживает все современные функции ECMAScript (ES6+) и может компилировать код для разных версий JS.<br/>4. <strong>Читаемость и поддерживаемость:</strong> Благодаря явным типам и структуре, код становится более понятным и легче масштабируется на больших проектах.",
        difficulty: "easy"
      },
      {
        id: "ts-2",
        question: "Почему TypeScript называют 'суперсетом JavaScript'?",
        answer: "TypeScript является 'суперсетом JavaScript', потому что <strong>любой валидный JavaScript-код также является валидным TypeScript-кодом</strong>.<br/><br/>Это означает, что TypeScript включает в себя весь синтаксис и функциональность JavaScript и <strong>добавляет свои собственные функции поверх</strong> него, не нарушая существующий код.<br/><br/><strong>Ключевые добавления:</strong><br/>• <strong>Аннотации типов:</strong> Возможность явного указания типов (`let num: number = 5;`).<br/>• <strong>Интерфейсы, Дженерики, Декораторы</strong> и другие продвинутые концепции.<br/>• <strong>Функции ES следующего поколения</strong> (например, `private`/`public` модификаторы в классах).<br/><br/>Эта особенность обеспечивает плавный переход при миграции существующих JavaScript-кодовых баз на TypeScript.",
        difficulty: "easy"
      },
      {
        id: "ts-3",
        question: "Назовите основные базовые типы данных в TypeScript.",
        answer: "TypeScript предоставляет богатый набор примитивных и структурных типов для обеспечения строгой типизации:<br/><br/>1. <strong>Примитивные типы:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`number`</strong>: Для всех чисел (целых и с плавающей точкой).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`string`</strong>: Для текстовых данных.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`boolean`</strong>: Для логических значений (`true` / `false`).<br/>2. <strong>Специальные типы:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Array` / `number[]`</strong>: Для массивов.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Tuple`</strong>: Для массивов с фиксированным количеством элементов и известными типами каждого элемента (например, `[string, number]`).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Enum`</strong>: Набор именованных констант (например, `enum HttpMethods { GET, POST }`).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Any`</strong>: Динамический тип, который отключает проверку типов (следует избегать).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Void`</strong>: Тип возвращаемого значения для функций, которые ничего не возвращают.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`Never`</strong>: Тип для значений, которые никогда не могут возникнуть (например, функция, которая всегда выбрасывает исключение).",
        difficulty: "easy"
      },
      {
        id: "ts-4",
        question: "Объясните использование let, const и var для объявления переменных в TypeScript.",
        answer: "TypeScript использует стандартные методы объявления переменных из ECMAScript 2015 (ES6), дополняя их статической типизацией.<br/><br/>| Ключевое слово | Область видимости (Scope) | Переназначаемость (Reassignable) | Рекомендация |<br/>| :--- | :--- | :--- | :--- |<br/>| <strong>`const`</strong> | Блочная (`{...}`) | <strong>Нет (Immutable reference)</strong> | Используйте по умолчанию, чтобы предотвратить случайное изменение. |<br/>| <strong>`let`</strong> | Блочная (`{...}`) | <strong>Да (Mutable)</strong> | Используйте, когда переменная должна быть переназначена. |<br/>| <strong>`var`</strong> | Функциональная или Глобальная | Да | Избегайте, так как приводит к 'подъему' (`hoisting`) и непредсказуемости. |<br/><br/><strong>Типизация:</strong> В TypeScript вы можете явно указать тип (`let name: string = 'Alice';`) или позволить компилятору <strong>инферировать</strong> тип на основе присвоенного значения (`let age = 30;` -> `age` будет `number`).",
        difficulty: "easy"
      },
      {
        id: "ts-5",
        question: "Что такое Interface (Интерфейс) в TypeScript и для чего он используется?",
        answer: "<strong>Интерфейс (`Interface`)</strong> в TypeScript — это мощная конструкция, которая определяет <strong>контракт</strong> на структуру объекта (или класса, или функции). Он используется исключительно на этапе компиляции для проверки типов и не генерирует JavaScript-код.<br/><br/><strong>Ключевые возможности:</strong><br/>1. <strong>Определение структуры объекта:</strong> Гарантирует, что объект имеет определенный набор свойств и методов с нужными типами.<br/>2. <strong>Необязательные свойства:</strong> Свойства можно пометить как необязательные с помощью символа `?` (например, `age?: number`).<br/>3. <strong>Свойства только для чтения:</strong> Используется ключевое слово `readonly` (например, `readonly id: number`).<br/>4. <strong>Контракт для классов:</strong> Класс может `implements` (реализовывать) интерфейс, обязуясь предоставить все его члены.<br/><br/><strong>Пример:</strong><br/>```typescript<br/>interface Point {<br/>&nbsp;&nbsp;x: number;<br/>&nbsp;&nbsp;y: number;<br/>}<br/><br/>// Функция принимает только объекты, соответствующие структуре Point<br/>function printPoint(p: Point) { ... }<br/>```",
        difficulty: "medium"
      },
      {
        id: "ts-6",
        question: "Что такое Enum (Перечисления) в TypeScript и в каких случаях их используют?",
        answer: "<strong>Enum (Перечисление)</strong> — это тип данных, который позволяет определить набор <strong>именованных констант</strong>. Он повышает читаемость кода, заменяя 'магические числа' или строки осмысленными именами.<br/><br/><strong>Виды Enums:</strong><br/>1. <strong>Числовые (Standard Enum):</strong> Значения по умолчанию начинаются с 0, но могут быть переопределены.<br/>```typescript<br/>enum Direction { Up, Down, Left, Right }<br/>let move = Direction.Up; // move === 0<br/>```<br/>2. <strong>Строковые (String Enum):</strong> Значениям явно присваиваются строки. Это обеспечивает лучшую читаемость и отладку в рантайме.<br/>```typescript<br/>enum MediaTypes { Image = 'image', Video = 'video' }<br/>const selected = MediaTypes.Image; // selected === 'image'<br/>```<br/><br/><strong>Использование:</strong> Enums идеальны для <strong>дискретных, фиксированных наборов значений</strong>, таких как режимы, статусы, HTTP-методы или дни недели. Они обеспечивают <strong>типобезопасность</strong> при работе с этими константами.",
        difficulty: "medium"
      },
      {
        id: "ts-7",
        question: "Как определяется функция в TypeScript? Расскажите об основных элементах сигнатуры.",
        answer: "Определение функции в TypeScript включает строгую типизацию ее <strong>сигнатуры</strong> (параметров) и <strong>возвращаемого значения</strong>.<br/><br/><strong>Элементы сигнатуры функции:</strong><br/>1. <strong>Имена и типы параметров:</strong> Каждый параметр явно типизируется.<br/>2. <strong>Тип возвращаемого значения:</strong> Указывается после списка параметров через двоеточие (`: type`). Если функция ничего не возвращает, используется тип <strong>`void`</strong>.<br/>3. <strong>Необязательные (`?`) и Параметры по умолчанию:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Необязательные:</strong> `function func(name: string, title?: string)`.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>По умолчанию:</strong> `function func(name: string = \"Гость\")`.<br/>4. <strong>Rest-параметры:</strong> Позволяют функции принимать любое количество аргументов определенного типа, используя синтаксис `...names: string[]`.<br/><br/><strong>Пример:</strong><br/>```typescript<br/>// Имена: string, id: number; Возвращаемый тип: boolean<br/>function isValidUser(name: string, id: number): boolean {<br/>&nbsp;&nbsp;if (id > 0) return true;<br/>&nbsp;&nbsp;return false;<br/>}<br/>```",
        difficulty: "medium"
      },
      {
        id: "ts-8",
        question: "Что такое Type Inference (Инференция типов) и как она работает?",
        answer: "<strong>Инференция типов (Type Inference)</strong> — это ключевая особенность TypeScript, позволяющая компилятору <strong>автоматически определять тип</strong> переменной, выражения или возвращаемого значения функции на основе его присвоенного значения или контекста, без необходимости явного указания типа разработчиком.<br/><br/><strong>Принцип работы:</strong><br/>• Когда переменная объявляется и сразу инициализируется, TypeScript использует тип инициализирующего значения.<br/>• <strong>Пример:</strong> `let price = 100;` $\rightarrow$ TypeScript инферирует `price` как `number`.<br/>• <strong>Пример:</strong> `let names = ['Alice', 'Bob'];` $\rightarrow$ TypeScript инферирует `names` как `string[]`.<br/><br/><strong>Преимущество:</strong> Это позволяет писать более <strong>лаконичный и чистый код</strong>, при этом сохраняя все преимущества статической типизации (компилятор все равно будет проверять на ошибки).",
        difficulty: "easy"
      },
      {
        id: "ts-9",
        question: "Опишите процесс компиляции TypeScript в JavaScript и роль tsconfig.json.",
        answer: "Процесс компиляции (транспиляции) преобразует файлы TypeScript (`.ts` или `.tsx`) в чистый JavaScript (`.js`), который может быть выполнен браузером или Node.js.<br/><br/><strong>Шаги процесса:</strong><br/>1. <strong>Конфигурация (`tsconfig.json`):</strong> Это основной файл конфигурации, который указывает <strong>компилятору TypeScript (`tsc`)</strong>:<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Какие файлы</strong> включить и исключить.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Целевой стандарт JS</strong> (`\"target\": \"ES5\"` или `\"ES2020\"`).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Систему модулей</strong> (`\"module\": \"commonjs\"` или `\"esnext\"`).<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Каталог для выходных файлов</strong> (`\"outDir\": \"dist\"`).<br/>2. <strong>Выполнение (`tsc`):</strong> Разработчик запускает команду `tsc` (TypeScript Compiler).<br/>3. <strong>Компиляция:</strong> Компилятор читает файлы, проверяет типы, применяет все указанные настройки и генерирует соответствующие JavaScript-файлы.",
        difficulty: "medium"
      },
      {
        id: "ts-10",
        question: "Какие уникальные особенности классов есть в TypeScript по сравнению с ES6 классами?",
        answer: "TypeScript расширяет стандартный синтаксис классов ES6, добавляя функции, специфичные для объектно-ориентированного программирования и типизации:<br/><br/>1. <strong>Модификаторы доступа (`Access Modifiers`):</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`public`</strong> (по умолчанию): Доступен везде.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`private`</strong>: Доступен только внутри объявляющего класса.<br/>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>`protected`</strong>: Доступен внутри класса и его подклассов.<br/>2. <strong>Абстрактные классы (`Abstract Classes`):</strong> Классы, которые нельзя инстанциировать напрямую, служат 'чертежом' для других классов и могут содержать <strong>абстрактные методы</strong> (без реализации).<br/>3. <strong>Свойства только для чтения (`readonly`):</strong> Свойство, которое может быть установлено только при объявлении или в конструкторе.<br/>4. <strong>Параметры свойств в конструкторе:</strong> Сокращенный синтаксис для создания и инициализации свойства класса прямо в аргументах конструктора (например, `constructor(private name: string)`).",
        difficulty: "medium"
      },
      {
        id: "ts-11",
        question: "Как работает наследование (Inheritance) классов в TypeScript?",
        answer: "TypeScript использует ключевое слово <strong>`extends`</strong> из ES6 для реализации классического, основанного на классах, наследования.<br/><br/><strong>Ключевые принципы:</strong><br/>1. <strong>Наследование:</strong> Дочерний класс (`extends`) наследует все методы и свойства родительского класса.<br/>2. <strong>Конструктор (`constructor`):</strong> Дочерний класс, который имеет собственный конструктор, должен обязательно вызвать конструктор родителя с помощью ключевого слова <strong>`super()`</strong>.<br/>3. <strong>Переопределение (`Override`):</strong> Дочерний класс может переопределить метод, который существует в родительском классе, используя то же имя и сигнатуру. При этом внутри переопределенного метода можно вызвать метод родителя через `super.methodName()`.<br/><br/><strong>Пример:</strong><br/>```typescript<br/>class Animal { /* ... */ }<br/>class Snake extends Animal {<br/>&nbsp;&nbsp;constructor(name: string) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;super(name); // Обязательный вызов родительского конструктора<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;move() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;super.move(5); // Вызов метода родителя<br/>&nbsp;&nbsp;}<br/>}<br/>```",
        difficulty: "medium"
      },
      {
        id: "ts-12",
        question: "Что такое Access Modifiers (Модификаторы доступа) и как они используются в классах?",
        answer: "<strong>Модификаторы доступа</strong> в TypeScript используются для контроля <strong>видимости</strong> и <strong>доступности</strong> членов класса (свойств и методов). Это ключевой элемент, обеспечивающий <strong>инкапсуляцию</strong> (сокрытие данных).<br/><br/><strong>Три основных модификатора:</strong><br/>1. <strong>`public`:</strong> Член доступен отовсюду: изнутри класса, извне и в подклассах. Это <strong>модификатор по умолчанию</strong>.<br/>2. <strong>`protected`:</strong> Член доступен только <strong>внутри класса</strong> и <strong>внутри всех его подклассов</strong> (помогают в реализации отношений 'является-чем-то', 'is-a').<br/>3. <strong>`private`:</strong> Член доступен <strong>только внутри объявляющего класса</strong>. Он полностью скрыт от внешнего мира и от подклассов.<br/><br/><strong>На заметку:</strong> Модификаторы доступа TypeScript не гарантируют 100% защиты в скомпилированном JavaScript (так как JS не имеет нативной поддержки), но они <strong>принудительно проверяются на этапе компиляции</strong>, что является критичным для поддержания порядка в коде.",
        difficulty: "medium"
      },
      {
        id: "ts-13",
        question: "Объясните концепцию Abstract Classes (Абстрактных классов) в TypeScript.",
        answer: "<strong>Абстрактный класс</strong> — это класс-<strong>чертеж</strong> или <strong>шаблон</strong>, который предназначен для наследования другими классами и <strong>не может быть инстанциирован</strong> (создан объект) самостоятельно.<br/><br/><strong>Ключевые особенности:</strong><br/>1. <strong>Ключевое слово `abstract`:</strong> Используется при объявлении класса и его абстрактных методов.<br/>2. <strong>Абстрактные методы:</strong> Методы, которые объявлены (`abstract someMethod(): void;`) <strong>без реализации</strong>. Любой класс, который наследует абстрактный класс, <strong>обязан</strong> предоставить конкретную реализацию для всех абстрактных методов.<br/>3. <strong>Обычные методы/свойства:</strong> Абстрактный класс может также содержать полностью реализованные методы и свойства, которые наследуются как обычно.<br/><br/><strong>Использование:</strong> Абстрактные классы используются для <strong>обеспечения общего контракта</strong> и логики для группы тесно связанных подклассов, гарантируя, что каждый подкласс реализует определенные, критически важные функции.",
        difficulty: "hard"
      }
    ]
  },
  // node.js
  {
    "id": "nodejs",
    "name": "Node.js",
    "questions": [
      {
        "id": "node-1",
        "question": "Что такое Node.js и каковы его ключевые особенности?",
        "answer": "<strong>Node.js</strong> — это кроссплатформенная <strong>среда выполнения JavaScript</strong> с открытым исходным кодом, предназначенная для выполнения кода вне браузера (обычно на сервере). Она построена на движке <strong>V8 Google Chrome</strong>.\n\n<strong>Ключевые особенности:</strong>\n1. <strong>Асинхронность и неблокирующий I/O</strong>.\n2. <strong>Однопоточная модель</strong> с использованием цикла событий (Event Loop).\n3. Обширная экосистема <strong>NPM (Node Package Manager)</strong>.\n4. Идеально подходит для создания <strong>высоконагруженных, I/O-интенсивных</strong> приложений (чаты, API-серверы, стриминг данных).",
        "difficulty": "easy"
      },
      {
        "id": "node-2",
        "question": "Как Node.js достигает высокой производительности с использованием одного потока?",
        "answer": "Node.js использует <strong>однопоточную модель</strong> для основного кода, но полагается на <strong>неблокирующий I/O</strong> и <strong>Цикл Событий (Event Loop)</strong>. \n\nКогда Node.js сталкивается с I/O-операцией (например, чтение файла, запрос к базе данных), он <strong>не блокирует основной поток</strong>, а передает задачу системе и продолжает обрабатывать новые запросы. По завершении I/O-операции, результат возвращается в Event Loop через <strong>очередь колбэков</strong>.\n\nДля <strong>CPU-интенсивных задач</strong> Node.js использует <strong>пул потоков libuv</strong> (или <strong>Worker Threads</strong>), чтобы не блокировать Event Loop.",
        "difficulty": "medium"
      },
      {
        "id": "node-3",
        "question": "Объясните концепцию Event Loop в Node.js.",
        "answer": "<strong>Event Loop</strong> — это основной механизм, который позволяет Node.js выполнять <strong>неблокирующие I/O-операции</strong>, несмотря на то, что JavaScript является однопоточным. \n\nОн постоянно проверяет <strong>Call Stack</strong> и <strong>Очередь колбэков (Callback Queue)</strong>. Если Call Stack пуст, Event Loop переносит задачи из очереди колбэков в Call Stack для выполнения. Он имеет несколько фаз (timers, pending callbacks, poll, check, close), которые определяют порядок выполнения асинхронных задач.",
        "difficulty": "medium"
      },
      {
        "id": "node-4",
        "question": "В чем разница между блокирующим и неблокирующим I/O?",
        "answer": "<strong>Блокирующий I/O (Синхронный):</strong> Процесс <strong>останавливается</strong> и ждет завершения I/O-операции (например, завершения чтения файла) перед тем, как перейти к следующей задаче. Это снижает производительность сервера.\n\n<strong>Неблокирующий I/O (Асинхронный):</strong> Процесс <strong>не ждет</strong> завершения I/O-операции. Он отправляет запрос, продолжает выполнять другие задачи и использует <strong>колбэк (callback)</strong> для обработки результата, когда операция завершится. Node.js использует неблокирующий I/O по умолчанию (например, `fs.readFile` вместо `fs.readFileSync`).",
        "difficulty": "easy"
      },
      {
        "id": "node-5",
        "question": "Что такое `process.nextTick()` и как он взаимодействует с Event Loop?",
        "answer": "`process.nextTick()` помещает колбэк в <strong>Microtask Queue</strong> (или `nextTick` Queue) — <strong>наиболее приоритетную</strong> очередь в Node.js.\n\nКолбэки из `process.nextTick()` выполняются <strong>сразу после завершения текущей фазы</strong> Event Loop (или рекурсивно до ее опустошения), но <strong>до</strong> начала следующей фазы (и до <strong>Macrotask Queue</strong>, куда попадают `setTimeout` и `setImmediate`). Он используется для асинхронного, но максимально быстрого выполнения кода.",
        "difficulty": "hard"
      },
      {
        "id": "node-6",
        "question": "Объясните, что такое NPM (Node Package Manager) и его основные функции.",
        "answer": "<strong>NPM</strong> — это <strong>стандартный менеджер пакетов</strong> для Node.js и самая большая в мире библиотека программного обеспечения. \n\n<strong>Основные функции:</strong>\n1. <strong>Установка пакетов:</strong> Устанавливает зависимости для проекта (`npm install [package]`).\n2. <strong>Управление зависимостями:</strong> Управляет версиями и зависимостями, указанными в <strong>`package.json`</strong>.\n3. <strong>Реестр (Registry):</strong> Центральное хранилище для публикации и поиска модулей.\n4. <strong>Скрипты:</strong> Позволяет определять пользовательские команды (например, `npm run start`) в файле `package.json`.",
        "difficulty": "easy"
      },
      {
        "id": "node-7",
        "question": "Какова роль файла `package.json`?",
        "answer": "`package.json` — это <strong>манифест</strong> проекта Node.js. Он содержит <strong>метаданные</strong> о проекте и является основным файлом для управления зависимостями и скриптами.\n\n<strong>Ключевые элементы:</strong>\n* <strong>`name`</strong> и <strong>`version`</strong>.\n* <strong>`main`</strong>: Точка входа в приложение.\n* <strong>`scripts`</strong>: Пользовательские команды (например, для запуска, тестирования, сборки).\n* <strong>`dependencies`</strong>: Пакеты, необходимые для <strong>продакшна</strong>.\n* <strong>`devDependencies`</strong>: Пакеты, необходимые только для <strong>разработки</strong> (тестирование, линтинг и т.д.).",
        "difficulty": "easy"
      },
      {
        "id": "node-8",
        "question": "Что такое `package-lock.json` и зачем он нужен?",
        "answer": "<strong>`package-lock.json`</strong> (или `yarn.lock` для Yarn) — это файл, который автоматически генерируется менеджером пакетов и <strong>фиксирует точные версии</strong> всех установленных зависимостей (включая подзависимости).\n\n<strong>Назначение:</strong> Обеспечить <strong>детерминированность</strong> и <strong>воспроизводимость</strong> сборок. Гарантирует, что при установке пакетов на другом компьютере или в другой среде (CI/CD) будут установлены <strong>абсолютно те же самые</strong> версии, предотвращая конфликты, вызванные незначительными обновлениями пакетов.",
        "difficulty": "medium"
      },
      {
        "id": "node-9",
        "question": "Назовите 5 основных встроенных (Core) модулей Node.js.",
        "answer": "Встроенные модули не требуют установки через NPM и доступны по умолчанию через функцию `require()`.\n\n1. <strong>`http/https`</strong>: Для создания веб-серверов и клиентов, работы с HTTP/HTTPS-протоколами.\n2. <strong>`fs` (File System)</strong>: Для работы с файловой системой (чтение, запись, удаление файлов).\n3. <strong>`path`</strong>: Для работы с путями к файлам и каталогам.\n4. <strong>`os`</strong>: Предоставляет информацию об операционной системе (память, CPU, сетевые интерфейсы).\n5. <strong>`events`</strong>: Реализует паттерн 'EventEmitter' (для работы с событиями).",
        "difficulty": "easy"
      },
      {
        "id": "node-10",
        "question": "Как создать простой HTTP-сервер в Node.js?",
        "answer": "Для создания HTTP-сервера используется встроенный модуль <strong>`http`</strong>.\n\n<strong>Шаги:</strong>\n1. Импортировать модуль `http`.\n2. Вызвать `http.createServer()` с колбэком, который принимает объекты <strong>`req`</strong> (запрос) и <strong>`res`</strong> (ответ).\n3. Использовать `res.writeHead()` для установки заголовков и `res.end()` для отправки ответа.\n4. Вызвать `.listen()` для указания порта, который будет прослушивать сервер.\n\n```javascript\nconst http = require('http');\nhttp.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello Node.js!');\n}).listen(3000);\n```",
        "difficulty": "easy"
      },
      {
        "id": "node-11",
        "question": "Как модуль `fs` работает с файлами (синхронно vs. асинхронно)?",
        "answer": "Модуль <strong>`fs`</strong> предоставляет как <strong>синхронные</strong>, так и <strong>асинхронные</strong> методы для операций с файловой системой.\n\n* <strong>Асинхронные методы (рекомендуемые):</strong> Используют колбэк (или Promises) и <strong>не блокируют Event Loop</strong> (например, `fs.readFile()`). Это необходимо для масштабируемых серверных приложений.\n* <strong>Синхронные методы:</strong> Блокируют выполнение всего основного потока до завершения операции (например, `fs.readFileSync()`). Их следует использовать только в простых скриптах или во время инициализации, где блокировка допустима.",
        "difficulty": "medium"
      },
      {
        "id": "node-12",
        "question": "Что такое EventEmitter в Node.js?",
        "answer": "<strong>`EventEmitter`</strong> — это класс, реализующий <strong>паттерн Наблюдатель (Observer pattern)</strong>. Он позволяет объектам испускать (emit) именованные события, а другим объектам — подписываться на эти события и реагировать на них (слушать, on).\n\n<strong>Применение:</strong> Является основой для многих встроенных модулей (например, Streams, HTTP) и необходим для создания <strong>событийно-ориентированного</strong> кода.\n\n```javascript\nconst EventEmitter = require('events');\nconst emitter = new EventEmitter();\nemitter.on('data', (data) => console.log(data));\nemitter.emit('data', 'Received!');\n```",
        "difficulty": "easy"
      },
      {
        "id": "node-13",
        "question": "Что такое Streams (Потоки) в Node.js и их типы?",
        "answer": "<strong>Streams</strong> — это абстрактный интерфейс, предназначенный для <strong>эффективной обработки I/O-данных</strong> (например, чтение/запись больших файлов, обработка HTTP-запросов). Они передают данные <strong>порциями (chunks)</strong>, что уменьшает потребление памяти и позволяет начать обработку до того, как все данные будут доступны.\n\n<strong>Типы Streams:</strong>\n1. <strong>Readable (Читаемый):</strong> Источник данных (например, `fs.createReadStream`).\n2. <strong>Writable (Записываемый):</strong> Приемник данных (например, `fs.createWriteStream`).\n3. <strong>Duplex (Дуплексный):</strong> Читаемый и записываемый (например, сетевой сокет `net.Socket`).\n4. <strong>Transform (Преобразующий):</strong> Дуплексный, который может изменять данные по мере их прохождения (например, `zlib.createGzip`).",
        "difficulty": "medium"
      },
      {
        "id": "node-14",
        "question": "Для чего используется класс `Buffer` в Node.js?",
        "answer": "<strong>`Buffer`</strong> — это встроенный класс, предназначенный для работы с <strong>сырыми двоичными данными (raw binary data)</strong>, которые хранятся как последовательность октетов (байтов).\n\n<strong>Назначение:</strong>\n* Является основным объектом для взаимодействия с <strong>I/O-операциями</strong> (файлы, сеть, Streams).\n* Используется для работы с двоичными протоколами, криптографией или кодировками (UTF-8, Base64).\n* <strong>Буферы имеют фиксированный размер</strong> после создания и не могут быть изменены.",
        "difficulty": "medium"
      },
      {
        "id": "node-15",
        "question": "Как работают `setTimeout`, `setImmediate` и `process.nextTick` относительно Event Loop?",
        "answer": "Все три функции асинхронны, но имеют разный приоритет:\n\n1. <strong>`process.nextTick()`:</strong> Выполняется в <strong>Microtask Queue</strong>, имеет <strong>наивысший приоритет</strong>. Выполняется <strong>до</strong> начала следующей фазы Event Loop.\n2. <strong>Promises (resolve/then):</strong> Выполняются в <strong>Microtask Queue</strong>, имеют высокий приоритет, но после `nextTick()`.\n3. <strong>`setImmediate()`:</strong> Выполняется в фазе <strong>Check</strong> (сразу после фазы Poll), обычно выполняется <strong>перед</strong> `setTimeout(() => {}, 0)`.\n4. <strong>`setTimeout(..., 0)`:</strong> Выполняется в фазе <strong>Timers</strong>. Выполняется после `nextTick()` и `Promise`, и, в зависимости от загрузки системы, может выполниться позже или раньше `setImmediate()` (но `setImmediate` гарантированно выполнится в следующей итерации).",
        "difficulty": "hard"
      }
    ]
  },
  // SQL
  {
    "id": "sql",
    "name": "SQL",
    "questions": [
      {
        "id": "sql-1",
        "question": "Что такое SQL и назовите четыре основные категории команд SQL.",
        "answer": "<strong>SQL (Structured Query Language)</strong> — это декларативный язык, используемый для управления данными в <strong>реляционных базах данных (RDBMS)</strong>. Это стандартный язык для извлечения, манипулирования и определения структуры данных.\n\n<strong>Четыре основные категории команд:</strong>\n1. <strong>DQL</strong> (Data Query Language): <strong>SELECT</strong> (Извлечение данных).\n2. <strong>DDL</strong> (Data Definition Language): <strong>CREATE, ALTER, DROP, TRUNCATE</strong> (Определение и изменение структуры).\n3. <strong>DML</strong> (Data Manipulation Language): <strong>INSERT, UPDATE, DELETE</strong> (Манипуляции с данными).\n4. <strong>DCL</strong> (Data Control Language): <strong>GRANT, REVOKE</strong> (Управление правами доступа).",
        "difficulty": "easy"
      },
      {
        "id": "sql-2",
        "question": "Объясните разницу между Primary Key (Первичный ключ) и Foreign Key (Внешний ключ).",
        "answer": "* <strong>Primary Key (Первичный ключ):</strong> Уникально идентифицирует <strong>каждую строку</strong> в <strong>одной таблице</strong>. Он должен быть <strong>уникальным</strong> и <strong>NOT NULL</strong>. Обеспечивает <strong>целостность сущности</strong>.\n\n* <strong>Foreign Key (Внешний ключ):</strong> Столбец (или набор столбцов) в <strong>дочерней таблице</strong>, который ссылается на <strong>Primary Key</strong> или <strong>Unique Key</strong> в <strong>родительской таблице</strong>. Он устанавливает связь между таблицами и обеспечивает <strong>референциальную целостность</strong>.\n\n<strong>Пример:</strong> В таблице `Orders` поле `CustomerID` является внешним ключом, ссылающимся на первичный ключ `ID` в таблице `Customers`.",
        "difficulty": "easy"
      },
      {
        "id": "sql-3",
        "question": "Объясните разницу между WHERE и HAVING.",
        "answer": "Оба оператора используются для фильтрации, но на <strong>разных этапах</strong> выполнения запроса:\n\n* <strong>WHERE:</strong> Используется для фильтрации <strong>отдельных строк</strong> <strong>ДО</strong> их группировки. Он не может работать с агрегирующими функциями (`SUM`, `COUNT`, `AVG`).\n* <strong>HAVING:</strong> Используется для фильтрации <strong>групп строк</strong> <strong>ПОСЛЕ</strong> их создания с помощью `GROUP BY`. Он <strong>обязательно</strong> работает с агрегирующими функциями.\n\n<strong>Пример:</strong>\n```sql\nSELECT Region, COUNT(ID)\nFROM Sales\nWHERE Amount > 100 -- 1. Фильтрация строк > 100\nGROUP BY Region\nHAVING COUNT(ID) > 5; -- 2. Фильтрация групп, где записей > 5\n```",
        "difficulty": "medium"
      },
      {
        "id": "sql-4",
        "question": "Назовите и кратко опишите 4 основных типа JOIN.",
        "answer": "<strong>JOIN</strong> используется для объединения строк из двух или более таблиц на основе связанного столбца.\n\n1. <strong>INNER JOIN:</strong> Возвращает <strong>только те строки</strong>, для которых есть совпадения в <strong>обеих</strong> таблицах.\n2. <strong>LEFT (OUTER) JOIN:</strong> Возвращает <strong>все строки</strong> из <strong>левой</strong> таблицы и совпадающие строки из правой. Если совпадений нет, правые столбцы заполняются `NULL`.\n3. <strong>RIGHT (OUTER) JOIN:</strong> Возвращает <strong>все строки</strong> из <strong>правой</strong> таблицы и совпадающие строки из левой. Несовпадающие левые столбцы заполняются `NULL`.\n4. <strong>FULL (OUTER) JOIN:</strong> Возвращает <strong>все строки</strong> из <strong>обеих</strong> таблиц, объединяя совпадающие. Несовпадающие значения заполняются `NULL`.\n\n<strong>Синтаксис:</strong> `SELECT * FROM TableA JOIN_TYPE TableB ON TableA.Key = TableB.Key;`",
        "difficulty": "medium"
      },
      {
        "id": "sql-5",
        "question": "Что такое Индекс (Index) и как он влияет на производительность?",
        "answer": "<strong>Индекс</strong> — это структура данных, которая улучшает скорость операций извлечения данных в таблице. Он похож на оглавление книги: позволяет СУБД быстро находить строки, не сканируя всю таблицу.\n\n<strong>Влияние на производительность:</strong>\n* <strong>Положительное (Чтение):</strong> Резко ускоряет запросы <strong>SELECT</strong> с условиями `WHERE`, `JOIN` и `ORDER BY`.\n* <strong>Отрицательное (Запись):</strong> Снижает скорость операций <strong>INSERT, UPDATE, DELETE</strong>, так как при изменении данных необходимо также обновить и сам индекс.",
        "difficulty": "medium"
      },
      {
        "id": "sql-6",
        "question": "Объясните концепцию Нормализации данных и ее цель.",
        "answer": "<strong>Нормализация</strong> — это процесс проектирования реляционной базы данных с целью <strong>уменьшения избыточности</strong> данных и улучшения их <strong>целостности</strong>. Она разбивает большие таблицы на более мелкие и устанавливает между ними связи.\n\n<strong>Основные цели:</strong>\n1. <strong>Избежать аномалий:</strong> Предотвращение проблем при вставке, обновлении и удалении данных (аномалии модификации).\n2. <strong>Экономия места:</strong> Исключение дублирования данных.\n\nНаиболее распространенные формы: <strong>1NF, 2NF, 3NF</strong>.",
        "difficulty": "medium"
      },
      {
        "id": "sql-7",
        "question": "Что такое 3-я Нормальная Форма (3NF)?",
        "answer": "Таблица находится в <strong>3NF</strong>, если она удовлетворяет условиям <strong>2NF</strong> и <strong>не содержит транзитивных зависимостей</strong>. \n\n<strong>Транзитивная зависимость</strong> означает, что неключевой столбец зависит от другого неключевого столбца, а не напрямую от первичного ключа.\n\n<strong>Пример нарушения 3NF:</strong> В таблице `Employees` поле `DepartmentName` зависит от `DepartmentID`, а не от первичного ключа `EmployeeID`. Решение — вынести `DepartmentName` и `DepartmentID` в отдельную таблицу `Departments`.",
        "difficulty": "hard"
      },
      {
        "id": "sql-8",
        "question": "Что такое Денормализация и когда она оправдана?",
        "answer": "<strong>Денормализация</strong> — это процесс добавления избыточных данных в нормализованную структуру. Это делается <strong>намеренно</strong> для <strong>оптимизации производительности</strong> чтения (за счет более медленной записи и потенциальной избыточности).\n\n<strong>Оправдана, когда:</strong>\n* <strong>Приложения, ориентированные на чтение:</strong> Системы, где операции чтения доминируют над записью (отчетность, аналитика).\n* <strong>Снижение JOIN'ов:</strong> Уменьшение количества сложных и дорогих операций `JOIN` в запросах, что ускоряет их выполнение.",
        "difficulty": "medium"
      },
      {
        "id": "sql-9",
        "question": "Что такое Хранимая Процедура (Stored Procedure)?",
        "answer": "<strong>Хранимая Процедура</strong> — это набор предварительно скомпилированных SQL-операторов, сохраненных в базе данных. Она выполняется как единый блок кода.\n\n<strong>Преимущества:</strong>\n1. <strong>Производительность:</strong> Скомпилированный код выполняется быстрее.\n2. <strong>Безопасность:</strong> Помогает предотвратить <strong>SQL-инъекции</strong> (если используется безопасно).\n3. <strong>Повторное использование:</strong> Снижает дублирование кода бизнес-логики.\n4. <strong>Трафик:</strong> Уменьшает сетевой трафик между приложением и СУБД.",
        "difficulty": "medium"
      },
      {
        "id": "sql-10",
        "question": "Объясните разницу между DROP, DELETE и TRUNCATE.",
        "answer": "Все три команды удаляют данные, но различаются по DDL/DML категории, влиянию на структуру и возможности отката:\n\n* <strong>DELETE (DML):</strong> Удаляет <strong>строки</strong> из таблицы. Может иметь условие `WHERE`. Является <strong>транзакционной</strong> операцией (можно откатить - `ROLLBACK`). <strong>Оставляет</strong> структуру таблицы.\n* <strong>TRUNCATE (DDL):</strong> Удаляет <strong>все строки</strong> из таблицы <strong>быстрее</strong>, чем `DELETE`, так как не записывает каждое удаление в лог транзакций. <strong>Оставляет</strong> структуру таблицы. <strong>Нельзя</strong> откатить (в большинстве СУБД).\n* <strong>DROP (DDL):</strong> Удаляет <strong>всю таблицу</strong> (структуру и данные) из базы данных. <strong>Нельзя</strong> откатить.",
        "difficulty": "medium"
      },
      {
        "id": "sql-11",
        "question": "Что такое Агрегирующие Функции (Aggregate Functions)? Приведите примеры.",
        "answer": "<strong>Агрегирующие функции</strong> выполняют вычисление над <strong>набором (группой) строк</strong> и возвращают <strong>одно результирующее значение</strong>.\n\nОни часто используются вместе с оператором `GROUP BY`.\n\n<strong>Примеры:</strong>\n* <strong>`COUNT()`:</strong> Считает количество строк или значений.\n* <strong>`SUM()`:</strong> Вычисляет сумму значений в столбце.\n* <strong>`AVG()`:</strong> Вычисляет среднее значение.\n* <strong>`MIN()`/`MAX()`:</strong> Находит минимальное/максимальное значение.\n\n<strong>Пример:</strong> `SELECT AVG(Price) FROM Products;`",
        "difficulty": "easy"
      },
      {
        "id": "sql-12",
        "question": "Что такое VIEW (Представление)?",
        "answer": "<strong>VIEW (Представление)</strong> — это <strong>виртуальная таблица</strong>, основанная на результате запроса `SELECT`. Оно не хранит данные самостоятельно, а является просто сохраненным запросом.\n\n<strong>Использование:</strong>\n* <strong>Безопасность:</strong> Можно предоставить пользователю доступ только к определенным столбцам или строкам, скрывая остальную часть базовой таблицы.\n* <strong>Упрощение сложных запросов:</strong> Сложный `JOIN` или подзапрос можно сохранить как `VIEW`, чтобы затем обращаться к нему как к обычной таблице.",
        "difficulty": "medium"
      },
      {
        "id": "sql-13",
        "question": "Что такое SQL-инъекция и как ей противодействовать?",
        "answer": "<strong>SQL-инъекция</strong> — это уязвимость безопасности, при которой злоумышленник внедряет вредоносный SQL-код во входные данные приложения (например, в поля формы). Это может привести к несанкционированному доступу, изменению или удалению данных.\n\n<strong>Противодействие (Основной метод):</strong>\n* <strong>Параметризованные Запросы (Prepared Statements):</strong> Это самый эффективный метод. Приложение отправляет шаблон SQL-запроса в СУБД, а затем отдельно передает входные данные. СУБД всегда рассматривает входные данные как <strong>значения</strong>, а не как исполняемый код.\n\n<strong>Пример (псевдокод):</strong>\n```sql\n// Плохо: SQL и данные смешаны\nquery = 'SELECT * FROM users WHERE username = \\'' + userInput + '\\'';\n\n// Хорошо: Параметризованный запрос\nquery = 'SELECT * FROM users WHERE username = ?';\nexecute(query, [userInput]); \n```",
        "difficulty": "medium"
      },
      {
        "id": "sql-14",
        "question": "Объясните ключевые свойства ACID в контексте транзакций.",
        "answer": "<strong>ACID</strong> — это набор свойств, гарантирующих, что транзакции в базе данных обрабатываются надежно и последовательно. \n\n* <strong>A (Atomicity, Атомарность):</strong> Транзакция должна быть выполнена <strong>полностью</strong> или <strong>не выполнена вовсе</strong>. Нет частичных результатов.\n* <strong>C (Consistency, Согласованность):</strong> Транзакция переводит базу данных из одного <strong>корректного</strong> состояния в другое. Сохраняются все правила и ограничения (NOT NULL, Foreign Key).\n* <strong>I (Isolation, Изолированность):</strong> Результаты выполняющейся транзакции <strong>невидимы</strong> для других одновременных транзакций до ее завершения (`COMMIT`).\n* <strong>D (Durability, Долговечность):</strong> Результаты зафиксированной (`COMMITTED`) транзакции являются <strong>постоянными</strong> и сохранятся даже в случае сбоя системы.",
        "difficulty": "hard"
      },
      {
        "id": "sql-15",
        "question": "Что такое подзапрос (Subquery)?",
        "answer": "<strong>Подзапрос</strong> (или внутренний запрос, вложенный запрос) — это запрос `SELECT`, вложенный внутрь другого запроса SQL (запроса `SELECT`, `INSERT`, `UPDATE`, `DELETE`) или внутри агрегирующей функции.\n\n<strong>Использование:</strong>\n1. <strong>Сравнение:</strong> Сравнение значения с результатом другого запроса (например, `WHERE price > (SELECT AVG(price) FROM Products)`).\n2. <strong>Список:</strong> Используется в операторах `IN`, `NOT IN`, `EXISTS`.\n3. <strong>Временная таблица:</strong> Используется в качестве источника данных во фразе `FROM` (часто называется <strong>CTE</strong> или <strong>Derived Table</strong>).\n\n<strong>Пример:</strong>\n```sql\nSELECT Name \nFROM Employees \nWHERE Salary = (\n    SELECT MAX(Salary) FROM Employees\n);\n```",
        "difficulty": "medium"
      }
    ]
  },
  // MongoDB
  {
    "id": "mongodb",
    "name": "MongoDB",
    "questions": [
      {
        "id": "mdb-1",
        "question": "Что такое MongoDB и какой тип базы данных она представляет?",
        "answer": "<strong>MongoDB</strong> — это кроссплатформенная, документоориентированная база данных <strong>NoSQL</strong>. Она использует гибкую схему и хранит данные в формате <strong>BSON (Binary JSON)</strong>. MongoDB разработана для высокой производительности, доступности и горизонтальной масштабируемости.\n\n<strong>Ключевые особенности:</strong> Схема без жесткой структуры, масштабирование через <strong>шардинг</strong> (Sharding), высокая доступность через <strong>реплика-сеты</strong> (Replica Sets).",
        "difficulty": "easy"
      },
      {
        "id": "mdb-2",
        "question": "Объясните иерархию хранения данных в MongoDB, сравнив ее с SQL.",
        "answer": "В MongoDB данные организованы следующим образом:\n\n* <strong>Database (База данных):</strong> Эквивалентно базе данных в SQL.\n* <strong>Collection (Коллекция):</strong> Эквивалентно <strong>Таблице</strong> в SQL. Коллекция — это группа документов.\n* <strong>Document (Документ):</strong> Эквивалентно <strong>Строке</strong> (Row) в SQL. Документ — это основная единица хранения данных, состоящая из пар ключ-значение (подобно JSON-объекту).\n* <strong>Field (Поле):</strong> Эквивалентно <strong>Столбцу</strong> (Column) в SQL. Поле представляет собой отдельный атрибут данных внутри документа.",
        "difficulty": "easy"
      },
      {
        "id": "mdb-3",
        "question": "Что такое <strong>_id</strong> в MongoDB и каковы его свойства?",
        "answer": "<strong>_id</strong> — это <strong>первичный ключ</strong> каждого документа в коллекции. Он должен быть <strong>уникальным</strong> в пределах коллекции и является <strong>обязательным</strong>.\n\nПо умолчанию MongoDB генерирует <strong>ObjectId</strong>, который представляет собой 12-байтовое BSON-значение, состоящее из:\n1. <strong>Timestamp</strong> (отметка времени).\n2. <strong>ID машины</strong> (Machine ID).\n3. <strong>ID процесса</strong> (Process ID).\n4. <strong>Счетчик</strong> (Incrementing counter).\n\n<strong>Свойство:</strong> Благодаря включенному Timestamp, ObjectId'ы обеспечивают <strong>естественный порядок сортировки по времени</strong> создания документа.",
        "difficulty": "medium"
      },
      {
        "id": "mdb-4",
        "question": "Как MongoDB реализует отношения между данными (Relations)? Назовите два подхода.",
        "answer": "В отличие от SQL с явными JOIN'ами, MongoDB использует подходы, основанные на гибкости документов:\n\n1. <strong>Встраивание (Embedding):</strong> Связанные данные хранятся <strong>внутри</strong> одного родительского документа (например, список комментариев внутри документа поста). <strong>Плюсы:</strong> Быстрое чтение (не требуется JOIN), атомарность на уровне документа. <strong>Минусы:</strong> Рост размера документа (ограничение 16 МБ).\n2. <strong>Ссылки (Referencing):</strong> В одном документе хранится <strong>_id</strong> другого документа (подобно Foreign Key в SQL). <strong>Плюсы:</strong> Уменьшение размера документов, лучшая нормализация. <strong>Минусы:</strong> Требуются дополнительные запросы для \"разрешения\" ссылок (эмулирование JOIN).",
        "difficulty": "medium"
      },
      {
        "id": "mdb-5",
        "question": "Что такое Replica Set (Реплика-сет) и для чего он нужен?",
        "answer": "<strong>Replica Set</strong> — это группа процессов MongoDB (серверов), обеспечивающих <strong>высокую доступность (High Availability)</strong> и <strong>избыточность данных (Redundancy)</strong>.\n\n<strong>Состав:</strong>\n* <strong>Primary (Первичный):</strong> Сервер, который принимает все операции записи. Чтение может идти как с Primary, так и с Secondary.\n* <strong>Secondary (Вторичный):</strong> Серверы, которые реплицируют данные с Primary. Используются для чтения, а также для автоматического <strong>Failover</strong> (переключения) в случае сбоя Primary.\n\n<strong>Цель:</strong> Обеспечение <strong>автоматического переключения на резервный сервер</strong> в случае отказа основного.",
        "difficulty": "medium"
      },
      {
        "id": "mdb-6",
        "question": "Что такое Sharding (Шардинг) и в каких случаях он используется?",
        "answer": "<strong>Sharding (Шардирование)</strong> — это метод <strong>горизонтального масштабирования</strong> MongoDB, при котором данные распределяются между несколькими независимыми серверами (шардами). Это позволяет обрабатывать огромные объемы данных и высокую нагрузку, которая не умещается на одном сервере.\n\n<strong>Используется, когда:</strong>\n1. Объем данных <strong>превышает</strong> возможности хранения одного сервера.\n2. Требуется <strong>высокая пропускная способность</strong> операций чтения/записи, которую не может обеспечить один сервер.\n\n<strong>Ключевой элемент:</strong> <strong>Shard Key (Ключ шардирования)</strong>, который определяет, на какой шард попадет документ.",
        "difficulty": "hard"
      },
      {
        "id": "mdb-7",
        "question": "Что такое <strong>Aggregation Pipeline</strong> (Конвейер Агрегации)?",
        "answer": "<strong>Aggregation Pipeline</strong> — это основной инструмент MongoDB для выполнения сложных <strong>операций ETL</strong> (Extract, Transform, Load) и аналитики. Это <strong>многоступенчатый процесс</strong>, где документы проходят через последовательность операторов (стадий).\n\n<strong>Основные стадии (примеры):</strong>\n* <strong>`$match`:</strong> Фильтрует документы (аналог `WHERE`).\n* <strong>`$group`:</strong> Группирует документы и вычисляет агрегированные значения (аналог `GROUP BY`).\n* <strong>`$project`:</strong> Выбирает, переименовывает или создает новые поля.\n* <strong>`$sort`:</strong> Сортирует документы.\n\n<strong>Пример:</strong> `db.orders.aggregate([ { $match: { status: 'A' } }, { $group: { _id: '$cust_id', total: { $sum: '$amount' } } } ])`",
        "difficulty": "medium"
      },
      {
        "id": "mdb-8",
        "question": "Каково ограничение на размер документа в MongoDB?",
        "answer": "Максимальный размер <strong>BSON-документа</strong> в MongoDB составляет <strong>16 мегабайт (16 MB)</strong>. Это ограничение существует для обеспечения того, чтобы документ не использовал чрезмерное количество оперативной памяти при передаче или обработке, а также для предотвращения неэффективных схем встраивания (Embedding).",
        "difficulty": "easy"
      },
      {
        "id": "mdb-9",
        "question": "Объясните атомарность в MongoDB.",
        "answer": "MongoDB гарантирует <strong>атомарность</strong> для операций <strong>на уровне одного документа</strong>. Это означает, что если вы вносите несколько изменений в один документ, либо все изменения будут успешно применены, либо ни одно из них. Это обеспечивает <strong>целостность данных</strong> внутри одного документа.\n\nДля обеспечения атомарности <strong>множества документов</strong> (Multi-Document Transactions) используются <strong>многодокументные транзакции</strong>, доступные с версии MongoDB 4.0 (для Replica Sets) и 4.2 (для Sharded Clusters), которые обеспечивают гарантии <strong>ACID</strong>.",
        "difficulty": "medium"
      },
      {
        "id": "mdb-10",
        "question": "Как работают индексы в MongoDB и на что они влияют?",
        "answer": "<strong>Индексы</strong> в MongoDB работают так же, как и в SQL: они хранят упорядоченный набор значений полей, позволяя СУБД быстро находить документы, не сканируя всю коллекцию.\n\n<strong>Влияние:</strong>\n* <strong>Положительное (Чтение):</strong> Ускоряют запросы `find()`, `$sort` и `$group` по индексированным полям.\n* <strong>Отрицательное (Запись):</strong> Замедляют операции `insert`, `update` и `delete`, так как при изменении документа необходимо обновить и соответствующие индексы.",
        "difficulty": "medium"
      },
      {
        "id": "mdb-11",
        "question": "Приведите пример команды для вставки одного и множества документов в MongoDB Shell.",
        "answer": "<strong>Вставка одного документа (Insert One):</strong>\n```javascript\ndb.users.insertOne({\n  name: 'Alice',\n  age: 30,\n  status: 'active'\n});\n```\n<strong>Вставка множества документов (Insert Many):</strong>\n```javascript\ndb.users.insertMany([\n  { name: 'Bob', age: 25 },\n  { name: 'Charlie', age: 40 }\n]);\n```",
        "difficulty": "easy"
      },
      {
        "id": "mdb-12",
        "question": "Приведите пример команды для чтения (поиска) документов, где возраст больше 30.",
        "answer": "Для поиска используется метод `find()`. Условие `{ age: { $gt: 30 } }` — это фильтр, использующий <strong>оператор сравнения `$gt` (greater than)</strong>.\n\n```javascript\ndb.users.find({\n  age: { $gt: 30 } \n});\n```\n<strong>Дополнительно (Проекция):</strong> Чтобы вернуть только поля `name` и `age`, исключив `_id`:\n```javascript\ndb.users.find(\n  { age: { $gt: 30 } },\n  { name: 1, age: 1, _id: 0 }\n);\n```",
        "difficulty": "easy"
      },
      {
        "id": "mdb-13",
        "question": "Приведите пример команды для обновления поля (только имени) в одном документе.",
        "answer": "Для выборочного обновления используется метод <strong>`updateOne()`</strong> с <strong>оператором `$set`</strong>.\n\n```javascript\ndb.users.updateOne(\n  { name: 'Alice' }, // Фильтр (какой документ обновить)\n  { $set: { email: 'alice.new@example.com' } } // Операция обновления\n);\n```",
        "difficulty": "medium"
      },
      {
        "id": "mdb-14",
        "question": "Объясните разницу между `$set` и `$push` при обновлении.",
        "answer": "* <strong>`$set`:</strong> Используется для <strong>установки</strong> значения поля. Если поле существует, оно обновляется; если нет — создается. Используется для скалярных значений (строки, числа) или для <strong>замены</strong> всего массива/встроенного объекта.\n* <strong>`$push`:</strong> Используется для <strong>добавления</strong> элемента в <strong>конец массива</strong>. Если поле не является массивом, `update` выдаст ошибку.\n\n<strong>Пример `$push`:</strong>\n```javascript\ndb.users.updateOne(\n  { name: 'Alice' },\n  { $push: { hobbies: 'Gardening' } } // Добавить 'Gardening' в массив hobbies\n);\n```",
        "difficulty": "medium"
      },
      {
        "id": "mdb-15",
        "question": "В чем главное отличие MongoDB от традиционных SQL-баз данных?",
        "answer": "Главное отличие в <strong>модели данных и схеме</strong>:\n\n| Критерий | MongoDB (NoSQL) | SQL (Relational) |\n| :--- | :--- | :--- |\n| <strong>Модель данных</strong> | Документы (JSON-like) | Таблицы (Строки и столбцы) |\n| <strong>Схема</strong> | <strong>Гибкая/Динамическая</strong> (Schema-less) | <strong>Жесткая/Предварительно определенная</strong> |\n| <strong>Связи</strong> | Встраивание (Embedding) или Ссылки (Referencing) | Явные <strong>Foreign Keys</strong> и <strong>JOIN</strong> |\n| <strong>Масштабирование</strong> | Горизонтальное (Sharding) | Традиционно вертикальное (наращивание мощности) |",
        "difficulty": "medium"
      }
    ]
  },
  // security
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
  },
  // C#
  {
    "id": "csharp",
    "name": "C# Fundamentals",
    "questions": [
      {
        "id": "cs-1",
        "question": "Что такое C# и каковы его основные характеристики?",
        "answer": "<strong>C# (Си-шарп)</strong> — это современный, объектно-ориентированный (ООП) и типобезопасный язык программирования, разработанный Microsoft в рамках платформы <strong>.NET</strong>. \n\n<strong>Основные характеристики:</strong>\n1. <strong>Объектно-ориентированный:</strong> Поддерживает инкапсуляцию, наследование, полиморфизм.\n2. <strong>Типобезопасность:</strong> Проверка типов происходит на этапе компиляции, минимизируя ошибки в рантайме.\n3. <strong>Автоматическое управление памятью:</strong> Использует <strong>сборщик мусора (Garbage Collector, GC)</strong>.\n4. <strong>Интероперабельность:</strong> Легко взаимодействует с кодом, написанным на других языках .NET.",
        "difficulty": "easy"
      },
      {
        "id": "cs-2",
        "question": "Объясните разницу между Value Types (Значимые типы) и Reference Types (Ссылочные типы).",
        "answer": "<strong>Значимые типы (Value Types):</strong>\n* Хранят свои данные <strong>напрямую в стеке</strong> (или внутри объекта/структуры).\n* При присваивании создается <strong>полная копия значения</strong>.\n* Примеры: `int`, `char`, `bool`, `struct`, `enum`.\n\n<strong>Ссылочные типы (Reference Types):</strong>\n* Хранят <strong>ссылку (адрес)</strong> на данные, которые расположены <strong>в управляемой куче (Managed Heap)</strong>.\n* При присваивании создается <strong>копия ссылки</strong>, и обе переменные указывают на один и тот же объект.\n* Примеры: `class`, `string`, `array`, `delegate`, `object`.",
        "difficulty": "medium"
      },
      {
        "id": "cs-3",
        "question": "Что такое Boxing (Упаковка) и Unboxing (Распаковка) и каковы их последствия для производительности?",
        "answer": "* <strong>Boxing (Упаковка):</strong> Процесс <strong>неявного</strong> преобразования <strong>значимого типа</strong> (например, `int`) в <strong>ссылочный тип</strong> (`object` или интерфейс).\n* <strong>Unboxing (Распаковка):</strong> Процесс <strong>явного</strong> преобразования <strong>ссылочного типа</strong> (содержащего упакованное значение) обратно в <strong>значимый тип</strong>.\n\n<strong>Последствия для производительности:</strong> Оба процесса являются <strong>ресурсоемкими</strong> операциями, так как Boxing требует <strong>выделения памяти в куче</strong>, а Unboxing требует <strong>проверки типа</strong> в рантайме. Чрезмерное использование Boxing/Unboxing приводит к замедлению работы и дополнительной нагрузке на сборщик мусора.",
        "difficulty": "medium"
      },
      {
        "id": "cs-4",
        "question": "Объясните назначение ключевых слов `using` (директива) и `using` (оператор/блок).",
        "answer": "В C# ключевое слово `using` используется в двух разных контекстах:\n\n1. <strong>Директива `using` (в начале файла):</strong> Используется для <strong>импорта пространств имен</strong> (`Namespaces`), чтобы можно было обращаться к типам без указания их полного имени.\n   * *Пример:* `using System.Collections.Generic;`\n\n2. <strong>Оператор `using` (блок):</strong> Используется для <strong>автоматического и гарантированного освобождения неуправляемых ресурсов</strong> (например, файловых потоков, подключений к БД). Тип, используемый в блоке `using`, должен реализовывать интерфейс <strong>`IDisposable`</strong>.\n   * *Пример:* `using (var file = new FileStream(...)) { ... }` (метод `Dispose()` будет вызван автоматически).",
        "difficulty": "medium"
      },
      {
        "id": "cs-5",
        "question": "В чем разница между `const` и `readonly`?",
        "answer": "Оба ключевых слова используются для создания неизменяемых (иммутабельных) полей, но имеют важные отличия:\n\n| Критерий | `const` | `readonly` |\n| :--- | :--- | :--- |\n| <strong>Время инициализации</strong> | <strong>Compile-time</strong> (во время компиляции) | <strong>Run-time</strong> (во время выполнения) |\n| <strong>Где инициализируется</strong> | Только в момент объявления поля | В момент объявления ИЛИ в <strong>конструкторе</strong> |\n| <strong>Типы</strong> | Ограничен примитивами, `string` и `null` | Любые типы (Value и Reference Types) |\n| <strong>Область видимости</strong> | <strong>Статическое</strong> поле по умолчанию (значение одно для всех экземпляров) | Может быть <strong>полем экземпляра</strong> (значение может быть разным для каждого объекта) |",
        "difficulty": "medium"
      },
      {
        "id": "cs-6",
        "question": "Что такое `namespace` (пространство имен) и для чего оно используется?",
        "answer": "<strong>Namespace</strong> — это механизм C# для <strong>организации кода</strong> и <strong>предотвращения конфликтов имен</strong> (Name Collisions). Он служит логическим контейнером для группировки связанных классов, структур, интерфейсов и других типов.\n\n<strong>Пример:</strong> Два разных разработчика могут создать класс с именем `Logger`. Если они помещены в разные пространства имен (`MyCompany.App1` и `MyCompany.App2`), то их можно использовать одновременно без конфликтов.",
        "difficulty": "easy"
      },
      {
        "id": "cs-7",
        "question": "Объясните работу сборщика мусора (Garbage Collector, GC) в .NET.",
        "answer": "<strong>Сборщик мусора (GC)</strong> — это часть <strong>CLR (Common Language Runtime)</strong>, которая автоматически управляет памятью <strong>кучи (Heap)</strong>, выделенной для ссылочных типов. \n\n<strong>Принцип работы (Mark and Sweep):</strong>\n1. <strong>Определение достижимости (Marking):</strong> GC определяет, какие объекты в куче <strong>достижимы</strong> (то есть, на них есть ссылки из стека или других корней).\n2. <strong>Сборка (Sweeping):</strong> GC освобождает память, занятую <strong>недостижимыми</strong> объектами.\n3. <strong>Компактизация (Compacting):</strong> После освобождения памяти GC может переместить оставшиеся объекты, чтобы устранить фрагментацию памяти.\n\nGC использует <strong>поколения (Generations 0, 1, 2)</strong>: новые объекты создаются в Gen 0, и чем дольше объект \"живет\", тем выше его поколение, и тем реже GC его проверяет.",
        "difficulty": "medium"
      },
      {
        "id": "cs-8",
        "question": "Какое ключевое слово используется для явного освобождения неуправляемых ресурсов, и какой интерфейс должен быть реализован?",
        "answer": "Для явного освобождения <strong>неуправляемых ресурсов</strong> (таких как файловые потоки, сетевые подключения, хэндлы ОС) используется паттерн <strong>`IDisposable`</strong>.\n\n* <strong>Интерфейс:</strong> Должен быть реализован интерфейс <strong>`System.IDisposable`</strong>, который содержит единственный метод <strong>`Dispose()`</strong>.\n* <strong>Использование:</strong> Ресурсы, реализующие `IDisposable`, должны быть использованы внутри блока <strong>`using`</strong>, который гарантированно вызывает метод `Dispose()`, даже если внутри блока произойдет исключение.",
        "difficulty": "medium"
      },
      {
        "id": "cs-9",
        "question": "В чем разница между оператором `==` и методом `.Equals()`?",
        "answer": "Поведение зависит от типа:\n\n* <strong>Для значимых типов (`int`, `struct`):</strong> И `==`, и `.Equals()` по умолчанию сравнивают <strong>сами значения</strong>.\n* <strong>Для ссылочных типов (`class`, `object`):</strong>\n    * <strong>`==`:</strong> По умолчанию сравнивает <strong>ссылки</strong> (проверяет, указывают ли две переменные на <strong>один и тот же объект</strong> в памяти).\n    * <strong>`.Equals()`:</strong> По умолчанию (в базовом классе `object`) также сравнивает ссылки. Однако этот метод <strong>часто переопределяется</strong> (например, в `string` или ваших кастомных классах), чтобы сравнивать <strong>фактическое содержимое/значение</strong> объектов.",
        "difficulty": "medium"
      },
      {
        "id": "cs-10",
        "question": "Для чего используется ключевое слово `var`?",
        "answer": "Ключевое слово <strong>`var`</strong> используется для <strong>неявной типизации</strong> локальных переменных. Это означает, что тип переменной определяется (выводится) <strong>компилятором</strong> на основе типа выражения, используемого для инициализации.\n\n<strong>Особенности:</strong>\n* <strong>Не является динамическим типом:</strong> Тип фиксируется во время компиляции (C# остается строго типизированным).\n* <strong>Обязательна инициализация:</strong> Переменная должна быть инициализирована в момент объявления.\n* <strong>Используется для анонимных типов:</strong> Обязателен при работе с <strong>анонимными типами</strong> в <strong>LINQ</strong>.",
        "difficulty": "easy"
      },
      {
        "id": "cs-11",
        "question": "Что такое `struct` и чем он отличается от `class`?",
        "answer": "<strong>`struct` (Структура)</strong> — это пользовательский <strong>значимый тип (Value Type)</strong>, который обычно используется для представления небольших, связанных групп данных, где важна производительность и семантика копирования.\n\n<strong>Отличия от `class`:</strong>\n1. <strong>Тип:</strong> `struct` — значимый тип (стек); `class` — ссылочный тип (куча).\n2. <strong>Наследование:</strong> Структуры <strong>не поддерживают наследование</strong> (не могут наследоваться от другого класса/структуры, кроме `System.ValueType`). Классы поддерживают наследование.\n3. <strong>Конструктор по умолчанию:</strong> До C# 10 структуры <strong>не могли</strong> объявлять конструктор без параметров (по умолчанию всегда был конструктор с нулевыми значениями). Классы могут.",
        "difficulty": "medium"
      },
      {
        "id": "cs-12",
        "question": "Объясните назначение ключевых слов `checked` и `unchecked`.",
        "answer": "Эти ключевые слова управляют поведением C# при <strong>переполнении (Overflow)</strong> целочисленных арифметических операций.\n\n* <strong>`checked`:</strong> Инструктирует CLR генерировать <strong>`OverflowException`</strong> при переполнении. Это обеспечивает безопасные, но более медленные вычисления.\n* <strong>`unchecked`:</strong> Инструктирует CLR игнорировать переполнение, позволяя результату <strong>\"заворачиваться\"</strong> (например, `int.MaxValue + 1` станет `int.MinValue`). Это быстрее, но потенциально небезопасно.\n\nПоведение по умолчанию зависит от контекста: в консольных приложениях и библиотеках обычно `unchecked`, в константах итераторов — `checked`.",
        "difficulty": "medium"
      },
      {
        "id": "cs-13",
        "question": "Что такое Nullable Types (Обнуляемые типы)?",
        "answer": "<strong>Nullable Types</strong> позволяют <strong>значимым типам (Value Types)</strong> принимать значение <strong>`null`</strong> в дополнение к их обычному диапазону значений. Значимые типы по умолчанию не могут быть `null`.\n\n<strong>Синтаксис:</strong> Добавление вопросительного знака `?` после имени типа (например, `int?`, `DateTime?`).\n\n<strong>Реализация:</strong> `Nullable<T>` — это структура, которая имеет два поля: `Value` (само значение) и `HasValue` (логический флаг, указывающий, присвоено ли значение, или же это `null`).",
        "difficulty": "easy"
      },
      {
        "id": "cs-14",
        "question": "Что такое `ref`, `out` и `in` параметры и в чем их ключевые различия?",
        "answer": "Эти модификаторы используются для передачи аргументов по ссылке:\n\n| Модификатор | Назначение | Инициализация аргумента |\n| :--- | :--- | :--- |\n| <strong>`ref`</strong> | Передача по ссылке (двунаправленная) | Должен быть <strong>инициализирован</strong> вызывающим кодом <strong>до</strong> вызова метода. |\n| <strong>`out`</strong> | Передача по ссылке (выходное значение) | <strong>Не должен</strong> быть инициализирован до вызова. Метод <strong>обязан</strong> присвоить ему значение. |\n| <strong>`in`</strong> | Передача по ссылке (только для чтения) | Должен быть инициализирован до вызова. Метод <strong>не может</strong> изменить его значение (гарантия иммутабельности внутри метода). |",
        "difficulty": "hard"
      },
      {
        "id": "cs-15",
        "question": "Объясните концепцию LINQ.",
        "answer": "<strong>LINQ (Language Integrated Query)</strong> — это набор технологий, введенных в C# 3.0, которые позволяют писать <strong>запросы</strong> непосредственно внутри языка C# (или VB.NET) к различным источникам данных. \n\n<strong>Источники данных (LINQ Providers):</strong>\n* <strong>LINQ to Objects:</strong> Запросы к коллекциям в памяти (`List<T>`, массивы).\n* <strong>LINQ to SQL / LINQ to Entities:</strong> Запросы к реляционным базам данных (преобразуются в SQL).\n* <strong>LINQ to XML:</strong> Запросы к XML-документам.\n\n<strong>Преимущество:</strong> Обеспечивает единый, типобезопасный синтаксис запросов (например, `from c in customers where c.City == \"London\" select c`).",
        "difficulty": "medium"
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
