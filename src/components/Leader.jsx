import React, { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Leader = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth < 768 ? <MobileView /> : <DesktopView />;
};

const DesktopView = () => {
  return (
    <section className="py-16 font-poppins">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Meet <span className="text-[#0052CC]">Our Leader</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          The experts behind Wheelboard's success story.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Profile Card */}
          <div className="relative group w-full h-auto max-w-xs rounded-3xl overflow-hidden shadow-md bg-white backdrop-blur-md transition-all duration-500 hover:scale-[1.02]">
            <div className="bg-white rounded-3xl p-6 text-center relative z-10">
              <div className="flex justify-center items-center">
                <img
                  src="/profile-pic.png"
                  alt="Saloni Singh"
                  className="w-30 h-30 rounded-full object-fill"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                Saloni Singh
              </h3>
              <p className="text-[#FF6D1B] font-medium mb-4">
                Co-founder & CEO
              </p>
              <div className="text-sm text-gray-800 bg-white/80 shadow-inner px-4 py-3 rounded-xl border border-gray-100">
                Building an ecosystem <br />
                <span className="font-semibold text-gray-900">
                  'grounded in{" "}
                  <span className="text-[#0052CC]">Empowerment</span>,<br />
                  driven by <span className="text-[#0052CC]">Efficiency</span>,
                  <br />
                  united by{" "}
                  <span className="text-[#FF6D1B]">Shared Success'</span>
                </span>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/saloni-singh-8571621ba/#:~:text=www.linkedin.com/in/saloni-singh-8571621ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#0052CC] hover:text-[#FF6D1B] text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:Saloni@wheelboard.in"
                  aria-label="Email"
                  className="text-gray-600 hover:text-gray-900 text-xl"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Subtle border gradient */}
            <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-blue-100 via-transparent to-pink-100 opacity-70" />
          </div>

          {/* Visionary Leadership */}
          <div className="bg-white border border-orange-200 rounded-2xl p-8 w-full max-w-2xl shadow-sm">
            <h4 className="text-2xl font-bold mb-4 text-gray-900">
              Visionary Leadership
            </h4>
            <p className="text-gray-700 mb-4">
              As the co-founder of{" "}
              <span className="text-[#FF6D1B] font-semibold">
                Wheelboard Solutions
              </span>
              , Saloni has a vision to transforming transport Industry. Her
              mission is to build a thriving ecosystem where growth and success
              are shared, and every service delivered, contributes positively to
              society and the environment.
            </p>
            <p className="text-gray-800 mb-4">
              "Transport is more than movement, it's a force for empowerment,
              sustainability, and shared success."
            </p>
            <p className="text-gray-800 mb-1">
              At{" "}
              <span className="text-[#FF6D1B] font-semibold">Wheelboard</span>,
              we're building an ecosystem where every stakeholder thrives."
            </p>
            <p className="text-gray-800 font-medium mt-4">
              — Saloni Singh
              <br />
              <span className="text-gray-500 text-sm">
                Co-founder & CEO, Wheelboard
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileView = () => {
  return (
    <section className="py-12 font-poppins">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Meet <span className="text-[#0052CC]">Our Leader</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          The experts behind Wheelboard's success story.
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Profile Card - Mobile */}
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-md bg-white">
            <div className="rounded-3xl p-6 text-center relative z-10">
              <div className="flex justify-center items-center">
                <img
                  src="/profile-pic.png"
                  alt="Saloni Singh"
                  className="w-30 h-30 rounded-full object-fill"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                Saloni Singh
              </h3>
              <p className="text-[#FF6D1B] font-medium mb-3">
                Co-founder & CEO
              </p>
              <div className="text-sm text-gray-800 bg-white/80 shadow-inner px-4 py-3 rounded-xl border border-gray-100 mb-3">
                Building an ecosystem <br />
                <span className="font-semibold text-gray-900">
                  'grounded in{" "}
                  <span className="text-[#0052CC]">Empowerment</span>, driven by{" "}
                  <span className="text-[#0052CC]">Efficiency</span>, united by{" "}
                  <span className="text-[#FF6D1B]">Shared Success'</span>
                </span>
              </div>
              <div className="flex justify-center gap-4 mt-3">
                <a
                  href="https://www.linkedin.com/in/saloni-singh-8571621ba/#:~:text=www.linkedin.com/in/saloni-singh-8571621ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#0052CC] hover:text-[#FF6D1B] text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:Saloni@wheelboard.in"
                  aria-label="Email"
                  className="text-gray-600 hover:text-gray-900 text-xl"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Subtle border gradient */}
            <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-blue-100 via-transparent to-pink-100 opacity-70" />
          </div>

          {/* Visionary Leadership - Mobile */}
          <div className="bg-white border border-orange-200 rounded-xl p-6 w-full max-w-sm shadow-sm">
            <h4 className="text-xl font-bold mb-3 text-gray-900">
              Visionary Leadership
            </h4>
            <p className="text-gray-700 text-sm mb-3">
              As the co-founder of{" "}
              <span className="text-[#FF6D1B] font-semibold">
                Wheelboard Solutions
              </span>
              , Saloni has a vision to transforming transport Industry. Her
              mission is to build a thriving ecosystem where growth and success
              are shared.
            </p>
            <p className="text-gray-800 text-sm mb-2">
              "Transport is more than movement, it's a force for empowerment,
              sustainability, and shared success."
            </p>
            <p className="text-gray-800 text-sm mb-2">
              At{" "}
              <span className="text-[#FF6D1B] font-semibold">Wheelboard</span>,
              we're building an ecosystem where every stakeholder thrives."
            </p>
            <p className="text-gray-800 font-medium text-sm mt-3">
              — Saloni Singh
              <br />
              <span className="text-gray-500 text-xs">
                Co-founder & CEO, Wheelboard
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leader;
