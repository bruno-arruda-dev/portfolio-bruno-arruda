import {useContext} from 'react'
import { ConfigContext } from '../../../context/ConfigContext'
import classes from './ThemeSwitch.module.scss'

const ThemeSwitch = () => {
  const {handleChangeTheme, theme} = useContext(ConfigContext)

  return (
    <div className={`${classes['themeSwitch_' + theme]}`} onClick={handleChangeTheme}>
      <div className={classes.moon} />
      <div className={classes.themeSwitch_container} />
      <div className={classes.sun} />
    </div>
  );
}

export default ThemeSwitch;