import React, { Fragment } from 'react';
import TrackTitle from '../../components/TrackTitle';
import styles from '../../index.module.scss';

const UpperModule = (props) => {
  return (
    <Fragment>
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
