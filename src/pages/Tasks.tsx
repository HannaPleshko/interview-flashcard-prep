import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Filter, Search, ArrowUpDown, LayoutGrid, List, Play, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import toast, { Toaster } from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";

interface Task {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  testCases: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  category: string;
  template?: string;
}

// Пример данных задач
const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Найти сумму элементов массива",
    description: "Напишите функцию, которая находит сумму всех элементов массива чисел.",
    difficulty: "easy",
    category: "Массивы",
    template: `function sumArray(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "15",
        explanation: "1 + 2 + 3 + 4 + 5 = 15",
      },
      {
        input: "[-1, -2, 3]",
        output: "0",
        explanation: "-1 + (-2) + 3 = 0",
      },
    ],
  },
  {
    id: "2",
    title: "Найти максимальный элемент",
    description: "Напишите функцию, которая находит максимальный элемент в массиве чисел.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findMax(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 5, 3, 9, 2]",
        output: "9",
        explanation: "9 - максимальное число в массиве",
      },
      {
        input: "[-1, -5, -3]",
        output: "-1",
        explanation: "-1 - максимальное число в массиве",
      },
    ],
  },
  {
    id: "3",
    title: "Проверить палиндром",
    description: "Напишите функцию, которая проверяет, является ли строка палиндромом.",
    difficulty: "medium",
    category: "Строки",
    template: `function isPalindrome(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"radar"',
        output: "true",
        explanation: "radar читается одинаково слева направо и справа налево",
      },
      {
        input: '"hello"',
        output: "false",
        explanation: "hello не является палиндромом",
      },
    ],
  },
  {
    id: "4",
    title: "Найти факториал",
    description: "Напишите функцию для вычисления факториала числа.",
    difficulty: "medium",
    category: "Математика",
    template: `function factorial(n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "5",
        output: "120",
        explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120",
      },
      {
        input: "0",
        output: "1",
        explanation: "0! = 1 по определению",
      },
    ],
  },
  {
    id: "5",
    title: "Проверить сбалансированные скобки",
    description: "Напишите функцию, которая проверяет, правильно ли расставлены скобки в строке.",
    difficulty: "hard",
    category: "Строки",
    template: `function isBalanced(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"((()))"',
        output: "true",
        explanation: "Скобки правильно сбалансированы",
      },
      {
        input: '"(()))"',
        output: "false",
        explanation: "Несбалансированные скобки",
      },
    ],
  },
  {
    id: "6",
    title: "Найти минимальный элемент",
    description: "Напишите функцию, которая находит минимальный элемент в массиве чисел.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findMin(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 5, 3, 9, 2]",
        output: "1",
        explanation: "1 - минимальное число в массиве",
      },
      {
        input: "[-1, -5, -3]",
        output: "-5",
        explanation: "-5 - минимальное число в массиве",
      },
    ],
  },
  {
    id: "7",
    title: "Подсчитать количество гласных",
    description: "Напишите функцию, которая подсчитывает количество гласных букв в строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function countVowels(str) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: '"hello"',
        output: "2",
        explanation: "В слове 'hello' две гласные: e и o",
      },
      {
        input: '"aeiou"',
        output: "5",
        explanation: "В строке все буквы гласные",
      },
    ],
  },
  {
    id: "8",
    title: "Проверить четность числа",
    description: "Напишите функцию, которая проверяет, является ли число четным.",
    difficulty: "easy",
    category: "Математика",
    template: `function isEven(num) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "4",
        output: "true",
        explanation: "4 делится на 2 без остатка",
      },
      {
        input: "7",
        output: "false",
        explanation: "7 не делится на 2 без остатка",
      },
    ],
  },
  {
    id: "9",
    title: "Найти среднее значение",
    description: "Напишите функцию, которая находит среднее арифметическое элементов массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findAverage(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "3",
        explanation: "(1 + 2 + 3 + 4 + 5) / 5 = 3",
      },
      {
        input: "[10, 20]",
        output: "15",
        explanation: "(10 + 20) / 2 = 15",
      },
    ],
  },
  {
    id: "10",
    title: "Перевернуть строку",
    description: "Напишите функцию, которая переворачивает строку задом наперед.",
    difficulty: "easy",
    category: "Строки",
    template: `function reverseString(str) {
  // Ваш код здесь
  return "";
}`,
    testCases: [
      {
        input: '"hello"',
        output: "olleh",
        explanation: "Строка перевернута задом наперед",
      },
      {
        input: '"world"',
        output: "dlrow",
        explanation: "Строка перевернута задом наперед",
      },
    ],
  },
  {
    id: "11",
    title: "Проверить простое число",
    description: "Напишите функцию, которая проверяет, является ли число простым.",
    difficulty: "easy",
    category: "Математика",
    template: `function isPrime(num) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "7",
        output: "true",
        explanation: "7 - простое число",
      },
      {
        input: "4",
        output: "false",
        explanation: "4 не является простым числом",
      },
    ],
  },
  {
    id: "12",
    title: "Подсчитать количество слов",
    description: "Напишите функцию, которая подсчитывает количество слов в строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function countWords(str) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: '"Hello World"',
        output: "2",
        explanation: "В строке два слова: Hello и World",
      },
      {
        input: '"One two three"',
        output: "3",
        explanation: "В строке три слова",
      },
    ],
  },
  {
    id: "13",
    title: "Найти наибольший общий делитель",
    description: "Напишите функцию для нахождения наибольшего общего делителя двух чисел.",
    difficulty: "easy",
    category: "Математика",
    template: `function gcd(a, b) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[12, 18]",
        output: "6",
        explanation: "НОД(12, 18) = 6",
      },
      {
        input: "[7, 13]",
        output: "1",
        explanation: "НОД(7, 13) = 1",
      },
    ],
  },
  {
    id: "14",
    title: "Проверить анаграмму",
    description: "Напишите функцию, которая проверяет, являются ли две строки анаграммами.",
    difficulty: "easy",
    category: "Строки",
    template: `function isAnagram(str1, str2) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '["listen", "silent"]',
        output: "true",
        explanation: "Слова содержат одинаковые буквы",
      },
      {
        input: '["hello", "world"]',
        output: "false",
        explanation: "Слова содержат разные буквы",
      },
    ],
  },
  {
    id: "15",
    title: "Найти сумму цифр числа",
    description: "Напишите функцию, которая находит сумму цифр числа.",
    difficulty: "easy",
    category: "Математика",
    template: `function sumDigits(num) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "123",
        output: "6",
        explanation: "1 + 2 + 3 = 6",
      },
      {
        input: "456",
        output: "15",
        explanation: "4 + 5 + 6 = 15",
      },
    ],
  },
  {
    id: "16",
    title: "Проверить високосный год",
    description: "Напишите функцию, которая проверяет, является ли год високосным.",
    difficulty: "easy",
    category: "Математика",
    template: `function isLeapYear(year) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "2020",
        output: "true",
        explanation: "2020 - високосный год",
      },
      {
        input: "2021",
        output: "false",
        explanation: "2021 - не високосный год",
      },
    ],
  },
  {
    id: "17",
    title: "Найти количество вхождений",
    description: "Напишите функцию, которая подсчитывает количество вхождений элемента в массив.",
    difficulty: "easy",
    category: "Массивы",
    template: `function countOccurrences(arr, target) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[[1, 2, 2, 3, 2], 2]",
        output: "3",
        explanation: "Число 2 встречается 3 раза",
      },
      {
        input: "[[1, 2, 3], 4]",
        output: "0",
        explanation: "Число 4 не встречается",
      },
    ],
  },
  {
    id: "18",
    title: "Проверить совершенное число",
    description: "Напишите функцию, которая проверяет, является ли число совершенным.",
    difficulty: "easy",
    category: "Математика",
    template: `function isPerfectNumber(num) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "6",
        output: "true",
        explanation: "6 = 1 + 2 + 3",
      },
      {
        input: "8",
        output: "false",
        explanation: "8 ≠ 1 + 2 + 4",
      },
    ],
  },
  {
    id: "19",
    title: "Найти длину последнего слова",
    description: "Напишите функцию, которая находит длину последнего слова в строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function lengthOfLastWord(str) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: '"Hello World"',
        output: "5",
        explanation: "Последнее слово 'World' имеет длину 5",
      },
      {
        input: '"   fly me   to   the moon  "',
        output: "4",
        explanation: "Последнее слово 'moon' имеет длину 4",
      },
    ],
  },
  {
    id: "20",
    title: "Проверить степень двойки",
    description: "Напишите функцию, которая проверяет, является ли число степенью двойки.",
    difficulty: "easy",
    category: "Математика",
    template: `function isPowerOfTwo(num) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "8",
        output: "true",
        explanation: "8 = 2³",
      },
      {
        input: "6",
        output: "false",
        explanation: "6 не является степенью двойки",
      },
    ],
  },
  {
    id: "21",
    title: "Найти пропущенное число",
    description:
      "Напишите функцию, которая находит пропущенное число в последовательности от 0 до n.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findMissingNumber(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[0, 1, 3]",
        output: "2",
        explanation: "В последовательности пропущено число 2",
      },
      {
        input: "[0, 1, 2, 4]",
        output: "3",
        explanation: "В последовательности пропущено число 3",
      },
    ],
  },
  {
    id: "22",
    title: "Проверить валидность email",
    description: "Напишите функцию, которая проверяет, является ли строка валидным email адресом.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidEmail(email) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"test@example.com"',
        output: "true",
        explanation: "Валидный email адрес",
      },
      {
        input: '"invalid-email"',
        output: "false",
        explanation: "Невалидный email адрес",
      },
    ],
  },
  {
    id: "23",
    title: "Найти количество дней в месяце",
    description: "Напишите функцию, которая возвращает количество дней в указанном месяце.",
    difficulty: "easy",
    category: "Математика",
    template: `function getDaysInMonth(month, year) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[2, 2020]",
        output: "29",
        explanation: "Февраль 2020 года (високосный) имеет 29 дней",
      },
      {
        input: "[4, 2021]",
        output: "30",
        explanation: "Апрель имеет 30 дней",
      },
    ],
  },
  {
    id: "24",
    title: "Проверить валидность скобок",
    description: "Напишите функцию, которая проверяет, правильно ли расставлены скобки в строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidParentheses(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"()"',
        output: "true",
        explanation: "Скобки правильно расставлены",
      },
      {
        input: '"())"',
        output: "false",
        explanation: "Несбалансированные скобки",
      },
    ],
  },
  {
    id: "25",
    title: "Найти следующее простое число",
    description: "Напишите функцию, которая находит следующее простое число после заданного.",
    difficulty: "easy",
    category: "Математика",
    template: `function nextPrime(num) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "7",
        output: "11",
        explanation: "Следующее простое число после 7 - это 11",
      },
      {
        input: "13",
        output: "17",
        explanation: "Следующее простое число после 13 - это 17",
      },
    ],
  },
  {
    id: "26",
    title: "Проверить валидность IP-адреса",
    description: "Напишите функцию, которая проверяет, является ли строка валидным IPv4 адресом.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidIP(ip) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"192.168.1.1"',
        output: "true",
        explanation: "Валидный IPv4 адрес",
      },
      {
        input: '"256.1.2.3"',
        output: "false",
        explanation: "Невалидный IPv4 адрес",
      },
    ],
  },
  {
    id: "27",
    title: "Найти количество делителей",
    description: "Напишите функцию, которая находит количество делителей числа.",
    difficulty: "easy",
    category: "Математика",
    template: `function countDivisors(num) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "12",
        output: "6",
        explanation: "Делители: 1, 2, 3, 4, 6, 12",
      },
      {
        input: "7",
        output: "2",
        explanation: "Делители: 1, 7",
      },
    ],
  },
  {
    id: "28",
    title: "Проверить валидность номера телефона",
    description:
      "Напишите функцию, которая проверяет, является ли строка валидным номером телефона.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidPhone(phone) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"+7 (999) 123-45-67"',
        output: "true",
        explanation: "Валидный номер телефона",
      },
      {
        input: '"123"',
        output: "false",
        explanation: "Невалидный номер телефона",
      },
    ],
  },
  {
    id: "29",
    title: "Найти сумму цифр до однозначного числа",
    description:
      "Напишите функцию, которая находит сумму цифр числа до получения однозначного числа.",
    difficulty: "easy",
    category: "Математика",
    template: `function digitalRoot(num) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "942",
        output: "6",
        explanation: "9 + 4 + 2 = 15, 1 + 5 = 6",
      },
      {
        input: "493193",
        output: "2",
        explanation: "4 + 9 + 3 + 1 + 9 + 3 = 29, 2 + 9 = 11, 1 + 1 = 2",
      },
    ],
  },
  {
    id: "30",
    title: "Проверить валидность пароля",
    description:
      "Напишите функцию, которая проверяет, соответствует ли пароль требованиям безопасности.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidPassword(password) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"Password123!"',
        output: "true",
        explanation: "Пароль содержит буквы, цифры и специальный символ",
      },
      {
        input: '"weak"',
        output: "false",
        explanation: "Пароль слишком простой",
      },
    ],
  },
  {
    id: "31",
    title: "Найти количество нулей в конце факториала",
    description: "Напишите функцию, которая находит количество нулей в конце факториала числа.",
    difficulty: "easy",
    category: "Математика",
    template: `function trailingZeros(n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "5",
        output: "1",
        explanation: "5! = 120, один ноль в конце",
      },
      {
        input: "10",
        output: "2",
        explanation: "10! = 3628800, два нуля в конце",
      },
    ],
  },
  {
    id: "32",
    title: "Проверить валидность URL",
    description: "Напишите функцию, которая проверяет, является ли строка валидным URL.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidURL(url) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"https://example.com"',
        output: "true",
        explanation: "Валидный URL",
      },
      {
        input: '"not-a-url"',
        output: "false",
        explanation: "Невалидный URL",
      },
    ],
  },
  {
    id: "33",
    title: "Найти количество способов подняться по лестнице",
    description:
      "Напишите функцию, которая находит количество способов подняться по лестнице из n ступенек.",
    difficulty: "easy",
    category: "Математика",
    template: `function climbStairs(n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "2",
        output: "2",
        explanation: "1+1 или 2",
      },
      {
        input: "3",
        output: "3",
        explanation: "1+1+1, 1+2 или 2+1",
      },
    ],
  },
  {
    id: "34",
    title: "Проверить валидность даты",
    description: "Напишите функцию, которая проверяет, является ли строка валидной датой.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidDate(dateStr) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"2023-12-31"',
        output: "true",
        explanation: "Валидная дата",
      },
      {
        input: '"2023-13-45"',
        output: "false",
        explanation: "Невалидная дата",
      },
    ],
  },
  {
    id: "35",
    title: "Найти количество счастливых чисел",
    description: "Напишите функцию, которая проверяет, является ли число счастливым.",
    difficulty: "easy",
    category: "Математика",
    template: `function isHappyNumber(num) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "19",
        output: "true",
        explanation: "1² + 9² = 82, 8² + 2² = 68, 6² + 8² = 100, 1² + 0² + 0² = 1",
      },
      {
        input: "4",
        output: "false",
        explanation:
          "4² = 16, 1² + 6² = 37, 3² + 7² = 58, 5² + 8² = 89, 8² + 9² = 145, 1² + 4² + 5² = 42, 4² + 2² = 20, 2² + 0² = 4",
      },
    ],
  },
  {
    id: "36",
    title: "Проверить валидность ISBN",
    description: "Напишите функцию, которая проверяет, является ли строка валидным ISBN-13.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidISBN(isbn) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"978-0-7475-3269-9"',
        output: "true",
        explanation: "Валидный ISBN-13",
      },
      {
        input: '"978-0-7475-3269-0"',
        output: "false",
        explanation: "Невалидный ISBN-13",
      },
    ],
  },
  {
    id: "37",
    title: "Найти количество нулей в числе",
    description: "Напишите функцию, которая подсчитывает количество нулей в числе.",
    difficulty: "easy",
    category: "Математика",
    template: `function countZeros(num) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "102030",
        output: "3",
        explanation: "В числе три нуля",
      },
      {
        input: "12345",
        output: "0",
        explanation: "В числе нет нулей",
      },
    ],
  },
  {
    id: "38",
    title: "Проверить валидность номера карты",
    description:
      "Напишите функцию, которая проверяет, является ли строка валидным номером кредитной карты.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidCard(cardNumber) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"4532015112830366"',
        output: "true",
        explanation: "Валидный номер карты",
      },
      {
        input: '"1234567890123456"',
        output: "false",
        explanation: "Невалидный номер карты",
      },
    ],
  },
  {
    id: "39",
    title: "Найти количество способов размена",
    description: "Напишите функцию, которая находит количество способов размена суммы монетами.",
    difficulty: "easy",
    category: "Математика",
    template: `function countChange(amount, coins) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[5, [1, 2, 5]]",
        output: "4",
        explanation: "1+1+1+1+1, 1+1+1+2, 1+2+2, 5",
      },
      {
        input: "[3, [2]]",
        output: "0",
        explanation: "Невозможно разменять",
      },
    ],
  },
  {
    id: "40",
    title: "Проверить валидность пароля",
    description:
      "Напишите функцию, которая проверяет, соответствует ли пароль требованиям безопасности.",
    difficulty: "easy",
    category: "Строки",
    template: `function isStrongPassword(password) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"Password123!"',
        output: "true",
        explanation: "Пароль содержит буквы, цифры и специальный символ",
      },
      {
        input: '"weak"',
        output: "false",
        explanation: "Пароль слишком простой",
      },
    ],
  },
  {
    id: "41",
    title: "Найти количество палиндромов",
    description: "Напишите функцию, которая находит количество палиндромов в диапазоне чисел.",
    difficulty: "easy",
    category: "Математика",
    template: `function countPalindromes(start, end) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 10]",
        output: "9",
        explanation: "1, 2, 3, 4, 5, 6, 7, 8, 9",
      },
      {
        input: "[10, 20]",
        output: "1",
        explanation: "11",
      },
    ],
  },
  {
    id: "42",
    title: "Проверить валидность имени файла",
    description: "Напишите функцию, которая проверяет, является ли строка валидным именем файла.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidFilename(filename) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"document.pdf"',
        output: "true",
        explanation: "Валидное имя файла",
      },
      {
        input: '"file/name.txt"',
        output: "false",
        explanation: "Невалидное имя файла",
      },
    ],
  },
  {
    id: "43",
    title: "Найти количество делителей",
    description: "Напишите функцию, которая находит количество делителей числа.",
    difficulty: "easy",
    category: "Математика",
    template: `function countDivisors(num) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "12",
        output: "6",
        explanation: "1, 2, 3, 4, 6, 12",
      },
      {
        input: "7",
        output: "2",
        explanation: "1, 7",
      },
    ],
  },
  {
    id: "44",
    title: "Проверить валидность цвета",
    description: "Напишите функцию, которая проверяет, является ли строка валидным HEX-цветом.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidColor(color) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"#FF0000"',
        output: "true",
        explanation: "Валидный HEX-цвет",
      },
      {
        input: '"#GG0000"',
        output: "false",
        explanation: "Невалидный HEX-цвет",
      },
    ],
  },
  {
    id: "45",
    title: "Найти количество способов размена",
    description: "Напишите функцию, которая находит количество способов размена суммы монетами.",
    difficulty: "easy",
    category: "Математика",
    template: `function countWays(amount, coins) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[5, [1, 2, 5]]",
        output: "4",
        explanation: "1+1+1+1+1, 1+1+1+2, 1+2+2, 5",
      },
      {
        input: "[3, [2]]",
        output: "0",
        explanation: "Невозможно разменять",
      },
    ],
  },
  {
    id: "46",
    title: "Проверить валидность времени",
    description:
      "Напишите функцию, которая проверяет, является ли строка валидным временем в формате 24 часа.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidTime(time) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"23:59"',
        output: "true",
        explanation: "Валидное время",
      },
      {
        input: '"25:00"',
        output: "false",
        explanation: "Невалидное время",
      },
    ],
  },
  {
    id: "47",
    title: "Найти количество нулей в конце факториала",
    description: "Напишите функцию, которая находит количество нулей в конце факториала числа.",
    difficulty: "easy",
    category: "Математика",
    template: `function countTrailingZeros(n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "5",
        output: "1",
        explanation: "5! = 120, один ноль в конце",
      },
      {
        input: "10",
        output: "2",
        explanation: "10! = 3628800, два нуля в конце",
      },
    ],
  },
  {
    id: "48",
    title: "Проверить валидность номера телефона",
    description:
      "Напишите функцию, которая проверяет, является ли строка валидным номером телефона.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidPhoneNumber(phone) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"+7 (999) 123-45-67"',
        output: "true",
        explanation: "Валидный номер телефона",
      },
      {
        input: '"123"',
        output: "false",
        explanation: "Невалидный номер телефона",
      },
    ],
  },
  {
    id: "49",
    title: "Найти количество способов подняться по лестнице",
    description:
      "Напишите функцию, которая находит количество способов подняться по лестнице из n ступенек.",
    difficulty: "easy",
    category: "Математика",
    template: `function countWaysToClimb(n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "2",
        output: "2",
        explanation: "1+1 или 2",
      },
      {
        input: "3",
        output: "3",
        explanation: "1+1+1, 1+2 или 2+1",
      },
    ],
  },
  {
    id: "50",
    title: "Проверить валидность пароля",
    description:
      "Напишите функцию, которая проверяет, соответствует ли пароль требованиям безопасности.",
    difficulty: "easy",
    category: "Строки",
    template: `function isSecurePassword(password) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"Password123!"',
        output: "true",
        explanation: "Пароль содержит буквы, цифры и специальный символ",
      },
      {
        input: '"weak"',
        output: "false",
        explanation: "Пароль слишком простой",
      },
    ],
  },
  {
    id: "51",
    title: "Найти все подстроки-палиндромы",
    description: "Напишите функцию, которая находит все подстроки-палиндромы в заданной строке.",
    difficulty: "medium",
    category: "Строки",
    template: `function findAllPalindromes(str) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"aabaa"',
        output: '["a", "aa", "aabaa", "aba", "b"]',
        explanation: "Найдены все подстроки-палиндромы",
      },
      {
        input: '"abc"',
        output: '["a", "b", "c"]',
        explanation: "Найдены все подстроки-палиндромы",
      },
    ],
  },
  {
    id: "52",
    title: "Найти наибольшую возрастающую подпоследовательность",
    description:
      "Напишите функцию, которая находит длину наибольшей возрастающей подпоследовательности в массиве.",
    difficulty: "medium",
    category: "Массивы",
    template: `function lengthOfLIS(nums) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[10, 9, 2, 5, 3, 7, 101, 18]",
        output: "4",
        explanation: "Наибольшая возрастающая подпоследовательность: [2, 5, 7, 101]",
      },
      {
        input: "[0, 1, 0, 3, 2, 3]",
        output: "4",
        explanation: "Наибольшая возрастающая подпоследовательность: [0, 1, 2, 3]",
      },
    ],
  },
  {
    id: "53",
    title: "Проверить валидность скобок разных типов",
    description:
      "Напишите функцию, которая проверяет, правильно ли расставлены скобки разных типов (круглые, квадратные, фигурные).",
    difficulty: "medium",
    category: "Строки",
    template: `function isValidBrackets(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"()[]{}"',
        output: "true",
        explanation: "Скобки правильно расставлены",
      },
      {
        input: '"([)]"',
        output: "false",
        explanation: "Скобки расставлены неправильно",
      },
    ],
  },
  {
    id: "54",
    title: "Найти все возможные перестановки",
    description: "Напишите функцию, которая находит все возможные перестановки элементов массива.",
    difficulty: "medium",
    category: "Массивы",
    template: `function permute(nums) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1, 2, 3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        explanation: "Найдены все возможные перестановки",
      },
      {
        input: "[0, 1]",
        output: "[[0,1],[1,0]]",
        explanation: "Найдены все возможные перестановки",
      },
    ],
  },
  {
    id: "55",
    title: "Найти медиану двух отсортированных массивов",
    description: "Напишите функцию, которая находит медиану двух отсортированных массивов.",
    difficulty: "medium",
    category: "Массивы",
    template: `function findMedianSortedArrays(nums1, nums2) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[[1,3], [2]]",
        output: "2.0",
        explanation: "Медиана объединенного массива [1,2,3] равна 2",
      },
      {
        input: "[[1,2], [3,4]]",
        output: "2.5",
        explanation: "Медиана объединенного массива [1,2,3,4] равна 2.5",
      },
    ],
  },
  {
    id: "56",
    title: "Найти все возможные комбинации",
    description:
      "Напишите функцию, которая находит все возможные комбинации k чисел из набора чисел от 1 до n.",
    difficulty: "medium",
    category: "Математика",
    template: `function combine(n, k) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[4, 2]",
        output: "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
        explanation: "Найдены все комбинации 2 чисел из 4",
      },
      {
        input: "[1, 1]",
        output: "[[1]]",
        explanation: "Найдена единственная комбинация",
      },
    ],
  },
  {
    id: "57",
    title: "Проверить валидность судоку",
    description: "Напишите функцию, которая проверяет, является ли заполнение судоку валидным.",
    difficulty: "medium",
    category: "Массивы",
    template: `function isValidSudoku(board) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input:
          '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: "true",
        explanation: "Валидное заполнение судоку",
      },
      {
        input:
          '[["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: "false",
        explanation: "Невалидное заполнение судоку",
      },
    ],
  },
  {
    id: "58",
    title: "Найти все возможные пути",
    description:
      "Напишите функцию, которая находит все возможные пути от верхнего левого угла до нижнего правого в сетке.",
    difficulty: "medium",
    category: "Математика",
    template: `function uniquePaths(m, n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[3, 7]",
        output: "28",
        explanation: "Количество уникальных путей в сетке 3x7",
      },
      {
        input: "[3, 2]",
        output: "3",
        explanation: "Количество уникальных путей в сетке 3x2",
      },
    ],
  },
  {
    id: "59",
    title: "Найти минимальную сумму пути",
    description:
      "Напишите функцию, которая находит минимальную сумму пути от верхнего левого угла до нижнего правого в сетке с числами.",
    difficulty: "medium",
    category: "Массивы",
    template: `function minPathSum(grid) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[[1,3,1],[1,5,1],[4,2,1]]",
        output: "7",
        explanation: "Путь 1→3→1→1→1 имеет минимальную сумму 7",
      },
      {
        input: "[[1,2,3],[4,5,6]]",
        output: "12",
        explanation: "Путь 1→2→3→6 имеет минимальную сумму 12",
      },
    ],
  },
  {
    id: "60",
    title: "Проверить валидность IP-адреса IPv6",
    description: "Напишите функцию, которая проверяет, является ли строка валидным IPv6 адресом.",
    difficulty: "medium",
    category: "Строки",
    template: `function isValidIPv6(ip) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"2001:0db8:85a3:0000:0000:8a2e:0370:7334"',
        output: "true",
        explanation: "Валидный IPv6 адрес",
      },
      {
        input: '"2001:0db8:85a3::8a2e:0370:7334"',
        output: "true",
        explanation: "Валидный IPv6 адрес с сокращением",
      },
    ],
  },
  {
    id: "61",
    title: "Найти все возможные разбиения строки",
    description: "Напишите функцию, которая находит все возможные разбиения строки на палиндромы.",
    difficulty: "medium",
    category: "Строки",
    template: `function partition(s) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"aab"',
        output: '[["a","a","b"],["aa","b"]]',
        explanation: "Найдены все возможные разбиения на палиндромы",
      },
      {
        input: '"a"',
        output: '[["a"]]',
        explanation: "Единственное возможное разбиение",
      },
    ],
  },
  {
    id: "62",
    title: "Найти все возможные комбинации сумм",
    description:
      "Напишите функцию, которая находит все возможные комбинации чисел из массива, дающие заданную сумму.",
    difficulty: "medium",
    category: "Массивы",
    template: `function combinationSum(candidates, target) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[2,3,6,7], 7]",
        output: "[[2,2,3],[7]]",
        explanation: "Найдены все комбинации, дающие сумму 7",
      },
      {
        input: "[[2,3,5], 8]",
        output: "[[2,2,2,2],[2,3,3],[3,5]]",
        explanation: "Найдены все комбинации, дающие сумму 8",
      },
    ],
  },
  {
    id: "63",
    title: "Проверить валидность математического выражения",
    description:
      "Напишите функцию, которая проверяет, является ли строка валидным математическим выражением.",
    difficulty: "medium",
    category: "Строки",
    template: `function isValidExpression(expr) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"2 + 3 * 4"',
        output: "true",
        explanation: "Валидное математическое выражение",
      },
      {
        input: '"2 + * 3"',
        output: "false",
        explanation: "Невалидное математическое выражение",
      },
    ],
  },
  {
    id: "64",
    title: "Найти все возможные перестановки с повторениями",
    description:
      "Напишите функцию, которая находит все возможные перестановки элементов массива с учетом повторений.",
    difficulty: "medium",
    category: "Массивы",
    template: `function permuteUnique(nums) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,1,2]",
        output: "[[1,1,2],[1,2,1],[2,1,1]]",
        explanation: "Найдены все уникальные перестановки",
      },
      {
        input: "[1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        explanation: "Найдены все уникальные перестановки",
      },
    ],
  },
  {
    id: "65",
    title: "Найти все возможные пути в лабиринте",
    description:
      "Напишите функцию, которая находит все возможные пути от входа до выхода в лабиринте.",
    difficulty: "medium",
    category: "Массивы",
    template: `function findPaths(maze) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[0,0,0],[0,1,0],[0,0,0]]",
        output: "2",
        explanation: "Найдены все возможные пути в лабиринте",
      },
      {
        input: "[[0,1],[0,0]]",
        output: "1",
        explanation: "Найден единственный возможный путь",
      },
    ],
  },
  {
    id: "66",
    title: "Проверить валидность JSON",
    description: "Напишите функцию, которая проверяет, является ли строка валидным JSON.",
    difficulty: "medium",
    category: "Строки",
    template: `function isValidJSON(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"{\"name\": \"John\", \"age\": 30}"',
        output: "true",
        explanation: "Валидный JSON",
      },
      {
        input: '"{\"name\": \"John\", age: 30}"',
        output: "false",
        explanation: "Невалидный JSON",
      },
    ],
  },
  {
    id: "67",
    title: "Найти все возможные разбиения числа",
    description: "Напишите функцию, которая находит все возможные разбиения числа на слагаемые.",
    difficulty: "medium",
    category: "Математика",
    template: `function partitionNumber(n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "4",
        output: "[[4],[3,1],[2,2],[2,1,1],[1,1,1,1]]",
        explanation: "Найдены все возможные разбиения числа 4",
      },
      {
        input: "3",
        output: "[[3],[2,1],[1,1,1]]",
        explanation: "Найдены все возможные разбиения числа 3",
      },
    ],
  },
  {
    id: "68",
    title: "Проверить валидность XML",
    description: "Напишите функцию, которая проверяет, является ли строка валидным XML документом.",
    difficulty: "medium",
    category: "Строки",
    template: `function isValidXML(xml) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"<root><child>text</child></root>"',
        output: "true",
        explanation: "Валидный XML",
      },
      {
        input: '"<root><child>text</root>"',
        output: "false",
        explanation: "Невалидный XML",
      },
    ],
  },
  {
    id: "69",
    title: "Найти все возможные комбинации скобок",
    description:
      "Напишите функцию, которая генерирует все возможные комбинации правильно расставленных скобок.",
    difficulty: "medium",
    category: "Строки",
    template: `function generateParentheses(n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "3",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
        explanation: "Найдены все возможные комбинации скобок",
      },
      {
        input: "2",
        output: '["(())","()()"]',
        explanation: "Найдены все возможные комбинации скобок",
      },
    ],
  },
  {
    id: "70",
    title: "Найти все возможные пути в графе",
    description:
      "Напишите функцию, которая находит все возможные пути между двумя вершинами в графе.",
    difficulty: "medium",
    category: "Массивы",
    template: `function findAllPaths(graph, start, end) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[3],[3],[]], 0, 3",
        output: "[[0,1,3],[0,2,3]]",
        explanation: "Найдены все возможные пути от 0 до 3",
      },
      {
        input: "[[4,3,1],[3,2,4],[3],[4],[]], 0, 4",
        output: "[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]",
        explanation: "Найдены все возможные пути от 0 до 4",
      },
    ],
  },
  {
    id: "71",
    title: "Проверить валидность регулярного выражения",
    description:
      "Напишите функцию, которая проверяет, является ли строка валидным регулярным выражением.",
    difficulty: "medium",
    category: "Строки",
    template: `function isValidRegex(pattern) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '"a*b+c?"',
        output: "true",
        explanation: "Валидное регулярное выражение",
      },
      {
        input: '"a**b"',
        output: "false",
        explanation: "Невалидное регулярное выражение",
      },
    ],
  },
  {
    id: "72",
    title: "Найти все возможные разбиения массива",
    description:
      "Напишите функцию, которая находит все возможные разбиения массива на подмассивы с равной суммой.",
    difficulty: "medium",
    category: "Массивы",
    template: `function canPartition(nums) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "[1,5,11,5]",
        output: "true",
        explanation: "Массив можно разбить на [1,5,5] и [11]",
      },
      {
        input: "[1,2,3,5]",
        output: "false",
        explanation: "Массив нельзя разбить на части с равной суммой",
      },
    ],
  },
  {
    id: "73",
    title: "Проверить валидность CSS селектора",
    description: "Напишите функцию, которая проверяет, является ли строка валидным CSS селектором.",
    difficulty: "medium",
    category: "Строки",
    template: `function isValidCSSSelector(selector) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: '".class"',
        output: "true",
        explanation: "Валидный CSS селектор",
      },
      {
        input: '"#id"',
        output: "true",
        explanation: "Валидный CSS селектор",
      },
    ],
  },
  {
    id: "74",
    title: "Найти все возможные комбинации букв",
    description:
      "Напишите функцию, которая находит все возможные комбинации букв для заданного номера телефона.",
    difficulty: "medium",
    category: "Строки",
    template: `function letterCombinations(digits) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"23"',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
        explanation: "Найдены все возможные комбинации букв",
      },
      {
        input: '""',
        output: "[]",
        explanation: "Пустой ввод",
      },
    ],
  },
  {
    id: "75",
    title: "Найти все возможные пути в матрице",
    description: "Напишите функцию, которая находит все возможные пути в матрице с препятствиями.",
    difficulty: "medium",
    category: "Массивы",
    template: `function uniquePathsWithObstacles(obstacleGrid) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[[0,0,0],[0,1,0],[0,0,0]]",
        output: "2",
        explanation: "Найдены все возможные пути",
      },
      {
        input: "[[0,1],[0,0]]",
        output: "1",
        explanation: "Найден единственный возможный путь",
      },
    ],
  },
  {
    id: "76",
    title: "Найти все возможные разбиения строки на слова",
    description:
      "Напишите функцию, которая находит все возможные разбиения строки на слова из заданного словаря.",
    difficulty: "medium",
    category: "Строки",
    template: `function wordBreak(s, wordDict) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"catsanddog", ["cat","cats","and","sand","dog"]',
        output: '["cats and dog","cat sand dog"]',
        explanation: "Найдены все возможные разбиения строки",
      },
      {
        input: '"pineapplepenapple", ["apple","pen","applepen","pine","pineapple"]',
        output: '["pine apple pen apple","pineapple pen apple","pine applepen apple"]',
        explanation: "Найдены все возможные разбиения строки",
      },
    ],
  },
  {
    id: "77",
    title: "Найти все возможные пути в дереве",
    description:
      "Напишите функцию, которая находит все пути в бинарном дереве, сумма значений которых равна заданному числу.",
    difficulty: "medium",
    category: "Деревья",
    template: `function pathSum(root, targetSum) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[5,4,8,11,null,13,4,7,2,null,null,5,1], 22",
        output: "[[5,4,11,2],[5,8,4,5]]",
        explanation: "Найдены все пути с суммой 22",
      },
      {
        input: "[1,2,3], 5",
        output: "[]",
        explanation: "Нет путей с суммой 5",
      },
    ],
  },
  {
    id: "78",
    title: "Найти все возможные комбинации чисел",
    description:
      "Напишите функцию, которая находит все возможные комбинации k чисел из набора чисел, дающие заданную сумму.",
    difficulty: "medium",
    category: "Массивы",
    template: `function combinationSum3(k, n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[3, 7]",
        output: "[[1,2,4]]",
        explanation: "Единственная комбинация 3 чисел с суммой 7",
      },
      {
        input: "[3, 9]",
        output: "[[1,2,6],[1,3,5],[2,3,4]]",
        explanation: "Найдены все комбинации 3 чисел с суммой 9",
      },
    ],
  },
  {
    id: "79",
    title: "Найти все возможные перестановки с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные перестановки массива с учетом ограничений на соседние элементы.",
    difficulty: "medium",
    category: "Массивы",
    template: `function permuteWithConstraints(nums) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        explanation: "Найдены все возможные перестановки",
      },
      {
        input: "[1,1,2]",
        output: "[[1,1,2],[1,2,1],[2,1,1]]",
        explanation: "Найдены все уникальные перестановки",
      },
    ],
  },
  {
    id: "80",
    title: "Найти все возможные пути в графе с весами",
    description:
      "Напишите функцию, которая находит все возможные пути между двумя вершинами в графе с весами, сумма которых не превышает заданное значение.",
    difficulty: "medium",
    category: "Графы",
    template: `function findPathsWithWeight(graph, start, end, maxWeight) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[[1,2],[2,3]], 0, 3, 5]",
        output: "[[0,1,3],[0,2,3]]",
        explanation: "Найдены все пути с суммой весов <= 5",
      },
      {
        input: "[[[1,2],[2,3]], 0, 3, 3]",
        output: "[[0,1,3]]",
        explanation: "Найден единственный путь с суммой весов <= 3",
      },
    ],
  },
  {
    id: "81",
    title: "Найти все возможные разбиения массива на подмассивы",
    description:
      "Напишите функцию, которая находит все возможные разбиения массива на подмассивы с заданным максимальным размером.",
    difficulty: "medium",
    category: "Массивы",
    template: `function partitionArray(nums, maxSize) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], 2",
        output: "[[[1,2],[3,4]],[[1],[2,3],[4]],[[1,2,3],[4]]]",
        explanation: "Найдены все возможные разбиения",
      },
      {
        input: "[1,2,3], 1",
        output: "[[[1],[2],[3]]]",
        explanation: "Единственное возможное разбиение",
      },
    ],
  },
  {
    id: "82",
    title: "Найти все возможные комбинации скобок с ограничениями",
    description:
      "Напишите функцию, которая генерирует все возможные комбинации скобок с заданным максимальным уровнем вложенности.",
    difficulty: "medium",
    category: "Строки",
    template: `function generateParenthesesWithDepth(n, maxDepth) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[3, 2]",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
        explanation: "Найдены все комбинации с глубиной <= 2",
      },
      {
        input: "[2, 1]",
        output: '["()()"]',
        explanation: "Единственная комбинация с глубиной <= 1",
      },
    ],
  },
  {
    id: "83",
    title: "Найти все возможные пути в матрице с препятствиями",
    description:
      "Напишите функцию, которая находит все возможные пути в матрице с препятствиями, проходящие через заданные точки.",
    difficulty: "medium",
    category: "Массивы",
    template: `function findPathsWithPoints(grid, points) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[0,0,0],[0,1,0],[0,0,0]], [[0,0],[2,2]]",
        output: "2",
        explanation: "Найдены все пути через заданные точки",
      },
      {
        input: "[[0,1],[0,0]], [[0,0],[1,1]]",
        output: "1",
        explanation: "Найден единственный путь через заданные точки",
      },
    ],
  },
  {
    id: "84",
    title: "Найти все возможные разбиения числа на простые множители",
    description:
      "Напишите функцию, которая находит все возможные разбиения числа на простые множители.",
    difficulty: "medium",
    category: "Математика",
    template: `function primeFactors(n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "12",
        output: "[[2,2,3]]",
        explanation: "Разложение на простые множители",
      },
      {
        input: "15",
        output: "[[3,5]]",
        explanation: "Разложение на простые множители",
      },
    ],
  },
  {
    id: "85",
    title: "Найти все возможные комбинации букв с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные комбинации букв, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Строки",
    template: `function generateCombinationsWithConstraints(n, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "3, {maxVowels: 1}",
        output: '["abc","abd","abe","acd","ace","ade","bcd","bce","bde","cde"]',
        explanation: "Найдены все комбинации с ограничением на гласные",
      },
      {
        input: "2, {maxVowels: 0}",
        output: '["bc","bd","cd"]',
        explanation: "Найдены все комбинации без гласных",
      },
    ],
  },
  {
    id: "86",
    title: "Найти все возможные пути в дереве с ограничениями",
    description:
      "Напишите функцию, которая находит все пути в дереве, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Деревья",
    template: `function findPathsWithConstraints(root, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[5,4,8,11,null,13,4,7,2,null,null,5,1], {minSum: 20, maxSum: 25}",
        output: "[[5,4,11,2],[5,8,4,5]]",
        explanation: "Найдены все пути с суммой в заданном диапазоне",
      },
      {
        input: "[1,2,3], {minSum: 3, maxSum: 5}",
        output: "[[1,2],[1,3]]",
        explanation: "Найдены все пути с суммой в заданном диапазоне",
      },
    ],
  },
  {
    id: "87",
    title: "Найти все возможные разбиения строки на палиндромы с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные разбиения строки на палиндромы с заданным максимальным размером.",
    difficulty: "medium",
    category: "Строки",
    template: `function partitionPalindromeWithSize(s, maxSize) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"aab", 2',
        output: '[["a","a","b"],["aa","b"]]',
        explanation: "Найдены все разбиения с максимальным размером 2",
      },
      {
        input: '"a", 1',
        output: '[["a"]]',
        explanation: "Единственное возможное разбиение",
      },
    ],
  },
  {
    id: "88",
    title: "Найти все возможные комбинации чисел с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные комбинации чисел, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Массивы",
    template: `function findCombinationsWithConstraints(nums, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {minSum: 5, maxSum: 7}",
        output: "[[1,4],[2,3],[2,4],[3,4]]",
        explanation: "Найдены все комбинации с суммой в заданном диапазоне",
      },
      {
        input: "[1,2,3], {minSum: 3, maxSum: 4}",
        output: "[[1,2],[1,3]]",
        explanation: "Найдены все комбинации с суммой в заданном диапазоне",
      },
    ],
  },
  {
    id: "89",
    title: "Найти все возможные пути в графе с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные пути в графе, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Графы",
    template: `function findPathsWithGraphConstraints(graph, start, end, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[3],[3],[]], 0, 3, {maxLength: 3}",
        output: "[[0,1,3],[0,2,3]]",
        explanation: "Найдены все пути длиной <= 3",
      },
      {
        input: "[[1,2],[3],[3],[]], 0, 3, {maxLength: 2}",
        output: "[]",
        explanation: "Нет путей длиной <= 2",
      },
    ],
  },
  {
    id: "90",
    title: "Найти все возможные разбиения массива на подмассивы с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные разбиения массива на подмассивы, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Массивы",
    template: `function partitionArrayWithConstraints(nums, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {maxSize: 2, minSum: 3}",
        output: "[[[1,2],[3,4]],[[1,3],[2,4]]]",
        explanation: "Найдены все разбиения с заданными ограничениями",
      },
      {
        input: "[1,2,3], {maxSize: 1, minSum: 2}",
        output: "[[[1],[2],[3]]]",
        explanation: "Единственное возможное разбиение",
      },
    ],
  },
  {
    id: "91",
    title: "Найти все возможные комбинации скобок с ограничениями",
    description:
      "Напишите функцию, которая генерирует все возможные комбинации скобок, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Строки",
    template: `function generateParenthesesWithConstraints(n, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "3, {maxDepth: 2}",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
        explanation: "Найдены все комбинации с глубиной <= 2",
      },
      {
        input: "2, {maxDepth: 1}",
        output: '["()()"]',
        explanation: "Единственная комбинация с глубиной <= 1",
      },
    ],
  },
  {
    id: "92",
    title: "Найти все возможные пути в матрице с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные пути в матрице, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Массивы",
    template: `function findMatrixPathsWithConstraints(grid, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[0,0,0],[0,1,0],[0,0,0]], {maxLength: 4}",
        output: "2",
        explanation: "Найдены все пути длиной <= 4",
      },
      {
        input: "[[0,1],[0,0]], {maxLength: 2}",
        output: "1",
        explanation: "Найден единственный путь длиной <= 2",
      },
    ],
  },
  {
    id: "93",
    title: "Найти все возможные разбиения числа на слагаемые с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные разбиения числа на слагаемые, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Математика",
    template: `function partitionNumberWithConstraints(n, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "4, {maxParts: 3}",
        output: "[[4],[3,1],[2,2],[2,1,1]]",
        explanation: "Найдены все разбиения с максимальным количеством частей 3",
      },
      {
        input: "3, {maxParts: 2}",
        output: "[[3],[2,1]]",
        explanation: "Найдены все разбиения с максимальным количеством частей 2",
      },
    ],
  },
  {
    id: "94",
    title: "Найти все возможные комбинации букв с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные комбинации букв, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Строки",
    template: `function findLetterCombinationsWithConstraints(digits, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"23", {maxLength: 2}',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
        explanation: "Найдены все комбинации длиной <= 2",
      },
      {
        input: '"2", {maxLength: 1}',
        output: '["a","b","c"]',
        explanation: "Найдены все комбинации длиной <= 1",
      },
    ],
  },
  {
    id: "95",
    title: "Найти все возможные пути в дереве с ограничениями",
    description:
      "Напишите функцию, которая находит все пути в дереве, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Деревья",
    template: `function findTreePathsWithConstraints(root, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[5,4,8,11,null,13,4,7,2,null,null,5,1], {minLength: 3}",
        output: "[[5,4,11],[5,8,4]]",
        explanation: "Найдены все пути длиной >= 3",
      },
      {
        input: "[1,2,3], {minLength: 2}",
        output: "[[1,2],[1,3]]",
        explanation: "Найдены все пути длиной >= 2",
      },
    ],
  },
  {
    id: "96",
    title: "Найти все возможные разбиения строки на слова с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные разбиения строки на слова из словаря, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Строки",
    template: `function wordBreakWithConstraints(s, wordDict, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"catsanddog", ["cat","cats","and","sand","dog"], {maxWords: 3}',
        output: '["cat sand dog"]',
        explanation: "Найдены все разбиения с максимальным количеством слов 3",
      },
      {
        input: '"pineapplepenapple", ["apple","pen","applepen","pine","pineapple"], {maxWords: 2}',
        output: '["pineapple pen apple"]',
        explanation: "Найдены все разбиения с максимальным количеством слов 2",
      },
    ],
  },
  {
    id: "97",
    title: "Найти все возможные комбинации чисел с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные комбинации чисел, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Массивы",
    template: `function findNumberCombinationsWithConstraints(nums, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {minSum: 5, maxSum: 7, maxLength: 2}",
        output: "[[1,4],[2,3],[2,4],[3,4]]",
        explanation: "Найдены все комбинации с заданными ограничениями",
      },
      {
        input: "[1,2,3], {minSum: 3, maxSum: 4, maxLength: 1}",
        output: "[[3],[4]]",
        explanation: "Найдены все комбинации с заданными ограничениями",
      },
    ],
  },
  {
    id: "98",
    title: "Найти все возможные пути в графе с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные пути в графе, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Графы",
    template: `function findGraphPathsWithConstraints(graph, start, end, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[3],[3],[]], 0, 3, {maxLength: 3, minLength: 2}",
        output: "[[0,1,3],[0,2,3]]",
        explanation: "Найдены все пути с длиной от 2 до 3",
      },
      {
        input: "[[1,2],[3],[3],[]], 0, 3, {maxLength: 2, minLength: 2}",
        output: "[]",
        explanation: "Нет путей длиной 2",
      },
    ],
  },
  {
    id: "99",
    title: "Найти все возможные разбиения массива на подмассивы с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные разбиения массива на подмассивы, удовлетворяющие заданным ограничениям.",
    difficulty: "medium",
    category: "Массивы",
    template: `function partitionArrayWithComplexConstraints(nums, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {maxSize: 2, minSum: 3, maxSum: 7}",
        output: "[[[1,2],[3,4]],[[1,3],[2,4]]]",
        explanation: "Найдены все разбиения с заданными ограничениями",
      },
      {
        input: "[1,2,3], {maxSize: 1, minSum: 2, maxSum: 3}",
        output: "[[[2],[3]]]",
        explanation: "Найдены все разбиения с заданными ограничениями",
      },
    ],
  },
  {
    id: "100",
    title: "Найти все возможные комбинации скобок с комплексными ограничениями",
    description:
      "Напишите функцию, которая генерирует все возможные комбинации скобок, удовлетворяющие заданным комплексным ограничениям.",
    difficulty: "medium",
    category: "Строки",
    template: `function generateParenthesesWithComplexConstraints(n, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "3, {maxDepth: 2, minDepth: 1}",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
        explanation: "Найдены все комбинации с глубиной от 1 до 2",
      },
      {
        input: "2, {maxDepth: 1, minDepth: 1}",
        output: '["()()"]',
        explanation: "Единственная комбинация с глубиной 1",
      },
    ],
  },
  {
    id: "101",
    title: "Найти все возможные пути в графе с отрицательными весами",
    description:
      "Напишите функцию, которая находит все возможные пути между двумя вершинами в графе с отрицательными весами, используя алгоритм Беллмана-Форда.",
    difficulty: "hard",
    category: "Графы",
    template: `function findPathsWithNegativeWeights(graph, start, end) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[[1,-2],[2,3]], 0, 2]",
        output: "[[0,1,2]]",
        explanation: "Найден путь с учетом отрицательных весов",
      },
      {
        input: "[[[1,-1],[2,-2]], 0, 2]",
        output: "[]",
        explanation: "Нет пути из-за отрицательного цикла",
      },
    ],
  },
  {
    id: "102",
    title: "Найти максимальный поток в сети",
    description:
      "Напишите функцию, которая находит максимальный поток в сети, используя алгоритм Форда-Фалкерсона.",
    difficulty: "hard",
    category: "Графы",
    template: `function findMaxFlow(graph, source, sink) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[[[1,16],[2,13]],[[2,12],[3,20]],[[3,9],[4,4]],[[4,14],[5,0]],[[5,0],[0,0]]], 0, 5",
        output: "23",
        explanation: "Максимальный поток в сети",
      },
      {
        input: "[[[1,10],[2,8]],[[2,2],[3,4]],[[3,9],[0,0]]], 0, 3",
        output: "12",
        explanation: "Максимальный поток в сети",
      },
    ],
  },
  {
    id: "103",
    title: "Найти минимальное остовное дерево",
    description:
      "Напишите функцию, которая находит минимальное остовное дерево в графе, используя алгоритм Крускала.",
    difficulty: "hard",
    category: "Графы",
    template: `function findMinimumSpanningTree(graph) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[[1,4],[2,3]],[[2,1],[3,2]],[[3,5],[0,0]]]",
        output: "[[0,2],[1,2],[1,3]]",
        explanation: "Найдено минимальное остовное дерево",
      },
      {
        input: "[[[1,2],[2,3]],[[2,1],[3,4]],[[3,5],[0,0]]]",
        output: "[[0,1],[1,2],[2,3]]",
        explanation: "Найдено минимальное остовное дерево",
      },
    ],
  },
  {
    id: "104",
    title: "Найти все возможные пути в графе с ограничениями на время",
    description:
      "Напишите функцию, которая находит все возможные пути в графе с учетом временных ограничений на прохождение ребер.",
    difficulty: "hard",
    category: "Графы",
    template: `function findPathsWithTimeConstraints(graph, start, end, timeLimit) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[[1,2,5],[2,3,10]],[[2,4,15],[3,5,20]],[[3,6,25],[0,0,0]]], 0, 6, 30",
        output: "[[0,1,2,3,6]]",
        explanation: "Найден путь с учетом временных ограничений",
      },
      {
        input: "[[[1,2,5],[2,3,10]],[[2,4,15],[3,5,20]],[[3,6,25],[0,0,0]]], 0, 6, 20",
        output: "[]",
        explanation: "Нет пути, удовлетворяющего временным ограничениям",
      },
    ],
  },
  {
    id: "105",
    title: "Найти все возможные разбиения строки на слова с учетом контекста",
    description:
      "Напишите функцию, которая находит все возможные разбиения строки на слова из словаря с учетом контекстных ограничений.",
    difficulty: "hard",
    category: "Строки",
    template: `function wordBreakWithContext(s, wordDict, context) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"catsanddog", ["cat","cats","and","sand","dog"], {maxWords: 3, minLength: 3}',
        output: '["cat sand dog"]',
        explanation: "Найдены разбиения с учетом контекстных ограничений",
      },
      {
        input:
          '"pineapplepenapple", ["apple","pen","applepen","pine","pineapple"], {maxWords: 2, minLength: 4}',
        output: '["pineapple pen apple"]',
        explanation: "Найдены разбиения с учетом контекстных ограничений",
      },
    ],
  },
  {
    id: "106",
    title: "Найти все возможные пути в дереве с ограничениями на сумму и глубину",
    description:
      "Напишите функцию, которая находит все пути в дереве, удовлетворяющие ограничениям на сумму значений и глубину.",
    difficulty: "hard",
    category: "Деревья",
    template: `function findTreePathsWithComplexConstraints(root, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[5,4,8,11,null,13,4,7,2,null,null,5,1], {minSum: 20, maxSum: 25, maxDepth: 3}",
        output: "[[5,4,11],[5,8,4]]",
        explanation: "Найдены пути с учетом ограничений на сумму и глубину",
      },
      {
        input: "[1,2,3], {minSum: 3, maxSum: 5, maxDepth: 2}",
        output: "[[1,2],[1,3]]",
        explanation: "Найдены пути с учетом ограничений на сумму и глубину",
      },
    ],
  },
  {
    id: "107",
    title: "Найти все возможные комбинации чисел с ограничениями на сумму и произведение",
    description:
      "Напишите функцию, которая находит все возможные комбинации чисел, удовлетворяющие ограничениям на сумму и произведение.",
    difficulty: "hard",
    category: "Массивы",
    template: `function findCombinationsWithProductConstraints(nums, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {minSum: 5, maxSum: 7, minProduct: 4, maxProduct: 12}",
        output: "[[1,4],[2,3]]",
        explanation: "Найдены комбинации с учетом ограничений на сумму и произведение",
      },
      {
        input: "[1,2,3], {minSum: 3, maxSum: 4, minProduct: 2, maxProduct: 6}",
        output: "[[1,3]]",
        explanation: "Найдены комбинации с учетом ограничений на сумму и произведение",
      },
    ],
  },
  {
    id: "108",
    title: "Найти все возможные пути в матрице с динамическими препятствиями",
    description:
      "Напишите функцию, которая находит все возможные пути в матрице с препятствиями, которые могут изменяться со временем.",
    difficulty: "hard",
    category: "Массивы",
    template: `function findPathsWithDynamicObstacles(grid, timeSteps) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[[0,0,0],[0,1,0],[0,0,0]], [[0,1,0],[0,0,0],[0,0,0]]]",
        output: "[[[0,0],[0,1],[1,1],[2,1],[2,2]]]",
        explanation: "Найден путь с учетом динамических препятствий",
      },
      {
        input: "[[[0,1],[0,0]], [[1,0],[0,0]]]",
        output: "[]",
        explanation: "Нет пути из-за динамических препятствий",
      },
    ],
  },
  {
    id: "109",
    title: "Найти все возможные разбиения числа на простые множители с ограничениями",
    description:
      "Напишите функцию, которая находит все возможные разбиения числа на простые множители с учетом дополнительных ограничений.",
    difficulty: "hard",
    category: "Математика",
    template: `function primeFactorsWithConstraints(n, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "12, {maxFactors: 3, minFactor: 2}",
        output: "[[2,2,3]]",
        explanation: "Найдены разбиения с учетом ограничений",
      },
      {
        input: "15, {maxFactors: 2, minFactor: 3}",
        output: "[[3,5]]",
        explanation: "Найдены разбиения с учетом ограничений",
      },
    ],
  },
  {
    id: "110",
    title: "Найти все возможные комбинации букв с учетом грамматических правил",
    description:
      "Напишите функцию, которая находит все возможные комбинации букв, удовлетворяющие заданным грамматическим правилам.",
    difficulty: "hard",
    category: "Строки",
    template: `function generateCombinationsWithGrammar(digits, grammarRules) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"23", {maxVowels: 1, maxConsonants: 2}',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
        explanation: "Найдены комбинации с учетом грамматических правил",
      },
      {
        input: '"2", {maxVowels: 0, maxConsonants: 1}',
        output: '["b","c"]',
        explanation: "Найдены комбинации с учетом грамматических правил",
      },
    ],
  },
  {
    id: "111",
    title: "Найти все возможные пути в графе с ограничениями на ресурсы",
    description:
      "Напишите функцию, которая находит все возможные пути в графе с учетом ограничений на ресурсы, необходимые для прохождения ребер.",
    difficulty: "hard",
    category: "Графы",
    template: `function findPathsWithResourceConstraints(graph, start, end, resources) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[[1,2,5],[2,3,10]],[[2,4,15],[3,5,20]],[[3,6,25],[0,0,0]]], 0, 6, 30",
        output: "[[0,1,2,3,6]]",
        explanation: "Найден путь с учетом ограничений на ресурсы",
      },
      {
        input: "[[[1,2,5],[2,3,10]],[[2,4,15],[3,5,20]],[[3,6,25],[0,0,0]]], 0, 6, 20",
        output: "[]",
        explanation: "Нет пути, удовлетворяющего ограничениям на ресурсы",
      },
    ],
  },
  {
    id: "112",
    title: "Найти все возможные разбиения массива на подмассивы с ограничениями на статистики",
    description:
      "Напишите функцию, которая находит все возможные разбиения массива на подмассивы с учетом ограничений на статистические показатели.",
    difficulty: "hard",
    category: "Массивы",
    template: `function partitionArrayWithStatistics(nums, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {maxSize: 2, minMean: 2, maxVariance: 1}",
        output: "[[[1,2],[3,4]]]",
        explanation: "Найдены разбиения с учетом статистических ограничений",
      },
      {
        input: "[1,2,3], {maxSize: 1, minMean: 2, maxVariance: 0.5}",
        output: "[[[2],[3]]]",
        explanation: "Найдены разбиения с учетом статистических ограничений",
      },
    ],
  },
  {
    id: "113",
    title: "Найти все возможные комбинации скобок с учетом приоритетов операций",
    description:
      "Напишите функцию, которая генерирует все возможные комбинации скобок с учетом приоритетов математических операций.",
    difficulty: "hard",
    category: "Строки",
    template: `function generateParenthesesWithPriority(n, operations) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "3, {multiply: 2, add: 1}",
        output: '["((a*b)+c)","(a*(b+c))"]',
        explanation: "Найдены комбинации с учетом приоритетов операций",
      },
      {
        input: "2, {multiply: 1, add: 1}",
        output: '["(a+b)"]',
        explanation: "Найдены комбинации с учетом приоритетов операций",
      },
    ],
  },
  {
    id: "114",
    title: "Найти все возможные пути в матрице с ограничениями на повороты",
    description:
      "Напишите функцию, которая находит все возможные пути в матрице с учетом ограничений на количество поворотов.",
    difficulty: "hard",
    category: "Массивы",
    template: `function findPathsWithTurnConstraints(grid, maxTurns) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[0,0,0],[0,1,0],[0,0,0]], 2",
        output: "[[[0,0],[0,1],[1,1],[2,1],[2,2]]]",
        explanation: "Найден путь с учетом ограничений на повороты",
      },
      {
        input: "[[0,1],[0,0]], 1",
        output: "[]",
        explanation: "Нет пути, удовлетворяющего ограничениям на повороты",
      },
    ],
  },
  {
    id: "115",
    title: "Найти все возможные разбиения числа на слагаемые с ограничениями на последовательность",
    description:
      "Напишите функцию, которая находит все возможные разбиения числа на слагаемые с учетом ограничений на последовательность чисел.",
    difficulty: "hard",
    category: "Математика",
    template: `function partitionNumberWithSequenceConstraints(n, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "4, {maxParts: 3, minDifference: 1}",
        output: "[[4],[3,1],[2,2]]",
        explanation: "Найдены разбиения с учетом ограничений на последовательность",
      },
      {
        input: "3, {maxParts: 2, minDifference: 2}",
        output: "[[3],[2,1]]",
        explanation: "Найдены разбиения с учетом ограничений на последовательность",
      },
    ],
  },
  {
    id: "116",
    title: "Найти все возможные комбинации букв с учетом фонетических правил",
    description:
      "Напишите функцию, которая находит все возможные комбинации букв, удовлетворяющие заданным фонетическим правилам.",
    difficulty: "hard",
    category: "Строки",
    template: `function generateCombinationsWithPhonetics(digits, phoneticRules) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"23", {maxVowels: 1, maxConsonants: 2, noDoubleConsonants: true}',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
        explanation: "Найдены комбинации с учетом фонетических правил",
      },
      {
        input: '"2", {maxVowels: 0, maxConsonants: 1, noDoubleConsonants: true}',
        output: '["b","c"]',
        explanation: "Найдены комбинации с учетом фонетических правил",
      },
    ],
  },
  {
    id: "117",
    title: "Найти все возможные пути в дереве с ограничениями на баланс",
    description:
      "Напишите функцию, которая находит все пути в дереве, удовлетворяющие ограничениям на баланс поддеревьев.",
    difficulty: "hard",
    category: "Деревья",
    template: `function findTreePathsWithBalanceConstraints(root, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[5,4,8,11,null,13,4,7,2,null,null,5,1], {maxHeightDifference: 1}",
        output: "[[5,4,11],[5,8,4]]",
        explanation: "Найдены пути с учетом ограничений на баланс",
      },
      {
        input: "[1,2,3], {maxHeightDifference: 0}",
        output: "[]",
        explanation: "Нет путей, удовлетворяющих ограничениям на баланс",
      },
    ],
  },
  {
    id: "118",
    title: "Найти все возможные разбиения строки на слова с учетом семантики",
    description:
      "Напишите функцию, которая находит все возможные разбиения строки на слова из словаря с учетом семантических ограничений.",
    difficulty: "hard",
    category: "Строки",
    template: `function wordBreakWithSemantics(s, wordDict, semanticRules) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input:
          '"catsanddog", ["cat","cats","and","sand","dog"], {maxWords: 3, minWordLength: 3, semanticValid: true}',
        output: '["cat sand dog"]',
        explanation: "Найдены разбиения с учетом семантических правил",
      },
      {
        input:
          '"pineapplepenapple", ["apple","pen","applepen","pine","pineapple"], {maxWords: 2, minWordLength: 4, semanticValid: true}',
        output: '["pineapple pen apple"]',
        explanation: "Найдены разбиения с учетом семантических правил",
      },
    ],
  },
  {
    id: "119",
    title: "Найти все возможные комбинации чисел с ограничениями на распределение",
    description:
      "Напишите функцию, которая находит все возможные комбинации чисел, удовлетворяющие ограничениям на распределение значений.",
    difficulty: "hard",
    category: "Массивы",
    template: `function findCombinationsWithDistribution(nums, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {minSum: 5, maxSum: 7, maxDeviation: 1}",
        output: "[[1,4],[2,3]]",
        explanation: "Найдены комбинации с учетом ограничений на распределение",
      },
      {
        input: "[1,2,3], {minSum: 3, maxSum: 4, maxDeviation: 0.5}",
        output: "[[1,3]]",
        explanation: "Найдены комбинации с учетом ограничений на распределение",
      },
    ],
  },
  {
    id: "120",
    title: "Найти все возможные пути в графе с ограничениями на пропускную способность",
    description:
      "Напишите функцию, которая находит все возможные пути в графе с учетом ограничений на пропускную способность ребер.",
    difficulty: "hard",
    category: "Графы",
    template: `function findPathsWithCapacityConstraints(graph, start, end, capacity) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[[1,2,5],[2,3,10]],[[2,4,15],[3,5,20]],[[3,6,25],[0,0,0]]], 0, 6, 30",
        output: "[[0,1,2,3,6]]",
        explanation: "Найден путь с учетом ограничений на пропускную способность",
      },
      {
        input: "[[[1,2,5],[2,3,10]],[[2,4,15],[3,5,20]],[[3,6,25],[0,0,0]]], 0, 6, 20",
        output: "[]",
        explanation: "Нет пути, удовлетворяющего ограничениям на пропускную способность",
      },
    ],
  },
  {
    id: "121",
    title: "Найти все возможные разбиения массива на подмассивы с ограничениями на корреляцию",
    description:
      "Напишите функцию, которая находит все возможные разбиения массива на подмассивы с учетом ограничений на корреляцию между элементами.",
    difficulty: "hard",
    category: "Массивы",
    template: `function partitionArrayWithCorrelation(nums, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {maxSize: 2, minCorrelation: 0.5}",
        output: "[[[1,2],[3,4]]]",
        explanation: "Найдены разбиения с учетом ограничений на корреляцию",
      },
      {
        input: "[1,2,3], {maxSize: 1, minCorrelation: 0.8}",
        output: "[]",
        explanation: "Нет разбиений, удовлетворяющих ограничениям на корреляцию",
      },
    ],
  },
  {
    id: "122",
    title: "Найти все возможные комбинации скобок с учетом ассоциативности операций",
    description:
      "Напишите функцию, которая генерирует все возможные комбинации скобок с учетом ассоциативности математических операций.",
    difficulty: "hard",
    category: "Строки",
    template: `function generateParenthesesWithAssociativity(n, operations) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "3, {add: true, multiply: true}",
        output: '["((a+b)+c)","(a+(b+c))","((a*b)*c)","(a*(b*c))"]',
        explanation: "Найдены комбинации с учетом ассоциативности операций",
      },
      {
        input: "2, {add: true, multiply: false}",
        output: '["(a+b)"]',
        explanation: "Найдены комбинации с учетом ассоциативности операций",
      },
    ],
  },
  {
    id: "123",
    title: "Найти все возможные пути в матрице с ограничениями на ускорение",
    description:
      "Напишите функцию, которая находит все возможные пути в матрице с учетом ограничений на ускорение движения.",
    difficulty: "hard",
    category: "Массивы",
    template: `function findPathsWithAccelerationConstraints(grid, maxAcceleration) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[0,0,0],[0,1,0],[0,0,0]], 2",
        output: "[[[0,0],[0,1],[1,1],[2,1],[2,2]]]",
        explanation: "Найден путь с учетом ограничений на ускорение",
      },
      {
        input: "[[0,1],[0,0]], 1",
        output: "[]",
        explanation: "Нет пути, удовлетворяющего ограничениям на ускорение",
      },
    ],
  },
  {
    id: "124",
    title: "Найти все возможные разбиения числа на слагаемые с ограничениями на прогрессию",
    description:
      "Напишите функцию, которая находит все возможные разбиения числа на слагаемые с учетом ограничений на арифметическую прогрессию.",
    difficulty: "hard",
    category: "Математика",
    template: `function partitionNumberWithProgressionConstraints(n, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "4, {maxParts: 3, minDifference: 1, maxDifference: 2}",
        output: "[[4],[3,1],[2,2]]",
        explanation: "Найдены разбиения с учетом ограничений на прогрессию",
      },
      {
        input: "3, {maxParts: 2, minDifference: 2, maxDifference: 3}",
        output: "[[3],[2,1]]",
        explanation: "Найдены разбиения с учетом ограничений на прогрессию",
      },
    ],
  },
  {
    id: "125",
    title: "Найти все возможные комбинации букв с учетом морфологических правил",
    description:
      "Напишите функцию, которая находит все возможные комбинации букв, удовлетворяющие заданным морфологическим правилам.",
    difficulty: "hard",
    category: "Строки",
    template: `function generateCombinationsWithMorphology(digits, morphologicalRules) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input:
          '"23", {maxVowels: 1, maxConsonants: 2, noDoubleConsonants: true, morphologicalValid: true}',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
        explanation: "Найдены комбинации с учетом морфологических правил",
      },
      {
        input:
          '"2", {maxVowels: 0, maxConsonants: 1, noDoubleConsonants: true, morphologicalValid: true}',
        output: '["b","c"]',
        explanation: "Найдены комбинации с учетом морфологических правил",
      },
    ],
  },
  {
    id: "126",
    title: "Найти гамильтонов путь в графе",
    description:
      "Напишите функцию, которая находит гамильтонов путь в графе (путь, проходящий через каждую вершину ровно один раз).",
    difficulty: "hard",
    category: "Графы",
    template: `function findHamiltonianPath(graph) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[0,2],[0,1]]",
        output: "[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]]",
        explanation: "Найдены все возможные гамильтоновы пути",
      },
      {
        input: "[[1],[0,2],[1]]",
        output: "[[0,1,2],[2,1,0]]",
        explanation: "Найдены все возможные гамильтоновы пути",
      },
    ],
  },
  {
    id: "127",
    title: "Найти эйлеров цикл в графе",
    description:
      "Напишите функцию, которая находит эйлеров цикл в графе (цикл, проходящий через каждое ребро ровно один раз).",
    difficulty: "hard",
    category: "Графы",
    template: `function findEulerianCircuit(graph) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[0,2],[0,1]]",
        output: "[[0,1,2,0]]",
        explanation: "Найден эйлеров цикл",
      },
      {
        input: "[[1,2],[0,2],[0,1,3],[2]]",
        output: "[]",
        explanation: "Эйлеров цикл не существует",
      },
    ],
  },
  {
    id: "128",
    title: "Найти максимальное паросочетание в двудольном графе",
    description:
      "Напишите функцию, которая находит максимальное паросочетание в двудольном графе, используя алгоритм Хопкрофта-Карпа.",
    difficulty: "hard",
    category: "Графы",
    template: `function findMaximumBipartiteMatching(graph) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[0,2],[0,1]]",
        output: "[[0,1],[1,2]]",
        explanation: "Найдено максимальное паросочетание",
      },
      {
        input: "[[1],[0,2],[1]]",
        output: "[[0,1],[1,2]]",
        explanation: "Найдено максимальное паросочетание",
      },
    ],
  },
  {
    id: "129",
    title: "Найти минимальное вершинное покрытие в графе",
    description:
      "Напишите функцию, которая находит минимальное вершинное покрытие в графе (минимальное множество вершин, покрывающее все ребра).",
    difficulty: "hard",
    category: "Графы",
    template: `function findMinimumVertexCover(graph) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[0,2],[0,1]]",
        output: "[0,1]",
        explanation: "Найдено минимальное вершинное покрытие",
      },
      {
        input: "[[1],[0,2],[1]]",
        output: "[1]",
        explanation: "Найдено минимальное вершинное покрытие",
      },
    ],
  },
  {
    id: "130",
    title: "Найти максимальную клику в графе",
    description:
      "Напишите функцию, которая находит максимальную клику в графе (максимальное множество вершин, где каждая вершина соединена со всеми остальными).",
    difficulty: "hard",
    category: "Графы",
    template: `function findMaximumClique(graph) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[0,2],[0,1]]",
        output: "[0,1,2]",
        explanation: "Найдена максимальная клика",
      },
      {
        input: "[[1],[0,2],[1]]",
        output: "[0,1]",
        explanation: "Найдена максимальная клика",
      },
    ],
  },
  {
    id: "131",
    title: "Найти оптимальное расписание задач с зависимостями",
    description:
      "Напишите функцию, которая находит оптимальное расписание выполнения задач с учетом их зависимостей и ограничений по ресурсам.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function findOptimalSchedule(tasks, dependencies, resources) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[2,3],[3,1]], [[1,2],[2,3]], {maxParallel: 2}",
        output: "[[1,2],[2,3],[3,1]]",
        explanation: "Найдено оптимальное расписание",
      },
      {
        input: "[[1,1],[2,2],[3,3]], [[1,2],[2,3]], {maxParallel: 1}",
        output: "[[1,1],[2,2],[3,3]]",
        explanation: "Найдено оптимальное расписание",
      },
    ],
  },
  {
    id: "132",
    title: "Найти оптимальное разбиение множества",
    description:
      "Напишите функцию, которая находит оптимальное разбиение множества на подмножества с учетом заданных ограничений и целевой функции.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function findOptimalPartition(set, constraints, objective) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {maxSubsetSize: 2, minSubsetSize: 1}, 'minimizeVariance'",
        output: "[[1,2],[3,4]]",
        explanation: "Найдено оптимальное разбиение",
      },
      {
        input: "[1,2,3], {maxSubsetSize: 2, minSubsetSize: 1}, 'minimizeVariance'",
        output: "[[1,2],[3]]",
        explanation: "Найдено оптимальное разбиение",
      },
    ],
  },
  {
    id: "133",
    title: "Найти оптимальное покрытие множества",
    description:
      "Напишите функцию, которая находит оптимальное покрытие множества подмножествами с учетом заданных ограничений.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function findOptimalSetCover(universe, subsets, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4,5], [[1,2,3],[2,3,4],[3,4,5]], {maxSubsets: 2}",
        output: "[[1,2,3],[3,4,5]]",
        explanation: "Найдено оптимальное покрытие",
      },
      {
        input: "[1,2,3], [[1,2],[2,3]], {maxSubsets: 1}",
        output: "[]",
        explanation: "Оптимальное покрытие не существует",
      },
    ],
  },
  {
    id: "134",
    title: "Найти оптимальное назначение ресурсов",
    description:
      "Напишите функцию, которая находит оптимальное назначение ресурсов задачам с учетом ограничений и целевой функции.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function findOptimalResourceAllocation(tasks, resources, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[2,3],[3,4]], [[1,1],[2,2],[3,3]], {maxResourcesPerTask: 1}",
        output: "[[0,1],[1,2],[2,0]]",
        explanation: "Найдено оптимальное назначение",
      },
      {
        input: "[[1,1],[2,2]], [[1,1],[2,2]], {maxResourcesPerTask: 1}",
        output: "[[0,0],[1,1]]",
        explanation: "Найдено оптимальное назначение",
      },
    ],
  },
  {
    id: "135",
    title: "Найти оптимальное дерево решений",
    description:
      "Напишите функцию, которая строит оптимальное дерево решений для заданного набора данных с учетом ограничений на сложность.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function buildOptimalDecisionTree(data, constraints) {
  // Ваш код здесь
  return null;
}`,
    testCases: [
      {
        input: "[[1,0],[2,1],[3,0]], {maxDepth: 2, minSamplesPerLeaf: 1}",
        output: "{value: 1, left: {value: 0}, right: {value: 1}}",
        explanation: "Построено оптимальное дерево решений",
      },
      {
        input: "[[1,0],[2,1]], {maxDepth: 1, minSamplesPerLeaf: 1}",
        output: "{value: 1, left: {value: 0}, right: {value: 1}}",
        explanation: "Построено оптимальное дерево решений",
      },
    ],
  },
  {
    id: "136",
    title: "Найти оптимальную стратегию в игре",
    description:
      "Напишите функцию, которая находит оптимальную стратегию в игре с нулевой суммой, используя алгоритм минимакс.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function findOptimalGameStrategy(gameState, depth) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2,3],[4,5,6],[7,8,9]], 3",
        output: "[0,0]",
        explanation: "Найдена оптимальная стратегия",
      },
      {
        input: "[[1,2],[3,4]], 2",
        output: "[0,0]",
        explanation: "Найдена оптимальная стратегия",
      },
    ],
  },
  {
    id: "137",
    title: "Найти оптимальное кодирование Хаффмана",
    description:
      "Напишите функцию, которая строит оптимальное кодирование Хаффмана для заданного набора символов с их частотами.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function buildHuffmanCoding(frequencies) {
  // Ваш код здесь
  return {};
}`,
    testCases: [
      {
        input: "{'a': 5, 'b': 9, 'c': 12, 'd': 13, 'e': 16, 'f': 45}",
        output: "{'a': '1100', 'b': '1101', 'c': '100', 'd': '101', 'e': '111', 'f': '0'}",
        explanation: "Построено оптимальное кодирование",
      },
      {
        input: "{'a': 1, 'b': 1}",
        output: "{'a': '0', 'b': '1'}",
        explanation: "Построено оптимальное кодирование",
      },
    ],
  },
  {
    id: "138",
    title: "Найти оптимальное разбиение графа",
    description:
      "Напишите функцию, которая находит оптимальное разбиение графа на компоненты с учетом заданных ограничений.",
    difficulty: "hard",
    category: "Графы",
    template: `function findOptimalGraphPartition(graph, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[0,2],[0,1]], {maxComponentSize: 2}",
        output: "[[0,1],[2]]",
        explanation: "Найдено оптимальное разбиение",
      },
      {
        input: "[[1],[0,2],[1]], {maxComponentSize: 1}",
        output: "[[0],[1],[2]]",
        explanation: "Найдено оптимальное разбиение",
      },
    ],
  },
  {
    id: "139",
    title: "Найти оптимальное дерево Штейнера",
    description:
      "Напишите функцию, которая находит оптимальное дерево Штейнера для заданного множества точек на плоскости.",
    difficulty: "hard",
    category: "Графы",
    template: `function findOptimalSteinerTree(points) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[0,0],[1,1],[2,0]]",
        output: "[[0,0],[1,0],[1,1],[2,0]]",
        explanation: "Найдено оптимальное дерево Штейнера",
      },
      {
        input: "[[0,0],[1,0]]",
        output: "[[0,0],[1,0]]",
        explanation: "Найдено оптимальное дерево Штейнера",
      },
    ],
  },
  {
    id: "140",
    title: "Найти оптимальное разбиение строки на подстроки",
    description:
      "Напишите функцию, которая находит оптимальное разбиение строки на подстроки с учетом заданных ограничений и целевой функции.",
    difficulty: "hard",
    category: "Строки",
    template: `function findOptimalStringPartition(s, constraints, objective) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: '"abcabc", {maxLength: 3, minLength: 2}, "minimizeUniqueChars"',
        output: '["abc","abc"]',
        explanation: "Найдено оптимальное разбиение",
      },
      {
        input: '"abc", {maxLength: 2, minLength: 1}, "minimizeUniqueChars"',
        output: '["ab","c"]',
        explanation: "Найдено оптимальное разбиение",
      },
    ],
  },
  {
    id: "141",
    title: "Найти оптимальное дерево поиска",
    description:
      "Напишите функцию, которая строит оптимальное дерево поиска для заданного набора ключей с их частотами доступа.",
    difficulty: "hard",
    category: "Деревья",
    template: `function buildOptimalSearchTree(keys, frequencies) {
  // Ваш код здесь
  return null;
}`,
    testCases: [
      {
        input: "[1,2,3], [0.5,0.3,0.2]",
        output: "{value: 2, left: {value: 1}, right: {value: 3}}",
        explanation: "Построено оптимальное дерево поиска",
      },
      {
        input: "[1,2], [0.6,0.4]",
        output: "{value: 1, right: {value: 2}}",
        explanation: "Построено оптимальное дерево поиска",
      },
    ],
  },
  {
    id: "142",
    title: "Найти оптимальное разбиение массива на подмассивы",
    description:
      "Напишите функцию, которая находит оптимальное разбиение массива на подмассивы с учетом заданных ограничений и целевой функции.",
    difficulty: "hard",
    category: "Массивы",
    template: `function findOptimalArrayPartition(arr, constraints, objective) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {maxSize: 2, minSize: 1}, 'minimizeVariance'",
        output: "[[1,2],[3,4]]",
        explanation: "Найдено оптимальное разбиение",
      },
      {
        input: "[1,2,3], {maxSize: 2, minSize: 1}, 'minimizeVariance'",
        output: "[[1,2],[3]]",
        explanation: "Найдено оптимальное разбиение",
      },
    ],
  },
  {
    id: "143",
    title: "Найти оптимальное дерево выражений",
    description:
      "Напишите функцию, которая строит оптимальное дерево выражений для заданного математического выражения.",
    difficulty: "hard",
    category: "Деревья",
    template: `function buildOptimalExpressionTree(expression) {
  // Ваш код здесь
  return null;
}`,
    testCases: [
      {
        input: "'(a+b)*(c+d)'",
        output:
          "{value: '*', left: {value: '+', left: {value: 'a'}, right: {value: 'b'}}, right: {value: '+', left: {value: 'c'}, right: {value: 'd'}}}",
        explanation: "Построено оптимальное дерево выражений",
      },
      {
        input: "'a+b'",
        output: "{value: '+', left: {value: 'a'}, right: {value: 'b'}}",
        explanation: "Построено оптимальное дерево выражений",
      },
    ],
  },
  {
    id: "144",
    title: "Найти оптимальное разбиение графа на клики",
    description:
      "Напишите функцию, которая находит оптимальное разбиение графа на клики с учетом заданных ограничений.",
    difficulty: "hard",
    category: "Графы",
    template: `function findOptimalCliquePartition(graph, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[0,2],[0,1]], {maxCliqueSize: 2}",
        output: "[[0,1],[2]]",
        explanation: "Найдено оптимальное разбиение на клики",
      },
      {
        input: "[[1],[0,2],[1]], {maxCliqueSize: 1}",
        output: "[[0],[1],[2]]",
        explanation: "Найдено оптимальное разбиение на клики",
      },
    ],
  },
  {
    id: "145",
    title: "Найти оптимальное дерево решений для классификации",
    description:
      "Напишите функцию, которая строит оптимальное дерево решений для задачи классификации с учетом ограничений на сложность.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function buildOptimalClassificationTree(data, labels, constraints) {
  // Ваш код здесь
  return null;
}`,
    testCases: [
      {
        input: "[[1,0],[2,1],[3,0]], [0,1,0], {maxDepth: 2, minSamplesPerLeaf: 1}",
        output: "{value: 1, left: {value: 0}, right: {value: 1}}",
        explanation: "Построено оптимальное дерево решений",
      },
      {
        input: "[[1,0],[2,1]], [0,1], {maxDepth: 1, minSamplesPerLeaf: 1}",
        output: "{value: 1, left: {value: 0}, right: {value: 1}}",
        explanation: "Построено оптимальное дерево решений",
      },
    ],
  },
  {
    id: "146",
    title: "Найти оптимальное разбиение множества на подмножества",
    description:
      "Напишите функцию, которая находит оптимальное разбиение множества на подмножества с учетом заданных ограничений и целевой функции.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function findOptimalSetPartition(set, constraints, objective) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {maxSubsetSize: 2, minSubsetSize: 1}, 'minimizeVariance'",
        output: "[[1,2],[3,4]]",
        explanation: "Найдено оптимальное разбиение",
      },
      {
        input: "[1,2,3], {maxSubsetSize: 2, minSubsetSize: 1}, 'minimizeVariance'",
        output: "[[1,2],[3]]",
        explanation: "Найдено оптимальное разбиение",
      },
    ],
  },
  {
    id: "147",
    title: "Найти оптимальное дерево решений для регрессии",
    description:
      "Напишите функцию, которая строит оптимальное дерево решений для задачи регрессии с учетом ограничений на сложность.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function buildOptimalRegressionTree(data, values, constraints) {
  // Ваш код здесь
  return null;
}`,
    testCases: [
      {
        input: "[[1,0],[2,1],[3,0]], [1.5,2.5,3.5], {maxDepth: 2, minSamplesPerLeaf: 1}",
        output: "{value: 2, left: {value: 1.5}, right: {value: 3}}",
        explanation: "Построено оптимальное дерево решений",
      },
      {
        input: "[[1,0],[2,1]], [1.5,2.5], {maxDepth: 1, minSamplesPerLeaf: 1}",
        output: "{value: 1, left: {value: 1.5}, right: {value: 2.5}}",
        explanation: "Построено оптимальное дерево решений",
      },
    ],
  },
  {
    id: "148",
    title: "Найти оптимальное разбиение графа на компоненты связности",
    description:
      "Напишите функцию, которая находит оптимальное разбиение графа на компоненты связности с учетом заданных ограничений.",
    difficulty: "hard",
    category: "Графы",
    template: `function findOptimalConnectedComponents(graph, constraints) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[[1,2],[0,2],[0,1]], {maxComponentSize: 2}",
        output: "[[0,1],[2]]",
        explanation: "Найдено оптимальное разбиение",
      },
      {
        input: "[[1],[0,2],[1]], {maxComponentSize: 1}",
        output: "[[0],[1],[2]]",
        explanation: "Найдено оптимальное разбиение",
      },
    ],
  },
  {
    id: "149",
    title: "Найти оптимальное дерево решений для ансамбля",
    description:
      "Напишите функцию, которая строит оптимальное дерево решений для ансамбля моделей с учетом ограничений на сложность.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function buildOptimalEnsembleTree(models, data, constraints) {
  // Ваш код здесь
  return null;
}`,
    testCases: [
      {
        input: "[[1,0],[2,1],[3,0]], [[0.5,0.5],[0.7,0.3]], {maxDepth: 2, minSamplesPerLeaf: 1}",
        output: "{value: 1, left: {value: 0.5}, right: {value: 0.7}}",
        explanation: "Построено оптимальное дерево решений",
      },
      {
        input: "[[1,0],[2,1]], [[0.5,0.5]], {maxDepth: 1, minSamplesPerLeaf: 1}",
        output: "{value: 1, left: {value: 0.5}, right: {value: 0.5}}",
        explanation: "Построено оптимальное дерево решений",
      },
    ],
  },
  {
    id: "150",
    title: "Найти оптимальное разбиение множества на подмножества с ограничениями",
    description:
      "Напишите функцию, которая находит оптимальное разбиение множества на подмножества с учетом заданных ограничений и целевой функции.",
    difficulty: "hard",
    category: "Алгоритмы",
    template: `function findOptimalSubsetPartition(set, constraints, objective) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1,2,3,4], {maxSubsetSize: 2, minSubsetSize: 1, maxSubsets: 2}, 'minimizeVariance'",
        output: "[[1,2],[3,4]]",
        explanation: "Найдено оптимальное разбиение",
      },
      {
        input: "[1,2,3], {maxSubsetSize: 2, minSubsetSize: 1, maxSubsets: 2}, 'minimizeVariance'",
        output: "[[1,2],[3]]",
        explanation: "Найдено оптимальное разбиение",
      },
    ],
  },
  {
    id: "151",
    title: "Найти сумму цифр числа",
    description: "Напишите функцию, которая находит сумму всех цифр в заданном числе.",
    difficulty: "easy",
    category: "Числа",
    template: `function sumDigits(number) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "123",
        output: "6",
        explanation: "1 + 2 + 3 = 6",
      },
      {
        input: "456",
        output: "15",
        explanation: "4 + 5 + 6 = 15",
      },
    ],
  },
  {
    id: "152",
    title: "Проверить, является ли число палиндромом",
    description:
      "Напишите функцию, которая проверяет, является ли число палиндромом (читается одинаково слева направо и справа налево).",
    difficulty: "easy",
    category: "Числа",
    template: `function isPalindrome(number) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "121",
        output: "true",
        explanation: "121 читается одинаково в обоих направлениях",
      },
      {
        input: "123",
        output: "false",
        explanation: "123 не является палиндромом",
      },
    ],
  },
  {
    id: "153",
    title: "Найти факториал числа",
    description: "Напишите функцию, которая вычисляет факториал заданного числа.",
    difficulty: "easy",
    category: "Числа",
    template: `function factorial(n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "5",
        output: "120",
        explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120",
      },
      {
        input: "0",
        output: "1",
        explanation: "0! = 1 по определению",
      },
    ],
  },
  {
    id: "154",
    title: "Проверить, является ли год високосным",
    description: "Напишите функцию, которая проверяет, является ли заданный год високосным.",
    difficulty: "easy",
    category: "Даты",
    template: `function isLeapYear(year) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "2020",
        output: "true",
        explanation: "2020 делится на 4 и не делится на 100",
      },
      {
        input: "2021",
        output: "false",
        explanation: "2021 не делится на 4",
      },
    ],
  },
  {
    id: "155",
    title: "Найти количество дней между датами",
    description: "Напишите функцию, которая вычисляет количество дней между двумя датами.",
    difficulty: "easy",
    category: "Даты",
    template: `function daysBetween(date1, date2) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "'2023-01-01', '2023-01-10'",
        output: "9",
        explanation: "Между 1 и 10 января 2023 года 9 дней",
      },
      {
        input: "'2023-01-01', '2023-01-01'",
        output: "0",
        explanation: "Между одинаковыми датами 0 дней",
      },
    ],
  },
  {
    id: "156",
    title: "Проверить валидность IP-адреса",
    description: "Напишите функцию, которая проверяет, является ли строка валидным IPv4 адресом.",
    difficulty: "easy",
    category: "Строки",
    template: `function isValidIP(ip) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "'192.168.1.1'",
        output: "true",
        explanation: "Строка соответствует формату IPv4",
      },
      {
        input: "'256.1.2.3'",
        output: "false",
        explanation: "Число больше 255",
      },
    ],
  },
  {
    id: "157",
    title: "Найти количество слов в строке",
    description: "Напишите функцию, которая подсчитывает количество слов в заданной строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function countWords(str) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "'Hello World'",
        output: "2",
        explanation: "В строке 2 слова",
      },
      {
        input: "'   Spaces   between   words   '",
        output: "3",
        explanation: "В строке 3 слова, пробелы не учитываются",
      },
    ],
  },
  {
    id: "158",
    title: "Проверить, является ли строка панграммой",
    description:
      "Напишите функцию, которая проверяет, является ли строка панграммой (содержит все буквы алфавита).",
    difficulty: "easy",
    category: "Строки",
    template: `function isPangram(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "'The quick brown fox jumps over the lazy dog'",
        output: "true",
        explanation: "Строка содержит все буквы алфавита",
      },
      {
        input: "'Hello World'",
        output: "false",
        explanation: "Строка не содержит все буквы алфавита",
      },
    ],
  },
  {
    id: "159",
    title: "Найти самое длинное слово в строке",
    description: "Напишите функцию, которая находит самое длинное слово в заданной строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function findLongestWord(str) {
  // Ваш код здесь
  return '';
}`,
    testCases: [
      {
        input: "'The quick brown fox jumps over the lazy dog'",
        output: "'quick'",
        explanation: "'quick' - самое длинное слово в строке",
      },
      {
        input: "'Hello World'",
        output: "'Hello'",
        explanation: "'Hello' - самое длинное слово в строке",
      },
    ],
  },
  {
    id: "160",
    title: "Проверить, является ли строка изограммой",
    description:
      "Напишите функцию, которая проверяет, является ли строка изограммой (не содержит повторяющихся букв).",
    difficulty: "easy",
    category: "Строки",
    template: `function isIsogram(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "'Dermatoglyphics'",
        output: "true",
        explanation: "Строка не содержит повторяющихся букв",
      },
      {
        input: "'Hello'",
        output: "false",
        explanation: "Строка содержит повторяющуюся букву 'l'",
      },
    ],
  },
  {
    id: "161",
    title: "Найти среднее значение массива",
    description: "Напишите функцию, которая вычисляет среднее значение элементов массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findAverage(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "3",
        explanation: "(1 + 2 + 3 + 4 + 5) / 5 = 3",
      },
      {
        input: "[10, 20, 30]",
        output: "20",
        explanation: "(10 + 20 + 30) / 3 = 20",
      },
    ],
  },
  {
    id: "162",
    title: "Найти медиану массива",
    description:
      "Напишите функцию, которая находит медиану (средний элемент) отсортированного массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findMedian(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "3",
        explanation: "3 - средний элемент массива",
      },
      {
        input: "[1, 2, 3, 4]",
        output: "2.5",
        explanation: "(2 + 3) / 2 = 2.5",
      },
    ],
  },
  {
    id: "163",
    title: "Найти моду массива",
    description:
      "Напишите функцию, которая находит моду (наиболее часто встречающийся элемент) массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findMode(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 2, 3, 2, 4]",
        output: "2",
        explanation: "2 встречается чаще всего",
      },
      {
        input: "[1, 1, 2, 2]",
        output: "[1, 2]",
        explanation: "1 и 2 встречаются одинаково часто",
      },
    ],
  },
  {
    id: "164",
    title: "Проверить, является ли массив арифметической прогрессией",
    description:
      "Напишите функцию, которая проверяет, является ли массив арифметической прогрессией.",
    difficulty: "easy",
    category: "Массивы",
    template: `function isArithmeticProgression(arr) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "[1, 3, 5, 7]",
        output: "true",
        explanation: "Разность между соседними элементами постоянна (2)",
      },
      {
        input: "[1, 2, 4, 7]",
        output: "false",
        explanation: "Разность между соседними элементами непостоянна",
      },
    ],
  },
  {
    id: "165",
    title: "Найти разницу между максимальным и минимальным элементами",
    description:
      "Напишите функцию, которая находит разницу между максимальным и минимальным элементами массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findRange(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "4",
        explanation: "5 - 1 = 4",
      },
      {
        input: "[10, 20, 30]",
        output: "20",
        explanation: "30 - 10 = 20",
      },
    ],
  },
  {
    id: "166",
    title: "Проверить, является ли число простым",
    description: "Напишите функцию, которая проверяет, является ли число простым.",
    difficulty: "easy",
    category: "Числа",
    template: `function isPrime(n) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "7",
        output: "true",
        explanation: "7 делится только на 1 и само себя",
      },
      {
        input: "4",
        output: "false",
        explanation: "4 делится на 1, 2 и 4",
      },
    ],
  },
  {
    id: "167",
    title: "Найти все простые числа до n",
    description: "Напишите функцию, которая находит все простые числа до заданного числа n.",
    difficulty: "easy",
    category: "Числа",
    template: `function findPrimes(n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "10",
        output: "[2, 3, 5, 7]",
        explanation: "Простые числа до 10",
      },
      {
        input: "5",
        output: "[2, 3, 5]",
        explanation: "Простые числа до 5",
      },
    ],
  },
  {
    id: "168",
    title: "Найти наибольший общий делитель",
    description: "Напишите функцию, которая находит наибольший общий делитель двух чисел.",
    difficulty: "easy",
    category: "Числа",
    template: `function findGCD(a, b) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "12, 18",
        output: "6",
        explanation: "НОД(12, 18) = 6",
      },
      {
        input: "7, 13",
        output: "1",
        explanation: "НОД(7, 13) = 1",
      },
    ],
  },
  {
    id: "169",
    title: "Найти наименьшее общее кратное",
    description: "Напишите функцию, которая находит наименьшее общее кратное двух чисел.",
    difficulty: "easy",
    category: "Числа",
    template: `function findLCM(a, b) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "12, 18",
        output: "36",
        explanation: "НОК(12, 18) = 36",
      },
      {
        input: "7, 13",
        output: "91",
        explanation: "НОК(7, 13) = 91",
      },
    ],
  },
  {
    id: "170",
    title: "Проверить, является ли число степенью двойки",
    description: "Напишите функцию, которая проверяет, является ли число степенью двойки.",
    difficulty: "easy",
    category: "Числа",
    template: `function isPowerOfTwo(n) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "16",
        output: "true",
        explanation: "16 = 2^4",
      },
      {
        input: "12",
        output: "false",
        explanation: "12 не является степенью двойки",
      },
    ],
  },
  {
    id: "171",
    title: "Найти количество вхождений подстроки",
    description: "Напишите функцию, которая подсчитывает количество вхождений подстроки в строку.",
    difficulty: "easy",
    category: "Строки",
    template: `function countSubstring(str, substr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "'hello world hello', 'hello'",
        output: "2",
        explanation: "Подстрока 'hello' встречается 2 раза",
      },
      {
        input: "'abcabc', 'abc'",
        output: "2",
        explanation: "Подстрока 'abc' встречается 2 раза",
      },
    ],
  },
  {
    id: "172",
    title: "Проверить, является ли строка палиндромом",
    description: "Напишите функцию, которая проверяет, является ли строка палиндромом.",
    difficulty: "easy",
    category: "Строки",
    template: `function isPalindrome(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "'radar'",
        output: "true",
        explanation: "Строка читается одинаково в обоих направлениях",
      },
      {
        input: "'hello'",
        output: "false",
        explanation: "Строка не является палиндромом",
      },
    ],
  },
  {
    id: "173",
    title: "Найти самое короткое слово в строке",
    description: "Напишите функцию, которая находит самое короткое слово в строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function findShortestWord(str) {
  // Ваш код здесь
  return '';
}`,
    testCases: [
      {
        input: "'The quick brown fox jumps'",
        output: "'The'",
        explanation: "'The' - самое короткое слово",
      },
      {
        input: "'Hello World'",
        output: "'Hello'",
        explanation: "'Hello' и 'World' имеют одинаковую длину",
      },
    ],
  },
  {
    id: "174",
    title: "Проверить, содержит ли строка только цифры",
    description: "Напишите функцию, которая проверяет, содержит ли строка только цифры.",
    difficulty: "easy",
    category: "Строки",
    template: `function containsOnlyDigits(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "'12345'",
        output: "true",
        explanation: "Строка содержит только цифры",
      },
      {
        input: "'123abc'",
        output: "false",
        explanation: "Строка содержит буквы",
      },
    ],
  },
  {
    id: "175",
    title: "Найти количество гласных в строке",
    description: "Напишите функцию, которая подсчитывает количество гласных букв в строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function countVowels(str) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "'hello'",
        output: "2",
        explanation: "В строке 2 гласные: 'e' и 'o'",
      },
      {
        input: "'world'",
        output: "1",
        explanation: "В строке 1 гласная: 'o'",
      },
    ],
  },
  {
    id: "176",
    title: "Проверить, является ли массив геометрической прогрессией",
    description:
      "Напишите функцию, которая проверяет, является ли массив геометрической прогрессией.",
    difficulty: "easy",
    category: "Массивы",
    template: `function isGeometricProgression(arr) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "[2, 4, 8, 16]",
        output: "true",
        explanation: "Каждый следующий элемент в 2 раза больше предыдущего",
      },
      {
        input: "[1, 2, 4, 7]",
        output: "false",
        explanation: "Отношение между соседними элементами непостоянно",
      },
    ],
  },
  {
    id: "177",
    title: "Найти сумму элементов массива",
    description: "Напишите функцию, которая вычисляет сумму всех элементов массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function sumArray(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "15",
        explanation: "1 + 2 + 3 + 4 + 5 = 15",
      },
      {
        input: "[10, 20, 30]",
        output: "60",
        explanation: "10 + 20 + 30 = 60",
      },
    ],
  },
  {
    id: "178",
    title: "Найти произведение элементов массива",
    description: "Напишите функцию, которая вычисляет произведение всех элементов массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function productArray(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4]",
        output: "24",
        explanation: "1 * 2 * 3 * 4 = 24",
      },
      {
        input: "[2, 3, 4]",
        output: "24",
        explanation: "2 * 3 * 4 = 24",
      },
    ],
  },
  {
    id: "179",
    title: "Проверить, содержит ли массив дубликаты",
    description: "Напишите функцию, которая проверяет, содержит ли массив дублирующиеся элементы.",
    difficulty: "easy",
    category: "Массивы",
    template: `function hasDuplicates(arr) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 1]",
        output: "true",
        explanation: "Массив содержит дубликат: 1",
      },
      {
        input: "[1, 2, 3, 4]",
        output: "false",
        explanation: "Массив не содержит дубликатов",
      },
    ],
  },
  {
    id: "180",
    title: "Найти количество четных чисел в массиве",
    description: "Напишите функцию, которая подсчитывает количество четных чисел в массиве.",
    difficulty: "easy",
    category: "Массивы",
    template: `function countEvenNumbers(arr) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "2",
        explanation: "В массиве 2 четных числа: 2 и 4",
      },
      {
        input: "[2, 4, 6, 8]",
        output: "4",
        explanation: "Все числа в массиве четные",
      },
    ],
  },
  {
    id: "181",
    title: "Проверить, является ли число совершенным",
    description:
      "Напишите функцию, которая проверяет, является ли число совершенным (равно сумме своих делителей).",
    difficulty: "easy",
    category: "Числа",
    template: `function isPerfectNumber(n) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "6",
        output: "true",
        explanation: "6 = 1 + 2 + 3",
      },
      {
        input: "12",
        output: "false",
        explanation: "12 ≠ 1 + 2 + 3 + 4 + 6",
      },
    ],
  },
  {
    id: "182",
    title: "Найти все совершенные числа до n",
    description: "Напишите функцию, которая находит все совершенные числа до заданного числа n.",
    difficulty: "easy",
    category: "Числа",
    template: `function findPerfectNumbers(n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "30",
        output: "[6, 28]",
        explanation: "6 и 28 - совершенные числа до 30",
      },
      {
        input: "10",
        output: "[6]",
        explanation: "6 - единственное совершенное число до 10",
      },
    ],
  },
  {
    id: "183",
    title: "Найти количество делителей числа",
    description: "Напишите функцию, которая подсчитывает количество делителей заданного числа.",
    difficulty: "easy",
    category: "Числа",
    template: `function countDivisors(n) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "12",
        output: "6",
        explanation: "Делители: 1, 2, 3, 4, 6, 12",
      },
      {
        input: "7",
        output: "2",
        explanation: "Делители: 1, 7",
      },
    ],
  },
  {
    id: "184",
    title: "Проверить, является ли число треугольным",
    description:
      "Напишите функцию, которая проверяет, является ли число треугольным (может быть представлено как сумма последовательных натуральных чисел).",
    difficulty: "easy",
    category: "Числа",
    template: `function isTriangular(n) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "10",
        output: "true",
        explanation: "10 = 1 + 2 + 3 + 4",
      },
      {
        input: "11",
        output: "false",
        explanation: "11 не является треугольным числом",
      },
    ],
  },
  {
    id: "185",
    title: "Найти все треугольные числа до n",
    description: "Напишите функцию, которая находит все треугольные числа до заданного числа n.",
    difficulty: "easy",
    category: "Числа",
    template: `function findTriangularNumbers(n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "10",
        output: "[1, 3, 6, 10]",
        explanation: "Треугольные числа до 10",
      },
      {
        input: "5",
        output: "[1, 3]",
        explanation: "Треугольные числа до 5",
      },
    ],
  },
  {
    id: "186",
    title: "Проверить, является ли строка анаграммой",
    description: "Напишите функцию, которая проверяет, является ли одна строка анаграммой другой.",
    difficulty: "easy",
    category: "Строки",
    template: `function isAnagram(str1, str2) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "'listen', 'silent'",
        output: "true",
        explanation: "Строки содержат одинаковые буквы",
      },
      {
        input: "'hello', 'world'",
        output: "false",
        explanation: "Строки содержат разные буквы",
      },
    ],
  },
  {
    id: "187",
    title: "Найти все анаграммы слова",
    description: "Напишите функцию, которая находит все возможные анаграммы заданного слова.",
    difficulty: "easy",
    category: "Строки",
    template: `function findAnagrams(word) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "'eat'",
        output: "['eat', 'eta', 'ate', 'aet', 'tea', 'tae']",
        explanation: "Все возможные анаграммы слова 'eat'",
      },
      {
        input: "'hi'",
        output: "['hi', 'ih']",
        explanation: "Все возможные анаграммы слова 'hi'",
      },
    ],
  },
  {
    id: "188",
    title: "Проверить, является ли строка панграммой",
    description:
      "Напишите функцию, которая проверяет, является ли строка панграммой (содержит все буквы алфавита).",
    difficulty: "easy",
    category: "Строки",
    template: `function isPangram(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "'The quick brown fox jumps over the lazy dog'",
        output: "true",
        explanation: "Строка содержит все буквы алфавита",
      },
      {
        input: "'Hello World'",
        output: "false",
        explanation: "Строка не содержит все буквы алфавита",
      },
    ],
  },
  {
    id: "189",
    title: "Найти недостающие буквы в панграмме",
    description:
      "Напишите функцию, которая находит буквы, отсутствующие в строке для того, чтобы она стала панграммой.",
    difficulty: "easy",
    category: "Строки",
    template: `function findMissingLetters(str) {
  // Ваш код здесь
  return '';
}`,
    testCases: [
      {
        input: "'The quick brown fox jumps over the lazy do'",
        output: "'g'",
        explanation: "Отсутствует буква 'g'",
      },
      {
        input: "'The quick brown fox jumps over the lazy dog'",
        output: "''",
        explanation: "Все буквы присутствуют",
      },
    ],
  },
  {
    id: "190",
    title: "Проверить, является ли строка изограммой",
    description:
      "Напишите функцию, которая проверяет, является ли строка изограммой (не содержит повторяющихся букв).",
    difficulty: "easy",
    category: "Строки",
    template: `function isIsogram(str) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "'Dermatoglyphics'",
        output: "true",
        explanation: "Строка не содержит повторяющихся букв",
      },
      {
        input: "'Hello'",
        output: "false",
        explanation: "Строка содержит повторяющуюся букву 'l'",
      },
    ],
  },
  {
    id: "191",
    title: "Найти количество уникальных букв в строке",
    description: "Напишите функцию, которая подсчитывает количество уникальных букв в строке.",
    difficulty: "easy",
    category: "Строки",
    template: `function countUniqueLetters(str) {
  // Ваш код здесь
  return 0;
}`,
    testCases: [
      {
        input: "'hello'",
        output: "4",
        explanation: "Уникальные буквы: h, e, l, o",
      },
      {
        input: "'world'",
        output: "5",
        explanation: "Все буквы уникальны",
      },
    ],
  },
  {
    id: "192",
    title: "Проверить, является ли массив арифметической прогрессией",
    description:
      "Напишите функцию, которая проверяет, является ли массив арифметической прогрессией.",
    difficulty: "easy",
    category: "Массивы",
    template: `function isArithmeticProgression(arr) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "[1, 3, 5, 7]",
        output: "true",
        explanation: "Разность между соседними элементами постоянна (2)",
      },
      {
        input: "[1, 2, 4, 7]",
        output: "false",
        explanation: "Разность между соседними элементами непостоянна",
      },
    ],
  },
  {
    id: "193",
    title: "Найти разницу между соседними элементами",
    description: "Напишите функцию, которая находит разницу между соседними элементами массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findDifferences(arr) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[1, 3, 5, 7]",
        output: "[2, 2, 2]",
        explanation: "Разницы между соседними элементами",
      },
      {
        input: "[10, 20, 30]",
        output: "[10, 10]",
        explanation: "Разницы между соседними элементами",
      },
    ],
  },
  {
    id: "194",
    title: "Проверить, является ли массив геометрической прогрессией",
    description:
      "Напишите функцию, которая проверяет, является ли массив геометрической прогрессией.",
    difficulty: "easy",
    category: "Массивы",
    template: `function isGeometricProgression(arr) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "[2, 4, 8, 16]",
        output: "true",
        explanation: "Каждый следующий элемент в 2 раза больше предыдущего",
      },
      {
        input: "[1, 2, 4, 7]",
        output: "false",
        explanation: "Отношение между соседними элементами непостоянно",
      },
    ],
  },
  {
    id: "195",
    title: "Найти отношение между соседними элементами",
    description: "Напишите функцию, которая находит отношение между соседними элементами массива.",
    difficulty: "easy",
    category: "Массивы",
    template: `function findRatios(arr) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "[2, 4, 8, 16]",
        output: "[2, 2, 2]",
        explanation: "Отношения между соседними элементами",
      },
      {
        input: "[10, 20, 40]",
        output: "[2, 2]",
        explanation: "Отношения между соседними элементами",
      },
    ],
  },
  {
    id: "196",
    title: "Проверить, является ли число палиндромом",
    description: "Напишите функцию, которая проверяет, является ли число палиндромом.",
    difficulty: "easy",
    category: "Числа",
    template: `function isPalindrome(n) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "121",
        output: "true",
        explanation: "121 читается одинаково в обоих направлениях",
      },
      {
        input: "123",
        output: "false",
        explanation: "123 не является палиндромом",
      },
    ],
  },
  {
    id: "197",
    title: "Найти все палиндромы до n",
    description: "Напишите функцию, которая находит все палиндромы до заданного числа n.",
    difficulty: "easy",
    category: "Числа",
    template: `function findPalindromes(n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "100",
        output: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99]",
        explanation: "Палиндромы до 100",
      },
      {
        input: "10",
        output: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
        explanation: "Палиндромы до 10",
      },
    ],
  },
  {
    id: "198",
    title: "Проверить, является ли число степенью двойки",
    description: "Напишите функцию, которая проверяет, является ли число степенью двойки.",
    difficulty: "easy",
    category: "Числа",
    template: `function isPowerOfTwo(n) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "16",
        output: "true",
        explanation: "16 = 2^4",
      },
      {
        input: "12",
        output: "false",
        explanation: "12 не является степенью двойки",
      },
    ],
  },
  {
    id: "199",
    title: "Найти все степени двойки до n",
    description: "Напишите функцию, которая находит все степени двойки до заданного числа n.",
    difficulty: "easy",
    category: "Числа",
    template: `function findPowersOfTwo(n) {
  // Ваш код здесь
  return [];
}`,
    testCases: [
      {
        input: "20",
        output: "[1, 2, 4, 8, 16]",
        explanation: "Степени двойки до 20",
      },
      {
        input: "10",
        output: "[1, 2, 4, 8]",
        explanation: "Степени двойки до 10",
      },
    ],
  },
  {
    id: "200",
    title: "Проверить, является ли число треугольным",
    description: "Напишите функцию, которая проверяет, является ли число треугольным.",
    difficulty: "easy",
    category: "Числа",
    template: `function isTriangular(n) {
  // Ваш код здесь
  return false;
}`,
    testCases: [
      {
        input: "10",
        output: "true",
        explanation: "10 = 1 + 2 + 3 + 4",
      },
      {
        input: "11",
        output: "false",
        explanation: "11 не является треугольным числом",
      },
    ],
  },
];

