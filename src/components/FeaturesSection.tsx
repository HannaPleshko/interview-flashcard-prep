import React from "react";
import { Code, Database, Globe, Layers, Server, Zap, Sparkles, Brain, Target } from "lucide-react";

const featuresData = [
  {
    icon: Brain,
    title: "Интерактивные карточки",
    description: "Изучайте теорию с помощью карточек, которые помогают лучше запоминать материал",
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
  }
];

const FeaturesSection = () => {
  return (
    <section className="pt-12 md:pt-16 relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="
                p-4 rounded-3xl 
                bg-white
                border-0
                transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                shadow-md
                relative
                group
                animate-fade-in
                flex items-center gap-4
              "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-md`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="text-base font-semibold mb-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-tight">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
