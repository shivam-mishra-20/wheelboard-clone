const TabletHeroView = () => {
  return (
    <div className="container mx-auto flex flex-col items-center px-6 py-8 z-20 relative">
      {/* Top: Phone Mockup - Centered on tablet */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 60,
        }}
        className="relative w-full flex justify-center mb-8"
      >
        <motion.div
          whileHover={{
            y: -10,
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
            className="w-[240px] drop-shadow-xl"
          />

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

          {/* Floating feature indicators - repositioned for tablet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: -55 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute left-0 top-1/4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full py-1.5 px-3 text-xs font-medium text-purple-600 flex items-center"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
            Live Tracking
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 55 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute right-0 bottom-1/3 bg-white/90 backdrop-blur-sm shadow-lg rounded-full py-1.5 px-3 text-xs font-medium text-purple-600 flex items-center"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>
            Real-time Data
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom: Text content - Full width on tablet */}
      <div className="w-full z-20 flex flex-col items-center text-center relative max-w-[600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col items-center text-center relative z-20"
        >
          <h1 className="text-center text-[2.5rem] font-extrabold leading-tight mb-4 text-[#1A1A1A] tracking-[-0.03em] relative z-10">
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
              className="block font-extrabold text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-[#0052CC] mt-2 mb-2"
            >
              One Tap Away
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center text-[#3d3552] font-semibold text-base mb-6 mt-2 max-w-[500px] mx-auto relative z-10"
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

          {/* Buttons - centered on tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-row gap-4 justify-center mt-2 relative z-10"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 24px rgba(0, 82, 204, 0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="#download"
              className="px-6 py-2.5 rounded-lg font-semibold transition text-white bg-gradient-to-r from-[#0052CC] via-[#0052CC] to-[#FF6D1B] shadow-[0_4px_24px_0_rgba(0,82,204,0.18)] text-center"
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
              className="px-6 py-2.5 rounded-lg font-semibold border-2 border-[#0052CC] text-[#0052CC] bg-transparent transition shadow-[0_4px_24px_0_rgba(0,82,204,0.08)] text-center"
              style={{ minWidth: 150 }}
            >
              Watch Demo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative pink ball positioned differently for tablet */}
      <motion.img
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="/ball-pink.png"
        alt=""
        className="absolute left-1/4 bottom-[-20%] w-[300px] h-auto z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
    </div>
  );
};
