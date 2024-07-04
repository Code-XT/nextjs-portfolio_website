import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import funzoneImg from "@/public/funzone.png";
import currencyImg from "@/public/currency.png";
import recorderImg from "@/public/recorder.png";
import shareHubImg from "@/public/sharehub.png";

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
    gitUrl: "https://github.com/Code-XT/FunZoneDB",
    previewUrl: "https://fun-zone-db.vercel.app/",
  },
  {
    title: "Object Detection Auto Record",
    description:
      "Automatically starts recording when a human is detected in a video",
    tags: ["React", "Next.js", "Tailwind", "Tensorflow.js", "CocoSsd"],
    imageUrl: recorderImg,
    gitUrl: "https://github.com/Code-XT/object-detection_auto-record",
    previewUrl: "https://object-detection-auto-record.vercel.app/",
  },
  {
    title: "ShareHUB",
    description:
      "Effortlessly transfer files, share shortened links, and chat with complete peace of mind. Enjoy end-to-end encryption for all your data and communications.",
    tags: ["React", "Next.js", "Tailwind", "Node.js", "Socket.io"],
    imageUrl: shareHubImg,
    gitUrl: "https://github.com/Code-XT/ShareHUB/",
    previewUrl: "https://share-hub-pi.vercel.app",
  },
  {
    title: "Currency Converter CX",
    description:
      "Has 650+ currencies to convert between with rates that update daily. Also, there's no daily conversion limit",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    imageUrl: currencyImg,
    gitUrl: "https://github.com/Code-XT/Currency_Converter-ChromeExtension",
    previewUrl: "https://currency-converter-chrome-extension.vercel.app/",
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
  "WebRTC",
  "WebSockets",
  "Framer Motion",
  "Tensorflow",
  "Python",
] as const;
