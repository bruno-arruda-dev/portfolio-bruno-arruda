import {useContext} from 'react'
import { ConfigContext } from '../../../context/ConfigContext'
import classes from './ThemeSwitch.module.scss'
import {BsMoonStarsFill, BsCloudSunFill} from 'react-icons/bs'

const ThemeSwitch = () => {
  const {handleChangeTheme, theme} = useContext(ConfigContext)

  return (
    <div className={classes.themeSwitch} onClick={handleChangeTheme}>
      {theme === 'dark' ? <BsMoonStarsFill /> : <BsCloudSunFill />}
      
    </div>
  );
}

export default ThemeSwitch;