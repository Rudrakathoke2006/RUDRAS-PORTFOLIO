export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "ai" | "fullstack" | "security" | "web3";
  icon: string;
  badge?: string;
  problem: string;
  myRole: string;
  architectureTech: string[];
  metricsResult: string;
  learnings: string;
  githubUrl: string;
  liveUrl?: string;
  xray: {
    service: string;
    database: string;
    avgLatency: string;
  };
}

export const projectsData: CaseStudy[] = [
  {
    id: "pugmark",
    title: "PUGMARK — Pench Tiger Reserve Intelligence",
    subtitle: "Offline-First Tiger Stripe Re-Identification & Territory Mapping",
    category: "ai",
    icon: "🐅",
    badge: "Wildlife AI",
    problem: "Field officers in Pench Tiger Reserve faced manual camera-trap inspection overhead with thousands of blank/false triggers and unindexed animal sightings.",
    myRole: "Lead AI Engineer — Developed OpenCV/YOLOv8 pipeline and SIFT stripe pattern matching module.",
    architectureTech: ["Python", "FastAPI", "OpenCV", "YOLOv8", "SIFT/FLANN", "React", "GIS"],
    metricsResult: "95% KDE Territory Mapping Accuracy & 80% reduction in manual verification overhead.",
    learnings: "Optimized feature vector extraction for noisy low-light IR camera trap footage.",
    githubUrl: "https://github.com/Rudrakathoke2006/pugmark-pench-intelligence",
    xray: {
      service: "FastAPI PyEngine",
      database: "pgvector (Embeddings)",
      avgLatency: "85ms"
    }
  },
  {
    id: "chainsentinel",
    title: "ChainSentinel (SIH 26146)",
    subtitle: "Blockchain-Backed Smart Contract & Audit Pipeline",
    category: "security",
    icon: "⛓️",
    badge: "SIH 26146",
    problem: "Real-time vulnerability identification and automated security scoring for Web3 smart contracts.",
    myRole: "Smart Contract & Backend Engineer — Developed static analysis parser and gasless verification layer.",
    architectureTech: ["Solidity", "Web3.js", "Java", "Spring Boot", "PostgreSQL"],
    metricsResult: "Automated vulnerability scan completion under 1.2s across complex contract suites.",
    learnings: "Deepened understanding of EVM bytecode execution and AST parse tree security checks.",
    githubUrl: "https://github.com/Rudrakathoke2006",
    xray: {
      service: "Spring Boot Audit Core",
      database: "PostgreSQL JPA",
      avgLatency: "42ms"
    }
  },
  {
    id: "secure-dms",
    title: "Secure DMS (SIH 26190)",
    subtitle: "Enterprise Role-Based Document Management with Audit Trail",
    category: "security",
    icon: "🔒",
    badge: "SIH 26190",
    problem: "Preventing unauthorized document tampering, SQL injection, and privilege escalation in enterprise workflows.",
    myRole: "Java Backend Developer — Built SHA-256 salted hashing, role-based access control (RBAC), and audit logger.",
    architectureTech: ["Java", "JSP", "Servlets", "MySQL", "SHA-256", "DAO Pattern"],
    metricsResult: "Zero-vulnerability security pass across OWASP Top 10 automated test suites.",
    learnings: "Enforced strict layered separation (Controller -> DAO -> Service) with custom exception hierarchies.",
    githubUrl: "https://github.com/Rudrakathoke2006/Syntecxhub_HospitalPatientRecordSystem",
    xray: {
      service: "Java Servlet Container",
      database: "MySQL / Postgres Relational",
      avgLatency: "18ms"
    }
  },
  {
    id: "infrasentinel",
    title: "InfraSentinel",
    subtitle: "Critical Infrastructure Telemetry & Predictive Monitoring",
    category: "fullstack",
    icon: "🛡️",
    badge: "R1-05",
    problem: "Real-time monitoring of distributed IoT nodes and early anomaly detection.",
    myRole: "Full-Stack Developer — Built real-time WebSocket dashboard and telemetry stream ingested by Python microservices.",
    architectureTech: ["FastAPI", "WebSockets", "React", "PostgreSQL", "Docker"],
    metricsResult: "Sub-50ms latency telemetry streaming across simulated multi-region node networks.",
    learnings: "Implemented backpressure controls for high-velocity WebSocket message streams.",
    githubUrl: "https://github.com/Rudrakathoke2006",
    xray: {
      service: "FastAPI Telemetry Hub",
      database: "PostgreSQL TimeSeries",
      avgLatency: "34ms"
    }
  },
  {
    id: "uav-digital-twin",
    title: "DRDO UAV Engine Digital Twin",
    subtitle: "Real-Time Sensor Telemetry & Anomaly Prediction System",
    category: "ai",
    icon: "✈️",
    badge: "PS 26054",
    problem: "Predicting engine component degradation before catastrophic failure in UAV flight profiles.",
    myRole: "AI Engineer — Trained predictive neural regression models over multi-sensor time-series datasets.",
    architectureTech: ["Python", "PyTorch", "FastAPI", "React", "Chart.js"],
    metricsResult: "92% predictive accuracy on early failure warning signals under noisy sensor conditions.",
    learnings: "Handled non-stationary sensor drift using sliding-window normalization layers.",
    githubUrl: "https://github.com/Rudrakathoke2006",
    xray: {
      service: "PyTorch Inference Engine",
      database: "PostgreSQL / Memory Cache",
      avgLatency: "95ms"
    }
  },
  {
    id: "sentinel-ai",
    title: "Sentinel-AI Dark Web Breach Monitor",
    subtitle: "Automated Threat Intelligence & Leaked Credential Alert System",
    category: "security",
    icon: "👁️",
    badge: "Threat Intel",
    problem: "Detecting organization credential leaks across paste sites and breach dump repositories.",
    myRole: "Backend Developer — Wrote distributed asynchronous crawlers and SHA-256 hash matching pipeline.",
    architectureTech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker"],
    metricsResult: "Scanned and matched over 1M credential records in <2 seconds.",
    learnings: "Utilized pgvector indexing for sub-millisecond hash substring vector lookups.",
    githubUrl: "https://github.com/Rudrakathoke2006",
    xray: {
      service: "FastAPI Hash Crawler",
      database: "pgvector Threat DB",
      avgLatency: "58ms"
    }
  }
];
