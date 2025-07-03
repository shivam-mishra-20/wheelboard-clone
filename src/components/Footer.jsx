import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import ContactFormModal from "./ContactFormModal";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Social media links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/wheelboard",
    instagram: "https://www.instagram.com/wheelboard",
    whatsapp: "https://wa.me/+919876543210", // Replace with actual number
    facebook: "https://www.facebook.com/wheelboard",
    twitter: "https://twitter.com/wheelboard",
  };

  // Navigation link handlers
  const handleNavigation = (path) => {
    // Using window.location for external links and anchor links
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="bg-[#272627] text-white font-poppins py-12 px-6 lg:px-16 rounded-t-4xl">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Layout - Two Columns Side by Side */}
        <div className="flex flex-col lg:flex-row lg:gap-14">
          {/* Left Column: Logo, Tagline & Contact Form */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            {/* Logo & Tagline */}
            <div className="mb-8">
              <div className="mb-4">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src="/Logo.png"
                  alt="Wheelboard Logo"
                  className="w-16 h-16 rounded-full bg-white object-cover p-0"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Wheelboard</h4>
              <p className="text-gray-400 text-base mb-6">
                Empowering Growth, Connecting Success.
              </p>

              <div className="flex space-x-4 mb-8">
                {[
                  { icon: FaLinkedin, href: socialLinks.linkedin },
                  { icon: FaInstagram, href: socialLinks.instagram },
                  { icon: FaWhatsapp, href: socialLinks.whatsapp },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-[#333333] hover:bg-[#444444] rounded-md transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-white text-base" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center w-full"
            >
              <div className="relative lg:w-200">
                <input
                  type="text"
                  placeholder="Have more query? Connect with us!"
                  className="w-full py-3 pl-5 pr-32 rounded-full bg-[#393839] placeholder-gray-400 text-gray-200 text-base focus:outline-none"
                  readOnly
                  onClick={() => setIsContactModalOpen(true)}
                />

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="absolute w-30 right-1 top-1 bottom-1 px-5 text-white text-sm font-medium rounded-full transition-all"
                  style={{
                    background:
                      "linear-gradient(90deg, #3A344F 0%, #746E8B 100%)",
                  }}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="lg:w-2/3 pt-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-10">
              {/* Getting Started Column */}
              <div>
                <h5 className="text-base font-medium mb-4">Getting Started</h5>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li
                    onClick={() => handleNavigation("/support")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Support
                  </li>
                  <li
                    onClick={() => handleNavigation("/help")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Help
                  </li>
                  <li
                    onClick={() => handleNavigation("/articles")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Article
                  </li>
                </ul>
              </div>

              {/* Social Column */}
              <div>
                <h5 className="text-base font-medium mb-4">Social</h5>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li
                    onClick={() => handleNavigation(socialLinks.instagram)}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Instagram
                  </li>
                  <li
                    onClick={() => handleNavigation(socialLinks.linkedin)}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    LinkedIn
                  </li>
                  <li
                    onClick={() => handleNavigation(socialLinks.facebook)}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Facebook
                  </li>
                  <li
                    onClick={() => handleNavigation(socialLinks.twitter)}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Twitter
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h5 className="text-base font-medium mb-4">Legal</h5>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li
                    onClick={() => handleNavigation("/terms")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Terms and Condition
                  </li>
                  <li
                    onClick={() => handleNavigation("/privacy")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Privacy Policy
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h5 className="text-base font-medium mb-4">Services</h5>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li
                    onClick={() => handleNavigation("/services/tracking")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Shipment Tracking
                  </li>
                  <li
                    onClick={() => handleNavigation("/services/routes")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Route Tracking
                  </li>
                  <li
                    onClick={() => handleNavigation("/services/freight")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Freight Management
                  </li>
                  <li
                    onClick={() => handleNavigation("/services/analytics")}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Real Time Analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-xs mt-8 mb-4">
          Wheelboard 2024 © All Rights Reserved
        </p>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
