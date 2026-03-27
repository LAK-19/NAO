"use client";

import { motion } from "framer-motion";

export default function SchoolRegistrationPage() {
  return (
    <section
      className="pt-24 md:pt-38 pb-12"
      style={{
        backgroundImage: "url('/contact/Contact_Hero.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          {/* <h1 className="text-3xl md:text-4xl font-bold text-orange">
            NAO Contact Us
          </h1> */}
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Responsive iframe wrapper */}
          <div className="w-full h-[600px] md:h-[700px]">
            <iframe
              aria-label="NAO Contact Us"
              className="w-full min-h-[1400px]"
              src="https://forms.zohopublic.in/cso/form/ContactUs/formperma/VEgeo2wr2w8CTCrP29tYCHgUsc_Er7-sy4BlsY1REuA"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
