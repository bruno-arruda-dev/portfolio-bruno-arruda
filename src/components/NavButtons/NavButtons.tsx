import classes from './NavButtons.module.scss'
import { RiSettingsFill } from 'react-icons/ri'

const NavButtons = () => {
  return (
    <div className={classes.navButtons}>
      <a>Home<div/></a>
      <a>Sobre mim<div/></a>
      <a>Serviços<div/></a>
      <a>Projetos<div/></a>
      <a>Contato</a>
      <RiSettingsFill />
    </div>
  );
}

export default NavButtons;