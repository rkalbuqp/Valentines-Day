
import React from 'react';

interface PoemCardProps {
  title: string;
  content: string;
  index: number;
}

const PoemCard: React.FC<PoemCardProps> = ({ title, content, index }) => {
  const animationDelay = `${index * 200}ms`;

  return (
    <div 
      className="card-romantic rounded-3xl p-10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/40 animate-slide-in-left relative overflow-hidden"
      style={{ animationDelay }}
    >
      {/* Decorative quote mark */}
      <div className="absolute top-6 left-6 text-6xl font-playfair text-romantic-rose/20 leading-none">"</div>
      
      <div className="relative z-10">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gradient mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line italic text-lg font-light">
          {content}
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-romantic-gold/30 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-romantic-gold/40 rounded-full"></div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-romantic-lilac/5 rounded-3xl"></div>
    </div>
  );
};

export default PoemCard;
