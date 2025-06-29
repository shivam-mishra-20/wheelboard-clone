import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Find answers to common questions about our products and services
        </p>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-semibold text-lg"
              >
                <span>{faq.question}</span>
                <span className="ml-6">
                  {activeIndex === index ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
