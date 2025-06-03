
import React from 'react';

const Header = () => {
  return (
    <header className="relative py-24 px-4 text-center overflow-hidden">
      {/* Gradient overlay for more elegance */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="animate-fade-in-up">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-romantic-burgundy to-transparent"></div>
            <div className="mx-4 text-2xl animate-heart-beat">✨</div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-romantic-burgundy to-transparent"></div>
          </div>
          
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gradient mb-8 leading-tight">
            Nossa História de Amor
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-600 mb-12 font-inter font-light italic max-w-3xl mx-auto leading-relaxed">
            Uma linha do tempo romântica dedicada ao nosso amor infinito
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl md:text-2xl text-romantic-burgundy font-medium mb-8">
            <div className="relative">
              <span className="font-playfair text-3xl md:text-4xl font-bold tracking-wide">Kassia</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-romantic-rose to-romantic-lilac"></div>
            </div>
            <span className="text-4xl md:text-5xl animate-heart-beat">💖</span>
            <div className="relative">
              <span className="font-playfair text-3xl md:text-4xl font-bold tracking-wide">Micaela</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-romantic-lilac to-romantic-rose"></div>
            </div>
          </div>
          
          {/* Decorative bottom element */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-romantic-gold"></div>
            <span className="text-romantic-gold text-lg">♡</span>
            <div className="w-12 h-px bg-gradient-to-r from-romantic-gold to-transparent"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
