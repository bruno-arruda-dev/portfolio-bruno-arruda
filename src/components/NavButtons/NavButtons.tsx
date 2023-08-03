import {useContext} from 'react'
import Settings from '../Settings/Settings';
import classes from './NavButtons.module.scss'
import { allLanguages } from '../../locales/languages';
import { ConfigContext } from '../../context/ConfigContext';

const NavButtons = () => {
  const {language} = useContext(ConfigContext)
  return (
    <div className={classes.navButtons}>
      <a>{`${allLanguages[language].home}`}<div/></a>
      <a>{`${allLanguages[language].about}`}<div/></a>
      <a>{`${allLanguages[language].services}`}<div/></a>
      <a>{`${allLanguages[language].projects}`}<div/></a>
      <a>{`${allLanguages[language].contact}`}</a>
      <Settings />
    </div>
  );
}

export default NavButtons;