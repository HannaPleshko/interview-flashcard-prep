import { Code, Database, Globe, Layers, Server, Zap, Sparkles, Brain, Target } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="pt-12 md:pt-16 relative overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Code, Database, Globe, Layers, Server, Zap].map((Icon, index) => (
          <Icon
            key={index}
            className={`absolute text-purple-200/10 w-8 h-8 animate-float-${(index % 3) + 1}`}
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
