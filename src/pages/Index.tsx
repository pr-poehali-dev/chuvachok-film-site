import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import YouTubeSubscribe from "@/components/YouTubeSubscribe";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Projects />
      <Gallery />
      <YouTubeSubscribe />
    </div>
  );
};

export default Index;
