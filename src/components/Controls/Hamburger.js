import React from 'react';
import styles from './Arrow.module.scss';

const Hamburger = () => {
  return (
    <div style={ { transform: 'matrix(1, 0, 0, 1, 0, 0)' } }>
      <button className={ styles.navButton } aria-label="Open Nav">
        <span>
          <i className={ styles.icon }>
            <svg viewBox="0 0 52 52">
              <defs>
                <circle
                  id="hamburgerB"
                  cx="24"
                  cy="24"
                  r="24" />
                <filter
                  id="hamburgerA"
                  width="114.6%"
                  height="114.6%"
                  x="-7.3%"
                  y="-5.2%"
                  filterUnits="objectBoundingBox">
                    <feOffset
                      dy="1"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="1" />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.137256567 0" />
                </filter>
              </defs>
              <g fill="none" fillRule="nonzero">
                <g transform="translate(2 1)">
                  <use fill="#000"
                       filter="url(#hamburgerA)"
                       href="#hamburgerB">
                    <circle id="hamburgerB" cx="24" cy="24" r="24" />
                  </use>
                  <use fill="#FFF" href="#hamburgerB">
                    <circle id="hamburgerB" cx="24" cy="24" r="24" />
                  </use>
                </g>
                <path strokeLinecap="square"
                      d="M20 22h12-12zm6 6h6-6z"
                      className={ styles.stroke } />
              </g>
            </svg>
          </i>
        </span>
        <span className={ styles.isVisuallyHidden }>
        Toggle Menu
      </span>
      </button>
    </div>
  );
};

export default Hamburger;
