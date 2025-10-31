import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Users,
  MessageSquare,
  Target,
  CheckCircle,
  AlertCircle,
  Star,
  BookOpen,
  Clock,
  Smile,
  Brain,
  Heart,
  Zap,
  Shield,
  Trophy,
  X,
  Code,
  HelpCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Tips = () => {
  const tips = [
    {
      category: "Подготовка к собеседованию",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          title: "Изучите компанию",
          description:
            "Изучите миссию, ценности, продукты и последние новости компании. Это покажет вашу заинтересованность.",
        },
        {
          title: "Подготовьте вопросы",
          description:
            "Подготовьте 3-5 вопросов о роли, команде и компании. Это демонстрирует вашу заинтересованность.",
        },
        {
          title: "Повторите технические навыки",
          description:
            "Освежите в памяти ключевые технологии из вакансии. Будьте готовы к техническим вопросам.",
          tip: "Потренируйтесь на LeetCode, HackerRank или аналогичных платформах",
        },
        {
          title: "Подготовьте портфолио проектов",
          description:
            "Соберите 3-5 лучших проектов на GitHub. Очистите код, добавьте README с описанием, скриншоты, демо.",
        },
        {
          title: "Подготовьте рассказ о себе",
          description:
            "Составьте 2-минутный рассказ о себе: образование, опыт, проекты, цели. Практикуйтесь вслух.",
        },
      ],
    },
    {
      category: "Технические вопросы",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      items: [
        {
          title: "Объясняйте свой ход мыслей",
          description: "Говорите вслух, как решаете задачу. Это показывает процесс мышления.",
        },
        {
          title: "Задавайте уточняющие вопросы",
          description:
            "Уточняйте требования, ограничения и ожидания. Это показывает аналитическое мышление.",
        },
        {
          title: "Начинайте с простого решения",
          description:
            "Сначала предложите простое решение, затем оптимизируйте. Покажите итеративный подход.",
        },
        {
          title: "Используйте псевдокод",
          description:
            "Если не знаете точный синтаксис, напишите псевдокод. Главное - показать логику решения.",
        },
        {
          title: "Обсуждайте edge cases",
          description:
            "Подумайте о граничных случаях, пустых входных данных, больших числах. Это показывает внимательность.",
          tip: "'А что если массив пустой?', 'А если число очень большое?'",
        },
      ],
    },
  ];

  const commonMistakes = [
    "Жаловаться на коллег, сложные проекты, загрузку. Говорить плохо о предыдущих работодателях",
    "Приходить неподготовленным к техническим вопросам",
    "Не задавать вопросов о компании и роли",
    "Рассказывать слишком личные или нерелевантные детали",
    "Перебивать интервьюера",
    "Сильно нервничать, молчать или не думать вслух",
    "Не попросить фидбек по результатам собсеседования",
    "Не делать заметки или запись интервью, чтобы потом пересмотреть",
    "Не демонстрировать готовность учиться и развиваться",
    "Не переспрашивать, если не поняли вопрос",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
            <Lightbulb className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Советы по прохождению собеседований
          </h1>
        </div>

        {/* Junior Developer Checklist */}
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 backdrop-blur-sm border-orange-200 shadow-lg mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-orange-800">
                Чек-лист для JUNIOR разработчика перед собеседованием
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  📁 Портфолио и проекты
                </h3>
                {[
                  "Сделать рефакторинг pet-проектов на GitHub",
                  "Добавить README с описанием и скриншотами",
                  "Добавить демо-версии проектов (Vercel, Netlify)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-white/60 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-orange-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  📄 Документы и профили
                </h3>
                {[
                  "Создать резюме на русском и английском языках",
                  "Зарегистрироваться в LinkedIn, hh.ru и заполнить профиль",
                  "Потренироваться в решении задач и  в ответах на теорию",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-white/60 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-orange-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Tips Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {tips.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={categoryIndex}
                className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200"
                    >
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      {item.tip && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-blue-800 font-medium">💡 {item.tip}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Common Mistakes Section */}
        <Card className="bg-red-50/70 backdrop-blur-sm border-red-200 shadow-lg mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-red-800">
                Частые ошибки на собеседованиях
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {commonMistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/60 rounded-lg border border-red-200"
                >
                  <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                  <span className="text-red-800 font-medium">{mistake}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Questions to Ask Section */}
        <Card className="bg-blue-50/70 backdrop-blur-sm border-blue-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-blue-800">
                Вопросы, которые стоит задать интервьюеру
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5" />О работе и технологиях
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Какой стек технологий используется в проекте?",
                    "Какие основные технические вызовы решает команда?",
                    "Как организован процесс разработки (Agile, Scrum)?",
                    "Какие инструменты используются для CI/CD?",
                    "Как происходит code review в команде?",
                    "Есть ли возможность влиять на технические решения?",
                    "Как часто обновляются технологии в проекте?",
                    "Какие метрики используются для оценки качества кода?",
                  ].map((question, index) => (
                    <div key={index} className="p-3 bg-white/60 rounded-lg border border-blue-200">
                      <span className="text-blue-800 font-medium">{question}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5" />О команде и культуре
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Какой размер команды и как она структурирована?",
                    "Как происходит онбординг новых разработчиков?",
                    "Есть ли менторство в команде?",
                    "Как часто проводятся ретроспективы?",
                    "Какие ценности важны для команды?",
                    "Как решаются конфликты в команде?",
                    "Есть ли возможность работать удаленно?",
                    "Как организовано общение между командами?",
                  ].map((question, index) => (
                    <div key={index} className="p-3 bg-white/60 rounded-lg border border-blue-200">
                      <span className="text-blue-800 font-medium">{question}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5" />О развитии и карьере
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Какие возможности для профессионального роста есть?",
                    "Предоставляется ли бюджет на обучение и конференции?",
                    "Есть ли возможность менять роли внутри компании?",
                    "Как оценивается эффективность работы?",
                    "Какие навыки наиболее ценятся в команде?",
                    "Есть ли возможность участвовать в open-source проектах?",
                    "Как часто проводятся performance review?",
                    "Какие планы у компании на ближайшие 2-3 года?",
                  ].map((question, index) => (
                    <div key={index} className="p-3 bg-white/60 rounded-lg border border-blue-200">
                      <span className="text-blue-800 font-medium">{question}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-blue-800 font-semibold mb-2">💡 Совет:</p>
                    <p className="text-blue-700">
                      Выберите 3-5 вопросов, которые действительно вас интересуют. Это покажет вашу
                      заинтересованность и поможет понять, подходит ли вам эта позиция.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Motivation */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border border-purple-200">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Удачи на собеседовании! 🍀</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Помните: каждое собеседование — это опыт. Даже если не получится с этой позицией, вы
            станете лучше подготовлены к следующей!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tips;
