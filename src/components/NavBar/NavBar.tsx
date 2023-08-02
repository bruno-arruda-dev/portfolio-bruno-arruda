import classes from './NavBar.module.scss'
import Logo from '../Logo/Logo'
import NavButtons from '../NavButtons/NavButtons';

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <Logo />
      <NavButtons />
    </nav>
  );
}

export default NavBar;
