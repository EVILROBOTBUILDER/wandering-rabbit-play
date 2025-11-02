"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Car, Coffee, Dumbbell, Users, Star, MapPin, Phone, Mail } from "lucide-react";

const Amenities = () => {
  const features = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Reliable and fast internet connection throughout the building."
    },
    {
      icon: Car,
      title: "Parking",
      description: "Secure parking available for residents."
    },
    {
      icon: Coffee,
      title: "Lounge Area",
      description: "Comfortable common areas for residents to relax and socialize."
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Well-equipped gym for residents to stay active."
    },
    {
      icon: Users,
      title: "Community Room",
      description: "Spacious room for events, meetings, and gatherings."
    },
    {
      icon: Star,
      title: "24/7 Security",
      description: "Round-the-clock security for peace of mind."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Amenities</h1>
            <p className="text-blue-100 max-w-2xl">
              Enjoy the convenience and luxury of our premium amenities designed for your comfort.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Building Features</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Building Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>24/7 concierge service</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>Package receiving center</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>On-site laundry facilities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>Outdoor seating areas</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>EV charging stations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Resident Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>Property management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>Maintenance support</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>Community events</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span>Resident portal access</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={`https://placehold.co/300x200?text=Amenity+${item}`} 
                      alt={`Amenity ${item}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose MTV Condos?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Star className="text-blue-600" size={20} />
                    </div>
                    <p className="text-gray-600">Premium amenities designed for comfort and convenience</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Star className="text-blue-600" size={20} />
                    </div>
                    <p className="text-gray-600">Prime location with easy access to downtown</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Star className="text-blue-600" size={20} />
                    </div>
                    <p className="text-gray-600">Professional management and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Amenities;