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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        laboriosam necessitatibus animi quas quia dolorum magnam sapiente ad, a
        amet, nihil sequi perspiciatis in ipsa voluptas voluptatibus reiciendis
        quibusdam ipsum!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio
        mollitia aut eveniet aliquam sed corrupti dolor laborum ipsam! Tempore
        non cum esse nostrum facere! Optio, minus vitae. Iusto, consectetur.
      </p>
    </motion.section>
  );
}
