export interface JourneyMilestone {
  period: string;
  role: string;
  organization: string;
  description: string;
  badge?: string;
  type: "education" | "experience" | "hackathon";
}

export const journeyData: JourneyMilestone[] = [
  {
    period: "2024 — Present",
    role: "B.Tech Computer Science & Engineering",
    organization: "Ramdeobaba University (RBU Nagpur)",
    description: "Maintaining a 9.2 / 10.0 CGPA (High Distinction). Core focus on Data Structures, Algorithms, Core Java, System Architecture, and AI/ML.",
    badge: "CGPA 9.2",
    type: "education"
  },
  {
    period: "Aug 2026 — Present",
    role: "VESA Software Engineering Cohort",
    organization: "VESA Scenario-Based Cohort",
    description: "Selected for intensive scenario-based software engineering cohort focusing on production Java OOP, design patterns, and system resilience.",
    badge: "Selected Cohort",
    type: "experience"
  },
  {
    period: "May 2026 — Jul 2026",
    role: "Java Backend Developer Intern",
    organization: "Uptricks Services Pvt. Ltd.",
    description: "Built production Java backend modules, applied object-oriented design principles, and streamlined internal data verification workflows.",
    badge: "Java Internship",
    type: "experience"
  },
  {
    period: "May 2026 — Jun 2026",
    role: "Java Programming Intern",
    organization: "SyntecxHub",
    description: "Developed 4 full-stack Java projects including Hospital Patient Record System (JSP, Servlets, MySQL, SHA-256) and Bank Management Systems.",
    badge: "Java Internship",
    type: "experience"
  },
  {
    period: "2025 — 2026",
    role: "Hackathon Competitor & Winner",
    organization: "Cygnus, Byte Quest, CodeCon, CodeRush, TCS IDEA3",
    description: "Competed in 10+ high-stakes hackathons, winning 🥈 2nd Place at Cygnus, Top 25 out of 500+ teams at Byte Quest, and Top 17 at CodeCon 2025.",
    badge: "10+ Hackathons",
    type: "hackathon"
  }
];
