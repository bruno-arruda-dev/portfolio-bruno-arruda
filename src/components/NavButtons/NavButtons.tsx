import {useContext} from 'react'
import Settings from '../Settings/Settings';
import DarkClasses from './DarkNavButtons.module.scss'
import LightClasses from './LightNavButtons.module.scss'
import { allLanguages } from '../../locales/languages';
import { ConfigContext } from '../../context/ConfigContext';

const NavButtons = () => {
  const {theme, language} = useContext(ConfigContext);
  const l = allLanguages[language];
  return (
    <div className={`${DarkClasses['navButtons_' + theme]} ${LightClasses['navButtons_' + theme]}`}>
      <a>{`${l.home}`}<div/></a>
      <a>{`${l.about}`}<div/></a>
      <a>{`${l.services}`}<div/></a>
      <a>{`${l.projects}`}<div/></a>
      <a>{`${l.contact}`}</a>
      <Settings />
    </div>
  );
}

export default NavButtons;