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
        Ever since I held the first android phone in my hand in 2012{" "}
        <span className="font-medium">
          I understood where my interest lies.
        </span>
        <span className="font-medium">
          This interest only grew the more I learned about science and tech.
        </span>
        It was when I first coded something in C++ that I finally decided to
        pursue my passion for programming, realising the power that I have in my
        hand, to create anything I want.{" "}
        <span className="italic">My favorite part of programming</span> is to
        build new stuff and learn new ways of doing things. My core web stack is{" "}
        <span className="font-medium italic">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Tailwind. But, my{" "}
        <span className="underline">favourit language</span> to code in, is C++
        (I love the highest level control that it provieds over your program and
        the system...and no other language even comes close [yeah, not even
        Rust]) I am always looking to learn new technologies. I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching anime, and reading manga/vn. I also enjoy{" "}
        <span className="font-medium">learning new skills</span>. I am currently
        trying to learn how to play guitar and ride a skateboard.
      </p>
    </motion.section>
  );
}
