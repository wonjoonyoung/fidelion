// Music.js
import React, { useState, useEffect } from 'react';

const Music = ({ src }) => {
  const [audio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  console.log(audio)

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? '일시정지' : '재생'}</button>
    </div>
  );
};

export default Music;
