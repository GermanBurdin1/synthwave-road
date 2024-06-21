import React, { useState, useEffect } from 'react';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import Taxi from './Taxi';

const Scene = () => {
  const { camera } = useThree();
  const [backgroundOffset, setBackgroundOffset] = useState(0);

  // Устанавливаем начальное положение камеры
  useEffect(() => {
    camera.position.set(0, 5, 10); // Позиция камеры позади такси и немного выше
    camera.lookAt(0, -2.5, 0); // Камера направлена на такси
  }, [camera]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    setBackgroundOffset(time * 0.5); // Эффект разгона фона
  });

  const texture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL + '/assets/images/background.jpg');

  return (
    <>
      <group position={[0, -5, 0]}> {/* Перемещаем всю группу ниже */}
        <Taxi />
      </group>
      <mesh position={[0, -5, -10]} scale={[40, 20, 1]}> {/* Перемещаем и масштабируем фон */}
        <planeGeometry attach="geometry" args={[1, 1]} />
        <meshBasicMaterial attach="material" map={texture} depthWrite={false} /> {/* Устанавливаем depthWrite для правильного порядка слоев */}
      </mesh>
    </>
  );
};

export default Scene;
