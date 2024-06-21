import React, { useState } from 'react';
import '../RadioPlayer.css';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = React.useRef(new Audio('https://stream-url-of-synthwave-radio'));

  const togglePlay = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="radio-player">
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause Synthwave Radio' : 'Play Synthwave Radio'}
      </button>
    </div>
  );
};

export default RadioPlayer;
