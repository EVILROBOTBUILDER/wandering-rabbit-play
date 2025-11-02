"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-mtv-blue-700">
          MTV Condos
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            Home
          </Link>
          <Link to="/properties" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            Properties
          </Link>
          <Link to="/amenities" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            Amenities
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            Events
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white">Login</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-mtv-blue-500 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/properties" className="text-gray-700 hover:text-mtv-blue-500 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>
              Properties
            </Link>
            <Link to="/amenities" className="text-gray-700 hover:text-mtv-blue-500 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>
              Amenities
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-mtv-blue-500 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-mtv-blue-500 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="w-full mt-2 bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;