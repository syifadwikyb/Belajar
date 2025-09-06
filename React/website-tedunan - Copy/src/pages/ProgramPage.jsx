import React from 'react';
import ProgramCard from '../components/programs/ProgramCard';
import { Users, Recycle, Award } from 'lucide-react';

const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Program Desa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai program berkelanjutan untuk menciptakan desa yang bersih dan sehat
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard
            icon={<Users className="w-8 h-8 text-white" />}
            title="Bank Sampah"
            description="Program pengelolaan sampah berbasis masyarakat dengan sistem tabungan."
            fromColor="green-50"
            toColor="emerald-100"
            iconBgColor="green-500"
          />
          <ProgramCard
            icon={<Recycle className="w-8 h-8 text-white" />}
            title="Daur Ulang Mandiri"
            description="Pemberdayaan masyarakat dalam mengolah sampah menjadi produk bernilai ekonomi."
            fromColor="blue-50"
            toColor="cyan-100"
            iconBgColor="blue-500"
          />
          <ProgramCard
            icon={<Award className="w-8 h-8 text-white" />}
            title="Kompetisi Desa Bersih"
            description="Lomba antar RT/RW untuk meningkatkan kesadaran kebersihan lingkungan."
            fromColor="purple-50"
            toColor="pink-100"
            iconBgColor="purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;