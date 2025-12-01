"use client";

import { useEffect, useState } from "react";
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
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasSeenIntro = window.sessionStorage.getItem("introShown") === "true";

    if (hasSeenIntro) {
      setAnimationStarted(true);
      setShouldShowIntro(false);
    }
  }, []);

  const handleAnimationStart = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("introShown", "true");
    }
    setAnimationStarted(true);
    setShouldShowIntro(false);
  };

  return (
    <main>
      {shouldShowIntro && <IntroAnimation onAnimationStart={handleAnimationStart} />}
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
