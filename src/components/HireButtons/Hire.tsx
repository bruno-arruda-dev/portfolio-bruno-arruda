import {useContext} from 'react'
import classes from './Hire.module.scss'
import { allLanguages } from '../../locales/languages';
import { ConfigContext } from '../../context/ConfigContext';

const Hire = () => {
    const {language} = useContext(ConfigContext)
    const l = allLanguages[language]
    return (
        <div className={classes.hireContainer}>
            <a className={classes.hire}>
                <p>{l.hireMe}</p>
            </a>
            <a className={classes.talk}>
                <p>{l.letsTalk}</p>
            </a>
        </div>
    );
}

export default Hire;
