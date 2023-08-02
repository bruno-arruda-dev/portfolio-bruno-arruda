import { useState } from 'react';
import classes from './LanguageSwitch.module.scss';

const LanguageSwitch = () => {
  const [language, setLanguage] = useState('brazil_flag');

  const handleChangeLanguage = () => {
    if (language === 'brazil_flag') {
      setLanguage('eua_flag');
      console.log('Linguagem alterada para inglês');
    } else {
      setLanguage('brazil_flag');
      console.log('Linguagem alterada para português');
    }
  }

  return (
    <div className={`${classes.languageSwitch} ${classes[language]}`} onClick={handleChangeLanguage} />
  );
}

export default LanguageSwitch;
