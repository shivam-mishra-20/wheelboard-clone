import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#f9faff] to-[#f6f7fd] overflow-hidden"
    >
      {/* Blue blurred circle right */}
      <img
        src="/ball-blue.png"
        alt=""
        className="
    absolute
    bottom-[-10vw] w-[55vw] max-w-[340px] h-auto
    right-[160px] md:bottom-[30px] md:w-[320px] md:max-w-none
    z-0 pointer-events-none select-none
  "
        aria-hidden="true"
      />

      {/* --- Curve lines center --- */}
      <img
        src="/curve-line-up.png"
        alt=""
        className="absolute left-1/2 top-[30%] w-[100vw] max-w-[1020px] z-10 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
      />
      <img
        src="/curve-line-down.png"
        alt=""
        className="absolute left-1/2 top-[58%] w-[70vw] max-w-[1020px] z-10 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* --- End curve lines --- */}

      {/* Orange dot */}
      <div className="absolute left-[55vw] sm:left-[420px] top-[220px] w-2 h-2 rounded-full bg-orange-400 z-20 ring-4 ring-white" />

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 z-20 relative">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 pt-8 md:pt-0 z-20 flex flex-col items-start text-left relative max-w-[540px] lg:ml-35 lg:mt-20"
        >
          {/* Pink ball behind text, centered */}
          <img
            src="/ball-pink.png"
            alt=""
            className="
                  absolute
                  left-45           // Center the ball horizontally
                  top-[-40px]        // Move the ball higher (adjust this value to move up/down)
                  -translate-x-1/2
                  w-[425px]          // Reduce the ball size (adjust this value for width)
                  h-auto
                  z-0 pointer-events-none select-none
                  md:w-[425px]       // Ball size on medium+ screens (adjust as needed)
                  md:top-[5px]
                      // Ball position on medium+ screens (adjust as needed)
                "
            aria-hidden="true"
          />
          <h1 className="text-left text-[2.3rem] xs:text-[2.6rem] sm:text-[3rem] md:text-[3.2rem] font-extrabold leading-tight mb-2 text-black tracking-[-0.03em] relative z-10">
            <span className="block">Smart Logistics,</span>
            <span className="block font-extrabold text-[2.3rem] xs:text-[2.6rem] sm:text-[3rem] md:text-[3.2rem] leading-[1.1] tracking-[-0.03em] text-[#6f38ff] mt-2 mb-2">
              One Tap Away
            </span>
          </h1>
          <p className="text-left text-[#3d3552] font-semibold text-base xs:text-lg md:text-xl mb-6 mt-2 w-200 relative z-10">
            <span className="font-bold text-[#3d3552]">
              Transform your fleet into a safer, efficient, and sustainable
              ecosystem.
            </span>
            <br />
            Achieve sustainable growth through{" "}
            <span className="font-bold">Innovation, Intelligent insights</span>,
            and <br />
            collaborative partnerships— all in one platform.
          </p>
          {/* Buttons */}
          <div className="flex flex-row gap-4 w-full md:w-auto justify-start md:mt-4 relative z-10">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#download"
              className="px-8 py-3 rounded-lg font-semibold transition text-white bg-gradient-to-r from-[#6f6bff] via-[#5B2BE0] to-[#e766fe] shadow-[0_4px_24px_0_rgba(111,107,255,0.18)] text-center"
              style={{ minWidth: 150 }}
            >
              Download the App
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#demo"
              className="px-8 py-3 rounded-lg font-semibold border-2 border-[#5B2BE0] text-[#5B2BE0] bg-transparent transition shadow-[0_4px_24px_0_rgba(111,107,255,0.08)] text-center"
              style={{ minWidth: 150 }}
            >
              Watch Demo
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 10 }}
          animate={{ opacity: 1, y: -50, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          className="w-full md:w-1/2 flex justify-center md:justify-end relative z-30 mb-0 mt-60 md:mr-30"
        >
          <img
            src="/mobile-ss.png"
            alt="App Preview"
            className="w-[220px] xs:w-[260px] sm:w-[320px] md:w-[370px] "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
