import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import FullNavbar from './FullNavbar';
import styles from '../../index.module.scss';

// Import SVG logo
import { CoachellaLogo } from '../Logos';

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

  navTransparent = () => this.setState({transparentNav: true});

  navOpaque = () => this.setState({transparentNav: false});

  onScroll = state => console.log('on scroll', state);

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const {isOpen, transparentNav} = this.state;
    const {mobile, navbarFixed, toggleDrawer} = this.props;

    const component = mobile
        ? <MobileNav
            isOpen={isOpen}
            navTransparent={this.navTransparent}
            navOpaque={this.navOpaque}
            navbarFixed={navbarFixed}
            toggleDrawer={toggleDrawer}
            transparentNav={transparentNav}
            onScroll={this.onScroll}
        />
        : <FullNavbar
            navTransparent={this.navTransparent}
            navOpaque={this.navOpaque}
            isOpen={isOpen}
            navbarFixed={navbarFixed}
            toggleDrawer={toggleDrawer}
            transparentNav={transparentNav}
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
    toggleDrawer,
  } = props;

  return (
      <Fragment>
        <InView
            as="div"
            style={{height: '2px'}}
            threshold={.1}
            onChange={state => state ? navTransparent : navOpaque}
        />
        <Navbar
            className={styles.navbar}
            color="light"
            light
            expand="md"
        >
          <NavbarBrand
              href="https://www.coachella.com/"
              id={styles.logo}
          >
            <CoachellaLogo className={styles.logoCoachella} />
          </NavbarBrand>
          <Burger
              toggleModal={toggleDrawer}
              className={styles.burger}
          />
        </Navbar>
        <InView
            as="span"
            style={{height: '3px', color: 'red'}}
            threshold={.1}
            onChange={state => onScroll(state)}
        />
      </Fragment>

  );
};

Navigation.propTypes = {
  headroomDisabled: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default Navigation;
