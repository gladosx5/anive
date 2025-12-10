import { Gift, Sparkles } from 'lucide-react';

function PhotoGallery() {
  return (
    <section id="gallery-section" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
          Un Moment Spécial
        </h2>
        <p className="text-center text-gray-600 text-xl mb-16">
          Pour célébrer ces 50 magnifiques années
        </p>

        <div className="space-y-12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sophie - 50 ans"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-amber-400 to-rose-400 px-6 py-3 rounded-full shadow-lg">
                <p className="text-white font-bold text-lg">Cadeau Spécial</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 via-white to-pink-50 rounded-3xl p-12 shadow-2xl border-2 border-amber-200 pt-16">
              <div className="flex items-center justify-center mb-8">
                <Gift className="w-12 h-12 text-rose-500 mr-3" />
                <h3 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Coupon Cadeau
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-10 mb-8 border-2 border-dashed border-rose-300">
                <div className="text-center space-y-6">
                  <p className="text-2xl font-bold text-gray-800">
                    Une Soirée Bien-Être & Gastronomie
                  </p>

                  <div className="space-y-4 py-6">
                    <div className="flex items-center justify-center gap-3">
                      <Sparkles className="w-6 h-6 text-amber-500" />
                      <p className="text-xl text-gray-700 font-semibold">
                        Soin Spa Complet
                      </p>
                    </div>
                    <p className="text-gray-600">Massage, détente et relaxation</p>

                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto my-4"></div>

                    <div className="flex items-center justify-center gap-3">
                      <Sparkles className="w-6 h-6 text-amber-500" />
                      <p className="text-xl text-gray-700 font-semibold">
                        Dîner Gastronomique
                      </p>
                    </div>
                    <p className="text-gray-600">Au restaurant de votre choix</p>
                  </div>

                  <div className="pt-6 border-t-2 border-rose-200">
                    <p className="text-2xl font-bold text-rose-600 mb-3">
                      Enora & Sophie
                    </p>
                    <p className="text-lg text-gray-700 font-semibold">
                      Mère et Fille
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-700 text-lg">
                  À utiliser à votre convenance pour un moment privilégié ensemble
                </p>
                <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-3 rounded-full">
                  <p className="text-white font-bold text-lg">
                    Valable à vie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
