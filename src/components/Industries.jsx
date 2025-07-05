import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import { FaTruck, FaHardHat, FaMountain, FaIndustry } from "react-icons/fa";
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
    {
      id: 6,
      image: "/Yellow-truck.jpg",
      alt: "Construction crane lifting materials",
    },
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

  // Update service card background colors
  const serviceCards = [
    {
      title: "Logistics",
      icon: <FaTruck className="text-white text-3xl" />,
      description:
        "Unlock full potential of your Fleet with Wheelboard smart dashboard. Plan, Grow Sustainably- all without any initial investment.",
      bgColor: "from-[#0052CC] to-[#0052CC]",
      bgImage: "/red-truck.png",
    },
    {
      title: "Construction",
      icon: <FaHardHat className="text-white font-bold text-3xl" />,
      description:
        "Drive Efficiency. Enhanced Safety. Optimize Asset Utilization",
      bgColor: "from-[#FF6D1B] to-[#FF6D1B]",
      bgImage: "/bulldozer.png",
    },
    {
      title: "Mining",
      icon: <FaMountain className="text-white text-3xl" />,
      description:
        "Empower your fleet operations with the right skills and actionable, data-driven insights.",
      bgColor: "from-[#333333] to-[#333333]",
      bgImage: "/mining-truck.jpg",
    },
  ];

  // Render mobile view
  const renderMobileView = () => {
    return (
      <div className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">
            Industries <span className="text-blue-500">we Serve</span>
          </h2>
          <p className="text-lg font-semibold">
            Specialized logistics solutions
            <br />
            across various sectors
          </p>
        </div>

        {/* Service Cards - Mobile */}
        <div className="flex flex-col gap-4 mb-10">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl p-5 text-white shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Background image with overlay */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 z-10 bg-gradient-to-br ${card.bgColor} opacity-85`}
              />

              {/* Card content */}
              <div className="relative z-20">
                <div className="icons">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-shadow-sm">
                  {card.title}
                </h3>
                <p className="text-sm opacity-95 text-shadow-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel - Mobile */}
        <div className="relative pt-8 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl mx-auto"
            >
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots - Mobile */}
          <div className="absolute -bottom-2 left-0 right-0 flex justify-center items-center gap-2 z-10 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-[8px] h-[8px] bg-[#0052CC]"
                    : "w-[6px] h-[6px] bg-gray-300"
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
        </div>
      </div>
    );
  };

  // Render desktop view
  const renderDesktopView = () => {
    return (
      <div className="mt-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Industries <span className="text-[#0052CC]">we Serve</span>
          </h2>
          <div className="max-w-2xl mx-auto mt-6">
            <p className="text-xl md:text-2xl font-semibold text-center">
              Specialized logistics solutions
              <br />
              across various sectors
            </p>
          </div>
        </div>

        {/* Service Cards - Desktop */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 text-white shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 z-10 bg-gradient-to-br ${card.bgColor} opacity-80`}
              />

              {/* 3D elements - subtle abstract shapes */}
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white opacity-10 transform translate-x-16 translate-y-16 rotate-12 z-10"></div>
              <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white opacity-10 transform -translate-x-10 -translate-y-10 z-10"></div>

              {/* Content with 3D effect */}
              <div className="relative z-20">
                <div className="icons">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-shadow">
                  {card.title}
                </h3>
                <p className="text-sm opacity-90 text-shadow-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Carousel - Desktop */}
        <div
          className="relative py-20 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={carouselRef}
            className="w-full h-[420px] relative"
            drag="x"
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
                    className="absolute rounded-[32px] overflow-hidden shadow-2xl"
                    initial={false}
                    animate={{
                      left:
                        position === "center"
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
                      position !== "hidden"
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
                      style={{ filter: slideStyles.filter || "none" }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation controls - Desktop */}
          <div className="absolute -bottom-4 left-0 right-0 flex flex-col items-center gap-3 z-40 pb-6">
            <div className="flex items-center gap-10">
              <button
                onClick={() => {
                  prevSlide();
                  setAutoScroll(false);
                  setTimeout(() => setAutoScroll(true), 5000);
                }}
                className="bg-white bg-opacity-30 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-black hover:bg-opacity-50 focus:outline-none transition-all duration-200 shadow-md"
                aria-label="Previous slide"
              >
                <IoIosArrowBack size={20} />
              </button>

              <div className="flex gap-3 items-center">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-[10px] h-[10px] bg-[#0052CC] shadow-md"
                        : "w-[8px] h-[8px] bg-gray-300"
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
                className="bg-white bg-opacity-30 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-black hover:bg-opacity-50 focus:outline-none transition-all duration-200 shadow-md"
                aria-label="Next slide"
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="industries" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
        {isMobile ? renderMobileView() : renderDesktopView()}
      </div>
    </section>
  );
};

export default Industries;
