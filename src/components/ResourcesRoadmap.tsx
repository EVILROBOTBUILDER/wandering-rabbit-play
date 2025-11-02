"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Wrench, Bell, DollarSign, Lightbulb, BarChart, CalendarDays, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button"; // Added missing import

const ResourcesRoadmap = () => {
  const resourcesText = "In the meantime we have populated this website with information regarding the condominium association, governance of the condominium, and various associated documents and useful information. The idea is to help existing, new, and prospective residents become familiar with the responsibilities and issues of special interest to life at MVT. In addition, this site has the potential to evolve to include various tools and services such as the immediate distribution of time-sensitive information, important announcements, and even community related surveys.";

  const residentResources = [
    { icon: FileText, title: "Bylaws & Policies", link: "/governance/bylaws" },
    { icon: Wrench, title: "Maintenance Requests", link: "/residents/service-requests" },
    { icon: Bell, title: "Announcements", link: "/residents/announcements" },
    { icon: DollarSign, title: "Financial Reports", link: "/residents/login" }, // Login required
  ];

  const comingSoonFeatures = [
    { icon: Lightbulb, title: "Real-time Alerts", description: "Get instant notifications for urgent community updates." },
    { icon: BarChart, title: "Community Surveys", description: "Share your opinions on important community matters." },
    { icon: CalendarDays, title: "Event Calendar", description: "Stay informed about all upcoming MVT events." },
    { icon: Users, title: "Resident Directory", description: "Connect with your neighbors (opt-in)." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Resident Resources & Future Vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {resourcesText}
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Resident Resources Hub</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <IconComponent className="mx-auto h-12 w-12 text-mtv-blue-600 mb-4" />
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={resource.link}>View</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Coming Soon: Our Roadmap</h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {comingSoonFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="p-6 text-center h-full flex flex-col justify-between">
                      <CardHeader>
                        <IconComponent className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ResourcesRoadmap;