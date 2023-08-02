import Settings from '../Settings/Settings';
import classes from './NavButtons.module.scss'

const NavButtons = () => {
  return (
    <div className={classes.navButtons}>
      <a>Home<div/></a>
      <a>Sobre mim<div/></a>
      <a>Serviços<div/></a>
      <a>Projetos<div/></a>
      <a>Contato</a>
      <Settings />
    </div>
  );
}

export default NavButtons;