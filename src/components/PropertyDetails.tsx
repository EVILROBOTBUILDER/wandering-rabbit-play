"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string; // Adding a description field for details
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
        <p className="text-gray-600 mb-4">{property.location}</p>
        <p className="text-gray-700">{property.description}</p>
      </CardContent>
    </Card>
  );
};

export default PropertyDetails;