/* ===================================================
   audioEngine.js — Opt-in Web Audio & Sound Effects
   =================================================== */

let audioCtx = null;
let isMuted = true;
let ambientOsc = null;
let ambientGain = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function initAudioEngine() {
  const soundToggle = document.getElementById('soundToggle');
  const savedSound = localStorage.getItem('sound_enabled');

  if (savedSound === 'true') {
    isMuted = false;
    if (soundToggle) {
      soundToggle.classList.add('active');
      soundToggle.querySelector('.sound-icon').textContent = '🔊';
    }
  } else {
    isMuted = true;
    if (soundToggle) {
      soundToggle.classList.remove('active');
      soundToggle.querySelector('.sound-icon').textContent = '🔇';
    }
  }

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      isMuted = !isMuted;
      localStorage.setItem('sound_enabled', isMuted ? 'false' : 'true');

      if (!isMuted) {
        getAudioContext();
        soundToggle.classList.add('active');
        soundToggle.querySelector('.sound-icon').textContent = '🔊';
        playUIClick();
        startAmbientHum();
      } else {
        soundToggle.classList.remove('active');
        soundToggle.querySelector('.sound-icon').textContent = '🔇';
        stopAmbientHum();
      }
    });
  }

  // Attach sound triggers to buttons and links
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, a, .project-card, .bento-card')) {
      if (!isMuted) playUIClick();
    }
  });
}

// 1. Soft UI Click Sound (Synth Sine Blip)
export function playUIClick() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);

  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.05);
}

// 2. Section Transition / Loader Whoosh Sound
export function playWhoosh() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(150, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.25);

  gain.gain.setValueAtTime(0.01, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.25);
}

// 3. Subtle Ambient Cyber Hum (Looped Low-Frequency Drone)
function startAmbientHum() {
  if (isMuted || ambientOsc) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  ambientOsc = ctx.createOscillator();
  ambientGain = ctx.createGain();

  ambientOsc.type = 'sine';
  ambientOsc.frequency.setValueAtTime(65, ctx.currentTime); // Low F# hum

  ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
  ambientGain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 2.0);

  ambientOsc.connect(ambientGain);
  ambientGain.connect(ctx.destination);

  ambientOsc.start();
}

function stopAmbientHum() {
  if (ambientOsc && ambientGain && audioCtx) {
    ambientGain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
    setTimeout(() => {
      if (ambientOsc) {
        ambientOsc.stop();
        ambientOsc.disconnect();
        ambientOsc = null;
        ambientGain = null;
      }
    }, 500);
  }
}
