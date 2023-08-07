import {useContext} from 'react';
import classes from './Hire.module.scss';
import { allLanguages } from '../../locales/languages';
import { ConfigContext } from '../../context/ConfigContext';
import {BsWhatsapp} from 'react-icons/bs';
import {FiLinkedin, FiGithub} from 'react-icons/fi';

const Hire = () => {
    const {language, theme} = useContext(ConfigContext)
    const l = allLanguages[language]
    const link = allLanguages.links
    return (
        <div className={`${classes['hireContainer_' + theme]}`}>
            <a className={classes.hire} href={l.whatsappHireLink} target='_blank' rel='noopener noreferer'>
                <p>{l.hireMe}</p>
            </a>
            <a className={classes.social} href={link.whatsappContactLink} target='_blank' rel='noopener noreferer'>
                <BsWhatsapp />
            </a>
            <a className={classes.social} href={link.linkedinLink} target='_blank' rel='noopener noreferer'>
                <FiLinkedin />
            </a>
            <a className={classes.social} href={link.githubLink} target='_blank' rel='noopener noreferer'>
                <FiGithub />
            </a>
        </div>
    );
}

export default Hire;