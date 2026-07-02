import {
  Users,
  Clock,
  Search,
  Briefcase,
  WalletCards,
  MonitorCog,
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  GraduationCap,
  Truck,
} from "lucide-react";

export const services = [
  {
    title: "Temporary Staffing",
    description: "Quickly scale your team with skilled temporary professionals.",
    icon: Clock,
  },
  {
    title: "Direct Hire",
    description: "Find the perfect full-time employees for your organization.",
    icon: Users,
  },
  {
    title: "Contract Staffing",
    description: "Flexible staffing solutions for short-term project needs.",
    icon: Briefcase,
  },
  {
    title: "Executive Search",
    description: "Discover and recruit top executive talent for leadership roles.",
    icon: Search,
  },
  {
    title: "Payroll Solutions",
    description: "Streamline payroll and workforce compliance management.",
    icon: WalletCards,
  },
];

export const jobs = [
  {
    title: "Senior React Developer",
    company: "TechNova Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "New York, NY",
    type: "Full-time",
    salary: "$70k - $100k",
    tags: ["Figma", "UX Research"],
  },
  {
    title: "Python Backend Engineer",
    company: "DataSystems",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$100k - $140k",
    tags: ["Python", "Django", "PostgreSQL"],
  },
  {
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Austin, TX",
    type: "Contract",
    salary: "$80k - $120k",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
];

export const industries = [
  { title: "Technology", icon: MonitorCog },
  { title: "Cyber Security", icon: MonitorCog },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Finance", icon: Landmark },
  { title: "Manufacturing", icon: Factory },
  { title: "Retail", icon: ShoppingBag },
  { title: "Education", icon: GraduationCap },
  
  { title: "Corporate Hiring", icon: Briefcase },
];

export const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "HR Director, TechNova Inc.",
    message:
      "Calliber Tech transformed our hiring process. We found amazing candidates faster than ever before.",
  },
  {
    name: "Rahul Sharma",
    role: "Founder, CloudWorks",
    message:
      "The quality of candidates was excellent. Their team understood exactly what we needed.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    message:
      "They helped me find a role that perfectly matched my skills and career goals.",
  },
];
