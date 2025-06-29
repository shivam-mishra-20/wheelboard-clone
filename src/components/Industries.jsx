import React from "react";

const Industries = () => {
  const industries = [
    {
      name: "Automotive",
      icon: "🚗",
      description:
        "High-performance wheels for passenger vehicles, optimizing comfort and efficiency.",
    },
    {
      name: "Heavy Industry",
      icon: "🏗️",
      description:
        "Durable solutions for construction equipment and heavy machinery applications.",
    },
    {
      name: "Aerospace",
      icon: "✈️",
      description:
        "Precision-engineered components meeting the strictest safety and performance standards.",
    },
    {
      name: "Logistics",
      icon: "🚚",
      description:
        "Reliable wheels for distribution fleets, maximizing uptime and minimizing maintenance.",
    },
    {
      name: "Agriculture",
      icon: "🚜",
      description:
        "Specialized designs for agricultural equipment, enhancing performance in challenging terrains.",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description:
        "Smooth, quiet mobility solutions for medical equipment and healthcare environments.",
    },
  ];

  return (
    <section id="industries" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Our wheel solutions are tailored to meet the specific needs of diverse
          industries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold">{industry.name}</h3>
              </div>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
