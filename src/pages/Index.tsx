import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Выберите технологию для изучения
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Изучайте теорию через карточки с вопросами, отслеживайте прогресс с помощью статусов 'Учу', 'Повторяю' и 'Знаю', практикуйтесь с разными уровнями сложности.</p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <TechnologiesSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
