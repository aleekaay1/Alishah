"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 lg:px-20 mt-28 md:mt-36 lg:mt-40 w-full z-[20] gap-8 lg:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start mt-8 md:mt-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]] hidden lg:flex"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Ali Shah - AI, Tech & Development
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-5xl lg:text-6xl text-bold text-white max-w-[600px] w-auto h-auto mx-auto lg:mx-0"
        >
          <span>
            Turning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              ideas
            </span>{" "}
            into digital experiences.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0"
        >
          This is my personal CV portfolio - sharing my journey across IT,
          development, AI integration, and creative problem-solving.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="https://www.linkedin.com/in/aleekaay/?originalSubdomain=pk"
          target="_blank"
          rel="noreferrer noopener"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0"
        >
          View LinkedIn
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full max-w-[320px] md:max-w-[460px] lg:max-w-[650px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
};
