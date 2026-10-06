import { initParticleCanvas } from './particleCanvas.js';
import { initTerminalCLI } from './terminalCLI.js';
import { initAIChatbot } from './aiChatbot.js';
import { initChessEngine } from './chessEngine.js';
import { initCursorEngine } from './cursorEngine.js';
import { initXRayEngine } from './xrayEngine.js';
import { initJDMatcher } from './jdMatcher.js';
import { initGestureNav } from './gestureNav.js';
import { initAudioEngine } from './audioEngine.js';
import { initScrollAnimations } from './scrollAnimations.js';
import { initHero3DWorkstation } from './3d/hero3DWorkstation.js';
import { initChainSentinel3D } from './3d/project3DScenes.js';
import { initInteractiveFeatures } from './interactiveFeatures.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initParticleCanvas();
  initTerminalCLI();
  initAIChatbot();
  initChessEngine();
  initCursorEngine();
  initXRayEngine();
  initJDMatcher();
  initGestureNav();
  initAudioEngine();
  initScrollAnimations();
  initInteractiveFeatures();
  initHero3DWorkstation();
  initChainSentinel3D('pugmark3DCanvas');

  // Loader screen exit sequence
  const loaderScreen = document.getElementById('loaderScreen');
  const loaderPercent = document.getElementById('loaderPercent');
  const loaderBarFill = document.getElementById('loaderBarFill');

  if (loaderScreen && loaderPercent && loaderBarFill) {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 12) + 5;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        loaderPercent.textContent = '100%';
        loaderBarFill.style.width = '100%';
        setTimeout(() => {
          loaderScreen.classList.add('exit');
        }, 300);
      } else {
        loaderPercent.textContent = `${count}%`;
        loaderBarFill.style.width = `${count}%`;
      }
    }, 50);
  }

  // Navbar scroll active links
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 60);
    if (scrollTop) scrollTop.classList.toggle('visible', y > 500);
  }, { passive: true });

  if (scrollTop) {
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Theme toggle persistence
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
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
      }
    });
  }

  // Konami Code Easter Egg
  const easterEggModal = document.getElementById('easterEggModal');
  const easterEggClose = document.getElementById('easterEggClose');
  const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiSequence[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        if (typeof confetti === 'function') {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        }
        if (easterEggModal) easterEggModal.classList.add('open');
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  if (easterEggClose) {
    easterEggClose.addEventListener('click', () => {
      easterEggModal.classList.remove('open');
    });
  }
});
