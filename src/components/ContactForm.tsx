"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Have questions? Get in touch with our team.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input placeholder="Your Name" />
          </div>
          <div>
            <Input placeholder="Your Email" />
          </div>
        </div>
        <div>
          <Input placeholder="Subject" />
        </div>
        <div>
          <Textarea placeholder="Your Message" rows={4} />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </CardContent>
    </Card>
  );
};

export default ContactForm;