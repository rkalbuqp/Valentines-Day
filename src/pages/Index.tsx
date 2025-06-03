/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Play,
  Pause,
  Volume2,
  Sparkles,
  Star,
  Camera,
  MessageCircle,
  Calendar,
  Clock,
  Gift,
  Music,
} from "lucide-react";
import PrimeiroDia from "/public/primeiro-dia.jpg";
import JP from "/public/JP.jpg";
import DormindoNoColo from "/public/dormindo-no-colo.jpg";
import AnoNovo from "/public/ano-novo.png";
import DiaDoNamoro from "/public/dia-do-namoro.jpg";
import Cinema from "/public/cinema.jpg";
import Trio from "/public/trio.jpg";
import Avos from "/public/avos.jpg";
import Sitio from "/public/sitio.jpg";
import Saudaded from "/public/saudaded.jpg";
interface TimelineEvent {
  date: string;
  title: string;
  description: string[];
  emoji?: string;
  colors: string[];
}

interface LoveMessage {
  title: string;
  message: string;
  icon: string;
}

interface PhotoMemory {
  title: string;
  description: string;
  placeholder: string; // Caminho da imagem ou ID do Unsplash
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Julho de 2018",
    title: "O primeiro olhar",
    description: [
      "Nos conhecemos pela primeira vez.",
      "O mundo ainda era outro, e a gente também.",
      "Mas algo em mim soube…",
      "que aquela menina de julho ia voltar de alguma forma.",
    ],
    emoji: "👀",
    colors: ["from-rose-400", "via-rose-500", "to-rose-600"],
  },
  {
    date: "26 de julho de 2024",
    title: "A resposta que virou história",
    description: [
      "Respondi teu stories.",
      "Um gesto pequeno, quase nada.",
      "Mas ali, o destino se espreguiçou — e nos empurrou pra frente.",
      'Quem diria que um "oi" teria gosto de início?',
    ],
    emoji: "💬",
    colors: ["from-lilac-400", "via-lilac-500", "to-purple-600"],
  },
  {
    date: "05 de setembro de 2024",
    title: "EU disse primeiro!",
    description: [
      'O "eu amo você" escapou de mim antes de ti — e olha que eu me segurei!',
      "Então fica registrado aqui, pra sempre:",
      "EU disse primeiro. Tu depois. 😂❤️",
      "Mas valeu cada segundo até esse momento.",
    ],
    emoji: "💕",
    colors: ["from-burnRed-400", "via-red-500", "to-burnRed-600"],
  },
  {
    date: "13 de dezembro de 2024",
    title: "O encontro (com direito à UPA)",
    description: [
      "Nos vimos pela primeira vez com o coração batendo mais forte que nunca.",
      "Teve beijo. Teve nervoso. Teve… UPA.",
      'Sério, a gente já começou a história no modo "intenso".',
    ],
    emoji: "🏥",
    colors: ["from-gold-400", "via-orange-500", "to-gold-600"],
  },
  {
    date: "14 de dezembro de 2024",
    title: "Teu aniversário, meu presente",
    description: [
      "Teu dia. Teu sorriso.",
      "Te dei um presente que não era só meu, mas nosso.",
      "Um dia de celebração, risadas e amor.",
      "E eu pensei: como é bom ter você na minha vida.",
    ],
    emoji: "🎂",
    colors: ["from-rose-400", "via-peach-400", "to-lilac-500"],
  },
  {
    date: "16 de dezembro de 2024",
    title: "O pedido de namoro cinematográfico",
    description: [
      "Parecia fanfic. Mas era real.",
      "Luzes, emoção, meu coração na mão e um início em guardanapo.",
      "Um pedido de namoro que podia ganhar Oscar de Melhor Roteiro Romântico.",
    ],
    emoji: "🎬",
    colors: ["from-lilac-400", "via-purple-500", "to-burnRed-500"],
  },
  {
    date: "31 de dezembro de 2024",
    title: "Nosso Réveillon",
    description: [
      "Estourou o champanhe, e a gente junto, em contagem regressiva.",
      "Te dei um beijo quando o mundo virou 2025.",
      "A troca de roupa no escuro por sensorial foi só a cereja do bolo. Kkkkkkk.",
      'E eu pensei: "É com ela que eu quero viver todos os anos da minha vida."',
    ],
    emoji: "🍾",
    colors: ["from-gold-400", "via-yellow-500", "to-rose-500"],
  },
  {
    date: "Viagem especial",
    title: "Viagem a João Pessoa",
    description: [
      "Mar, brisa no rosto, pés na areia.",
      "A cidade era linda, mas tu mais ainda.",
      "Teu sorriso no sol da tarde, tua mão na minha —",
      "e a certeza de que a gente é lar uma na outra.",
    ],
    emoji: "🏖️",
    colors: ["from-burnRed-400", "via-orange-400", "to-gold-500"],
  },
];

