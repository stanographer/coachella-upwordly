import React, { Fragment } from 'react';
import { InView } from 'react-intersection-observer';
import Headroom from 'react-headroom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap';
import styles from '../../index.module.scss';
import { CoachellaLogo } from '../Logos';
import Dates from './Dates';
import NavDivider from '../../assets/images/nav-divider@3x.png';
import * as STRINGS from '../../constants/strings';

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
            style={{height: '2px'}}
            threshold={.1}
            onChange={state => state ? navTransparent() : navOpaque()}
        />
        <Headroom
            downTolerance={50}
            calcHeightOnResize={true}
            style={{
              WebkitTransition: 'all .5s ease-in-out',
              MozTransition: 'all .5s ease-in-out',
              transition: 'all .5s ease-in-out',
            }}
            wrapperStyle={{
              backgroundColor: navbarFixed ? '#fff' : 'unset',
              position: navbarFixed ? 'fixed' : 'relative',
              zIndex: navbarFixed ? '1' : 'unset',
            }}
        >
          <Navbar
              className={!transparentNav
                  ? `${styles.navbar} ${styles.bgLight} ${styles.navWhite}`
                  : `${styles.navbar}`}
              color="light"
              light
              fixed={isOpen ? 'top' : ''}
              expand="md"
          >
            <NavbarBrand
                aria-label="Coachella Festival Homepage"
                href="https://www.coachella.com/"
                id={styles.logo}
                title="Coachella Festival Homepage"
            >
              <span className={styles.isVisuallyHidden}>Coachella</span>
              <CoachellaLogo className={styles.logoCoachella} />
              <img
                  src={NavDivider}
                  alt="Nav divider"
                  className="nav-divider"
              />
              <Dates dates='APR 10-12 & 17-19' />
            </NavbarBrand>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="nav-item">
                  <form action="https://www.coachella.com/lineup/#/artists/alphabetical">
                    <button
                        className="nav-link"
                        type="submit"
                        aria-label={STRINGS.MENU_ITEMS[0]}
                        rel="noopener noreferrer"
                    >
                      <span>{STRINGS.MENU_ITEMS[0]}</span>
                    </button>
                  </form>
                </NavItem>
                <NavItem className="nav-item">
                  <form action="https://www.coachella.com/ada">
                    <button
                        className="nav-link"
                        type="submit"
                        aria-label={STRINGS.MENU_ITEMS[1]}
                        rel="noopener noreferrer"
                    >
                      <span>{STRINGS.MENU_ITEMS[1]}</span>
                    </button>
                  </form>
                </NavItem>
                <NavItem className="nav-item">
                  <button
                      aria-label={STRINGS.MENU_ITEMS[2]}
                      className="nav-link"
                      onClick={toggleDrawer}
                      rel="noopener noreferrer"
                      type="button"
                  >
                    <span>{STRINGS.MENU_ITEMS[2]}</span>
                  </button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Headroom>
      </Fragment>
  );
};

export default FullNavbar;
