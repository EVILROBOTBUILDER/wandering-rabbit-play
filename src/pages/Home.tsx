"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import FeatureCard from "@/components/FeatureCard";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  Calendar, 
  Wifi, 
  Car, 
  Coffee, 
  Dumbbell,
  Star,
  Home as HomeIcon // Renamed to avoid conflict with page component
} from "lucide-react";

const HomePage = () => {
  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Downtown, City",
      image: "https://placehold.co/400x300/e0f2fe/1e306a?text=Modern+Apartment"
    },
    {
      id: 2,
      title: "Luxury Waterfront Condo",
      location: "Waterfront, City",
      image: "https://placehold.co/400x300/bfdbfe/1e306a?text=Waterfront+Condo"
    },
    {
      id: 3,
      title: "Cozy Studio Loft",
      location: "Arts District, City",
      image: "https://placehold.co/400x300/93c5fd/1e306a?text=Studio+Loft"
    }
  ];

  // Mock data for features
  const features = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Reliable and fast internet connection throughout the building."
    },
    {
      icon: Car,
      title: "Secure Parking",
      description: "Dedicated and secure parking available for all residents."
    },
    {
      icon: Coffee,
      title: "Resident Lounge",
      description: "Comfortable common areas for residents to relax and socialize."
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym for residents to stay active and healthy."
    }
  ];

  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Community BBQ",
      date: "June 15, 2023",
      location: "Rooftop Terrace",
      description: "Join us for a summer barbecue with neighbors and friends. Food, drinks, and fun for all ages!"
    },
    {
      id: 2,
      title: "Yoga & Wellness Session",
      date: "June 22, 2023",
      location: "Fitness Studio",
      description: "Relax and rejuvenate with our weekly yoga and wellness session."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About MTV Condos</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              MTV Condos offers an unparalleled living experience, blending modern design with ultimate comfort. 
              Located in a prime urban setting, our residences provide easy access to the city's best dining, 
              entertainment, and cultural attractions. We are committed to fostering a vibrant community 
              where residents can thrive.
            </p>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Properties</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our exclusive selection of luxury apartments and condos, each designed with elegance and functionality in mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-8 py-4 rounded-lg">
                <Link to="/properties">View All Properties</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Amenities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Premium Amenities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Indulge in a lifestyle of convenience and luxury with our thoughtfully curated amenities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-mtv-blue-500 text-mtv-blue-500 hover:bg-mtv-blue-50 hover:text-mtv-blue-600 text-lg px-8 py-4 rounded-lg">
                <Link to="/amenities">Explore All Amenities</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Events */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Community Events</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with your neighbors and enjoy a vibrant social calendar at MTV Condos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-8 py-4 rounded-lg">
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Residents Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from our happy residents about their exceptional living experience at MTV Condos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <p className="text-gray-700 text-lg italic mb-6">
                      "Living at MTV Condos has been an amazing experience. The amenities are fantastic, the location is perfect, and the community truly feels like home. Highly recommend!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mr-4 flex-shrink-0">
                        <Users className="text-gray-600" size={28} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-gray-800">Resident {item}</CardTitle>
                        <div className="flex text-yellow-500 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" size={18} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;