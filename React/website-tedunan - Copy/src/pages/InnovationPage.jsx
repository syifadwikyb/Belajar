import React, { useState } from 'react';
import innovationsData from '../data/innovationsData';
import InnovationCard from '../components/innovations/InnovationCard';
import InnovationDetail from '../components/innovations/InnovationDetail';

const InnovationPage = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(null);

  const handleBack = () => {
    setSelectedInnovation(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-16">
      <div className="container mx-auto px-4">
        {!selectedInnovation ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
                Inovasi Kita
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Temukan berbagai inovasi kreatif dalam pengelolaan sampah yang telah dikembangkan oleh masyarakat desa.
                Dari teknologi sederhana hingga solusi berkelanjutan untuk lingkungan yang lebih bersih.
              </p>
              <div className="w-32 h-1 bg-green-500 mx-auto mt-8"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovationsData.map((innovation) => (
                <InnovationCard
                  key={innovation.id}
                  innovation={innovation}
                  onClick={setSelectedInnovation}
                />
              ))}
            </div>
          </>
        ) : (
          <InnovationDetail innovation={selectedInnovation} onBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default InnovationPage;