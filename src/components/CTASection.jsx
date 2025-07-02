import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  const renderDesktopView = () => {
    return (
      <section className="relative bg-[#1E3A8A] rounded-4xl p-8 md:p-10 text-white font-poppins shadow-xl mb-16 h-[240px] md:h-[220px] max-w-[75%] mx-auto z-20 hidden sm:block">
        <img
          src="/live-truck.gif"
          alt="Logistics Truck"
          className="absolute right-[8%] bottom-[-120px] w-[50%] max-w-[440px] z-40"
        />
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102266] to-[#1f3bb3] z-0 rounded-4xl"></div>

        {/* Curves background image */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <img
            src="/curves-bg.png"
            alt="Background curves"
            className="absolute pl-50 w-full h-full object-cover opacity-100"
          />
        </div>

        {/* Content container */}
        <div className="flex items-center h-full relative z-20 px-2 md:px-6">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md z-10 pr-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Ready to Revolutionize your{" "}
              <span className="text-[#FF6B35]">Logistics Operations?</span>
            </h2>
            <p className="mt-2 text-sm text-gray-200 leading-relaxed max-w-[90%]">
              Join countless other businesses that have streamlined their
              logistics with our cutting-edge solution
            </p>
            <button className="mt-5 px-6 py-2 bg-[#FF6B35] hover:bg-orange-600 text-white rounded-full text-sm font-medium shadow-md transition-all duration-300">
              Contact us
            </button>
          </motion.div>
        </div>
      </section>
    );
  };

  const renderMobileView = () => {
    return (
      <section
        className="relative bg-[#1E3A8A] rounded-3xl p-6 text-white font-poppins shadow-xl mb-16 mx-auto z-20 block sm:hidden"
        style={{
          maxWidth: "92%",
          height: "auto",
          minHeight: "200px",
          paddingBottom: "90px",
        }}
      >
        {/* Background gradient - same as desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102266] to-[#1f3bb3] z-0 rounded-3xl"></div>

        {/* Curves background image for mobile */}
        <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl">
          <img
            src="/curves-bg.png"
            alt="Background curves"
            className="absolute pb-32 w-200 h-full object-cover opacity-100 rotate-22"
          />
        </div>

        {/* Content container - improved layout */}
        <div className="flex flex-col justify-center h-full relative z-20 pt-2">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] z-10"
          >
            <h2 className="text-lg font-bold leading-tight">
              Ready to Revolutionize your{" "}
              <span className="text-[#FF6B35]">Logistics Operations?</span>
            </h2>
            <p className="mt-3 text-sm text-gray-200 leading-relaxed">
              Join countless other businesses that have streamlined their
              logistics with our cutting-edge solution
            </p>
            <button className="mt-4 px-6 py-2 bg-[#FF6B35] hover:bg-orange-600 text-white rounded-full text-sm font-medium shadow-md transition-all duration-300">
              Contact us
            </button>
          </motion.div>
        </div>

        {/* Better positioned truck image */}
        <img
          src="/live-truck.gif"
          alt="Logistics Truck"
          className="absolute right-[-5%] bottom-[-25%] w-[50%] z-40"
          style={{ maxWidth: "380px", minWidth: "280px" }}
        />
      </section>
    );
  };

  return (
    <>
      {renderDesktopView()}
      {renderMobileView()}
    </>
  );
};

export default CTASection;
