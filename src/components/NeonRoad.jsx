import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeonRoad = () => {
  const roadRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    roadRef.current.position.z = (clock.getElapsedTime() * -5) % 50;
  });

  const roadMaterial = new THREE.MeshBasicMaterial({ color: 'hotpink' });
  const roadGeometry = new THREE.PlaneGeometry(10, 50);

  return (
    <mesh ref={roadRef} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} material={roadMaterial} geometry={roadGeometry} />
  );
};

export default NeonRoad;
