import {useState} from 'react'
import classes from './ThemeSwitch.module.scss'
import {BsMoonStarsFill, BsCloudSunFill} from 'react-icons/bs'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('dark')

  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className={classes.themeSwitch} onClick={handleChangeTheme}>
      {theme === 'dark' ? <BsMoonStarsFill /> : <BsCloudSunFill />}
      
    </div>
  );
}

export default ThemeSwitch;