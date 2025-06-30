import React from "react";

// Unsplash images for icons
const services = [
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80",
    title: "Skill Management",
    description: "Build workforce that fits your operation",
  },
  {
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=facearea&w=128&q=80",
    title: "Tyre Management",
    description: "We maintain and manage your tires",
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=128&q=80",
    title: "Consultation",
    description: "We manage your operational complexities",
  },
];

const highlightStyle = "text-orange-500 font-semibold";
const blueStyle = "text-blue-600 font-bold";

const Services = () => (
  <section id="services" className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      {/* Heading */}
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
      {/* Cards */}
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
              className="flex-1 relative rounded-[2rem] px-6 py-8 flex flex-col items-center text-center transition-all duration-200"
              style={{
                minWidth: 260,
                maxWidth: 340,
                minHeight: 260,
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
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-gray-100 shadow-md">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-12 h-12 object-cover rounded-full"
                    draggable={false}
                  />
                </div>
                <div className="font-semibold text-lg mb-1">
                  {service.title}
                </div>
                <div className="text-gray-500 text-base">
                  {service.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
