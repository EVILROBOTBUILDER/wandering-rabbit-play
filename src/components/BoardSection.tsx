"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, ShieldCheck } from "lucide-react";

const BoardSection = () => {
  const mandateQuote = "MVT is well-managed and the Board of Directors’ mandate is to enhance the lives of all owners and residents through efficient communication and an effective community presence.";

  const boardMembers = [
    { name: "Jane Doe", role: "President", bio: "Experienced in community management and strategic planning." },
    { name: "John Smith", role: "Vice President", bio: "Dedicated to fostering a vibrant and inclusive community." },
    { name: "Emily White", role: "Treasurer", bio: "Ensuring financial transparency and responsible budgeting." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Your Board</h2>
          <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto border-l-4 border-mtv-blue-500 pl-4">
            "{mandateQuote}"
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {boardMembers.map((member, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                <Users className="text-gray-500" size={48} /> {/* Placeholder for member photo */}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-mtv-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to You</h3>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center text-gray-700">
              <ShieldCheck className="h-6 w-6 text-green-500 mr-2" />
              <span className="font-medium">Well-managed</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Users className="h-6 w-6 text-mtv-blue-500 mr-2" />
              <span className="font-medium">Resident-focused</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-8 py-4 rounded-lg">
            <Link to="/residents/login">View Full Governance Docs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;