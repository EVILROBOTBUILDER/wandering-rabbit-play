"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Calendar, Clock, Video, Users, LogIn } from "lucide-react"; // Added LogIn icon
import React, { useState, useEffect } from "react";

const AGMModule = () => {
  const agmText = "This website offers the potential for more interaction between the Board and MVT residents. To help further this directive, the Board encourages all owners to become involved and suggests beginning with attendance at the Annual General Meeting (AGM). The AGM is an excellent opportunity to exercise your constructive influence for the coming year.";
  const quoteHighlight = "exercise your constructive influence";

  // Target AGM Date: November 15, 2025
  const nextAGMDate = new Date("2025-11-15T10:00:00");
  const agmDateString = nextAGMDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

  const calculateTimeLeft = () => {
    const difference = +nextAGMDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span key={interval} className="text-2xl font-bold text-mtv-blue-700 mx-2">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  // Mock login state for demonstration
  const isLoggedIn = false; // Set to true to see the "Your Influence Dashboard" teaser

  return (
    <section className="py-16 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Engagement & Annual General Meeting</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {agmText.split(quoteHighlight).map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < agmText.split(quoteHighlight).length - 1 && (
                  <span className="font-semibold text-mtv-blue-600 italic">"{quoteHighlight}"</span>
                )}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center font-serif">
                <Calendar className="mr-2" /> Next AGM: {agmDateString}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex justify-center items-center mb-6">
                {timerComponents.length ? timerComponents : <span className="text-2xl font-bold text-green-600">AGM is today!</span>}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-6 py-3 rounded-lg">
                  <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">RSVP Now</a>
                </Button>
                <Button asChild variant="outline" className="border-mtv-blue-500 text-mtv-blue-500 hover:bg-mtv-blue-50 hover:text-mtv-blue-600 text-lg px-6 py-3 rounded-lg">
                  <a href="https://www.youtube.com/watch?v=your-youtube-video-id" target="_blank" rel="noopener noreferrer">
                    <Video className="mr-2 h-5 w-5" /> Watch Last Year's Recording
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center font-serif">
                <Users className="mr-2" /> Get Involved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Attend the AGM</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    The Annual General Meeting is an excellent opportunity to exercise your constructive influence for the coming year.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Join a Committee</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Contribute your skills and time to various committees that help shape our community. Contact the Board for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Submit Feedback</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Your feedback is invaluable. Use our contact form or dedicated survey to share your thoughts.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {isLoggedIn && (
                <div className="mt-6 text-center">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link to="/residents/dashboard">
                      <LogIn className="mr-2 h-5 w-5" /> Your Influence Dashboard
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AGMModule;