
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Package, 
  Shield, 
  Layers, 
  Users, 
  Lock, 
  Eye, 
  Puzzle,
  Target,
  Zap,
  UserCheck,
  Settings,
  GitBranch,
  Cpu,
  Database
} from "lucide-react";
import Header from "@/components/Header";

const OOPReference = () => {
  const oopPrinciples = [
    {
      id: "encapsulation",
      icon: Lock,
      title: "Инкапсуляция",
      description: "Сокрытие внутренней реализации",
      example: `class BankAccount {
  private balance = 0;
  
  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }
  
  getBalance() { return this.balance; }
}`
    },
    {
      id: "inheritance",
      icon: Layers,
      title: "Наследование",
      description: "Создание классов на основе существующих",
      example: `class Animal {
  protected name: string;
  constructor(name: string) { this.name = name; }
  makeSound() { console.log("Звук"); }
}

class Dog extends Animal {
  makeSound() { console.log(\`\${this.name} лает\`); }
}`
    },
    {
      id: "polymorphism",
      icon: Users,
      title: "Полиморфизм",
      description: "Единый интерфейс для разных типов",
      example: `interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  calculateArea() { return Math.PI * this.radius ** 2; }
}

class Rectangle implements Shape {
  constructor(private w: number, private h: number) {}
  calculateArea() { return this.w * this.h; }
}`
    },
    {
      id: "abstraction",
      icon: Eye,
      title: "Абстракция",
      description: "Выделение главных характеристик",
      example: `abstract class Vehicle {
  abstract start(): void;
  abstract stop(): void;
  
  getInfo() { return "Транспорт"; }
}

class Car extends Vehicle {
  start() { console.log("Завожу двигатель"); }
  stop() { console.log("Глушу двигатель"); }
}`
    }
  ];

  const solidPrinciples = [
    {
      id: "srp",
      icon: Target,
      title: "SRP - Единственная ответственность",
      description: "Класс должен иметь только одну причину для изменения",
      example: `// ❌ Плохо
class User {
  validateEmail() {}
  saveToDb() {}
  sendEmail() {}
}

// ✅ Хорошо
class User { constructor(public email: string) {} }
class EmailValidator { static validate(email: string) {} }
class UserRepository { save(user: User) {} }`
    },
    {
      id: "ocp",
      icon: Shield,
      title: "OCP - Открытость/Закрытость",
      description: "Открыт для расширения, закрыт для модификации",
      example: `interface PaymentProcessor {
  process(amount: number): void;
}

class PaymentService {
  constructor(private processor: PaymentProcessor) {}
  pay(amount: number) { this.processor.process(amount); }
}`
    },
    {
      id: "lsp",
      icon: Puzzle,
      title: "LSP - Подстановка Лисков",
      description: "Подклассы должны заменять базовые классы",
      example: `class Rectangle {
  constructor(protected width: number, protected height: number) {}
  area() { return this.width * this.height; }
}

class Square extends Rectangle {
  constructor(side: number) { super(side, side); }
}`
    },
    {
      id: "isp",
      icon: UserCheck,
      title: "ISP - Разделение интерфейсов",
      description: "Много специализированных интерфейсов лучше одного универсального",
      example: `interface Workable { work(): void; }
interface Eatable { eat(): void; }

class Human implements Workable, Eatable {
  work() { console.log("Работаю"); }
  eat() { console.log("Ем"); }
}

class Robot implements Workable {
  work() { console.log("Работаю"); }
}`
    },
    {
      id: "dip",
      icon: Settings,
      title: "DIP - Инверсия зависимостей",
      description: "Зависеть от абстракций, а не от конкретных реализаций",
      example: `interface Logger { log(message: string): void; }

class Service {
  constructor(private logger: Logger) {}
  doWork() { this.logger.log("Работа выполнена"); }
}`
    }
  ];

  const additionalConcepts = [
    {
      id: "composition-inheritance",
      icon: GitBranch,
      title: "Композиция vs Наследование",
      description: "Когда использовать композицию, а когда наследование",
      content: `**Наследование (IS-A)**: "является"
**Композиция (HAS-A)**: "содержит"

Предпочитайте композицию наследованию!`,
      example: `// Наследование
class Car extends Vehicle {
  startEngine() { super.start(); }
}

// Композиция
class Car {
  constructor(private engine: Engine) {}
  start() { this.engine.start(); }
}`
    },
    {
      id: "design-patterns",
      icon: Cpu,
      title: "Паттерны проектирования",
      description: "Основные паттерны ООП",
      content: `**Creational**: Singleton, Factory, Builder
**Structural**: Adapter, Decorator, Facade  
**Behavioral**: Observer, Strategy, Command`,
      example: `// Singleton
class Database {
  private static instance: Database;
  
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

// Factory
class ShapeFactory {
  static create(type: string): Shape {
    switch(type) {
      case 'circle': return new Circle();
      case 'square': return new Square();
      default: throw new Error('Unknown shape');
    }
  }
}`
    },
    {
      id: "grasp",
      icon: Database,
      title: "GRASP принципы",
      description: "General Responsibility Assignment Software Patterns",
      content: `**Information Expert**: Ответственность назначается классу с необходимой информацией
**Creator**: Класс создает объекты, которые он использует
**Controller**: Обрабатывает системные события
**Low Coupling**: Слабая связанность между классами
**High Cohesion**: Высокая связность внутри класса`,
      example: `// Information Expert
class Order {
  constructor(private items: Item[]) {}
  
  // Order знает о своих items, поэтому он вычисляет total
  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// Creator
class OrderService {
  // OrderService создает Order, т.к. использует его
  createOrder(items: Item[]): Order {
    return new Order(items);
  }
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Справочник ООП и SOLID
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Компактное руководство по принципам объектно-ориентированного программирования
          </p>
        </div>

        <Tabs defaultValue="oop" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="oop" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              ООП
            </TabsTrigger>
            <TabsTrigger value="solid" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              SOLID
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              Дополнительно
            </TabsTrigger>
          </TabsList>

          <TabsContent value="oop">
            <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Принципы ООП
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {oopPrinciples.map((principle) => {
                    const IconComponent = principle.icon;
                    return (
                      <AccordionItem key={principle.id} value={principle.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{principle.title}</div>
                              <div className="text-sm text-gray-600">{principle.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-gray-900 rounded-lg p-4 mt-4">
                            <pre className="text-sm text-gray-100 overflow-x-auto">
                              <code>{principle.example}</code>
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="solid">
            <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  SOLID Принципы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {solidPrinciples.map((principle) => {
                    const IconComponent = principle.icon;
                    return (
                      <AccordionItem key={principle.id} value={principle.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{principle.title}</div>
                              <div className="text-sm text-gray-600">{principle.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-gray-900 rounded-lg p-4 mt-4">
                            <pre className="text-sm text-gray-100 overflow-x-auto">
                              <code>{principle.example}</code>
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced">
            <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Дополнительные концепции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {additionalConcepts.map((concept) => {
                    const IconComponent = concept.icon;
                    return (
                      <AccordionItem key={concept.id} value={concept.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{concept.title}</div>
                              <div className="text-sm text-gray-600">{concept.description}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div className="text-gray-700 leading-relaxed">
                              <div dangerouslySetInnerHTML={{ __html: concept.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </div>
                            <div className="bg-gray-900 rounded-lg p-4">
                              <pre className="text-sm text-gray-100 overflow-x-auto">
                                <code>{concept.example}</code>
                              </pre>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              💡 Ключевые принципы
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>DRY</strong> (Don't Repeat Yourself) • <strong>KISS</strong> (Keep It Simple, Stupid) • 
              <strong>YAGNI</strong> (You Aren't Gonna Need It) • <strong>Composition over Inheritance</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OOPReference;
