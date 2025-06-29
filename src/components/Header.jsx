import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollDirection, setScrollDirection] = useState("up");
  let lastScrollY = window.scrollY;

  // Handle scroll event to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation links data
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "features", label: "Features" },
    { id: "faq", label: "FAQ" },
  ];

  // Render desktop navigation
  const renderDesktopNav = () => (
    <nav className="hidden md:flex items-center justify-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
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
    </nav>
  );

  // Render mobile navigation
  const renderMobileNav = () => (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-purple-900 hover:text-purple-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
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
      </button>

      {isOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-white rounded-b-2xl shadow-lg mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`py-3 px-4 rounded-lg font-medium ${
                  activeLink === link.id
                    ? "text-purple-900 bg-purple-50"
                    : "text-gray-700 hover:text-purple-900 hover:bg-purple-50"
                } transition-colors duration-300`}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsOpen(false);
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="bg-purple-700 text-white mt-2 px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4 mr-2"
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
            </motion.a>
          </nav>
        </motion.div>
      )}
    </div>
  );

  return (
    <motion.header
      className={`fixed top-4 left-0 right-0 z-50 w-11/12 mx-auto max-w-screen-xl transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div
        className="bg-[#F4E1F9] rounded-3xl shadow-xl"
        style={{
          boxShadow: "0 4px 14px rgba(0, 125, 252, 0.3)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center pr-4 relative">
          {/* Logo */}
          <motion.div
            className="flex items-center -ml-10"
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src="/Logo.png"
              alt="Wheelboard Logo"
              className="h-24 w-auto -my-20"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            />
            <motion.h1
              className="text-2xl font-bold text-black ml-0 font-poppins "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Wheelboard
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          {renderDesktopNav()}

          {/* Contact Button (Right Aligned) */}
          <motion.a
            href="#contact"
            className="hidden md:flex items-center px-6 py-2 rounded-full font-medium transition duration-300"
            style={{
              background: "#f4e1f9",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow:
                "0 4px 15px rgba(190, 150, 235, 0.2), 0 1px 3px rgba(190, 150, 235, 0.1)",
              fontFamily: "Poppins, sans-serif",
              color: "#666",
            }}
            whileHover={{
              scale: 1.02,
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
