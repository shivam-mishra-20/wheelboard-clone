import React from "react";
import { FaUserTie, FaCog, FaLightbulb } from "react-icons/fa";

// Updated services with React icons
const services = [
  {
    icon: FaUserTie,
    iconColor: "#4A90E2",
    title: "Skill Management",
    description: "Build workforce that fits your operation",
  },
  {
    icon: FaCog,
    iconColor: "#F5A623",
    title: "Tyre Management",
    description: "We maintain and manage your tires",
  },
  {
    icon: FaLightbulb,
    iconColor: "#50C878",
    title: "Consultation",
    description: "We manage your operational complexities",
  },
];

const highlightStyle = "text-orange-500 font-semibold";
const blueStyle = "text-blue-600 font-bold";

const Services = () => (
  <section id="services" className="py-20 md:py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      {/* Heading with fade-in animation */}
      <div className="text-center mb-14 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Our <span className={blueStyle}>Services</span>
        </h2>
        {/* Subheading */}
        <div className="text-center font-semibold text-lg mb-2">
          Comprehensive Services, One Platform.
        </div>
        {/* Description */}
        <div className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Our services span across&nbsp;
          <span className={highlightStyle}>‘Skill management</span>,&nbsp;
          <span className={highlightStyle}>Tire management</span> and&nbsp;
          <span className={highlightStyle}>Strategic solutions</span>
          &nbsp;that, delivers operational excellence and positions us as your
          partner for success.
        </div>
      </div>

      {/* Cards with improved layout */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {services.map((service, idx) => {
          // Glare effect setup
          const overlayRef = React.useRef(null);
          const glareColor = "#ffffff";
          const glareOpacity = 0.5;
          const glareAngle = -45;
          const glareSize = 250;
          const transitionDuration = 650;
          // Convert hex to rgba
          const hex = glareColor.replace("#", "");
          let rgba = glareColor;
          if (/^[\dA-Fa-f]{6}$/.test(hex)) {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
          } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
            const r = parseInt(hex[0] + hex[0], 16);
            const g = parseInt(hex[1] + hex[1], 16);
            const b = parseInt(hex[2] + hex[2], 16);
            rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
          }
          const overlayStyle = {
            position: "absolute",
            inset: 0,
            background: `linear-gradient(${glareAngle}deg,
      hsla(0,0%,0%,0) 60%,
      ${rgba} 70%,
      hsla(0,0%,0%,0) 100%)`,
            backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "-100% -100%, 0 0",
            pointerEvents: "none",
            borderRadius: "2rem",
            zIndex: 1,
          };
          const animateIn = () => {
            const el = overlayRef.current;
            if (!el) return;
            el.style.transition = "none";
            el.style.backgroundPosition = "-100% -100%, 0 0";
            el.offsetHeight; // force reflow
            el.style.transition = `${transitionDuration}ms ease`;
            el.style.backgroundPosition = "100% 100%, 0 0";
          };
          const animateOut = () => {
            const el = overlayRef.current;
            if (!el) return;
            el.style.transition = `${transitionDuration}ms ease`;
            el.style.backgroundPosition = "-100% -100%, 0 0";
          };
          return (
            <div
              key={idx}
              className="flex-1 relative rounded-[2rem] px-6 py-8 flex flex-col items-center text-center 
                         transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2
                         animate-slide-up"
              style={{
                minWidth: 260,
                maxWidth: 340,
                minHeight: 260,
                animationDelay: `${idx * 200}ms`,
                animationFillMode: "both",
              }}
              onMouseEnter={animateIn}
              onMouseLeave={animateOut}
            >
              {/* Glare overlay */}
              <div ref={overlayRef} style={overlayStyle} />

              {/* Card background rectangle */}
              <img
                src="/Rectangle 7.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] z-0"
                style={{ pointerEvents: "none", userSelect: "none" }}
                aria-hidden="true"
                draggable={false}
              />

              {/* Glassy overlay for frosted glass effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-white/30 backdrop-blur-[2px] z-[1]"></div>

              {/* Content with enhanced styling */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon with animation */}
                <div
                  className="w-16 h-16 mb-4 flex items-center justify-center rounded-full 
                               bg-white/80 backdrop-blur-sm shadow-lg
                               transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <service.icon
                    size={28}
                    color={service.iconColor}
                    className="transition-transform duration-500 hover:rotate-12"
                  />
                </div>

                <div className="font-semibold text-lg md:text-xl mb-2 text-gray-800">
                  {service.title}
                </div>

                <div className="text-gray-600 text-base">
                  {service.description}
                </div>

                {/* Learn more button */}
                <button
                  className="mt-5 py-2 px-4 rounded-full bg-white/50 backdrop-blur-sm
                                  border border-white/20 text-blue-600 font-medium
                                  transition-all duration-300 hover:bg-blue-50 hover:shadow-md
                                  opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* CSS animations */}
    <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }

      .animate-slide-up {
        animation: slideUp 0.8s ease-out forwards;
        opacity: 0;
      }
    `}</style>
  </section>
);

export default Services;
