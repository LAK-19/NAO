"use client";

import { motion } from "framer-motion";

export default function ExpertRegistrationPage() {
  return (
    <section
      className="pt-24 md:pt-38 pb-12"
      style={{
        backgroundImage: "url('/about/About_Hero.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-orange">
            Expert Registration
          </h1>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Responsive iframe wrapper */}
          <div className="w-full">
            <iframe
              aria-label="NAO Expert Onboarding Form"
              className="w-full min-h-[2500px]"
              src="https://forms.zohopublic.in/cso/form/ExpertOnboardingForm/formperma/o4KtYHOY2wwRtPRqXr-F_Q7euiF9uKTlgmi3Noxkmrk"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
