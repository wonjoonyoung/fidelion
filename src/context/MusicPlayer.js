// MusicPlayer.js
import React from 'react';
import Music from './Music';

const MusicPlayer = () => {

  const musicSrc = '../story/asset/story_bgm.mp3';

  return (
    <div>
      <Music src={musicSrc} />
    </div>
  );
};

export default MusicPlayer;
