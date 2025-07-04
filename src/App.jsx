import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import Leader from "./components/Leader";
import Industries from "./components/Industries";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import LoadingScreen from "./components/LoadingScreen";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  // If you need to actually load resources before showing content
  useEffect(() => {
    // You can add any resource loading logic here
    // For now, we'll just simulate loading with the progress in LoadingScreen
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    document.body.style.overflow = "auto"; // Enable scrolling once loaded
  };

  // Prevent scrolling during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

        <div style={{ visibility: loading ? "hidden" : "visible" }}>
          <Header />
          <main>
            <Hero />
            <WhyChoose />
            <About />
            <Services />
            <MissionVision />
            <Leader />
            <Industries />
            <FAQ />
            <Contact />
            <CTASection />
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
