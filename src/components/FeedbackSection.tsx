"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FeedbackSection = () => {
  const closingVisionText = "The Board hopes residents view this site as an enhancement to their MVT home ownership experience and that it increases our sense of community by developing policies and guidelines in directions that are aligned with the views of the majority of residents.";
  const feedbackQuote = "Help us, help you. What would You like life at Mountain View Terraces to be!";

  const testimonials = [
    { id: 1, quote: "Living at MTV Condos has been an amazing experience. The amenities are fantastic, the location is perfect, and the community truly feels like home. Highly recommend!", author: "Resident A" },
    { id: 2, quote: "The management is incredibly responsive, and the community events are always a blast. Proud to call MVT home!", author: "Resident B" },
    { id: 3, quote: "A truly luxurious and well-maintained complex. The Board's dedication to resident satisfaction is evident.", author: "Resident C" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Voice Shapes Our Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {closingVisionText}
          </p>
          <blockquote className="text-3xl font-extrabold italic text-mtv-blue-700 max-w-4xl mx-auto border-l-8 border-mtv-blue-500 pl-6 py-4">
            "{feedbackQuote}"
          </blockquote>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="mr-2" /> Share Your Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">We value your input! Let us know how we can improve or what you'd like to see at MVT.</p>
              {/* Placeholder for Typeform / Survey */}
              <div>
                <Label htmlFor="feedback-name">Your Name (Optional)</Label>
                <Input id="feedback-name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="feedback-email">Your Email (Optional)</Label>
                <Input id="feedback-email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="feedback-message">Your Message / Suggestion</Label>
                <Textarea id="feedback-message" placeholder="What should we improve? Suggest an event? Rate your experience?" rows={5} />
              </div>
              <Button className="w-full bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white">Submit Feedback</Button>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Users className="mr-2" /> What Our Residents Say
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <p className="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-800">- {testimonial.author}</p>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fill="currentColor" size={18} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Join the Conversation</h3>
          <p className="text-lg text-gray-600 mb-6">Stay connected with the latest news and updates from MVT.</p>
          <div className="flex justify-center">
            <input 
              type="email" 
              placeholder="Your email for newsletter" 
              className="px-4 py-3 w-full max-w-md rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-mtv-blue-500 border border-gray-300"
            />
            <Button className="rounded-l-none bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;