"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, ShieldCheck } from "lucide-react";

const BoardSection = () => {
  const mandateQuote = "MVT is well-managed and the Board of Directors’ mandate is to enhance the lives of all owners and residents through efficient communication and an effective community presence.";

  const boardMembers = [
    { name: "Jane Doe", role: "President", focus: "Communication" },
    { name: "John Smith", role: "Vice President", focus: "Community Engagement" },
    { name: "Emily White", role: "Treasurer", focus: "Financial Oversight" },
    { name: "David Green", role: "Secretary", focus: "Record Keeping" },
    { name: "Sarah Brown", role: "Director at Large", focus: "Resident Relations" },
    { name: "Michael Lee", role: "Director at Large", focus: "Property Maintenance" },
  ];

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Meet Your Board</h2>
          <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto border-l-4 border-mtv-blue-500 pl-4 py-2">
            "{mandateQuote}"
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {boardMembers.map((member, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                <Users className="text-gray-500" size={48} /> {/* Placeholder for member photo */}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 font-serif">{member.name}</h3>
              <p className="text-mtv-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">Focus: {member.focus}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-lg font-medium text-green-800 shadow-sm">
            <ShieldCheck className="h-6 w-6 text-green-600 mr-2" />
            Well-Managed Since 1998
          </span>
        </div>

        <div className="text-center">
          <Button asChild className="bg-mtv-blue-500 hover:bg-mtv-blue-600 text-white text-lg px-8 py-4 rounded-lg">
            <Link to="/residents/documents">View Full Governance Docs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;