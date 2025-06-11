
import React from "react";

const codeSnippets = [
  "const hello = 'world';",
  "function() { return true; }",
  "import React from 'react';",
  "SELECT * FROM users;",
  "<div className='container'>",
  "npm install package",
  "git commit -m 'fix'",
  "async/await pattern",
  "useState hook",
  "API endpoint"
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className={`absolute text-xs font-mono text-purple-300/20 animate-float-${index % 3 + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {snippet}
        </div>
      ))}
      
      {/* Geometric Shapes */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full animate-float-slow`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 1.2}s`,
            animationDuration: `${12 + Math.random() * 8}s`
          }}
        />
      ))}
      
      {/* Glowing Orbs */}
      {[...Array(5)].map((_, index) => (
        <div
          key={`orb-${index}`}
          className={`absolute w-20 h-20 bg-gradient-radial from-purple-400/5 to-transparent rounded-full blur-xl animate-pulse-slow`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
