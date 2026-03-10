"use client";

import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

export default function BecomeSponsor() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      fullName: form.fullName.value,
      organization: form.organization.value,
      designation: form.designation.value,
      email: form.email.value,
      phone: form.phone.value,
      partnershipType: form.partnershipType.value,
      message: form.message.value,
    };
    console.log('enquiry', data);
  };

  return (
    <section id="partnership-enquiry" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#e0f2f7] to-[#d0ebf4] rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-2 flex items-center justify-center gap-2 text-blue-700">
            <FiUsers /> Become a Partner
          </h3>
          <p className="text-center md:text-lg mb-8 text-blue-700">
            Interested in partnering? Let’s explore how we can work together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-blue-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Jane Doe"
                  className="w-full rounded-lg px-4 py-2.5 text-gray-800 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-blue-700 mb-1">Organization Name*</label>
                <input
                  type="text"
                  name="organization"
                  required
                  placeholder="e.g. School ABC"
                  className="w-full rounded-lg px-4 py-2.5 text-gray-800 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-blue-700 mb-1">Designation / Role*</label>
                <input
                  type="text"
                  name="designation"
                  required
                  placeholder="e.g. Club President"
                  className="w-full rounded-lg px-4 py-2.5 text-gray-800 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-blue-700 mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. name@example.com"
                  className="w-full rounded-lg px-4 py-2.5 text-gray-800 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-blue-700 mb-1">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 12345 67890"
                  className="w-full rounded-lg px-4 py-2.5 text-gray-800 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-blue-700 mb-1">Partnership Type*</label>
                <select
                  name="partnershipType"
                  required
                  className="w-full rounded-lg px-4 py-2.5 text-gray-800 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                >
                  <option value="">Select type</option>
                  <option>Title/Lead Sponsor</option>
                  <option>Podcast/Content Sponsor</option>
                  <option>State-Level Sponsor</option>
                  <option>Aero Club / Outreach Partner</option>
                  <option>Academic Partner</option>
                  <option>Media Partner</option>
                  <option>Knowledge Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-blue-700 mb-1">Brief Message (optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Write a short message..."
                  className="w-full rounded-lg px-4 py-2.5 text-gray-800 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 px-6 py-3 rounded-lg font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full sm:w-auto"
              >
                Submit Enquiry
              </button>
            </div>
          </form>

          <p className="text-center text-blue-700/80 mt-6 text-sm">
            Alternatively, email us at{' '}
            <a href="mailto:partner@thecso.in" className="underline">
              partner@thecso.in
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
