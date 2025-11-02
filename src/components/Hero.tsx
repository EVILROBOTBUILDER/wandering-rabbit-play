"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div 
      className="relative bg-cover bg-center text-white py-24 md:py-32" 
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/2563eb/ffffff?text=Luxury+Condos')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Experience Luxury Living at MTV Condos
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Discover sophisticated residences, unparalleled amenities, and a vibrant community in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-8 py-6 rounded-lg">
              <Link to="/properties">View Available Units</Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-mtv-blue-700 text-lg px-8 py-6 rounded-lg">
              <Link to="/contact">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;