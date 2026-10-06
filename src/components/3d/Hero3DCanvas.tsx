"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function WorkstationMesh() {
  const meshRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (headRef.current) {
      headRef.current.position.y = 1.25 + Math.sin(t * 2) * 0.03;
      headRef.current.rotation.y = (state.pointer.x * Math.PI) / 4;
      headRef.current.rotation.x = (-state.pointer.y * Math.PI) / 6;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.08;
    }
  });

  return (
    <group ref={meshRef} position={[1.5, -0.6, 0]}>
      {/* Desk Surface */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.4, 0.08, 1.2]} />
        <meshStandardMaterial color="#14141c" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Monitor */}
      <mesh position={[0, 0.6, -0.2]}>
        <boxGeometry args={[1.6, 0.95, 0.06]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>

      {/* Screen Glowing Display */}
      <mesh position={[0, 0.6, -0.16]}>
        <planeGeometry args={[1.52, 0.88]} />
        <meshBasicMaterial color="#c2a4ff" wireframe />
      </mesh>

      {/* Avatar Head Group */}
      <group ref={headRef} position={[0, 1.25, 0.4]}>
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <MeshWobbleMaterial color="#14141c" factor={0.15} speed={1.5} roughness={0.1} />
        </mesh>
        {/* Cyber Eyes */}
        <mesh position={[-0.1, 0.05, 0.28]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#c8ff5a" />
        </mesh>
        <mesh position={[0.1, 0.05, 0.28]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#c8ff5a" />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 1.8, 4.5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[2, 3, 2]} color="#c2a4ff" intensity={3} />
        <pointLight position={[-2, 1, 1]} color="#c8ff5a" intensity={2} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <WorkstationMesh />
        </Float>
      </Canvas>
    </div>
  );
}
