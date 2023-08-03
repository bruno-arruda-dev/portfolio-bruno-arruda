import {useContext} from 'react'
import { ConfigContext } from '../../../context/ConfigContext'
import classes from './LanguageSwitch.module.scss'

const LanguageSwitch = () => {
  const {handleChangeLanguage, language} = useContext(ConfigContext);

  return (
    <div className={`${classes.languageSwitch} ${classes[language]}`} onClick={handleChangeLanguage} />
  );
}

export default LanguageSwitch;
