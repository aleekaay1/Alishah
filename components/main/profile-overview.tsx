"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ACHIEVEMENTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  EXPERIENCE_DATA,
} from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const ProfileOverview = () => {
  return (
    <section
      id="about-me"
      className="relative flex flex-col items-center justify-center px-6 md:px-16 py-14"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
      >
        <h2 className="Welcome-text text-[13px]">Professional Profile</h2>
      </motion.div>

      <motion.h1
        variants={slideInFromLeft(0.4)}
        initial="hidden"
        animate="visible"
        className="text-[34px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-5 text-center"
      >
        Ali Shah
      </motion.h1>

      <motion.p
        variants={slideInFromRight(0.6)}
        initial="hidden"
        animate="visible"
        className="text-gray-300 text-center max-w-[900px] mt-5 leading-7"
      >
        Senior IT and Development Manager with a strong record across AI
        integration, CRM ecosystems, automation, web development, branding, and
        operations. I build scalable systems that connect sales, support, and
        management with measurable performance outcomes.
      </motion.p>

      <div id="experience" className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1200px] mt-12">
        <motion.div
          variants={slideInFromLeft(0.4)}
          initial="hidden"
          animate="visible"
          className="border border-[#2A0E61] bg-[#0300145e] rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
          <div className="space-y-4">
            {EXPERIENCE_DATA.map((item) => (
              <div key={`${item.company}-${item.title}`}>
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-cyan-300 text-sm">{item.company}</p>
                <p className="text-gray-400 text-sm">
                  {item.duration} | {item.location}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.4)}
          initial="hidden"
          animate="visible"
          className="border border-[#2A0E61] bg-[#0300145e] rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
          <div className="space-y-4 mb-8">
            {EDUCATION_DATA.map((item) => (
              <div key={`${item.degree}-${item.institute}`}>
                <p className="text-white font-medium">{item.degree}</p>
                <p className="text-cyan-300 text-sm">{item.institute}</p>
                <p className="text-gray-400 text-sm">{item.duration}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
          <ul className="space-y-2">
            {ACHIEVEMENTS_DATA.map((achievement) => (
              <li key={achievement} className="text-gray-300 text-sm">
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="border border-[#2A0E61] bg-[#0300145e] rounded-xl p-6 w-full max-w-[1200px] mt-8"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTIFICATIONS_DATA.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
              className="block border border-[#7042f88b] rounded-lg px-4 py-3 hover:border-cyan-400 transition-colors"
            >
              <p className="text-white font-medium">{item.name}</p>
              <p className="text-gray-400 text-sm">{item.issuer}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
