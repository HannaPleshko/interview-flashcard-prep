import { Link, useLocation } from "react-router-dom";
import { Code, Brain, BookOpen, Menu, X, Star, ClipboardList } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    if (path === '/practice') {
      return location.pathname === '/' || location.pathname.startsWith('/practice');
    }
    return location.pathname.startsWith(path);
  };

  const getNavLinkClass = (path: string) => {
    const baseClass = "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300";
    return isActive(path)
      ? `${baseClass} text-white bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md hover:shadow-lg hover:scale-105`
      : `${baseClass} text-gray-600 hover:text-purple-600 hover:bg-white/70`;
  };

  const getMobileNavLinkClass = (path: string) => {
    const baseClass = "flex items-center gap-3 py-3 px-6 text-base font-medium transition-colors duration-200";
    return isActive(path)
      ? `${baseClass} text-white bg-gradient-to-r from-purple-500 to-indigo-500`
      : `${baseClass} text-gray-700 hover:bg-purple-50 hover:text-purple-600`;
  };

  return (
    <>
      <header className="backdrop-blur-xl bg-white/90 border-b border-purple-100 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
              onClick={() => isMenuOpen && toggleMenu()}
            >
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Hschool
                </h1>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                to="/study"
                className={getNavLinkClass('/study')}
              >
                <Brain className="h-4 w-4" />
                Изучение теории
              </Link>
              <Link
                to="/"
                className={getNavLinkClass('/practice')}
              >
                <BookOpen className="h-4 w-4" />
                Практиковать теорию
              </Link>
              <Link
                to="/tasks"
                className={getNavLinkClass('/tasks')}
              >
                <ClipboardList className="h-4 w-4" />
                Задачи
              </Link>
              <Link
                to="/rate"
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-white/70 transition-all duration-300"
                title="Оценить приложение"
              >
                <Star className="h-5 w-5 text-yellow-500" />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-[60] bg-white/80 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-purple-100">
            <Link to="/" onClick={toggleMenu} className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-md">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Hschool</h1>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex-grow mt-8 flex flex-col">
            <Link
              to="/study"
              onClick={toggleMenu}
              className={getMobileNavLinkClass('/study')}
            >
              <Brain className="h-5 w-5 text-purple-500" />
              <span>Изучение теории</span>
            </Link>
            <Link
              to="/"
              onClick={toggleMenu}
              className={getMobileNavLinkClass('/practice')}
            >
              <BookOpen className="h-5 w-5 text-blue-500" />
              <span>Практиковать теорию</span>
            </Link>
            <Link
              to="/tasks"
              onClick={toggleMenu}
              className={getMobileNavLinkClass('/tasks')}
            >
              <ClipboardList className="h-5 w-5 text-green-500" />
              <span>Задачи</span>
            </Link>
            <Link
              to="/rate"
              onClick={toggleMenu}
              className={getMobileNavLinkClass('/rate')}
            >
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Оценить</span>
            </Link>
          </nav>

          <div className="p-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Hschool
          </div>
        </div>
      </div>
      
      {/* Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Header; 