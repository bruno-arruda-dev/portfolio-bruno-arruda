import { useContext } from 'react'
import classes from './Home.module.scss'
import { allLanguages } from '../../locales/languages'
import { ConfigContext } from '../../context/ConfigContext';
import Hire from '../../components/HireButtons/Hire';

const Home = () => {
  const { language, theme } = useContext(ConfigContext)
  const l = allLanguages[language];

  return (
    <div className={`${classes['home_' + theme]}`}>

      <div className={classes.presentation}>
        <div className={classes.presentationContainer}>
          <h2>{l.hello}</h2>
          <h3>Frontend Developer</h3>
          <p>{l.personalDescription}</p>
          <p className={classes.question}>{l.personalQuestion}</p>
          <p className={classes.answer}>{l.personalAnswer}</p>

          <Hire />

        </div>
      </div>

      <div className={classes.imageContainer} />

    </div>
  );
}

export default Home;