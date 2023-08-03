import {useContext} from 'react'
import { ConfigContext } from '../../../context/ConfigContext'
import classes from './LanguageSwitch.module.scss'

const LanguageSwitch = () => {
  const {handleChangeLanguage, language} = useContext(ConfigContext);

  return (
    <div className={`${classes.languageSwitch}`} onClick={handleChangeLanguage}>
      <div className={`${classes.brazil} ${classes["brazilFlag_" + language]}`} />
      <div className={`${classes.eua} ${classes["euaFlag_" + language]}`} />
    </div>
  );
}

export default LanguageSwitch;