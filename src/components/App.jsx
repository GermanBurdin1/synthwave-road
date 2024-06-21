import React, { useState } from 'react';
import '../App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import Modal from './Modal';
import Karma from './Karma';
import RadioPlayer from './RadioPlayer';
import ShareForm from './ShareForm';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [karma, setKarma] = useState(0);
  const [showShareForm, setShowShareForm] = useState(false);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setKarma(karma + 10);
  };

  const handleLinkClick = () => {
    setKarma(karma + 20);
  };

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    setShowShareForm(true);
    return (event.returnValue = "Are you sure you want to leave?");
  };

  React.useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} />
        <OrbitControls />
        <Scene onSelectProject={handleProjectSelect} />
      </Canvas>
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} onLinkClick={handleLinkClick} />
      )}
      <RadioPlayer />
      <Karma karma={karma} />
      {showShareForm && <ShareForm onClose={() => setShowShareForm(false)} />}
    </div>
  );
}

export default App;
