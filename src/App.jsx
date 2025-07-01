import React from "react";
import { useState } from "react";
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

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
