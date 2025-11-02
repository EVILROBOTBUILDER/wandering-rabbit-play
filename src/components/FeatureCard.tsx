"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const IconComponent = feature.icon;
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <IconComponent className="text-blue-600" size={24} />
        </div>
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;