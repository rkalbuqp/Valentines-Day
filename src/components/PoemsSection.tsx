
import React from 'react';
import PoemCard from './PoemCard';

const PoemsSection = () => {
  const poems = [
    {
      title: '"Te encontrei antes de saber"',
      content: `Te encontrei quando o mundo ainda era cedo,
sem saber que em ti acharia meu enredo.
Teu nome ficou escondido no tempo,
mas meu coração te reconheceu no vento.`
    },
    {
      title: '"Primeiro Te Amo"',
      content: `Eu disse primeiro, confesso sorrindo,
mas cada letra saiu se abrindo.
Te amar foi leve, foi maré tranquila,
e o que começou com "oi" virou família.`
    },
    {
      title: '"UPA e Amor"',
      content: `Um beijo, uma emergência, um coração na mão,
e mesmo com febre, eu sabia a direção.
Era pra ser. Era a gente ali.
Te ver sorrindo já era o que eu escolhi.`
    },
    {
      title: '"Fanfic Real"',
      content: `Ninguém acreditaria, mas foi real,
o pedido, a emoção, o toque final.
Um romance digno de livro bonito,
onde te tenho — e isso é infinito.`
    },
    {
      title: '"Réveillon Sensorial"',
      content: `Troquei a blusa errada, rimos sem parar,
mas o beijo da virada fez tudo se acertar.
Entre as luzes do céu e teus olhos brilhando,
percebi: contigo, estou sempre começando.`
    },
    {
      title: '"João Pessoa, tu e o mar"',
      content: `A cidade era nova, mas teu riso, meu lar.
Os dias eram curtos, o tempo não quis parar.
Mas ficou em mim tua voz e teu olhar,
e a memória doce de só querer te amar.`
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-gradient mb-16 animate-fade-in-up">
          ✍️ Poemas para Micaela
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {poems.map((poem, index) => (
            <PoemCard
              key={index}
              title={poem.title}
              content={poem.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoemsSection;
