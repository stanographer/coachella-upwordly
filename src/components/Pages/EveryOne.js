import React from 'react';
import styles from '../SlideOut/index.module.scss';
import mainStyles from '../../index.module.scss';

const EveryOne = () => {
  return (
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
  );
};

export default EveryOne;