const poems = [
  {
    title: "Te encontrei antes de saber",
    verses: [
      "Te encontrei quando o mundo ainda era cedo,",
      "sem saber que em ti acharia meu enredo.",
      "Teu nome ficou escondido no tempo,",
      "mas meu coração te reconheceu no vento.",
    ],
    colors: ["from-rose-500", "to-lilac-500"],
  },
  {
    title: "Primeiro Te Amo",
    verses: [
      "Eu disse primeiro, confesso sorrindo,",
      "mas cada letra saiu se abrindo.",
      "Te amar foi leve, foi maré tranquila,",
      'e o que começou com "oi" está virando família.',
    ],
    colors: ["from-burnRed-500", "to-rose-500"],
  },
  {
    title: "UPA e Amor",
    verses: [
      "Um beijo, uma emergência, um coração na mão,",
      "e mesmo com febre, eu sabia a direção.",
      "Era pra ser. Era a gente ali.",
      "Te ver sorrindo já era o que eu escolhi.",
    ],
    colors: ["from-gold-500", "to-orange-500"],
  },
  {
    title: "Fanfic Real",
    verses: [
      "Ninguém acreditaria, mas foi real,",
      "o pedido, a emoção, o toque final.",
      "Um romance digno de livro bonito,",
      "onde te tenho — e isso é infinito.",
    ],
    colors: ["from-lilac-500", "to-purple-600"],
  },
  {
    title: "Réveillon Sensorial",
    verses: [
      "Troquei a blusa errada, rimos sem parar,",
      "mas o beijo da virada fez tudo se acertar.",
      "Entre as luzes do céu e teus olhos brilhando,",
      "percebi: contigo, estou sempre começando.",
    ],
    colors: ["from-gold-500", "to-rose-500"],
  },
  {
    title: "João Pessoa, tu e o mar",
    verses: [
      "A cidade era nova, mas teu riso, meu lar.",
      "Os dias eram curtos, o tempo não quis parar.",
      "Mas ficou em mim tua voz e teu olhar,",
      "e a memória doce de só querer te amar.",
    ],
    colors: ["from-burnRed-500", "to-gold-500"],
  },
];

const loveMessages: LoveMessage[] = [
  {
    title: "Bom dia, meu amor",
    message:
      "Cada manhã contigo é uma nova página da nossa história. Teu sorriso é meu café da manhã favorito! ☀️",
    icon: "🌅",
  },
  {
    title: "Saudade instantânea",
    message:
      "Mesmo quando estou contigo, já sinto saudade do próximo momento ao teu lado. É amor que transborda! 💫",
    icon: "💭",
  },
  {
    title: "Teu riso",
    message:
      "Teu riso é a trilha sonora perfeita da minha vida. Quando tu ris, o mundo fica mais bonito. 🎵",
    icon: "😄",
  },
  {
    title: "Nossos planos",
    message:
      "Cada plano que fazemos juntas me deixa mais animada para o nosso futuro. Vamos conquistar o mundo! 🌍",
    icon: "✨",
  },
];

