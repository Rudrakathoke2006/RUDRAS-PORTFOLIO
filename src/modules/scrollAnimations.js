/**
 * scrollAnimations.js
 * 
 * Premium scroll-triggered animations using IntersectionObserver.
 * Matches the reference portfolio's scroll animation style:
 * - Fade-up reveals for sections
 * - Staggered children animations (cards, timeline items, skills, etc.)
 * - Parallax-like floating elements
 * - Scale-in effects for stat numbers
 * - Slide-in from left/right for alternating items
 * - Smooth timeline line drawing effect
 */

export function initScrollAnimations() {
  // ===== 1. SECTION REVEAL ANIMATIONS =====
  // All elements with class "reveal" will fade-up on scroll
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Don't unobserve — allows re-triggering if user scrolls back
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach((el) => {
    el.classList.add('scroll-hidden');
    revealObserver.observe(el);
  });

  // ===== 2. STAGGERED CHILDREN ANIMATIONS =====
  // Cards, skill tags, timeline items, hackathon cards, cert cards — all stagger-in
  const staggerContainers = [
    { selector: '.what-do-cards-col', childSelector: '.what-do-card', baseDelay: 0.1 },
    { selector: '.tech-matrix-pyramid', childSelector: '.tech-icon-card', baseDelay: 0.03 },
    { selector: '.my-work-cards-grid', childSelector: '.featured-work-card', baseDelay: 0.12 },
    { selector: '.timeline-milestone-rows', childSelector: '.timeline-milestone-row', baseDelay: 0.1 },
    { selector: '.bento-grid', childSelector: '.bento-card', baseDelay: 0.08 },
    { selector: '.skills-grid', childSelector: '.skill-category', baseDelay: 0.07 },
    { selector: '.projects-grid', childSelector: '.project-card', baseDelay: 0.1 },
    { selector: '.timeline', childSelector: '.timeline-item', baseDelay: 0.12 },
    { selector: '.hackathon-grid', childSelector: '.hackathon-card', baseDelay: 0.08 },
    { selector: '.cert-grid', childSelector: '.cert-card', baseDelay: 0.06 },
    { selector: '.lab-grid', childSelector: '.lab-card, .lab-card-wide', baseDelay: 0.1 },
    { selector: '.contact-content', childSelector: '.contact-link-item', baseDelay: 0.08 },
    { selector: '.more-projects-grid', childSelector: '.more-project-item', baseDelay: 0.05 },
    { selector: '.footer-telemetry-grid', childSelector: '.telemetry-box', baseDelay: 0.07 },
  ];

  staggerContainers.forEach(({ selector, childSelector, baseDelay }) => {
    const containers = document.querySelectorAll(selector);
    containers.forEach((container) => {
      const children = container.querySelectorAll(childSelector);
      children.forEach((child, index) => {
        child.classList.add('stagger-item');
        child.style.setProperty('--stagger-delay', `${index * baseDelay}s`);
      });

      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll('.stagger-item');
              items.forEach((item) => {
                item.classList.add('stagger-visible');
              });
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      staggerObserver.observe(container);
    });
  });

  // ===== 3. HERO SECTION ENTRANCE ANIMATIONS =====
  // These fire immediately on page load (not scroll-triggered)
  const heroElements = [
    { el: '.hero-badge', delay: 0.3, anim: 'anim-fade-down' },
    { el: '.hero-title', delay: 0.5, anim: 'anim-fade-up-big' },
    { el: '.hero-tagline', delay: 0.7, anim: 'anim-fade-up' },
    { el: '.hero-roles', delay: 0.9, anim: 'anim-fade-up' },
    { el: '.hero-ctas', delay: 1.1, anim: 'anim-fade-up' },
    { el: '.hero-socials', delay: 1.3, anim: 'anim-fade-up' },
    { el: '.cyber-terminal', delay: 0.6, anim: 'anim-scale-in' },
    { el: '.card-cgpa', delay: 1.0, anim: 'anim-pop-in' },
    { el: '.card-hacks', delay: 1.2, anim: 'anim-pop-in' },
    { el: '.card-projects', delay: 1.4, anim: 'anim-pop-in' },
  ];

  // Wait for loader to finish before animating hero
  setTimeout(() => {
    heroElements.forEach(({ el, delay, anim }) => {
      const element = document.querySelector(el);
      if (element) {
        element.style.setProperty('--hero-delay', `${delay}s`);
        element.classList.add('hero-animate', anim);
      }
    });
  }, 800);

  // ===== 4. SECTION TITLE SPLIT-LETTER ANIMATION =====
  const sectionTitles = document.querySelectorAll('.section-title');
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('title-animate');
        }
      });
    },
    { threshold: 0.3 }
  );
  sectionTitles.forEach((title) => titleObserver.observe(title));

  // ===== 5. SECTION LABELS SLIDE-IN =====
  const sectionLabels = document.querySelectorAll('.section-label');
  const labelObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('label-animate');
        }
      });
    },
    { threshold: 0.5 }
  );
  sectionLabels.forEach((label) => labelObserver.observe(label));

  // ===== 6. COUNTER / STAT NUMBER ANIMATE-UP =====
  const factValues = document.querySelectorAll('.fact-value');
  const factObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCountUp(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  factValues.forEach((val) => factObserver.observe(val));

  // ===== 7. PARALLAX FLOATING ELEMENTS =====
  initParallaxEffects();

  // ===== 8. TIMELINE LINE DRAW ANIMATION =====
  initTimelineDrawing();

  // ===== 9. SKILL TAG WAVE ANIMATION =====
  initSkillTagWave();

  // ===== 10. SECTION DIVIDER GLOW LINES =====
  initSectionDividers();

  // ===== 11. NAVBAR ACTIVE SECTION HIGHLIGHTING =====
  initActiveNavHighlight();
}

