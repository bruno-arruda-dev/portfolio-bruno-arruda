import {useContext} from 'react'
import { Link } from 'react-router-dom'
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
      <Link to='/'>{`${l.home}`}<div/></Link>
      <Link to='/'>{`${l.about}`}<div/></Link>
      <Link to='/projects'>{`${l.projects}`}<div/></Link>
      <Link to='/'>{`${l.contact}`}</Link>
      <Settings />
    </div>
  );
}

export default NavButtons;