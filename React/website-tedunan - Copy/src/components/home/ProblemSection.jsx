import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Mengapa Masalah Sampah Menjadi Serius?
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pencemaran Lingkungan</h3>
            <p className="text-gray-600">Sampah yang tidak terkelola dengan baik mencemari tanah, air, dan udara, merusak ekosistem alami.</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Masalah Kesehatan</h3>
            <p className="text-gray-600">Penumpukan sampah menjadi sarang penyakit dan menimbulkan berbagai masalah kesehatan masyarakat.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kerugian Ekonomi</h3>
            <p className="text-gray-600">Biaya pengelolaan sampah yang tinggi dan kehilangan potensi ekonomi dari daur ulang.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;