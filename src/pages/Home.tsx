"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import FeatureCard from "@/components/FeatureCard";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  Calendar, 
  Wifi, 
  Car, 
  Coffee, 
  Dumbbell,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const HomePage = () => {
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
    }
  ];

  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Community BBQ",
      date: "June 15, 2023",
      location: "Building Lobby",
      description: "Join us for a summer barbecue with neighbors and friends."
    },
    {
      id: 2,
      title: "Fitness Workshop",
      date: "June 22, 2023",
      location: "Fitness Center",
      description: "Learn new workout techniques from our professional trainers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Properties */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our premium selection of luxury apartments and condos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link to="/properties">View All Properties</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Amenities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Amenities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Enjoy the convenience and luxury of our premium amenities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Events */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our community for exciting events and activities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Residents Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our happy residents about their experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <Users className="text-gray-600" size={24} />
                      </div>
                      <div>
                        <CardTitle>Resident {item}</CardTitle>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" size={16} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "Living at MTV Condos has been an amazing experience. The amenities and community are top-notch."
                    </p>
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