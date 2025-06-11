import React, { useState, useRef } from 'react';
import { Check, X, Copy, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FLAG_OPTIONS = [
  { flag: 'g', label: 'g', description: 'Глобальный поиск' },
  { flag: 'i', label: 'i', description: 'Игнорировать регистр' },
  { flag: 'm', label: 'm', description: 'Многострочный режим' },
  { flag: 's', label: 's', description: 'Точка (.) захватывает \n' },
  { flag: 'u', label: 'u', description: 'Unicode режим' },
  { flag: 'y', label: 'y', description: 'Поиск с текущей позиции (sticky)' },
];

const REGEX_CHEAT_SHEET = [
  {
    title: 'Флаги',
    items: [
      { 
        pattern: 'g', 
        description: 'Глобальный поиск',
        example: '/hello/g - найдет все вхождения "hello"',
        usage: 'Используется когда нужно найти все совпадения, а не только первое'
      },
      { 
        pattern: 'i', 
        description: 'Игнорирование регистра',
        example: '/hello/i - найдет "hello", "Hello", "HELLO"',
        usage: 'Когда регистр букв не имеет значения'
      },
      { 
        pattern: 'm', 
        description: 'Многострочный режим',
        example: '/^hello/m - найдет "hello" в начале каждой строки',
        usage: 'Когда нужно искать совпадения в начале или конце каждой строки'
      },
      { 
        pattern: 's', 
        description: 'Точка (.) захватывает \n',
        example: '/hello.world/s - найдет "hello\nworld"',
        usage: 'Когда нужно чтобы точка (.) соответствовала также символу новой строки'
      },
      { 
        pattern: 'u', 
        description: 'Unicode режим',
        example: '/\\u{1F600}/u - найдет эмодзи 😀',
        usage: 'Для работы с Unicode символами и эмодзи'
      },
      { 
        pattern: 'y', 
        description: 'Поиск с текущей позиции (sticky)',
        example: '/hello/y - ищет только с текущей позиции',
        usage: 'Когда нужно искать совпадения только с определенной позиции'
      },
    ]
  },
  {
    title: 'Основные символы',
    items: [
      { 
        pattern: '.', 
        description: 'Любой символ, кроме новой строки',
        example: 'a.c - найдет "abc", "a1c", "a#c"',
        usage: 'Используется когда нужно найти любой символ между двумя буквами'
      },
      { 
        pattern: '\\d', 
        description: 'Цифра [0-9]',
        example: '\\d{3} - найдет "123", "456", "789"',
        usage: 'Для поиска последовательностей цифр'
      },
      { 
        pattern: '\\D', 
        description: 'Не цифра [^0-9]',
        example: '\\D+ - найдет "abc", "!@#", "hello"',
        usage: 'Когда нужно найти все, кроме цифр'
      },
      { 
        pattern: '\\w', 
        description: 'Буква, цифра или подчеркивание',
        example: '\\w+ - найдет "hello", "user123", "my_name"',
        usage: 'Для поиска слов и идентификаторов'
      },
      { 
        pattern: '\\W', 
        description: 'Не буква, не цифра, не подчеркивание',
        example: '\\W+ - найдет "!@#", " ", "..."',
        usage: 'Для поиска специальных символов и пробелов'
      },
      { 
        pattern: '\\s', 
        description: 'Пробельный символ',
        example: 'hello\\s+world - найдет "hello world", "hello  world"',
        usage: 'Для поиска пробелов между словами'
      },
      { 
        pattern: '\\S', 
        description: 'Не пробельный символ',
        example: '\\S+ - найдет "hello", "123", "!@#"',
        usage: 'Для поиска непробельных символов'
      },
      { 
        pattern: '|', 
        description: 'ИЛИ (например: a|b)',
        example: 'cat|dog - найдет "cat" или "dog"',
        usage: 'Когда нужно найти одно из нескольких слов'
      },
    ]
  },
  {
    title: 'Квантификаторы',
    items: [
      { 
        pattern: '*', 
        description: '0 или более',
        example: 'a* - найдет "", "a", "aa", "aaa"',
        usage: 'Когда символ может повторяться или отсутствовать'
      },
      { 
        pattern: '+', 
        description: '1 или более',
        example: '\\d+ - найдет "1", "123", "456789"',
        usage: 'Когда символ должен быть хотя бы один раз'
      },
      { 
        pattern: '?', 
        description: '0 или 1',
        example: 'colou?r - найдет "color" и "colour"',
        usage: 'Для необязательных символов'
      },
      { 
        pattern: '{n}', 
        description: 'Ровно n раз',
        example: '\\d{4} - найдет "1234", "5678"',
        usage: 'Для точного количества повторений'
      },
      { 
        pattern: '{n,}', 
        description: 'n или более раз',
        example: '\\d{3,} - найдет "123", "1234", "12345"',
        usage: 'Когда нужно минимум n повторений'
      },
      { 
        pattern: '{n,m}', 
        description: 'От n до m раз',
        example: '\\d{2,4} - найдет "12", "123", "1234"',
        usage: 'Для ограничения количества повторений'
      },
    ]
  },
  {
    title: 'Границы и группы',
    items: [
      { 
        pattern: '^', 
        description: 'Начало строки',
        example: '^hello - найдет "hello world", но не "say hello"',
        usage: 'Когда строка должна начинаться с определенного текста'
      },
      { 
        pattern: '$', 
        description: 'Конец строки',
        example: 'world$ - найдет "hello world", но не "world hello"',
        usage: 'Когда строка должна заканчиваться определенным текстом'
      },
      { 
        pattern: '\\b', 
        description: 'Граница слова',
        example: '\\bcat\\b - найдет "cat", но не "catch" или "scat"',
        usage: 'Для поиска целых слов'
      },
      { 
        pattern: '\\B', 
        description: 'Не граница слова',
        example: '\\Bcat\\B - найдет "catch", но не "cat"',
        usage: 'Для поиска частей слов'
      },
      { 
        pattern: '(...)', 
        description: 'Захватывающая группа',
        example: '(\\d{3})-(\\d{2}) - найдет "123-45" и запомнит "123" и "45"',
        usage: 'Для выделения и запоминания частей совпадения'
      },
      { 
        pattern: '(?:...)', 
        description: 'Незахватывающая группа',
        example: '(?:https?://)?(www\\.)?example\\.com',
        usage: 'Для группировки без запоминания'
      },
      { 
        pattern: '\\1', 
        description: 'Ссылка на первую группу',
        example: '(\\w+)\\s+\\1 - найдет "hello hello", "bye bye"',
        usage: 'Для поиска повторяющихся слов'
      },
    ]
  },
  {
    title: 'Наборы символов',
    items: [
      { 
        pattern: '[abc]', 
        description: 'Любой из символов a, b или c',
        example: '[abc]at - найдет "cat", "bat", "rat"',
        usage: 'Когда нужно найти один из нескольких символов'
      },
      { 
        pattern: '[^abc]', 
        description: 'Любой символ, кроме a, b и c',
        example: '[^abc]at - найдет "rat", "hat", но не "cat"',
        usage: 'Для исключения определенных символов'
      },
      { 
        pattern: '[a-z]', 
        description: 'Любой символ от a до z',
        example: '[a-z]+ - найдет "hello", "world"',
        usage: 'Для поиска строчных букв'
      },
      { 
        pattern: '[A-Z]', 
        description: 'Любой символ от A до Z',
        example: '[A-Z][a-z]* - найдет "Hello", "World"',
        usage: 'Для поиска заглавных букв'
      },
      { 
        pattern: '[0-9]', 
        description: 'Любая цифра',
        example: '[0-9]{3} - найдет "123", "456", "789"',
        usage: 'Для поиска цифр'
      },
      { 
        pattern: '[а-яё]', 
        description: 'Любая русская буква',
        example: '[а-яё]+ - найдет "привет", "мир"',
        usage: 'Для поиска русских слов'
      },
    ]
  }
];

const COMMON_EXAMPLES = [
  { pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', description: 'Email' },
  { pattern: '^\\+?[1-9]\\d{10,14}$', description: 'Телефон' },
  { pattern: '^\\d{4}-\\d{2}-\\d{2}$', description: 'Дата (YYYY-MM-DD)' },
  { pattern: '^https?://[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?$', description: 'URL' },
  { pattern: '^[А-Яа-яЁё\\s-]+$', description: 'Только русские буквы' },
  { pattern: '^[A-Za-z]+$', description: 'Только латинские буквы' },
  { pattern: '^\\d+$', description: 'Только числа' },
  { pattern: '^[A-Za-zА-Яа-яЁё\\s]+$', description: 'Только буквы и пробелы' },
  { pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$', description: 'Пароль: буквы и цифры, минимум 8 символов' },
  { pattern: '^<([a-z]+)([^<]+)*(?:>(.*)<\\/\\1>|\\s+\/>)$', description: 'HTML-тег' },
];

const Regex = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('gm');
  const [testString, setTestString] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [showExamples, setShowExamples] = useState(false);

  let isMatch = false;
  let matchRanges: { start: number; end: number }[] = [];
  try {
    const regex = new RegExp(pattern, flags);
    isMatch = pattern !== '' && regex.test(testString);
    if (pattern && testString && !error) {
      matchRanges = [];
      let m;
      if (flags.includes('g')) {
        const re = new RegExp(pattern, flags.replace('g', '') + 'g');
        while ((m = re.exec(testString)) !== null) {
          if (m[0].length === 0) break; // avoid infinite loop
          matchRanges.push({ start: m.index, end: m.index + m[0].length });
        }
      } else {
        m = regex.exec(testString);
        if (m && m[0].length > 0) {
          matchRanges.push({ start: m.index, end: m.index + m[0].length });
        }
      }
    }
    if (error) setError(null);
  } catch (err) {
    isMatch = false;
    if (!error) setError('Ошибка в регулярном выражении');
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`/${pattern}/${flags}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const handleFlagChange = (flag: string) => {
    setFlags((prev) => {
      if (prev.includes(flag)) {
        return prev.replace(flag, '');
      } else {
        return (prev + flag).split('').sort().join('');
      }
    });
  };

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Регулярные выражения
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Интерактивный инструмент для тестирования и изучения регулярных выражений</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-6 justify-between">
            <div className="w-full lg:w-[60%]">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4 sm:p-6">
                <div className="mb-4 relative">
                  {copied && (
                    <div className="absolute top-0 right-0 mt-0.10 text-green-500 text-xs bg-white/90 px-3 py-1 rounded shadow z-20 animate-fade-in">
                      Скопировано!
                    </div>
                  )}
                  <label className="block text-sm font-medium text-gray-700 mb-2">Регулярное выражение</label>
                  <div className="flex items-center gap-2 relative">
                    <span className="absolute left-3 text-gray-400 text-lg select-none">/</span>
                    <Input
                      value={pattern}
                      onChange={e => setPattern(e.target.value)}
                      placeholder="Введите регулярное выражение"
                      className="font-mono pl-7 pr-20 text-sm sm:text-base h-10 sm:h-12"
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <span className="absolute right-12 text-green-700 font-mono text-sm sm:text-base select-none cursor-pointer hover:bg-green-100 rounded px-1 py-0.5 transition">
                          /{flags || <span className='text-gray-400'>-</span>}
                        </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>Флаги</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {FLAG_OPTIONS.map(opt => (
                          <DropdownMenuCheckboxItem
                            key={opt.flag}
                            checked={flags.includes(opt.flag)}
                            onCheckedChange={() => handleFlagChange(opt.flag)}
                            className="flex items-center gap-2"
                          >
                            <span className="font-mono w-5 inline-block">{opt.label}</span>
                            <span className="text-xs text-gray-500">{opt.description}</span>
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopy}
                      className="text-gray-400 hover:text-blue-600 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                      type="button"
                    >
                      <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                  {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">Тестовая строка</label>
                  {pattern && !error ? (
                    isMatch ? (
                      <span className="flex items-center gap-1 text-green-600 font-semibold text-xs sm:text-sm">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4" /> совпадение
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-500 font-semibold text-xs sm:text-sm">
                        <X className="h-3 w-3 sm:h-4 sm:w-4" /> нет совпадения
                      </span>
                    )
                  ) : null}
                </div>
                <div className="relative w-full">
                  <div
                    ref={highlightRef}
                    aria-hidden
                    className="pointer-events-none absolute inset-0 whitespace-pre-wrap break-words rounded-lg p-3 text-sm sm:text-base min-h-[120px] sm:min-h-[180px] max-h-[300px] sm:max-h-[400px] bg-transparent"
                    style={{ zIndex: 1, fontFamily: 'inherit', color: 'inherit', lineHeight: 'inherit' }}
                  >
                    {(() => {
                      if (!pattern || !testString || error || matchRanges.length === 0) {
                        return <span className="text-gray-400">{testString || ''}</span>;
                      }
                      let last = 0;
                      const out = [];
                      matchRanges.forEach((range, i) => {
                        if (last < range.start) {
                          out.push(
                            <span key={last + '-n'}>{testString.slice(last, range.start)}</span>
                          );
                        }
                        out.push(
                          <span key={range.start + '-m'} className="bg-blue-200 text-blue-900 rounded px-0.5">
                            {testString.slice(range.start, range.end)}
                          </span>
                        );
                        last = range.end;
                      });
                      if (last < testString.length) {
                        out.push(<span key={last + '-end'}>{testString.slice(last)}</span>);
                      }
                      return out;
                    })()}
                  </div>
                  <textarea
                    ref={textareaRef}
                    value={testString}
                    onChange={e => setTestString(e.target.value)}
                    placeholder="Введите строку для проверки"
                    className="w-full min-h-[120px] sm:min-h-[180px] max-h-[300px] sm:max-h-[400px] text-sm sm:text-base rounded-lg border border-gray-200 bg-transparent p-3 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-vertical shadow-sm relative z-10 text-transparent caret-blue-700"
                    style={{ position: 'relative', background: 'transparent', fontFamily: 'inherit', color: 'transparent', lineHeight: 'inherit' }}
                    spellCheck={false}
                    autoCorrect="off"
                    onScroll={e => {
                      if (highlightRef.current) {
                        highlightRef.current.scrollTop = (e.target as HTMLTextAreaElement).scrollTop;
                        highlightRef.current.scrollLeft = (e.target as HTMLTextAreaElement).scrollLeft;
                      }
                    }}
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-700 mb-2 mt-4 flex items-center gap-2 cursor-pointer select-none" onClick={() => setShowExamples(v => !v)}>
                  <span>Частые примеры</span>
                  {showExamples ? <ChevronUp className="h-4 w-4 text-gray-500" /> : <ChevronDown className="h-4 w-4 text-gray-500" />}
                </h3>
                {showExamples && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {COMMON_EXAMPLES.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setPattern(example.pattern)}
                        className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-xs sm:text-sm transition-colors group"
                        style={{ boxShadow: 'none', border: 'none' }}
                      >
                        <code className="font-mono text-[10px] sm:text-xs bg-gray-100 px-1 sm:px-1.5 py-0.5 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          {example.pattern}
                        </code>
                        <span className="text-gray-600 text-[10px] sm:text-xs whitespace-nowrap">
                          {example.description}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full lg:w-[35%]">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Шпаргалка
                  </h2>
                  <button
                    onClick={() => setIsCheatSheetOpen(!isCheatSheetOpen)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {isCheatSheetOpen ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </button>
                </div>
                {isCheatSheetOpen && (
                  <div className="space-y-2">
                    {REGEX_CHEAT_SHEET.map((section, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleSection(index)}
                          className="w-full flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-sm font-medium text-gray-700">{section.title}</span>
                          {expandedSections.includes(index) ? (
                            <Minus className="h-4 w-4 text-gray-500" />
                          ) : (
                            <Plus className="h-4 w-4 text-gray-500" />
                          )}
                        </button>
                        {expandedSections.includes(index) && (
                          <div className="p-2 space-y-1 bg-white">
                            {section.items.map((item, itemIndex) => (
                              <TooltipProvider key={itemIndex}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      onClick={() => setPattern(item.pattern)}
                                      className="w-full flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded text-left group"
                                    >
                                      <code className="font-mono text-xs sm:text-sm bg-gray-100 px-1.5 py-0.5 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        {item.pattern}
                                      </code>
                                      <span className="text-[10px] sm:text-xs text-gray-600 flex-grow truncate">
                                        {item.description}
                                      </span>
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-[300px] p-3">
                                    <div className="space-y-2">
                                      <p className="font-medium">{item.description}</p>
                                      <div className="text-sm">
                                        <p className="text-blue-600 font-mono mb-1">{item.example}</p>
                                        <p className="text-gray-600">{item.usage}</p>
                                      </div>
                                    </div>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Примеры использования флага g
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Поиск всех чисел в строке</h3>
                <div className="bg-gray-50 rounded p-2">
                  <code className="text-sm font-mono text-blue-600">
                    const text = "Цена: 100, скидка: 20, итого: 80";<br/>
                    const numbers = text.match(/\d+/g);<br/>
                    console.log(numbers); // ["100", "20", "80"]
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Замена всех вхождений</h3>
                <div className="bg-gray-50 rounded p-2">
                  <code className="text-sm font-mono text-blue-600">
                    const text = "cat, cat, cat";<br/>
                    const newText = text.replace(/cat/g, "dog");<br/>
                    console.log(newText); // "dog, dog, dog"
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Поиск всех email адресов</h3>
                <div className="bg-gray-50 rounded p-2">
                  <code className="text-sm font-mono text-blue-600">
                    const text = "Email: test@test.com, support@test.com";<br/>
                    const emails = text.match(/[\w.-]+@[\w.-]+\.\w+/g);<br/>
                    console.log(emails); // ["test@test.com", "support@test.com"]
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Поиск всех слов в тексте</h3>
                <div className="bg-gray-50 rounded p-2">
                  <code className="text-sm font-mono text-blue-600">
                    const text = "Hello World! How are you?";<br/>
                    const words = text.match(/\b\w+\b/g);<br/>
                    console.log(words); // ["Hello", "World", "How", "are", "you"]
                  </code>
                </div>
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