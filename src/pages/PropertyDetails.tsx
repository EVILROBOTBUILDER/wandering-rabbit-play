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
      price: "$3,200/month",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: "https://placehold.co/400x300?text=Modern+Apartment"
    },
    // Add more properties here...
  ];

  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/properties">&lt; Back to Properties</Link>
        </Button>

        <PropertyDetails property={property} />
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetailsPage;