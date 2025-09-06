import React from 'react';
import { ArrowRight } from 'lucide-react';

const InnovationCard = ({ innovation, onClick }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
      onClick={() => onClick(innovation)}
    >
      <div className="relative">
        <img
          src={innovation.image}
          alt={innovation.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
          {innovation.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {innovation.title}
        </h3>
        <p className="text-green-600 font-medium mb-3">
          {innovation.subtitle}
        </p>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {innovation.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {innovation.tutorial.length} Langkah Tutorial
          </span>
          <div className="flex items-center text-green-600 font-medium">
            Lihat Detail
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationCard;