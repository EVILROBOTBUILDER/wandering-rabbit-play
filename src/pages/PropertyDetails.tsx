"use client";

import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyDetails from "@/components/PropertyDetails";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for properties (replace with actual data fetching)
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Downtown, City",
      image: "https://placehold.co/400x300?text=Modern+Apartment",
      description: "A sleek and modern apartment located in the vibrant downtown area, offering stunning city views and contemporary finishes. This unit features an open-concept living space, high-end kitchen appliances, and access to all building amenities including a fitness center and rooftop lounge."
    },
    {
      id: 2,
      title: "Luxury Waterfront Condo",
      location: "Waterfront, City",
      image: "https://placehold.co/400x300?text=Waterfront+Condo",
      description: "Experience unparalleled luxury in this spacious waterfront condo, featuring panoramic views and exclusive amenities. Enjoy direct access to the boardwalk, a private balcony, and state-of-the-art smart home technology."
    },
    {
      id: 3,
      title: "Cozy Studio Loft",
      location: "Arts District, City",
      image: "https://placehold.co/400x300?text=Studio+Loft",
      description: "A charming and efficient studio loft in the heart of the bustling Arts District, perfect for creative individuals. This unit boasts high ceilings, large windows, and is steps away from galleries, cafes, and entertainment venues."
    },
    {
      id: 4,
      title: "Family Townhouse",
      location: "Suburbs, City",
      image: "https://placehold.co/400x300?text=Family+Townhouse",
      description: "Spacious townhouse ideal for families, located in a quiet suburban neighborhood with excellent schools and parks. Features include a private backyard, multiple living areas, and a two-car garage."
    },
    {
      id: 5,
      title: "Penthouse Suite",
      location: "Downtown, City",
      image: "https://placehold.co/400x300?text=Penthouse+Suite",
      description: "The ultimate in luxury living, this penthouse suite offers expansive living spaces, private terraces, and breathtaking views. Custom-designed interiors, a gourmet kitchen, and personalized concierge services define this exclusive residence."
    },
    {
      id: 6,
      title: "Garden Apartment",
      location: "Garden District, City",
      image: "https://placehold.co/400x300?text=Garden+Apartment",
      description: "A serene garden apartment offering a peaceful retreat with lush greenery and easy access to local cafes. Enjoy a private patio, ample natural light, and a tranquil setting within a vibrant community."
    }
  ];

  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
          <p className="text-lg text-gray-600 mb-6">The property you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/properties">Back to Listings</Link>
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
        <Button asChild variant="outline" className="mb-6">
          <Link to="/properties">&lt; Back to Listings</Link>
        </Button>

        <PropertyDetails property={property} />
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetailsPage;