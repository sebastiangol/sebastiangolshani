import Styles from '../styles/Navbar.module.css';

function NavbarOption({ title, Icon, href }) {
  return (
    <a href={href}>
      <div className={Styles.navbar__option}>
        <Icon className={Styles.navbar__optionIcon} />
        <p className={Styles.navbar__optionTitle}>{title}</p>
      </div>
    </a>
  );
}

export default NavbarOption;
