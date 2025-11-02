"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, LogOut } from "lucide-react"; // Added LogOut icon
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/providers/SessionContextProvider.tsx'; // Fixed: Added .tsx extension
import { showSuccess, showError } from '@/utils/toast'; // Import toast utilities

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session, supabase } = useAuth(); // Use useAuth hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      showError(error.message);
    } else {
      showSuccess('Logged out successfully!');
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-mtv-blue-700">
          MTV Condos
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium focus:outline-none">
              About MVT <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/about-mvt/location-access">Location & Access</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about-mvt/amenities">Amenities</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about-mvt/gallery">Gallery</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium focus:outline-none">
              Residents <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {!session ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/residents/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/residents/signup">Signup</Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                <Link to="/residents/documents">Documents</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/residents/service-requests">Service Requests</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/residents/announcements">Announcements</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium focus:outline-none">
              Governance <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/governance/board-members">Board Members</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/governance/bylaws">Bylaws</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/governance/agm-archive">AGM Archive</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/events-surveys" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            Events & Surveys
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            Contact
          </Link>
          <Link to="/for-sale-lease" className="text-gray-700 hover:text-mtv-blue-500 transition-colors text-lg font-medium">
            For Sale / Lease
          </Link>
        </nav>
        
        <div className="hidden md:block">
          {!session ? (
            <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white">
              <Link to="/residents/login">Resident Login</Link>
            </Button>
          ) : (
            <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white">
              <LogOut className="mr-2 h-5 w-5" /> Logout
            </Button>
          )}
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
            {/* About MVT */}
            <div className="flex flex-col">
              <span className="text-gray-700 py-2 text-lg font-medium">About MVT</span>
              <Link to="/about-mvt/location-access" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Location & Access</Link>
              <Link to="/about-mvt/amenities" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Amenities</Link>
              <Link to="/about-mvt/gallery" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Gallery</Link>
            </div>
            {/* Residents */}
            <div className="flex flex-col">
              <span className="text-gray-700 py-2 text-lg font-medium">Residents</span>
              {!session ? (
                <>
                  <Link to="/residents/login" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Login</Link>
                  <Link to="/residents/signup" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Signup</Link>
                </>
              ) : (
                <Button variant="ghost" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1 justify-start" onClick={() => { handleLogout(); toggleMenu(); }}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              )}
              <Link to="/residents/documents" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Documents</Link>
              <Link to="/residents/service-requests" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Announcements</Link>
            </div>
            {/* Governance */}
            <div className="flex flex-col">
              <span className="text-gray-700 py-2 text-lg font-medium">Governance</span>
              <Link to="/governance/board-members" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Board Members</Link>
              <Link to="/governance/bylaws" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>Bylaws</Link>
              <Link to="/governance/agm-archive" className="ml-4 text-gray-600 hover:text-mtv-blue-500 transition-colors py-1" onClick={toggleMenu}>AGM Archive</Link>
            </div>
            <Link to="/events-surveys" className="text-gray-700 hover:text-mtv-blue-500 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>
              Events & Surveys
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-mtv-blue-500 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/for-sale-lease" className="text-gray-700 hover:text-mtv-blue-500 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>
              For Sale / Lease
            </Link>
            {!session && (
              <Button asChild className="w-full mt-2 bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white">
                <Link to="/residents/login" onClick={toggleMenu}>Resident Login</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;