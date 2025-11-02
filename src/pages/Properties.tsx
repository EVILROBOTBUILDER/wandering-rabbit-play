"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";

const Properties = () => {
  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Downtown, City",
      image: "https://placehold.co/400x300?text=Modern+Apartment",
      description: "A sleek and modern apartment located in the vibrant downtown area, offering stunning city views and contemporary finishes."
    },
    {
      id: 2,
      title: "Luxury Waterfront Condo",
      location: "Waterfront, City",
      image: "https://placehold.co/400x300?text=Waterfront+Condo",
      description: "Experience unparalleled luxury in this spacious waterfront condo, featuring panoramic views and exclusive amenities."
    },
    {
      id: 3,
      title: "Cozy Studio Loft",
      location: "Arts District, City",
      image: "https://placehold.co/400x300?text=Studio+Loft",
      description: "A charming and efficient studio loft in the heart of the bustling Arts District, perfect for creative individuals."
    },
    {
      id: 4,
      title: "Family Townhouse",
      location: "Suburbs, City",
      image: "https://placehold.co/400x300?text=Family+Townhouse",
      description: "Spacious townhouse ideal for families, located in a quiet suburban neighborhood with excellent schools and parks."
    },
    {
      id: 5,
      title: "Penthouse Suite",
      location: "Downtown, City",
      image: "https://placehold.co/400x300?text=Penthouse+Suite",
      description: "The ultimate in luxury living, this penthouse suite offers expansive living spaces, private terraces, and breathtaking views."
    },
    {
      id: 6,
      title: "Garden Apartment",
      location: "Garden District, City",
      image: "https://placehold.co/400x300?text=Garden+Apartment",
      description: "A serene garden apartment offering a peaceful retreat with lush greenery and easy access to local cafes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Listings</h1>
            <p className="text-blue-100 max-w-2xl">
              Discover our premium selection of luxury apartments and condos.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <Input 
                  placeholder="Search properties..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2" size={20} />
                Filter
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Adjusted grid for fewer filter options */}
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">Downtown</Button>
                    <Button variant="outline" className="w-full">Waterfront</Button>
                    <Button variant="outline" className="w-full">Arts District</Button>
                    <Button variant="outline" className="w-full">Suburbs</Button>
                    <Button variant="outline" className="w-full">Garden District</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sort By</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">Newest First</Button>
                    <Button variant="outline" className="w-full">Oldest First</Button>
                    <Button variant="outline" className="w-full">Alphabetical</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;