import { Link } from "react-router-dom";
import { Frown, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center p-8 max-w-lg mx-auto">
           <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-16 shadow-2xl border border-white/20">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Frown className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
                  404
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-semibold">
                  Страница не найдена
                </p>
                <p className="text-muted-foreground mt-2">
                  К сожалению, мы не смогли найти страницу, которую вы ищете.
                </p>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Вернуться на главную
                </Link>
              </button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
