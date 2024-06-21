import React, { useRef, useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Taxi = (props) => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/models/taxi/scene.gltf');
  const ref = useRef();
  const [position, setPosition] = useState([0, -1.5, -5]); // Устанавливаем начальную позицию ниже и на дороге
  const [scale, setScale] = useState([1, 1, 1]); // Увеличим масштаб модели

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition((prevPosition) => {
        switch (event.key) {
          case 'ArrowUp':
            return [prevPosition[0], prevPosition[1], prevPosition[2] - 0.1];
          case 'ArrowDown':
            return [prevPosition[0], prevPosition[1], prevPosition[2] + 0.1];
          case 'ArrowLeft':
            return [prevPosition[0] - 0.1, prevPosition[1], prevPosition[2]];
          case 'ArrowRight':
            return [prevPosition[0] + 0.1, prevPosition[1], prevPosition[2]];
          default:
            return prevPosition;
        }
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
