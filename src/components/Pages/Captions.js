import React, {Fragment} from 'react';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import {
  Col,
  Row,
} from 'reactstrap';
import { connection } from '../ShareDB/connection';
import styles from '../../index.module.scss';
import secStyles from '../SlideOut/SlideOut.module.scss';
import UpperModule from '../UpperModule';
import ShareDBBinding from '../ShareDB';

const Captions = ({ functions, thisState }) => {
  const doc = connection.get('stanley', 'coachella');
  const { userScrolled } = thisState;

  // ShareDB text area styles.
  const style = {
    color: '#000',
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    <Fragment>
    <div className={ styles.contentPanel }>
      <div className={ secStyles.contents }>
        <Row className={ styles.rowNoMargin }>
          <Col md={ 12 } className={ styles.colNoPadding }>
            <UpperModule />
          </Col>
        </Row>
      </div>
    </div>
        <Row className={ styles.rowNoMargin }
             onClick={ () => {
               functions.handleSetState({
                 arrowVisible: true,
                 scrollOff: true,
               });
             } }>
          <Col md={ 12 } className={ styles.colNoPadding }>
            <div className={ secStyles.whiteContentWrapper }
                 onClick={ () => {
                   functions.handleSetState({
                     arrowVisible: true,
                   });
                 } }>
              <InView
                style={ {
                  height: '3px',
                  display: 'inline',
                  position: 'absolute',
                  bottom: '20em',
                  overflow: 'hidden',
                } }
                as="span"
                threshold={ 1 }
                onChange={ state => functions.onUserScroll(state) }
              />
              <ShareDBBinding
                cssClass={ styles.liveTranscriptText }
                style={ style }
                doc={ doc }
                flag='≈'
                elementType="div" />
            </div>
            <InView
              style={ { height: '1px' } }
              as="div"
              threshold={ .1 }
              onChange={ !userScrolled
                ? state => functions.onScrollToBottom(state)
                : null }
            />
          </Col>
        </Row>
    </Fragment>
  );
};

export default Captions;
