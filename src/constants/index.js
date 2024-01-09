import { tindog, youtube, chat_app } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "YouTube Clone",
    iconBg: "#accbe1",
    icon: youtube,
    date: "August 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Talk-A-Tive",
    icon: chat_app,
    iconBg: "#fbc3bc",
    date: "July 2023 - August 203",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Users can register and engage in text and emoji-based conversations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Styled-components were used for dynamic styling, creating a modern and interactive user interface.",
    ],
  },
  {
    title: "TinDog Website",
    icon: tindog,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/shaashish77",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ashish-sah-22741317b/",
  },
];

export const projects = [
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "Youtube Clone",
    description:
      "Developed a Youtube clone, a cutting-edge web application designed to offer an immersive video streaming experience reminiscent of the world's leading video platform.",
    link: "https://tourmaline-sable-c4fcef.netlify.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "MERN CHAT-APP",
    description:
      "Step into the next generation of communication with ChatterMERN, a robust and intuitive chat application built on the powerful MERN stack (MongoDB, Express.js, React, Node.js). TALK-A-TIVE redefines the way users connect, converse, and collaborate in real-time, offering a feature-rich platform tailored for modern communication needs..",
    link: "https://talk-a-tive-73rf.onrender.com/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-blue",
    name: "TinDog Website",
    description: "Designed and built tindog application page. For dog lovers",
    link: "https://shaashish77.github.io/Tindog-Website/",
  },
];
