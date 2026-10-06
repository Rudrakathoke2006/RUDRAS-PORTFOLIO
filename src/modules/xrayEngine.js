/* ===================================================
   xrayEngine.js — Proof of Work X-Ray Toggle
   =================================================== */

export function initXRayEngine() {
  const xrayToggle = document.getElementById('xrayToggle');
  const xrayBadges = [
    { selector: '.hero', text: '⚡ FASTAPI (PORT 8000) | HERO ENGINE | 14MS' },
    { selector: '#about', text: '📊 POSTGRESQL (NEON) | DB: VISITS & PROFILE | 8MS' },
    { selector: '#skills', text: '☕ JAVA 17 / SPRING BOOT | SERVICE: SKILLS_MATRIX | 24MS' },
    { selector: '#projects', text: '🧠 FASTAPI + PGVECTOR | VECTOR SIMILARITY SEARCH | 42MS' },
    { selector: '#lab', text: '📹 MEDIAPIPE / TF.JS | 100% ON-DEVICE VISION | 12MS' },
    { selector: '#experience', text: '⚡ SPRING BOOT JPA | REPO: JOURNEY_MILESTONES | 18MS' },
    { selector: '#contact', text: '🔒 SPRING BOOT + BEAN VALIDATION | DB: MESSAGES | 28MS' },
    { selector: 'footer', text: '⏰ NAGPUR IST CLOCK | LATENCY API | DB: VISITOR_COUNT | 6MS' }
  ];

  // Inject badges into sections
  xrayBadges.forEach(item => {
    const el = document.querySelector(item.selector);
    if (el && !el.querySelector('.xray-badge-overlay')) {
      const badge = document.createElement('div');
      badge.className = 'xray-badge-overlay';
      badge.innerHTML = `<span class="xray-dot"></span> <span class="xray-text">${item.text}</span>`;
      el.style.position = 'relative';
      el.appendChild(badge);
    }
  });

  if (xrayToggle) {
    xrayToggle.addEventListener('click', () => {
      document.body.classList.toggle('xray-active');
      const isActive = document.body.classList.contains('xray-active');
      xrayToggle.classList.toggle('active', isActive);
      xrayToggle.querySelector('.xray-toggle-text').textContent = isActive ? 'X-RAY: ON ⚡' : 'X-RAY: OFF';
    });
  }
}
