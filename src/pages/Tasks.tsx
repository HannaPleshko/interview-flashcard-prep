import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code } from "lucide-react";

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Практические задачи
            </h1>
            <p className="text-muted-foreground text-lg">
              Решайте практические задачи для закрепления знаний
            </p>
          </div>

          <div className="grid gap-6">
            {/* Здесь будет список задач */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Задачи появятся скоро</h2>
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Мы работаем над добавлением практических задач. Скоро здесь появятся интересные задания для практики.
              </p>
              <div className="flex justify-end">
                <Button asChild variant="outline">
                  <Link to="/">Вернуться на главную</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tasks; 