import React from 'react';
import { Play, Recycle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-green-800 mb-6">
              Desa Hijau
              <span className="block text-green-600">Bebas Sampah</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Bersama membangun desa yang bersih, sehat, dan berkelanjutan melalui inovasi pengelolaan sampah yang ramah lingkungan.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Play className="w-5 h-5 inline mr-2" />
              Tonton Video Profile
            </button>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="/assets/images/hero-image.jpg"
                alt="Desa Hijau"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
                <Recycle className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;