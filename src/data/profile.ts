export interface Profile {
  name: string;
  headlineRoles: string[];
  university: string;
  cgpa: string;
  batch: string;
  statusPill: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePdfPath: string;
  proofStatement: string;
  bentoBio: string;
  philosophy: string;
  stickers: { label: string; variant: "lime" | "lavender" | "cyan" | "pink" | "gold" | "white" }[];
  stats: { value: string; label: string; icon: string }[];
}

export const profileData: Profile = {
  name: "Rudra Kathoke",
  headlineRoles: ["Java Backend Architect", "AI Systems Engineer", "Web3 Developer", "Hackathon Grinder"],
  university: "Ramdeobaba University (RBU Nagpur)",
  cgpa: "9.2 / 10.0",
  batch: "2024 — 2028",
  statusPill: "Currently: Building, Breaking, Shipping • Open for Internships",
  location: "Nagpur, India (IST +05:30)",
  email: "rudrakathoke1405@gmail.com",
  githubUrl: "https://github.com/Rudrakathoke2006",
  linkedinUrl: "[PLACEHOLDER_LINKEDIN_URL]", // Fill with real LinkedIn URL
  resumePdfPath: "[PLACEHOLDER_RESUME_PDF_PATH]", // Fill with path to real PDF
  proofStatement: "Architecting high-throughput Java backends, OpenCV/YOLO wildlife intelligence, & gasless Web3 smart contracts.",
  bentoBio: "I'm a B.Tech Computer Science student at Ramdeobaba University (CGPA 9.2) maintaining a strong focus on production-grade Java architecture, computer vision, and real-world system optimization.",
  philosophy: "Simplicity & Functionality above fluff. Writing secure, audit-ready code that scales.",
  stickers: [
    { label: "SIH Finalist Energy 🏆", variant: "lime" },
    { label: "CGPA 9.2 🎯", variant: "lavender" },
    { label: "Pench Wildlife AI 🐅", variant: "cyan" },
    { label: "Gasless Web3 ⚡", variant: "pink" },
    { label: "2x Java Intern ☕", variant: "gold" },
    { label: "RBU CSE '28 🎓", variant: "white" },
  ],
  stats: [
    { value: "9.2", label: "CGPA (RBU Nagpur)", icon: "🎓" },
    { value: "10+", label: "Hackathons Entered", icon: "🏆" },
    { value: "2", label: "Java Internships", icon: "💼" },
    { value: "500+", label: "Cups of Chai ☕", icon: "🔥" },
  ],
};
