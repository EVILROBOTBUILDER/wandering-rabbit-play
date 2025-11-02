"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CommunityIntro from "@/components/CommunityIntro";
import BoardSection from "@/components/BoardSection";
import AGMModule from "@/components/AGMModule";
import ResourcesRoadmap from "@/components/ResourcesRoadmap";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <CommunityIntro />
        <BoardSection />
        <AGMModule />
        <ResourcesRoadmap />
        <FeedbackSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;