import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Copy, RefreshCw, Plus, Trash2, Database, Code, FileText, 
  Download, Settings, Sparkles, Play, Edit3, Eye, FileJson,
  User, Package, ShoppingCart, MessageSquare, Check, X
} from "lucide-react";
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

const TEMPLATES = [
  {
    name: "User",
    icon: User,
    fields: [
      { name: "id", type: "number", options: { min: 1, max: 10000 } },
      { name: "username", type: "string", options: { length: 8 } },
      { name: "email", type: "email" },
      { name: "firstName", type: "string", options: { length: 8 } },
      { name: "lastName", type: "string", options: { length: 10 } },
      { name: "age", type: "number", options: { min: 18, max: 80 } },
      { name: "isActive", type: "boolean" },
      { name: "createdAt", type: "date" },
    ]
  },
  {
    name: "Product",
    icon: Package,
    fields: [
      { name: "id", type: "number", options: { min: 1, max: 10000 } },
      { name: "name", type: "string", options: { length: 15 } },
      { name: "description", type: "string", options: { length: 50 } },
      { name: "price", type: "number", options: { min: 10, max: 9999 } },
      { name: "category", type: "enum", options: { values: ["electronics", "clothing", "books", "home"] } },
      { name: "inStock", type: "boolean" },
      { name: "rating", type: "number", options: { min: 1, max: 5 } },
      { name: "createdAt", type: "date" },
    ]
  },
  {
    name: "Order",
    icon: ShoppingCart,
    fields: [
      { name: "id", type: "number", options: { min: 1, max: 100000 } },
      { name: "userId", type: "number", options: { min: 1, max: 10000 } },
      { name: "productId", type: "number", options: { min: 1, max: 10000 } },
      { name: "quantity", type: "number", options: { min: 1, max: 10 } },
      { name: "totalAmount", type: "number", options: { min: 100, max: 50000 } },
      { name: "status", type: "enum", options: { values: ["pending", "processing", "shipped", "delivered", "cancelled"] } },
      { name: "orderDate", type: "date" },
    ]
  },
  {
    name: "Comment",
    icon: MessageSquare,
    fields: [
      { name: "id", type: "number", options: { min: 1, max: 100000 } },
      { name: "authorId", type: "number", options: { min: 1, max: 10000 } },
      { name: "postId", type: "number", options: { min: 1, max: 10000 } },
      { name: "content", type: "string", options: { length: 200 } },
      { name: "likes", type: "number", options: { min: 0, max: 1000 } },
      { name: "isEdited", type: "boolean" },
      { name: "createdAt", type: "date" },
    ]
  }
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
  const [tab, setTab] = useState<'data' | 'ts' | 'structure'>("data");
  const [fieldModalOpen, setFieldModalOpen] = useState(false);
  const [editFieldIndex, setEditFieldIndex] = useState<number | null>(null);
  const [fieldDraft, setFieldDraft] = useState<Column | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [jsonValidationInput, setJsonValidationInput] = useState("");
  const [jsonValidationResult, setJsonValidationResult] = useState<{ isValid: boolean; message: string } | null>(null);

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
        case "sql":
          data = generateSQL(countNum);
          break;
        case "text":
          data = generateText(countNum);
          break;
        default:
          data = generateJSON(countNum);
      }
      setGeneratedData(data);
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

  const generateSQL = (count: number) => {
    if (columns.length === 0) return "";
    
    const tableName = "generated_table";
    const columnNames = columns.map(col => col.name).join(", ");
    
    const insertStatements = Array.from({ length: count }, () => {
      const values = columns.map(column => {
        const value = generateValue(column);
        if (typeof value === "string") {
          return `'${value.replace(/'/g, "''")}'`;
        }
        return value;
      }).join(", ");
      return `INSERT INTO ${tableName} (${columnNames}) VALUES (${values});`;
    });
    
    return insertStatements.join("\n");
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

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

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

  const clearColumns = () => {
    setColumns([]);
    setGeneratedData("");
  };

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

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, 2);
      setFormattedJson(formatted);
      toast.success("JSON отформатирован");
    } catch (error) {
      toast.error("Некорректный JSON формат");
    }
  };

  const copyFormattedJson = () => {
    navigator.clipboard.writeText(formattedJson);
    toast.success("Отформатированный JSON скопирован");
  };

  const clearJsonFormatter = () => {
    setJsonInput("");
    setFormattedJson("");
  };

  const applyTemplate = (template: typeof TEMPLATES[0]) => {
    setColumns(template.fields);
    toast.success(`Шаблон "${template.name}" применен`);
  };

  const validateJson = () => {
    try {
      JSON.parse(jsonValidationInput);
      setJsonValidationResult({ isValid: true, message: "JSON корректен" });
      toast.success("JSON валиден");
    } catch (error: any) {
      setJsonValidationResult({ isValid: false, message: error.message });
      toast.error("JSON содержит ошибки");
    }
  };

  const clearJsonValidator = () => {
    setJsonValidationInput("");
    setJsonValidationResult(null);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Генератор данных
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Создание тестовых данных</p>
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Готовые шаблоны
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TEMPLATES.map((template) => {
                const IconComponent = template.icon;
                return (
                  <Button
                    key={template.name}
                    variant="outline"
                    onClick={() => applyTemplate(template)}
                    className="h-20 flex flex-col gap-2 hover:bg-accent"
                  >
                    <IconComponent className="h-6 w-6" />
                    <span className="text-sm">{template.name}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Configuration Panel */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Настройка структуры
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quick Fields */}
              <div>
                <label className="text-sm font-medium mb-3 block">Быстрые поля</label>
                <div className="flex flex-wrap gap-2">
                  {TYPICAL_FIELDS.map((field) => (
                    <Button
                      key={field.name}
                      variant="outline"
                      size="sm"
                      onClick={() => addTypicalField(field)}
                      className="text-xs h-8"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      {field.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Current Fields */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium">Поля структуры</label>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openFieldModal()}
                      className="h-8 px-3 text-xs"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Добавить
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearColumns}
                      className="h-8 px-3 text-xs text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Очистить
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {columns.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Database className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Добавьте поля для структуры данных</p>
                    </div>
                  ) : (
                    columns.map((col, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{col.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {col.type}
                            </Badge>
                          </div>
                          {col.type === "enum" && col.options?.values && (
                            <p className="text-xs text-muted-foreground mt-1">
                              [{col.options.values.join(", ")}]
                            </p>
                          )}
                          {col.type === "number" && (col.options?.min || col.options?.max) && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {col.options?.min ?? "∞"} - {col.options?.max ?? "∞"}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openFieldModal(i)}
                            className="h-7 w-7 p-0"
                          >
                            <Edit3 className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeColumn(i)}
                            className="h-7 w-7 p-0 text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Generation Settings */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Формат вывода</label>
                  <Select value={outputType} onValueChange={setOutputType}>
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="json">JSON</SelectItem>
                      <SelectItem value="array">JS Array</SelectItem>
                      <SelectItem value="sql">SQL INSERT</SelectItem>
                      <SelectItem value="text">Текст</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {outputType !== "text" ? (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Количество</label>
                    <Input
                      type="number"
                      min="1"
                      max="1000"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                      className="h-9"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Длина текста</label>
                    <Input
                      type="number"
                      min="1"
                      max="10000"
                      value={textLength}
                      onChange={(e) => setTextLength(e.target.value)}
                      className="h-9"
                    />
                  </div>
                )}
              </div>

              {outputType === "text" && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Тип текста</label>
                  <Select value={textType} onValueChange={setTextType}>
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lorem">Lorem Ipsum</SelectItem>
                      <SelectItem value="random">Случайный текст</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button
                onClick={generateData}
                className="w-full h-10"
                disabled={columns.length === 0 && outputType !== "text"}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Сгенерировать данные
              </Button>
            </CardContent>
          </Card>

          {/* Preview/Result Panel */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Результат
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedData ? (
                <div className="space-y-4">
                  <Tabs value={tab} onValueChange={(v) => setTab(v as any)}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="data" className="text-xs">
                        <FileText className="h-3 w-3 mr-1" />
                        Данные
                      </TabsTrigger>
                      <TabsTrigger value="ts" className="text-xs">
                        <Code className="h-3 w-3 mr-1" />
                        TypeScript
                      </TabsTrigger>
                      <TabsTrigger value="structure" className="text-xs">
                        <Settings className="h-3 w-3 mr-1" />
                        Структура
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="data" className="space-y-3">
                      <ScrollArea className="h-[300px] w-full rounded-lg border bg-muted/30 p-3" ref={scrollAreaRef}>
                        <pre className="text-xs whitespace-pre-wrap break-all font-mono">
                          {generatedData}
                        </pre>
                      </ScrollArea>
                    </TabsContent>
                    
                    <TabsContent value="ts" className="space-y-3">
                      <ScrollArea className="h-[300px] w-full rounded-lg border bg-muted/30 p-3">
                        <pre className="text-xs whitespace-pre-wrap font-mono">
                          {getTSInterface()}
                        </pre>
                      </ScrollArea>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyTSInterface}
                        className="w-full"
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Копировать интерфейс
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="structure" className="space-y-3">
                      <ScrollArea className="h-[300px] w-full rounded-lg border bg-muted/30 p-3">
                        <pre className="text-xs whitespace-pre-wrap font-mono">
                          {columns.map(col => 
                            `${col.name}: ${col.type}${col.type === "enum" && col.options?.values ? ` [${col.options.values.join(", ")}]` : ""}`
                          ).join("\n")}
                        </pre>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyToClipboard}
                      className="flex-1"
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Копировать
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={exportJSON}
                      className="flex-1"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Скачать
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">Данные не сгенерированы</p>
                  <p className="text-sm">Настройте структуру и нажмите "Сгенерировать данные"</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Utility Tools */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* JSON Formatter Section */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <FileJson className="h-5 w-5" />
                JSON Форматировщик
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Input */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Неотформатированный JSON</label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearJsonFormatter}
                      className="h-8 px-3 text-xs text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Очистить
                    </Button>
                  </div>
                  <Textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder="Вставьте здесь неотформатированный JSON..."
                    className="min-h-[120px] font-mono text-xs"
                  />
                  <Button
                    onClick={formatJson}
                    className="w-full h-10"
                    disabled={!jsonInput.trim()}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Отформатировать JSON
                  </Button>
                </div>

                {/* Output */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Отформатированный JSON</label>
                    {formattedJson && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyFormattedJson}
                        className="h-8 px-3 text-xs"
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Копировать
                      </Button>
                    )}
                  </div>
                  <ScrollArea className="h-[120px] w-full rounded-lg border bg-muted/30 p-3">
                    {formattedJson ? (
                      <pre className="text-xs whitespace-pre-wrap font-mono">
                        {formattedJson}
                      </pre>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <FileJson className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p className="text-xs">Отформатированный JSON появится здесь</p>
                      </div>
                    )}
                  </ScrollArea>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* JSON Validator Section */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                JSON Валидатор
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">JSON для проверки</label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearJsonValidator}
                      className="h-8 px-3 text-xs text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Очистить
                    </Button>
                  </div>
                  <Textarea
                    value={jsonValidationInput}
                    onChange={(e) => setJsonValidationInput(e.target.value)}
                    placeholder="Вставьте JSON для валидации..."
                    className="min-h-[120px] font-mono text-xs"
                  />
                  <Button
                    onClick={validateJson}
                    className="w-full h-10"
                    disabled={!jsonValidationInput.trim()}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Проверить JSON
                  </Button>
                </div>

                {/* Validation Result */}
                {jsonValidationResult && (
                  <div className={`p-3 rounded-lg border ${
                    jsonValidationResult.isValid 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {jsonValidationResult.isValid ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-600" />
                      )}
                      <span className="font-medium text-sm">
                        {jsonValidationResult.isValid ? 'JSON корректен' : 'JSON содержит ошибки'}
                      </span>
                    </div>
                    {!jsonValidationResult.isValid && (
                      <p className="text-xs font-mono bg-red-100 p-2 rounded">
                        {jsonValidationResult.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />

      {/* Field Modal */}
      {fieldModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center">
                {editFieldIndex !== null ? "Редактировать поле" : "Добавить поле"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={fieldDraft?.name || ""}
                onChange={(e) => setFieldDraft(f => f ? { ...f, name: e.target.value } : f)}
                placeholder="Имя поля"
              />
              
              <Select
                value={fieldDraft?.type || "string"}
                onValueChange={(v) => setFieldDraft(f => f ? { ...f, type: v } : f)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Тип поля" />
                </SelectTrigger>
                <SelectContent>
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
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="number"
                    value={fieldDraft.options?.min ?? ""}
                    onChange={(e) => setFieldDraft(f => f ? { 
                      ...f, 
                      options: { ...f.options, min: Number(e.target.value) } 
                    } : f)}
                    placeholder="Минимум"
                  />
                  <Input
                    type="number"
                    value={fieldDraft.options?.max ?? ""}
                    onChange={(e) => setFieldDraft(f => f ? { 
                      ...f, 
                      options: { ...f.options, max: Number(e.target.value) } 
                    } : f)}
                    placeholder="Максимум"
                  />
                </div>
              )}

              {fieldDraft?.type === "string" && (
                <Input
                  type="number"
                  value={fieldDraft.options?.length ?? ""}
                  onChange={(e) => setFieldDraft(f => f ? { 
                    ...f, 
                    options: { ...f.options, length: Number(e.target.value) } 
                  } : f)}
                  placeholder="Длина строки"
                />
              )}

              {fieldDraft?.type === "enum" && (
                <Input
                  value={fieldDraft.options?.values?.join(",") || ""}
                  onChange={(e) => setFieldDraft(f => f ? { 
                    ...f, 
                    options: { 
                      ...f.options, 
                      values: e.target.value.split(",").map(v => v.trim()).filter(Boolean) 
                    } 
                  } : f)}
                  placeholder="value1,value2,value3"
                />
              )}

              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setFieldModalOpen(false)}
                  className="flex-1"
                >
                  Отмена
                </Button>
                <Button
                  onClick={saveField}
                  className="flex-1"
                >
                  Сохранить
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DataGenerator;
