
import React from 'react';
import { Heart } from 'lucide-react';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  isLeft?: boolean;
  index: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ 
  date, 
  title, 
  description, 
  isLeft = false,
  index 
}) => {
  const animationDelay = `${index * 300}ms`;

  return (
    <div 
      className={`flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} items-center mb-20 group animate-fade-in-up`}
      style={{ animationDelay }}
    >
      <div className={`flex-1 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
        <div className="card-romantic rounded-3xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/40 relative overflow-hidden">
          {/* Decorative corner element */}
          <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-16 h-16 bg-gradient-to-br from-romantic-rose/20 to-romantic-lilac/20 rounded-br-full ${isLeft ? 'rounded-bl-3xl' : 'rounded-bl-full rounded-br-none rounded-tr-3xl'}`}></div>
          
          <div className="relative z-10">
            <div className="text-romantic-burgundy font-playfair text-lg font-semibold mb-3 tracking-wide">
              {date}
            </div>
            <h3 className="font-playfair text-3xl font-bold text-gradient mb-4 leading-tight">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg font-light">
              {description}
            </p>
          </div>
          
          {/* Subtle decorative line */}
          <div className={`absolute bottom-4 ${isLeft ? 'left-8' : 'right-8'} w-12 h-px bg-gradient-to-r from-romantic-gold to-transparent`}></div>
        </div>
      </div>
      
      <div className="relative flex items-center justify-center">
        <div className="w-8 h-8 bg-gradient-to-br from-romantic-rose via-romantic-lilac to-romantic-burgundy rounded-full border-4 border-white shadow-xl relative z-10 group-hover:animate-heart-beat transition-all duration-300 group-hover:scale-110">
          <Heart className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" />
        </div>
        {/* Glow effect */}
        <div className="absolute w-12 h-12 bg-gradient-to-br from-romantic-rose/30 to-romantic-lilac/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex-1"></div>
    </div>
  );
};

export default TimelineEvent;
