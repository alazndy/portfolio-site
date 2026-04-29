'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Grid() {
  const meshRef = useRef<THREE.Points>(null);

  const count = 50;
  const separation = 2;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        pos[(i * count + j) * 3] = (i - count / 2) * separation;
        pos[(i * count + j) * 3 + 1] = 0;
        pos[(i * count + j) * 3 + 2] = (j - count / 2) * separation;
      }
    }
    return pos;
  }, [count, separation]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    const posAttribute = meshRef.current.geometry.getAttribute('position');
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = i * count + j;
        const x = posAttribute.getX(index);
        const z = posAttribute.getZ(index);
        const y = Math.sin(x * 0.3 + time) * 0.5 + Math.cos(z * 0.3 + time) * 0.5;
        posAttribute.setY(index, y);
      }
    }
    posAttribute.needsUpdate = true;
    
    meshRef.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00ccff"
        size={0.05}
        sizeAttenuation={true}
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none opacity-40">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 15, 30]} fov={50} />
        <ambientLight intensity={0.5} />
        <Grid />
        <fog attach="fog" args={['#030305', 20, 60]} />
      </Canvas>
    </div>
  );
}
