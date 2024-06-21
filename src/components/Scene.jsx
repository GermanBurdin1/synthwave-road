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

import React from 'react';
import Taxi from './Taxi';
import { useThree } from '@react-three/fiber';

const Scene = () => {
  const { camera } = useThree();

  // Устанавливаем начальное положение камеры
  React.useEffect(() => {
    camera.position.set(0, 2, 5); // Позиция камеры позади такси и немного выше
    camera.lookAt(0, -1.5, 0); // Камера направлена на такси
  }, [camera]);

  return (
    <group>
      <Taxi />
    </group>
  );
};

export default Scene;

