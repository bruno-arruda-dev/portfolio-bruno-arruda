import classes from './Logo.module.scss'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className={classes.logo}>
      <p>Bruno<span>Arrm</span>.</p>
    </Link>
  );
}

export default Logo;
