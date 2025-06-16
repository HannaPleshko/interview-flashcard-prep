
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Settings
} from "lucide-react";
import Header from "@/components/Header";

const OOPReference = () => {
  const oopPrinciples = [
    {
      id: "encapsulation",
      icon: Lock,
      title: "Инкапсуляция",
      description: "Сокрытие внутренней реализации объекта",
      content: "Инкапсуляция - это принцип, который позволяет скрыть внутреннее устройство объекта от внешнего мира. Объект предоставляет только необходимые методы для взаимодействия с ним.",
      example: `class BankAccount {
  private balance: number = 0;
  
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  
  public getBalance(): number {
    return this.balance;
  }
  
  // Приватный метод недоступен извне
  private validateTransaction(): boolean {
    return this.balance >= 0;
  }
}`,
      benefits: [
        "Защита данных от неправильного использования",
        "Контроль доступа к свойствам объекта",
        "Возможность изменить внутреннюю реализацию без влияния на код, использующий объект"
      ]
    },
    {
      id: "inheritance",
      icon: Layers,
      title: "Наследование",
      description: "Возможность создавать новые классы на основе существующих",
      content: "Наследование позволяет создавать новые классы, которые наследуют свойства и методы от родительских классов. Это способствует повторному использованию кода.",
      example: `class Animal {
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  makeSound(): void {
    console.log("Животное издает звук");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  
  makeSound(): void {
    console.log(\`\${this.name} лает: Гав-гав!\`);
  }
  
  fetch(): void {
    console.log(\`\${this.name} приносит палку\`);
  }
}`,
      benefits: [
        "Повторное использование кода",
        "Создание иерархии классов",
        "Специализация поведения в дочерних классах"
      ]
    },
    {
      id: "polymorphism",
      icon: Users,
      title: "Полиморфизм",
      description: "Способность объектов разных типов реагировать на одинаковые методы по-разному",
      content: "Полиморфизм позволяет использовать объекты разных классов через единый интерфейс. Один и тот же метод может работать по-разному в зависимости от типа объекта.",
      example: `interface Shape {
  calculateArea(): number;
  draw(): void;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  
  draw(): void {
    console.log("Рисуем круг");
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  
  calculateArea(): number {
    return this.width * this.height;
  }
  
  draw(): void {
    console.log("Рисуем прямоугольник");
  }
}

// Полиморфное использование
const shapes: Shape[] = [new Circle(5), new Rectangle(10, 20)];
shapes.forEach(shape => {
  console.log(\`Площадь: \${shape.calculateArea()}\`);
  shape.draw();
});`,
      benefits: [
        "Единый интерфейс для разных типов объектов",
        "Упрощение кода и его расширяемость",
        "Возможность добавлять новые типы без изменения существующего кода"
      ]
    },
    {
      id: "abstraction",
      icon: Eye,
      title: "Абстракция",
      description: "Выделение главных характеристик объекта, игнорируя детали",
      content: "Абстракция позволяет работать с объектами на концептуальном уровне, скрывая сложные детали реализации за простым интерфейсом.",
      example: `abstract class Vehicle {
  protected brand: string;
  protected model: string;
  
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
  
  // Абстрактный метод - должен быть реализован в дочерних классах
  abstract start(): void;
  abstract stop(): void;
  
  // Общий метод для всех транспортных средств
  getInfo(): string {
    return \`\${this.brand} \${this.model}\`;
  }
}

class Car extends Vehicle {
  start(): void {
    console.log("Завожу двигатель автомобиля");
  }
  
  stop(): void {
    console.log("Глушу двигатель автомобиля");
  }
}`,
      benefits: [
        "Упрощение сложных систем",
        "Фокус на важных характеристиках объекта",
        "Создание четких интерфейсов взаимодействия"
      ]
    }
  ];

  const solidPrinciples = [
    {
      id: "srp",
      icon: Target,
      title: "Single Responsibility Principle (SRP)",
      description: "Принцип единственной ответственности",
      content: "Каждый класс должен иметь только одну причину для изменения. Класс должен быть ответственен только за одну функциональность.",
      example: `// ❌ Неправильно - класс выполняет слишком много задач
class User {
  name: string;
  email: string;
  
  validateEmail(): boolean { /* ... */ }
  saveToDatabase(): void { /* ... */ }
  sendEmail(): void { /* ... */ }
  generateReport(): string { /* ... */ }
}

// ✅ Правильно - разделили ответственности
class User {
  constructor(public name: string, public email: string) {}
}

class EmailValidator {
  static validate(email: string): boolean { /* ... */ }
}

class UserRepository {
  save(user: User): void { /* ... */ }
}

class EmailService {
  send(to: string, message: string): void { /* ... */ }
}

class ReportGenerator {
  generateUserReport(user: User): string { /* ... */ }
}`,
      benefits: [
        "Код становится более понятным и поддерживаемым",
        "Изменения в одной функциональности не влияют на другие",
        "Проще тестировать отдельные компоненты"
      ]
    },
    {
      id: "ocp",
      icon: Shield,
      title: "Open/Closed Principle (OCP)",
      description: "Принцип открытости/закрытости",
      content: "Программные сущности должны быть открыты для расширения, но закрыты для модификации. Новая функциональность должна добавляться через расширение, а не изменение существующего кода.",
      example: `// ✅ Используем абстракцию для расширяемости
interface PaymentProcessor {
  processPayment(amount: number): void;
}

class CreditCardProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(\`Обработка оплаты \${amount} через кредитную карту\`);
  }
}

class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(\`Обработка оплаты \${amount} через PayPal\`);
  }
}

class PaymentService {
  constructor(private processor: PaymentProcessor) {}
  
  makePayment(amount: number): void {
    this.processor.processPayment(amount);
  }
}

// Легко добавить новый способ оплаты без изменения существующего кода
class CryptoProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(\`Обработка оплаты \${amount} через криптовалюту\`);
  }
}`,
      benefits: [
        "Система легко расширяется новой функциональностью",
        "Существующий код остается стабильным",
        "Снижается риск внесения ошибок при добавлении новых возможностей"
      ]
    },
    {
      id: "lsp",
      icon: Puzzle,
      title: "Liskov Substitution Principle (LSP)",
      description: "Принцип подстановки Барбары Лисков",
      content: "Объекты суперкласса должны заменяться объектами подклассов без нарушения работоспособности программы.",
      example: `// ✅ Правильная реализация LSP
class Bird {
  fly(): void {
    console.log("Птица летит");
  }
}

class Sparrow extends Bird {
  fly(): void {
    console.log("Воробей летит быстро");
  }
}

class Eagle extends Bird {
  fly(): void {
    console.log("Орел парит высоко");
  }
}

// ❌ Нарушение LSP
class Penguin extends Bird {
  fly(): void {
    throw new Error("Пингвины не летают!");
  }
}

// ✅ Правильное решение
abstract class Bird {
  abstract move(): void;
}

class FlyingBird extends Bird {
  move(): void {
    console.log("Летит");
  }
}

class SwimmingBird extends Bird {
  move(): void {
    console.log("Плывет");
  }
}`,
      benefits: [
        "Полиморфизм работает корректно",
        "Подклассы не нарушают ожидания от базового класса",
        "Код становится более надежным и предсказуемым"
      ]
    },
    {
      id: "isp",
      icon: UserCheck,
      title: "Interface Segregation Principle (ISP)",
      description: "Принцип разделения интерфейсов",
      content: "Клиенты не должны зависеть от интерфейсов, которые они не используют. Лучше иметь много специализированных интерфейсов, чем один универсальный.",
      example: `// ❌ Толстый интерфейс - нарушение ISP
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
  payTaxes(): void;
}

// ✅ Разделенные интерфейсы
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

interface Taxpayer {
  payTaxes(): void;
}

class Human implements Workable, Eatable, Sleepable, Taxpayer {
  work(): void { console.log("Человек работает"); }
  eat(): void { console.log("Человек ест"); }
  sleep(): void { console.log("Человек спит"); }
  payTaxes(): void { console.log("Человек платит налоги"); }
}

class Robot implements Workable {
  work(): void { console.log("Робот работает"); }
  // Робот не ест, не спит и не платит налоги
}`,
      benefits: [
        "Классы зависят только от нужных им методов",
        "Интерфейсы становятся более сфокусированными",
        "Легче поддерживать и изменять код"
      ]
    },
    {
      id: "dip",
      icon: Settings,
      title: "Dependency Inversion Principle (DIP)",
      description: "Принцип инверсии зависимостей",
      content: "Модули высокого уровня не должны зависеть от модулей низкого уровня. Оба должны зависеть от абстракций. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.",
      example: `// ❌ Нарушение DIP - прямая зависимость
class EmailService {
  send(message: string): void {
    console.log(\`Отправка email: \${message}\`);
  }
}

class NotificationService {
  private emailService = new EmailService(); // Жесткая зависимость
  
  notify(message: string): void {
    this.emailService.send(message);
  }
}

// ✅ Правильная реализация DIP
interface MessageSender {
  send(message: string): void;
}

class EmailSender implements MessageSender {
  send(message: string): void {
    console.log(\`Отправка email: \${message}\`);
  }
}

class SMSSender implements MessageSender {
  send(message: string): void {
    console.log(\`Отправка SMS: \${message}\`);
  }
}

class NotificationService {
  constructor(private sender: MessageSender) {} // Зависимость от абстракции
  
  notify(message: string): void {
    this.sender.send(message);
  }
}

// Использование
const emailSender = new EmailSender();
const notifier = new NotificationService(emailSender);`,
      benefits: [
        "Слабая связанность между модулями",
        "Возможность легко заменять реализации",
        "Улучшенная тестируемость кода"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Справочник ООП и SOLID
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Подробное руководство по принципам объектно-ориентированного программирования 
            и SOLID принципам с примерами кода и практическими советами
          </p>
        </div>

        <Tabs defaultValue="oop" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="oop" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Принципы ООП
            </TabsTrigger>
            <TabsTrigger value="solid" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              SOLID Принципы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="oop" className="space-y-8">
            <div className="grid gap-8">
              {oopPrinciples.map((principle) => {
                const IconComponent = principle.icon;
                return (
                  <Card key={principle.id} className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {principle.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {principle.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {principle.content}
                      </p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
                          <code>{principle.example}</code>
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-700 mb-3">Преимущества:</h4>
                        <ul className="space-y-2">
                          {principle.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="solid" className="space-y-8">
            <div className="grid gap-8">
              {solidPrinciples.map((principle) => {
                const IconComponent = principle.icon;
                return (
                  <Card key={principle.id} className="bg-white/60 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            {principle.title}
                          </CardTitle>
                          <Badge variant="outline" className="mt-1 border-purple-200 text-purple-600">
                            {principle.id.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-lg">
                        {principle.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {principle.content}
                      </p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
                          <code>{principle.example}</code>
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-700 mb-3">Преимущества:</h4>
                        <ul className="space-y-2">
                          {principle.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Заключение
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Понимание и правильное применение принципов ООП и SOLID делает код более чистым, 
              поддерживаемым и расширяемым. Эти принципы являются основой для создания качественного 
              программного обеспечения и должны применяться во всех проектах разработки.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OOPReference;
