import { useState } from 'react';
import { Heart } from 'lucide-react';
import PhotoGallery from './components/PhotoGallery';
import Hero from './components/Hero';
import FloatingElements from './components/FloatingElements';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50">
      <FloatingElements />

      <Hero onCakeClick={() => setShowConfetti(true)} />

      <PhotoGallery />

      <footer className="bg-white/70 backdrop-blur-sm py-8 text-center">
        <div className="flex items-center justify-center gap-2 text-rose-600">
          <Heart className="w-5 h-5 fill-current" />
          <p className="text-lg">Joyeux 50ème anniversaire Sophie !</p>
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <p className="text-gray-600 mt-2">10 décembre 2025</p>
      </footer>
    </div>
  );
}

export default App;
