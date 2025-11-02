"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
}

const PropertyDetails = ({ property }: { property: Property }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-200">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{property.bedrooms} beds</span>
          <span>{property.bathrooms} baths</span>
          <span>{property.sqft} sqft</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyDetails;