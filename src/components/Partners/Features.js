"use client";

import { motion } from "framer-motion";
  import { FiGlobe, FiEye, FiHeart, FiUserCheck, FiAward, FiBarChart } from "react-icons/fi";

const cards = [
  {
    icon: FiGlobe,
    title: "Pan-India Reach",
    description:
      "Access 10,000+ schools and 1,50,000+ students across 36 States & UTs. More than 1 Million+ Outreach Engagements.",
  },
  {
    icon: FiEye,
    title: "Brand Visibility",
    description:
      "Logo placement across all NAO materials, events, digital platforms, and media coverage.",
  },
  {
    icon: FiHeart,
    title: "CSR Alignment",
    description:
      "Direct contribution to India’s aviation workforce development and skill building initiatives.",
  },
  {
    icon: FiUserCheck,
    title: "Talent Pipeline Access",
    description:
      "Early access to India’s top-performing aviation-aspiring students for future recruitment.",
  },
  {
    icon: FiAward,
    title: "Thought Leadership",
    description:
      "Speaking opportunities, jury participation, and co-branded content at national events.",
  },
  {
    icon: FiBarChart,
    title: "Impact Reporting",
    description:
      "Detailed impact reports with reach metrics, engagement data, and CSR documentation.",
  },
];

export default function Features() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading & tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-orange text-center mb-1"
        >
          Why Partner with NAO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-base md:text-lg text-gray-700 mb-6"
        >
          Explore partnership opportunities with India’s premier aviation education movement
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: '0 6px 16px rgba(0,0,0,0.08)' }}
                className="bg-[#c9e6e9] rounded-2xl p-4 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white mb-3">
                  <Icon className="text-2xl text-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
