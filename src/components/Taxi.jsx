import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Taxi = (props) => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/models/taxi.gltf');
  const ref = useRef();
  
  return <primitive ref={ref} object={gltf.scene} {...props} />;
};

export default Taxi;
