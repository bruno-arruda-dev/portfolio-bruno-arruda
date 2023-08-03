import {useContext} from 'react'
import Settings from '../Settings/Settings';
import DarkClasses from './DarkNavButtons.module.scss'
import LightClasses from './LightNavButtons.module.scss'
import { allLanguages } from '../../locales/languages';
import { ConfigContext } from '../../context/ConfigContext';

const NavButtons = () => {
  const {theme, language} = useContext(ConfigContext)
  return (
    <div className={`${DarkClasses['navButtons_' + theme]} ${LightClasses['navButtons_' + theme]}`}>
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