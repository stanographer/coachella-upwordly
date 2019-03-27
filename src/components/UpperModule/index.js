import React, { Fragment } from 'react';
import TrackTitle from '../../components/TrackTitle';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import styles from '../../index.module.scss';

const UpperModule = (props) => {
  return (
    <Fragment>
      <InView
        as="div"
        threshold={ .1 }
        onChange={ state => props.handleNavTransparency(state) } />
      <div className={ styles.upperModule }>
        <div className={ styles.trackTitle }>
          <header className={ styles.mainHeader }>
            <h1>
              Realtime Captioning
            </h1>
          </header>
          <TrackTitle
            festival="coachella"
            track="Imposible"
            artist="Luis Fonsi & Ozuna"
          />
          <div className={styles.boxTop4}>
            <hr className={ styles.hr } />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpperModule;
