import React from "react";
import { motion } from "framer-motion";

const MobileHeroView = () => {
  return (
    <div className="flex flex-col w-full px-4 pt-10 relative z-20 min-h-[90vh]">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Diagonal gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-br from-[#f6f7fd]/80 via-[#f8f9ff] to-transparent transform -rotate-[5deg] origin-top-right translate-y-[-10%]" />

        {/* Pink ball - repositioned */}
        <motion.img
          initial={{ opacity: 0, scale: 0.7, x: -20 }}
          animate={{ opacity: 0.85, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/ball-pink.png"
          alt=""
          className="w-[200px] h-auto absolute right-[-80px] top-[15vh] z-0 pointer-events-none select-none"
          aria-hidden="true"
        />

        {/* Blue ball - repositioned */}
        <motion.img
          initial={{ opacity: 0, scale: 0.7, x: 20 }}
          animate={{ opacity: 0.7, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          src="/ball-blue.png"
          alt=""
          className="absolute left-[-60px] bottom-[15vh] w-[150px] h-auto z-0 pointer-events-none select-none"
          aria-hidden="true"
        />

        {/* Decorative curved line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 0.7, scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-0 right-0 top-[45vh] h-[1px] bg-gradient-to-r from-transparent via-purple-300 to-transparent"
        />
      </motion.div>

      {/* Split layout container */}
      <div className="flex flex-col h-full relative z-10 mt-[5vh]">
        {/* Phone Mockup - Now more prominent at top */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 50,
          }}
          className="relative w-full flex justify-center mb-4 mt-8" // Added mt-8 to move it down
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              // Removed rotation to make it straight by default
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
              rotateY: -10, // Changed to negative value to rotate left
            }}
            whileTap={{ scale: 0.98 }}
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.img
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src="/mobile-ss.png"
              alt="App Preview"
              className="w-[180px] xs:w-[200px] sm:w-[220px] drop-shadow-2xl"
            />

            {/* Subtle screen shine effect */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                  "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0) 100%)",
                  "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                ],
                backgroundSize: "200% 200%",
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-[3px] rounded-[18px] z-10"
            />

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: -50, y: 10 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute left-0 top-1/4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full py-1 px-3 text-xs font-medium text-purple-600 flex items-center"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              Live Tracking
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 50, y: -10 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute right-0 bottom-1/4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full py-1 px-3 text-xs font-medium text-purple-600 flex items-center"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
              Real-time Data
            </motion.div>

            {/* Animated highlight dots */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 2 + i * 0.8,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
                className={`absolute w-2 h-2 bg-purple-400 rounded-full z-20 ${
                  i === 0
                    ? "top-[30%] left-[20%]"
                    : i === 1
                    ? "top-[45%] right-[25%]"
                    : "bottom-[25%] left-[30%]"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Text aligned to left with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-start text-left relative z-10 px-1 mt-5"
        >
          <motion.h1 className="text-left text-[2rem] xs:text-[2.2rem] font-extrabold leading-tight mb-2 text-[#1A1A1A] tracking-[-0.03em]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block"
            >
              Smart Logistics,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="block font-extrabold text-[2rem] xs:text-[2.2rem] leading-[1.1] tracking-[-0.03em] text-[#0052CC] mt-1 mb-1"
            >
              One Tap Away
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-left text-[#3d3552] font-semibold text-sm xs:text-base mb-5 mt-1"
          >
            <span className="font-bold text-[#3d3552]">
              Transform your fleet into a safer, efficient, and sustainable
              ecosystem.
            </span>
            <br />
            Achieve sustainable growth through{" "}
            <span className="font-bold">Innovation, Intelligent insights</span>,
            and collaborative partnerships— all in one platform.
          </motion.p>

          {/* Buttons with improved animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-row gap-3 w-full justify-start mb-6 z-10"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 20px rgba(111,107,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="#download"
              className="px-6 py-2.5 rounded-lg font-semibold transition text-white bg-gradient-to-r from-[#0052CC] via-[#0052CC] to-[#FF6D1B] text-center text-sm"
              style={{ minWidth: 150 }}
            >
              Download the App
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 15px rgba(0, 82, 204, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="#demo"
              className="px-6 py-2.5 rounded-lg font-semibold border-2 border-[#0052CC] text-[#0052CC] bg-transparent transition text-center text-sm"
              style={{ minWidth: 150 }}
            >
              Watch Demo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const DesktopHeroView = () => {
  return (
    <div className="container mx-auto flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 z-20 relative flex">
      {/* Left: Text + Pink Ball */}
      <div className="w-full md:w-1/2 pt-8 md:pt-0 z-20 flex flex-col items-start text-left relative max-w-[540px] lg:ml-35 lg:mt-20">
        <motion.img
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/ball-pink.png"
          alt=""
          className="absolute left-45 top-[-40px] -translate-x-1/2 w-[425px] h-auto z-0 pointer-events-none select-none md:w-[425px] md:top-[5px]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col items-start text-left relative z-20"
        >
          <h1 className="text-left text-[2.3rem] xs:text-[2.6rem] sm:text-[3rem] md:text-[3.2rem] font-extrabold leading-tight mb-2 text-[#1A1A1A] tracking-[-0.03em] relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Smart Logistics,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block font-extrabold text-[2.3rem] xs:text-[2.6rem] sm:text-[3rem] md:text-[3.2rem] leading-[1.1] tracking-[-0.03em] text-[#0052CC] mt-2 mb-2"
            >
              One Tap Away
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-left text-[#3d3552] font-semibold text-base xs:text-lg md:text-xl mb-6 mt-2 w-200 relative z-10"
          >
            <span className="font-bold text-[#3d3552]">
              Transform your fleet into a safer, efficient, and sustainable
              ecosystem.
            </span>
            <br />
            Achieve sustainable growth through{" "}
            <span className="font-bold">Innovation, Intelligent insights</span>
            , and <br />
            collaborative partnerships— all in one platform.
          </motion.p>
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-row gap-4 w-full md:w-auto justify-start md:mt-4 relative z-10"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 24px rgba(0, 82, 204, 0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="#download"
              className="px-8 py-3 rounded-lg font-semibold transition text-white bg-gradient-to-r from-[#0052CC] via-[#0052CC] to-[#FF6D1B] shadow-[0_4px_24px_0_rgba(0,82,204,0.18)] text-center"
              style={{ minWidth: 150 }}
            >
              Download the App
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(0, 82, 204, 0.12)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="#demo"
              className="px-8 py-3 rounded-lg font-semibold border-2 border-[#0052CC] text-[#0052CC] bg-transparent transition shadow-[0_4px_24px_0_rgba(0,82,204,0.08)] text-center"
              style={{ minWidth: 150 }}
            >
              Watch Demo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
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
        <motion.div
          whileHover={{
            y: -15,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          className="relative"
        >
          <motion.img
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="/mobile-ss.png"
            alt="App Preview"
            className="w-[220px] xs:w-[260px] sm:w-[320px] md:w-[370px] drop-shadow-xl"
          />

          {/* Animated interactive elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 2, 0],
              rotateX: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute inset-0 z-10"
          >
            {/* Screen shine effect */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                  "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0) 100%)",
                  "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                ],
                backgroundSize: "200% 200%",
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-[5px] rounded-[18px] z-10"
            />

            {/* Interactive UI elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 2 + i * 1.2,
                  repeat: Infinity,
                  repeatDelay: 8,
                }}
                className={`absolute w-3 h-3 bg-purple-400 rounded-full z-20 ${
                  i === 0
                    ? "top-[20%] left-[20%]"
                    : i === 1
                    ? "top-[35%] right-[25%]"
                    : i === 2
                    ? "bottom-[35%] left-[30%]"
                    : i === 3
                    ? "bottom-[25%] right-[20%]"
                    : "top-[50%] left-[40%]"
                }`}
              />
            ))}
          </motion.div>

          {/* Floating feature indicators */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: -60 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute left-0 top-1/4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full py-2 px-4 text-sm font-medium text-purple-600 flex items-center"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
            Live Tracking
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 60 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute right-0 bottom-1/3 bg-white/90 backdrop-blur-sm shadow-lg rounded-full py-2 px-4 text-sm font-medium text-purple-600 flex items-center"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>
            Real-time Data
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#f9faff] to-[#f6f7fd] overflow-hidden"
    >
      {/* Decorative Lines and Balls */}
      {/* Hide on mobile, show on md+ */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 hidden md:block">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/ball-blue.png"
          alt=""
          className="absolute bottom-[-10vw] w-[55vw] max-w-[340px] h-auto right-[160px] md:bottom-[30px] md:w-[320px] md:max-w-none z-0"
          aria-hidden="true"
        />
      </div>

      {/* Decorative animated elements */}
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="/curve-line-up.png"
        alt=""
        className="absolute left-1/2 top-[30%] w-[100vw] max-w-[1020px] z-10 -translate-x-1/2 pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      />
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="/curve-line-down.png"
        alt=""
        className="absolute left-1/2 top-[58%] w-[70vw] max-w-[1020px] z-10 -translate-x-1/2 pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      />

      {/* Desktop Layout */}
      <div className="hidden md:block w-full">
        <DesktopHeroView />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        <MobileHeroView />
      </div>
    </section>
  );
};

export default Hero;
