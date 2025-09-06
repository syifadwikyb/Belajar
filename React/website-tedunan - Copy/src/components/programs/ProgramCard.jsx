import React from 'react';

const ProgramCard = ({ icon, title, description, fromColor, toColor, iconBgColor }) => {
  return (
    <div className={`bg-gradient-to-br from-${fromColor} to-${toColor} p-8 rounded-2xl shadow-lg`}>
      <div className={`bg-${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProgramCard;