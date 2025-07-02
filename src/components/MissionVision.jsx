import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const MissionVisionSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screens for conditional rendering
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="mission-vision"
      className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glassy background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0052CC]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6D1B]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our <span className="text-[#0052CC]">Mission</span> and{" "}
          <span className="text-[#FF6D1B]">Vision</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Guided by clear principles to transform the transport industry.
        </p>
      </div>

      {isMobile ? renderMobileView() : renderDesktopView()}
    </section>
  );
};

// Desktop view rendering function
const renderDesktopView = () => (
  <div className="relative z-10 space-y-16 max-w-4xl mx-auto">
    {/* Mission Card */}
    <motion.div
      className="relative mr-0 sm:mr-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Foreground card */}
      <div
        className="relative bg-white/80 backdrop-filter backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 
                   flex flex-col md:flex-row items-center hover:bg-white/90 transition-all
                   border border-white/20"
        style={{
          minHeight: 320,
          height: 280,
          maxWidth: 760,
          width: "100%",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div className="md:w-1/2 text-left flex-1 z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To promote sustainable practices and efficient transport operations
            that deliver exceptional value to our Clients while making a
            meaningful, positive impact on Society. We are committed to
            advancing eco-friendly logistics solutions that support both
            business success and social responsibility.
          </p>
          <motion.div
            className="absolute bottom-[-2] left-8 text-gray-200 text-6xl sm:text-7xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FaQuoteLeft />
          </motion.div>
        </div>

        {/* Van image */}
        <div className="md:w-1/2 relative flex-1 flex justify-end items-end min-w-[220px]">
          <img
            src="/VAN 1.png"
            alt="Mission Van"
            className="absolute right-[-200px] bottom-[-110px] w-80 sm:w-[480px] md:w-[560px] lg:w-[600px] transform drop-shadow-xl pointer-events-none select-none"
            style={{
              maxWidth: "150%",
              height: "auto",
              zIndex: 20,
            }}
          />
        </div>
      </div>
    </motion.div>

    {/* Vision Card */}
    <motion.div
      className="relative ml-0 sm:ml-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Foreground card */}
      <div
        className="relative bg-white/80 backdrop-filter backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 
                   flex flex-col md:flex-row-reverse items-center hover:bg-white/90 transition-all
                   border border-white/20"
        style={{
          minHeight: 320,
          height: 240,
          maxWidth: 760,
          width: "100%",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div className="md:w-1/2 text-left md:text-right flex-1 z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To become a key driving force in transforming the transport industry
            into a Safer, Efficient, and Sustainable ecosystem, where every
            stakeholder thrives through Innovation and Collaborative
            partnerships, building a better future.
          </p>
          <motion.div
            className="absolute bottom-[-2] right-8 text-gray-200 text-6xl sm:text-7xl rotate-180"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FaQuoteLeft />
          </motion.div>
        </div>

        {/* Van image */}
        <div className="md:w-1/2 relative flex-1 flex justify-start items-end min-w-[220px]">
          <img
            src="/truck-CTA.png"
            alt="Vision Van"
            className="absolute left-[-200px] bottom-[-110px] w-80 sm:w-[480px] md:w-[560px] lg:w-[600px] transform drop-shadow-xl pointer-events-none select-none"
            style={{
              maxWidth: "150%",
              height: "auto",
              zIndex: 20,
            }}
          />
        </div>
      </div>
    </motion.div>
  </div>
);

// Mobile view rendering function
const renderMobileView = () => (
  <div className="relative z-10 space-y-24 max-w-sm mx-auto">
    {/* Mission Card - Mobile */}
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Van image positioned above card for mobile */}
      <div className="relative h-40 mb-[-20px] flex justify-center">
        <img
          src="/VAN 1.png"
          alt="Mission Van"
          className="w-60 transform drop-shadow-xl pointer-events-none select-none"
          style={{ zIndex: 20 }}
        />
      </div>

      {/* Foreground card */}
      <div
        className="relative bg-white/80 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl p-6 
                   flex flex-col items-center text-center hover:bg-white/90 transition-all
                   border border-white/20"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          To promote sustainable practices and efficient transport operations
          that deliver exceptional value to our Clients while making a
          meaningful, positive impact on Society. We are committed to advancing
          eco-friendly logistics solutions that support both business success
          and social responsibility.
        </p>
        <motion.div
          className="text-gray-200 text-5xl mt-4"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FaQuoteLeft />
        </motion.div>
      </div>
    </motion.div>

    {/* Vision Card - Mobile */}
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Van image positioned above card for mobile */}
      <div className="relative h-40 mb-[-20px] flex justify-center">
        <img
          src="/truck-CTA.png"
          alt="Vision Van"
          className="w-60 drop-shadow-xl pointer-events-none select-none"
          style={{ zIndex: 20 }}
        />
      </div>

      {/* Foreground card */}
      <div
        className="relative bg-white/80 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl p-6 
                   flex flex-col items-center text-center hover:bg-white/90 transition-all
                   border border-white/20"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          To become a key driving force in transforming the transport industry
          into a Safer, Efficient, and Sustainable ecosystem, where every
          stakeholder thrives through Innovation and Collaborative partnerships,
          building a better future.
        </p>
        <motion.div
          className="text-gray-200 text-5xl mt-4 rotate-180"
          animate={{ scale: [1, 1.1, 1], rotate: [180, 175, 180] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FaQuoteLeft />
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default MissionVisionSection;
