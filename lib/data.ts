import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

import Ecommerce from "@/public/Ecommerce.png";
import MERNEmailAuth from "@/public/MERNEmailAuth.png";

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
    title: "Full Stack Developer",
    company: "Cognifyz Technologies",
    description:
      "I worked as a full-stack developer and get chance to work on MERN stack technologies.",
    icon: React.createElement(FaReact),
    date: "Oct 2024",
  },
  {
    title: "Web Developer",
    company: "Arcane Path Tech Solutions",
    description:
      "I worked as a web developer and get chance to learn about front end technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023",
  },
  {
    title: "Web Developer",
    company: "CodeClause",
    description:
      "I worked as a web developer and learn about HTML, CSS, JavaScript and some design frameworks.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Website",
    description:
      "Developed a full-featured eCommerce website using the MERN stack, with Redux for efficient state management. ",
    tags: [
      "React JS",
      "Redux",
      "Node JS",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
    ],
    imageUrl: Ecommerce,
    link: "https://github.com/yashmadke/Ecommerse-Website",
  },
  {
    title: "MERN Email Authentication System",
    description:
      "Developed a secure authentication system using the MERN stack.",
    tags: [
      "React JS",
      "Zustand",
      "Node JS",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Mailtrap",
      "Framer Motion",
    ],
    imageUrl: MERNEmailAuth,
    link: "https://github.com/yashmadke/MERN-Email-Authentication-System",
  },
  // {
  //   title: "Book Store App",
  //   description:
  //     "Developed a comprehensive book store website featuring full CRUD (Create, Read, Update, Delete) functionality for book management.",
  //   tags: ["React JS", "Node JS", "Express", "MongoDB"],
  //   imageUrl: Ecommerce,
  //   link: "https://github.com/yashmadke/Book-Store-App",
  // },
] as const;

export const skillsData = [
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
  "Redux",
  "Express",
  "Framer Motion",
  "Java",
  "Python",
  "SQL",
  "C",
] as const;
