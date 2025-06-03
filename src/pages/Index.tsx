
import React from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import PoemsSection from '../components/PoemsSection';
import FloatingHearts from '../components/FloatingHearts';
import FallingPetals from '../components/FallingPetals';
import AudioPlayer from '../components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FallingPetals />
      <FloatingHearts />
      <AudioPlayer />
      
      <div className="relative z-10">
        <Header />
        <Timeline />
        <PoemsSection />
        
        <footer className="py-20 text-center relative">
          <div className="max-w-3xl mx-auto px-4">
            {/* Decorative top element */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-romantic-gold"></div>
              <span className="text-romantic-gold text-2xl">✨</span>
              <div className="w-16 h-px bg-gradient-to-r from-romantic-gold to-transparent"></div>
            </div>
            
            <div className="card-romantic rounded-3xl p-12 mb-8">
              <p className="font-playfair text-3xl md:text-4xl text-gradient mb-6 italic leading-relaxed">
                "É com ela que eu quero viver todos os anos da minha vida."
              </p>
              <div className="text-romantic-burgundy font-medium text-xl tracking-wide">
                Com amor infinito, sempre 💕
              </div>
            </div>
            
            {/* Bottom decorative element */}
            <div className="flex justify-center items-center gap-3">
              <span className="text-romantic-rose text-lg">♡</span>
              <div className="w-12 h-px bg-gradient-to-r from-romantic-rose to-romantic-lilac"></div>
              <span className="text-romantic-lilac text-lg">♡</span>
              <div className="w-12 h-px bg-gradient-to-r from-romantic-lilac to-romantic-burgundy"></div>
              <span className="text-romantic-burgundy text-lg">♡</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
