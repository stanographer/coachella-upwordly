import React from 'react';
import BgVideoWebM from '../../assets/videos/bg-1000k.webm';
import BgVideoMp4 from '../../assets/videos/bg-1000k.mp4';
import styles from '../../index.module.scss';

const BgVideo = () =>
  <div className={ styles.TheBackground }>
    <video
      autoPlay
      playsInline={ true }
      loop="loop"
      muted="muted"
      preload="none"
      aria-label=""
      className={ styles.TheBackgroundVideo }
    >
      <source src={ BgVideoWebM } type="video/webm" />
      <source src={ BgVideoMp4 } type="video/mp4" />
    </video>
  </div>;

export default BgVideo;
