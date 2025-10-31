import { Code, Database, Globe, Layers, Server, Zap, Target, Shield } from "lucide-react";

export const technologies = [
  {
    id: "html",
    name: "HTML",
    description: "Структура веб-страниц",
    icon: Globe,
    gradient: "from-orange-400 to-orange-600",
  },
  {
    id: "css",
    name: "CSS",
    description: "Стилизация и дизайн",
    icon: Layers,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Язык программирования",
    icon: Zap,
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Типизированный JavaScript",
    icon: Code,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "react",
    name: "React",
    description: "Библиотека для UI",
    icon: Code,
    gradient: "from-cyan-400 to-cyan-600",
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "Серверный JavaScript",
    icon: Server,
    gradient: "from-green-500 to-green-700",
  },
  {
    id: "sql",
    name: "SQL",
    description: "Работа с базами данных",
    icon: Database,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: "testing",
    name: "Тестирование",
    description: "Методы и инструменты тестирования",
    icon: Target,
    gradient: "from-red-400 to-red-600",
  },
  {
    id: "security",
    name: "Безопасность",
    description: "Безопасность веб-приложений",
    icon: Shield,
    gradient: "from-emerald-400 to-emerald-600",
  },
];
