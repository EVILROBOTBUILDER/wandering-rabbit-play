"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 font-serif">MVT Gallery</h1>
        <p className="text-lg text-gray-600 mb-6">A collection of beautiful images showcasing Mountain View Terraces.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img 
                src={`https://placehold.co/400x300?text=MVT+Gallery+${item}`} 
                alt={`Mountain View Terraces Gallery Image ${item}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;