/**
 * Animate a number counting up from 0 to its text value
 */
function animateCountUp(element) {
  const text = element.textContent.trim();
  const hasPlus = text.includes('+');
  const numStr = text.replace(/[^0-9.]/g, '');
  const target = parseFloat(numStr);

  if (isNaN(target)) return;

  const isFloat = numStr.includes('.');
  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;

    if (isFloat) {
      element.textContent = current.toFixed(1) + (hasPlus ? '+' : '');
    } else {
      element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = text; // Restore original text
    }
  }

  requestAnimationFrame(update);
}

/**
 * Subtle parallax on orbs and floating cards
 */
function initParallaxEffects() {
  const orbs = document.querySelectorAll('.bg-gradient-orb');
  const floatCards = document.querySelectorAll('.hero-float-card');

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        orbs.forEach((orb, i) => {
          const speed = i === 0 ? 0.03 : 0.02;
          orb.style.transform = `translateY(${scrollY * speed}px)`;
        });

        floatCards.forEach((card, i) => {
          const speed = 0.04 + i * 0.015;
          card.style.transform = `translateY(${scrollY * speed}px)`;
        });

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Animate the timeline vertical line drawing as user scrolls
 */
function initTimelineDrawing() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  // Create a pseudo-element style for the timeline line via CSS class
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-draw');
        }
      });
    },
    { threshold: 0.1 }
  );

  timelineObserver.observe(timeline);
}

/**
 * Animate skill tags with a wave effect when visible
 */
function initSkillTagWave() {
  const skillCategories = document.querySelectorAll('.skill-category');

  const waveObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tags = entry.target.querySelectorAll('.skill-tag');
          tags.forEach((tag, i) => {
            tag.style.setProperty('--wave-delay', `${i * 0.04}s`);
            tag.classList.add('tag-wave-in');
          });
        }
      });
    },
    { threshold: 0.2 }
  );

  skillCategories.forEach((cat) => waveObserver.observe(cat));
}

/**
 * Animate glowing line dividers between sections
 */
function initSectionDividers() {
  const sections = document.querySelectorAll('section');
  const dividerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-line-visible');
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
    }
  );

  sections.forEach((section) => dividerObserver.observe(section));
}

/**
 * Highlight the active nav link based on visible section
 */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '-100px 0px -50% 0px',
    }
  );

  sections.forEach((section) => navObserver.observe(section));
}
