import React, { useRef, useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Taxi = (props) => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/models/taxi/scene.gltf');
  const ref = useRef();
  const [position, setPosition] = useState([0, -2, 0]); // Позиционируем машину ниже
  const [scale, setScale] = useState([5, 5, 5]); // Увеличиваем масштаб модели

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
      scale={scale}
      {...props}
    />
  );
};

export default Taxi;
