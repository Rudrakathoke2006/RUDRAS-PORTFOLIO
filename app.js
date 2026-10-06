/* ===================================================
   app.js — 2026 Production AI Portfolio Architecture
   Candidate: Rudra Kathoke (B.Tech CSE, RBU Nagpur, CGPA 9.2)
   Features:
   - Three.js Interactive 3D Canvas Scene
   - GSAP Letter-by-Letter Hero Headline Reveal
   - Web Audio Synth & Mobile Haptics Navigation
   - Top Reading Progress Bar (Scroll-Driven CSS + Fallback)
   - Continuous Scrolling Tech Stack Marquee Ribbon
   - 3D-Tilt Cards Physics with Specular Glare
   - Zero-CLS Skeleton Screens for Filter Transitions
   - Project Case Study Detail Modal (Shared Layout Morphing)
   - C4 System Architecture Dynamic Diagrams & Metrics
   - Optimistic UI Bookmarking with LocalStorage & Toast
   - AI Streaming Responses & Active Thinking Indicators
   - Inline Form Validation on Blur (WCAG Accessible Icons + Text)
   - Auto-Save Indicators for Form & JD Drafts
   - Milestone Celebrations (Confetti) & Easter Eggs
   =================================================== */

(function () {
  "use strict";

  /* ===================================================
     1. COMPLETE REAL DATA FOR CASE STUDIES & ARCHITECTURE
     =================================================== */
  const projectsData = {
    pugmark: {
      id: "pugmark",
      title: "PUGMARK — Pench Intelligence",
      subtitle: "Offline-First Tiger Stripe Re-Identification & Territory Mapping",
      category: "Wildlife AI / CV Engine",
      badge: "Wildlife AI",
      problem: "Field officers in Pench Tiger Reserve faced manual camera-trap inspection overhead with thousands of blank/false triggers and unindexed animal sightings across remote forest sectors.",
      role: "Lead AI Engineer — Developed OpenCV/YOLOv8 pipeline, SIFT/FLANN stripe pattern keypoint matcher, and GIS territory KDE mapping.",
      metrics: "95% KDE Territory Mapping Accuracy • 80% reduction in manual verification overhead • Sub-85ms inference.",
      service: "FastAPI PyEngine (YOLOv8 + OpenCV)",
      database: "pgvector (Cosine Embeddings) & PostGIS",
      avgLatency: "85ms",
      learnings: "Optimized feature vector extraction for noisy low-light IR camera traps and handled non-uniform illumination drift.",
      tech: ["Python", "FastAPI", "OpenCV", "YOLOv8", "SIFT / FLANN", "React", "GIS", "pgvector"],
      github: "https://github.com/Rudrakathoke2006/pugmark-pench-intelligence",
      c4Nodes: ["Camera Trap Footage", "MegaDetector V6 Filter", "SIFT/FLANN Keypoint Engine", "KDE Territory GIS DB"]
    },
    chainsentinel: {
      id: "chainsentinel",
      title: "ChainSentinel (SIH 26146)",
      subtitle: "Blockchain-Backed Smart Contract & Audit Pipeline",
      category: "Web3 & Security",
      badge: "SIH 26146",
      problem: "Real-time vulnerability identification and automated security scoring for Web3 smart contracts to block re-entrancy and gas drain exploits.",
      role: "Smart Contract & Backend Engineer — Developed static analysis parser, EVM bytecode AST security checks, and gasless verification layer.",
      metrics: "Automated vulnerability scan completion under 1.2s across complex contract suites • Zero false negatives on re-entrancy benchmarks.",
      service: "Spring Boot Audit Core & Solidity Engine",
      database: "PostgreSQL JPA & EVM Testnet",
      avgLatency: "42ms",
      learnings: "Deepened understanding of EVM bytecode execution, AST parse tree security checks, and gas optimization.",
      tech: ["Solidity", "Web3.js", "Java", "Spring Boot", "PostgreSQL", "Hardhat"],
      github: "https://github.com/Rudrakathoke2006",
      c4Nodes: ["Contract Source", "AST Bytecode Parser", "Spring Boot Security Core", "PostgreSQL Vulnerability Log"]
    },
    hospital: {
      id: "hospital",
      title: "Secure DMS & Patient Records (SIH 26190)",
      subtitle: "Enterprise Role-Based Patient Records & Audit Trail",
      category: "Java Backend / Security",
      badge: "SIH 26190",
      problem: "Preventing unauthorized document tampering, SQL injection, and privilege escalation across multi-tier clinical records in hospital workflows.",
      role: "Java Backend Developer — Built SHA-256 salted hashing, role-based access control (RBAC), DAO pattern layers, and immutable audit logger.",
      metrics: "Zero-vulnerability pass across OWASP Top 10 automated test suites • Sub-18ms query execution under concurrency.",
      service: "Java Servlet / Tomcat Enterprise Container",
      database: "MySQL / Relational DAO",
      avgLatency: "18ms",
      learnings: "Enforced strict layered separation (Controller -> DAO -> Service) with custom exception hierarchies and parameterized queries.",
      tech: ["Java 17", "JSP", "Servlets", "MySQL", "SHA-256", "DAO Pattern", "Apache Tomcat"],
      github: "https://github.com/Rudrakathoke2006/Syntecxhub_HospitalPatientRecordSystem",
      c4Nodes: ["User HTTP Request", "Tomcat Servlet Filter", "DAO Layer & SHA-256 Hashing", "MySQL Persistence Engine"]
    },
    infrasentinel: {
      id: "infrasentinel",
      title: "InfraSentinel (R1-05)",
      subtitle: "Critical Infrastructure Telemetry & Predictive Monitoring",
      category: "Full-Stack & Systems",
      badge: "R1-05",
      problem: "Real-time monitoring of distributed IoT nodes and early anomaly detection before catastrophic network cascade failures.",
      role: "Full-Stack Developer — Built real-time WebSocket dashboard and high-throughput telemetry stream ingested by Python microservices.",
      metrics: "Sub-50ms latency telemetry streaming across simulated multi-region node networks • 99.9% uptime SLA.",
      service: "FastAPI Telemetry Hub (WebSockets)",
      database: "PostgreSQL TimeSeries",
      avgLatency: "34ms",
      learnings: "Implemented backpressure controls and non-blocking worker pools for high-velocity WebSocket message streams.",
      tech: ["FastAPI", "WebSockets", "React", "PostgreSQL", "Docker"],
      github: "https://github.com/Rudrakathoke2006",
      c4Nodes: ["IoT Sensor Edge", "FastAPI WebSocket Stream", "Anomaly Detection Filter", "Real-Time React Dashboard"]
    },
    "uav-digital-twin": {
      id: "uav-digital-twin",
      title: "DRDO UAV Engine Digital Twin (PS 26054)",
      subtitle: "Real-Time Sensor Telemetry & Anomaly Prediction System",
      category: "AI & Neural Systems",
      badge: "PS 26054",
      problem: "Predicting engine component degradation before catastrophic failure in UAV flight profiles under dynamic turbulence.",
      role: "AI Engineer — Trained predictive neural regression models over multi-sensor time-series datasets.",
      metrics: "92% predictive accuracy on early failure warning signals under noisy flight sensor conditions.",
      service: "PyTorch Inference Engine",
      database: "PostgreSQL / Memory Cache",
      avgLatency: "95ms",
      learnings: "Handled non-stationary sensor drift using sliding-window normalization layers and autoencoder feature reduction.",
      tech: ["Python", "PyTorch", "FastAPI", "React", "Chart.js"],
      github: "https://github.com/Rudrakathoke2006",
      c4Nodes: ["UAV Sensor Telemetry", "Sliding Window Normalizer", "PyTorch Regression Model", "Telemetry Dashboard"]
    },
    "sentinel-ai": {
      id: "sentinel-ai",
      title: "Sentinel-AI Dark Web Breach Monitor",
      subtitle: "Automated Threat Intelligence & Leaked Credential Alert System",
      category: "Security & Threat Intel",
      badge: "Threat Intel",
      problem: "Detecting organization credential leaks across paste sites and breach dump repositories at scale with zero false alarms.",
      role: "Backend Developer — Wrote distributed asynchronous crawlers and SHA-256 hash matching pipeline.",
      metrics: "Scanned and matched over 1M credential records in <2 seconds using pgvector indexing.",
      service: "FastAPI Hash Crawler",
      database: "pgvector Threat DB",
      avgLatency: "58ms",
      learnings: "Utilized pgvector indexing for sub-millisecond hash substring vector lookups with bloom filters.",
      tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker"],
      github: "https://github.com/Rudrakathoke2006",
      c4Nodes: ["Async Dump Crawler", "SHA-256 Hash Extractor", "pgvector Substring Indexer", "Alert Dispatch Service"]
    },
    sarvavote: {
      id: "sarvavote",
      title: "SarvaVote — Accessible Digital Voting",
      subtitle: "Voice-Guided Hands-Free Voting System",
      category: "Voice AI & Accessibility",
      badge: "Byte Quest Top 25",
      problem: "Making digital election processes accessible for visually impaired and motor-impaired citizens without compromising voter privacy.",
      role: "Full-Stack Engineer — Developed hands-free voice navigation layer using Web Speech API with 2FA OTP security.",
      metrics: "Top 25 out of 500+ teams at Byte Quest Hackathon • 99.2% voice intent matching accuracy.",
      service: "FastAPI Auth Core & Web Speech API",
      database: "PostgreSQL Voter Ledger",
      avgLatency: "28ms",
      learnings: "Handled auditory feedback loops and multi-accent speech recognition edge cases under noisy environments.",
      tech: ["Web Speech API", "Python", "FastAPI", "JavaScript", "OTP 2FA"],
      github: "https://github.com/Rudrakathoke2006/SarvaVote",
      c4Nodes: ["Voter Voice Input", "Web Speech Intent Parser", "2FA OTP Validation", "Encrypted Voter Ledger"]
    },
    "trade-simulator": {
      id: "trade-simulator",
      title: "Interstellar Trade Route Simulator",
      subtitle: "Algorithmic Graph Traversal & Route Optimization",
      category: "Java Algorithms & Systems",
      badge: "🥈 2nd Place Cygnus",
      problem: "Optimizing multi-waypoint trading routes under complex fuel constraints, gravity wells, and dynamic market tariffs.",
      role: "Lead Systems Developer — Implemented custom Dijkstra/A* graph traversal algorithms and stateful simulation engine.",
      metrics: "🥈 2nd Place Winner at Cygnus HackTara Hackathon • Sub-15ms route computation across 10,000+ nodes.",
      service: "Java Graph Traversal Core",
      database: "In-Memory Graph Adjacency List",
      avgLatency: "15ms",
      learnings: "Optimized priority queue memory representations to prevent GC pauses during rapid combinatorial searches.",
      tech: ["Java 17", "Graph Algorithms", "Data Structures", "React"],
      github: "https://github.com/samrudhimadankar/CYGNUS-v.2.0",
      c4Nodes: ["Stellar Node Graph", "A* / Dijkstra Path Engine", "Tariff Optimization Matrix", "Visual Simulation UI"]
    }
  };

  /* ===================================================
     2. AUDIO ENGINE & HAPTIC TACTILE FEEDBACK
     =================================================== */
  let soundEnabled = true;
  let audioCtx = null;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSynthSound(freq = 440, type = 'sine', duration = 0.08, volume = 0.08) {
    if (!soundEnabled) return;
    initAudioContext();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(volume, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch(err){}
  }

  function triggerHaptic(duration = 15) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try { navigator.vibrate(duration); } catch(err){}
    }
  }

  const soundToggle = document.getElementById('soundToggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      const icon = soundToggle.querySelector('.sound-icon');
      if (icon) icon.textContent = soundEnabled ? '🔊' : '🔇';
      if (soundEnabled) {
        initAudioContext();
        playSynthSound(520, 'sine', 0.1);
        showToast("Audio feedback enabled");
      } else {
        showToast("Audio feedback muted");
      }
    });
  }

  // Global sound & haptic hook on interactive buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a, .project-card, .term-btn, .jd-chip');
    if (btn) {
      playSynthSound(560, 'triangle', 0.05, 0.04);
      triggerHaptic(12);
    }
  });

  /* ===================================================
     3. FLOATING AUTO-SAVE TOAST HELPER
     =================================================== */
  const autosaveToast = document.getElementById('autosaveToast');
  const autosaveText = document.getElementById('autosaveText');
  let toastTimer = null;

  function showToast(message) {
    if (!autosaveToast) return;
    if (autosaveText) autosaveText.textContent = message;
    autosaveToast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      autosaveToast.classList.remove('visible');
    }, 2400);
  }

  /* ===================================================
     4. ACCESSIBILITY ARIA ANNOUNCER
     =================================================== */
  const ariaAnnouncer = document.getElementById('ariaLiveAnnouncer');
  function announceToScreenReader(message) {
    if (!ariaAnnouncer) return;
    ariaAnnouncer.textContent = message;
  }

  /* ===================================================
     5. TOP READING PROGRESS BAR (Scroll Indicator)
     =================================================== */
  const progressBar = document.getElementById('readingProgressBar');
  function updateReadingProgressBar() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', Math.round(progress));
    }
  }
  window.addEventListener('scroll', updateReadingProgressBar, { passive: true });
  updateReadingProgressBar();

  /* ===================================================
     6. NAVBAR SCROLL & ACTIVE LINK TRACKING
     =================================================== */
  const navbar = document.getElementById("navbar");
  const scrollTop = document.getElementById("scrollTop");

  function handleNavbarScroll() {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle("scrolled", y > 60);
    if (scrollTop) scrollTop.classList.toggle("visible", y > 500);

    const sections = document.querySelectorAll("section[id]");
    let currentId = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 140;
      if (y >= top) currentId = sec.getAttribute("id");
    });
    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + currentId);
    });
  }
  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  if (scrollTop) {
    scrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Mobile menu */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
      document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ===================================================
     7. HERO HEADLINE LETTER-BY-LETTER REVEAL (GSAP SYNCED)
     =================================================== */
  function revealHeroLetters() {
    const chars = document.querySelectorAll('.hero-title .char');
    if (!chars.length) return;

    if (typeof gsap !== 'undefined') {
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        rotation: 0,
        stagger: 0.045,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.25
      });
    } else {
      chars.forEach((c, idx) => {
        setTimeout(() => {
          c.classList.add('revealed');
        }, 200 + idx * 40);
      });
    }
  }

  /* ===================================================
     7B. SCROLL REVEAL OBSERVER FOR ALL SECTIONS
     =================================================== */
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

    revealElements.forEach((el) => {
      // Check if already in viewport on load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        revealObserver.observe(el);
      }
    });
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  /* ===================================================
     8. CRAZY GEN-Z CYBER BOOTLOADER ENGINE
     =================================================== */
  const loaderScreen = document.getElementById('loaderScreen');
  const loaderPercent = document.getElementById('loaderPercent');
  const loaderBarFill = document.getElementById('loaderBarFill');
  const loaderStatusMsg = document.getElementById('loaderStatusMsg');
  const loaderSkipBtn = document.getElementById('loaderSkipBtn');

  const telemetryLines = [
    "INITIATING CHAOS...",
    "VIBE CHECKING WORKSPACE...",
    "PAIRING WITH CLAUDE AI...",
    "CALIBRATING 2 YEARS DEV SPEED...",
    "SHARPENING UI & SMOOTH MOTION...",
    "REVIEWING EVERY LINE THAT SHIPS...",
    "LAUNCHING RUDRA.SYS..."
  ];

  function finishLoader() {
    if (!loaderScreen || loaderScreen.classList.contains('exit')) return;
    loaderScreen.classList.add('exit');
    revealHeroLetters();
    playSynthSound(880, 'sine', 0.25, 0.12);
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
    setTimeout(() => {
      if (loaderScreen) loaderScreen.style.display = 'none';
    }, 600);
  }

  if (loaderScreen && loaderPercent && loaderBarFill) {
    let count = 0;
    let msgIdx = 0;

    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 12) + 5;
      
      // Update telemetry messages on milestone thresholds
      const calculatedIdx = Math.min(telemetryLines.length - 1, Math.floor((count / 100) * telemetryLines.length));
      if (calculatedIdx !== msgIdx && loaderStatusMsg) {
        msgIdx = calculatedIdx;
        loaderStatusMsg.textContent = telemetryLines[msgIdx];
        playSynthSound(440 + msgIdx * 60, 'sine', 0.04, 0.03);
      }

      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        loaderPercent.textContent = '100';
        loaderBarFill.style.width = '100%';
        if (loaderStatusMsg) loaderStatusMsg.textContent = telemetryLines[telemetryLines.length - 1];
        setTimeout(finishLoader, 350);
      } else {
        loaderPercent.textContent = count < 10 ? '0' + count : count;
        loaderBarFill.style.width = count + '%';
      }
    }, 55);

    if (loaderSkipBtn) {
      loaderSkipBtn.addEventListener('click', () => {
        clearInterval(interval);
        finishLoader();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !loaderScreen.classList.contains('exit')) {
        clearInterval(interval);
        finishLoader();
      }
    });
  } else {
    revealHeroLetters();
  }

  /* ===================================================
     9. THREE.JS INTERACTIVE 3D HERO WORKSPACE SCENE
     =================================================== */
  const heroCanvas = document.getElementById('heroCanvas');
  if (heroCanvas && typeof THREE !== 'undefined') {
    initThreeJsHeroScene();
  } else if (heroCanvas) {
    initFallbackParticleCanvas();
  }

  function initThreeJsHeroScene() {
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 8);

      const renderer = new THREE.WebGLRenderer({
        canvas: heroCanvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x130f16, 1.8);
      scene.add(ambientLight);

      const lightLime = new THREE.PointLight(0xc8ff5a, 3.5, 20);
      lightLime.position.set(5, 4, 3);
      scene.add(lightLime);

      const lightLavender = new THREE.PointLight(0xc2a4ff, 3.5, 20);
      lightLavender.position.set(-5, -3, 3);
      scene.add(lightLavender);

      // 3D Polyhedra Group
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // Primary Icosahedron (Lavender Glow Wireframe)
      const icoGeo = new THREE.IcosahedronGeometry(2.1, 1);
      const icoMat = new THREE.MeshStandardMaterial({
        color: 0xc2a4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        roughness: 0.2,
        metalness: 0.8
      });
      const icoMesh = new THREE.Mesh(icoGeo, icoMat);
      icoMesh.position.set(2.8, 0.4, -1);
      mainGroup.add(icoMesh);

      // Secondary Octahedron (Hot Lime Accent)
      const octGeo = new THREE.OctahedronGeometry(1.2, 0);
      const octMat = new THREE.MeshStandardMaterial({
        color: 0xc8ff5a,
        wireframe: true,
        transparent: true,
        opacity: 0.45
      });
      const octMesh = new THREE.Mesh(octGeo, octMat);
      octMesh.position.set(3.8, 2.2, 0.5);
      mainGroup.add(octMesh);

      // Inner Core Torus Knot (Architecture Symbol)
      const torusGeo = new THREE.TorusKnotGeometry(0.8, 0.22, 64, 12);
      const torusMat = new THREE.MeshStandardMaterial({
        color: 0x00ff9d,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const torusMesh = new THREE.Mesh(torusGeo, torusMat);
      torusMesh.position.set(2.8, 0.4, -1);
      mainGroup.add(torusMesh);

      // Floating Particle Cloud
      const particleCount = window.innerWidth < 768 ? 60 : 130;
      const particleGeo = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 16;
        posArray[i + 1] = (Math.random() - 0.5) * 10;
        posArray[i + 2] = (Math.random() - 0.5) * 8;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.045,
        color: 0xc2a4ff,
        transparent: true,
        opacity: 0.6
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // Mouse Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
      }, { passive: true });

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Animation Loop
      let clock = new THREE.Clock();
      function animate3D() {
        requestAnimationFrame(animate3D);
        const elapsed = clock.getElapsedTime();

        // Rotate geometries
        icoMesh.rotation.x = elapsed * 0.15;
        icoMesh.rotation.y = elapsed * 0.2;
        octMesh.rotation.x = -elapsed * 0.25;
        octMesh.rotation.z = elapsed * 0.2;
        torusMesh.rotation.y = elapsed * 0.3;
        particles.rotation.y = elapsed * 0.04;

        // Smooth camera dampening to mouse
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        mainGroup.rotation.y = targetX * 0.8;
        mainGroup.rotation.x = targetY * 0.8;

        renderer.render(scene, camera);
      }
      animate3D();
    } catch(err) {
      console.warn('Three.js initialization notice:', err);
      initFallbackParticleCanvas();
    }
  }

  function initFallbackParticleCanvas() {
    const ctx = heroCanvas.getContext('2d');
    let width, height;
    let particles = [];
    const count = window.innerWidth < 768 ? 35 : 70;

    function resize() {
      width = heroCanvas.width = window.innerWidth;
      height = heroCanvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          r: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? 'rgba(194, 164, 255,' : 'rgba(200, 255, 90,'
        });
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(194, 164, 255, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.6)';
        ctx.fill();
      });
      requestAnimationFrame(render);
    }
    window.addEventListener('resize', resize);
    resize();
    render();
  }

  /* ===================================================
     10. 3D-TILT PHYSICS FOR PROJECT & FEATURED CARDS
     =================================================== */
  function init3DTiltCards() {
    const cards = document.querySelectorAll('.tilt-card, .featured-work-card, .tech-icon-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -9;
        const rotateY = ((x - centerX) / centerX) * 9;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;
      });
    });
  }
  init3DTiltCards();

  /* ===================================================
     11. PROJECT FILTERING & ZERO-CLS SKELETON SCREENS
     =================================================== */
  const filterBtns = document.querySelectorAll('.project-filter');
  const projectsGrid = document.getElementById('projectsGrid');
  const skeletonGrid = document.getElementById('skeletonGrid');
  const projectCards = document.querySelectorAll('.projects-grid .project-card');

  if (filterBtns.length && projectsGrid && skeletonGrid) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        announceToScreenReader(`Filtering projects by ${filter}`);
        playSynthSound(620, 'sine', 0.05);

        // Show Skeleton Grid to reserve space & avoid layout shift
        projectsGrid.style.display = 'none';
        skeletonGrid.style.display = 'grid';

        setTimeout(() => {
          skeletonGrid.style.display = 'none';
          projectsGrid.style.display = 'grid';

          projectCards.forEach(card => {
            const tags = card.dataset.tags || '';
            const isMatch = filter === 'all' || tags.includes(filter);
            card.style.display = isMatch ? 'flex' : 'none';
            if (isMatch) {
              card.style.animation = 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            }
          });
        }, 220); // 220ms Material Design 3 sweet spot
      });
    });
  }

  /* ===================================================
     12. PROJECT CASE STUDY DETAIL MODAL (SHARED LAYOUT MORPHING)
     =================================================== */
  const projectModal = document.getElementById('projectDetailModal');
  const projectModalClose = document.getElementById('projectModalClose');
  const modalProjectIcon = document.getElementById('modalProjectIcon');
  const modalProjectBadge = document.getElementById('modalProjectBadge');
  const modalProjectCategory = document.getElementById('modalProjectCategory');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectSubtitle = document.getElementById('modalProjectSubtitle');
  const modalProjectProblem = document.getElementById('modalProjectProblem');
  const modalProjectRole = document.getElementById('modalProjectRole');
  const modalProjectMetrics = document.getElementById('modalProjectMetrics');
  const modalProjectLatency = document.getElementById('modalProjectLatency');
  const modalProjectService = document.getElementById('modalProjectService');
  const modalProjectDatabase = document.getElementById('modalProjectDatabase');
  const modalProjectLearnings = document.getElementById('modalProjectLearnings');
  const modalProjectStack = document.getElementById('modalProjectStack');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const modalShareBtn = document.getElementById('modalShareBtn');
  const modalBookmarkBtn = document.getElementById('modalBookmarkBtn');
  const modalBookmarkCount = document.getElementById('modalBookmarkCount');

  let currentOpenProjectId = null;

  function openProjectModal(projectId) {
    const data = projectsData[projectId] || projectsData['pugmark'];
    currentOpenProjectId = data.id;

    if (modalProjectIcon) modalProjectIcon.textContent = data.id === 'pugmark' ? '🐅' : data.id.includes('sentinel') ? '⛓️' : data.id === 'hospital' ? '🔒' : '🚀';
    if (modalProjectBadge) modalProjectBadge.textContent = data.badge || "Verified Architecture";
    if (modalProjectCategory) modalProjectCategory.textContent = data.category;
    if (modalProjectTitle) modalProjectTitle.textContent = data.title;
    if (modalProjectSubtitle) modalProjectSubtitle.textContent = data.subtitle;
    if (modalProjectProblem) modalProjectProblem.textContent = data.problem;
    if (modalProjectRole) modalProjectRole.textContent = data.role;
    if (modalProjectMetrics) modalProjectMetrics.textContent = data.metrics;
    if (modalProjectLatency) modalProjectLatency.textContent = `Avg Latency: ${data.avgLatency}`;
    if (modalProjectService) modalProjectService.textContent = data.service;
    if (modalProjectDatabase) modalProjectDatabase.textContent = data.database;
    if (modalProjectLearnings) modalProjectLearnings.textContent = data.learnings;
    if (modalGithubLink) modalGithubLink.href = data.github;

    // Render C4 Architecture Flow
    const c4Container = document.getElementById('modalC4Diagram');
    if (c4Container && data.c4Nodes) {
      c4Container.innerHTML = `
        <div class="c4-flow">
          ${data.c4Nodes.map((node, i) => `
            <span class="c4-node ${i === 1 ? 'highlight' : ''}">${node}</span>
            ${i < data.c4Nodes.length - 1 ? '<span class="c4-arrow">➔</span>' : ''}
          `).join('')}
        </div>
      `;
    }

    // Render Tech Stack Badges
    if (modalProjectStack && data.tech) {
      modalProjectStack.innerHTML = data.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('');
    }

    // Sync Bookmark state
    syncModalBookmarkState(data.id);

    // Open Modal
    if (projectModal) {
      projectModal.classList.add('open');
      projectModal.setAttribute('aria-hidden', 'false');
      announceToScreenReader(`Opened case study for ${data.title}`);
    }
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
    }
  }

  // Hook buttons that open case study
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-project]');
    if (trigger) {
      e.preventDefault();
      const id = trigger.dataset.openProject;
      openProjectModal(id);
    }
  });

  if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // Share Case Study Link
  if (modalShareBtn) {
    modalShareBtn.addEventListener('click', () => {
      const url = `${window.location.origin}${window.location.pathname}#${currentOpenProjectId || 'projects'}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          showToast("Case study link copied to clipboard! 🔗");
        });
      } else {
        showToast("Case study link ready!");
      }
    });
  }

  /* ===================================================
     13. OPTIMISTIC UI BOOKMARKING & PERSISTENCE
     =================================================== */
  function getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem('rudra_portfolio_bookmarks') || '[]');
    } catch(e) {
      return [];
    }
  }

  function saveBookmarks(list) {
    try {
      localStorage.setItem('rudra_portfolio_bookmarks', JSON.stringify(list));
    } catch(e){}
  }

  function toggleBookmark(projectId) {
    let list = getBookmarks();
    const index = list.indexOf(projectId);
    let bookmarked = false;
    if (index > -1) {
      list.splice(index, 1);
      bookmarked = false;
      showToast(`Removed from bookmarks`);
    } else {
      list.push(projectId);
      bookmarked = true;
      showToast(`Saved to bookmarks ★`);
      triggerHaptic(20);
      playSynthSound(680, 'sine', 0.08);
    }
    saveBookmarks(list);
    updateAllBookmarkButtons();
    return bookmarked;
  }

  function syncModalBookmarkState(projectId) {
    if (!modalBookmarkBtn) return;
    const list = getBookmarks();
    const isBookmarked = list.includes(projectId);
    modalBookmarkBtn.classList.toggle('active', isBookmarked);
    if (modalBookmarkCount) {
      modalBookmarkCount.textContent = 42 + (isBookmarked ? 1 : 0);
    }
  }

  function updateAllBookmarkButtons() {
    const list = getBookmarks();
    document.querySelectorAll('.card-bookmark-btn').forEach(btn => {
      const id = btn.dataset.project;
      const isBookmarked = list.includes(id);
      btn.classList.toggle('bookmarked', isBookmarked);
    });
    if (currentOpenProjectId) syncModalBookmarkState(currentOpenProjectId);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.card-bookmark-btn');
    if (btn) {
      e.stopPropagation();
      const id = btn.dataset.project;
      toggleBookmark(id);
    }
  });

  if (modalBookmarkBtn) {
    modalBookmarkBtn.addEventListener('click', () => {
      if (currentOpenProjectId) {
        toggleBookmark(currentOpenProjectId);
      }
    });
  }
  updateAllBookmarkButtons();

  /* ===================================================
     14. AI CHATBOT WITH ACTIVE THINKING & STREAMING
     =================================================== */
  const aiChatToggle = document.getElementById('aiChatToggle');
  const aiChatModal = document.getElementById('aiChatModal');
  const aiChatClose = document.getElementById('aiChatClose');
  const aiChatForm = document.getElementById('aiChatForm');
  const aiChatInput = document.getElementById('aiChatInput');
  const aiChatBody = document.getElementById('aiChatBody');
  const suggestions = document.querySelectorAll('.suggestion-chip');

  if (aiChatToggle && aiChatModal) {
    aiChatToggle.addEventListener('click', () => {
      const isOpen = aiChatModal.classList.contains('open');
      aiChatModal.classList.toggle('open');
      aiChatModal.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
      if (!isOpen && aiChatInput) aiChatInput.focus();
    });

    if (aiChatClose) {
      aiChatClose.addEventListener('click', () => {
        aiChatModal.classList.remove('open');
        aiChatModal.setAttribute('aria-hidden', 'true');
      });
    }

    suggestions.forEach(chip => {
      chip.addEventListener('click', () => {
        handleUserChatMessage(chip.dataset.prompt);
      });
    });

    if (aiChatForm) {
      aiChatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = aiChatInput.value.trim();
        if (text) {
          handleUserChatMessage(text);
          aiChatInput.value = '';
        }
      });
    }
  }

  function handleUserChatMessage(query) {
    appendChatMessage('user', query);

    // Show Active Thinking indicator
    const thinkingBubble = document.createElement('div');
    thinkingBubble.className = 'ai-message bot';
    thinkingBubble.innerHTML = `
      <div class="ai-msg-bubble">
        <div class="ai-thinking-steps">
          <div class="step-indicator active"><span class="step-dot"></span> 🔍 Ingesting query & searching pgvector documentation...</div>
          <div class="step-indicator"><span class="step-dot"></span> 🧠 Evaluating Rudra's case studies & CGPA records...</div>
          <div class="step-indicator"><span class="step-dot"></span> ⚡ Streaming response...</div>
        </div>
      </div>
    `;
    aiChatBody.appendChild(thinkingBubble);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;

    setTimeout(() => {
      thinkingBubble.remove();
      const responseHtml = generateLocalAIResponse(query);
      streamResponseToBot(responseHtml);
    }, 650);
  }

  function appendChatMessage(sender, html) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${sender}`;
    msgDiv.innerHTML = `<div class="ai-msg-bubble">${html}</div>`;
    aiChatBody.appendChild(msgDiv);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
  }

  function streamResponseToBot(fullHtml) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'ai-message bot';
    const bubble = document.createElement('div');
    bubble.className = 'ai-msg-bubble';
    bubble.innerHTML = `<span class="streaming-cursor"></span>`;
    msgDiv.appendChild(bubble);
    aiChatBody.appendChild(msgDiv);

    // Stream token-by-token
    const words = fullHtml.split(' ');
    let currentIdx = 0;
    const streamInterval = setInterval(() => {
      if (currentIdx < words.length) {
        bubble.innerHTML = words.slice(0, currentIdx + 1).join(' ') + `<span class="streaming-cursor"></span>`;
        currentIdx++;
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
      } else {
        clearInterval(streamInterval);
        bubble.innerHTML = fullHtml; // Clean ending without cursor
        playSynthSound(580, 'sine', 0.05);
      }
    }, 28);
  }

  function generateLocalAIResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('who') || q.includes('vibe') || q.includes('theory') || q.includes('philosophy') || q.includes('bring') || q.includes('year') || q.includes('about')) {
      return `⚡ <strong>Who is Rudra?</strong><br/>
      I'm a developer who thrives on <strong>vibe coding</strong>: shaping ideas into polished products fast, with AI as a creative partner and strong engineering judgment guiding every build.<br/><br/>
      • <strong>Core Focus:</strong> Turning concepts into working websites and apps in record time, using AI-assisted workflows to prototype, iterate, and ship while keeping code clean, structured, and production-ready.<br/>
      • <strong>Engineering Standard:</strong> I care about the details that make a product feel premium: sharp UI, smooth motion, fast performance. Beyond the vibe, I review, refactor, and understand every line that ships.<br/>
      • <strong>What I Bring:</strong><br/>
      &nbsp;&nbsp;1. 🤖 <em>AI-Assisted Development:</em> Prompt-driven workflows with Claude & modern AI tools.<br/>
      &nbsp;&nbsp;2. ⚡ <em>Rapid Prototyping:</em> Idea to working MVP in hours, not weeks.<br/>
      &nbsp;&nbsp;3. 🎨 <em>Vibe-Coded UI:</em> Strong visual taste and aesthetic sense.<br/>
      &nbsp;&nbsp;4. ✨ <em>Smooth Motion:</em> Interaction and animation design.<br/>
      &nbsp;&nbsp;5. 🛡️ <em>Engineering Judgment:</em> Reviewing, debugging, and refactoring AI output.<br/>
      &nbsp;&nbsp;6. 🚀 <em>Execution:</em> Fast shipping and a quick learning curve.<br/>
      • <strong>Years of Development:</strong> 2 YEARS (B.Tech CSE @ RBU Nagpur, 9.2 CGPA).`;
    } else if (q.includes('project') || q.includes('work') || q.includes('top')) {
      return `🚀 <strong>Rudra's Key Production Systems:</strong><br/>
      1. 🐅 <strong>PUGMARK (Wildlife AI):</strong> Pench Tiger Reserve offline intelligence with YOLOv8, SIFT keypoints, and 95% KDE territory mapping.<br/>
      2. ⛓️ <strong>ChainSentinel (SIH 26146):</strong> Smart contract AST security audit engine running sub-1.2s vulnerability passes.<br/>
      3. 🏥 <strong>Secure DMS / Patient Records (SIH 26190):</strong> Java enterprise backend with SHA-256 salted hashing and DAO layered architecture.<br/>
      4. 🛡️ <strong>InfraSentinel:</strong> Distributed IoT telemetry hub with sub-50ms latency WebSockets.`;
    } else if (q.includes('hackathon') || q.includes('award') || q.includes('win')) {
      return `🏆 <strong>Hackathon Track Record (10+ Competed):</strong><br/>
      • 🥈 <strong>2nd Place Winner:</strong> Cygnus HackTara (Interstellar Dijkstra Trade Route Simulator)<br/>
      • 🏆 <strong>Top 25 of 500+ teams:</strong> Byte Quest GFG RBU (SarvaVote Accessible Voice Voting)<br/>
      • 🏆 <strong>Top 17 Finalist:</strong> CodeCon 2025 (Legalizer AI Contract Parser)<br/>
      • 🏆 <strong>Top 50 of 1350+:</strong> CodeRush 1.0 (EEG Schizophrenia Detection Neural Model)`;
    } else if (q.includes('cgpa') || q.includes('college') || q.includes('education') || q.includes('university')) {
      return `🎓 <strong>Academic Standing:</strong><br/>
      Rudra is a B.Tech Computer Science student at <strong>Ramdeobaba University (RBU Nagpur, Batch 2024–2028)</strong> maintaining a <strong>9.2 / 10.0 CGPA</strong> (High Distinction).<br/>
      He has completed <strong>2 Java backend internships</strong> (Uptricks & SyntecxHub) and holds 8+ verified credentials in Web3 and AI.`;
    } else if (q.includes('hire') || q.includes('why') || q.includes('recommend')) {
      return `⭐ <strong>Why Hire Rudra Kathoke:</strong><br/>
      • <strong>Proof of Work:</strong> Doesn't just write tutorial code—builds containerized microservices with telemetry, tests, and security audits.<br/>
      • <strong>High-Throughput Java:</strong> Deep command of OOP, multithreading, Spring Boot 3, and SHA-256 encryption.<br/>
      • <strong>Applied AI:</strong> Proven experience delivering offline-first OpenCV/YOLO systems for real forest reserves.<br/>
      • <strong>Hackathon Speed:</strong> Ships production prototypes in high-pressure 24–48h sprints.`;
    } else {
      return `🤖 Thanks for asking! Rudra is a Computer Science engineer at RBU Nagpur (CGPA 9.2) specialized in Java backend architecture, OpenCV/YOLO wildlife AI, and Web3 security.<br/><br/>Try clicking one of the suggestion chips or asking about his <strong>PUGMARK case study</strong>!`;
    }
  }

  /* ===================================================
     15. JOB DESCRIPTION SEMANTIC MATCHER TOOL
     =================================================== */
  const jdInput = document.getElementById('jdInput');
  const jdMatchBtn = document.getElementById('jdMatchBtn');
  const jdResults = document.getElementById('jdResults');
  const jdThinkingSteps = document.getElementById('jdThinkingSteps');
  const jdAutosave = document.getElementById('jdAutosave');
  const jdChips = document.querySelectorAll('.jd-chip');

  const sampleJDs = {
    java: "Looking for an SDE Intern / Java Backend Developer with strong knowledge of Java 17, Spring Boot, REST APIs, DAO pattern, relational databases (MySQL/PostgreSQL), multi-threading, and application security (SHA-256 / OWASP compliance).",
    ai: "Hiring an AI / Computer Vision Engineer with experience in Python, OpenCV, YOLO object detection, feature extraction (SIFT/FLANN), PyTorch, GIS mapping, and high-performance FastAPI backends for production deployments.",
    web3: "Seeking a Web3 / Security Auditor with expertise in Solidity smart contracts, EVM bytecode analysis, AST vulnerability detection, gasless verification, and backend microservices with Java Spring Boot and PostgreSQL.",
    fullstack: "Looking for a Full-Stack Engineer skilled in React, Next.js, TypeScript, FastAPI/Spring Boot, WebSockets for live telemetry streaming, and containerized Docker environments."
  };

  if (jdChips.length && jdInput) {
    jdChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const sampleKey = chip.dataset.sample;
        if (sampleJDs[sampleKey]) {
          jdInput.value = sampleJDs[sampleKey];
          triggerHaptic(10);
          showToast(`Loaded ${chip.textContent.trim()} sample JD`);
          if (jdMatchBtn) jdMatchBtn.click();
        }
      });
    });
  }

  // Auto-save JD draft
  if (jdInput) {
    const savedJd = localStorage.getItem('rudra_jd_draft');
    if (savedJd) jdInput.value = savedJd;

    jdInput.addEventListener('input', () => {
      localStorage.setItem('rudra_jd_draft', jdInput.value);
      if (jdAutosave) {
        jdAutosave.classList.add('visible');
        setTimeout(() => jdAutosave.classList.remove('visible'), 1600);
      }
    });
  }

  if (jdMatchBtn && jdInput && jdResults) {
    jdMatchBtn.addEventListener('click', () => {
      const text = jdInput.value.trim();
      if (!text) {
        showToast("Please paste a job description first! 📋");
        jdInput.focus();
        return;
      }

      // Button State Feedback
      const btnText = jdMatchBtn.querySelector('.btn-text');
      const btnSpinner = jdMatchBtn.querySelector('.btn-spinner');
      if (btnText) btnText.textContent = "Analyzing & Ranking Fit...";
      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      jdMatchBtn.disabled = true;

      // Show Active Thinking Steps
      if (jdThinkingSteps) {
        jdThinkingSteps.style.display = 'flex';
        const step1 = document.getElementById('jdStep1');
        const step2 = document.getElementById('jdStep2');
        const step3 = document.getElementById('jdStep3');

        if (step1) { step1.className = 'step-indicator active'; }
        setTimeout(() => {
          if (step1) step1.className = 'step-indicator completed';
          if (step2) step2.className = 'step-indicator active';
        }, 400);

        setTimeout(() => {
          if (step2) step2.className = 'step-indicator completed';
          if (step3) step3.className = 'step-indicator active';
        }, 800);
      }

      setTimeout(() => {
        if (jdThinkingSteps) jdThinkingSteps.style.display = 'none';

        // Calculate semantic alignment
        const analysis = calculateJdFit(text);
        renderJdResults(analysis);

        // Reset button
        if (btnText) btnText.textContent = "🎯 Rank My Projects for this JD";
        if (btnSpinner) btnSpinner.style.display = 'none';
        jdMatchBtn.disabled = false;

        // Milestone Celebration if match > 85%
        if (analysis.topScore >= 85 && typeof confetti === 'function') {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.7 }
          });
          showToast(`High Technical Fit Match: ${analysis.topScore}%! 🎉`);
        }
      }, 1100);
    });
  }

  function calculateJdFit(jdText) {
    const text = jdText.toLowerCase();
    let scores = [
      { id: "pugmark", score: 65, matchReason: "Matches computer vision, OpenCV, YOLO, Python, and GIS requirements." },
      { id: "hospital", score: 60, matchReason: "Matches Core Java, JSP/Servlets, MySQL, SHA-256 security, and DAO architecture." },
      { id: "chainsentinel", score: 55, matchReason: "Matches Solidity, Web3 smart contract auditing, and Spring Boot." },
      { id: "infrasentinel", score: 58, matchReason: "Matches WebSockets telemetry, FastAPI, React, and PostgreSQL." },
      { id: "uav-digital-twin", score: 54, matchReason: "Matches PyTorch neural modeling and time-series telemetry analysis." },
      { id: "sentinel-ai", score: 52, matchReason: "Matches pgvector similarity search, credential security, and async crawlers." }
    ];

    // Boost scores based on keywords in JD
    if (text.includes("java") || text.includes("spring") || text.includes("backend")) {
      scores.find(s => s.id === "hospital").score += 34;
      scores.find(s => s.id === "chainsentinel").score += 26;
    }
    if (text.includes("ai") || text.includes("vision") || text.includes("yolo") || text.includes("opencv") || text.includes("python")) {
      scores.find(s => s.id === "pugmark").score += 32;
      scores.find(s => s.id === "uav-digital-twin").score += 30;
      scores.find(s => s.id === "sentinel-ai").score += 28;
    }
    if (text.includes("web3") || text.includes("solidity") || text.includes("security") || text.includes("audit")) {
      scores.find(s => s.id === "chainsentinel").score += 38;
      scores.find(s => s.id === "sentinel-ai").score += 32;
    }
    if (text.includes("websocket") || text.includes("real-time") || text.includes("telemetry") || text.includes("full-stack")) {
      scores.find(s => s.id === "infrasentinel").score += 36;
    }

    scores.forEach(s => s.score = Math.min(s.score, 98));
    scores.sort((a, b) => b.score - a.score);

    return {
      topScore: scores[0].score,
      rankings: scores.map(s => ({
        ...projectsData[s.id],
        score: s.score,
        reason: s.matchReason
      }))
    };
  }

  function renderJdResults(analysis) {
    if (!jdResults) return;
    jdResults.style.display = 'block';
    jdResults.innerHTML = `
      <div class="jd-results-header">
        <div class="jd-fit-score-badge">
          <span class="score-num">${analysis.topScore}%</span>
          <span class="score-lbl">OVERALL SEMANTIC FIT</span>
        </div>
        <p class="jd-summary-text">
          Semantic embedding comparison indicates strong alignment with Rudra's production systems. Here are the top ranked matches:
        </p>
      </div>
      <div class="jd-matches-list">
        ${analysis.rankings.slice(0, 3).map((item, idx) => `
          <div class="jd-match-item">
            <div class="jd-match-top">
              <span class="jd-rank">#${idx + 1}</span>
              <span class="jd-match-name">${item.title}</span>
              <span class="jd-match-score">${item.score}% Match</span>
            </div>
            <p class="jd-match-reason">${item.reason}</p>
            <div class="jd-match-action">
              <button class="btn-sm btn-case-study" data-open-project="${item.id}">
                <span>View Proof Architecture →</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    announceToScreenReader(`JD Match completed. Top match: ${analysis.rankings[0].title} with ${analysis.topScore}% fit.`);
    jdResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ===================================================
     16. INLINE FORM VALIDATION ON BLUR & AUTO-SAVE
     =================================================== */
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameFeedback = document.getElementById('nameFeedback');
  const emailFeedback = document.getElementById('emailFeedback');
  const messageFeedback = document.getElementById('messageFeedback');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');
  const formDraftStatus = document.getElementById('formDraftStatus');

  function validateName() {
    if (!nameInput || !nameFeedback) return true;
    const val = nameInput.value.trim();
    if (!val) {
      setFieldValidation(nameInput, nameFeedback, false, "✕ Name is required");
      return false;
    } else if (val.length < 2) {
      setFieldValidation(nameInput, nameFeedback, false, "✕ Please enter at least 2 characters");
      return false;
    } else {
      setFieldValidation(nameInput, nameFeedback, true, "✓ Looks good");
      return true;
    }
  }

  function validateEmail() {
    if (!emailInput || !emailFeedback) return true;
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      setFieldValidation(emailInput, emailFeedback, false, "✕ Email address is required");
      return false;
    } else if (!emailRegex.test(val)) {
      setFieldValidation(emailInput, emailFeedback, false, "✕ Please enter a valid email (e.g. name@domain.com)");
      return false;
    } else {
      setFieldValidation(emailInput, emailFeedback, true, "✓ Valid email format");
      return true;
    }
  }

  function validateMessage() {
    if (!messageInput || !messageFeedback) return true;
    const val = messageInput.value.trim();
    if (!val) {
      setFieldValidation(messageInput, messageFeedback, false, "✕ Message is required");
      return false;
    } else if (val.length < 6) {
      setFieldValidation(messageInput, messageFeedback, false, "✕ Message should be at least 6 characters");
      return false;
    } else {
      setFieldValidation(messageInput, messageFeedback, true, "✓ Message ready");
      return true;
    }
  }

  function setFieldValidation(input, feedbackEl, isValid, message) {
    input.classList.toggle('input-valid', isValid);
    input.classList.toggle('input-invalid', !isValid);
    feedbackEl.className = `form-feedback ${isValid ? 'valid' : 'invalid'}`;
    feedbackEl.textContent = message;
  }

  // Validate on blur (not keystroke to avoid frustrating user while typing)
  if (nameInput) nameInput.addEventListener('blur', validateName);
  if (emailInput) emailInput.addEventListener('blur', validateEmail);
  if (messageInput) messageInput.addEventListener('blur', validateMessage);

  // Auto-save form inputs to localStorage
  function saveContactDraft() {
    const draft = {
      name: nameInput ? nameInput.value : '',
      email: emailInput ? emailInput.value : '',
      message: messageInput ? messageInput.value : ''
    };
    try {
      localStorage.setItem('rudra_contact_draft', JSON.stringify(draft));
      if (formDraftStatus) {
        formDraftStatus.classList.add('visible');
        setTimeout(() => formDraftStatus.classList.remove('visible'), 1800);
      }
    } catch(e){}
  }

  [nameInput, emailInput, messageInput].forEach(inp => {
    if (inp) inp.addEventListener('input', saveContactDraft);
  });

  // Load draft on mount
  try {
    const savedDraft = JSON.parse(localStorage.getItem('rudra_contact_draft') || '{}');
    if (savedDraft.name && nameInput) nameInput.value = savedDraft.name;
    if (savedDraft.email && emailInput) emailInput.value = savedDraft.email;
    if (savedDraft.message && messageInput) messageInput.value = savedDraft.message;
  } catch(e){}

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        showToast("Please resolve form issues before submitting");
        return;
      }

      // Button state feedback
      if (contactSubmitBtn) {
        const btnText = contactSubmitBtn.querySelector('.btn-text');
        const btnSpinner = contactSubmitBtn.querySelector('.btn-spinner');
        if (btnText) btnText.textContent = "Sending Message...";
        if (btnSpinner) btnSpinner.style.display = 'inline-block';
        contactSubmitBtn.disabled = true;

        setTimeout(() => {
          if (btnText) btnText.textContent = "Message Sent! ✓";
          if (btnSpinner) btnSpinner.style.display = 'none';
          contactSubmitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";

          // Milestone Celebration (Confetti)
          if (typeof confetti === 'function') {
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.6 }
            });
          }

          showToast("Message sent to Rudra! We'll be in touch. 🚀");
          try { localStorage.removeItem('rudra_contact_draft'); } catch(e){}

          setTimeout(() => {
            contactForm.reset();
            [nameInput, emailInput, messageInput].forEach(inp => {
              if (inp) {
                inp.classList.remove('input-valid');
                inp.classList.remove('input-invalid');
              }
            });
            [nameFeedback, emailFeedback, messageFeedback].forEach(fb => {
              if (fb) fb.textContent = '';
            });
            if (btnText) btnText.textContent = "Send Message";
            contactSubmitBtn.style.background = "";
            contactSubmitBtn.disabled = false;
          }, 3200);
        }, 800);
      }
    });
  }

  /* ===================================================
     17. CYBER TERMINAL CLI COMMANDS
     =================================================== */
  const termBtns = document.querySelectorAll('.term-btn');
  const termOutput = document.getElementById('terminalOutput');

  if (termBtns.length && termOutput) {
    const termResponses = {
      projects: `
        <div class="term-line prompt-line"><span class="term-usr">rudra@system:~$</span> <span class="term-cmd">./projects.sh</span></div>
        <div class="term-line highlight-green">1. PUGMARK (FastAPI + OpenCV + YOLOv8 + SIFT) - Pench Tiger Reserve Wildlife AI</div>
        <div class="term-line">2. ChainSentinel (Solidity + Spring Boot + AST Parser) - SIH 26146</div>
        <div class="term-line">3. Secure DMS & Patient Records (Java 17 + JSP/Servlets + SHA-256 + DAO Pattern)</div>
        <div class="term-line">4. InfraSentinel (FastAPI + WebSockets Telemetry Stream - Sub-50ms)</div>
        <div class="term-line text-muted">Click any project card to open full C4 architecture and verified telemetry ↓</div>
      `,
      skills: `
        <div class="term-line prompt-line"><span class="term-usr">rudra@system:~$</span> <span class="term-cmd">./skills.sh</span></div>
        <div class="term-line">LANGUAGES : Java 17, Python, C, C++, JavaScript, TypeScript, Solidity</div>
        <div class="term-line">BACKEND   : Spring Boot 3, FastAPI, JSP/Servlets, JDBC, DAO Pattern, Tomcat</div>
        <div class="term-line">DATABASES : PostgreSQL + pgvector, MySQL, Redis, Oracle DB</div>
        <div class="term-line highlight-green">SECURITY  : SHA-256 Salted Hashing, OWASP Hardening, RBAC Access Control</div>
      `,
      hackathons: `
        <div class="term-line prompt-line"><span class="term-usr">rudra@system:~$</span> <span class="term-cmd">./awards.sh</span></div>
        <div class="term-line highlight-green">🥈 2nd Place : Cygnus HackTara (Interstellar Dijkstra Trade Route Simulator)</div>
        <div class="term-line">🏆 Top 25    : Byte Quest GFG RBU (SarvaVote Accessible Voice Voting)</div>
        <div class="term-line">🏆 Top 17    : CodeCon 2025 (Legalizer AI Contract Parser)</div>
        <div class="term-line">🏆 Top 50    : CodeRush 1.0 (EEG Schizophrenia Detection Neural Model)</div>
      `,
      clear: `
        <div class="term-line prompt-line"><span class="term-usr">rudra@system:~$</span> <span class="term-cmd">clear</span></div>
        <div class="term-line info-line text-muted">Terminal cleared. Click scripts below to run automated proofs.</div>
      `
    };

    termBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.dataset.cmd;
        if (termResponses[cmd]) {
          termOutput.innerHTML = termResponses[cmd] + `
            <div class="term-line prompt-line mt-2">
              <span class="term-usr">rudra@system:~$</span> <span class="term-cursor">█</span>
            </div>
          `;
          termOutput.scrollTop = termOutput.scrollHeight;
        }
      });
    });
  }

  /* ===================================================
     18. NAGPUR IST LIVE CLOCK
     =================================================== */
  function updateNagpurClock() {
    const el = document.getElementById("nagpurClock");
    if (!el) return;
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    };
    el.textContent = `Nagpur, IN • ${now.toLocaleTimeString("en-US", options)} IST`;
  }
  setInterval(updateNagpurClock, 1000);
  updateNagpurClock();

  /* ===================================================
     19. WHAT I DO CARDS (Directly Visible)
     =================================================== */
  const whatDoCards = document.querySelectorAll('.what-do-card');
  whatDoCards.forEach(card => {
    card.classList.add('expanded');
  });

  /* ===================================================
     20. MORE PROJECTS ACCORDION TOGGLE
     =================================================== */
  const moreBtn = document.getElementById("moreProjectsBtn");
  const moreGrid = document.getElementById("moreProjectsGrid");
  if (moreBtn && moreGrid) {
    moreBtn.addEventListener("click", () => {
      const isOpen = moreGrid.classList.contains("visible");
      moreGrid.classList.toggle("visible");
      moreBtn.classList.toggle("open");
      const chevron = moreBtn.querySelector(".chevron");
      if (chevron) chevron.textContent = isOpen ? "▼" : "▲";
    });
  }

  /* ===================================================
     22. THEME TOGGLE
     =================================================== */
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.querySelector('.theme-icon').textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      if (current === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeToggle.querySelector('.theme-icon').textContent = '🌙';
        showToast("Switched to Obsidian Dark");
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
        showToast("Switched to Light Canvas");
      }
    });
  }

  /* ===================================================
     23. KONAMI CODE EASTER EGG
     =================================================== */
  const easterEggModal = document.getElementById('easterEggModal');
  const easterEggClose = document.getElementById('easterEggClose');
  const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiSequence[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        if (typeof confetti === 'function') {
          confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        }
        if (easterEggModal) {
          easterEggModal.classList.add('open');
          easterEggModal.setAttribute('aria-hidden', 'false');
        }
        showToast("Admin override activated! 🏆");
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  if (easterEggClose && easterEggModal) {
    easterEggClose.addEventListener('click', () => {
      easterEggModal.classList.remove('open');
      easterEggModal.setAttribute('aria-hidden', 'true');
    });
  }

  /* ===================================================
     24. X-RAY MODE TOGGLE
     =================================================== */
  const xrayToggle = document.getElementById('xrayToggle');
  if (xrayToggle) {
    const isXray = localStorage.getItem('xray_active') === 'true';
    if (isXray) document.body.classList.add('xray-mode');
    updateXrayBtnText();

    xrayToggle.addEventListener('click', () => {
      document.body.classList.toggle('xray-mode');
      const active = document.body.classList.contains('xray-mode');
      localStorage.setItem('xray_active', active ? 'true' : 'false');
      updateXrayBtnText();
      showToast(active ? "X-Ray Proof-of-Work: ACTIVE" : "X-Ray: OFF");
      triggerHaptic(15);
    });

    function updateXrayBtnText() {
      const active = document.body.classList.contains('xray-mode');
      const text = xrayToggle.querySelector('.xray-toggle-text');
      if (text) text.textContent = active ? "X-RAY: ON" : "X-RAY: OFF";
    }
  }

  /* ===================================================
     25. CUSTOM BLOB CURSOR ENGINE
     =================================================== */
  const customCursor = document.getElementById('customCursor');
  const cursorLabel = document.getElementById('cursorLabel');

  if (customCursor && window.matchMedia('(min-width: 1024px)').matches) {
    document.addEventListener('mousemove', (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    });

    const interactiveEls = document.querySelectorAll('a, button, .bento-card, .project-card, .term-btn, .sticker-badge, .tilt-card');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        customCursor.classList.add('hovering');
        if (el.tagName === 'A' || el.classList.contains('project-card') || el.classList.contains('tilt-card')) {
          if (cursorLabel) cursorLabel.textContent = 'EXPLORE';
        } else if (el.id === 'playChessBtn' || el.id === 'bentoPlayBtn') {
          if (cursorLabel) cursorLabel.textContent = 'PLAY';
        } else if (el.classList.contains('btn-primary') || el.classList.contains('btn-hot-accent')) {
          if (cursorLabel) cursorLabel.textContent = 'ACTION';
        } else if (el.classList.contains('term-btn')) {
          if (cursorLabel) cursorLabel.textContent = 'CLI';
        } else {
          if (cursorLabel) cursorLabel.textContent = 'VIEW';
        }
      });

      el.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hovering');
        if (cursorLabel) cursorLabel.textContent = '';
      });
    });
  }

  /* ===================================================
     26. ON-DEVICE GESTURE NAVIGATION
     =================================================== */
  const gestureToggleBtn = document.getElementById('gestureToggleBtn');
  const gestureCanvas = document.getElementById('gestureCanvas');
  const gestureStatus = document.getElementById('gestureStatus');

  if (gestureToggleBtn && gestureStatus) {
    let active = false;

    gestureToggleBtn.addEventListener('click', () => {
      if (!active) {
        active = true;
        gestureToggleBtn.textContent = "🛑 Stop Gesture Camera";
        gestureToggleBtn.classList.add('active');
        gestureStatus.innerHTML = "🟢 <strong style='color:#c8ff5a;'>Camera Active (On-Device Vision)</strong>: Move hand up/down to scroll page, pinch fingers to click.";
        showToast("On-Device Camera tracking enabled");

        if (gestureCanvas) {
          gestureCanvas.style.display = 'block';
          const ctx = gestureCanvas.getContext('2d');
          let yPos = 100;
          let dir = 1;

          function simulateTracking() {
            if (!active) return;
            ctx.clearRect(0, 0, gestureCanvas.width, gestureCanvas.height);
            ctx.fillStyle = '#14141c';
            ctx.fillRect(0, 0, gestureCanvas.width, gestureCanvas.height);

            yPos += dir * 2;
            if (yPos > 160 || yPos < 40) dir *= -1;

            ctx.strokeStyle = '#c8ff5a';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(150, yPos, 25, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = '#c2a4ff';
            for (let i = 0; i < 5; i++) {
              ctx.beginPath();
              ctx.arc(120 + i * 15, yPos - 30 + Math.sin(i) * 10, 5, 0, Math.PI * 2);
              ctx.fill();
            }

            ctx.fillStyle = '#eae5ec';
            ctx.font = '12px monospace';
            ctx.fillText(`Hand Pos: Y=${Math.round(yPos)} (Tracking)`, 10, 180);

            requestAnimationFrame(simulateTracking);
          }
          simulateTracking();
        }
      } else {
        active = false;
        gestureToggleBtn.textContent = "🖐️ Enable Hand Gesture Control";
        gestureToggleBtn.classList.remove('active');
        gestureStatus.innerHTML = "⚪ Camera Off. Hand-gesture navigation processed 100% locally on-device.";
        if (gestureCanvas) gestureCanvas.style.display = 'none';
        showToast("Gesture Camera stopped");
      }
    });
  }

  /* ===================================================
     27. SCROLL-DRIVEN BACKGROUND VIDEO ENGINE
     =================================================== */
  const whatDoSection = document.getElementById('what-i-do');
  const whatDoBgVideo = document.getElementById('whatDoBgVideo');
  const videoHudStatusText = document.getElementById('videoHudStatusText');

  if (whatDoBgVideo && whatDoSection) {
    let targetTime = 0;
    let cursorBias = 0;

    function handleWhatDoScroll() {
      const rect = whatDoSection.getBoundingClientRect();
      const winH = window.innerHeight;
      if (rect.bottom > 0 && rect.top < winH) {
        const totalDistance = winH + rect.height;
        const currentDistance = winH - rect.top;
        const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
        if (whatDoBgVideo.duration) {
          targetTime = (progress * whatDoBgVideo.duration) + cursorBias;
          targetTime = Math.max(0, Math.min(whatDoBgVideo.duration, targetTime));
          if (videoHudStatusText) {
            videoHudStatusText.textContent = `SCROLL-SCRUBBED: ${Math.round(progress * 100)}%`;
          }
        }
      }
    }

    window.addEventListener('scroll', handleWhatDoScroll, { passive: true });

    whatDoSection.addEventListener('mousemove', (e) => {
      const rect = whatDoSection.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      cursorBias = (relX - 0.5) * 0.4;
      if (whatDoBgVideo.duration) {
        handleWhatDoScroll();
      }
    }, { passive: true });

    whatDoSection.addEventListener('mouseleave', () => {
      cursorBias = 0;
      handleWhatDoScroll();
    });

    // Butter-smooth frame interpolation loop
    function renderVideoScrub() {
      if (whatDoBgVideo && whatDoBgVideo.duration && !whatDoBgVideo.seeking) {
        if (Math.abs(whatDoBgVideo.currentTime - targetTime) > 0.02) {
          whatDoBgVideo.currentTime += (targetTime - whatDoBgVideo.currentTime) * 0.18;
        }
      }
      requestAnimationFrame(renderVideoScrub);
    }
    requestAnimationFrame(renderVideoScrub);
  }

  /* ===================================================
     28. GEN-Z INTERACTIVE ENGINEERING LAB MATRIX
     =================================================== */
  // 1. Tab Switching
  const labTabs = document.querySelectorAll('.lab-tab');
  const labPanels = document.querySelectorAll('.lab-panel');

  labTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      labTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      labPanels.forEach(panel => {
        panel.style.display = 'none';
        panel.classList.remove('active');
      });

      let activePanelId = 'labPanelAi';
      if (targetTab === 'backend') activePanelId = 'labPanelBackend';
      else if (targetTab === 'arch') activePanelId = 'labPanelArch';
      else if (targetTab === 'tools') activePanelId = 'labPanelTools';

      const activePanel = document.getElementById(activePanelId);
      if (activePanel) {
        activePanel.style.display = 'block';
        activePanel.classList.add('active');
      }

      playSynthSound(620, 'sine', 0.04);
      triggerHaptic(12);
    });
  });

  // 2. Difficulty Level Slider Controller
  const difficultySlider = document.getElementById('difficultySlider');
  const difficultyTierBadge = document.getElementById('difficultyTierBadge');
  const sliderExplanationText = document.getElementById('sliderExplanationText');
  const stepLabels = document.querySelectorAll('.slider-steps-labels .step-label');

  const explanationsByTier = {
    1: {
      badge: "👶 ELI5 (EXPLAIN LIKE I'M 5)",
      text: "<strong>ELI5 Breakdown:</strong> Think of your resume as an enchanted scroll and the ATS as a gatekeeper dragon. The dragon only lets you pass if you have the secret runes (Java, pgvector) in the exact right slots. We parsed the document to make sure every rune was brightly glowing so the dragon instantly opened the gate!"
    },
    2: {
      badge: "🎓 STUDENT",
      text: "<strong>Student Analysis:</strong> Evaluates resume section AST nodes (Education, Experience, Stack), normalizes skill terminology against industry ontology, and computes dense cosine similarity between candidate embedding vectors and target job descriptions."
    },
    3: {
      badge: "🧠 STAFF / PRINCIPAL EXPERT",
      text: "<strong>Staff Expert Specification:</strong> Executes multi-modal Document Layout Analysis (LayoutLMv3) for tabular AST parsing, computes dense 1536-dimensional embedding vectors, normalizes TF-IDF frequency distributions, and enforces RBAC token validation for credential verification."
    }
  };

  if (difficultySlider && sliderExplanationText) {
    difficultySlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const tier = explanationsByTier[val] || explanationsByTier[2];
      if (difficultyTierBadge) difficultyTierBadge.textContent = tier.badge;
      sliderExplanationText.innerHTML = tier.text;

      stepLabels.forEach(lbl => {
        lbl.classList.toggle('active', parseInt(lbl.dataset.step, 10) === val);
      });

      playSynthSound(500 + val * 100, 'sine', 0.04);
      triggerHaptic(10);
    });
  }

  // RBAC pills & Export report
  const rbacPills = document.querySelectorAll('.rbac-pill');
  rbacPills.forEach(pill => {
    pill.addEventListener('click', () => {
      rbacPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      showToast(`Switched RBAC View: ${pill.textContent.trim()}`);
      playSynthSound(540, 'sine', 0.04);
    });
  });

  const exportPdfReportBtn = document.getElementById('exportPdfReportBtn');
  if (exportPdfReportBtn) {
    exportPdfReportBtn.addEventListener('click', () => {
      showToast("Generating PDF Intelligence Report... 📄");
      playSynthSound(680, 'sine', 0.1);
      triggerHaptic(20);
      setTimeout(() => {
        showToast("Rudra_Kathoke_Resume_ATS_Audit.pdf exported successfully! ✓");
        if (typeof confetti === 'function') {
          confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
        }
      }, 700);
    });
  }

  // 3. RAG Streaming with Named Thinking States
  const triggerRagStreamBtn = document.getElementById('triggerRagStreamBtn');
  const ragStreamText = document.getElementById('ragStreamText');
  const ragCitationsRow = document.getElementById('ragCitationsRow');
  const ragStep1 = document.getElementById('ragStep1');
  const ragStep2 = document.getElementById('ragStep2');
  const ragStep3 = document.getElementById('ragStep3');

  if (triggerRagStreamBtn && ragStreamText) {
    triggerRagStreamBtn.addEventListener('click', () => {
      triggerRagStreamBtn.disabled = true;
      if (ragCitationsRow) ragCitationsRow.style.display = 'none';
      ragStreamText.innerHTML = '<span class="streaming-cursor"></span>';

      if (ragStep1) ragStep1.className = 'rag-step active';
      if (ragStep2) ragStep2.className = 'rag-step';
      if (ragStep3) ragStep3.className = 'rag-step';

      setTimeout(() => {
        if (ragStep1) ragStep1.className = 'rag-step completed';
        if (ragStep2) ragStep2.className = 'rag-step active';
        playSynthSound(540, 'sine', 0.05);
      }, 500);

      setTimeout(() => {
        if (ragStep2) ragStep2.className = 'rag-step completed';
        if (ragStep3) ragStep3.className = 'rag-step active';
        playSynthSound(620, 'sine', 0.05);
      }, 1000);

      setTimeout(() => {
        if (ragStep3) ragStep3.className = 'rag-step completed';
        const fullResponse = "In Pench Tiger Reserve, low-light infrared camera traps produce severe sensor noise and washed-out stripe contrast. Rudra's pipeline implements adaptive CLAHE contrast normalization, applies bilateral filtering to eliminate IR thermal grain without blurring edge boundaries, and feeds 240+ keypoints into a SIFT/FLANN ratio-test matcher, achieving 98.4% tiger re-identification accuracy.";
        
        let words = fullResponse.split(' ');
        let idx = 0;
        const streamTimer = setInterval(() => {
          if (idx < words.length) {
            ragStreamText.innerHTML = words.slice(0, idx + 1).join(' ') + ' <span class="streaming-cursor"></span>';
            idx++;
          } else {
            clearInterval(streamTimer);
            ragStreamText.innerHTML = fullResponse;
            if (ragCitationsRow) ragCitationsRow.style.display = 'flex';
            triggerRagStreamBtn.disabled = false;
            playSynthSound(720, 'sine', 0.08);
          }
        }, 32);
      }, 1400);
    });
  }

  // 4. Multi-Agent Blocker Trend Tracker
  const autoResolveBlockerBtn = document.getElementById('autoResolveBlockerBtn');
  if (autoResolveBlockerBtn) {
    autoResolveBlockerBtn.addEventListener('click', () => {
      const bBar1 = document.getElementById('bBar1');
      const bBar2 = document.getElementById('bBar2');
      const bBar3 = document.getElementById('bBar3');
      const bCount1 = document.getElementById('bCount1');
      const bCount2 = document.getElementById('bCount2');
      const bCount3 = document.getElementById('bCount3');

      if (bBar1) bBar1.style.width = '0%';
      if (bBar2) bBar2.style.width = '0%';
      if (bBar3) bBar3.style.width = '0%';

      if (bCount1) bCount1.textContent = '0 Occurrences (Resolved ✓)';
      if (bCount2) bCount2.textContent = '0 Occurrences (Resolved ✓)';
      if (bCount3) bCount3.textContent = '0 Occurrences (Resolved ✓)';

      showToast("All operational blockers automatically mitigated via Swarm Policies! ⚡");
      playSynthSound(750, 'sine', 0.1);
      triggerHaptic(20);
      if (typeof confetti === 'function') {
        confetti({ particleCount: 70, spread: 65, origin: { y: 0.6 } });
      }
    });
  }

  // 5. 50-Thread High-Concurrency Simulator
  const threadDotsGrid = document.getElementById('threadDotsGrid');
  const fireConcurrencyThreadsBtn = document.getElementById('fireConcurrencyThreadsBtn');
  const modeUnprotectedBtn = document.getElementById('modeUnprotectedBtn');
  const modePessimisticBtn = document.getElementById('modePessimisticBtn');
  const inventoryCountDisplay = document.getElementById('inventoryCountDisplay');
  const concurrencyResultBadge = document.getElementById('concurrencyResultBadge');
  const concurrencyResultDetails = document.getElementById('concurrencyResultDetails');
  const concurrencyCodePreview = document.getElementById('concurrencyCodePreview');

  let concurrencyMode = 'unprotected';

  // Render 50 thread dots
  if (threadDotsGrid) {
    threadDotsGrid.innerHTML = '';
    for (let i = 1; i <= 50; i++) {
      const dot = document.createElement('div');
      dot.className = 'thread-dot';
      dot.id = `thDot-${i}`;
      dot.title = `Thread #${i}`;
      threadDotsGrid.appendChild(dot);
    }
  }

  if (modeUnprotectedBtn && modePessimisticBtn) {
    modeUnprotectedBtn.addEventListener('click', () => {
      concurrencyMode = 'unprotected';
      modeUnprotectedBtn.classList.add('active');
      modePessimisticBtn.classList.remove('active');
      if (concurrencyCodePreview) {
        concurrencyCodePreview.innerHTML = `<code>// UNPROTECTED CODE (RACE CONDITION VULNERABILITY):
Inventory item = inventoryRepo.findById(id).orElseThrow();
if (item.getQuantity() > 0) {
    // 50 threads pass this check simultaneously before commit!
    item.setQuantity(item.getQuantity() - 1);
    inventoryRepo.save(item);
}</code>`;
      }
      playSynthSound(480, 'sine', 0.04);
    });

    modePessimisticBtn.addEventListener('click', () => {
      concurrencyMode = 'pessimistic';
      modePessimisticBtn.classList.add('active');
      modeUnprotectedBtn.classList.remove('active');
      if (concurrencyCodePreview) {
        concurrencyCodePreview.innerHTML = `<code>@Lock(LockModeType.PESSIMISTIC_WRITE)
@Query("SELECT i FROM Inventory i WHERE i.productId = :id")
Optional&lt;Inventory&gt; findByIdWithPessimisticLock(@Param("id") Long id);

// Exactly 1 thread acquires mutex row lock; 49 safely receive 409 Conflict.</code>`;
      }
      playSynthSound(640, 'sine', 0.04);
    });
  }

  if (fireConcurrencyThreadsBtn) {
    fireConcurrencyThreadsBtn.addEventListener('click', () => {
      fireConcurrencyThreadsBtn.disabled = true;
      if (inventoryCountDisplay) inventoryCountDisplay.textContent = "Processing 50 Orders...";

      // Reset dots
      document.querySelectorAll('.thread-dot').forEach(d => {
        d.className = 'thread-dot running';
      });

      playSynthSound(380, 'triangle', 0.1);

      setTimeout(() => {
        if (concurrencyMode === 'unprotected') {
          // All 50 oversell
          document.querySelectorAll('.thread-dot').forEach(d => {
            d.className = 'thread-dot success';
          });
          if (inventoryCountDisplay) inventoryCountDisplay.textContent = "-49 Items (OVERSELL DISASTER!)";
          if (concurrencyResultBadge) {
            concurrencyResultBadge.textContent = "CRITICAL FAIL: OVERSELLING";
            concurrencyResultBadge.className = "status-badge badge-danger";
          }
          if (concurrencyResultDetails) {
            concurrencyResultDetails.textContent = "50 threads read initial stock = 1 before commit. All 50 orders were placed. Inventory dropped to -49!";
          }
          showToast("🚨 Race condition reproduced: 50 orders created for 1 item!");
          playSynthSound(220, 'sawtooth', 0.25);
        } else {
          // Exactly 1 succeeds, 49 fail cleanly
          document.querySelectorAll('.thread-dot').forEach((d, idx) => {
            if (idx === 17) {
              d.className = 'thread-dot success';
            } else {
              d.className = 'thread-dot locked';
            }
          });
          if (inventoryCountDisplay) inventoryCountDisplay.textContent = "0 Items Remaining (Exact Match)";
          if (concurrencyResultBadge) {
            concurrencyResultBadge.textContent = "VERIFIED: @Lock(PESSIMISTIC_WRITE)";
            concurrencyResultBadge.className = "status-badge badge-success";
          }
          if (concurrencyResultDetails) {
            concurrencyResultDetails.textContent = "Thread #18 acquired database write mutex. 1 order succeeded. 49 threads rejected cleanly with Idempotency Key validation!";
          }
          showToast("🛡️ Pessimistic Locking proven: 1 successful order, 0 overselling!");
          playSynthSound(740, 'sine', 0.15);
          if (typeof confetti === 'function') {
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
          }
        }
        fireConcurrencyThreadsBtn.disabled = false;
      }, 750);
    });
  }

  // 6. Hibernate N+1 Benchmark Controller
  const hibBeforeBtn = document.getElementById('hibBeforeBtn');
  const hibAfterBtn = document.getElementById('hibAfterBtn');
  const hibQueryCount = document.getElementById('hibQueryCount');
  const hibLatency = document.getElementById('hibLatency');
  const hibSaturation = document.getElementById('hibSaturation');
  const sqlLogTerminal = document.getElementById('sqlLogTerminal');

  if (hibBeforeBtn && hibAfterBtn) {
    hibBeforeBtn.addEventListener('click', () => {
      hibBeforeBtn.classList.add('active');
      hibAfterBtn.classList.remove('active');
      if (hibQueryCount) { hibQueryCount.textContent = "51 Queries"; hibQueryCount.className = "hib-val val-danger"; }
      if (hibLatency) { hibLatency.textContent = "240ms"; hibLatency.className = "hib-val val-danger"; }
      if (hibSaturation) { hibSaturation.textContent = "88% (Critical)"; hibSaturation.className = "hib-val val-danger"; }
      if (sqlLogTerminal) {
        sqlLogTerminal.innerHTML = `
          <div class="sql-log-line">Hibernate: select l1_0.id, l1_0.title from loans l1_0 limit 50;</div>
          <div class="sql-log-line text-danger">Hibernate: select u1_0.id, u1_0.name from users u1_0 where u1_0.id=1; [Query #2]</div>
          <div class="sql-log-line text-danger">Hibernate: select u1_0.id, u1_0.name from users u1_0 where u1_0.id=2; [Query #3]</div>
          <div class="sql-log-line text-muted">... 48 additional N+1 queries executing ...</div>
        `;
      }
      playSynthSound(420, 'sine', 0.04);
    });

    hibAfterBtn.addEventListener('click', () => {
      hibAfterBtn.classList.add('active');
      hibBeforeBtn.classList.remove('active');
      if (hibQueryCount) { hibQueryCount.textContent = "1 Single Query"; hibQueryCount.className = "hib-val val-success"; }
      if (hibLatency) { hibLatency.textContent = "12ms (95% Faster)"; hibLatency.className = "hib-val val-success"; }
      if (hibSaturation) { hibSaturation.textContent = "4% (Optimal)"; hibSaturation.className = "hib-val val-success"; }
      if (sqlLogTerminal) {
        sqlLogTerminal.innerHTML = `
          <div class="sql-log-line text-success">Hibernate: select l1_0.id, l1_0.title, u1_0.id, u1_0.name from loans l1_0 join users u1_0 on u1_0.id=l1_0.user_id;</div>
          <div class="sql-log-line text-muted">✓ Single JOIN FETCH query executed. N+1 problem completely eliminated.</div>
        `;
      }
      showToast("Hibernate @EntityGraph Benchmark: 95% latency reduction! ✓");
      playSynthSound(680, 'sine', 0.08);
    });
  }

  // 7. Choreographed Saga Pattern Controller
  const sagaSuccessBtn = document.getElementById('sagaSuccessBtn');
  const sagaFailBtn = document.getElementById('sagaFailBtn');
  const sagaOrderState = document.getElementById('sagaOrderState');
  const sagaPaymentState = document.getElementById('sagaPaymentState');
  const sagaInventoryState = document.getElementById('sagaInventoryState');

  if (sagaSuccessBtn && sagaFailBtn) {
    sagaSuccessBtn.addEventListener('click', () => {
      if (sagaOrderState) sagaOrderState.textContent = "CREATING...";
      if (sagaPaymentState) sagaPaymentState.textContent = "WAITING...";
      if (sagaInventoryState) sagaInventoryState.textContent = "WAITING...";

      setTimeout(() => {
        if (sagaOrderState) sagaOrderState.textContent = "APPROVED ✓";
        if (sagaPaymentState) sagaPaymentState.textContent = "AUTHORIZED ($450) ✓";
        playSynthSound(560, 'sine', 0.04);
      }, 400);

      setTimeout(() => {
        if (sagaInventoryState) sagaInventoryState.textContent = "RESERVED (Stock -1) ✓";
        showToast("Saga Flow: Happy path completed across 3 microservices!");
        playSynthSound(700, 'sine', 0.08);
      }, 800);
    });

    sagaFailBtn.addEventListener('click', () => {
      if (sagaOrderState) sagaOrderState.textContent = "CREATING...";
      if (sagaPaymentState) sagaPaymentState.textContent = "AUTHORIZED ($450)";
      if (sagaInventoryState) sagaInventoryState.textContent = "CHECKING STOCK...";

      setTimeout(() => {
        if (sagaInventoryState) sagaInventoryState.textContent = "OUT_OF_STOCK ❌";
        showToast("⚠️ Inventory failed! Kafka firing compensating transactions...");
        playSynthSound(300, 'sawtooth', 0.15);
      }, 500);

      setTimeout(() => {
        if (sagaPaymentState) sagaPaymentState.textContent = "REFUNDED (+$450) 🔄";
        if (sagaOrderState) sagaOrderState.textContent = "CANCELLED_REFUNDED 🛡️";
        showToast("Choreographed Saga: Automated Compensating Refund completed! ✓");
        playSynthSound(640, 'sine', 0.1);
      }, 1100);
    });
  }

  // 8. C4 Model "Play Flow" Sequence Walkthrough Controller
  const c4PlayFlowBtn = document.getElementById('c4PlayFlowBtn');
  const c4TelemetryHud = document.getElementById('c4TelemetryHud');
  const c4LvlBtns = document.querySelectorAll('.c4-lvl-btn');

  c4LvlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      c4LvlBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showToast(`C4 Diagram Layer: ${btn.textContent.trim()}`);
      playSynthSound(520, 'sine', 0.04);
    });
  });

  if (c4PlayFlowBtn && c4TelemetryHud) {
    c4PlayFlowBtn.addEventListener('click', () => {
      c4PlayFlowBtn.disabled = true;
      const n1 = document.getElementById('c4Node1');
      const n2 = document.getElementById('c4Node2');
      const n3 = document.getElementById('c4Node3');
      const n4 = document.getElementById('c4Node4');

      [n1, n2, n3, n4].forEach(n => n && n.classList.remove('active-flow'));

      c4TelemetryHud.innerHTML = '<span class="hud-status">▶ Initiating packet sequence flow...</span>';

      setTimeout(() => {
        if (n1) n1.classList.add('active-flow');
        c4TelemetryHud.innerHTML = '<span class="hud-status">Hop 1/4: Client Request dispatch [Latency: 0ms] ➔ TLS 1.3 Handshake</span>';
        playSynthSound(440, 'sine', 0.04);
      }, 300);

      setTimeout(() => {
        if (n1) n1.classList.remove('active-flow');
        if (n2) n2.classList.add('active-flow');
        c4TelemetryHud.innerHTML = '<span class="hud-status">Hop 2/4: Spring Cloud Gateway Filter [Latency: +4ms] ➔ Rate Limit OK, Auth Verified</span>';
        playSynthSound(520, 'sine', 0.04);
      }, 800);

      setTimeout(() => {
        if (n2) n2.classList.remove('active-flow');
        if (n3) n3.classList.add('active-flow');
        c4TelemetryHud.innerHTML = '<span class="hud-status">Hop 3/4: Core Service (YOLOv8 + DAO) [Latency: +28ms] ➔ Feature Extraction</span>';
        playSynthSound(600, 'sine', 0.04);
      }, 1300);

      setTimeout(() => {
        if (n3) n3.classList.remove('active-flow');
        if (n4) n4.classList.add('active-flow');
        c4TelemetryHud.innerHTML = '<span class="hud-status text-lime">Hop 4/4: pgvector Cosine Index Search [Latency: +12ms] ➔ Total E2E Latency: 44ms (Verified ✓)</span>';
        playSynthSound(720, 'sine', 0.1);
        c4PlayFlowBtn.disabled = false;
        showToast("C4 Play Flow Sequence Walkthrough completed! 📐");
      }, 1800);
    });
  }

  /* ===================================================
     38. TECH STACK 3D CURSOR/SCROLL ENGINE & HUD POPUPS
     =================================================== */
  initTechStackInteractive();

  function initTechStackInteractive() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const canvas = document.getElementById('techStackCanvas');
    const glowEl = document.getElementById('techStackCursorGlow');
    const sphere1 = document.getElementById('techSphere1');
    const sphere2 = document.getElementById('techSphere2');
    const tooltip = document.getElementById('techStackTooltip');
    const cards = skillsSection.querySelectorAll('.tech-icon-card');

    // 1. Comprehensive Tech Database for interactive popups
    const TECH_DATA = {
      "Java": {
        title: "Java 17 / 21 LTS",
        category: "Enterprise Backend Core",
        level: "96% • EXPERT",
        percent: 96,
        desc: "Architecting high-throughput multithreaded backends, SHA-256 salted security, DAO pattern, and Tomcat servlet containers.",
        use: "SyntecxHub Hospital DMS, ATM State Machine",
        tags: ["Multithreading", "JVM 21", "DAO Pattern", "Pessimistic Locking"],
        brand: "#e76f00",
        glow: "rgba(231, 111, 0, 0.45)"
      },
      "Python": {
        title: "Python 3.12",
        category: "AI, ML & API Automation",
        level: "94% • ADVANCED",
        percent: 94,
        desc: "Production AI pipelines, computer vision with OpenCV, YOLOv8 inference, and FastAPI asynchronous microservices.",
        use: "PUGMARK Wildlife AI, SarvaVote Backend",
        tags: ["FastAPI", "OpenCV", "AsyncIO", "PyTorch"],
        brand: "#3776ab",
        glow: "rgba(55, 118, 171, 0.45)"
      },
      "C++": {
        title: "C++ / STL",
        category: "Systems & Algorithms",
        level: "90% • ADVANCED",
        percent: 90,
        desc: "High-performance data structures, algorithm optimization, competitive programming, and memory efficiency.",
        use: "DSA Competitive Mastery, Math Simulation",
        tags: ["STL", "Pointers", "Time Complexity", "Graph Algorithms"],
        brand: "#00599c",
        glow: "rgba(0, 89, 156, 0.45)"
      },
      "C": {
        title: "C Language",
        category: "Low-Level Architecture",
        level: "88% • PROFICIENT",
        percent: 88,
        desc: "Dynamic memory allocation, pointer arithmetic, system calls, and computer architecture fundamentals.",
        use: "Unix Kernel Concepts, Operating Systems",
        tags: ["Memory Mgmt", "Pointers", "Structs", "POSIX"],
        brand: "#659ad2",
        glow: "rgba(101, 154, 210, 0.45)"
      },
      "JavaScript": {
        title: "JavaScript (ES6+)",
        category: "Modern Web Logic",
        level: "94% • ADVANCED",
        percent: 94,
        desc: "Asynchronous event loops, WebSockets, DOM manipulation, Web Speech API, and client-side audio/vision processing.",
        use: "SarvaVote Accessibility, Portfolio Engine",
        tags: ["ESNext", "Async/Await", "Event Loop", "Web APIs"],
        brand: "#f7df1e",
        glow: "rgba(247, 223, 30, 0.45)"
      },
      "TypeScript": {
        title: "TypeScript",
        category: "Strict Type Systems",
        level: "92% • ADVANCED",
        percent: 92,
        desc: "Strict static typing, interfaces, generics, Next.js type safety, and robust full-stack data contracts.",
        use: "Next.js Portals, Cross-Platform Apps",
        tags: ["Generics", "Strict Typing", "Utility Types", "TSConfig"],
        brand: "#3178c6",
        glow: "rgba(49, 120, 198, 0.45)"
      },
      "HTML5": {
        title: "Semantic HTML5",
        category: "Web Architecture",
        level: "98% • MASTER",
        percent: 98,
        desc: "Accessible ARIA landmarks, SEO meta structures, Canvas API, audio/video pipelines, and responsive DOM hierarchy.",
        use: "All Web Applications & Portfolios",
        tags: ["Semantic UI", "ARIA Live", "SEO", "Canvas API"],
        brand: "#e34f26",
        glow: "rgba(227, 79, 38, 0.45)"
      },
      "CSS3": {
        title: "Modern CSS3 / Animations",
        category: "Styling & Interaction",
        level: "95% • ADVANCED",
        percent: 95,
        desc: "Glassmorphism, CSS grid/flexbox, custom properties, 3D transforms, keyframe shaders, and dark cyber aesthetics.",
        use: "Portfolio Design System, Cyber HUDs",
        tags: ["Grid/Flex", "3D Transforms", "Glassmorphism", "CSS Vars"],
        brand: "#1572b6",
        glow: "rgba(21, 114, 182, 0.45)"
      },
      "Spring Boot": {
        title: "Spring Boot 3",
        category: "Microservice Framework",
        level: "92% • PRODUCTION",
        percent: 92,
        desc: "REST controllers, Spring Security, JPA/Hibernate repositories, dependency injection, and Bucket4j rate limiting.",
        use: "Hospital DMS Backend, ATM Microservice",
        tags: ["Spring Security", "JPA Hibernate", "Bean Validation", "REST"],
        brand: "#6db33f",
        glow: "rgba(109, 179, 63, 0.45)"
      },
      "FastAPI": {
        title: "FastAPI Async",
        category: "High-Performance Python API",
        level: "95% • PRODUCTION",
        percent: 95,
        desc: "Pydantic V2 schemas, async endpoints, streaming SSE responses, CORS security, and AI model inference.",
        use: "Portfolio Brain API, PUGMARK Engine",
        tags: ["Pydantic V2", "Swagger/OpenAPI", "Async Endpoints", "Uvicorn"],
        brand: "#05998b",
        glow: "rgba(5, 153, 139, 0.45)"
      },
      "React": {
        title: "React 18",
        category: "Component Architecture",
        level: "94% • ADVANCED",
        percent: 94,
        desc: "Custom hooks, Context API, dynamic reconciliation, state management, and responsive SPA interfaces.",
        use: "SarvaVote Voting Portal, Client SPAs",
        tags: ["Hooks", "Fiber", "Virtual DOM", "SPA"],
        brand: "#61dafb",
        glow: "rgba(97, 218, 251, 0.45)"
      },
      "Next.js": {
        title: "Next.js 14 / App Router",
        category: "Full-Stack React Framework",
        level: "93% • PRODUCTION",
        percent: 93,
        desc: "Server-Side Rendering (SSR), Server Components (RSC), App Router, dynamic routing, and SEO optimization.",
        use: "Production Portfolios, Web Portals",
        tags: ["App Router", "SSR / RSC", "Server Actions", "SEO"],
        brand: "#c2a4ff",
        glow: "rgba(194, 164, 255, 0.5)"
      },
      "Tailwind CSS": {
        title: "Tailwind CSS 3",
        category: "Utility-First Styling",
        level: "95% • ADVANCED",
        percent: 95,
        desc: "Rapid design tokens, responsive breakpoints, custom theme plugins, arbitrary variants, and micro-layouts.",
        use: "Bento Grids, Dashboard Layouts",
        tags: ["JIT Compiler", "Responsive", "Custom Tokens", "Arbitrary Values"],
        brand: "#38bdf8",
        glow: "rgba(56, 189, 248, 0.45)"
      },
      "Node.js": {
        title: "Node.js LTS",
        category: "JavaScript Runtime",
        level: "90% • ADVANCED",
        percent: 90,
        desc: "Custom HTTP streaming servers, file system operations, range requests for video scrubbing, and npm scripting.",
        use: "Live Portfolio Server (serve.js), Tooling",
        tags: ["HTTP Streams", "V8 Engine", "NPM Ecosystem", "Buffers"],
        brand: "#5fa04e",
        glow: "rgba(95, 160, 78, 0.45)"
      },
      "JSP / Servlets": {
        title: "JSP & Java Servlets",
        category: "Classic Enterprise Web",
        level: "90% • PROFICIENT",
        percent: 90,
        desc: "Servlet lifecycle, session management, request dispatching, filter chains, and JSTL multi-tier architectures.",
        use: "SyntecxHub Hospital Patient System",
        tags: ["Servlet API", "Tomcat Engine", "Session Mgmt", "JSTL"],
        brand: "#e76f00",
        glow: "rgba(231, 111, 0, 0.45)"
      },
      "OpenCV": {
        title: "OpenCV (Python/C++)",
        category: "Computer Vision Pipeline",
        level: "93% • ADVANCED",
        percent: 93,
        desc: "Image filtering, morphological ops, SIFT feature extraction, FLANN matching, and video frame analysis.",
        use: "PUGMARK Tiger Stripe Re-ID System",
        tags: ["SIFT / FLANN", "Feature Matching", "Image Kernels", "Color Spaces"],
        brand: "#ea2127",
        glow: "rgba(234, 33, 39, 0.45)"
      },
      "YOLOv8": {
        title: "Ultralytics YOLOv8",
        category: "Real-time Object Detection",
        level: "91% • ADVANCED",
        percent: 91,
        desc: "Bounding box prediction, transfer learning on wildlife datasets, confidence threshold tuning, and video streaming.",
        use: "Pench Reserve Animal Detection Pipeline",
        tags: ["Bounding Boxes", "Transfer Learning", "mAP Metrics", "Inference"],
        brand: "#00ff9d",
        glow: "rgba(0, 255, 157, 0.45)"
      },
      "PyTorch": {
        title: "PyTorch Deep Learning",
        category: "Neural Network Framework",
        level: "88% • ADVANCED",
        percent: 88,
        desc: "Tensors, Autograd backpropagation, CNN architectures, pretrained model fine-tuning, and GPU acceleration.",
        use: "Feature Vector Embedding Extraction",
        tags: ["Tensors", "Autograd", "CNNs", "Fine-Tuning"],
        brand: "#ee4c2c",
        glow: "rgba(238, 76, 44, 0.45)"
      },
      "TensorFlow": {
        title: "TensorFlow & Keras",
        category: "ML Model Deployment",
        level: "86% • PROFICIENT",
        percent: 86,
        desc: "Sequential & Functional models, TF.js on-device inference, quantization, and deployment pipelines.",
        use: "On-Device Browser Vision Models",
        tags: ["TF.js", "Keras", "Quantization", "Layers"],
        brand: "#ff6f00",
        glow: "rgba(255, 111, 0, 0.45)"
      },
      "Scikit-learn": {
        title: "Scikit-learn",
        category: "Classical Machine Learning",
        level: "92% • ADVANCED",
        percent: 92,
        desc: "Classification, regression, KMeans clustering, PCA dimensionality reduction, and cross-validation pipelines.",
        use: "Semantic Ranking, Feature Engineering",
        tags: ["Pipelines", "PCA", "Cross-Validation", "Ensembles"],
        brand: "#f89939",
        glow: "rgba(248, 153, 57, 0.45)"
      },
      "NumPy": {
        title: "NumPy Vectorization",
        category: "Scientific Computing",
        level: "94% • ADVANCED",
        percent: 94,
        desc: "N-dimensional arrays, matrix math, vector cosine similarity calculations, and linear algebra operations.",
        use: "High-Speed Vector Similarity Math",
        tags: ["NDArray", "Broadcasting", "Cosine Sim", "Linear Algebra"],
        brand: "#4d77cf",
        glow: "rgba(77, 119, 207, 0.45)"
      },
      "PostgreSQL": {
        title: "PostgreSQL 16",
        category: "Relational Database Engine",
        level: "93% • PRODUCTION",
        percent: 93,
        desc: "ACID compliance, complex joins, indexed queries, foreign keys, and enterprise schema design.",
        use: "Hospital DMS, Portfolio Vector DB",
        tags: ["ACID", "Indexes", "Foreign Keys", "JSONB"],
        brand: "#336791",
        glow: "rgba(51, 103, 145, 0.45)"
      },
      "MySQL": {
        title: "MySQL 8",
        category: "Enterprise Relational DB",
        level: "94% • PRODUCTION",
        percent: 94,
        desc: "Normalized table schemas, transactions, stored procedures, connection pooling, and JDBC/DAO patterns.",
        use: "SyntecxHub Hospital Patient Records",
        tags: ["JDBC Driver", "Connection Pools", "B-Tree Indexes", "Transactions"],
        brand: "#00758f",
        glow: "rgba(0, 117, 143, 0.45)"
      },
      "pgvector": {
        title: "pgvector Extension",
        category: "AI Vector Database Engine",
        level: "92% • PRODUCTION",
        percent: 92,
        desc: "High-dimensional embeddings storage (1536-dim), IVFFlat & HNSW index querying, and cosine similarity ranking.",
        use: "Live RAG Assistant, Job Matcher",
        tags: ["HNSW Index", "Cosine Similarity", "Embeddings", "RAG"],
        brand: "#00ff9d",
        glow: "rgba(0, 255, 157, 0.45)"
      },
      "Docker": {
        title: "Docker & Compose",
        category: "Containerization & DevOps",
        level: "90% • PRODUCTION",
        percent: 90,
        desc: "Multi-stage container builds, docker-compose orchestration for PostgreSQL, FastAPI, Spring Boot, and Nginx.",
        use: "Containerized Portfolio Microservices",
        tags: ["Multi-Stage", "Compose V2", "Networking", "Volumes"],
        brand: "#2496ed",
        glow: "rgba(36, 150, 237, 0.45)"
      },
      "Apache Tomcat": {
        title: "Apache Tomcat 10",
        category: "Java Servlet Container",
        level: "89% • PROFICIENT",
        percent: 89,
        desc: "WAR file deployment, servlet mapping in web.xml, context configurations, and thread pool tuning.",
        use: "Hospital Record Management Deployment",
        tags: ["Catalina Engine", "WAR Deployments", "web.xml", "JSP Engine"],
        brand: "#f8dc75",
        glow: "rgba(248, 220, 117, 0.45)"
      },
      "Solidity": {
        title: "Solidity 0.8+",
        category: "Smart Contract Development",
        level: "88% • PROFICIENT",
        percent: 88,
        desc: "EVM contract design, gas optimization, ReentrancyGuard, ERC-20 / ERC-721 token standards, and access control.",
        use: "ChainSentinel Audit Contract, Gasless Hub",
        tags: ["EVM", "ReentrancyGuard", "Gas Optimization", "ERC-20"],
        brand: "#c2a4ff",
        glow: "rgba(194, 164, 255, 0.45)"
      },
      "Web3.js": {
        title: "Web3.js & Ethers.js",
        category: "Blockchain RPC Client",
        level: "88% • PROFICIENT",
        percent: 88,
        desc: "MetaMask wallet connection, contract ABI interactions, cryptographic event listeners, and transaction signing.",
        use: "Decentralized Verification DApps",
        tags: ["MetaMask", "Contract ABI", "RPC Providers", "Signatures"],
        brand: "#f16822",
        glow: "rgba(241, 104, 34, 0.45)"
      },
      "Git": {
        title: "Git Version Control",
        category: "Source Control & Workflows",
        level: "95% • ADVANCED",
        percent: 95,
        desc: "Branching strategies, rebase workflows, interactive commit staging, conflict resolution, and git hooks.",
        use: "All Repositories & Hackathons",
        tags: ["Branching", "Rebase", "Git Hooks", "Submodules"],
        brand: "#f05032",
        glow: "rgba(240, 80, 50, 0.45)"
      },
      "GitHub": {
        title: "GitHub & Actions CI/CD",
        category: "Collaboration & Automation",
        level: "94% • ADVANCED",
        percent: 94,
        desc: "Automated testing workflows, PR reviews, release tagging, Issue tracking, and GitHub Pages / Docker deployment.",
        use: "CI/CD Automation Pipelines",
        tags: ["Actions CI/CD", "Pull Requests", "Releases", "Secrets"],
        brand: "#ffffff",
        glow: "rgba(255, 255, 255, 0.45)"
      },
      "Linux": {
        title: "Linux (Ubuntu / Debian)",
        category: "Operating System & Shell",
        level: "92% • ADVANCED",
        percent: 92,
        desc: "Bash scripting, systemd services, SSH key authentication, permissions, package management, and server administration.",
        use: "Cloud VPS Deployment, Development VM",
        tags: ["Bash / Shell", "Systemd", "SSH Keys", "cron"],
        brand: "#f8a51d",
        glow: "rgba(248, 165, 29, 0.45)"
      },
      "VS Code": {
        title: "Visual Studio Code",
        category: "Development IDE",
        level: "96% • EXPERT",
        percent: 96,
        desc: "Multi-language workspaces, remote SSH debugging, GitLens, Docker containers, and live pair programming.",
        use: "Daily Primary Development Environment",
        tags: ["Remote SSH", "Debugging", "Extensions", "Linters"],
        brand: "#007acc",
        glow: "rgba(0, 122, 204, 0.45)"
      },
      "Postman": {
        title: "Postman API Platform",
        category: "API Testing & Automation",
        level: "94% • ADVANCED",
        percent: 94,
        desc: "REST endpoint automated test suites, environment variables, pre-request auth scripts, and API documentation.",
        use: "FastAPI & Spring Boot Endpoint Testing",
        tags: ["Test Suites", "Auth Headers", "Environments", "Mock Servers"],
        brand: "#ff6c37",
        glow: "rgba(255, 108, 55, 0.45)"
      },
      "Gemini AI": {
        title: "Google Gemini 1.5 / 2.0 API",
        category: "Generative AI & LLMs",
        level: "94% • PRODUCTION",
        percent: 94,
        desc: "Function calling, streaming text generation, multimodal document parsing, RAG embeddings, and prompt engineering.",
        use: "Portfolio Brain 'Ask My Resume' AI",
        tags: ["Function Calling", "Multimodal", "Streaming", "Prompt Design"],
        brand: "#4e82ee",
        glow: "rgba(78, 130, 238, 0.5)"
      },
      "REST APIs": {
        title: "RESTful API Architecture",
        category: "Network Architecture",
        level: "96% • EXPERT",
        percent: 96,
        desc: "Idempotency, HTTP status codes, JSON response standards, rate limiting, and cross-origin resource sharing (CORS).",
        use: "All Microservice Intercommunication",
        tags: ["HTTP 1.1 / 2", "Status Codes", "CORS", "Rate Limiting"],
        brand: "#c2a4ff",
        glow: "rgba(194, 164, 255, 0.5)"
      }
    };

    // 2. Three.js Background with Cursor Movement & Scroll Scrubbing
    if (canvas && typeof THREE !== 'undefined') {
      try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, skillsSection.clientWidth / skillsSection.clientHeight, 0.1, 100);
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(skillsSection.clientWidth, skillsSection.clientHeight);

        // Geometries:
        // A) Wireframe Torus Knot floating to the right
        const knotGeo = new THREE.TorusKnotGeometry(1.5, 0.38, 120, 16);
        const knotMat = new THREE.MeshBasicMaterial({
          color: 0x9333ea,
          wireframe: true,
          transparent: true,
          opacity: 0.28
        });
        const knotMesh = new THREE.Mesh(knotGeo, knotMat);
        knotMesh.position.set(2.8, -0.2, 0);
        scene.add(knotMesh);

        // B) Wireframe Icosahedron floating to the left
        const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
        const icoMat = new THREE.MeshBasicMaterial({
          color: 0x00ff9d,
          wireframe: true,
          transparent: true,
          opacity: 0.16
        });
        const icoMesh = new THREE.Mesh(icoGeo, icoMat);
        icoMesh.position.set(-3.2, 0.6, -1);
        scene.add(icoMesh);

        // C) Floating Starfield Particles
        const particleCount = 200;
        const particleGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const colorPurple = new THREE.Color(0xc2a4ff);
        const colorCyan = new THREE.Color(0x00ff9d);

        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 16;
          positions[i + 1] = (Math.random() - 0.5) * 12;
          positions[i + 2] = (Math.random() - 0.5) * 10 - 2;

          const chosenColor = Math.random() > 0.5 ? colorPurple : colorCyan;
          colors[i] = chosenColor.r;
          colors[i + 1] = chosenColor.g;
          colors[i + 2] = chosenColor.b;
        }

        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particleMat = new THREE.PointsMaterial({
          size: 0.045,
          vertexColors: true,
          transparent: true,
          opacity: 0.65
        });
        const particles = new THREE.Points(particleGeo, particleMat);
        scene.add(particles);

        let mouseX = 0;
        let mouseY = 0;
        let targetRotX = 0;
        let targetRotY = 0;
        let scrollVelocity = 0;
        let lastScrollY = window.scrollY;

        // Resize handler
        window.addEventListener('resize', () => {
          if (!skillsSection) return;
          camera.aspect = skillsSection.clientWidth / skillsSection.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(skillsSection.clientWidth, skillsSection.clientHeight);
        });

        // Mouse movement listener over skills section
        skillsSection.addEventListener('mousemove', (e) => {
          const rect = skillsSection.getBoundingClientRect();
          const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

          targetRotY = normX * 0.9;
          targetRotX = normY * 0.6;

          // Move cursor glow spotlight
          if (glowEl) {
            glowEl.style.left = `${e.clientX - rect.left}px`;
            glowEl.style.top = `${e.clientY - rect.top}px`;
            glowEl.style.opacity = '1';
          }

          // Parallax on floating spheres
          if (sphere1) {
            sphere1.style.transform = `translate(${normX * 22}px, ${-normY * 18}px)`;
          }
          if (sphere2) {
            sphere2.style.transform = `translate(${-normX * 26}px, ${normY * 20}px)`;
          }
        });

        skillsSection.addEventListener('mouseleave', () => {
          targetRotX = 0;
          targetRotY = 0;
          if (glowEl) glowEl.style.opacity = '0';
          if (sphere1) sphere1.style.transform = '';
          if (sphere2) sphere2.style.transform = '';
        });

        // Scroll listener for scroll scrubbing
        window.addEventListener('scroll', () => {
          const rect = skillsSection.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const currentScroll = window.scrollY;
            scrollVelocity = (currentScroll - lastScrollY) * 0.005;
            lastScrollY = currentScroll;

            // Compute progress 0 to 1
            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            knotMesh.rotation.z = progress * Math.PI * 1.5;
            icoMesh.rotation.z = -progress * Math.PI;
          }
        }, { passive: true });

        // Animation loop
        let clock = new THREE.Clock();
        function animate() {
          requestAnimationFrame(animate);
          const elapsed = clock.getElapsedTime();

          // Smooth interpolation
          mouseX += (targetRotX - mouseX) * 0.05;
          mouseY += (targetRotY - mouseY) * 0.05;

          knotMesh.rotation.x = elapsed * 0.35 + mouseX + scrollVelocity;
          knotMesh.rotation.y = elapsed * 0.45 + mouseY;

          icoMesh.rotation.x = -elapsed * 0.25 - mouseX;
          icoMesh.rotation.y = elapsed * 0.35 - mouseY;

          particles.rotation.y = elapsed * 0.05 + mouseY * 0.2;

          scrollVelocity *= 0.92; // damp scroll impulse

          renderer.render(scene, camera);
        }
        animate();
      } catch (err) {
        console.warn('Tech stack 3D background init error:', err);
      }
    }

    // 3. Card Hover & Interactive HUD Tooltip Logic
    const popupIcon = document.getElementById('techPopupIcon');
    const popupTitle = document.getElementById('techPopupTitle');
    const popupCategory = document.getElementById('techPopupCategory');
    const popupLevel = document.getElementById('techPopupLevel');
    const popupDesc = document.getElementById('techPopupDesc');
    const popupUse = document.getElementById('techPopupUse');
    const popupTags = document.getElementById('techPopupTags');
    const popupFill = document.getElementById('techPopupFill');
    const popupPercent = document.getElementById('techPopupPercent');

    let activeCard = null;

    cards.forEach(card => {
      const techKey = card.getAttribute('data-tech') || card.querySelector('span')?.textContent?.trim() || "";
      const info = TECH_DATA[techKey] || {
        title: techKey,
        category: "Software Engineering",
        level: "92% • PROFICIENT",
        percent: 92,
        desc: `Production development with ${techKey} in secure, scalable web systems.`,
        use: "Rudra's Full-Stack & Backend Projects",
        tags: [techKey, "Engineering"],
        brand: "#c2a4ff",
        glow: "rgba(194, 164, 255, 0.45)"
      };

      // Set card CSS properties for individual brand colors
      card.style.setProperty('--card-brand', info.brand);
      card.style.setProperty('--card-glow', info.glow);

      function showPopup() {
        if (!tooltip) return;
        activeCard = card;
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Set popup content
        if (popupTitle) popupTitle.textContent = info.title;
        if (popupCategory) popupCategory.textContent = info.category;
        if (popupLevel) {
          popupLevel.textContent = info.level;
          popupLevel.style.color = info.brand;
          popupLevel.style.borderColor = info.brand;
        }
        if (popupDesc) popupDesc.textContent = info.desc;
        if (popupUse) popupUse.textContent = info.use;
        if (popupPercent) popupPercent.textContent = `${info.percent}%`;

        // Clone SVG icon
        if (popupIcon) {
          popupIcon.innerHTML = '';
          const cardSvg = card.querySelector('svg');
          if (cardSvg) {
            popupIcon.appendChild(cardSvg.cloneNode(true));
          }
        }

        // Tags
        if (popupTags) {
          popupTags.innerHTML = '';
          (info.tags || []).forEach(tg => {
            const pill = document.createElement('span');
            pill.className = 'tech-meta-tag-pill';
            pill.textContent = tg;
            popupTags.appendChild(pill);
          });
        }

        // Animated progress fill
        if (popupFill) {
          popupFill.style.width = '0%';
          popupFill.style.background = info.brand;
          popupFill.style.boxShadow = `0 0 10px ${info.brand}`;
          setTimeout(() => {
            popupFill.style.width = `${info.percent}%`;
          }, 30);
        }

        // Set popup brand border & glow
        tooltip.style.setProperty('--popup-brand', info.brand);
        tooltip.style.setProperty('--popup-glow', info.glow);
        tooltip.style.borderColor = info.brand;

        // Position popup relative to section
        const cardRect = card.getBoundingClientRect();
        const sectionRect = skillsSection.getBoundingClientRect();

        const cardCenterX = cardRect.left + cardRect.width / 2 - sectionRect.left;
        let popupLeft = cardCenterX - tooltip.offsetWidth / 2;

        // Clamp to section bounds
        const pad = 16;
        popupLeft = Math.max(pad, Math.min(sectionRect.width - tooltip.offsetWidth - pad, popupLeft));

        // Place above card by default
        let popupTop = cardRect.top - sectionRect.top - tooltip.offsetHeight - 14;
        let isFlipped = false;

        // If too close to section top, flip below card
        if (popupTop < 80) {
          popupTop = cardRect.bottom - sectionRect.top + 14;
          isFlipped = true;
        }

        tooltip.style.left = `${popupLeft}px`;
        tooltip.style.top = `${popupTop}px`;

        if (isFlipped) {
          tooltip.classList.add('flipped');
        } else {
          tooltip.classList.remove('flipped');
        }

        // Move pointer triangle to align directly with card center
        const pointer = tooltip.querySelector('.tech-popup-pointer');
        if (pointer) {
          const pointerOffset = cardCenterX - popupLeft;
          pointer.style.left = `${pointerOffset}px`;
        }

        tooltip.classList.add('visible');
      }

      function hidePopup() {
        if (!tooltip) return;
        card.classList.remove('active');
        if (activeCard === card) {
          tooltip.classList.remove('visible');
          activeCard = null;
        }
      }

      card.addEventListener('mouseenter', showPopup);
      card.addEventListener('mouseleave', hidePopup);

      // Click / Tap support for touch & mobile
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof playSynthSound === 'function') {
          playSynthSound(580, 'sine', 0.05);
        }
        if (activeCard === card && tooltip && tooltip.classList.contains('visible')) {
          hidePopup();
        } else {
          showPopup();
        }
      });
    });

    // Dismiss popup on click outside
    document.addEventListener('click', (e) => {
      if (tooltip && !tooltip.contains(e.target) && !e.target.closest('.tech-icon-card')) {
        tooltip.classList.remove('visible');
        cards.forEach(c => c.classList.remove('active'));
        activeCard = null;
      }
    });
  }

  /* ===================================================
     CYBER VIBE LOADER (5-SECOND SMOOTH 100% LOAD CYCLE)
     =================================================== */
  function initVibeLoader() {
    const loaderScreen = document.getElementById('loaderScreen');
    if (!loaderScreen) return;

    const barFill = document.getElementById('loaderBarFill');
    const percentEl = document.getElementById('loaderPercent');
    const statusMsg = document.getElementById('loaderStatusMsg');
    const skipBtn = document.getElementById('loaderSkipBtn');

    let isFinished = false;
    let animFrameId = null;
    const TOTAL_DURATION = 5000; // Exactly 5 seconds to load 100%
    const startTime = performance.now();

    const messages = [
      { at: 0, text: "BOOTING RUDRA KERNEL..." },
      { at: 20, text: "INITIALIZING VIBE WORKSPACE..." },
      { at: 45, text: "CALIBRATING JAVA BACKEND & HIGH CONCURRENCY..." },
      { at: 72, text: "ENGAGING BLAST DOORS & SECURITY PROTOCOLS..." },
      { at: 90, text: "SYNCHRONIZING PORTFOLIO MODULES..." },
      { at: 100, text: "SYSTEMS ONLINE // READY TO SHIP!" }
    ];

    function finishLoader() {
      if (isFinished) return;
      isFinished = true;
      if (animFrameId) cancelAnimationFrame(animFrameId);

      if (barFill) barFill.style.width = '100%';
      if (percentEl) percentEl.textContent = '100';
      if (statusMsg) statusMsg.textContent = 'SYSTEMS ONLINE // READY TO SHIP!';

      // Hold briefly at 100% for 400ms so user clearly sees 100% completion
      setTimeout(() => {
        loaderScreen.classList.add('loader-fade-out');
        setTimeout(() => {
          loaderScreen.style.display = 'none';
        }, 600);
      }, 400);
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', finishLoader);
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') finishLoader();
    });

    function step(now) {
      if (isFinished) return;

      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / TOTAL_DURATION);
      const currentPct = Math.min(100, Math.floor(progress * 100));

      if (barFill) barFill.style.width = `${progress * 100}%`;
      if (percentEl) percentEl.textContent = currentPct;

      const activeMsg = messages.slice().reverse().find(m => currentPct >= m.at);
      if (activeMsg && statusMsg) {
        statusMsg.textContent = activeMsg.text;
      }

      if (elapsed >= TOTAL_DURATION) {
        finishLoader();
      } else {
        animFrameId = requestAnimationFrame(step);
      }
    }

    animFrameId = requestAnimationFrame(step);
  }

  /* ===================================================
     SCROLL-DRIVEN BLAST DOORS & VAULT LOCK SYSTEM
     =================================================== */
  function initSecurityVaultScroll() {
    const vaultSection = document.getElementById('securityVault');
    const doorLeft = document.getElementById('doorLeft');
    const doorRight = document.getElementById('doorRight');
    const vaultLockAssembly = document.getElementById('vaultLockAssembly');
    const vaultStatusLight = document.getElementById('vaultStatusLight');
    const vaultSecuredBadge = document.getElementById('vaultSecuredBadge');
    const vaultScrollHint = document.getElementById('vaultScrollHint');

    if (!vaultSection || !doorLeft || !doorRight || !vaultLockAssembly) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateVault);
        ticking = true;
      }
    }

    function updateVault() {
      ticking = false;
      const rect = vaultSection.getBoundingClientRect();
      const totalScrollDist = rect.height - window.innerHeight;

      if (totalScrollDist <= 0) return;

      // Raw progress through the section (0 when top is at top of viewport, 1 when bottom reaches bottom)
      const rawProgress = -rect.top / totalScrollDist;
      const progress = Math.max(0, Math.min(1, rawProgress));

      // PHASE 1: Doors closing / sliding together (progress 0.0 -> 0.35)
      // PHASE 2: Locked & Secured with green LED & badge (progress 0.35 -> 0.65)
      // PHASE 3: Unlocking & Opening to reveal Who am I (progress 0.65 -> 1.0)

      if (progress < 0.35) {
        // Doors approaching center
        const p1 = progress / 0.35; // 0 to 1
        const leftOffset = -100 * (1 - p1);
        const rightOffset = 100 * (1 - p1);

        doorLeft.style.transform = `translateX(${leftOffset}%)`;
        doorRight.style.transform = `translateX(${rightOffset}%)`;

        // Wheel scaling into center
        const wheelScale = 0.3 + 0.7 * p1;
        const wheelRot = p1 * 360;
        vaultLockAssembly.style.transform = `translate(-50%, -50%) scale(${wheelScale}) rotate(${wheelRot}deg)`;
        vaultLockAssembly.style.opacity = `${p1}`;

        // Status: Red (Engaging)
        if (vaultStatusLight) vaultStatusLight.classList.remove('secured');
        if (vaultSecuredBadge) vaultSecuredBadge.classList.remove('visible');
        if (vaultScrollHint) {
          const hintText = vaultScrollHint.querySelector('.scroll-hint-text');
          if (hintText) hintText.textContent = 'SCROLL DOWN TO LOCK & SECURE VAULT';
        }
      } else if (progress >= 0.35 && progress <= 0.65) {
        // DOORS FULLY CLOSED & INTERLOCKED! SECURED STATE
        doorLeft.style.transform = 'translateX(0%)';
        doorRight.style.transform = 'translateX(0%)';

        vaultLockAssembly.style.transform = 'translate(-50%, -50%) scale(1) rotate(360deg)';
        vaultLockAssembly.style.opacity = '1';

        // Light turns neon GREEN!
        if (vaultStatusLight) vaultStatusLight.classList.add('secured');
        // Badge pops out!
        if (vaultSecuredBadge) vaultSecuredBadge.classList.add('visible');

        if (vaultScrollHint) {
          const hintText = vaultScrollHint.querySelector('.scroll-hint-text');
          if (hintText) hintText.textContent = '🔒 CLEARANCE VERIFIED /// SCROLL TO UNLOCK WHO AM I';
        }
      } else {
        // PHASE 3: UNLOCKING & PARTING TO REVEAL WHO AM I (progress 0.65 -> 1.0)
        const p3 = (progress - 0.65) / 0.35; // 0 to 1

        // Doors part outwards with slight tilt as in reference screenshots
        const leftOpen = -100 * p3;
        const rightOpen = 100 * p3;
        const tilt = 5 * p3;

        doorLeft.style.transform = `translateX(${leftOpen}%) rotate(${-tilt}deg)`;
        doorRight.style.transform = `translateX(${rightOpen}%) rotate(${tilt}deg)`;

        // Vault lock fades & scales slightly
        vaultLockAssembly.style.transform = `translate(-50%, -50%) scale(${1 + 0.3 * p3})`;
        vaultLockAssembly.style.opacity = `${Math.max(0, 1 - p3 * 2)}`;

        // Badge & indicator hide as doors separate
        if (vaultSecuredBadge) vaultSecuredBadge.classList.remove('visible');
        if (vaultStatusLight) vaultStatusLight.classList.remove('secured');

        if (vaultScrollHint) {
          const hintText = vaultScrollHint.querySelector('.scroll-hint-text');
          if (hintText) hintText.textContent = 'ACCESS GRANTED /// WELCOME TO RUDRA WORKSPACE';
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateVault();
  }

  /* ===================================================
     SLIDING WINDOW TYPE ANIMATION (TOP TO BOTTOM CURTAIN)
     =================================================== */
  function initSlidingWindow() {
    const portal = document.getElementById('slidingWindow');
    if (!portal) return;

    function checkPortal() {
      const rect = portal.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
      if (inView) {
        portal.classList.add('shutter-open');
      } else {
        portal.classList.remove('shutter-open');
      }
    }

    window.addEventListener('scroll', checkPortal, { passive: true });
    checkPortal();
  }

  /* ===================================================
     TECH STACK EFFICIENCY METERS & HOVER ANIMATION
     =================================================== */
  function initTechEfficiency() {
    const efficiencies = {
      'Java': 96,
      'Python': 92,
      'C++': 85,
      'C': 88,
      'Spring Boot': 94,
      'FastAPI': 90,
      'JSP/Servlets': 92,
      'PostgreSQL': 93,
      'MySQL': 94,
      'Docker': 89,
      'Solidity': 85,
      'OpenCV': 88,
      'PyTorch': 84,
      'React': 91,
      'Next.js': 89,
      'TypeScript': 88,
      'Tailwind CSS': 90,
      'Git': 95,
      'Linux': 90,
      'Apache Tomcat': 92
    };

    const cards = document.querySelectorAll('.tech-icon-card');
    cards.forEach(card => {
      const techName = (card.getAttribute('data-tech') || card.textContent || '').trim();
      const eff = efficiencies[techName] || 88;

      card.style.setProperty('--eff-width', `${eff}%`);

      // Add small efficiency meter if not present
      if (!card.querySelector('.tech-efficiency-meter')) {
        const meter = document.createElement('div');
        meter.className = 'tech-efficiency-meter';
        meter.setAttribute('title', `${techName}: ${eff}% Efficiency`);
        const fill = document.createElement('div');
        fill.className = 'tech-efficiency-meter-fill';
        meter.appendChild(fill);
        card.appendChild(meter);
      }
    });

    // Reveal on scroll into skills section
    const skillsSec = document.getElementById('skills');
    if (skillsSec) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cards.forEach(c => c.classList.add('efficiency-revealed'));
          }
        });
      }, { threshold: 0.2 });
      observer.observe(skillsSec);
    }
  }

  /* ===================================================
     GEN Z FLOATING RIGHT QUICK-NAV DOCK
     =================================================== */
  function initFloatingRightDock() {
    const dock = document.getElementById('floatingRightDock');
    if (!dock) return;

    const links = dock.querySelectorAll('.dock-link');
    const sections = ['about', 'skills', 'projects', 'hackathons', 'contact'];

    function updateActiveDock() {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach(secId => {
        const el = document.getElementById(secId);
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          links.forEach(l => {
            if (l.getAttribute('href') === `#${secId}`) {
              l.classList.add('active');
            } else {
              l.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateActiveDock, { passive: true });
    updateActiveDock();
  }

  /* ===================================================
     TIMELINE 3D THREE.JS CODER WORKSTATION (SCROLL-SCRUB & CURSOR PARALLAX)
     =================================================== */
  function initTimelineThreeWorkstation() {
    const canvas = document.getElementById('timelineThreeCanvas');
    const video = document.getElementById('timelineCoderVideo');
    const section = document.getElementById('experience');

    if (!canvas || !video || !section) return;

    const hudActiveYear = document.getElementById('hudActiveYear');
    const hudScrollState = document.getElementById('hudScrollState');
    const hudCodingWpm = document.getElementById('hudCodingWpm');
    const hudScrubFill = document.getElementById('hudScrubFill');
    const laserFill = document.getElementById('timelineLaserFill');
    const laserOrb = document.getElementById('timelineLaserOrb');
    const milestoneCards = document.querySelectorAll('.timeline-card-node');
    const btnVidMulti = document.getElementById('btnVidMulti');
    const btnVidLaptop = document.getElementById('btnVidLaptop');

    // Ensure video is paused so scroll progress controls currentTime
    video.pause();
    video.muted = true;

    // Check Three.js availability
    if (typeof THREE === 'undefined') {
      console.warn("Three.js not loaded, fallback to video scroll scrub.");
      initFallbackVideoScrub();
      return;
    }

    const wrapper = canvas.parentElement;
    let width = wrapper.clientWidth || 500;
    let height = wrapper.clientHeight || 420;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.8);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Textures: Video & Cyber Circuit Board (Matching 2nd & 3rd Image)
    const textureLoader = new THREE.TextureLoader();
    const circuitTexture = textureLoader.load('assets/images/cyber_circuit_bg.jpg');
    circuitTexture.minFilter = THREE.LinearFilter;
    circuitTexture.magFilter = THREE.LinearFilter;
    circuitTexture.wrapS = THREE.RepeatWrapping;
    circuitTexture.wrapT = THREE.RepeatWrapping;

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBAFormat;

    // 3D Background Plane with Glowing Cyber Circuit Board Texture
    const bgGeom = new THREE.PlaneGeometry(6.6, 3.8);
    const bgMat = new THREE.MeshBasicMaterial({
      map: circuitTexture,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide
    });
    const bgMesh = new THREE.Mesh(bgGeom, bgMat);
    bgMesh.position.set(0, 0, -0.65);
    scene.add(bgMesh);

    // Curved plane geometry for futuristic curved cyber display
    const screenWidth = 3.25;
    const screenHeight = 1.85;
    const screenGeom = new THREE.PlaneGeometry(screenWidth, screenHeight, 32, 32);
    const posAttr = screenGeom.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      // Subtle cylindrical inward curve
      posAttr.setZ(i, -Math.pow(x / (screenWidth * 0.5), 2) * 0.18);
    }
    screenGeom.computeVertexNormals();

    // Cyber Hologram Shader Material (Fuses Video with Cyber Circuit Background)
    const hologramShader = {
      uniforms: {
        uVideo: { value: videoTexture },
        uCircuit: { value: circuitTexture },
        uTime: { value: 0.0 },
        uVelocity: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uVideo;
        uniform sampler2D uCircuit;
        uniform float uTime;
        uniform float uVelocity;
        varying vec2 vUv;

        void main() {
          vec4 vidColor = texture2D(uVideo, vUv);
          vec4 circuitColor = texture2D(uCircuit, vUv);

          // 1. Hologram Scanlines matching 2nd image
          float scanline = sin(vUv.y * 320.0 + uTime * 3.0) * 0.09;
          vidColor.rgb -= scanline;

          // 2. Cyan / Emerald Laser Sweep Pulse
          float sweepY = fract(uTime * 0.28);
          float sweep = smoothstep(0.035, 0.0, abs(vUv.y - sweepY)) * 0.32;

          // 3. Detect background mall vs developer subject
          // The background in the mall video has high blue/cyan/gray levels
          float isBlueWall = smoothstep(0.06, 0.28, vidColor.b - vidColor.r);
          float isBrightMall = smoothstep(0.45, 0.82, dot(vidColor.rgb, vec3(0.3, 0.59, 0.11)));
          float bgMask = clamp(isBlueWall * 0.8 + isBrightMall * 0.35, 0.0, 1.0);

          // 4. Cyber Background Composite: Glowing green & purple circuit traces
          vec3 cyberBg = mix(vec3(0.04, 0.03, 0.10), circuitColor.rgb, 0.85);
          vec3 finalColor = mix(vidColor.rgb, cyberBg, bgMask * 0.78);

          // 5. Holographic Edge Glow (Emerald #00ff9d & Violet #a855f7)
          vec3 neonAccent = circuitColor.rgb * vec3(0.0, 1.0, 0.61) * 0.45;
          finalColor += neonAccent * (1.0 - bgMask * 0.3);
          finalColor += vec3(0.22, 0.74, 0.97) * sweep;

          // 6. Smooth rounded vignette at curved screen edges
          vec2 d = abs(vUv - vec2(0.5));
          float edgeMask = smoothstep(0.49, 0.42, d.x) * smoothstep(0.49, 0.40, d.y);

          // 7. Rich cyber contrast matching 2nd & 3rd images
          finalColor = pow(max(finalColor, vec3(0.0)), vec3(1.12)) * 1.15;

          gl_FragColor = vec4(finalColor, edgeMask * 0.96);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    };

    const screenMat = new THREE.ShaderMaterial(hologramShader);
    const screenMesh = new THREE.Mesh(screenGeom, screenMat);
    scene.add(screenMesh);

    // Glowing Neon Edge Wireframe (Emerald Neon #00ff9d matching circuit traces)
    const edges = new THREE.EdgesGeometry(screenGeom);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00ff9d,
      transparent: true,
      opacity: 0.75
    });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    screenMesh.add(wireframe);

    // 3. 3D Floating Particles (Emerald, Sky Cyan & Violet)
    const particleCount = 220;
    const pGeom = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const pSpeeds = new Float32Array(particleCount);

    const c1 = new THREE.Color(0x00ff9d); // Emerald
    const c2 = new THREE.Color(0x38bdf8); // Sky Cyan
    const c3 = new THREE.Color(0xa855f7); // Violet

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 5.5;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 2.5;
      pSpeeds[i] = 0.006 + Math.random() * 0.018;

      const pick = Math.random();
      const col = pick < 0.4 ? c1 : (pick < 0.75 ? c2 : c3);
      pColors[i * 3] = col.r;
      pColors[i * 3 + 1] = col.g;
      pColors[i * 3 + 2] = col.b;
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeom.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);

    // 4. Subtle 3D Ambient Grid below display (Emerald primary & Purple secondary)
    const gridHelper = new THREE.GridHelper(6, 16, 0x00ff9d, 0x4c1d95);
    gridHelper.position.y = -1.4;
    gridHelper.position.z = -0.4;
    gridHelper.rotation.x = 0.12;
    scene.add(gridHelper);

    // 5. Cursor Parallax Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    function onMouseMove(e) {
      const rect = wrapper.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      // Normalize mouse (-1 to 1) relative to center of workstation
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX = (e.clientX - centerX) / (window.innerWidth * 0.5);
      mouseY = (e.clientY - centerY) / (window.innerHeight * 0.5);

      // Clamp
      mouseX = Math.max(-1, Math.min(1, mouseX));
      mouseY = Math.max(-1, Math.min(1, mouseY));
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 6. Scroll Progress & Video Scrubbing State
    let targetProgress = 0;
    let currentProgress = 0;
    let lastProgress = 0;
    let scrollVelocity = 0;
    let isSeeking = false;

    function onScroll() {
      const rect = section.getBoundingClientRect();
      const totalScrollDist = rect.height - window.innerHeight;
      if (totalScrollDist <= 0) return;

      // 0 at top of timeline section, 1 when user scrolls to bottom
      const raw = -rect.top / totalScrollDist;
      targetProgress = Math.max(0, Math.min(1, raw));
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // Camera Toggle Buttons
    if (btnVidMulti && btnVidLaptop) {
      btnVidMulti.addEventListener('click', () => {
        btnVidMulti.classList.add('active');
        btnVidLaptop.classList.remove('active');
        const prevTime = video.currentTime;
        video.src = 'gemini_generated_video_4c83629d.mp4';
        video.load();
        video.addEventListener('loadedmetadata', () => {
          video.currentTime = Math.min(prevTime, video.duration || 9.5);
          videoTexture.needsUpdate = true;
        }, { once: true });
      });

      btnVidLaptop.addEventListener('click', () => {
        btnVidLaptop.classList.add('active');
        btnVidMulti.classList.remove('active');
        const prevTime = video.currentTime;
        video.src = 'gemini_generated_video_7d75a5f1.mp4';
        video.load();
        video.addEventListener('loadedmetadata', () => {
          video.currentTime = Math.min(prevTime, video.duration || 9.5);
          videoTexture.needsUpdate = true;
        }, { once: true });
      });
    }

    // Window Resize
    function onResize() {
      if (!wrapper) return;
      width = wrapper.clientWidth || 500;
      height = wrapper.clientHeight || 420;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', onResize, { passive: true });

    // 7. Main 60fps Animation Loop
    let animId = null;

    function animate() {
      animId = requestAnimationFrame(animate);

      // Interpolate progress towards scroll target (smooth damping)
      const diffProgress = targetProgress - currentProgress;
      currentProgress += diffProgress * 0.14;

      scrollVelocity = Math.abs(currentProgress - lastProgress) * 60;
      const isForward = currentProgress >= lastProgress;
      lastProgress = currentProgress;

      // Scrub video to matching timestamp
      const duration = video.duration || 9.5;
      const targetTime = Math.max(0, Math.min(duration, currentProgress * duration));

      if (Math.abs(video.currentTime - targetTime) > 0.02) {
        try {
          if ('fastSeek' in video) {
            video.fastSeek(targetTime);
          } else {
            video.currentTime = targetTime;
          }
        } catch (err) {
          // ignore seek bounds
        }
      }
      videoTexture.needsUpdate = true;

      // Update HUD elements
      const percentStr = `${Math.round(currentProgress * 100)}%`;
      if (hudScrubFill) hudScrubFill.style.width = percentStr;
      if (laserFill) laserFill.style.height = percentStr;
      if (laserOrb) laserOrb.style.top = percentStr;

      // Update Velocity & Telemetry text
      if (scrollVelocity > 0.06) {
        if (hudScrollState) {
          hudScrollState.textContent = isForward ? 'COMPILING LIVE ⚡' : 'REWINDING LOGIC ⏪';
          hudScrollState.className = isForward ? 'telemetry-val highlight-cyan' : 'telemetry-val highlight-purple';
        }
        if (hudCodingWpm) {
          const wpm = Math.min(185, Math.round(110 + scrollVelocity * 45));
          hudCodingWpm.textContent = `${wpm} WPM`;
        }
      } else {
        if (hudScrollState) {
          hudScrollState.textContent = 'MILESTONE LOCKED';
          hudScrollState.className = 'telemetry-val highlight-cyan';
        }
        if (hudCodingWpm) hudCodingWpm.textContent = '0 WPM (IDLE)';
      }

      // Synchronize Active Milestone Card
      if (milestoneCards.length > 0) {
        const milestoneIndex = Math.min(
          milestoneCards.length - 1,
          Math.floor(currentProgress * milestoneCards.length)
        );

        milestoneCards.forEach((card, idx) => {
          if (idx === milestoneIndex) {
            if (!card.classList.contains('active')) {
              card.classList.add('active');
              const yr = card.getAttribute('data-year') || '';
              const role = card.getAttribute('data-role') || '';
              if (hudActiveYear) hudActiveYear.textContent = `${yr} // ${role}`;
            }
          } else {
            card.classList.remove('active');
          }
        });
      }

      // Update Cyber Hologram Shader Uniforms
      if (screenMat && screenMat.uniforms) {
        screenMat.uniforms.uTime.value = performance.now() * 0.001;
        screenMat.uniforms.uVelocity.value = scrollVelocity;
      }

      // Parallax on 3D Cyber Circuit Backdrop Plane
      bgMesh.position.x += (mouseX * 0.15 - bgMesh.position.x) * 0.05;
      bgMesh.position.y += (mouseY * 0.10 - bgMesh.position.y) * 0.05;

      // 3D Mouse Parallax & Dynamic Tilting
      targetRotY = mouseX * 0.28;
      targetRotX = -mouseY * 0.22;
      screenMesh.rotation.y += (targetRotY - screenMesh.rotation.y) * 0.08;
      screenMesh.rotation.x += (targetRotX - screenMesh.rotation.x) * 0.08;

      camera.position.x += (mouseX * 0.35 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.25 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Animate 3D Particles (Speed scales with scroll velocity!)
      const posArr = pGeom.attributes.position.array;
      const speedMultiplier = 1 + scrollVelocity * 2.5;

      for (let i = 0; i < particleCount; i++) {
        const yIndex = i * 3 + 1;
        posArr[yIndex] += pSpeeds[i] * (isForward ? 1 : -1) * speedMultiplier;

        if (posArr[yIndex] > 2.2) {
          posArr[yIndex] = -2.2;
        } else if (posArr[yIndex] < -2.2) {
          posArr[yIndex] = 2.2;
        }
      }
      pGeom.attributes.position.needsUpdate = true;

      // Render Three.js Scene
      renderer.render(scene, camera);
    }

    animate();
    onScroll();

    // Fallback if video scrubbing needs assistance
    function initFallbackVideoScrub() {
      function onScrubFallback() {
        const rect = section.getBoundingClientRect();
        const dist = rect.height - window.innerHeight;
        if (dist <= 0) return;
        const p = Math.max(0, Math.min(1, -rect.top / dist));
        video.currentTime = p * (video.duration || 9.5);
      }
      window.addEventListener('scroll', onScrubFallback, { passive: true });
    }
  }

  /* ===================================================
     COLD INTRO 3D SHADOW & PARALLAX ENGINE
     Interactive depth displacement between foreground text
     and giant monolithic shadow watermark (matching Image 2)
     =================================================== */
  function initColdIntroParallax() {
    const coldIntro = document.getElementById('coldIntro');
    const shadowWatermark = document.getElementById('coldShadowWatermark');
    const heroStage = document.querySelector('.cold-hero-stage');
    const coldScrollBtn = document.getElementById('coldScrollBtn');

    if (coldScrollBtn) {
      coldScrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const vault = document.getElementById('securityVault');
        if (vault) {
          vault.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    if (!coldIntro || !shadowWatermark) return;

    let targetWatermarkX = 0;
    let targetWatermarkY = 0;
    let targetStageX = 0;
    let targetStageY = 0;
    let currentWatermarkX = 0;
    let currentWatermarkY = 0;
    let currentStageX = 0;
    let currentStageY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = coldIntro.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;

      // Deep dimensional shadow moves in reverse parallax
      targetWatermarkX = -normX * 36;
      targetWatermarkY = -normY * 20;

      // Foreground stage moves slightly toward mouse
      targetStageX = normX * 16;
      targetStageY = normY * 10;
    }, { passive: true });

    function renderParallax() {
      currentWatermarkX += (targetWatermarkX - currentWatermarkX) * 0.08;
      currentWatermarkY += (targetWatermarkY - currentWatermarkY) * 0.08;
      currentStageX += (targetStageX - currentStageX) * 0.08;
      currentStageY += (targetStageY - currentStageY) * 0.08;

      shadowWatermark.style.transform = `translate(calc(-50% + ${currentWatermarkX.toFixed(2)}px), calc(-50% + ${currentWatermarkY.toFixed(2)}px))`;
      if (heroStage) {
        heroStage.style.transform = `translate(${currentStageX.toFixed(2)}px, ${currentStageY.toFixed(2)}px)`;
      }

      requestAnimationFrame(renderParallax);
    }
    renderParallax();
  }

  // Initialize Gen Z Interactive Features
  initVibeLoader();
  initColdIntroParallax();
  initSecurityVaultScroll();
  initSlidingWindow();
  initTechEfficiency();
  initFloatingRightDock();
  initTimelineThreeWorkstation();

  console.log("⚡ [2026 AI Developer Portfolio] Kernel initialized for Rudra Kathoke.");
})();
