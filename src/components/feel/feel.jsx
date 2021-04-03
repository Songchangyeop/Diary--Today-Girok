import React, { useState } from 'react';
import Emotion from '../emotion/emotion';
import styles from './feel.module.css';

const Feel = ({ changeEmotion, showFeelComponent }) => {
  const [emotions] = useState([
    '😀',
    '😄',
    '😚',
    '😆',
    '🤣',
    '😅',
    '😊',
    '🥰',
    '😨',
    '😜',
    '🤔',
    '😒',
    '😭',
    '🤨',
    '🥱',
    '😔',
    '🤮',
    '🤯',
    '👿',
  ]);

  return (
    <div className={styles.container}>
      {emotions.map((emotion) => (
        <Emotion
          emotion={emotion}
          changeEmotion={changeEmotion}
          showFeelComponent={showFeelComponent}
        ></Emotion>
      ))}
    </div>
  );
};

export default Feel;
