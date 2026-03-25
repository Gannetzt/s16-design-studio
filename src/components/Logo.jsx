import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className = "h-12 w-auto", white = false }) => {
  return (
    <img 
      src={logoImg} 
      alt="S16 Design Studio" 
      className={`${className} object-contain ${white ? 'brightness-0 invert' : 'brightness-0'}`} 
    />
  );
};

export default Logo;
