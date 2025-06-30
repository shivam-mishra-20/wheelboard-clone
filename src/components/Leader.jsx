import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Leader = () => {
  return (
    <section className="py-16 bg-gray-50 font-poppins">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Meet <span className="text-blue-600">Our Leader</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          The experts behind Wheelboard’s success story.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* 🔥 Gradient Profile Card */}
          <div className="relative group w-full h-113 max-w-xs rounded-3xl overflow-hidden shadow-xl bg-white p-[2px] backdrop-blur-md transition-all duration-500 hover:scale-[1.02]">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 text-center relative z-10">
              <img
                src="/profile-pic.png"
                alt="Saloni Kumari"
                className="w-50 h-50 rounded-full overflow-hidden justify-center mx-auto "
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Saloni Kumari
              </h3>
              <p className="text-orange-500 font-medium mb-3">
                Co-founder & CEO
              </p>
              <div className="text-sm text-gray-800 bg-white/10 px-4 py-3 rounded-xl">
                Building an ecosystem <br />
                <span className="font-semibold text-gray-900">
                  ‘grounded in{" "}
                  <span className="text-blue-500">Empowerment</span>,<br />
                  driven by <span className="text-blue-500">Efficiency</span>,
                  <br />
                  united by{" "}
                  <span className="text-blue-500">Shared Success’</span>
                </span>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-blue-700 hover:text-blue-900 text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:saloni@wheelboard.com"
                  aria-label="Email"
                  className="text-gray-600 hover:text-gray-900 text-xl"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 animate-tilt rounded-3xl" />
          </div>

          {/* 💡 Visionary Leadership */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 w-full max-w-2xl md:h-100 shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              Visionary Leadership
            </h4>
            <p className="text-gray-700 mb-4">
              As the co-founder of{" "}
              <span className="text-orange-600 font-semibold">
                Wheelboard Solutions
              </span>
              , Saloni is transforming the transport industry with a mission to
              build a thriving ecosystem where growth and success are shared.
            </p>
            <p className="italic text-gray-800 mb-4">
              "Transport is more than movement, it’s a force for empowerment,
              sustainability, and shared success.” At{" "}
              <span className="text-orange-600 font-semibold">Wheelboard</span>,
              we’re building an ecosystem where every stakeholder thrives."
            </p>
            <p className="text-gray-800 font-medium">
              — Saloni Kumari
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

export default Leader;
