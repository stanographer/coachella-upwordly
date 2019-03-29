import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import styles from './index.module.scss';

const Contents = () => {
  return (
    <div className={ styles.contents }>
      <Row>
        <Col sm={ 12 } lg={ 6 }>
          <div className={ styles.contentBlock }>
            <h1 className={ styles.header }>
              About
            </h1>
            <p>
              Real-time captioning is brought to you by TextNexus.
            </p>
          </div>

        </Col>
        <Col sm={ 12 } lg={ 6 }>
          <div className={ styles.contentBlock }>
            <h1 className={ styles.header }>
              More Info
            </h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contents;
