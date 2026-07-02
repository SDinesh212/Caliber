import { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Industry = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Job = {
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
};

export type Testimonial = {
  name: string;
  role: string;
  message: string;
};