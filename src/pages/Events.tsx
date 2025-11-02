"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Community BBQ",
      date: "June 15, 2023",
      location: "Building Lobby",
      description: "Join us for a summer barbecue with neighbors and friends. Food, drinks, and fun for all ages!"
    },
    {
      id: 2,
      title: "Fitness Workshop",
      date: "June 22, 2023",
      location: "Fitness Center",
      description: "Learn new workout techniques from our professional trainers. All skill levels welcome."
    },
    {
      id: 3,
      title: "Movie Night",
      date: "June 29, 2023",
      location: "Community Room",
      description: "Enjoy an outdoor movie screening under the stars. Bring your blankets and snacks!"
    },
    {
      id: 4,
      title: "Art Workshop",
      date: "July 6, 2023",
      location: "Art Studio",
      description: "Creative painting session for residents of all ages. Materials provided."
    },
    {
      id: 5,
      title: "Summer Cleanup",
      date: "July 13, 2023",
      location: "Building Grounds",
      description: "Help us keep our community beautiful! We'll provide tools and refreshments."
    },
    {
      id: 6,
      title: "Holiday Party",
      date: "December 15, 2023",
      location: "Community Room",
      description: "Celebrate the holidays with music, food, and festivities. All residents welcome!"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Events</h1>
            <p className="text-blue-100 max-w-2xl">
              Join our community for exciting events and activities throughout the year.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mark your calendars for these exciting community events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline">View All Events</Button>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Event Calendar</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <Button variant="outline">Previous Month</Button>
                <h3 className="text-xl font-semibold">June 2023</h3>
                <Button variant="outline">Next Month</Button>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {[...Array(35)].map((_, i) => {
                  const day = i - 3;
                  const isCurrentMonth = day > 0 && day <= 30;
                  const isEventDay = day === 15 || day === 22 || day === 29;
                  
                  return (
                    <div 
                      key={i} 
                      className={`h-16 p-2 border rounded ${
                        isCurrentMonth 
                          ? 'bg-white border-gray-200' 
                          : 'bg-gray-100 border-gray-100 text-gray-400'
                      } ${isEventDay ? 'bg-blue-50 border-blue-200' : ''}`}
                    >
                      {isCurrentMonth && (
                        <>
                          <div className={`text-right ${isEventDay ? 'font-bold text-blue-600' : ''}`}>
                            {day}
                          </div>
                          {isEventDay && (
                            <div className="text-xs text-blue-600 truncate">
                              {day === 15 ? 'BBQ' : day === 22 ? 'Fitness' : 'Movie Night'}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;