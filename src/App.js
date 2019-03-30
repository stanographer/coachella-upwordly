import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import { animateScroll as scroll } from 'react-scroll/modules';
import { css } from 'emotion';
import Drawer from 'react-drag-drawer';

// Main assets
import './assets/fonts/fonts.scss';
import styles from './index.module.scss';

// Modules
import { Arrow } from './components/Controls';
import BgVideo from './components/BgVideo';
import { connection } from './components/ShareDB/connection';
import Ornament from './components/Ornament';
import Navigation from './components/Navigation';
import ShareDBBinding from './components/ShareDB';
import UpperModule from './components/UpperModule';
import SlideOut from './components/SlideOut';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrowVisible: false,
      loading: true,
      drawerOpen: false,
      userScrolled: false,
      navbarFixed: false,
      transparentNav: true,
    };

    this.doc = connection.get('stanley', 'coachella');

    this.onLoaded = this.onLoaded.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount() {
    document.title = 'Coachella Captions';
  }

  onLoaded = () => {
    this.setState({
      loading: false
    });
  };

  // Initiatives an auto-scroll to the bottom
  // once the div grows in size.
  onScrollToBottom = atBottom => {
    if (!atBottom) this.autoscroll();
  };

  // Uses a different intersection observer
  // to see if the user scrolled up.
  onUserScroll = state => {
    if (state === false) {
      this.setState({
        arrowVisible: true,
        userScrolled: true,
      });
    } else {
      this.setState({
        arrowVisible: false,
        userScrolled: false,
      });
    }
    console.log('user scroll', this.state.userScrolled);
  };

  // Toggles the drawer info page.
  toggleDrawer = () => {
    let { drawerOpen, navbarFixed } = this.state;

    this.setState({
      drawerOpen: !drawerOpen,
      navbarFixed: !navbarFixed,
      transparentNav: false,
    });

  };

  // Starts auto-scrolling forcibly.
  autoscroll = () => {
    setTimeout(() => {
      scroll.scrollToBottom({
        delay: 0,
        duration: 100,
        offset: 30,
        isDynamic: true,
        smooth: true,
      });
    }, 0);

    this.setState({
      arrowVisible: false,
      userScrolled: false,
    });
  };

  render() {
    // Styles for the modal.
    const modalStyle = css`
      position: fixed;
      top: 7.6rem;
      background-color: white;
      width: 100%;
      min-width: 100%;
      min-height: 70%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
     
      @media (max-width: 480px) {
        min-height: 100vh;
        top: 0;
       }
       
       @media (max-width: 576px) {
        min-height: 100%;
        top: 0;
       }
       
       @media (max-width: 768px) {
        min-height: 100%;
        top: 7.6rem;
       }
       
       @media (max-width: 992px) {
        min-height: 100%;
        top: 0;
       }`;

    const style = {
      color: '#000',
      fontFamily: 'Poppins, sans-serif'
    };

    const {
            arrowVisible,
            drawerOpen,
            navbarFixed,
            transparentNav,
            userScrolled,
          } = this.state;

    return (
      <div
        onClick={ () => {
          this.setState({
            arrowVisible: true,
            scrollOff: true
          });
        } }
      >
        <Ornament />
        <BgVideo />
        <Navigation
          arrowVisible={ arrowVisible }
          closeModal={ this.toggleDrawer }
          drawerOpen={ drawerOpen }
          navbarFixed={ navbarFixed }
          toggleDrawer={ this.toggleDrawer }
          transparentNav={ transparentNav }
          userScrolled={ userScrolled }
        />
        <Drawer
          direction="top"
          modalElementClass={ modalStyle }
          onRequestClose={ this.toggleDrawer }
          open={ drawerOpen }
        >
          <SlideOut closeModal={ this.toggleDrawer } />
        </Drawer>
        <div className={ styles.contentPanel }>
          <Container className={ styles.captionBox } fluid>
            <Row className={ styles.rowNoMargin }>
              <Col md={ 12 } className={ styles.colNoPadding }>
                <div className={ styles.upperModuleWrapper }>
                  <UpperModule />
                </div>
              </Col>
            </Row>
            <Row className={ styles.rowNoMargin }
                 onClick={ () => {
                   this.setState({
                     arrowVisible: true,
                     scrollOff: true
                   });
                 } }>
              <Col md={ 12 } className={ styles.colNoPadding }>
                <div className={ styles.liveTranscriptText }
                     onTouchMove={ () => {
                       this.setState({
                         arrowVisible: true
                       });
                     } }>
                  <InView
                    style={ {
                      height: '3px',
                      display: 'inline',
                      position: 'absolute',
                      bottom: '20em',
                      overflow: 'hidden'
                    } }
                    as="span"
                    threshold={ 1 }
                    onChange={ state => this.onUserScroll(state) }
                  />
                  <ShareDBBinding
                    cssClass={ styles.liveTranscriptText }
                    style={ style }
                    doc={ this.doc }
                    flag='≈'
                    elementType="div" />
                </div>
                <InView
                  style={ { height: '1px' } }
                  as="div"
                  threshold={ .1 }
                  onChange={ state => this.onScrollToBottom(state) }
                />
              </Col>
              <h1>{ this.state.scrollOff }</h1>
            </Row>
          </Container>
          { arrowVisible && !navbarFixed
            ? <Arrow
              scrollDown={ () => {
                this.setState({
                  userScrolled: false,
                  arrowVisible: false,
                }, () => this.autoscroll());
              } } />
            : '' }
        </div>
      </div>
    );
  }
}

export default App;
