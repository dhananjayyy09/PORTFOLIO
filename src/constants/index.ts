import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Database Design",
    icon: web,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C++",
    icon: javascript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: git,
  },
  {
    name: "Postman",
    icon: figma,
  },
];

const experiences: TExperience[] = [];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Disaster Management & Relief Coordination System",
    description:
      "A full-stack disaster management platform that enables administrators, coordinators, and volunteers to efficiently manage disaster relief operations, resource allocation, volunteer assignments, and donation tracking through role-based access control.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/dhananjayyy09/Disaster-Management-System",
  },
  {
    name: "Invisible Keylogger Shield",
    description:
      "A cybersecurity tool that detects and monitors suspicious keylogging activities using real-time process monitoring and heuristic analysis. It helps identify potentially malicious applications by analyzing keyboard hooks, process behavior, and system activity to improve endpoint security.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "psutil",
        color: "green-text-gradient",
      },
      {
        name: "pynput",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/dhananjayyy09/Invisible-Keylogger-Shield",
  },
  {
    name: "Urban Guardian - Smart Urban Safety & Incident Reporting System",
    description:
      "A web-based public safety platform that allows users to report incidents with geolocation, images, and descriptions while providing real-time updates, interactive maps, and incident management for authorities.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/dhananjayyy09/Urban-Guardian",
  },
];

export { services, technologies, experiences, testimonials, projects };
