"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Experts from "@/components/Experts";

export default function NAOCommittee() {
  return (
    <section id="naoCommittee" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange">
            Guided by 100+ Aviation Experts
          </h2>

          <p className="mt-4 font-medium md:text-lg">
            NAO’s curriculum, examinations, and evaluation are overseen by a
            structured Expert Committee ensuring academic rigor, industry
            relevance, and policy alignment consistent with ICAO’s NGAP
            initiative.
          </p>
        </motion.div>

        {/* Experts Grid (replaces the carousel) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Experts />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-4 md:mt-6 flex justify-center flex-wrap gap-2 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/people"
            className="bg-yellow cursor-pointer w-full md:w-fit hover:bg-[#e6c400] text-black font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Meet Our Experts
          </Link>

          <Link
            href="/people#eligibility"
            className="bg-red cursor-pointer w-full md:w-fit hover:bg-[#b92520] text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Nominate Expert
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// {/* Carousel */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="relative px-6 md:px-10"
//       >
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           spaceBetween={24}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           className="nao-committee-swiper"
//         >
//           {committeeMembers.map((member) => (
//             <SwiperSlide key={member.name} className="h-full">
//               {/* Card */}
//               <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
//                 {/* Image */}
//                 <div className="w-full h-56 sm:h-60 md:h-64 overflow-hidden rounded-t-2xl">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 text-center flex flex-col flex-1">
//                   {/* Name */}
//                   <h3 className="text-lg md:text-xl font-semibold leading-tight min-h-[48px]">
//                     {member.name}
//                   </h3>

//                   {/* Designation */}
//                   <p className="font-medium text-[#2d333a] mt-1 text-sm md:text-base min-h-[48px]">
//                     {member.designation}
//                   </p>

//                   {/* Organization */}
//                   <p className="text-gray-700 font-semibold text-sm mt-1 min-h-[40px]">
//                     {member.organization}
//                   </p>

//                   {/* City (always bottom aligned) */}
//                   <p className="text-gray-500 text-sm mt-auto">
//                     {member.city}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
