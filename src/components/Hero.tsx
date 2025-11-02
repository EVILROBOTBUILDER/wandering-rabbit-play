"use client";

import React from 'react';
// Button and ArrowRight imports are still removed as they are not used

const Hero = () => {
  return (
    <div
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/ComfyUI_00006_.png")' }} // Updated image path
    >
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl text-center md:text-left">
          {/* Content removed as per previous requests */}
        </div>
      </div>
    </div>
  );
};

export default Hero;