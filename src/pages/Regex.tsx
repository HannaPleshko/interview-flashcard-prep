import React, { useState, useEffect } from 'react';
import { Play, Trash2, Copy, Check, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface TestCase {
  id: string;
  text: string;
  isMatch: boolean;
}

const Regex = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [testCases, setTestCases] = useState<TestCase[]>([
    { id: '1', text: 'test@example.com', isMatch: false },
    { id: '2', text: 'hello world', isMatch: false },
  ]);
  const [results, setResults] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string | null>(null);

  const runTests = () => {
    setError(null);
    try {
      const regex = new RegExp(pattern, flags);
      const newResults: { [key: string]: boolean } = {};
      
      testCases.forEach(testCase => {
        newResults[testCase.id] = regex.test(testCase.text);
      });
      
      setResults(newResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка в регулярном выражении');
    }
  };

  const addTestCase = () => {
    const newTestCase: TestCase = {
      id: Date.now().toString(),
      text: '',
      isMatch: false
    };
    setTestCases([...testCases, newTestCase]);
  };

  const removeTestCase = (id: string) => {
    setTestCases(testCases.filter(tc => tc.id !== id));
    const newResults = { ...results };
    delete newResults[id];
    setResults(newResults);
  };

  const updateTestCase = (id: string, text: string) => {
    setTestCases(testCases.map(tc => 
      tc.id === id ? { ...tc, text } : tc
    ));
  };

  const clearAll = () => {
    setPattern('');
    setFlags('g');
    setTestCases([
      { id: '1', text: 'test@example.com', isMatch: false },
      { id: '2', text: 'hello world', isMatch: false },
    ]);
    setResults({});
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 gap-4">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Регулярные выражения
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Тестируйте и отлаживайте регулярные выражения
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Левая панель с регулярным выражением */}
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Регулярное выражение</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Паттерн
                    </label>
                    <Input
                      value={pattern}
                      onChange={(e) => setPattern(e.target.value)}
                      placeholder="/your pattern/"
                      className="font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Флаги
                    </label>
                    <Input
                      value={flags}
                      onChange={(e) => setFlags(e.target.value)}
                      placeholder="g, i, m, s, u, y"
                      className="font-mono"
                    />
                  </div>
                  {error && (
                    <div className="text-red-500 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button
                      onClick={runTests}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Проверить
                    </Button>
                    <Button
                      variant="outline"
                      onClick={clearAll}
                      className="flex items-center gap-2 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                      Очистить
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая панель с тест-кейсами */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Тест-кейсы</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addTestCase}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Добавить
                </Button>
              </div>
              <div className="space-y-4">
                {testCases.map((testCase) => (
                  <div
                    key={testCase.id}
                    className="flex items-start gap-2 p-3 bg-white/50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-grow">
                      <Input
                        value={testCase.text}
                        onChange={(e) => updateTestCase(testCase.id, e.target.value)}
                        placeholder="Введите текст для проверки"
                        className="font-mono"
                      />
                      {results[testCase.id] !== undefined && (
                        <div className={`mt-2 text-sm ${results[testCase.id] ? 'text-green-600' : 'text-red-600'}`}>
                          {results[testCase.id] ? '✓ Совпадает' : '✗ Не совпадает'}
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTestCase(testCase.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Regex; 