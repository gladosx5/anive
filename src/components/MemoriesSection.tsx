import { Heart, Sparkles, Star } from 'lucide-react';

const memories = [
  {
    icon: Heart,
    title: 'Une femme extraordinaire',
    text: 'Sophie illumine la vie de tous ceux qui la connaissent avec sa gentillesse et son sourire radieux.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Sparkles,
    title: '50 années de lumière',
    text: 'Chaque année a été marquée par des moments magiques, des rires partagés et des souvenirs précieux.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Star,
    title: 'Une vie inspirante',
    text: 'Son énergie positive et sa joie de vivre sont une source d\'inspiration pour tous.',
    color: 'from-pink-500 to-rose-500'
  }
];

const messages = [
  {
    text: 'Joyeux anniversaire Sophie ! Que cette nouvelle décennie soit remplie de bonheur et de belles surprises.',
    author: 'Ta famille qui t\'aime'
  },
  {
    text: '50 ans et toujours aussi rayonnante ! Merci pour tous ces merveilleux moments partagés ensemble.',
    author: 'Tes amis'
  },
  {
    text: 'À la plus merveilleuse des personnes, que tes rêves continuent de se réaliser !',
    author: 'Ceux qui t\'admirent'
  }
];

function MemoriesSection() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
          Hommage à Sophie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {memories.map((memory, index) => {
            const Icon = memory.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${memory.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {memory.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {memory.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Messages d'amour
          </h3>
          <div className="space-y-8">
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg border-l-4 border-rose-500 transform transition-all duration-300 hover:scale-105"
              >
                <p className="text-xl text-gray-700 italic mb-4 leading-relaxed">
                  "{message.text}"
                </p>
                <p className="text-rose-600 font-semibold text-right">
                  — {message.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <p className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎂 Bonne fête Sophie ! 🎂
            </p>
            <p className="text-xl text-white/90">
              Que tes 50 ans soient le début d'un nouveau chapitre extraordinaire
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemoriesSection;
