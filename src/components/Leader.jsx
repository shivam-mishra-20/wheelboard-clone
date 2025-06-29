import React from "react";

const Leader = () => {
  const leaders = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      bio: "20+ years experience in wheel manufacturing and design",
      image: "profile-placeholder",
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      bio: "Former lead engineer at Tesla with expertise in materials science",
      image: "profile-placeholder",
    },
    {
      name: "Michael Rodriguez",
      position: "COO",
      bio: "Supply chain expert with background in automotive industry",
      image: "profile-placeholder",
    },
    {
      name: "Priya Patel",
      position: "Head of R&D",
      bio: "PhD in Mechanical Engineering with 15 patents to her name",
      image: "profile-placeholder",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Leadership</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Meet the team driving innovation and excellence at WheelBoard
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">{leader.image}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
              <p className="text-blue-600 mb-2">{leader.position}</p>
              <p className="text-gray-600">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leader;
