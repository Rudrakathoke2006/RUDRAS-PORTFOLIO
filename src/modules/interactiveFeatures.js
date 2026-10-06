/**
 * interactiveFeatures.js
 * 
 * Implements transitions & interactions for:
 * 1. "WHAT I DO" Corner-Bracket Accordion Cards (with expand/collapse & skillset badges)
 * 2. "TECH STACK" Stepped Matrix 3D Tilt & Glow Effects
 * 3. "Timeline / Journey" Central Laser Beam Scroll Tracker & Pulsing Orb
 * 4. Floating Cosmic Purple Light Orb Physics
 */

export function initInteractiveFeatures() {
  initWhatIDoAccordion();
  initTechStackTilt();
  initTimelineLaserBeam();
  initCosmicOrbs();
}

/**
 * 1. "WHAT I DO" Accordion Cards
 */
function initWhatIDoAccordion() {
  const cards = document.querySelectorAll('.what-do-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    const toggleBtn = card.querySelector('.what-do-toggle');
    const headerArea = card.querySelector('.what-do-card-header');

    const handleToggle = () => {
      const isExpanded = card.classList.contains('expanded');
      
      // Optionally close other cards or allow multiple
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('expanded');
          const chevron = c.querySelector('.what-do-toggle');
          if (chevron) chevron.setAttribute('aria-expanded', 'false');
        }
      });

      if (isExpanded) {
        card.classList.remove('expanded');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('expanded');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
        
        // Stagger in badges
        const badges = card.querySelectorAll('.skill-badge');
        badges.forEach((badge, idx) => {
          badge.style.animation = 'none';
          badge.offsetHeight; // trigger reflow
          badge.style.animation = `badgePopIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s forwards`;
        });
      }
    };

    if (toggleBtn) toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleToggle();
    });

    if (headerArea) headerArea.addEventListener('click', handleToggle);
  });
}

/**
 * 2. "TECH STACK" 3D Tilt & Mouse Glow on Icon Cards
 */
function initTechStackTilt() {
  const techCards = document.querySelectorAll('.tech-icon-card');
  if (!techCards.length) return;

  techCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.04)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    });
  });
}

/**
 * 3. Timeline Central Laser Beam & Scroll Progress Orb
 */
function initTimelineLaserBeam() {
  const timelineSection = document.querySelector('.timeline-journey-section');
  const laserBeamFill = document.querySelector('.timeline-laser-fill');
  const laserOrb = document.querySelector('.timeline-laser-orb');
  const milestoneRows = document.querySelectorAll('.timeline-milestone-row');

  if (!timelineSection || !laserBeamFill || !laserOrb) return;

  function updateTimelineOnScroll() {
    const rect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate how far into the timeline section the viewport center is
    const sectionTop = rect.top;
    const sectionHeight = rect.height;

    // Start progress when top enters 60% of viewport, finish when bottom leaves 40%
    const startOffset = windowHeight * 0.6;
    const endOffset = windowHeight * 0.4;
    
    let progress = (startOffset - sectionTop) / (sectionHeight + startOffset - endOffset);
    progress = Math.max(0, Math.min(1, progress));

    const fillPercent = progress * 100;
    laserBeamFill.style.height = `${fillPercent}%`;
    laserOrb.style.top = `${fillPercent}%`;

    // Highlight milestone rows when laser passes them
    milestoneRows.forEach((row) => {
      const rowRect = row.getBoundingClientRect();
      const rowCenter = rowRect.top + rowRect.height / 2;
      if (rowCenter <= windowHeight * 0.65) {
        row.classList.add('milestone-active');
      } else {
        row.classList.remove('milestone-active');
      }
    });
  }

  window.addEventListener('scroll', updateTimelineOnScroll, { passive: true });
  updateTimelineOnScroll();
}

/**
 * 4. Cosmic Purple Floating Orbs with Subtle Mouse Follow
 */
function initCosmicOrbs() {
  const cosmicOrbs = document.querySelectorAll('.cosmic-glow-orb');
  if (!cosmicOrbs.length) return;

  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    cosmicOrbs.forEach((orb, i) => {
      const depth = (i + 1) * 20;
      orb.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
    });
  }, { passive: true });
}
