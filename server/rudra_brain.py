"""
Rudra Kathoke AI Brain & Knowledge Engine
Handles AI assistant responses for projects, skills, education, hackathons, and hiring queries.
"""

KNOWLEDGE_BASE = {
    "identity": {
        "name": "Rudra Kathoke",
        "title": "Java Backend Architect & AI Systems Engineer",
        "university": "Ramdeobaba University (RBU Nagpur)",
        "degree": "B.Tech Computer Science & Engineering (2024 - 2028)",
        "cgpa": "9.2 / 10.0 (High Distinction)",
        "philosophy": "Simplicity & Functionality above fluff. Writing secure, audit-ready code that scales.",
        "status": "Available for Java Backend, AI Engineering, & Full-Stack Internships"
    },
    "projects": [
        {
            "name": "PUGMARK — Pench Tiger Reserve Intelligence",
            "tech": "Python, FastAPI, OpenCV, YOLOv8, SIFT/FLANN, React, GIS",
            "desc": "Offline-first wildlife intelligence platform for field officers. Ingests camera-trap footage, filters blank triggers with MegaDetector V6, re-identifies individual tigers via SIFT stripe-pattern matching, and computes home-range territory maps (95% KDE)."
        },
        {
            "name": "Hospital Patient Record System",
            "tech": "JSP, Servlets, MySQL, Tomcat, DAO Pattern, SHA-256",
            "desc": "Full-stack patient record management system with role-based auth (Admin/Doctor/Nurse), SHA-256 + salted password hashing, medical history tracking, OPD/IPD visit tracking, and admin audit log."
        },
        {
            "name": "SarvaVote — Accessible Voting",
            "tech": "HTML, CSS, JS, Web Speech API, Python, FastAPI",
            "desc": "Voice-guided digital voting system for visually impaired/hands-free users with OTP authentication. Ranked Top 25 out of 500+ teams at Byte Quest Hackathon (GFG RBU)."
        },
        {
            "name": "ATM Simulation System (RBU Bank)",
            "tech": "Java, SHA-256, State Machine Pattern, Structured Logging",
            "desc": "6-state ATM engine with PIN hashing, account lockout after failed attempts, withdrawal limits, structured logging, and file persistence."
        },
        {
            "name": "Interstellar Trade Route Simulator",
            "tech": "Java, React, Data Structures",
            "desc": "Sci-fi trade optimization tool. 🥈 2nd Place Winner at Cygnus HackTara Hackathon."
        }
    ],
    "hackathons": [
        "🥈 2nd Position — Cygnus HackTara Hackathon (Interstellar Trade Route Simulator)",
        "🏆 Top 25 / 500+ teams — Byte Quest GFG RBU (SarvaVote)",
        "🏆 Top 17 Finalist — CodeCon 2025 (Legalizer AI Legal Simplifier)",
        "🏆 Top 50 / 1350+ teams — CodeRush 1.0 (EEG Schizophrenia Detection via Wavelet/Fourier ML)",
        "🏅 Finalist Round — TCS IDEA3 2025 (AI Travel Itinerary Planner)",
        "🏅 Finalist Round — Smackathon 2K26 (Editorial Correction Detector)"
    ],
    "skills": {
        "languages": ["Java", "Python", "C", "JavaScript", "Solidity"],
        "backend": ["Core Java", "JSP", "Servlets", "JDBC", "DAO Pattern", "REST APIs", "FastAPI", "Spring Boot"],
        "databases": ["MySQL", "Oracle DB", "PostgreSQL"],
        "ai_ml": ["OpenCV", "YOLOv8", "SIFT/FLANN", "Gemini AI", "Wavelet/Fourier Processing"],
        "web3": ["Solidity", "Smart Contracts", "Web3.js", "Cyfrin Updraft"],
        "security": ["SHA-256 Password Hashing", "SQL Injection Defense", "Session Management", "IT Security"]
    }
}

def query_brain(user_query: str) -> str:
    """
    Intelligent response routing tailored specifically to Rudra Kathoke's profile.
    """
    q = user_query.lower()

    if any(k in q for k in ["project", "work", "build", "pugmark", "sarvavote", "hospital", "atm"]):
        projects_txt = "\n".join([f"• 🚀 **{p['name']}**: {p['desc']} (*Stack: {p['tech']}*)" for p in KNOWLEDGE_BASE["projects"]])
        return f"Here are **Rudra's Top Featured Projects**:\n\n{projects_txt}"

    elif any(k in q for k in ["hackathon", "win", "award", "achievement", "position", "rank"]):
        awards_txt = "\n".join([f"• {a}" for a in KNOWLEDGE_BASE["hackathons"]])
        return f"🏆 **Rudra's Hackathon & Award Highlights**:\n\n{awards_txt}"

    elif any(k in q for k in ["cgpa", "education", "college", "university", "rbu", "degree", "gpa"]):
        b = KNOWLEDGE_BASE["identity"]
        return f"🎓 **Academic Record & Education**:\n\n• **University**: {b['university']}\n• **Degree**: {b['degree']}\n• **CGPA**: {b['cgpa']}\n• **Status**: {b['status']}"

    elif any(k in q for k in ["skill", "tech", "stack", "java", "python", "backend", "web3"]):
        s = KNOWLEDGE_BASE["skills"]
        return f"💻 **Rudra's Technology Stack**:\n\n• **Languages**: {', '.join(s['languages'])}\n• **Backend Architecture**: {', '.join(s['backend'])}\n• **AI & ML**: {', '.join(s['ai_ml'])}\n• **Databases**: {', '.join(s['databases'])}\n• **Web3 & Security**: {', '.join(s['web3'] + s['security'])}"

    elif any(k in q for k in ["hire", "contact", "email", "linkedin", "github", "reach"]):
        return "📫 **Contact & Hire Rudra Kathoke**:\n\n• 📧 **Email**: [rudrakathoke@gmail.com](mailto:rudrakathoke@gmail.com)\n• 💼 **LinkedIn**: [linkedin.com/in/rudra-kathoke](https://linkedin.com/in/rudra-kathoke)\n• 🐙 **GitHub**: [github.com/Rudrakathoke2006](https://github.com/Rudrakathoke2006)"

    else:
        return f"🤖 I am **Rudra's AI Assistant**! Rudra is a B.Tech CSE student at Ramdeobaba University (CGPA 9.2) specializing in Java backend systems, AI/ML, and Web3.\n\nTry asking me about his **projects**, **hackathons**, **tech stack**, or **why you should hire him**!"
