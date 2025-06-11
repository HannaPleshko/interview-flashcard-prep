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
    <div className="min-h-screen flex flex-col relative">
      <Header />

      <div className="flex-grow relative z-10">
        {/* Hero Section with Features */}
        <AnimatedSection delay={200}>
          <div className="relative">
            <DynamicBackground />
            <HeroSection />
          </div>
        </AnimatedSection>

        {/* Technologies Grid */}
        <AnimatedSection delay={400}>
          <div className="bg-white">
            <TechnologiesSection />
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
