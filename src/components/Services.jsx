import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🔍",
      title: "Custom Design",
      description:
        "Tailored wheel solutions designed to meet your specific requirements and applications.",
    },
    {
      icon: "🔧",
      title: "Manufacturing",
      description:
        "State-of-the-art production facilities ensuring precision and quality in every product.",
    },
    {
      icon: "🚚",
      title: "Distribution",
      description:
        "Efficient global distribution network ensuring timely delivery to your location.",
    },
    {
      icon: "🛠️",
      title: "Maintenance",
      description:
        "Comprehensive maintenance services to keep your wheels performing at their best.",
    },
    {
      icon: "📊",
      title: "Consulting",
      description:
        "Expert advice on selecting the optimal wheel solutions for your specific needs.",
    },
    {
      icon: "♻️",
      title: "Recycling",
      description:
        "Sustainable end-of-life solutions to minimize environmental impact.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Comprehensive wheel solutions to meet the needs of diverse industries
          and applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
