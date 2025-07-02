import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white font-poppins">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-semibold text-gray-900 text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Let’s Drive Success Together
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to transform your transport operations? Get in touch with our
          team to discuss how Wheelboard can help you achieve your goals.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 📇 Info + Map */}
          <motion.div
            className="flex-1 backdrop-blur-xl bg-white/30 rounded-2xl p-8 shadow-lg flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/50 rounded-full">
                  <FiPhone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-800 font-medium">Phone</div>
                  <div className="text-gray-600 text-sm">020‑67320492</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/50 rounded-full">
                  <FiMail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-gray-800 font-medium">Email</div>
                  <div className="text-gray-600 text-sm">
                    hello@wheelboard.in
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/50 rounded-full">
                  <FiMapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-gray-800 font-medium">Address</div>
                  <div className="text-gray-600 text-sm">
                    WHEELBOARD SOLUTIONS PRIVATE LIMITED <br />
                    #204 Sapphire Chambers, First Floor, Baner Road, <br />
                    Baner, Pune‑411045, Maharashtra
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Wheelboard Location"
                src="https://www.google.com/maps?q=18.559008,73.786972&z=15&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[250px] object-cover"
              ></iframe>
            </div>
          </motion.div>

          {/* 📨 Send Us a Message */}
          <motion.form
            className="flex-1 backdrop-blur-xl bg-white/30 rounded-2xl p-8 shadow-lg grid gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Send Us a Message
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-white/60 placeholder-gray-500 focus:bg-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-lg bg-white/60 placeholder-gray-500 focus:bg-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company"
              className="px-4 py-3 rounded-lg bg-white/60 placeholder-gray-500 focus:bg-white focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="px-4 py-3 rounded-lg bg-white/60 placeholder-gray-500 focus:bg-white focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="mt-2 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
