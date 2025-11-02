"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Get in touch with us
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-500">+1 (650) 967-6900</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-500">info@mtvcondos.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-500">1000 N. Rengstorff Ave<br />Mountain View, CA 94043</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={4} />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Download Brochure</CardTitle>
              <CardDescription>
                Get our latest product information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Download our comprehensive brochure with all the details about our products and services.
              </p>
              <Button className="w-full">Download Brochure</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;