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
      drawerOpen: false,
      loading: true,
      mobile: false,
      navbarFixed: false,
      transparentNav: true,
      userScrolled: false,
    };


    this.doc = connection.get('stanley', 'coachella');
    this.elementRef = React.createRef();
    this.bodyElement = React.createRef(); // For body scroll lock when modal is open.

    this.onLoaded = this.onLoaded.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount() {
    document.title = 'Coachella Captions';
    this.element = this.elementRef.current;
    this.bodyElement = document.querySelector('body');

      window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this), false);
  }

  onLoaded = () => {
    this.setState({
      loading: false
    });
  };

  // Initiatives an auto-scroll to the bottom once the div grows in size.
  onScrollToBottom = atBottom => !atBottom ? this.autoscroll() : null;

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
  };

  // Detects a resize in the viewport, AKA detects whether the user is using mobile.
  resize = () => this.setState({ mobile: window.innerWidth <= 760 });

  // Toggles the drawer info page.
  toggleDrawer = () => {
    let { drawerOpen, navbarFixed } = this.state;

    // Allows scrolling again on the body after closing modal.
    this.setState({
      drawerOpen: !drawerOpen,
      navbarFixed: !navbarFixed,
      transparentNav: false,
    }, () => {
      if (!drawerOpen) {
        this.bodyElement.setAttribute('class', 'modal-open');
      } else {
        this.bodyElement.removeAttribute('class');
      }
    });
  };

  // Starts auto-scrolling forcibly.
  // Hides the scroll-down arrow on scroll.
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
      top: 0;
      background-color: white;
      width: 100%;
      min-width: 100%;
      min-height: 100%;
     
      @media (max-width: 480px) {
        width: 100vw;
        max-width: 100%;
        margin-bottom: 0;
        min-height: 100vh;
        top: 0;
       }
       
       @media (max-width: 576px) {
        width: 100vw;
        max-width: 100%;
        margin-bottom: 0;
        min-height: 100%;
        top: 0;
       }
       
       @media (max-width: 768px) {
        top: auto;
        min-height: 100%;
        width: 100%;
        max-width: 100%;
        display: flex;
        align-items: center;
       }
       
       @media (max-width: 992px) {
        min-height: 100%;
        top: 0;
       }`;

    // ShareDB text area styles.
    const style = {
      color: '#000',
      fontFamily: 'Poppins, sans-serif',
    };

    const {
            arrowVisible,
            drawerOpen,
            mobile,
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
          mobile={ mobile }
          navbarFixed={ navbarFixed }
          toggleDrawer={ this.toggleDrawer }
          transparentNav={ transparentNav }
          userScrolled={ userScrolled }
        />
        <Drawer
          direction={ mobile ? 'left' : 'top' }
          modalElementClass={ modalStyle }
          onRequestClose={ this.toggleDrawer }
          open={ drawerOpen }
          parentElement={ document.body }
        >
          <SlideOut closeModal={ this.toggleDrawer } />
        </Drawer>
        <div className={ styles.contentPanel }>
          <div className={ styles.captionBox }>
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
                  onChange={ !userScrolled
                    ? state => this.onScrollToBottom(state)
                    : null }
                />
              </Col>
              <h1>{ this.state.scrollOff }</h1>
            </Row>
          </div>
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
