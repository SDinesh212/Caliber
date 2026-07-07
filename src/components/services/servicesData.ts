import {
  CloudCog,
  Code2,
  DatabaseZap,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const serviceControlItems = [
  "Technical validation",
  "Interview coordination",
  "Ongoing support",
];

export const services = [
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Engineering",
    description:
      "Cloud, automation, reliability, and platform professionals ready to strengthen delivery teams.",
    image: "/images/services/devops.jpg",
    href: "/services#devops-cloud",
    icon: CloudCog,
    tags: ["AWS", "Azure", "CI/CD"],
    outcomes: ["Cloud migration support", "Infrastructure automation"],
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Networking",
    description:
      "Security analysts, network engineers, and compliance specialists for modern infrastructure teams.",
    image: "/images/services/cyber-security.jpg",
    href: "/services#cyber-security",
    icon: ShieldCheck,
    tags: ["SOC", "Network", "Risk"],
    outcomes: ["Threat monitoring", "Secure network operations"],
  },
  {
    id: "fullstack-data-science",
    title: "Java / Full Stack & Data Science",
    description:
      "Application, data, and analytics talent for products that need dependable engineering momentum.",
    image: "/images/services/fullstack-data.jpg",
    href: "/services#fullstack-data-science",
    icon: Code2,
    tags: ["Java", "React", "Data"],
    outcomes: ["Product engineering", "Data-driven delivery"],
  },
];

export const process = [
  {
    title: "Discover",
    text: "We map role expectations, must-have skills, budget, timeline, and culture.",
    icon: SearchCheck,
  },
  {
    title: "Match",
    text: "Profiles are screened for technical fit, communication, availability, and project readiness.",
    icon: DatabaseZap,
  },
  {
    title: "Deliver",
    text: "Shortlisted candidates move quickly through interviews, offers, onboarding, and support.",
    icon: UsersRound,
  },
];

export const aboutCards = [
  {
    image: "/images/services/about-1.jpg",
    title: "Dedicated Support",
    text: "We collaborate, execute and support each consultant individually and assign dedicated leaders for continuous improvement.",
  },
  {
    image: "/images/services/about-2.jpg",
    title: "Candidate Focus",
    text: "We value your talent and focus on landing you on your dream job.",
  },
  {
    image: "/images/services/about-3.jpg",
    title: "Client Network",
    text: "We work with all prime vendors and direct clients in the market.",
  },
];
