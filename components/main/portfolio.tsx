"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { WEBSITE_PORTFOLIO } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col items-center justify-center py-20 px-6 md:px-10">
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
      >
        <h2 className="Welcome-text text-[13px]">Website Portfolio</h2>
      </motion.div>

      <motion.h1
        variants={slideInFromLeft(0.4)}
        initial="hidden"
        animate="visible"
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 text-center"
      >
        Websites I Built
      </motion.h1>

      <motion.p
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        className="text-gray-300 text-center max-w-[900px] mb-10"
      >
        Hover over each preview to auto-scroll through the website screenshot.
      </motion.p>

      <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WEBSITE_PORTFOLIO.map((site, i) => (
          <motion.div
            key={site.title}
            variants={slideInFromLeft(0.1 * (i % 4))}
            initial="hidden"
            animate="visible"
            className="group rounded-xl border border-[#2A0E61] bg-[#0300145e] shadow-lg overflow-hidden"
          >
            <Link href={site.link} target="_blank" rel="noreferrer noopener" className="block">
              <div className="relative h-56 overflow-hidden bg-[#0b0620]">
                <Image
                  src={site.image}
                  alt={site.title}
                  width={1200}
                  height={3000}
                  className="w-full h-auto transition-transform duration-[7000ms] ease-linear group-hover:-translate-y-[62%]"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold">{site.title}</h3>
                <p className="text-cyan-300 text-sm">{site.domain}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
