"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingBoxes() {
  const boxes = useRef([...Array(5)].map(() => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ],
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
    scale: 0.5 + Math.random() * 0.5
  })));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    boxes.current.forEach((box, i) => {
      box.position[1] = Math.sin(time * 0.5 + i * Math.PI * 0.5) * 0.5;
      box.rotation[0] += 0.01;
      box.rotation[1] += 0.01;
    });
  });

  return (
    <>
      {boxes.current.map((box, i) => (
        <Box key={i} args={[1, 1, 1]} position={box.position} scale={box.scale}>
          <meshStandardMaterial
            color={new THREE.Color().setHSL(i * 0.2, 0.8, 0.5)}
            transparent
            opacity={0.6}
            metalness={0.5}
            roughness={0.2}
          />
        </Box>
      ))}
    </>
  );
}