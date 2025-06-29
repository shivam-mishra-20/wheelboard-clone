import React from "react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: "🛡️",
      title: "Reliable",
      description:
        "Built with advanced materials for lasting performance in any conditions.",
    },
    {
      icon: "⚡",
      title: "Efficient",
      description:
        "Designed to maximize energy efficiency and reduce operational costs.",
    },
    {
      icon: "🌱",
      title: "Sustainable",
      description:
        "Eco-friendly materials and processes minimize environmental impact.",
    },
    {
      icon: "🔧",
      title: "Easy Maintenance",
      description: "Simplified design for quick service and reduced downtime.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose WheelBoard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
