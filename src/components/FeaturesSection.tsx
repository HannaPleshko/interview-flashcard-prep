
import React from "react";
import { Code, Database, Globe, Layers, Server, Zap, Sparkles, Brain, Target } from "lucide-react";

const featuresData = [
  {
    icon: Brain,
    title: "Интерактивные карточки",
    description: "Изучайте теорию с помощью карточек, которые помогают лучше запоминать материал и готовиться к собеседованиям",
    gradient: "from-green-400 to-blue-500"
  },
  {
    icon: Code,
    title: "Практические задачи",
    description: "Решайте реальные задачи с автоматической проверкой кода и мгновенной обратной связью",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Target,
    title: "Разные уровни сложности",
    description: "Задачи и вопросы для разработчиков любого уровня: от junior до senior",
    gradient: "from-orange-400 to-red-500"
  },
  {
    icon: Layers,
    title: "Современный стек",
    description: "Актуальные технологии веб-разработки: от HTML/CSS до React и Node.js",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: Zap,
    title: "Мгновенная проверка",
    description: "Автоматическая проверка решений с подробными тестами и объяснениями ошибок",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Sparkles,
    title: "Удобный интерфейс",
    description: "Современный дизайн с адаптивной версткой для комфортного обучения на любых устройствах",
    gradient: "from-violet-400 to-purple-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero gradient-animated opacity-5" />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Code, Database, Globe, Layers, Server, Zap].map((Icon, index) => (
          <Icon
            key={index}
            className={`absolute text-purple-200/10 w-8 h-8 animate-float-${(index % 3) + 1}`}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">✨ Особенности платформы</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="
                p-8 rounded-3xl 
                bg-white/90 backdrop-blur-md
                border-0
                transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                shadow-md
                relative
                group
                animate-fade-in
              "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-[2rem] flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
