import React from 'react';

interface ProgramCardProps {
  title: string;
  category: string;
  description: string;
  duration: string;
  imageSrc: string;
  isHighlighted?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, category, description, duration, imageSrc, isHighlighted }) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-md p-4 ${isHighlighted ? 'col-span-2' : ''}`}>
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      {!isHighlighted && (
        <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent`} />
      )}
      <div className="relative z-10 p-4 h-48 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white">{category}</p>
        <p className="text-sm text-white">{description}</p>
        <p className="text-sm text-white">{duration}</p>
      </div>
    </div>
  );
};

export default ProgramCard; 