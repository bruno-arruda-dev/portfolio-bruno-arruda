import { useContext } from 'react'
import classes from './Home.module.scss'
import { allLanguages } from '../../locales/languages'
import { ConfigContext } from '../../context/ConfigContext';

const Home = () => {
  const { language } = useContext(ConfigContext)
  const l = allLanguages[language];

  return (
    <div className={classes.home}>

      <div className={classes.presentation}>
        <div className={classes.presentationContainer}>
          <h2>{l.hello}</h2>
          <h3>Frontend Developer</h3>
          <p>{l.personalDescription}</p>
          <p>{l.personalQuestion}</p>
          <p>{l.personalAnswer}</p>
          <div>
            <a>
              {l.hireMe}
            </a>
            <a>
              {l.letsTalk}
            </a>
          </div>
        </div>
      </div>

      <div className={classes.imageContainer} />

    </div>
  );
}

export default Home;