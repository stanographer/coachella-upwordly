import React from 'react';
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
import { Burger } from '../Controls';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Headroom
        downTolerance={50}
        calcHeightOnResize={ false }
        style={ {
          WebkitTransition: 'all .5s ease-in-out',
          MozTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out'
        } }>
        <Navbar className={ !this.props.transparentNav
          ? `${ styles.navbar } ${ styles.bgLight } ${ styles.navWhite }`
          : `${ styles.navbar }` }
                color="light"
                light
                expand="md">
          <NavbarBrand href="https://www.coachella.com/" id={ styles.logo }>
            <Logo className={ styles.logoCoachella } />
          </NavbarBrand>
          <Burger onClick={ this.toggle } className={ styles.burger } />
          <Collapse isOpen={ this.state.isOpen } navbar>
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
                <NavLink className={ styles.navItem } href="#">ABOUT LIVE CAPTIONING</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Headroom>
    );
  }
}

export default Navigation;
