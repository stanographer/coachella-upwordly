import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import mainStyles from '../../index.module.scss';
import styles from './index.module.scss';

import { GoldenvoiceLogo } from '../Logos';

const Contents = () => {
  return (
    <div className={ styles.contents }>
      <Row>
        <Col sm={ 12 } lg={ 6 }>
          <div className={ styles.contentBlock }>
            <h1 className={ styles.header }>
              LIVE CAPTIONING
            </h1>
            <hr className={ `${ mainStyles.hr } ${ mainStyles.hrSmall }` } />
            <ul>
              <h3>WHAT IS IT?</h3>
              <li>
                <strong>Live captioning</strong> is a service typically requested by the deaf and hard of hearing for
                communication access but people all kinds can enjoy its benefits!
              </li>
              <h3>HOW CAN I USE IT?</h3>
              <li>
                Whether you want to sing along or know what they're saying while you're listening from afar on the
                grassy knoll, you'll always have instant access to the text what they're saying on stage in the palm of
                your hands.
              </li>
              <h3>HOW'S IT DONE?</h3>
              <li>
                What you're reading is, for the most part, is a form of extreme typing at speeds of up to 250-300 WPM
                by <em>real humans</em> — no automatic speech recognition or AI involved!
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={ 12 } lg={ 6 }>
          <div className={ styles.contentBlock }>
            <h1 className={ styles.header }>
              every one
            </h1>
            <hr className={ `${ mainStyles.hr } ${ mainStyles.hrSmall }` } />
            <p>
              As a part of <a href="https://www.coachella.com/every-one/" aria-label="every one link" target="_blank"
                              rel="noopener noreferrer">every one</a>, we are pushing ourselves and our guests to do
              better and to be better. We are taking deliberate steps to develop a festival culture that is safe and
              inclusive for everyone. Persons of any gender identity or expression, sex, sexual orientation, race,
              religion, age or ability are welcome at Coachella.
            </p>
          </div>
          <div className={ styles.contentBlock }>
            <h1 className={ styles.header }>
              PARTNERS
            </h1>
            <hr className={ `${ mainStyles.hr } ${ mainStyles.hrSmall }` } />
            <div className={ styles.partnerLogos }>
              <div className={ styles.partnerLogo }>
                <GoldenvoiceLogo stylingClass={ mainStyles } />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contents;
