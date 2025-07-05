import React, { useState } from "react";

const FAQ = () => {
  // Split FAQs into two columns
  const faqs = [
    {
      question: "What makes WheelBoard products different?",
      answer:
        "Our products combine innovative design, advanced materials, and precision engineering to deliver superior performance, durability, and efficiency compared to standard solutions available in the market.",
    },
    {
      question: "Do you offer customization options?",
      answer:
        "Yes, we offer extensive customization services to meet specific requirements across various industries and applications. Our engineering team works closely with clients to develop tailored solutions.",
    },
    {
      question: "What is your warranty policy?",
      answer:
        "We offer comprehensive warranties on all our products, typically ranging from 2-5 years depending on the product line and application. Extended warranties are also available for select products.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we have a global distribution network and ship to customers worldwide. Delivery times vary by location, and our team can provide specific shipping estimates for your region.",
    },
    {
      question: "How can I become a distributor?",
      answer:
        "We're always looking for qualified distribution partners. Please contact our business development team through our contact page to discuss partnership opportunities.",
    },
    {
      question: "How do I get technical support?",
      answer:
        "You can reach our technical support team via our support portal, email, or phone. We provide prompt assistance for all product-related queries.",
    },
  ];

  // Split into two columns
  const col1 = faqs.slice(0, 3);
  const col2 = faqs.slice(3, 6);

  // Track open index for each column
  const [openIndexes, setOpenIndexes] = useState([null, null]);

  const toggleFAQ = (col, idx) => {
    setOpenIndexes((prev) => [
      col === 0 ? (prev[0] === idx ? null : idx) : prev[0],
      col === 1 ? (prev[1] === idx ? null : idx) : prev[1],
    ]);
  };

  // Helper to render a column
  const renderColumn = (faqsCol, colIdx) =>
    faqsCol.map((faq, idx) => (
      <div
        key={idx}
        className="rounded-2xl bg-white/40 shadow-2xl backdrop-blur-lg border border-white/40 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(255,94,95,0.2)] mb-6"
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(255,94,95,0.15), 0 1.5px 4px 0 rgba(0,0,0,0.07)",
        }}
      >
        <button
          onClick={() => toggleFAQ(colIdx, idx)}
          className="flex justify-between items-center w-full px-6 py-5 text-left font-semibold text-lg text-gray-800 focus:outline-none"
        >
          <span>{faq.question}</span>
          <span className="ml-6 text-2xl transition-transform duration-300 select-none">
            {openIndexes[colIdx] === idx ? (
              <span className="text-[#ff5e5f]">–</span>
            ) : (
              <span className="text-[#ff5e5f]">+</span>
            )}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openIndexes[colIdx] === idx
              ? "max-h-40 opacity-100 py-4 px-6"
              : "max-h-0 opacity-0 py-0 px-6"
          }`}
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.7) 60%, rgba(255,94,95,0.1) 100%)",
            borderRadius: "0 0 1rem 1rem",
          }}
        >
          <p className="text-[#545454] text-base">{faq.answer}</p>
        </div>
      </div>
    ));

  return (
    <section
      id="faq"
      className="py-10 bg-white min-h-fit font-poppins"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 text-[#545454] drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <p className="text-[#545454] text-center max-w-2xl mx-auto mb-14 text-lg">
          Find answers to common questions about our products and services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>{renderColumn(col1, 0)}</div>
          <div>{renderColumn(col2, 1)}</div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
