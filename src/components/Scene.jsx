// import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import Taxi from './Taxi';
// import NeonRoad from './NeonRoad';
// import Stars from './Stars';
// import Stop from './Stop';

// const stops = [
//   { title: 'Project 1', position: [0, 0, -10], link: 'https://github.com/user/project1', model: process.env.PUBLIC_URL + '/assets/models/stop1.gltf' },
//   { title: 'Project 2', position: [0, 0, -30], link: 'https://github.com/user/project2', model: process.env.PUBLIC_URL + '/assets/models/stop2.gltf' },
//   { title: 'Project 3', position: [0, 0, -50], link: 'https://github.com/user/project3', model: process.env.PUBLIC_URL + '/assets/models/stop3.gltf' },
//   { title: 'Project 4', position: [0, 0, -70], link: 'https://github.com/user/project4', model: process.env.PUBLIC_URL + '/assets/models/stop4.gltf' },
//   { title: 'Project 5', position: [0, 0, -90], link: 'https://github.com/user/project5', model: process.env.PUBLIC_URL + '/assets/models/stop5.gltf' },
// ];

// const Scene = ({ onSelectProject }) => {
//   const taxiRef = useRef();

//   useFrame((state) => {
//     const { clock } = state;
//     taxiRef.current.position.z = clock.getElapsedTime() * -5;
//   });

//   const handleStopClick = (index) => {
//     const position = stops[index].position[2];
//     taxiRef.current.position.z = position;
//     onSelectProject(stops[index]);
//   };

//   return (
//     <>
//       <Taxi ref={taxiRef} />
//       <NeonRoad />
//       <Stars />
//       {stops.map((stop, index) => (
//         <Stop key={index} stop={stop} onClick={() => handleStopClick(index)} />
//       ))}
//     </>
//   );
// };

// export default Scene;

// Scene.jsx
import React, { useRef, useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Taxi = (props) => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/models/taxi/scene.gltf');
  const ref = useRef();

  return <primitive ref={ref} object={gltf.scene} {...props} />;
};

const Scene = () => {
  const [position, setPosition] = useState([0, 0, 0]);

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
    <>
      <Taxi position={position} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
    </>
  );
};

export default Scene;

