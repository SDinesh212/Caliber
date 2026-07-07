type SiteNavLink = {
  label: string;
  href: string;
  icon?: "down" | "right";
  dropdown?: "more";
};

export const siteNavLinks: SiteNavLink[] = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PRODUCTS", href: "/products" },
  { label: "STAFFING CONTRACTS", href: "/staffing-contracts" },
  { label: "CONTACT US", href: "/contact" },
  { label: "REQUEST FOR QUOTE", href: "/request-quote" },
  { label: "More", href: "#", icon: "down", dropdown: "more" },
];

export const moreDropdownLinks = [
  {
    title: "Careers",
    href: "https://jobs.gusto.com/boards/caliber-tech-8f246dbd-b571-41dd-ad75-fdd5bb31d8ae",
    external: true,
  },
  {
    title: "Open Jobs",
    href: "/careers/open-jobs",
    external: false,
  },
] as const;

export const footerLinkGroups = [
  {
    title: "For Employers",
    links: [
      "Find Talent",
      "Executive Search",
      "Contract Staffing",
      "Permanent Hiring",
    ],
  },
  {
    title: "For Candidates",
    links: ["Browse Jobs", "Career Advice", "Resume Builder", "Interview Tips"],
  },
  {
    title: "Company",
    links: ["About Us", "Industries", "Success Stories", "Careers"],
  },
  {
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms & Conditions", "Contact"],
  },
] as const;
