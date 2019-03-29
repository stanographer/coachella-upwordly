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
import styles from '../../index.module.scss';

// Import SVG logo
import Logo from '../Logo';

// Import burger menu
import { Burger, Close } from '../Controls';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      mobileNav: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this), false);
  }

  resize() {
    this.setState({ mobileNav: window.innerWidth <= 760 });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen, mobileNav, transparentNav } = this.state;
    const { navbarFixed, toggleDrawer } = this.props;

    const component = mobileNav
      ? <MobileNav
        navbarFixed={ navbarFixed }
        toggleDrawer={ toggleDrawer }
        transparentNav={ transparentNav }
      />
      : <FullNavbar
        isOpen={ isOpen }
        navbarFixed={ navbarFixed }
        transparentNav={ transparentNav }
        toggleDrawer={ toggleDrawer }
      />;

    return (
      component
    );
  }
}

const MobileNav = props => {
  const { navbarFixed, toggleDrawer, transparentNav } = props;

  return (
    <Fragment>
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
      </Navbar>
      <Burger
        onClick={ toggleDrawer }
        className={ styles.burger }
      />
    </Fragment>

  );
};

const FullNavbar = props => {
  const { isOpen, navbarFixed, toggleDrawer, transparentNav } = props;

  return (
    <Headroom
      disable={ navbarFixed }
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
            <NavItem>
              <NavLink
                className={ `${ styles.navItem } ${ styles.slideUnderline }` }
                href="https://www.coachella.com/lineup/#/artists/alphabetical"
                target="_blank"
                rel="noopener noreferrer">MUSIC</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={ styles.navItem }
                href="https://www.coachella.com/ada/"
                target="_blank"
                rel="noopener noreferrer">ADA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={ styles.navItem }
                href="#"
                onClick={ toggleDrawer }>
                ABOUT LIVE CAPTIONING
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Headroom>
  );
};

Navigation.propTypes = {
  headroomDisabled: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default Navigation;
