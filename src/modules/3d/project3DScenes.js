/* ===================================================
   project3DScenes.js — Interactive 3D WebGL Scenes for Projects
   =================================================== */

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// 1. CHAINSENTINEL: 3D BITCOIN NODE NETWORK GRAPH
export function initChainSentinel3D(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Nodes & Edges
  const nodesGroup = new THREE.Group();
  scene.add(nodesGroup);

  const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
  const nodeMatNormal = new THREE.MeshBasicMaterial({ color: 0xc2a4ff });
  const nodeMatAlert = new THREE.MeshBasicMaterial({ color: 0xc8ff5a });

  const positions = [
    [-1.5, 0.8, 0], [0, 1.2, -0.5], [1.5, 0.6, 0],
    [-1.0, -0.8, 0.2], [0.8, -0.9, -0.2], [0, 0, 0.5]
  ];

  const meshes = positions.map((p, i) => {
    const mesh = new THREE.Mesh(nodeGeo, i === 2 || i === 5 ? nodeMatAlert : nodeMatNormal);
    mesh.position.set(...p);
    nodesGroup.add(mesh);
    return mesh;
  });

  // Connecting Lines
  const lineMat = new THREE.LineBasicMaterial({ color: 0x363636, transparent: true, opacity: 0.6 });
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...positions[i]),
        new THREE.Vector3(...positions[j])
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      nodesGroup.add(line);
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    nodesGroup.rotation.y += 0.008;
    nodesGroup.rotation.x += 0.003;
    renderer.render(scene, camera);
  }
  animate();
}

// 2. SECURE DMS: 3D BLOCKCHAIN BLOCK CHAIN LINK
export function initSecureDMSBlockchain3D(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const chainGroup = new THREE.Group();
  scene.add(chainGroup);

  const blockGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
  const blockMat = new THREE.MeshPhysicalMaterial({ color: 0x14141c, metalness: 0.9, roughness: 0.2, clearcoat: 0.8 });

  for (let i = -2; i <= 2; i++) {
    const block = new THREE.Mesh(blockGeo, blockMat);
    block.position.x = i * 1.3;
    chainGroup.add(block);

    // Wireframe edge
    const edges = new THREE.EdgesGeometry(blockGeo);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: i === 0 ? 0xc8ff5a : 0xc2a4ff }));
    block.add(line);
  }

  function animate() {
    requestAnimationFrame(animate);
    chainGroup.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

// 3. UAV ENGINE DIGITAL TWIN: 3D PISTON ENGINE CYLINDER
export function initUAVEngineTwin3D(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const engineGroup = new THREE.Group();
  scene.add(engineGroup);

  // Cylinder Outer Case
  const cylGeo = new THREE.CylinderGeometry(0.8, 0.8, 2, 32, 1, true);
  const cylMat = new THREE.MeshBasicMaterial({ color: 0x5ee7ff, wireframe: true });
  const cylinder = new THREE.Mesh(cylGeo, cylMat);
  engineGroup.add(cylinder);

  // Piston Head
  const pistonGeo = new THREE.CylinderGeometry(0.76, 0.76, 0.4, 32);
  const pistonMat = new THREE.MeshStandardMaterial({ color: 0xc8ff5a, metalness: 0.8 });
  const piston = new THREE.Mesh(pistonGeo, pistonMat);
  engineGroup.add(piston);

  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    piston.position.y = Math.sin(t * 8) * 0.7; // Piston stroke oscillation
    engineGroup.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();
}
