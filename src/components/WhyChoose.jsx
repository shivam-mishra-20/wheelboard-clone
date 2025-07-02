import React from "react";
import {
  FiUsers,
  FiBox,
  FiCompass,
  FiBarChart2,
  FiGlobe,
  FiHeadphones,
} from "react-icons/fi";

const WhyChoose = () => {
  const features = [
    {
      title: "Hire and Manage Right skill",
      description:
        "Connect with right manpower operations when you need them most.",
      Icon: FiUsers,
      image: "/Hire.png",
    },
    {
      title: "Solution For Operational Challenges",
      description:
        "Strategic solutions that match your unique operational needs.",
      Icon: FiBox,
      image: "/challenges.png",
    },
    {
      title: "Manage your Tires",
      description:
        "Cut costs and time by letting us manage and maintain your tires.",
      Icon: FiCompass,
      image: "/tires.png",
    },
    {
      title: "Smart Dashboard",
      description:
        "Unique operational value through data-driven insights that power intelligent decision making.",
      Icon: FiBarChart2,
      image: "/dashboard.png",
    },
    {
      title: "Value Network",
      description:
        "Connect, Promote, Grow. Accelerate innovation together through Collaborative Culture.",
      Icon: FiGlobe,
      image: "/network.png",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Make data-driven decisions with comprehensive logistics reports at your fingertips.",
      Icon: FiHeadphones,
      image: "/support.png",
    },
  ];

  return (
    <section id="why-choose" className="py-20 px-4 md:px-10 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose <span className="text-[#4A90E2]">Wheelboard</span> ?
        </h2>
        <p className="text-lg md:text-xl font-bold text-gray-700 mt-2">
          Smart Operations, Sustainable growth, Greater Value
        </p>
        <p className="text-base text-gray-600 mt-2 font-semibold leading-relaxed">
          Our integrated approach simplifies operations,
          <br />
          so you can focus on your core business — while we drive sustainable,
          long-term success.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-6xl mx-auto px-2">
        {features.map(({ title, description, Icon, image }, idx) => (
          <div
            key={idx}
            className="relative flex bg-white border border-blue-200 rounded-2xl overflow-hidden 
                       shadow-sm transition-all duration-500 hover:border-blue-300 
                       max-w-[360px] min-h-[190px] mx-auto animate-fadeIn hover-colored-shadow
                       "
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Left Side (Text) */}
            <div className="w-1/2 p-5 flex flex-col justify-center group">
              <Icon
                className="text-[#4A90E2] w-7 h-7 mb-3 transition-all duration-300 
                              group-hover:text-blue-600 group-hover:scale-110 transform"
              />
              <h3
                className="text-[15px] font-semibold text-gray-900 mb-1 leading-snug 
                             transition-colors duration-300 group-hover:text-blue-800"
              >
                {title}
              </h3>
              <p
                className="text-[12px] text-gray-600 leading-snug 
                          transition-colors duration-300 group-hover:text-gray-700"
              >
                {description}
              </p>
            </div>

            {/* Right Side (Image) */}
            <div className="w-1/2 relative flex items-end justify-end pr-0 pb-0 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-[110%] max-h-[220px] object-contain pointer-events-none select-none 
                           transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add CSS animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .hover-colored-shadow {
          transition: box-shadow 0.3s ease-in-out;
        }
        .hover-colored-shadow:hover {
          box-shadow: 0 10px 25px -5px rgba(74, 144, 226, 0.3),
            0 8px 10px -6px rgba(74, 144, 226, 0.2);
        }
      `}</style>
    </section>
  );
};

export default WhyChoose;
