import React from 'react';
import { ArrowRight } from 'lucide-react';

const InnovationDetail = ({ innovation, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-8 flex items-center text-green-600 hover:text-green-800 transition-colors"
      >
        <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
        Kembali ke Daftar Inovasi
      </button>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative h-64 md:h-80">
          <img
            src={innovation.image}
            alt={innovation.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {innovation.title}
            </h1>
            <p className="text-green-200 text-lg">
              {innovation.subtitle}
            </p>
          </div>
        </div>
        <div className="p-8">
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {innovation.description}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Tutorial Lengkap
          </h2>
          <div className="space-y-8">
            {innovation.tutorial.map((step) => (
              <div key={step.step} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="md:w-1/3">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationDetail;