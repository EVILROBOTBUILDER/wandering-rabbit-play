"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
}

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200">
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
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;