import React from 'react';

const VolumeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Volume Sampah di Desa Tedunan
          </h2>
          <p className="text-green-100 text-lg">Data dan statistik pengelolaan sampah terkini</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold mb-2">2.5</div>
            <div className="text-green-100">Ton/Hari</div>
            <div className="text-sm text-green-200 mt-2">Total Sampah</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold mb-2">60%</div>
            <div className="text-green-100">Organik</div>
            <div className="text-sm text-green-200 mt-2">Dapat Dikompos</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold mb-2">25%</div>
            <div className="text-green-100">Plastik</div>
            <div className="text-sm text-green-200 mt-2">Dapat Didaur Ulang</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold mb-2">85%</div>
            <div className="text-green-100">Terolah</div>
            <div className="text-sm text-green-200 mt-2">Tingkat Pengelolaan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolumeSection;