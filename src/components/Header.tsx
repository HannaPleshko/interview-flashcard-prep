import { Link, useLocation } from "react-router-dom";
import { Code, Brain, BookOpen, Menu, X, Star, ClipboardList, Terminal, Regex } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, ListTodo } from "lucide-react";
import { cn } from "@/lib/utils";

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
    if (path === "/") {
      return location.pathname === "/";
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

  const navItems = [
    { path: "/study", icon: BookOpen, label: "Учебник" },
    { path: "/", icon: Play, label: "Карточки теории" },
    { path: "/tasks", icon: ListTodo, label: "Задачи", isNew: true },
    { path: "/interpreter", icon: Terminal, label: "Интерпретатор", isNew: true },
    { path: "/regex", icon: Regex, label: "RegEx", isNew: true },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Hschool
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "relative group transition-all duration-200",
                  isActive(item.path) && "bg-gradient-to-r from-purple-600/10 to-blue-600/10"
                )}
              >
                <Link to={item.path} className="relative">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                  {item.isNew && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] font-medium text-purple-600">
                      new
                    </span>
                  )}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600" />
                  )}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
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
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                size="lg"
                asChild
                className={`w-full justify-start ${
                  location.pathname === item.path ? "bg-purple-100 text-purple-700" : ""
                }`}
              >
                <Link to={item.path} className="flex items-center gap-3 relative">
                  <item.icon className="h-5 w-5" />
                  {item.label}
                  {item.isNew && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] font-medium text-purple-600">
                      new
                    </span>
                  )}
                </Link>
              </Button>
            ))}
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