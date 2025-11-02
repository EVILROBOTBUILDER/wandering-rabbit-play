"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("https://public-files.hoa-express.com/website-4242427749/banner-photos/P0k2uFdTa11gQqNg.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl text-center md:text-left">
          {/* Removed h1 and p tags as the image already contains the text */}
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out group">
            Explore Properties
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;