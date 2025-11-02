"use client";

import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/ComfyUI_00006_.png")' }} // Updated to the new image
    >
      {/* No overlay, as per your previous request */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Your Adventure Awaits
          </h1>
          <p className="text-xl mb-8 drop-shadow-md">
            Explore breathtaking landscapes and discover new horizons.
          </p>
          {/* If you want a button back, let me know! */}
        </div>
      </div>
    </div>
  );
};

export default Hero;