const photoMemories: PhotoMemory[] = [
  {
    title: "Nosso primeiro encontro",
    description: "O nervosismo gostoso e os sorrisos tímidos",
    placeholder: PrimeiroDia,
  },
  {
    title: "João Pessoa",
    description: "Mar, sol e a certeza de que era para sempre",
    placeholder: JP,
  },
  {
    title: "Momentos especiais",
    description: "Cada segundo vale uma foto, cada foto uma memória",
    placeholder: DormindoNoColo,
  },
  {
    title: "Nosso Réveillon",
    description: "Luzes, música e o beijo da virada",
    placeholder: AnoNovo,
  },
  {
    title: "Dia do pedido de namoro",
    description: "Aqui parece até uma fanfic",
    placeholder: DiaDoNamoro,
  },
  {
    title: "Cineminha",
    description: "Em casal e com direito a pipoca",
    placeholder: Cinema,
  },
  {
    title: "Um trio diferenciado",
    description: "Um trio bem diferenciado que aquece o coração",
    placeholder: Trio,
  },
  {
    title: "Avós que ganhei",
    description: "Fui abençoada com avós que me amam",
    placeholder: Avos,
  },
  {
    title: "Em um dos melhores lugares",
    description: "Próxima vez é com pamonha",
    placeholder: Sitio,
  },
  {
    title: "E a saudade",
    description: "Onde mora toda a expectativa do reencontro",
    placeholder: Saudaded,
  },
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState<
    "timeline" | "poems" | "messages" | "photos" | "counter"
  >("timeline");
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loveTimeString, setLoveTimeString] = useState("");
  const [kissTimeString, setKissTimeString] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  // Data do primeiro "eu amo você" (05 de setembro de 2024)
  const loveStartDate = new Date("2024-09-05");
  // Data do primeiro beijo (13 de dezembro de 2024)
  const kissStartDate = new Date("2024-12-13");

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleEvents([0]);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (
      visibleEvents.length > 0 &&
      visibleEvents.length < timelineEvents.length
    ) {
      const timer = setTimeout(() => {
        setVisibleEvents((prev) => [...prev, prev.length]);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [visibleEvents]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Contador do primeiro "eu amo você"
      const loveDiff = now.getTime() - loveStartDate.getTime();
      const loveDays = Math.floor(loveDiff / (1000 * 60 * 60 * 24));
      const loveHours = Math.floor(
        (loveDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const loveMinutes = Math.floor(
        (loveDiff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const loveSeconds = Math.floor((loveDiff % (1000 * 60)) / 1000);

      setLoveTimeString(
        `${loveDays}d ${loveHours}h ${loveMinutes}m ${loveSeconds}s`
      );

      // Contador do primeiro beijo
      const kissDiff = now.getTime() - kissStartDate.getTime();
      const kissDays = Math.floor(kissDiff / (1000 * 60 * 60 * 24));
      const kissHours = Math.floor(
        (kissDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const kissMinutes = Math.floor(
        (kissDiff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const kissSeconds = Math.floor((kissDiff % (1000 * 60)) / 1000);

      setKissTimeString(
        `${kissDays}d ${kissHours}h ${kissMinutes}m ${kissSeconds}s`
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Se o autoplay falhar (políticas do navegador), não faz nada
        console.log("Autoplay bloqueado pelo navegador");
      });
    }
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const sections = [
    { key: "timeline", label: "Timeline", icon: Calendar },
    { key: "poems", label: "Poemas", icon: Heart },
    { key: "messages", label: "Mensagens", icon: MessageCircle },
    { key: "photos", label: "Fotos", icon: Camera },
    { key: "counter", label: "Contador", icon: Clock },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Floating Hearts */}
      <div className="floating-hearts">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="heart">
            💕
          </div>
        ))}
      </div>

      {/* Floating Petals */}
      <div className="petals">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Audio Player */}
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Para adicionar sua música, substitua o src abaixo pelo caminho da sua música */}
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Enhanced Music Control */}
      <div className="fixed top-4 right-6 z-50">
        <button
          onClick={handlePlayPause}
          className="glass-effect-strong rounded-full p-2 hover:scale-110 transition-all duration-300 group"
        >
          <div className="flex items-center gap-2 text-rose-600 font-inter font-semibold">
            <div className="relative">
              {isPlaying ? (
                <Pause className="w-6 h-6 text-rose-600" />
              ) : (
                <Play className="w-6 h-6 text-rose-600" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-lilac-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <div>Aperta play, amor ❤️</div>
          </div>
        </button>
      </div>

      {/* Enhanced Header */}
      <div className="text-center pt-16 pb-12 px-6 relative z-10">
        <div className="relative mb-8">
          <h1 className="font-dancing text-7xl md:text-8xl font-bold text-gradient-magical mb-6 relative animate-bounce-in">
            Kassia & Micaela
            <div className="absolute -top-4 -right-4 animate-float-gentle">
              <Sparkles className="w-10 h-10 text-gold-400 animate-pulse" />
            </div>
            <div
              className="absolute -bottom-2 -left-2 animate-float-gentle"
              style={{ animationDelay: "1s" }}
            >
              <Star className="w-8 h-8 text-rose-400 animate-pulse" />
            </div>
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-lilac-400 to-gold-400 opacity-30 blur-3xl -z-10 animate-pulse" />
        </div>

        <p className="font-playfair text-2xl text-gradient-love italic mb-8 relative animate-fade-in-magical">
          Nossa História de Amor Infinita
          <div className="absolute inset-0 bg-white/60 blur-sm -z-10" />
        </p>

        <div className="flex justify-center animate-float-gentle mb-8">
          <div className="relative">
            <Heart className="w-12 h-12 text-rose-500 fill-current animate-pulse" />
            <div className="absolute inset-0 animate-ping">
              <Heart className="w-12 h-12 text-rose-300 fill-current opacity-75" />
            </div>
            <div
              className="absolute inset-0 animate-ping"
              style={{ animationDelay: "1s" }}
            >
              <Heart className="w-12 h-12 text-lilac-300 fill-current opacity-50" />
            </div>
          </div>
        </div>

        {/* Live Love Counter */}
        <div className="love-counter rounded-2xl p-6 max-w-sm mx-auto">
          <p className="font-inter text-sm text-rose-700 mb-2">
            Nos amando há:
          </p>
          <p className="font-dancing text-3xl text-gradient-magical font-bold">
            {loveTimeString}
          </p>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="flex flex-col items-center mb-12 px-4 sm:px-6 space-y-2">
        <p className="text-sm text-gray-500">Role para o lado ⮕</p>

        <div className="glass-effect-strong rounded-full p-3 shadow-2xl w-full max-w-screen-lg relative">
          <div className="flex gap-2 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory">
            {sections.map((section) => {
              const IconComponent = section.icon;
              const isActive = currentSection === section.key;

              return (
                <button
                  key={section.key}
                  onClick={() => setCurrentSection(section.key as any)}
                  className={`navigation-pill min-w-[max-content] snap-start px-6 py-3 rounded-full font-inter font-semibold transition-all duration-500 relative overflow-hidden flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? "active text-white shadow-2xl"
                      : "text-burnRed-700 hover:text-rose-600"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="relative z-10">{section.label}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-lilac-400 to-gold-400 animate-shimmer" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Barra guia abaixo da navegação */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full opacity-60 pointer-events-none" />
        </div>
      </div>

      {/* Timeline Section */}
      {currentSection === "timeline" && (
        <div className="px-6 pb-12 relative z-10">
          <div className="max-w-lg mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 via-lilac-400 via-gold-400 to-burnRed-400 rounded-full shadow-lg"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative mb-16 transition-all duration-1000 ${
                  visibleEvents.includes(index)
                    ? "opacity-100 animate-slide-up-elegant"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`timeline-dot absolute left-6 w-6 h-6 rounded-full bg-gradient-to-r ${event.colors.join(
                    " "
                  )}`}
                ></div>

                <div className="ml-20">
                  <div className="romantic-card p-8 rounded-3xl relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${event.colors.join(
                        " "
                      )} opacity-8 rounded-3xl`}
                    />

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <span className="text-4xl animate-float-gentle">
                        {event.emoji}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl font-bold text-burnRed-800 mb-2">
                          {event.title}
                        </h3>
                        <p className="font-inter text-sm text-lilac-700 font-semibold bg-white/60 px-4 py-2 rounded-full inline-block">
                          {event.date}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <Star className="w-6 h-6 text-gold-400 fill-current animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-4 relative z-10">
                      {event.description.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="font-inter text-gray-800 leading-relaxed text-base"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Poems Section */}
      {currentSection === "poems" && (
        <div className="px-6 pb-12 relative z-10">
          <div className="max-w-lg mx-auto space-y-10">
            {poems.map((poem, index) => (
              <div
                key={index}
                className="romantic-card p-8 rounded-3xl relative overflow-hidden animate-fade-in-magical"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${poem.colors.join(
                    " "
                  )} opacity-12 rounded-3xl`}
                />

                <div className="relative z-10">
                  <h3 className="font-dancing text-4xl font-bold text-gradient-magical mb-8 text-center relative">
                    {poem.title}
                    <div className="absolute -top-2 -right-2 animate-float-gentle">
                      <Heart className="w-7 h-7 text-rose-400 fill-current animate-pulse" />
                    </div>
                  </h3>
                  <div className="space-y-4">
                    {poem.verses.map((verse, verseIndex) => (
                      <p
                        key={verseIndex}
                        className="font-playfair text-burnRed-800 leading-relaxed text-center text-lg italic"
                      >
                        {verse}
                      </p>
                    ))}
                  </div>
                  <div className="flex justify-center mt-8">
                    <div className="flex gap-3">
                      <Heart className="w-5 h-5 text-rose-400 fill-current animate-pulse" />
                      <Heart
                        className="w-5 h-5 text-lilac-400 fill-current animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <Heart
                        className="w-5 h-5 text-gold-400 fill-current animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Messages Section */}
      {currentSection === "messages" && (
        <div className="px-6 pb-12 relative z-10">
          <div className="max-w-lg mx-auto space-y-8">
            <div className="text-center mb-10">
              <h2 className="font-dancing text-4xl text-gradient-magical mb-4">
                Mensagens do Coração
              </h2>
              <p className="font-playfair text-lg text-rose-700 italic">
                Pequenos bilhetes de amor para ti
              </p>
            </div>

            {loveMessages.map((msg, index) => (
              <div
                key={index}
                className="message-bubble p-6 rounded-2xl animate-fade-in-magical"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-3xl animate-bounce-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {msg.icon}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-playfair text-lg font-bold text-rose-800 mb-2">
                      {msg.title}
                    </h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photos Section */}
      {currentSection === "photos" && (
        <div className="px-6 pb-12 relative z-10">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-dancing text-4xl text-gradient-magical mb-4">
                Nossa Galeria do Amor
              </h2>
              <p className="font-playfair text-lg text-rose-700 italic">
                Cada foto conta uma história
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {photoMemories.map((photo, index) => (
                <div
                  key={index}
                  className="photo-frame rounded-2xl p-4 animate-fade-in-magical"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-lilac-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={photo.placeholder}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-playfair font-bold text-sm text-rose-800 mb-1">
                    {photo.title}
                  </h4>
                  <p className="font-inter text-xs text-gray-600 mb-2">
                    {photo.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Counter Section */}
      {currentSection === "counter" && (
        <div className="px-6 pb-12 relative z-10">
          <div className="max-w-lg mx-auto text-center">
            <div className="romantic-card p-10 rounded-3xl">
              <div className="mb-8">
                <h2 className="font-dancing text-5xl text-gradient-magical mb-6">
                  Nosso Tempo de Amor
                </h2>
                <p className="font-playfair text-lg text-rose-700 italic mb-8">
                  Contadores dos nossos momentos especiais
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="glass-effect-strong rounded-2xl p-6">
                  <h3 className="font-playfair text-xl text-rose-800 mb-2">
                    Primeiro "Eu amo você"
                  </h3>
                  <p className="font-inter text-sm text-rose-600 mb-4">
                    05 de setembro de 2024
                  </p>
                  <div className="font-dancing text-4xl text-gradient-love font-bold mb-2">
                    {loveTimeString}
                  </div>
                  <p className="font-inter text-rose-600 text-sm">
                    de amor declarado
                  </p>
                </div>

                <div className="glass-effect-strong rounded-2xl p-6">
                  <h3 className="font-playfair text-xl text-lilac-800 mb-2">
                    Primeiro beijo
                  </h3>
                  <p className="font-inter text-sm text-lilac-600 mb-4">
                    13 de dezembro de 2024
                  </p>
                  <div className="font-dancing text-4xl text-gradient-magical font-bold mb-2">
                    {kissTimeString}
                  </div>
                  <p className="font-inter text-lilac-600 text-sm">
                    desde nosso primeiro beijo
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center gap-4">
                  <div className="glass-effect rounded-xl p-4 flex-1">
                    <div className="font-dancing text-2xl text-rose-600 font-bold">
                      ∞
                    </div>
                    <div className="font-inter text-xs text-gray-600">
                      Beijos dados
                    </div>
                  </div>
                  <div className="glass-effect rounded-xl p-4 flex-1">
                    <div className="font-dancing text-2xl text-lilac-600 font-bold">
                      ∞
                    </div>
                    <div className="font-inter text-xs text-gray-600">
                      Eu amo vocês ditos
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-4">
                  <div className="font-dancing text-2xl text-gold-600 font-bold">
                    Para sempre
                  </div>
                  <div className="font-inter text-xs text-gray-600">
                    Tempo que vamos nos amar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Footer Message */}
      <div className="text-center pb-16 px-6 relative z-10">
        <div className="glass-effect-strong rounded-3xl p-10 max-w-md mx-auto">
          <p className="font-dancing text-3xl text-gradient-magical mb-6">
            Com todo amor, Kassia 💕
          </p>
          <p className="font-playfair text-base text-rose-700 italic mb-6">
            "Tu és minha pessoa favorita no mundo inteiro"
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className="w-4 h-4 text-rose-400 fill-current animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
