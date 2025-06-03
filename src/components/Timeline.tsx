
import React from 'react';
import TimelineEvent from './TimelineEvent';

const Timeline = () => {
  const events = [
    {
      date: "Julho de 2018",
      title: "O primeiro olhar",
      description: `Nos conhecemos pela primeira vez.
O mundo ainda era outro, e a gente também.
Mas algo em mim soube…
que aquela menina de julho ia voltar de alguma forma.`
    },
    {
      date: "26 de julho de 2024",
      title: "A resposta que virou história",
      description: `Respondi teu stories.
Um gesto pequeno, quase nada.
Mas ali, o destino se espreguiçou — e nos empurrou pra frente.
Quem diria que um "oi" teria gosto de início?`
    },
    {
      date: "05 de setembro de 2024",
      title: "EU disse primeiro!",
      description: `O "eu te amo" escapou de mim antes de ti — e olha que eu me segurei!
Então fica registrado aqui, pra sempre:
EU disse primeiro. Tu depois. 😂❤️
Mas valeu cada segundo até esse momento.`
    },
    {
      date: "13 de dezembro de 2024",
      title: "O encontro (com direito à UPA)",
      description: `Nos vimos pela primeira vez com o coração batendo mais forte que nunca.
Teve beijo. Teve nervoso. Teve… UPA.
Sério, a gente já começou a história no modo "intenso".`
    },
    {
      date: "14 de dezembro de 2024",
      title: "Teu aniversário, meu presente",
      description: `Teu dia. Teu sorriso.
Conheci tua mãe e tua irmã — e ali vi de onde vinha tanta força e beleza.
Teve churrasco, risadas e farofa no chão (e eu tentando disfarçar).`
    },
    {
      date: "16 de dezembro de 2024",
      title: "O pedido de namoro cinematográfico",
      description: `Parecia fanfic. Mas era real.
Luzes, emoção, meu coração na mão e tu aceitando.
Um pedido de namoro que podia ganhar Oscar de Melhor Roteiro Romântico.`
    },
    {
      date: "31 de dezembro de 2024",
      title: "Nosso Réveillon",
      description: `Estourou o champanhe, e a gente junto, em contagem regressiva.
Te dei um beijo quando o mundo virou 2025.
A troca de roupa no escuro por sensorial foi só a cereja do bolo. Kkkkkkk.
E eu pensei: "É com ela que eu quero viver todos os anos da minha vida."`
    },
    {
      date: "(sem data exata)",
      title: "Viagem a João Pessoa",
      description: `Mar, brisa no rosto, pés na areia.
A cidade era linda, mas tu mais ainda.
Teu sorriso no sol da tarde, tua mão na minha —
e a certeza de que a gente é lar uma na outra.`
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-gradient mb-16 animate-fade-in-up">
          📆 Linha do Tempo do Nosso Amor
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 timeline-line" 
               style={{ height: 'calc(100% - 2rem)', top: '1rem' }}>
          </div>
          
          {/* Timeline events */}
          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              isLeft={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
