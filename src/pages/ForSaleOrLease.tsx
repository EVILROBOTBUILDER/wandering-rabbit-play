"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ForSaleOrLease = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">For Sale / Lease</h1>
        <p className="text-lg text-gray-600 mb-6">Listings for properties available for sale or lease by owners.</p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default ForSaleOrLease;