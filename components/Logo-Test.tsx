import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <img 
      src="https://via.placeholder.com/150x50/FFD700/000000?text=InteriorGlanz"
      alt="InteriorGlanz Logo" 
      className={`${className} object-contain`}
    />
  );
};