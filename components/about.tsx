"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have been fascinated by technology ever since I got my first Android
        phone in 2012. Since then, I have been exploring various aspects of
        science and tech, especially programming. I fell in love with C++ as it
        gave me the ability to create anything I could imagine. I like to
        challenge myself with new projects and learn new skills. I am
        well-versed in web development using the MERN stack, TypeScript, and
        Tailwind CSS. However, my passion lies in system development and
        hardware/system architecture, which is why C++ is my favorite language
        [with Rust being a close second]. It allows me to have full control over
        the systems I work with. I am always curious about new technologies and
        seeking full-time opportunities as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching anime, and reading manga/vn. I'm also passionate
        about acquiring new skills, currently tackling guitar and skateboarding.
      </p>
    </motion.section>
  );
}
