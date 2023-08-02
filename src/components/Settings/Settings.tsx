import classes from './Settings.module.scss'
import { RiSettingsFill } from 'react-icons/ri'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import LanguageSwitch from './LanguageSwitch/LanguageSwitch';

const Settings = () => {
    return (
        <div className={classes.settings}>
            <div className={classes.settings_up}>
                <RiSettingsFill />
            </div>
            <div className={classes.settings_content}>
                <ThemeSwitch />
                <LanguageSwitch />
            </div>
            <div className={classes.settings_down}>
                <RiSettingsFill />
            </div>
        </div>
    );
}

export default Settings;