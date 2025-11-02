"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, MessageSquare, Users, HelpCircle } from "lucide-react"; // Added HelpCircle icon
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

const FeedbackSection = () => {
  const closingVisionText = "The Board hopes residents view this site as an enhancement to their MVT home ownership experience and that it increases our sense of community by developing policies and guidelines in directions that are aligned with the views of the majority of residents.";
  const feedbackQuote = "Help us, help you. What would You like life at Mountain View Terraces to be!";

  const testimonials = [
    { id: 1, quote: "Living at MTV Condos has been an amazing experience. The amenities are fantastic, the location is perfect, and the community truly feels like home. Highly recommend!", author: "Resident A" },
    { id: 2, quote: "The management is incredibly responsive, and the community events are always a blast. Proud to call MVT home!", author: "Resident B" },
    { id: 3, quote: "A truly luxurious and well-maintained complex. The Board's dedication to resident satisfaction is evident.", author: "Resident C" },
    { id: 4, quote: "The new website is a fantastic improvement! It's so much easier to find information and stay connected.", author: "Resident D" },
    { id: 5, quote: "I appreciate the Board's commitment to transparency and involving residents in decisions. MVT truly feels like a community.", author: "Resident E" },
  ];

  return (
    <section className="py-16 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Your Voice Shapes Our Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {closingVisionText}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-3xl md:text-4xl font-extrabold italic text-mtv-blue-700 max-w-4xl mx-auto pl-6 py-4 hover:bg-transparent hover:text-mtv-blue-800 transition-colors duration-200 flex items-center justify-center text-center">
                "{feedbackQuote}" <HelpCircle className="ml-3 h-8 w-8 text-mtv-blue-500" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Share Your Feedback</DialogTitle>
                <DialogDescription>
                  Help us make Mountain View Terraces even better!
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Label htmlFor="priority">What is your top priority for MVT in the next year?</Label>
                  <Input id="priority" placeholder="e.g., More community events, better amenities" />
                </div>
                <div>
                  <Label htmlFor="event-suggestion">Do you have a suggestion for a community event?</Label>
                  <Input id="event-suggestion" placeholder="e.g., Summer BBQ, Movie Night" />
                </div>
                <div>
                  <Label htmlFor="experience-rating">Rate your overall MVT experience (1-10):</Label>
                  <Input id="experience-rating" type="number" min="1" max="10" placeholder="e.g., 9" />
                </div>
                <div>
                  <Label htmlFor="additional-comments">Additional Comments (Optional)</Label>
                  <Textarea id="additional-comments" placeholder="Any other thoughts or suggestions?" rows={3} />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit Feedback</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-serif">What Our Residents Say</h3>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map(testimonial => (
                <CarouselItem key={testimonial.id}>
                  <Card className="p-6 text-center h-full flex flex-col justify-between shadow-lg">
                    <CardContent className="p-0">
                      <p className="text-gray-700 text-lg italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mr-4 flex-shrink-0">
                          <Users className="text-gray-600" size={28} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-gray-800 font-serif">{testimonial.author}</CardTitle>
                          <div className="flex justify-center text-yellow-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} fill="currentColor" size={18} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Join the Conversation</h3>
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