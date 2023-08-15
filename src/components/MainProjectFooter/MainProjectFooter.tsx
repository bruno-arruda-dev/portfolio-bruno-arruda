import classes from './MainProjectFooter.module.scss';
import { IMainProjectFooterProps } from '../../types/MainProjectFooterProps';

const MainProjectFooter = ({ stacks }: IMainProjectFooterProps) => {
  return (
    <div className={classes.stackContainer}>
      {stacks && stacks.map((stack) => (
        <div className={`${classes[stack]} ${classes.defaultStack}`} key={stack} />
      ))}
    </div>
  );
}

export default MainProjectFooter;