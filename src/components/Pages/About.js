import React, { Fragment } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import styles from '../SlideOut/SlideOut.module.scss';
import mainStyles from '../../index.module.scss';

const About = () => {
  return (
    <Fragment>
      <Row className={ mainStyles.rowNoMargin }>
        <Col md={ 10 } lg={ 12 } className={ mainStyles.colNoPadding }>
          <div className={ mainStyles.contentPanel }>
            <div className={ styles.contents }>
              <header
                aria-label="Live Captioning Header"
                className={ mainStyles.mainHeader }>
                <h1>About Live Captioning</h1>
              </header>
              <section>
                Coachella welcomes attendees with disabilities. We are dedicated to continually improving our efforts to
                ensure attendees have access to all festival goods and services, regardless of ability. We are now proud
                to
                offer live captioning for our main-stage performances for our deaf and non-hard-of-hearing attendees.
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
                <h3>WHAT IS IT?</h3>
                <div
                  aria-placeholder="Short horizontal line"
                  className={ mainStyles.boxTop4 }>
                  <hr className={ mainStyles.hr } />
                </div>
              </div>
              <strong>Live captioning</strong> is a service typically requested by the deaf and hard of hearing for
              communication access but people all kinds can enjoy its benefits!
            </p>
            <p>
              <div className={ styles.sectionHeader }>
                <h3>HOW CAN I USE IT?</h3>
                <div
                  aria-placeholder="Short horizontal line"
                  className={ mainStyles.boxTop4 }>
                  <hr className={ mainStyles.hr } />
                </div>
              </div>
              Using the <a
              href="https://www.coachella.com/mobile/"
              rel="noopener noreferrer"
              title="Official Coachella App (opens a new window)"
              target="_blank">Coachella App</a> or via the <a
              href="https://www.coachella.com/"
              rel="noopener noreferrer"
              title="Official Coachella Site (opens a new window)"
              target="_blank">official website</a>, you have access to this page at all
              times. Whether you want to sing along or know what they're saying while you're listening from afar on
              the
              grassy knoll, you'll always have instant access to the text what they're saying on stage in the palm of
              your hands.
            </p>
            <p>
              <div className={ styles.sectionHeader }>
                <h3>HOW'S IT DONE?</h3>
                <div
                  aria-placeholder="Short horizontal line"
                  className={ mainStyles.boxTop4 }>
                  <hr className={ mainStyles.hr } />
                </div>
              </div>
              What you're reading is, for the most part, is a form of extreme typing at speeds of up to 250-300 WPM
              by <em>real humans</em> — no automatic speech recognition or AI involved!
            </p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default About;
