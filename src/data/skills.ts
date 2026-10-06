export interface ProofSkill {
  name: string;
  category: string;
  runningFeature: string;
  techProof: string;
}

export const skillsInventory: ProofSkill[] = [
  {
    name: "Python / FastAPI",
    category: "Backend & AI",
    runningFeature: "FastAPI REST Server, Live AI Chat Proxy, JD Semantic Matcher API",
    techProof: "FastAPI server running live at /api/chat & /api/health"
  },
  {
    name: "Java / Spring Boot / JSP Servlets",
    category: "Backend Architecture",
    runningFeature: "Spring Boot Microservice for Contact & Guestbook Validation, Rate Limiting",
    techProof: "Bean Validation, Bucket4j rate limiting & SHA-256 security logger"
  },
  {
    name: "PostgreSQL & pgvector",
    category: "Database & Storage",
    runningFeature: "Vector Similarity Search over Project Case Studies & Visitor Analytics",
    techProof: "pgvector cosine distance queries & JPA relational persistence"
  },
  {
    name: "AI / ML & RAG Pipelines",
    category: "Artificial Intelligence",
    runningFeature: "'Ask My Portfolio' Chat with streaming case study citations",
    techProof: "RAG engine over embedded project documentation"
  },
  {
    name: "NLP & Semantic Search",
    category: "Artificial Intelligence",
    runningFeature: "'Paste a Job Description' tool ranking projects by semantic fit score",
    techProof: "Cosine similarity scoring between JD vector & project embeddings"
  },
  {
    name: "Computer Vision & WebGL",
    category: "Vision & Graphics",
    runningFeature: "MediaPipe webcam hand-gesture navigation & R3F particle shader",
    techProof: "100% on-device TensorFlow.js / MediaPipe gesture recognition & R3F"
  },
  {
    name: "Blockchain & Smart Contracts",
    category: "Web3 & Security",
    runningFeature: "Optional Solidity Guestbook smart contract with wallet sign-in",
    techProof: "Testnet EVM transaction signing & SHA-256 state Machine"
  },
  {
    name: "DevOps & Security",
    category: "Infrastructure",
    runningFeature: "Docker Compose, CORS Allowlist, Rate Limiting, Live /status Uptime Board",
    techProof: "Public /status telemetry reporting sub-50ms API latency"
  }
];
