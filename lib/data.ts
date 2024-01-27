import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import funzoneImg from "@/public/funzone.png";
import currencyImg from "@/public/currency.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "VIT University",
    location: "Bhopal, MP",
    description: "I graduated after 4 years of studying as a BTech CSE student",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2025",
  },
  {
    title: "Chinmaya Vidyalaya",
    location: "Bokaro, Jharkhand",
    description:
      "The best years of my life were the 14 years at this school. From Nursery to 12, I learned a lot and played even more!",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "FunZone-DB",
    description:
      "A one stop search tool and recommender for all your anime/movie/tv or gaming needs",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: funzoneImg,
  },
  {
    title: "Currency Converter CX",
    description:
      "Has 650+ currencies to convert between with rates that update daily. Also, there's no daily conversion limit",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    imageUrl: currencyImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Express",
  "Python",
] as const;
