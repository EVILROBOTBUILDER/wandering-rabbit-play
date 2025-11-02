"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Leaf, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityIntro = () => {
  const introText = "Mountain View Terraces (MVT) is one of Calgary's most desirable condominium complexes. This gem is conveniently located in the vibrant south west community of Springbank Hill, with excellent highway access due to the recent build of the ring road. The grounds boast beautifully landscaped and immaculately maintained compound as well as beautiful building structures.";

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Mountain View Terraces</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {introText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="mx-auto h-12 w-12 text-mtv-blue-600 mb-4" />
              <CardTitle className="text-2xl">Desirable Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Conveniently located in the vibrant south west community of Springbank Hill, with excellent highway access.</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Leaf className="mx-auto h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">Immaculate Grounds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Beautifully landscaped and immaculately maintained compound, complemented by stunning building structures.</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <HomeIcon className="mx-auto h-12 w-12 text-yellow-600 mb-4" />
              <CardTitle className="text-2xl">Premier Living</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">One of Calgary's most desirable condominium complexes, offering an unparalleled living experience.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Find Us on the Map</h3>
          <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.0000000000005!2d-114.20000000000001!3d51.00000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAwJzAwLjAiTiAxMTTCsDEyJzAwLjAiVw!5e0!3m2!1sen!2sca!4v1678901234567!5m2!1sen!2sca"
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
            <Link to="/contact">Schedule a Viewing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityIntro;