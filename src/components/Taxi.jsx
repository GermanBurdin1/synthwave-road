import React, { useRef, useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

const Taxi = (props) => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/models/taxi/scene.gltf');
  const pattern2 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/assets/models/taxi/textures/pattern_2_1_normal.png');
  const pattern4 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/assets/models/taxi/textures/pattern_4_normal.png');
  const shadow = useLoader(TextureLoader, process.env.PUBLIC_URL + '/assets/models/taxi/textures/shadow_baseColor.png');
  const ref = useRef();
  const [position, setPosition] = useState([0, -7, 0]); // Опускаем машину вниз
  const [scale, setScale] = useState([1, 1, 1]); // Масштаб модели
  const [rotation, setRotation] = useState([0, Math.PI, 0]); // Поворачиваем машину на 180 градусов

  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          switch (child.material.name) {
            case 'pattern_2_1':
              child.material.map = pattern2;
              break;
            case 'pattern_4':
              child.material.map = pattern4;
              break;
            case 'shadow':
              child.material.map = shadow;
              break;
            default:
              break;
          }
          child.material.needsUpdate = true;
        }
      });
    }
  }, [gltf, pattern2, pattern4, shadow]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition((prevPosition) => {
        let newX = prevPosition[0];
        let newZ = prevPosition[2];
        
        switch (event.key) {
          case 'ArrowUp':
            newZ -= 0.1;
            break;
          case 'ArrowDown':
            newZ += 0.1;
            break;
          case 'ArrowLeft':
            newX -= 0.1;
            break;
          case 'ArrowRight':
            newX += 0.1;
            break;
          default:
            break;
        }

        // Ограничиваем движение машины в пределах дорожной полосы
        if (newX < -1.5) newX = -1.5;
        if (newX > 1.5) newX = 1.5;

        return [newX, prevPosition[1], newZ];
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      rotation={rotation}
      scale={scale}
      {...props}
    />
  );
};

export default Taxi;



