"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Waypoints, Leaf } from "lucide-react"; // Changed Leaf to Waypoints for Access
import { Link } from "react-router-dom";

const CommunityIntro = () => {
  return (
    <section className="py-16 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Discover MVT's Unique Appeal</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the best of condominium living in Calgary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="mx-auto h-12 w-12 text-mtv-blue-600 mb-4" />
              <CardTitle className="text-2xl font-serif">Desirable Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Vibrant southwest community of Springbank Hill</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Waypoints className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl font-serif">Excellent Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Excellent highway access due to the recent build of the ring road</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Leaf className="mx-auto h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl font-serif">Immaculate Grounds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Beautifully landscaped and immaculately maintained</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center font-serif">Find Us on the Map</h3>
          <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.0000000000005!2d-114.177!3d51.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAwJzQzLjIiTiAxMTTCsDEwJzM3LjIiVw!5e0!3m2!1sen!2sca!4v1678901234567!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mountain View Terraces Location"
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-8 py-4 rounded-lg">
            <Link to="/about-mvt/gallery">Explore MVT Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityIntro;