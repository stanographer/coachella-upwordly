import React from 'react';

const Hamburger =
        ({
           circleID,
           filter,
           href,
           path,
           styles,
           title
         }) => {
          return (
            <button aria-label="Open nav">
              <span className={ styles.location } style={ { transform: 'matrix(1, 0, 0, 1, 0, 0)' } }>
                <i className={ styles.icon }>
                  <svg
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <circle
                        id={ circleID }
                        cx="24"
                        cy="24"
                        r="24" />
                      <filter
                        filter={ filter }
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
                        <use
                          fill="#000"
                          filter={ `url(#${ filter })` }
                          href={ `#${ href }` }>
                          <circle id={ circleID } cx="24" cy="24" r="24" />
                        </use>
                        <use fill="#FFF" href={ `#${ href }` }>
                          <circle id={ circleID } cx="24" cy="24" r="24" />
                        </use>
                      </g>
                      <path
                        strokeLinecap="square"
                        d={ path }
                        className={ styles.stroke } />
                    </g>
                  </svg>
                </i>
              <span className={ styles.isVisuallyHidden }>{ title }</span>
              </span>
            </button>
          );
        };

export default Hamburger;
