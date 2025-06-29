import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Mobility Solutions
          </h2>
          <p className="text-xl mb-8">
            Innovative wheel technology for tomorrow's transportation needs.
            Reliable, efficient, and sustainable.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <div className="bg-white p-2 rounded-lg shadow-xl">
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500 text-lg">Product Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
