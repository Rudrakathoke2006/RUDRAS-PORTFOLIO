/* ===================================================
   hero3DWorkstation.js — Three.js 3D Engineer Workstation
   =================================================== */

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function initHero3DWorkstation() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  // 1. Scene, Camera, Renderer Setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.8, 4.5);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  // 2. Lighting
  const ambientLight = new THREE.AmbientLight(0x130f16, 1.5);
  scene.add(ambientLight);

  const pointLightLavender = new THREE.PointLight(0xc2a4ff, 3, 10);
  pointLightLavender.position.set(2, 3, 2);
  scene.add(pointLightLavender);

  const pointLightLime = new THREE.PointLight(0xc8ff5a, 2, 8);
  pointLightLime.position.set(-2, 1, 1);
  scene.add(pointLightLime);

  // 3. 3D Engineer Workstation Group
  const workstationGroup = new THREE.Group();
  workstationGroup.position.set(1.5, -0.6, 0);
  scene.add(workstationGroup);

  // 3A. Desk Surface
  const deskGeo = new THREE.BoxGeometry(2.4, 0.08, 1.2);
  const deskMat = new THREE.MeshStandardMaterial({
    color: 0x14141c,
    roughness: 0.3,
    metalness: 0.8
  });
  const desk = new THREE.Mesh(deskGeo, deskMat);
  desk.position.set(0, 0, 0);
  workstationGroup.add(desk);

  // 3B. 3D Monitor
  const monitorGeo = new THREE.BoxGeometry(1.6, 0.95, 0.06);
  const monitorMat = new THREE.MeshStandardMaterial({ color: 0x1c1917 });
  const monitor = new THREE.Mesh(monitorGeo, monitorMat);
  monitor.position.set(0, 0.6, -0.2);
  workstationGroup.add(monitor);

  // Screen Canvas (Dynamic Video Texture Simulation)
  const screenCanvas = document.createElement('canvas');
  screenCanvas.width = 512;
  screenCanvas.height = 300;
  const screenCtx = screenCanvas.getContext('2d');

  const screenTexture = new THREE.CanvasTexture(screenCanvas);
  const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
  const screenGeo = new THREE.PlaneGeometry(1.52, 0.88);
  const screenMesh = new THREE.Mesh(screenGeo, screenMat);
  screenMesh.position.set(0, 0.6, -0.16);
  workstationGroup.add(screenMesh);

  // Render Monitor Screen Texture
  let screenFrame = 0;
  function updateMonitorScreen() {
    screenFrame++;
    screenCtx.fillStyle = '#0a0a0f';
    screenCtx.fillRect(0, 0, 512, 300);

    screenCtx.fillStyle = '#c2a4ff';
    screenCtx.font = '16px monospace';
    screenCtx.fillText('⚡ [FASTAPI + PGVECTOR] ACTIVE_KERNEL', 20, 35);

    screenCtx.fillStyle = '#c8ff5a';
    screenCtx.font = '14px monospace';
    screenCtx.fillText('> PUGMARK Wildlife AI: SIFT Matching 98.4%', 20, 75);
    screenCtx.fillText('> Spring Boot 3.2: Contact API 18ms', 20, 105);
    screenCtx.fillText('> CGPA Telemetry: 9.2 / 10.0 (RBU Nagpur)', 20, 135);

    // Dynamic wave code graph
    screenCtx.strokeStyle = '#5ee7ff';
    screenCtx.lineWidth = 2;
    screenCtx.beginPath();
    for (let x = 0; x < 472; x += 10) {
      const y = 220 + Math.sin((x + screenFrame * 4) * 0.03) * 25;
      if (x === 0) screenCtx.moveTo(20 + x, y);
      else screenCtx.lineTo(20 + x, y);
    }
    screenCtx.stroke();

    screenTexture.needsUpdate = true;
  }

  // 3C. 3D Engineer Avatar Head (Follows Cursor)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 1.25, 0.4);

  const headGeo = new THREE.SphereGeometry(0.32, 32, 32);
  const headMat = new THREE.MeshPhysicalMaterial({
    color: 0x14141c,
    transmission: 0.6,
    opacity: 1,
    transparent: true,
    roughness: 0.1,
    ior: 1.5,
    reflectivity: 0.9,
    clearcoat: 1.0
  });
  const head = new THREE.Mesh(headGeo, headMat);
  headGroup.add(head);

  // Glowing Cyber Eyes
  const eyeGeo = new THREE.SphereGeometry(0.05, 16, 16);
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xc8ff5a });

  const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
  leftEye.position.set(-0.1, 0.05, 0.28);
  headGroup.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
  rightEye.position.set(0.1, 0.05, 0.28);
  headGroup.add(rightEye);

  workstationGroup.add(headGroup);

  // 4. Background Particle Orbs (Float in 3D Space)
  const particleCount = 120;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 12;
    positions[i + 1] = (Math.random() - 0.5) * 8;
    positions[i + 2] = (Math.random() - 0.5) * 8;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xc2a4ff,
    size: 0.04,
    transparent: true,
    opacity: 0.7
  });
  const particleSystem = new THREE.Points(geometry, particleMat);
  scene.add(particleSystem);

  // 5. Cursor Tracking & Smooth Idle Rotation
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // 6. Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Idle breathing & head follow
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    headGroup.rotation.y = targetX * 0.6;
    headGroup.rotation.x = -targetY * 0.4;
    headGroup.position.y = 1.25 + Math.sin(elapsedTime * 2) * 0.02; // Idle breathing

    // Workstation subtle tilt
    workstationGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.08;

    // Update screen texture
    updateMonitorScreen();

    // Particle floating animation
    particleSystem.rotation.y = elapsedTime * 0.03;

    renderer.render(scene, camera);
  }

  animate();

  // Resize Listener
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
