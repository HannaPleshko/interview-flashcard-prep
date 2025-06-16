
import React from 'react';

interface UnifiedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UnifiedBackground: React.FC<UnifiedBackgroundProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 ${className}`}>
      {children}
    </div>
  );
};

export { UnifiedBackground };
