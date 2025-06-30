import React from "react";
import { motion } from "framer-motion";

const aboutData = [
  {
    img: "/img-3.png",
    bg: "from-blue-500 to-blue-700",
    dot: "bg-orange-400",
  },
  {
    img: "img.png",
    bg: "from-orange-400 to-pink-500",
    dot: "bg-blue-400",
  },
  {
    img: "img-5.png",
    bg: "from-yellow-400 to-blue-600",
    dot: "bg-orange-400",
  },
  {
    img: "img-1.png",
    bg: "from-green-400 to-green-600",
    dot: "bg-green-400",
  },
  {
    img: "img-4.png",
    bg: "from-orange-400 to-pink-500",
    dot: "bg-sky-300",
  },
  {
    img: "img-2.png",
    bg: "from-purple-500 to-pink-500",
    dot: "bg-purple-400",
  },
];

const cardRotations = [
  "-rotate-6",
  "rotate-6",
  "-rotate-3",
  "rotate-3",
  "-rotate-2",
  "rotate-2",
];
const dotPositions = [
  "-top-5 -left-5",
  "-top-5 -right-5",
  "-bottom-5 -left-5",
  "-bottom-5 -right-5",
  "-top-5 -left-5",
  "-top-5 -right-5",
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 80,
    scale: 0.85,
    rotate: -8,
    filter: "blur(8px)",
    boxShadow: "0 0px 0px rgba(0,0,0,0.0)",
  },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
    transition: {
      type: "spring",
      bounce: 0.38,
      duration: 1.05,
      delayChildren: 0.15,
      staggerChildren: 0.09,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-white overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="w-full">
        {/* Soft colored background circles and extra effects */}
        <div className="absolute z-0 inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 bg-blue-100 rounded-full -top-20 -left-20 opacity-60 blur-2xl"></div>
          <div className="absolute w-80 h-80 bg-orange-100 rounded-full top-1/3 -right-32 opacity-50 blur-2xl"></div>
          <div className="absolute w-72 h-72 bg-green-100 rounded-full bottom-0 left-1/4 opacity-40 blur-2xl"></div>
          <div className="absolute w-80 h-80 bg-purple-100 rounded-full -bottom-24 right-1/4 opacity-40 blur-2xl"></div>
          {/* Extra animated gradient blobs */}
          <motion.div
            className="absolute w-60 h-60 bg-gradient-to-tr from-pink-300 to-purple-300 rounded-full left-1/2 top-10 opacity-30 blur-3xl"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-44 h-44 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full right-1/3 bottom-10 opacity-25 blur-2xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
        </div>

        {/* Heading */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-700 font-medium mt-4 leading-relaxed">
            At <strong>Wheelboard</strong>, We are committed to transform the
            transport industry by{" "}
            <strong>"Promoting sustainable practices"</strong> Ensuring{" "}
            <strong>Safer</strong> and <strong>efficient operations</strong>{" "}
            that drive success for all stakeholders.
            <br />
            We pride ourselves on fostering a culture of collaboration,
            continuous learning, and excellence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-14 px-2 justify-items-center">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: index * 0.09 }}
              className={`
                relative rounded-3xl shadow-2xl bg-gradient-to-br ${item.bg}
                p-2 group overflow-visible
                ${cardRotations[index % cardRotations.length]}
                border border-white/30 backdrop-blur-[10px]
                hover:scale-105 hover:shadow-2xl transition-all duration-300
                before:absolute before:inset-0 before:bg-white/20 before:rounded-3xl before:pointer-events-none
                flex flex-col items-center justify-center
                aspect-square min-h-[22rem] max-h-[26rem]
              `}
              style={{
                boxShadow:
                  "0 16px 48px 0 rgba(30,41,59,0.18), 0 1.5px 8px 0 rgba(30,41,59,0.10)",
                zIndex: 1,
              }}
            >
              {/* Card Image (not rotated) */}
              <div className="relative z-10 w-full h-80 max-h-80 flex items-center justify-center">
                <img
                  src={item.img}
                  alt="about"
                  className="rounded-2xl object-cover w-full h-80 max-h-80 aspect-square transition-transform duration-300 group-hover:scale-110"
                  style={{
                    boxShadow: "0 4px 32px 0 rgba(30,41,59,0.13)",
                    border: "2.5px solid rgba(255,255,255,0.22)",
                    background: "rgba(255,255,255,0.13)",
                    zIndex: 10,
                  }}
                />
                {/* Colored Gradient Dot on Card Corner (now overlayed on image) */}
                <span
                  className={`
                    absolute w-14 h-14 rounded-full
                    shadow-2xl border-4 border-white/40
                    ${dotPositions[index % dotPositions.length]}
                    flex items-center justify-center
                    overflow-hidden
                    ring-4 ring-white/30
                    ${item.dot}
                  `}
                  style={{
                    zIndex: 20,
                    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.18))",
                    boxShadow:
                      "0 4px 24px 0 rgba(30,41,59,0.22), 0 0 0 8px rgba(255,255,255,0.10) inset",
                  }}
                ></span>
                {/* Glass overlay for image
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-white/20 z-30"></div> */}
              </div>
              {/* Glassmorphism overlay for card */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-white/15 border border-white/20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
