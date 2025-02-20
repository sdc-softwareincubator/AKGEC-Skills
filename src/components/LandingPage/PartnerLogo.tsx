import React from 'react';

interface PartnerLogoProps {
  logo: string;
  name: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ logo, name }) => {
  return (
    <div className="flex justify-center">
      <img src={logo} alt={name} className="h-24 object-contain" />
    </div>
  );
};

export default PartnerLogo; 