import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500 text-lg">Company Image</span>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About WheelBoard</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, WheelBoard has quickly established itself as a
              leader in innovative mobility solutions. Our team of engineers and
              designers work tirelessly to develop products that meet the
              evolving needs of transportation industries worldwide.
            </p>
            <p className="text-gray-600 mb-6">
              With a focus on sustainability and performance, our products are
              designed to withstand the most demanding conditions while
              minimizing environmental impact. We believe that quality mobility
              solutions are essential for creating a connected and efficient
              world.
            </p>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 mb-4">
                <h4 className="font-bold text-blue-600 text-2xl">50+</h4>
                <p className="text-gray-500">Products</p>
              </div>
              <div className="w-1/2 md:w-1/3 mb-4">
                <h4 className="font-bold text-blue-600 text-2xl">200+</h4>
                <p className="text-gray-500">Clients</p>
              </div>
              <div className="w-1/2 md:w-1/3 mb-4">
                <h4 className="font-bold text-blue-600 text-2xl">15+</h4>
                <p className="text-gray-500">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
