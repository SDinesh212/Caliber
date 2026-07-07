import { Mail, MapPin, Phone } from "lucide-react";

export const contactMethods = [
  {
    title: "Email",
    value: "hr@calibertechllc.com",
    href: "mailto:hr@calibertechllc.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+1 469 227 0797",
    href: "tel:+14692270797",
    icon: Phone,
  },
  {
    title: "Location",
    value: "6595 Roswell Road Suite G2201 Atlanta, GA 30328",
    href: "#location",
    icon: MapPin,
  },
];

export const faqs = [
  {
    question: "Do benefits vary by role?",
    answer:
      "All benefits are provided based on each employee's employment opportunity with our firm and may vary by individual.",
  },
  {
    question: "Is Caliber Tech LLC an equal opportunity employer?",
    answer:
      "Yes. We are an equal opportunity employer and support qualified candidates through the hiring process.",
  },
  {
    question: "Can you support sponsorship needs?",
    answer:
      "Sponsorship may be available when needed and when the role, candidate, and client requirements align.",
  },
];
