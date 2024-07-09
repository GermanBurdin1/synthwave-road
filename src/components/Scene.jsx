import React, { useEffect } from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import Taxi from './Taxi';

const Scene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 1, 5); 
    camera.lookAt(0, 0, 0); 
  }, [camera]);



  return (
    <>
      <group>
        <Taxi />
      </group>
     
    </>
  );
};

export default Scene;

