import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import TechnologiesSection from "@/components/TechnologiesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col relative overflow-hidden">
      <FloatingElements />

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
