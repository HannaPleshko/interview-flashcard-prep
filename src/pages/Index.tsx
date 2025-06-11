
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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <DynamicBackground />

      <Header />

      <div className="flex-grow relative z-10">
        {/* Hero Section */}
        <AnimatedSection delay={200}>
          <HeroSection />
        </AnimatedSection>

        {/* Technologies Grid */}
        <AnimatedSection delay={400}>
          <TechnologiesSection />
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection delay={600}>
          <FeaturesSection />
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
