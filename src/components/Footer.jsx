import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import ContactFormModal from "./ContactFormModal";
import InfoModal from "./InfoModal";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  // Social media links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/wheelboard-solutions/",
    instagram:
      "https://www.instagram.com/wheelboard_solutions?igsh=MXJzaDdvcW4yOHRnYQ==",
    whatsapp: "https://wa.me/7420861942",
    facebook: "https://www.facebook.com/share/14HFAMYoBZa/",
    twitter: "https://twitter.com/wheelboard",
  };

  // Content for different pages
  const pageContent = {
    support: {
      title: "Customer Support",
      content: (
        <div className="space-y-4">
          <p>
            Our customer support team is available 24/7 to assist you with any
            questions or concerns you may have about our products and services.
          </p>
          <div>
            <h4 className="font-medium mb-2">Contact Options:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Email: hello@wheelboard.in</li>
              <li>Phone: 020‑67320492</li>
              <li>What's app for chat- 7420861942</li>
            </ul>
          </div>
          <p>
            For urgent matters, please call our support hotline for immediate
            assistance.
          </p>
        </div>
      ),
    },
    help: {
      title: "Help Center",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to the Wheelboard Help Center. Find answers to frequently
            asked questions and learn how to make the most of our services.
          </p>
          <div>
            <h4 className="font-medium mb-2">Popular Help Topics:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Getting Started with Wheelboard</li>
              <li>Managing Your Account</li>
              <li>Tracking Shipments</li>
              <li>Understanding Analytics</li>
              <li>Troubleshooting Common Issues</li>
            </ul>
          </div>
          <p>
            Can't find what you're looking for? Contact our support team for
            personalized assistance.
          </p>
        </div>
      ),
    },
    articles: {
      title: "Resource Articles",
      content: (
        <div className="space-y-4">
          <p>
            Explore our collection of articles covering industry insights, best
            practices, and detailed guides on logistics and transportation
            management.
          </p>
          <div>
            <h4 className="font-medium mb-2">Featured Articles:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>5 Ways to Optimize Your Supply Chain</li>
              <li>The Future of Logistics: Trends to Watch</li>
              <li>Sustainable Practices in Transportation</li>
              <li>Understanding Last-Mile Delivery Challenges</li>
              <li>Implementing Effective Route Planning</li>
            </ul>
          </div>
          <p>
            New articles are published weekly. Check back often for the latest
            content.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms and Conditions",
      content: (
        <div className="space-y-4">
          <p>
            By using the Wheelboard platform and services, you agree to comply
            with and be bound by the following terms and conditions of use.
          </p>
          <div>
            <h4 className="font-medium mb-2">Key Points:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                License: Wheelboard grants you a limited, non-exclusive,
                non-transferable license to use the platform.
              </li>
              <li>
                User Accounts: You are responsible for maintaining the
                confidentiality of your account information.
              </li>
              <li>
                Prohibited Uses: The platform may not be used for any illegal or
                unauthorized purpose.
              </li>
              <li>
                Intellectual Property: All content included on the platform is
                the property of Wheelboard or its content suppliers.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our platform.
          </p>
          <div>
            <h4 className="font-medium mb-2">Information We Collect:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Personal Data: Name, email address, phone number, and billing
                information.
              </li>
              <li>
                Usage Data: Information on how you access and use our services.
              </li>
              <li>
                Device Data: Information about your device, browser type, and IP
                address.
              </li>
            </ul>
          </div>
          <p>We do not sell your personal information to third parties.</p>
        </div>
      ),
    },
    tracking: {
      title: "Shipment Tracking",
      content: (
        <div className="space-y-4">
          <p>
            Our advanced shipment tracking system provides real-time updates on
            the location and status of your cargo throughout its journey.
          </p>
          <div>
            <h4 className="font-medium mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Real-time GPS tracking with minute-by-minute updates</li>
              <li>Automated notifications for status changes</li>
              <li>Detailed shipment history and delivery confirmation</li>
              <li>
                Integration with major carriers and transportation partners
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    routes: {
      title: "Route Tracking",
      content: (
        <div className="space-y-4">
          <p>
            Monitor and optimize transportation routes with our comprehensive
            route tracking technology.
          </p>
          <div>
            <h4 className="font-medium mb-2">Capabilities:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Dynamic route optimization based on traffic and weather
                conditions
              </li>
              <li>Historical route analysis for improved planning</li>
              <li>Driver performance metrics and safety monitoring</li>
              <li>Fuel consumption tracking and efficiency reporting</li>
            </ul>
          </div>
        </div>
      ),
    },
    freight: {
      title: "Freight Management",
      content: (
        <div className="space-y-4">
          <p>
            Streamline your freight operations with our comprehensive management
            system designed for businesses of all sizes.
          </p>
          <div>
            <h4 className="font-medium mb-2">Our Solution Includes:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Carrier selection and rate negotiation tools</li>
              <li>Automated document management and customs processing</li>
              <li>Load planning and capacity optimization</li>
              <li>Freight audit and payment reconciliation</li>
            </ul>
          </div>
        </div>
      ),
    },
    analytics: {
      title: "Real-Time Analytics",
      content: (
        <div className="space-y-4">
          <p>
            Make data-driven decisions with our powerful real-time analytics
            platform that transforms transportation data into actionable
            insights.
          </p>
          <div>
            <h4 className="font-medium mb-2">Analytics Capabilities:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Interactive dashboards with customizable metrics</li>
              <li>Predictive analytics for demand forecasting</li>
              <li>Performance benchmarking against industry standards</li>
              <li>Cost analysis and optimization recommendations</li>
            </ul>
          </div>
        </div>
      ),
    },
    adminLogin: {
      title: "Admin Login",
      content: (
        <div className="space-y-4">
          <p>
            This area is restricted to authorized administrators only. Please
            log in with your administrator credentials.
          </p>
          <div className="p-4 rounded-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Log In
            </button>
          </div>
        </div>
      ),
    },
  };

  // Updated navigation handler
  const handleNavigation = (path, modalContent = null) => {
    // If modal content is provided, show the modal instead of navigating
    if (modalContent) {
      setInfoModal({
        isOpen: true,
        title: modalContent.title,
        content: modalContent.content,
      });
      return;
    }

    // Using window.location for external links and anchor links
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else if (path.startsWith("/admin")) {
      // Use React Router navigation for admin routes
      navigate(path);
    } else {
      // For other internal links
      window.location.href = path;
    }
  };

  const closeInfoModal = () => {
    setInfoModal({ ...infoModal, isOpen: false });
  };

  return (
    <footer className="bg-[#272627] text-white font-poppins py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-16 rounded-t-3xl sm:rounded-t-4xl">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Layout - Two Columns Side by Side on larger screens */}
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-14">
          {/* Left Column: Logo, Tagline & Contact Form */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            {/* Logo & Tagline */}
            <div className="mb-6 sm:mb-8">
              <div className="mb-3 sm:mb-4 flex items-center">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src="/Logo.png"
                  alt="Wheelboard Logo"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white object-cover p-0"
                />
                <h4 className="text-xl font-semibold ml-3">Wheelboard</h4>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6">
                Empowering Growth, Connecting Success.
              </p>

              <div className="flex space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                {[
                  {
                    icon: FaLinkedin,
                    href: socialLinks.linkedin,
                  },
                  {
                    icon: FaInstagram,
                    href: socialLinks.instagram,
                  },
                  {
                    icon: FaWhatsapp,
                    href: socialLinks.whatsapp,
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#333333] hover:bg-[#444444] rounded-md transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-white text-sm sm:text-base" />
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
              <div className="relative w-200">
                <input
                  type="text"
                  placeholder="Have more query? Connect with us!"
                  className="w-full py-2.5 sm:py-3 pl-4 sm:pl-5 pr-24 sm:pr-32 rounded-full bg-[#393839] placeholder-gray-400 text-gray-200 text-sm sm:text-base focus:outline-none"
                  readOnly
                  onClick={() => setIsContactModalOpen(true)}
                />

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="absolute right-1 top-1 bottom-1 px-3 sm:px-5 text-white text-xs sm:text-sm font-medium rounded-full transition-all"
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
          <div className="w-full lg:w-2/3 pt-2 mt-2 sm:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {/* Getting Started Column */}
              <div className="mb-4 sm:mb-0">
                <h5 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">
                  Getting Started
                </h5>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  <li
                    onClick={() => handleNavigation(null, pageContent.support)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Support
                  </li>
                  <li
                    onClick={() => handleNavigation(null, pageContent.help)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Help
                  </li>
                  <li
                    onClick={() => handleNavigation(null, pageContent.articles)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Article
                  </li>
                </ul>
              </div>

              {/* Social Column */}
              <div className="mb-4 sm:mb-0">
                <h5 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">
                  Social
                </h5>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  <li
                    onClick={() => handleNavigation(socialLinks.instagram)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Instagram
                  </li>
                  <li
                    onClick={() => handleNavigation(socialLinks.linkedin)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    LinkedIn
                  </li>
                  <li
                    onClick={() => handleNavigation(socialLinks.facebook)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Facebook
                  </li>
                  <li
                    onClick={() => handleNavigation(socialLinks.twitter)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Twitter
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="mb-4 sm:mb-0">
                <h5 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">
                  Legal
                </h5>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  <li
                    onClick={() => handleNavigation(null, pageContent.terms)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Terms and Condition
                  </li>
                  <li
                    onClick={() => handleNavigation(null, pageContent.privacy)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Privacy Policy
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h5 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">
                  Services
                </h5>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  <li
                    onClick={() => handleNavigation(null, pageContent.tracking)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Shipment Tracking
                  </li>
                  <li
                    onClick={() => handleNavigation(null, pageContent.routes)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Route Tracking
                  </li>
                  <li
                    onClick={() => handleNavigation(null, pageContent.freight)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Freight Management
                  </li>
                  <li
                    onClick={() =>
                      handleNavigation(null, pageContent.analytics)
                    }
                    className="hover:text-white cursor-pointer transition-colors duration-200 py-0.5"
                  >
                    Real Time Analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-xs mt-6 sm:mt-8 mb-2 sm:mb-4">
          Wheelboard 2024 © All Rights Reserved
        </p>
      </div>

      {/* Admin Login Link */}
      <div className="text-center mb-2 sm:mb-4">
        <span
          onClick={() => handleNavigation("/admin/login")}
          className="text-gray-400 hover:text-[#FF6D1B] text-xs transition-colors duration-300 cursor-pointer p-2"
        >
          Admin Login
        </span>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Info Modal */}
      <InfoModal
        isOpen={infoModal.isOpen}
        onClose={closeInfoModal}
        title={infoModal.title}
        content={infoModal.content}
      />
    </footer>
  );
};

export default Footer;
