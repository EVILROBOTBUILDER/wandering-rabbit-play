"use client";

import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyDetails from "@/components/PropertyDetails";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb"; // Import Breadcrumb

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for properties (replace with actual data fetching)
  const properties = [
    {
      id: 1,
      title: "Spacious 1-Bedroom Unit",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+101+Interior",
      description: "A comfortable 1-bedroom unit with modern finishes and ample natural light, perfect for individuals or couples. This unit features an open-concept living space, high-end kitchen appliances, and access to all building amenities including a fitness center and rooftop lounge."
    },
    {
      id: 2,
      title: "Modern 2-Bedroom with Balcony",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+203+Balcony",
      description: "This elegant 2-bedroom unit features a private balcony with city views, a gourmet kitchen, and spacious living areas. Enjoy direct access to the boardwalk, a private balcony, and state-of-the-art smart home technology."
    },
    {
      id: 3,
      title: "Cozy Studio with City View",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+305+Studio",
      description: "An efficient and stylish studio apartment offering panoramic city views and smart living solutions. This unit boasts high ceilings, large windows, and is steps away from galleries, cafes, and entertainment venues."
    },
    {
      id: 4,
      title: "Large 3-Bedroom Corner Unit",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+402+Corner",
      description: "Expansive 3-bedroom corner unit with multiple windows, offering a bright and airy living experience for families. Features include a private backyard, multiple living areas, and a two-car garage."
    },
    {
      id: 5,
      title: "Penthouse with Private Terrace",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Penthouse+View",
      description: "The ultimate in luxury, this penthouse boasts a private rooftop terrace, custom interiors, and breathtaking views. Custom-designed interiors, a gourmet kitchen, and personalized concierge services define this exclusive residence."
    },
    {
      id: 6,
      title: "Ground Floor Unit with Patio",
      location: "MTV Condos, Mountain View, CA",
      image: "https://placehold.co/400x300?text=Unit+G01+Patio",
      description: "A convenient ground-floor unit featuring a private patio, ideal for outdoor relaxation and easy access. Enjoy a private patio, ample natural light, and a tranquil setting within a vibrant community."
    }
  ];

  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <Breadcrumb className="mb-4" /> {/* Breadcrumb */}
          <h1 className="text-3xl font-bold mb-4 font-serif">Residence Not Found</h1>
          <p className="text-lg text-gray-600 mb-6">The residence you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/properties">Back to Residences</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6" /> {/* Breadcrumb */}
        <Button asChild variant="outline" className="mb-6">
          <Link to="/properties">&lt; Back to Residences</Link>
        </Button>

        <PropertyDetails property={property} />
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetailsPage;