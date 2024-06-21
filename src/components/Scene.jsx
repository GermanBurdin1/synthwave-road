import React, { useEffect } from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import Taxi from './Taxi';

const Scene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 5, 10); // Позиция камеры позади такси и немного выше
    camera.lookAt(0, -3, 0); // Камера направлена на такси
  }, [camera]);

  const texture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL + '/assets/images/background.jpg');

  return (
    <>
      <group>
        <Taxi />
      </group>
      <mesh position={[0, 0, -10]} scale={[100, 50, 1]} rotation={[-Math.PI / 2, 0, 0]}> {/* Увеличиваем и перемещаем фон дальше */}
        <planeGeometry attach="geometry" args={[1, 1]} />
        <meshBasicMaterial attach="material" map={texture} /> {/* Убираем наложение фона на машину */}
      </mesh>
    </>
  );
};

export default Scene;
