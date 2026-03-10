"use client";

import { motion } from "framer-motion";

export default function ExpertEligibility() {
  const criteria = [
    "Academic Experts: Faculty members / researchers from IITs, NITs, IIMs, IISc, universities, or CBSE/ICSE boards with expertise in aviation, aerospace, STEM, or education.",
    "Industry Professionals: Minimum 10 years of experience in aviation, airlines, MRO, airport operations, aerospace manufacturing, or allied sectors.",
    "Government & Regulatory: Serving or retired officials from DGCA, AAI, MoCA, DRDO, ISRO, NITI Aayog, NSDC, IAF, Indian Navy (aviation wing), or equivalent bodies.",
    "Drone & Emerging Tech: Professionals working in RPAS/drone technology, urban air mobility, space-tech startups, or AI/ML applications in aviation.",
    "STEM Educators: School principals, CBSE master trainers, Olympiad coaches, or educational content developers with demonstrated expertise.",
    "International Experts: Professionals associated with ICAO, IATA, EASA, FAA, or international aviation bodies with willingness to contribute remotely.",
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange">
            Expert Committee – Eligibility Criteria
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed text-center">
            NAO invites distinguished professionals to contribute to India’s
            aviation education mission. If you have the expertise and the
            passion, we want you on the team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {criteria.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-left border-l-4 border-blue-600"
            >
              <p className="text-gray-800 text-sm leading-snug font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2">
          <a
            href="/path/to/expert-eligibility.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-1/3 text-center"
          >
            Download Eligibility Criteria (PDF)
          </a>
          <a
            href="https://zfrmz.in/aaJiXotostGRiyitai9U"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow text-black font-semibold px-6 py-2 rounded-lg hover:bg-[#e6c400] transition-colors w-full sm:w-1/3 text-center"
          >
            Apply to Join the Expert Committee
          </a>
        </div>
      </div>
    </section>
  );
}
