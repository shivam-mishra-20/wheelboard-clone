import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollDirection, setScrollDirection] = useState("up");
  const [temporaryExpanded, setTemporaryExpanded] = useState(false);
  let lastScrollY = window.scrollY;

  // Handle scroll event to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Reset temporary expanded state on scroll
      if (temporaryExpanded) {
        setTemporaryExpanded(false);
      }

      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect scroll direction
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;

      // Hide mobile menu on scroll
      if (isOpen) setIsOpen(false);

      // --- Active link highlight based on scroll ---
      // Get all section elements by id
      let currentSection = "home";
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            currentSection = link.id;
            break;
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, temporaryExpanded]); // Add temporaryExpanded to dependencies

  // Handle logo click to temporarily expand navbar
  const handleLogoClick = () => {
    if (scrolled) {
      setTemporaryExpanded(true);
      // Auto collapse after 3 seconds if no interaction
      setTimeout(() => {
        setTemporaryExpanded(false);
      }, 3000);
    }
  };

  // Determine if navbar should appear expanded
  const isExpanded = !scrolled || temporaryExpanded;

  // Navigation links data
  const navLinks = [
    { id: "home", label: "Home" },
    // { id: "why-choose", label: "Why Choose" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "mission-vision", label: "Mission & Vision" },
    { id: "industries", label: "Industries" },
    { id: "faq", label: "FAQ" },
    // { id: "contact", label: "Contact" },
  ];

  // Render desktop navigation
  const renderDesktopNav = () => (
    <AnimatePresence>
      {isExpanded && (
        <motion.nav
          className="hidden md:flex items-center justify-center space-x-10 absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={`font-medium text-sm relative font-poppins tracking-wide group ${
                activeLink === link.id
                  ? "text-purple-900"
                  : "text-gray-700 hover:text-purple-900"
              } transition-colors duration-300`}
              onClick={() => setActiveLink(link.id)}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.label}
              {/* Active underline */}
              {activeLink === link.id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-900 rounded-full"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {/* Hover underline */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 rounded-full pointer-events-none transition-all duration-200 scale-x-0 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );

  // --- Updated Mobile Nav ---
  const renderMobileNav = () => (
    <div
      className={`md:hidden flex items-center ${
        !isExpanded ? "invisible" : "visible"
      }`}
    >
      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-purple-900 hover:text-purple-700 focus:outline-none transition-transform duration-300"
        aria-label="Toggle menu"
      >
        <motion.div
          initial={false}
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.div>
      </button>

      {/* Animated Slide Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0, transition: { delay: 0.1 } }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute top-full left-0 right-0 bg-[#F4E1F9] rounded-b-2xl shadow-xl overflow-hidden mt-2 z-40 ${
          isOpen ? "py-4 px-0" : "p-0"
        }`}
      >
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                activeLink === link.id
                  ? "text-purple-900 bg-purple-50"
                  : "text-gray-700 hover:text-purple-900 hover:bg-purple-50"
              }`}
              onClick={() => {
                setActiveLink(link.id);
                setIsOpen(false);
              }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.96 }}
            >
              {link.label}
            </motion.a>
          ))}

          {/* Contact Button */}
          <motion.a
            href="#contact"
            className="mt-4 py-3 px-6 bg-purple-700 text-white rounded-lg font-semibold text-center transition hover:bg-purple-800"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="flex justify-center items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact Us
            </div>
          </motion.a>
        </nav>
      </motion.div>
    </div>
  );

  // Render the mobile logo section with proper collapsing
  const renderMobileLogo = () => (
    <motion.div
      className="md:hidden flex items-center"
      whileHover={{ scale: 1.03 }}
      onClick={handleLogoClick}
      style={{
        cursor: scrolled ? "pointer" : "default",
        width: isExpanded ? "auto" : "100%",
        justifyContent: isExpanded ? "flex-start" : "center",
        marginLeft: isExpanded ? "0" : "0", // Remove any left margin when collapsed
      }}
      animate={{
        scale: isExpanded ? 1 : 0.85,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src="/Logo.png"
        alt="Wheelboard Logo"
        className="w-auto h-16 -my-12" // Keep consistent height
        animate={{
          rotate: scrolled && !temporaryExpanded ? 360 : 0,
        }}
        transition={{
          duration: scrolled && !temporaryExpanded ? 0.5 : 0.2,
          type: "spring",
          stiffness: 60,
        }}
      />
      <AnimatePresence>
        {isExpanded && (
          <motion.h1
            className="font-bold text-black ml-0 font-poppins text-xl"
            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
            animate={{ opacity: 1, width: "auto", marginLeft: 2 }}
            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
            transition={{ duration: 0.3 }}
          >
            Wheelboard
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );

  // Render desktop logo section
  const renderDesktopLogo = () => (
    <motion.div
      className="hidden md:flex items-center -ml-10"
      whileHover={{ scale: 1.03 }}
      onClick={handleLogoClick}
      style={{ cursor: scrolled ? "pointer" : "default" }}
      animate={{
        scale: isExpanded ? 1 : 0.85,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src="/Logo.png"
        alt="Wheelboard Logo"
        className="w-auto h-24 -my-20"
        animate={{
          rotate: scrolled && !temporaryExpanded ? 360 : 0,
        }}
        transition={{
          duration: scrolled && !temporaryExpanded ? 0.5 : 0.2,
          type: "spring",
          stiffness: 60,
        }}
      />
      <motion.h1
        className={`font-bold text-black ml-0 font-poppins text-2xl ${
          scrolled && !temporaryExpanded ? "md:block hidden" : "block"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Wheelboard
      </motion.h1>
    </motion.div>
  );

  return (
    <motion.header
      className="fixed top-4 left-0 right-0 z-50 mx-auto transition-all duration-300"
      style={{
        width: isExpanded
          ? "92%"
          : scrolled
          ? window.innerWidth < 768
            ? "90px" // Further reduced width for collapsed mobile state
            : "auto"
          : "92%",
        maxWidth: isExpanded ? "1280px" : "500px",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div
        className={`bg-[#F4E1F9] rounded-3xl shadow-xl transition-all duration-300 py-3`}
        style={{
          boxShadow: "0 4px 14px rgba(0, 125, 252, 0.3)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          className={`container mx-auto flex justify-between items-center relative ${
            isExpanded ? "px-4" : "px-0"
          }`}
        >
          {/* Render different logo sections based on screen size */}
          {renderMobileLogo()}
          {renderDesktopLogo()}

          {/* Desktop Navigation */}
          {renderDesktopNav()}

          {/* Contact Button (Right Aligned) */}
          <motion.a
            href="#contact"
            className="hidden md:flex items-center px-6 py-2 rounded-full font-medium transition duration-300"
            animate={{
              scale: isExpanded ? 1 : 0.9,
            }}
            style={{
              background: "#f4e1f9",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow:
                "0 4px 15px rgba(190, 150, 235, 0.2), 0 1px 3px rgba(190, 150, 235, 0.1)",
              fontFamily: "Poppins, sans-serif",
              color: "#666",
            }}
            whileHover={{
              scale: isExpanded ? 1.02 : 0.95,
              boxShadow:
                "0 6px 20px rgba(190, 150, 235, 0.25), 0 1px 5px rgba(190, 150, 235, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-3 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Contact Us</span>
          </motion.a>

          {/* Mobile Navigation */}
          {renderMobileNav()}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
