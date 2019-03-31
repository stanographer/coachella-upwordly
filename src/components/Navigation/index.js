import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import Headroom from 'react-headroom';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import styles from '../../index.module.scss';

// Import SVG logo
import Logo from '../Logo';

// Import burger menu
import { Burger } from '../Controls';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      mobileNav: false,
      transparentNav: true,
    };
  }

  navTransparent = () => this.setState({ transparentNav: true });

  navOpaque = () => this.setState({ transparentNav: false });

  onScroll = state => console.log('on scroll', state);

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen, transparentNav } = this.state;
    const { mobile, navbarFixed, toggleDrawer } = this.props;

    const component = mobile
      ? <MobileNav
        navTransparent={ this.navTransparent }
        navOpaque={ this.navOpaque }
        navbarFixed={ navbarFixed }
        toggleDrawer={ toggleDrawer }
        transparentNav={ transparentNav }
        onScroll={ this.onScroll }
      />
      : <FullNavbar
        navTransparent={ this.navTransparent }
        navOpaque={ this.navOpaque }
        isOpen={ isOpen }
        navbarFixed={ navbarFixed }
        toggleDrawer={ toggleDrawer }
        transparentNav={ transparentNav }
      />;

    return (
      component
    );
  }
}

const MobileNav = props => {
  const {
          navOpaque,
          navTransparent,
          onScroll,
          toggleDrawer
        } = props;

  return (
    <Fragment>
      <InView
        as="div"
        style={ { height: '2px' } }
        threshold={ .1 }
        onChange={ state => state ? navTransparent() : navOpaque() } />
      <Navbar
        className={ styles.navbar }
        color="light"
        light
        expand="md">
        <NavbarBrand
          href="https://www.coachella.com/"
          id={ styles.logo }
        >
          <Logo className={ styles.logoCoachella } />
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="#">
              <Burger
                onClick={ toggleDrawer }
                className={ styles.burger }
              />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <InView
        as="span"
        style={ { height: '3px', color: 'red' } }
        threshold={ .1 }
        onChange={ state => onScroll(state) } />
    </Fragment>

  );
};

const FullNavbar = props => {
  const {
          navOpaque,
          navTransparent,
          isOpen,
          navbarFixed,
          toggleDrawer,
          transparentNav,
        } = props;

  return (
    <Fragment>
      <InView
        as="div"
        style={ { height: '2px' } }
        threshold={ .1 }
        onChange={ state => state ? navTransparent() : navOpaque() } />
      <Headroom
        downTolerance={ 50 }
        calcHeightOnResize={ false }
        style={ {
          WebkitTransition: 'all .5s ease-in-out',
          MozTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out'
        } }
        wrapperStyle={ {
          backgroundColor: navbarFixed ? '#fff' : 'unset',
          position: navbarFixed ? 'fixed' : 'relative',
          zIndex: navbarFixed ? '1' : 'unset',
        } }>
        <Navbar
          className={ !transparentNav
            ? `${ styles.navbar } ${ styles.bgLight } ${ styles.navWhite }`
            : `${ styles.navbar }` }
          color="light"
          light
          fixed={ isOpen ? 'top' : '' }
          expand="md">
          <NavbarBrand
            href="https://www.coachella.com/"
            id={ styles.logo }
          >
            <Logo className={ styles.logoCoachella } />
          </NavbarBrand>
          <Burger
            onClick={ toggleDrawer }
            className={ styles.burger }
          />
          <Collapse isOpen={ isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={ styles.navItem }>
                <button
                  className={ styles.navLink }
                  type="button"
                  aria-label="Music"
                  rel="noopener noreferrer">
                  <span>MUSIC</span>
                </button>
              </NavItem>
              <NavItem className={ styles.navItem }>
                <button
                  className={ styles.navLink }
                  type="button"
                  aria-label="ADA"
                  rel="noopener noreferrer">
                  <span>ADA</span>
                </button>
              </NavItem>
              <NavItem className={ styles.navItem }>
                <button
                  aria-label="About Live Captioning"
                  className={ styles.navLink }
                  onClick={ toggleDrawer }
                  rel="noopener noreferrer"
                  type="button">
                  <span>ABOUT LIVE CAPTIONING</span>
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Headroom>
    </Fragment>
  );
};

Navigation.propTypes = {
  headroomDisabled: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default Navigation;
