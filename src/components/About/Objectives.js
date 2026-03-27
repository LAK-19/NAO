"use client";

import { motion } from "framer-motion";

export default function Objectives() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold "
        >
          Objectives
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Objective
            title="Awareness Creation"
            text=" To promote aviation and aerospace as attractive career options."
          />
          <Objective
            title="Talent Identification"
            text="To discover students with aptitude in science, technology, engineering, and mathematics (STEM) with a focus on aviation."
          />
          <Objective
            title="Innovation Stimulation"
            text="To encourage students to solve real-world challenges in aviation—such as sustainability, safety, and air mobility."
          />
          <Objective
            title="Equal Opportunity & Inclusion"
            text="To reach students across metros, Tier-2, Tier-3 cities, and rural India while actively promoting female participation and encouraging girls to pursue careers in aviation."
          />
          <Objective
            title="Industry-Academia Linkage"
            text=" To create pathways for students to interact with aviation professionals, institutions, and industries."
            full
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Components ---------- */

function Objective({ title, text, full }) {
  return (
    <div
      className={`flex overflow-hidden w-full  text-white rounded-2xl  ${full ? "md:col-span-2" : ""}`}
    >
      {/* <div className="p-2 h-fit rounded-lg bg-0 text-blue flex items-center justify-center text-2xl shrink-0">
        {icon}
      </div> */}
      <div className="w-full h-full">
        <h4 className="font-semibold bg-[#303030] p-4 md:p-6 w-full   text-2xl">
          {title}
        </h4>
        <p className="text-lg  h-full bg-orange p-4 md:p-6 w-full ">{text}</p>
      </div>
    </div>
  );
}
