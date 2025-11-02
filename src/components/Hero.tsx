"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const introParagraph = "Mountain View Terraces (MVT) is one of Calgary's most desirable condominium complexes. This gem is conveniently located in the vibrant southwest community of Springbank Hill, with excellent highway access due to the recent build of the ring road. The grounds boast beautifully landscaped and immaculately maintained compound as well as beautiful building structures.";

  return (
    <div 
      className="relative bg-cover bg-center text-white py-24 md:py-32 font-sans" 
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/2563eb/ffffff?text=MVT+Grounds+and+Ring+Road+Aerial+View')" }} // Placeholder for MVT grounds/ring road
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight font-serif">
            Condominium Website and Online Community
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-100 font-medium">
            Mountain View Terraces | COA in Calgary, AB
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            {introParagraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-8 py-6 rounded-lg">
              <Link to="/properties">Explore Residences</Link>
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