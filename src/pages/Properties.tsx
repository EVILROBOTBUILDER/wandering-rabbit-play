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
      title: "Spacious 1-Bedroom Unit",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+101+Interior",
      description: "A comfortable 1-bedroom unit with modern finishes and ample natural light, perfect for individuals or couples."
    },
    {
      id: 2,
      title: "Modern 2-Bedroom with Balcony",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+203+Balcony",
      description: "This elegant 2-bedroom unit features a private balcony with city views, a gourmet kitchen, and spacious living areas."
    },
    {
      id: 3,
      title: "Cozy Studio with City View",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+305+Studio",
      description: "An efficient and stylish studio apartment offering panoramic city views and smart living solutions."
    },
    {
      id: 4,
      title: "Large 3-Bedroom Corner Unit",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+402+Corner",
      description: "Expansive 3-bedroom corner unit with multiple windows, offering a bright and airy living experience for families."
    },
    {
      id: 5,
      title: "Penthouse with Private Terrace",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Penthouse+View",
      description: "The ultimate in luxury, this penthouse boasts a private rooftop terrace, custom interiors, and breathtaking views."
    },
    {
      id: 6,
      title: "Ground Floor Unit with Patio",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+G01+Patio",
      description: "A convenient ground-floor unit featuring a private patio, ideal for outdoor relaxation and easy access."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Residences at MTV Condos</h1>
            <p className="text-blue-100 max-w-2xl">
              Discover the diverse selection of luxury apartments and condos available within our community.
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
                  placeholder="Search residences..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2" size={20} />
                Filter
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4"> {/* Adjusted grid for fewer filter options */}
              {/* Removed Location filter as there's only one location */}
              
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