interface TestResult {
  passed: boolean;
  input: string;
  expected: string;
  actual: string;
}

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");
  const [sortBy, setSortBy] = useState("default");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [code, setCode] = useState("");
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Получаем уникальные категории из задач
  const categories = Array.from(new Set(sampleTasks.map((task) => task.category)));

  // Функция для определения веса сложности
  const getDifficultyWeight = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return 1;
      case "medium":
        return 2;
      case "hard":
        return 3;
      default:
        return 0;
    }
  };

  // Сортируем и фильтруем задачи
  const filteredTasks = sampleTasks
    .filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficultyFilter === "all" || task.difficulty === difficultyFilter;
      const matchesCategory = categoryFilter === "all" || task.category === categoryFilter;
      return matchesSearch && matchesDifficulty && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "difficulty-asc":
          return getDifficultyWeight(a.difficulty) - getDifficultyWeight(b.difficulty);
        case "difficulty-desc":
          return getDifficultyWeight(b.difficulty) - getDifficultyWeight(a.difficulty);
        case "alphabetical":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  // Обновляем количество задач в localStorage при изменении фильтров
  useEffect(() => {
    localStorage.setItem("taskCount", filteredTasks.length.toString());
  }, [filteredTasks]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "from-green-400 to-green-600";
      case "medium":
        return "from-yellow-400 to-orange-500";
      case "hard":
        return "from-red-400 to-red-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);
    setCode(task.template || "");
    setTestResults([]);
  };

  const runTests = () => {
    if (!selectedTask) return;

    setIsRunning(true);
    setTestResults([]);

    try {
      // Проверяем, что код содержит функцию sumArray
      if (!code.includes("function sumArray")) {
        throw new Error("Код должен содержать функцию sumArray");
      }

      // Создаем безопасный контекст для выполнения кода
      const logs: string[] = [];
      const context = {
        console: {
          log: (...args: any[]) => {
            const message = args.join(" ");
            logs.push(message);
            toast.success(message);
          },
          error: (...args: any[]) => {
            const message = args.join(" ");
            logs.push(`Error: ${message}`);
            toast.error(message);
          },
        },
      };

      // Создаем функцию из кода пользователя
      const userFunction = new Function(
        "arr",
        `
        ${code}
        return sumArray(arr);
      `
      );

      const results: TestResult[] = selectedTask.testCases.map((testCase) => {
        try {
          const input = JSON.parse(testCase.input);
          const expected = testCase.output;
          const actual = userFunction(input).toString();

          const passed = actual === expected;

          if (passed) {
            toast.success(`Тест пройден: ${testCase.input} → ${actual}`);
          } else {
            toast.error(`Тест не пройден: ${testCase.input} → ${actual} (ожидалось: ${expected})`);
          }

          return {
            passed,
            input: testCase.input,
            expected,
            actual,
          };
        } catch (error) {
          toast.error(`Ошибка в тесте: ${error.message}`);
          return {
            passed: false,
            input: testCase.input,
            expected: testCase.output,
            actual: `Ошибка: ${error.message}`,
          };
        }
      });

      setTestResults(results);

      // Показываем общий результат
      const allPassed = results.every((r) => r.passed);
      if (allPassed) {
        toast.success("Все тесты пройдены! 🎉");
      } else {
        toast.error(
          `Пройдено ${results.filter((r) => r.passed).length} из ${results.length} тестов`
        );
      }
    } catch (error) {
      toast.error(`Ошибка компиляции: ${error.message}`);
      setTestResults([
        {
          passed: false,
          input: "Ошибка компиляции",
          expected: "",
          actual: error.message,
        },
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  // Добавляем обработчик нажатия Enter в редакторе
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      runTests();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#363636",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            borderRadius: "0.5rem",
            padding: "1rem",
          },
        }}
      />
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Практические задачи
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Решайте практические задачи для закрепления знаний
              </p>
            </div>
          </div>
        </div>

        {/* Фильтры и поиск */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск задач..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Сложность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все уровни</SelectItem>
                  <SelectItem value="easy">Легкий</SelectItem>
                  <SelectItem value="medium">Средний</SelectItem>
                  <SelectItem value="hard">Сложный</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Тема" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все темы</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">По умолчанию</SelectItem>
                  <SelectItem value="difficulty-asc">По сложности (легкие → сложные)</SelectItem>
                  <SelectItem value="difficulty-desc">По сложности (сложные → легкие)</SelectItem>
                  <SelectItem value="alphabetical">По алфавиту</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Боковая панель со списком задач */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Список задач</h2>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {filteredTasks.length}
                </span>
              </div>
              <ScrollArea className="h-[calc(100vh-300px)] pr-4">
                <div className="space-y-3">
                  {filteredTasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => handleTaskSelect(task)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedTask?.id === task.id
                          ? "bg-purple-100 border-purple-200 shadow-md"
                          : "bg-white/50 hover:bg-white/80 border border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          className={`bg-gradient-to-r ${getDifficultyColor(task.difficulty)} text-white border-0`}
                        >
                          {task.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          {task.category}
                        </Badge>
                      </div>
                      <h3 className="font-medium text-gray-800 mb-1">{task.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {task.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Основная область с редактором кода */}
          <div className="lg:col-span-8">
            {selectedTask ? (
              <div className="space-y-4">
                <Card className="bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold text-gray-800">
                          {selectedTask.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">{selectedTask.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge
                          className={`bg-gradient-to-r ${getDifficultyColor(selectedTask.difficulty)} text-white border-0`}
                        >
                          {selectedTask.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          {selectedTask.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="code" className="w-full">
                      <TabsList className="mb-4">
                        <TabsTrigger value="code">Код</TabsTrigger>
                        <TabsTrigger value="tests">Тесты</TabsTrigger>
                      </TabsList>

                      <TabsContent value="code">
                        <div className="space-y-4">
                          {/* Тест-кейсы */}
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-medium text-gray-800 mb-3">Тестовые случаи:</h3>
                            <div className="space-y-3">
                              {selectedTask.testCases.map((testCase, index) => (
                                <div
                                  key={index}
                                  className="bg-white rounded-lg p-3 border border-gray-200"
                                >
                                  <div className="flex items-start gap-2">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-medium">
                                      {index + 1}
                                    </div>
                                    <div className="flex-grow space-y-2">
                                      <div>
                                        <span className="font-medium text-gray-600">Вход:</span>
                                        <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
                                          {testCase.input}
                                        </code>
                                      </div>
                                      <div>
                                        <span className="font-medium text-gray-600">
                                          Ожидаемый результат:
                                        </span>
                                        <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
                                          {testCase.output}
                                        </code>
                                      </div>
                                      {testCase.explanation && (
                                        <div className="text-sm text-muted-foreground">
                                          {testCase.explanation}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Редактор кода */}
                          <div className="relative">
                            <Textarea
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                              onKeyDown={handleKeyDown}
                              className="w-full h-[400px] font-mono text-sm p-4 bg-white/70 border-purple-200 focus:border-purple-400 rounded-xl resize-none"
                              spellCheck="false"
                              placeholder="Введите ваш код здесь..."
                            />
                            <div className="absolute bottom-4 right-4 flex gap-2">
                              <Button
                                onClick={runTests}
                                disabled={isRunning}
                                className="bg-purple-600 hover:bg-purple-700"
                              >
                                {isRunning ? (
                                  <span className="flex items-center">
                                    <svg
                                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                      ></circle>
                                      <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                      ></path>
                                    </svg>
                                    Запуск...
                                  </span>
                                ) : (
                                  <span className="flex items-center">
                                    <Play className="h-4 w-4 mr-2" />
                                    Запустить тесты
                                  </span>
                                )}
                              </Button>
                              <div className="text-xs text-muted-foreground hidden sm:flex items-center">
                                <span>Ctrl + Enter для запуска</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="tests">
                        <ScrollArea className="h-[400px] pr-4">
                          <div className="space-y-4">
                            {testResults.length === 0 ? (
                              <div className="text-center text-muted-foreground py-8">
                                Запустите тесты, чтобы увидеть результаты
                              </div>
                            ) : (
                              testResults.map((result, index) => (
                                <div
                                  key={index}
                                  className={`p-4 rounded-lg border ${
                                    result.passed
                                      ? "bg-green-50 border-green-200"
                                      : "bg-red-50 border-red-200"
                                  }`}
                                >
                                  <div className="flex items-center mb-2">
                                    {result.passed ? (
                                      <Check className="h-5 w-5 text-green-500 mr-2" />
                                    ) : (
                                      <X className="h-5 w-5 text-red-500 mr-2" />
                                    )}
                                    <span className="font-medium">
                                      Тест {index + 1}: {result.passed ? "Пройден" : "Не пройден"}
                                    </span>
                                  </div>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium text-gray-600">Вход:</span>
                                      <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
                                        {result.input}
                                      </code>
                                    </div>
                                    <div>
                                      <span className="font-medium text-gray-600">
                                        Ожидаемый результат:
                                      </span>
                                      <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
                                        {result.expected}
                                      </code>
                                    </div>
                                    <div>
                                      <span className="font-medium text-gray-600">
                                        Полученный результат:
                                      </span>
                                      <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
                                        {result.actual}
                                      </code>
                                    </div>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </ScrollArea>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-8 text-center">
                <div className="max-w-md mx-auto">
                  <Code className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Выберите задачу</h3>
                  <p className="text-muted-foreground">
                    Выберите задачу из списка слева, чтобы начать её решение
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tasks;
