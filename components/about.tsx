"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am currently in my final year of engineering, pursuing a degree in{" "}
        <span className="font-medium">
          Artificial Intelligence and Machine Learning
        </span>{" "}
        at Jhulelal Institute of Technology. Alongside my studies, I have been
        developing my skills as a{" "}
        <span className="font-medium">MERN stack developer</span>, building
        projects with technologies like{" "}
        <span className="font-medium">
          React, Node.js, Express.js, and MongoDB.{" "}
        </span>
        I am passionate about building solutions that solve real-world problems,
        and my curiosity drives me to constantly explore and learn new
        technologies.
      </p>
    </motion.section>
  );
}
