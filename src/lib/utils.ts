import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to add CSS classes to HTML content for better formatting
export function formatQuestionText(htmlContent: string): string {
  return htmlContent
    .replace(/<p>/g, '<p class="mb-3 leading-relaxed">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-3 space-y-1 ml-4">')
    .replace(/<li>/g, '<li class="text-sm">')
    .replace(/<strong>/g, '<strong class="font-semibold text-blue-700 dark:text-blue-300">')
    .replace(/<em>/g, '<em class="italic text-gray-600 dark:text-gray-400">')
    .replace(/<br\/>/g, '<br class="mb-2"/>')
    .replace(/<div>/g, '<div class="space-y-2">');
}
