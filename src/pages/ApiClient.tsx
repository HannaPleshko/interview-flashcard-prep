import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Send,
  Save,
  Plus,
  Trash2,
  Globe,
  Code,
  FileJson,
  ArrowLeft,
  Info,
  Copy,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const ApiClient = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [requestBody, setRequestBody] = useState("");
  const [response, setResponse] = useState("");
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [copied, setCopied] = useState(false);
  const [responseTime, setResponseTime] = useState<number | null>(null);

  const handleSendRequest = async () => {
    try {
      const startTime = performance.now();
      const headersObj = headers.reduce(
        (acc, { key, value }) => {
          if (key && value) {
            acc[key] = value;
          }
          return acc;
        },
        {} as Record<string, string>
      );

      const response = await fetch(url, {
        method,
        headers: headersObj,
        body: method !== "GET" ? requestBody : undefined,
      });

      const endTime = performance.now();
      setResponseTime(endTime - startTime);

      const data = await response.text();
      setResponse(data);
    } catch (error) {
      setResponse(`Ошибка: ${error.message}`);
      setResponseTime(null);
    }
  };

  const addHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };

  const removeHeader = (index: number) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const updateHeader = (index: number, field: "key" | "value", value: string) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-100 text-green-700 border-green-200";
      case "POST":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "PUT":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "DELETE":
        return "bg-red-100 text-red-700 border-red-200";
      case "PATCH":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-white/50 flex-shrink-0 -ml-2 sm:hidden"
            >
              <Link to="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                API Клиент
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Отправляйте HTTP запросы к API, тестируйте эндпоинты и просматривайте ответы.
                Поддерживает GET, POST, PUT, DELETE и PATCH методы.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Request Card */}
          <Card className="border-purple-100 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-50 via-violet-50 to-indigo-50 border-b border-purple-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-purple-900">Запрос</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-purple-600 hover:text-purple-700"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px] p-4">
                      <p className="text-sm">
                        Выберите метод запроса, введите URL и при необходимости добавьте заголовки и
                        тело запроса. Нажмите "Отправить" для выполнения запроса.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <Select value={method} onValueChange={setMethod}>
                    <SelectTrigger
                      className={`w-[120px] border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-white/70 ${getMethodColor(method)}`}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-md border-purple-200 rounded-xl shadow-xl">
                      <SelectItem value="GET" className="text-green-700">
                        GET
                      </SelectItem>
                      <SelectItem value="POST" className="text-blue-700">
                        POST
                      </SelectItem>
                      <SelectItem value="PUT" className="text-yellow-700">
                        PUT
                      </SelectItem>
                      <SelectItem value="DELETE" className="text-red-700">
                        DELETE
                      </SelectItem>
                      <SelectItem value="PATCH" className="text-purple-700">
                        PATCH
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Введите URL (например: https://api.example.com/data)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-white/70"
                  />
                  <Button
                    onClick={handleSendRequest}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Отправить
                  </Button>
                </div>

                <Tabs defaultValue="headers" className="w-full">
                  <TabsList className="bg-purple-50 p-1 rounded-lg">
                    <TabsTrigger
                      value="headers"
                      className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
                    >
                      <Code className="mr-2 h-4 w-4" />
                      Заголовки
                    </TabsTrigger>
                    <TabsTrigger
                      value="body"
                      className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
                    >
                      <FileJson className="mr-2 h-4 w-4" />
                      Тело запроса
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="headers" className="space-y-3 mt-4">
                    {headers.map((header, index) => (
                      <div key={index} className="flex gap-3">
                        <Input
                          placeholder="Ключ (например: Content-Type)"
                          value={header.key}
                          onChange={(e) => updateHeader(index, "key", e.target.value)}
                          className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-white/70"
                        />
                        <Input
                          placeholder="Значение (например: application/json)"
                          value={header.value}
                          onChange={(e) => updateHeader(index, "value", e.target.value)}
                          className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-white/70"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeHeader(index)}
                          className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      onClick={addHeader}
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 bg-white/70"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Добавить заголовок
                    </Button>
                  </TabsContent>
                  <TabsContent value="body" className="mt-4">
                    <Textarea
                      placeholder="Введите тело запроса в формате JSON"
                      value={requestBody}
                      onChange={(e) => setRequestBody(e.target.value)}
                      className="min-h-[200px] font-mono border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-white/70"
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          {/* Response Card */}
          <Card className="border-purple-100 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-50 via-violet-50 to-indigo-50 border-b border-purple-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-purple-900">Ответ</CardTitle>
                <div className="flex items-center gap-2">
                  {responseTime && (
                    <Badge variant="outline" className="text-xs">
                      {responseTime.toFixed(0)}ms
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyResponse}
                    className="text-purple-600 hover:text-purple-700"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <pre className="bg-purple-50/50 p-4 rounded-lg overflow-auto max-h-[400px] font-mono text-sm border border-purple-100">
                {response || "Здесь появится ответ сервера..."}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApiClient;
