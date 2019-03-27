import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import { animateScroll as scroll } from 'react-scroll/modules';
import { connection } from './components/ShareDB/connection';
import ShareDBBinding from './components/ShareDB';
import Navigation from './components/Navigation';
import { Arrow } from './components/Controls';
import UpperModule from './components/UpperModule';
import Drawer from 'react-drag-drawer';

// Main assets
import BgVideo from './components/BgVideo';
import Ornament from './components/Ornament';
import './assets/fonts/fonts.scss';
import styles from './index.module.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrowVisible: false,
      loading: true,
      scrollOff: true,
      transparentNav: true,
    };

    this.doc = connection.get('stanley', 'coachella');

    this.handleNavTransparency = this.handleNavTransparency.bind(this);
    this.onLoaded = this.onLoaded.bind(this);
    this.scrollIfReady = this.scrollIfReady.bind(this);
  }

  componentDidMount() {
    document.title = 'Coachella Captions';
  }

  onLoaded = () => {
    console.log('loaded!');
    this.setState({
      loading: false
    });
  };

  onScrollToBottom = atBottom => {
    if (!atBottom) return this.scrollIfReady();
  };

  handleNavTransparency = state => {
    if (state) {
      this.setState({
        transparentNav: true,
        arrowVisible: true
      });
    } else {
      this.setState({
        transparentNav: false,
        arrowVisible: false
      });
    }
  };

  // Toggles the drawer info page.
  toggle = () => {
    let { toggle } = this.state
    this.setState({ toggle: !toggle })
  }

  // Starts auto-scrolling forcibly.
  autoscroll = () => {
    setTimeout(() => {
      scroll.scrollToBottom({
        delay: 0,
        duration: 200,
        isDynamic: true
      });
    }, 0);

    this.setState({
      arrowVisible: false,
      scrollOff: false
    });
  };

  // Scrolls if the user hasn't done something to turn it off.
  scrollIfReady = () => {
    if (!this.state.scrollOff) {
      this.autoscroll();
    }
  };

  render() {
    const style = {
      color: '#000',
      fontFamily: 'Poppins, sans-serif'
    };
    const { arrowVisible, transparentNav } = this.state;

    return (
      <div
        onClick={ () => {
          this.setState({
            arrowVisible: true,
            scrollOff: true
          });
        } }
        onTouchStart={ () => {
          this.setState({
            arrowVisible: true,
            scrollOff: true
          });
        } }>
        <Ornament />
        <BgVideo />
        <Navigation arrowVisible={ arrowVisible  } transparentNav={ transparentNav } />
        <div className={ styles.contentPanel }>
          <Container className={ styles.captionBox } fluid>
            <Row className={ styles.rowNoMargin }>
              <Col md={ 12 } className={ styles.colNoPadding }>
                <div className={ styles.upperModuleWrapper }>
                  <UpperModule handleNavTransparency={ this.handleNavTransparency } />
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
                  <ShareDBBinding
                    cssClass={ styles.liveTranscriptText }
                    style={ style }
                    doc={ this.doc }
                    flag='≈'
                    elementType="div" />
                </div>
                <InView
                  style={ { height: '2px' } }
                  as="div"
                  threshold={ .1 }
                  onChange={ state => this.onScrollToBottom(state) }
                />
              </Col>
              <h1>{ this.state.scrollOff }</h1>
            </Row>
          </Container>
          { arrowVisible
            ? <Arrow
              scrollDown={ () => {
                this.setState({
                  scrollOff: false,
                  arrowVisible: false
                }, this.autoscroll);
              } } />
            : '' }
        </div>
      </div>
    );
  }
}

export default App;
