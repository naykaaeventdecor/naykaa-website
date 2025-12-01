"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleAnimationStart = () => {
    setAnimationStarted(true);
  };

  return (
    <main>
      <IntroAnimation onAnimationStart={handleAnimationStart} />
      <Header />
      <div style={{
        opacity: animationStarted ? 1 : 0,
        transition: "opacity 1s ease",
        pointerEvents: animationStarted ? "auto" : "none"
      }}>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
