import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import { animateScroll as scroll } from 'react-scroll/modules';
import { css } from 'emotion';
import Drawer from 'react-drag-drawer';

// Main assets
import styles from './index.module.scss';

// Modules
import { Arrow } from './components/Controls';
import { About, Captions, Partners } from './components/Pages';
import BgVideo from './components/BgVideo';
import { connection } from './components/ShareDB/connection';
import Ornament from './components/Ornament';
import Navigation from './components/Navigation';
import UpperModule from './components/UpperModule';
import SlideOut from './components/SlideOut';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
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
      loading: false,
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

  // Changes the active page based on menu controls.
  handleActivePage = num => this.setState({ activePage: num });

  // Handles setting local state externally.
  handleSetState = state => this.setState({ ...state });

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

  render() {
    // Styles for the modal.
    const modalStyle = css`
      position: fixed;
      top: 0;
      background-color: white;
      width: 100%;
      min-width: 100%;
      min-height: 60%;
     
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
        align-items: unset;
        min-height: 100%;
        top: 0;
       }`;

    const {
            arrowVisible,
            activePage,
            drawerOpen,
            mobile,
            navbarFixed,
            transparentNav,
            userScrolled,
          } = this.state;

    // These are the pages that can be loaded. As the user clicks
    // on a menu item, a function is executed and a number
    // is passed. Based on that number, the appropriate page
    // is displayed.
    const pages = {
      0: <Captioning
        doc={ this.doc }
        thisState={ this.state }
        functions={
          {
            autoscroll: this.autoscroll,
            handleSetState: this.handleSetState,
            onScrollToBottom: this.onScrollToBottom,
            onUserScroll: this.onUserScroll,
          }
        }
      />,
      1: <About />,
      2: <Partners />,
    };

    const page = pages[activePage];

    return (
      <div
        onClick={ () => {
          this.setState({
            arrowVisible: true,
            scrollOff: true,
          });
        } }
      >
        <Ornament />
        <BgVideo />
        <Navigation
          arrowVisible={ arrowVisible }
          toggleModal={ this.toggleDrawer }
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
          <SlideOut
            toggleModal={ this.toggleDrawer }
            handleActivePage={ this.handleSetState }
          />
        </Drawer>
        { page }
      </div>
    );
  }
}

const Captioning = ({ doc, functions, thisState }) => {
  const { arrowVisible, navbarFixed, userScrolled } = thisState;

  return (
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
               functions.handleSetState({
                 arrowVisible: true,
                 scrollOff: true,
               });
             } }>
          <Col md={ 12 } className={ styles.colNoPadding }>
            <div className={ styles.liveTranscriptText }
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
              <Captions
                doc={ doc }
                styles={ styles }
              />
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
      </div>
      { arrowVisible && !navbarFixed
        ? <Arrow scrollDown={ functions.autoscroll } />
        : '' }
    </div>
  );
};

export default App;
