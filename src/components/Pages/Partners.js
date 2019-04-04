import React, { Fragment } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import styles from '../SlideOut/index.module.scss';
import mainStyles from '../../index.module.scss';

// Content imports

import { GoldenvoiceLogo, TenFiftyLogo } from '../Logos';


const Partners = () => {
  return (
    <Fragment>
      <Row className={ mainStyles.rowNoMargin }>
        <Col md={ 10 } lg={ 12 } className={ mainStyles.colNoPadding }>
          <div className={ mainStyles.contentPanel }>
            <div className={ styles.contents }>
              <header
                aria-label="Live Captioning Header"
                className={ mainStyles.mainHeader }>
                <h1>Live Captioning Partners</h1>
              </header>
              <section>
                Several partners have made live captioning at Coachella Valley Music and Arts Festival 2019 possible.
              </section>
              <div
                aria-placeholder="Short horizontal line"
                className={ mainStyles.boxTop4 }>
                <hr className={ mainStyles.hr } />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={ mainStyles.rowNoMargin }>
        <Col md={ 10 } lg={ 12 } className={ mainStyles.colNoPadding }>
          <div className={ styles.whiteContentWrapper }>
            <p>
              <div className={ styles.sectionHeader }>
                <h3>TEXTNEXUS</h3>
                <div
                  aria-placeholder="Short horizontal line"
                  className={ mainStyles.boxTop4 }>
                  <hr className={ mainStyles.hr } />
                </div>
              </div>
              <h1>LOGO HERE</h1>
              <p>
                <a
                  href="https://stanographer.com"
                  rel="noopener noreferrer"
                  title="TextNexus website (opens a new window)"
                  target="_blank">TextNexus</a> is a consultancy and dev shop that specializes in and web, mobile, and other tech-based realtime captioning solutions for large events.
              </p>
            </p>
            <p>
            <div className={ styles.sectionHeader }>
              <h3>TENFIFTY ENTERTAINMENT</h3>
              <div
                aria-placeholder="Short horizontal line"
                className={ mainStyles.boxTop4 }>
                <hr className={ mainStyles.hr } />
              </div>
            </div>
            <TenFiftyLogo stylingClass={ styles } />
            <p>
              <a
                href="https://www.tenfiftyent.com/"
                rel="noopener noreferrer"
                title="Goldenvoice website (opens a new window)"
                target="_blank">Ten Fifty Entertainment</a> is the leading provider of Accessibility and Guest Services operations throughout the nation. With a legion of festival-forged professionals, we ensure live events create unforgettable experiences.
            </p>
          </p>
            <p>
              <div className={ styles.sectionHeader }>
                <h3>GOLDENVOICE</h3>
                <div
                  aria-placeholder="Short horizontal line"
                  className={ mainStyles.boxTop4 }>
                  <hr className={ mainStyles.hr } />
                </div>
              </div>
              <GoldenvoiceLogo stylingClass={ styles } />
              <p>
                <a
                  href="https://www.goldenvoice.com/"
                  rel="noopener noreferrer"
                  title="Goldenvoice website (opens a new window)"
                  target="_blank">Goldenvoice</a> is the second largest event producer in the United States and organizes events such as Coachella, Stagecoach, FYF Fest, Firefly Festival, and more.
              </p>
            </p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Partners;
