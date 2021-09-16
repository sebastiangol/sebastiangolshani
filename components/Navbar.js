import Styles from '../styles/Navbar.module.css';
import NavbarOption from './NavbarOption';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import DvrIcon from '@material-ui/icons/Dvr';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
import _ from 'lodash';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'scroll',
        _.throttle(() => setScrolled(window.pageYOffset > 140), 100)
      ),
        { passive: true };
    }
  }, []);

  return (
    <div>
      <div
        className={
          !scrolled
            ? Styles.navbar__appTitleLanding
            : Styles.navbar__appTitleContent
        }
      >
        <p>Sebastian Golshani | Portfolio</p>
      </div>
      <header
        className={!scrolled ? Styles.navbarLanding : Styles.navbarContent}
      >
        <div className={Styles.navbar__title}>
          <p>Sebastian Golshani | Portfolio</p>
        </div>
        <div className={Styles.navbar__buttons}>
          <NavbarOption
            title="Home"
            Icon={HomeIcon}
            href="#home"
            scroll={scrolled}
          />
          <NavbarOption
            title="About"
            Icon={PersonOutlineIcon}
            href="#about"
            scroll={scrolled}
          />
          <NavbarOption
            title="Skills"
            Icon={StarOutlineIcon}
            href="#skills"
            scroll={scrolled}
          />
          <NavbarOption
            title="Projects"
            Icon={DvrIcon}
            href="#projects"
            scroll={scrolled}
          />
          <NavbarOption
            title="Contact"
            Icon={ContactMailIcon}
            href="#contact"
            scroll={scrolled}
          />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
