import { Link } from "react-router-dom";
import { Code, Brain, BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="backdrop-blur-xl bg-white/90 border-b border-purple-100 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Hschool
                </h1>
              </div>
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/study" className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Brain className="h-5 w-5" />
              Изучение
            </Link>
            <Link to="/practice" className="flex items-center gap-2 px-6 py-3 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-white/70 transition-all duration-300">
              <BookOpen className="h-5 w-5" />
              Практика
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 