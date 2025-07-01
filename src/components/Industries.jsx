import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import { FaTruck, FaHardHat, FaMountain } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  const slides = [
    {
      id: 1,
      image: "/logistics-professional.jpg",
      alt: "Logistics professional organizing cargo",
    },
    { id: 2, image: "/truck-01.jpg", alt: "Delivery truck on highway" },
    { id: 3, image: "/Bus.jpg", alt: "Commercial passenger bus" },
    { id: 4, image: "/mining-truck.jpg", alt: "Heavy mining dump truck" },
    { id: 5, image: "/excavator.jpg", alt: "Construction excavator" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      setWidth(innerWidth);
      setIsMobile(innerWidth < 640);
      setIsTablet(innerWidth >= 640 && innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const getSlidePosition = (index) => {
    if (isMobile) {
      return index === currentIndex ? "center" : "hidden";
    }

    const diff = (index - currentIndex + slides.length) % slides.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === slides.length - 1) return "left";
    if (diff === 2) return "farRight";
    if (diff === slides.length - 2) return "farLeft";
    return "hidden";
  };

  // Auto-scroll functionality
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    let interval;
    if (autoScroll) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScroll, currentIndex]);

  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  // Apply stacked card position values to match the reference image
  const getSlideStyles = (position) => {
    // Base styles
    const styles = {
      transformOrigin: "center center",
      transform: `perspective(1200px)`,
      aspectRatio: "16/9",
    };

    // Position-specific styles
    if (position === "center") {
      return {
        ...styles,
        width: isMobile ? "90%" : isTablet ? "55%" : "50%",
        zIndex: 30,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)",
        outline: "2px solid rgba(0, 0, 0, 0.08)",
      };
    } else if (position === "left") {
      return {
        ...styles,
        width: isMobile ? "0" : isTablet ? "40%" : "38%",
        zIndex: 20,
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        filter: "brightness(0.9)",
      };
    } else if (position === "right") {
      return {
        ...styles,
        width: isMobile ? "0" : isTablet ? "40%" : "38%",
        zIndex: 20,
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        filter: "brightness(0.9)",
      };
    } else if (position === "farLeft" || position === "farRight") {
      return {
        ...styles,
        width: isMobile ? "0" : "30%",
        zIndex: 10,
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.05)",
        filter: "brightness(0.85)",
      };
    }

    return {
      ...styles,
      width: "0%",
      opacity: 0,
    };
  };

  // Handle swipe gestures with parallax effect
  const handleDragStart = () => {
    controls.stop();
  };

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
    controls.start({ x: 0 });
  };

  const serviceCards = [
    {
      title: "Logistics",
      icon: <FaTruck className="text-white text-3xl" />,
      description:
        "Unlock full potential of your fleet with Wheelboard smart dashboard. Plan, Grow Sustainably: all without any initial investment.",
      bgColor: "bg-blue-600",
    },
    {
      title: "Construction",
      icon: <FaHardHat className="text-white text-3xl" />,
      description:
        "Drive Efficiency. Enhanced Safety. Optimize Asset Utilization",
      bgColor: "bg-orange-500",
    },
    {
      title: "Mining",
      icon: <FaMountain className="text-white text-3xl" />,
      description:
        "Empower your fleet operations with the right skills and actionable, data-driven insights.",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <section id="industries" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Industries <span className="text-blue-500">we Serve</span>
          </h2>
          <div className="max-w-2xl mx-auto mt-6">
            <p className="text-xl md:text-2xl font-semibold text-center">
              Specialized logistics solutions
              <br />
              across various sectors
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} rounded-2xl p-6 text-white flex flex-col`}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm opacity-90">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Carousel */}
        <div
          className="relative mt-16 mb-20 py-16 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={carouselRef}
            className="w-full h-[280px] sm:h-[340px] md:h-[420px] relative"
            drag={isMobile ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {slides.map((slide, index) => {
                const position = getSlidePosition(index);
                const slideStyles = getSlideStyles(position);

                return (
                  <motion.div
                    key={slide.id}
                    className="absolute rounded-[32px] overflow-hidden"
                    initial={false}
                    animate={{
                      left: isMobile
                        ? "50%"
                        : position === "center"
                        ? "50%"
                        : position === "left"
                        ? "22%"
                        : position === "right"
                        ? "78%"
                        : position === "farLeft"
                        ? "5%"
                        : position === "farRight"
                        ? "95%"
                        : "150%",
                      x: "-50%",
                      scale:
                        position === "center"
                          ? 1
                          : position === "left" || position === "right"
                          ? 0.85
                          : 0.7,
                      zIndex: slideStyles.zIndex,
                      opacity:
                        position === "hidden"
                          ? 0
                          : position === "center"
                          ? 1
                          : position === "left" || position === "right"
                          ? 0.9
                          : 0.75,
                      rotateY:
                        position === "left"
                          ? 25
                          : position === "right"
                          ? -25
                          : position === "farLeft"
                          ? 35
                          : position === "farRight"
                          ? -35
                          : 0,
                    }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.6,
                    }}
                    whileHover={
                      !isMobile && position !== "hidden"
                        ? {
                            scale:
                              position === "center"
                                ? 1.02
                                : position === "left"
                                ? 0.88
                                : position === "right"
                                ? 0.88
                                : 0.73,
                            translateX:
                              position === "left"
                                ? "-10px"
                                : position === "right"
                                ? "10px"
                                : "0px",
                            opacity:
                              position === "center"
                                ? 1
                                : position === "left" || position === "right"
                                ? 0.95
                                : 0.8,
                            transition: { duration: 0.3, ease: "easeOut" },
                          }
                        : {}
                    }
                    style={{
                      width: slideStyles.width,
                      aspectRatio: slideStyles.aspectRatio,
                      transformOrigin: slideStyles.transformOrigin,
                      boxShadow: slideStyles.boxShadow,
                      outline: slideStyles.outline,
                      transform: slideStyles.transform,
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                      style={{
                        filter: slideStyles.filter || "none",
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation controls with auto-scroll indicator */}
          <div className="absolute -bottom-4 left-0 right-0 flex flex-col items-center gap-3 z-40 pb-6">
            <div className="flex items-center gap-10">
              <button
                onClick={() => {
                  prevSlide();
                  setAutoScroll(false);
                  setTimeout(() => setAutoScroll(true), 5000);
                }}
                className="bg-transparent border-0 text-gray-600 hover:text-black focus:outline-none transition-colors duration-200"
                aria-label="Previous slide"
              >
                <IoIosArrowBack size={20} />
              </button>

              <div className="flex gap-3 items-center">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`rounded-full transition-all duration-300 border ${
                      currentIndex === index
                        ? "w-[8px] h-[8px] bg-black border-black"
                        : "w-[8px] h-[8px] bg-transparent border-gray-400"
                    }`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setAutoScroll(false);
                      setTimeout(() => setAutoScroll(true), 5000);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  nextSlide();
                  setAutoScroll(false);
                  setTimeout(() => setAutoScroll(true), 5000);
                }}
                className="bg-transparent border-0 text-gray-600 hover:text-black focus:outline-none transition-colors duration-200"
                aria-label="Next slide"
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
