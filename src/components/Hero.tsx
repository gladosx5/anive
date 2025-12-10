import { Cake, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onCakeClick: () => void;
}

function Hero({ onCakeClick }: HeroProps) {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

      <div className="text-center z-10 space-y-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-12 h-12 text-amber-400 animate-pulse" />
            <Sparkles className="w-8 h-8 text-rose-400 animate-pulse delay-100" />
            <Sparkles className="w-10 h-10 text-pink-400 animate-pulse delay-200" />
          </div>

          <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 bg-clip-text text-transparent mb-4">
            50 ans
          </h1>

          <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
            Sophie Didier
          </h2>

          <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl text-gray-700">
            <span>🎉</span>
            <p>10 décembre 2025</p>
            <span>🎉</span>
          </div>
        </div>

        <button
          onClick={scrollToGallery}
          className="group mt-12 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pink-300/50"
        >
          <span className="flex items-center gap-3">
            <Cake className="w-8 h-8 group-hover:animate-bounce" />
            Voir les souvenirs
            <Cake className="w-8 h-8 group-hover:animate-bounce" />
          </span>
        </button>

        <p className="text-xl md:text-2xl text-gray-600 italic mt-8">
          "50 ans de joie, de rires et de merveilleux souvenirs"
        </p>

        <div className="pt-12 animate-bounce">
          <ChevronDown className="w-8 h-8 text-rose-500 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
