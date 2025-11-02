"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="mr-2" size={16} />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="mr-2" size={16} />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-600">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;