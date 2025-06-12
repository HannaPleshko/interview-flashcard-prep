import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy, RefreshCw, Plus, Minus, ChevronDown, ChevronUp, Database, Code, FileText, Download, Trash2, ClipboardList, Pencil } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import toast from 'react-hot-toast';

interface Column {
  name: string;
  type: string;
  options?: {
    min?: number;
    max?: number;
    length?: number;
    format?: string;
    values?: string[];
  };
}

const TYPICAL_FIELDS = [
  { name: "id", type: "number", options: { min: 1, max: 1000 } },
  { name: "email", type: "email" },
  { name: "surname", type: "string", options: { length: 10 } },
  { name: "password", type: "string", options: { length: 12 } },
  { name: "createdAt", type: "date" },
  { name: "name", type: "string", options: { length: 10 } },
  { name: "active", type: "boolean" },
];

const DataGenerator = () => {
  const [outputType, setOutputType] = useState("json");
  const [count, setCount] = useState("5");
  const [generatedData, setGeneratedData] = useState("");
  const [columns, setColumns] = useState<Column[]>([
    { name: "id", type: "number", options: { min: 1, max: 1000 } },
    { name: "name", type: "string", options: { length: 10 } },
    { name: "active", type: "boolean" }
  ]);
  const [textLength, setTextLength] = useState("100");
  const [textType, setTextType] = useState("lorem");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enumModalIndex, setEnumModalIndex] = useState<number | null>(null);
  const [enumInput, setEnumInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [showTSInterface, setShowTSInterface] = useState(false);
  const [tab, setTab] = useState<'data' | 'ts' | 'structure'>("data");
  const [fieldModalOpen, setFieldModalOpen] = useState(false);
  const [editFieldIndex, setEditFieldIndex] = useState<number | null>(null);
  const [fieldDraft, setFieldDraft] = useState<Column | null>(null);
  const [genHistory, setGenHistory] = useState<string[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const generateData = () => {
    try {
      const countNum = parseInt(count);
      if ((outputType !== "text" && (isNaN(countNum) || countNum < 1))) {
        toast.error("Пожалуйста, введите корректное количество");
        return;
      }
      let data;
      switch (outputType) {
        case "json":
          data = generateJSON(countNum);
          break;
        case "array":
          data = generateArray(countNum);
          break;
        case "text":
          data = generateText(countNum);
          break;
        default:
          data = generateJSON(countNum);
      }
      setGeneratedData(data);
      addToHistory(data);
      setTab("data");
      setTimeout(() => {
        scrollAreaRef.current?.scrollTo({ top: 0 });
      }, 100);
    } catch (error) {
      toast.error("Произошла ошибка при генерации данных");
    }
  };

  const generateJSON = (count: number) => {
    const data = Array.from({ length: count }, (_, i) => {
      const item: any = {};
      columns.forEach(column => {
        item[column.name] = generateValue(column);
      });
      return item;
    });
    return JSON.stringify(data, null, 2);
  };

  const generateArray = (count: number) => {
    const data = Array.from({ length: count }, () => {
      const item: any = {};
      columns.forEach(column => {
        item[column.name] = generateValue(column);
      });
      return item;
    });
    return `const data = ${JSON.stringify(data, null, 2)};`;
  };

  const generateText = (count: number) => {
    const length = parseInt(textLength);
    if (textType === "lorem") {
      return generateLoremIpsum(length);
    } else {
      return generateRandomText(length);
    }
  };

  const generateValue = (column: Column) => {
    switch (column.type) {
      case "number":
        const min = column.options?.min || 0;
        const max = column.options?.max || 1000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      case "string":
        const length = column.options?.length || 10;
        return generateRandomString(length);
      case "boolean":
        return Math.random() > 0.5;
      case "date":
        return new Date().toISOString();
      case "email":
        return `${generateRandomString(8)}@example.com`;
      case "phone":
        const operators = ["29", "33", "44", "25"];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        const number = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
        return `+375${operator}${number}`;
      case "enum":
        const values = column.options?.values || ["value1", "value2", "value3"];
        return values[Math.floor(Math.random() * values.length)];
      default:
        return "";
    }
  };

  const generateRandomString = (length: number) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
  };

  const generateLoremIpsum = (length: number) => {
    const words = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");
    let result = "";
    while (result.length < length) {
      result += words[Math.floor(Math.random() * words.length)] + " ";
    }
    return result.slice(0, length);
  };

  const generateRandomText = (length: number) => {
    const chars = "abcdefghijklmnopqrstuvwxyz ";
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
  };

  const addColumn = () => {
    setColumns([...columns, { name: `column${columns.length + 1}`, type: "string" }]);
  };

  const removeColumn = (index: number) => {
    setColumns(columns.filter((_, i) => i !== index));
  };

  const updateColumn = (index: number, field: keyof Column, value: any) => {
    const newColumns = [...columns];
    newColumns[index] = { ...newColumns[index], [field]: value };
    setColumns(newColumns);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedData);
    toast.success("Данные скопированы в буфер обмена");
  };

  // --- JSON Export ---
  const exportJSON = () => {
    try {
      const countNum = parseInt(count);
      if (isNaN(countNum) || countNum < 1) {
        toast.error("Пожалуйста, введите корректное количество");
        return;
      }
      const data = Array.from({ length: countNum }, () => {
        const item: any = {};
        columns.forEach(column => {
          item[column.name] = generateValue(column);
        });
        return item;
      });
      downloadFile(JSON.stringify(data, null, 2), "data.json", "application/json");
    } catch {
      toast.error("Ошибка экспорта JSON");
    }
  };

  // --- Download helper ---
  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // --- TypeScript Interface Copy ---
  const getTSInterface = () => {
    const fields = columns.map(col => `  ${col.name}: ${tsType(col.type)};`).join("\n");
    return `interface GeneratedData {\n${fields}\n}`;
  };
  const copyTSInterface = () => {
    navigator.clipboard.writeText(getTSInterface());
    toast.success("TypeScript интерфейс скопирован");
  };
  const tsType = (type: string) => {
    switch (type) {
      case "number": return "number";
      case "string": return "string";
      case "boolean": return "boolean";
      case "date": return "string";
      case "email": return "string";
      case "phone": return "string";
      case "enum": return "string";
      default: return "any";
    }
  };

  // --- Очистка структуры ---
  const clearColumns = () => {
    setColumns([]);
    setGeneratedData("");
  };

  // --- Enum Modal ---
  const openEnumModal = (index: number) => {
    setEnumModalIndex(index);
    setEnumInput(columns[index].options?.values?.join(",") || "");
  };
  const saveEnumValues = () => {
    if (enumModalIndex === null) return;
    const values = enumInput.split(",").map(v => v.trim()).filter(Boolean);
    updateColumn(enumModalIndex, "options", { ...columns[enumModalIndex].options, values });
    setEnumModalIndex(null);
    setEnumInput("");
  };

  // --- Preview structure ---
  const renderStructurePreview = () => (
    <pre className="text-xs bg-white/60 rounded-lg p-2 border border-purple-100 mb-2">
      {columns.map(col => `${col.name}: ${col.type}${col.type === "enum" && col.options?.values ? ` [${col.options.values.join(", ")}]` : ""}`).join("\n")}
    </pre>
  );

  // Функции для типовых полей
  const addTypicalField = (field: Column) => {
    setColumns([...columns, { ...field, name: getUniqueFieldName(field.name) }]);
  };
  const getUniqueFieldName = (base: string) => {
    let name = base;
    let i = 1;
    while (columns.some(c => c.name === name)) {
      name = `${base}${i++}`;
    }
    return name;
  };

  // Модальное окно для добавления/редактирования поля
  const openFieldModal = (index: number | null = null) => {
    setEditFieldIndex(index);
    setFieldDraft(index !== null ? { ...columns[index] } : { name: "", type: "string", options: {} });
    setFieldModalOpen(true);
  };
  const saveField = () => {
    if (!fieldDraft) return;
    if (editFieldIndex !== null) {
      const newCols = [...columns];
      newCols[editFieldIndex] = fieldDraft;
      setColumns(newCols);
    } else {
      setColumns([...columns, fieldDraft]);
    }
    setFieldModalOpen(false);
    setFieldDraft(null);
    setEditFieldIndex(null);
  };

  // История генераций
  const addToHistory = (data: string) => {
    setGenHistory(h => [data, ...h.slice(0, 4)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Генератор тестовых данных
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">Создавайте и экспортируйте тестовые данные для разработки и тестирования</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={clearColumns} className="border-red-200 text-red-500 h-9 px-4 text-sm">Сбросить всё</Button>
          </div>
        </div>

        {/* Настройки и структура */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 border border-white/20 shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Структура данных */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Структура данных</span>
                <div className="flex gap-2">
                  <Select onValueChange={val => {
                    const field = TYPICAL_FIELDS.find(f => f.name === val);
                    if (field) addTypicalField(field);
                  }}>
                    <SelectTrigger className="w-[140px] bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl h-8 text-xs">
                      <SelectValue placeholder="Быстрое поле" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200 rounded-xl shadow-xl">
                      {TYPICAL_FIELDS.map(f => (
                        <SelectItem key={f.name} value={f.name}>{f.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" className="h-8 px-3 text-xs" onClick={() => openFieldModal()}>+ Поле</Button>
                </div>
              </div>
              <div className="overflow-x-auto rounded-xl border border-purple-100 bg-white/80">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-white/60">
                      <th className="p-2 font-semibold">Имя</th>
                      <th className="p-2 font-semibold">Тип</th>
                      <th className="p-2 font-semibold">Опции</th>
                      <th className="p-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {columns.map((col, i) => (
                      <tr key={i} className="border-b border-purple-50">
                        <td className="p-2">{col.name}</td>
                        <td className="p-2">{col.type}</td>
                        <td className="p-2 truncate max-w-[120px]">
                          {col.type === "enum" && col.options?.values ? `enum: [${col.options.values.join(", ")}]` :
                            col.type === "number" && (col.options?.min || col.options?.max) ? `min: ${col.options?.min ?? "-"}, max: ${col.options?.max ?? "-"}` :
                            col.type === "string" && col.options?.length ? `len: ${col.options.length}` : ""}
                        </td>
                        <td className="p-2 text-right">
                          <div className="flex gap-1 justify-end">
                            <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={() => openFieldModal(i)}>
                              <Pencil className="h-4 w-4 text-purple-600" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-7 px-2 text-xs text-red-500 border-red-200" onClick={() => removeColumn(i)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {columns.length === 0 && <tr><td colSpan={4} className="text-center text-gray-400 py-2">Нет полей</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Настройки генерации */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Тип вывода</label>
                  <div className="flex gap-2">
                    <Button
                      variant={outputType === "json" ? undefined : "outline"}
                      className={
                        outputType === "json"
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 h-8 px-4 text-xs shadow-sm hover:from-purple-600 hover:to-blue-600"
                          : "h-8 px-4 text-xs border-purple-200"
                      }
                      size="sm"
                      onClick={() => setOutputType("json")}
                    >
                      JSON
                    </Button>
                    <Button
                      variant={outputType === "array" ? undefined : "outline"}
                      className={
                        outputType === "array"
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 h-8 px-4 text-xs shadow-sm hover:from-purple-600 hover:to-blue-600"
                          : "h-8 px-4 text-xs border-purple-200"
                      }
                      size="sm"
                      onClick={() => setOutputType("array")}
                    >
                      JS массив
                    </Button>
                    <Button
                      variant={outputType === "text" ? undefined : "outline"}
                      className={
                        outputType === "text"
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 h-8 px-4 text-xs shadow-sm hover:from-purple-600 hover:to-blue-600"
                          : "h-8 px-4 text-xs border-purple-200"
                      }
                      size="sm"
                      onClick={() => setOutputType("text")}
                    >
                      Текст
                    </Button>
                  </div>
                </div>
                {outputType !== "text" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">Кол-во элементов</label>
                    <Input type="number" min="1" max="1000" value={count} onChange={e => setCount(e.target.value)} className="bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl h-8 text-xs" />
                  </div>
                )}
                {outputType === "text" && (
                  <>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Длина текста</label>
                      <Input type="number" min="1" max="10000" value={textLength} onChange={e => setTextLength(e.target.value)} className="bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl h-8 text-xs" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Тип текста</label>
                      <Select value={textType} onValueChange={setTextType}>
                        <SelectTrigger className="bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl h-8 text-xs">
                          <SelectValue placeholder="Тип текста" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200 rounded-xl shadow-xl">
                          <SelectItem value="lorem">Lorem Ipsum</SelectItem>
                          <SelectItem value="random">Случайный текст</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-end">
                <Button onClick={generateData} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:from-purple-600 hover:to-blue-600 h-9 px-6 text-sm">
                  <RefreshCw className="mr-2 h-4 w-4" />Сгенерировать
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Результат и история */}
        {generatedData && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 border border-white/20 shadow-lg">
            <div className="flex gap-2 mb-4">
              <Button
                variant={tab === "data" ? undefined : "outline"}
                className={
                  tab === "data"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 h-8 px-4 text-xs shadow-sm hover:from-purple-600 hover:to-blue-600"
                    : "h-8 px-4 text-xs border-purple-200"
                }
                size="sm"
                onClick={() => setTab("data")}
              >
                Данные
              </Button>
              {outputType === "array" && (
                <Button
                  variant={tab === "ts" ? undefined : "outline"}
                  className={
                    tab === "ts"
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 h-8 px-4 text-xs shadow-sm hover:from-purple-600 hover:to-blue-600"
                      : "h-8 px-4 text-xs border-purple-200"
                  }
                  size="sm"
                  onClick={() => setTab("ts")}
                >
                  TS интерфейс
                </Button>
              )}
              <Button
                variant={tab === "structure" ? undefined : "outline"}
                className={
                  tab === "structure"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 h-8 px-4 text-xs shadow-sm hover:from-purple-600 hover:to-blue-600"
                    : "h-8 px-4 text-xs border-purple-200"
                }
                size="sm"
                onClick={() => setTab("structure")}
              >
                Структура
              </Button>
            </div>
            <div className="relative">
              {tab === "data" && (
                <ScrollArea className="h-[220px] w-full rounded border p-2 bg-white/90" ref={scrollAreaRef}>
                  <pre className="text-xs text-gray-800 m-0 whitespace-pre-wrap break-all">{generatedData}</pre>
                </ScrollArea>
              )}
              {tab === "ts" && outputType === "array" && (
                <div className="bg-white/60 border border-purple-100 rounded p-2 mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs text-gray-600">TypeScript интерфейс</span>
                    <Button variant="outline" size="sm" onClick={copyTSInterface} className="border-purple-200 h-7 px-2 text-xs">Копировать</Button>
                  </div>
                  <pre className="text-xs bg-white/50 rounded p-1 border border-purple-50 overflow-x-auto m-0">{getTSInterface()}</pre>
                </div>
              )}
              {tab === "structure" && (
                <div className="bg-white/60 border border-purple-100 rounded p-2 mt-2">
                  <pre className="text-xs bg-white/50 rounded p-1 border border-purple-50 overflow-x-auto m-0">{columns.map(col => `${col.name}: ${col.type}${col.type === "enum" && col.options?.values ? ` [${col.options.values.join(", ")}]` : ""}`).join("\n")}</pre>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" onClick={copyToClipboard} className="border-purple-200 h-8 px-4 text-xs">Копировать</Button>
              <Button variant="outline" size="sm" onClick={exportJSON} className="border-purple-200 h-8 px-4 text-xs">Скачать JSON</Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
      {/* Модальное окно для поля */}
      {fieldModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-xs">
            <h3 className="text-lg font-semibold mb-4 text-center">{editFieldIndex !== null ? "Редактировать поле" : "Добавить поле"}</h3>
            <div className="space-y-3">
              <Input value={fieldDraft?.name || ""} onChange={e => setFieldDraft(f => f ? { ...f, name: e.target.value } : f)} placeholder="Имя" className="text-sm" />
              <Select value={fieldDraft?.type || "string"} onValueChange={v => setFieldDraft(f => f ? { ...f, type: v } : f)}>
                <SelectTrigger className="bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl h-8 text-sm">
                  <SelectValue placeholder="Тип" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200 rounded-xl shadow-xl">
                  <SelectItem value="string">Строка</SelectItem>
                  <SelectItem value="number">Число</SelectItem>
                  <SelectItem value="boolean">Булево</SelectItem>
                  <SelectItem value="date">Дата</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Телефон</SelectItem>
                  <SelectItem value="enum">Enum</SelectItem>
                </SelectContent>
              </Select>
              {fieldDraft?.type === "number" && (
                <div className="flex gap-2">
                  <Input type="number" value={fieldDraft.options?.min ?? ""} onChange={e => setFieldDraft(f => f ? { ...f, options: { ...f.options, min: Number(e.target.value) } } : f)} placeholder="min" className="text-sm w-1/2" />
                  <Input type="number" value={fieldDraft.options?.max ?? ""} onChange={e => setFieldDraft(f => f ? { ...f, options: { ...f.options, max: Number(e.target.value) } } : f)} placeholder="max" className="text-sm w-1/2" />
                </div>
              )}
              {fieldDraft?.type === "string" && (
                <Input type="number" value={fieldDraft.options?.length ?? ""} onChange={e => setFieldDraft(f => f ? { ...f, options: { ...f.options, length: Number(e.target.value) } } : f)} placeholder="Длина" className="text-sm" />
              )}
              {fieldDraft?.type === "enum" && (
                <Input value={fieldDraft.options?.values?.join(",") || ""} onChange={e => setFieldDraft(f => f ? { ...f, options: { ...f.options, values: e.target.value.split(",").map(v => v.trim()).filter(Boolean) } } : f)} placeholder="value1,value2,..." className="text-sm" />
              )}
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <Button variant="outline" size="sm" onClick={() => setFieldModalOpen(false)} className="h-8 px-4 text-sm">Отмена</Button>
              <Button size="sm" onClick={saveField} className="h-8 px-4 text-sm">Сохранить</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataGenerator; 