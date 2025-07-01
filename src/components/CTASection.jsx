import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <>
      {/* Desktop/Tablet Version */}
      <section className="relative bg-[#1E3A8A] rounded-4xl p-8 md:p-10 overflow-hidden text-white font-poppins shadow-xl mb-16 h-[240px] md:h-[220px] max-w-[75%] mx-auto z-20 hidden sm:block">
        <img
          src="/truck-CTA.png"
          alt="Logistics Truck"
          className="absolute right-[5%] bottom-[-30px] w-[50%] max-w-[440px] z-30"
        />
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102266] to-[#1f3bb3] z-0"></div>

        {/* Decorative lines - one white, one orange */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <svg
            className="absolute top-0 right-0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <path
              d="M400,30 Q550,80 750,40 T1000,70"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M500,20 Q650,70 800,30 T1100,60"
              stroke="#FF6B35"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Content container - adjusted spacing */}
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

      {/* Mobile Version */}
      <section className="relative bg-[#1E3A8A] rounded-3xl p-5 overflow-hidden text-white font-poppins shadow-xl mb-10 max-w-[90%] mx-auto z-20 block sm:hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102266] to-[#1f3bb3] z-0"></div>

        {/* Decorative lines - scaled for mobile */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <svg
            className="absolute top-0 right-0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <path
              d="M100,15 Q175,40 225,20 T300,35"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M150,10 Q200,35 240,15 T320,30"
              stroke="#FF6B35"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Content container */}
        <div className="relative z-20 pt-4 pb-28">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h2 className="text-xl font-bold leading-tight">
              Ready to Revolutionize your{" "}
              <span className="text-[#FF6B35]">Logistics Operations?</span>
            </h2>
            <p className="mt-2 text-xs text-gray-200 leading-relaxed">
              Join countless other businesses that have streamlined their
              logistics with our cutting-edge solution
            </p>
            <button className="mt-4 px-5 py-2 bg-[#FF6B35] hover:bg-orange-600 text-white rounded-full text-xs font-medium shadow-md transition-all duration-300">
              Contact us
            </button>
          </motion.div>

          {/* Truck Image - repositioned for mobile */}
          <img
            src="/truck-CTA.png"
            alt="Logistics Truck"
            className="absolute right-0 bottom-[-8px] w-[60%] max-w-[200px] z-30"
          />
        </div>
      </section>
    </>
  );
};

export default CTASection;
