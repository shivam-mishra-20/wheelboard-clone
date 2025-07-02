import React from "react";
import { motion } from "framer-motion";

const aboutData = [
  {
    img: "https://media.istockphoto.com/id/517416991/photo/truck-driver.jpg?s=612x612&w=0&k=20&c=e1sbLN1Xof1cibXNfRWwQGBk0Ji0FIUaXRFrtUZ7Nho=", // Driver in truck cab
    bgColor: "from-[#0052CC] to-[#0052CC]",
    dotColor: "bg-[#0052CC]",
    dotPosition: "top-4 right-4",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Analytics dashboard
    bgColor: "from-[#FF6D1B] to-[#FF6D1B]",
    dotColor: "bg-[#0052CC]",
    dotPosition: "top-4 left-4",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXW-_g3LE3jWjvvOnQPKEsRlOQFEEwOY44w&s", // Mechanic working on truck tire
    bgColor: "from-[#0052CC] to-[#0052CC]",
    dotColor: "bg-[#FF6D1B]",
    dotPosition: "top-4 right-4",
  },
  {
    img: "https://media.istockphoto.com/id/184278815/photo/trucking-discussion.jpg?s=612x612&w=0&k=20&c=8HZvjBGVcz8uwwFMFLCB2o9X0aZ9IrnfaYyHdGCzFz8=", // Consultation
    bgColor: "from-green-500 to-green-600",
    dotColor: "bg-green-400",
    dotPosition: "top-4 left-4",
  },
  {
    img: "https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-car-wheel-and-tire-with-service-tools-service-accessories-with-spanner-png-image_11567931.png", // Tires and tools
    bgColor: "from-orange-400 to-orange-500",
    dotColor: "bg-orange-400",
    dotPosition: "top-4 right-4",
  },
  {
    img: "https://media.istockphoto.com/id/545806984/photo/checking-the-manifest-one-last-time.jpg?s=612x612&w=0&k=20&c=D6dW8cnbxO86z8xQ1EdJ8QPPuVjq1cP2j3XowI2lwZ4=", // People discussing by trucks
    bgColor: "from-purple-500 to-purple-600",
    dotColor: "bg-purple-400",
    dotPosition: "top-4 left-4",
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
    rotate: -2,
    scale: 0.98,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-white overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[#0052CC]">Us</span>
          </h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            At <strong>Wheelboard</strong>, We are committed to transform the
            transport industry by{" "}
            <strong>"Promoting sustainable practices"</strong> Ensuring{" "}
            <strong>Safer</strong> and <strong>efficient operations</strong>{" "}
            that drive success for all stakeholders.
            <br />
            We pride ourselves on fostering a culture of collaboration,
            continuous learning, and excellence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-2">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex justify-center"
              style={{
                transformOrigin:
                  index % 2 === 0 ? "left center" : "right center",
                transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
              }}
            >
              {/* Card Background with gradient */}
              <div
                className={`
                absolute inset-0 rounded-2xl bg-gradient-to-br ${item.bgColor} 
                transform rotate-2 scale-[1.03] z-0
              `}
              ></div>

              {/* Card Content */}
              <div
                className="
                relative bg-white rounded-xl overflow-hidden shadow-lg z-10
                aspect-video w-full max-w-md 
                transition-all duration-300 hover:shadow-xl hover:scale-[1.03]
              "
              >
                <img
                  src={item.img}
                  alt="about"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Enhanced Image Overlay with better hover description */}
                <div
                  className="absolute inset-0
                              opacity-0 hover:opacity-100 transition-all duration-300 
                              flex flex-col justify-end p-5 cursor-pointer group"
                >
                  <h4
                    className="text-[#FF6D1B] text-m font-extrabold transform translate-y-4 opacity-0 
                              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-out"
                  >
                    {
                      [
                        "Driver Excellence",
                        "Smart Analytics",
                        "Tire Management",
                        "Expert Consultation",
                        "Service & Maintenance",
                        "Logistics Solutions",
                      ][index]
                    }
                  </h4>
                  <p
                    className="text-[#FF6D1B] text-sm font-semibold transform translate-y-4 opacity-0 
                              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-out"
                  >
                    {
                      [
                        "Professional drivers delivering exceptional service and safety.",
                        "Data-driven insights to optimize your fleet operations.",
                        "Complete tire lifecycle management for enhanced performance.",
                        "Expert guidance to overcome operational challenges.",
                        "Comprehensive maintenance solutions for your fleet.",
                        "Streamlined logistics for maximum efficiency.",
                      ][index]
                    }
                  </p>
                </div>

                {/* Animated Colored Dot */}
                <div className="absolute z-20">
                  <div
                    className={`absolute ${item.dotPosition} w-6 h-6 rounded-full ${item.dotColor} border-2 border-white shadow-md animate-pulse`}
                  ></div>
                  <div
                    className={`absolute ${item.dotPosition} w-6 h-6 rounded-full ${item.dotColor} border-2 border-white shadow-md opacity-75 animate-ping`}
                    style={{
                      animationDuration: "3s",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
