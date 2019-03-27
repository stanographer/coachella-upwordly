import React from 'react';
import styles from './Controls.module.scss';

const DownArrow = () => {
  return (
    <span className={ styles.scrollToBottom }
          style={ { transform: 'matrix(1, 0, 0, 1, 0, 0)' } }>
      <i className={ styles.icon }>
        <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <circle id="scroll-top-b" cx="24" cy="24" r="24" />
            <filter id="scroll-top-a" width="114.6%" height="114.6%" x="-7.3%" y="-5.2%"
                    filterUnits="objectBoundingBox">
              <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1" />
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.137256567 0" />
            </filter>
          </defs>
          <g fill="none" fillRule="nonzero">
            <g transform="translate(2 1)">
              <use fill="#000" filter="url(#scroll-top-a)" href="#scroll-top-b">
                <circle id="scroll-top-b" cx="24" cy="24" r="24" />
              </use>
              <use fill="#fff" href="#scroll-top-b">
                <circle id="scroll-top-b" cx="24" cy="24" r="24" fill="#fff" />
              </use>
            </g>
            <path d="M18 22l8 8 8-8" className={ styles.stroke } />
          </g>
        </svg>
      </i>
      <span className={ styles.isVisuallyHidden }>Scroll to Bottom</span>
    </span>
  );
};

export default DownArrow;
