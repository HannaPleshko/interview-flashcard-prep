import React, { useState, useEffect } from 'react';
import { Play, Trash2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Interpreter = () => {
  const [code, setCode] = useState('// Напишите ваш JavaScript код здесь\nconsole.log("Привет, мир!");');
  const [output, setOutput] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);

  // Перехватываем console.log
  useEffect(() => {
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      originalConsoleLog.apply(console, args);
      setOutput(prev => [...prev, args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ')]);
    };

    return () => {
      console.log = originalConsoleLog;
    };
  }, []);

  const runCode = () => {
    setOutput([]);
    try {
      // Очищаем предыдущий вывод
      setOutput([]);
      
      // Выполняем код
      const result = new Function(code)();
      
      // Если код вернул значение, добавляем его в вывод
      if (result !== undefined) {
        setOutput(prev => [...prev, String(result)]);
      }
    } catch (error) {
      setOutput(prev => [...prev, `Ошибка: ${error.message}`]);
    }
  };

  const clearCode = () => {
    setCode('// Напишите ваш JavaScript код здесь\nconsole.log("Привет, мир!");');
    setOutput([]);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg">
              <Play className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                JavaScript Интерпретатор
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Напишите и запустите JavaScript код прямо в браузере</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Редактор кода */}
          <div className="bg-white/90 rounded-xl border border-purple-100 shadow p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-foreground">Код</h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyCode}
                  className="flex items-center gap-2 border-purple-200 text-purple-700 hover:bg-white/50"
                >
                  {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {isCopied ? 'Скопировано' : 'Копировать'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearCode}
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 border-red-200"
                >
                  <Trash2 className="h-4 w-4" />
                  Очистить
                </Button>
              </div>
            </div>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[340px] p-4 font-mono text-sm bg-white/70 border border-purple-100 focus:border-purple-400 rounded-xl resize-none mb-2"
              spellCheck="false"
            />
            <Button
              onClick={runCode}
              className="w-full mt-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 text-base font-semibold py-3 rounded-xl shadow-lg transition-all duration-200 glow-hover"
              size="lg"
            >
              <Play className="h-5 w-5 mr-2" />
              Запустить код
            </Button>
          </div>

          {/* Вывод */}
          <div className="bg-white/90 rounded-xl border border-purple-100 shadow p-4 flex flex-col">
            <h2 className="text-lg font-semibold text-foreground mb-4">Вывод</h2>
            <div className="h-[340px] p-4 font-mono text-sm bg-purple-50 rounded-xl border border-purple-100 overflow-y-auto transition-all duration-300 animate-fade-in">
              {output.length === 0 ? (
                <div className="text-gray-400 italic select-none flex items-center justify-center h-full">
                  Вывод появится здесь после запуска кода
                </div>
              ) : (
                output.map((line, index) => (
                  <div key={index} className="mb-1 animate-fade-in">
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Interpreter; 