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
      price: "$3,200/month",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: "https://placehold.co/400x300?text=Modern+Apartment"
    },
    {
      id: 2,
      title: "Luxury Waterfront Condo",
      location: "Waterfront, City",
      price: "$4,500/month",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 1800,
      image: "https://placehold.co/400x300?text=Waterfront+Condo"
    },
    {
      id: 3,
      title: "Cozy Studio Loft",
      location: "Arts District, City",
      price: "$2,100/month",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 800,
      image: "https://placehold.co/400x300?text=Studio+Loft"
    },
    {
      id: 4,
      title: "Family Townhouse",
      location: "Suburbs, City",
      price: "$3,800/month",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2200,
      image: "https://placehold.co/400x300?text=Family+Townhouse"
    },
    {
      id: 5,
      title: "Penthouse Suite",
      location: "Downtown, City",
      price: "$6,500/month",
      bedrooms: 3,
      bathrooms: 4,
      sqft: 2800,
      image: "https://placehold.co/400x300?text=Penthouse+Suite"
    },
    {
      id: 6,
      title: "Garden Apartment",
      location: "Garden District, City",
      price: "$2,700/month",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      image: "https://placehold.co/400x300?text=Garden+Apartment"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Properties</h1>
            <p className="text-blue-100 max-w-2xl">
              Discover our premium selection of luxury apartments and condos designed for comfort and convenience.
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
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Bedrooms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">Any</Button>
                    <Button variant="outline" className="w-full">1+</Button>
                    <Button variant="outline" className="w-full">2+</Button>
                    <Button variant="outline" className="w-full">3+</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Price Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">$0 - $3,000</Button>
                    <Button variant="outline" className="w-full">$3,000 - $5,000</Button>
                    <Button variant="outline" className="w-full">$5,000+</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">Downtown</Button>
                    <Button variant="outline" className="w-full">Waterfront</Button>
                    <Button variant="outline" className="w-full">Arts District</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sort By</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">Price: Low to High</Button>
                    <Button variant="outline" className="w-full">Price: High to Low</Button>
                    <Button variant="outline" className="w-full">Newest First</Button>
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