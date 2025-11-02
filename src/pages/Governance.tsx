"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb"; // Import Breadcrumb

const Governance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 text-center">
        <Breadcrumb className="mb-6" /> {/* Breadcrumb */}
        <h1 className="text-4xl font-bold mb-4 font-serif">Governance</h1>
        <p className="text-lg text-gray-600 mb-6">Information about the Board, bylaws, and AGM archives.</p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default Governance;