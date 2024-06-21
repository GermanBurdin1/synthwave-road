import React, { forwardRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Stop = forwardRef(({ stop, onClick }, ref) => {
  const gltf = useLoader(GLTFLoader, stop.model);

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={stop.position}
      scale={[0.5, 0.5, 0.5]}
      onClick={onClick}
    />
  );
});

export default Stop;
