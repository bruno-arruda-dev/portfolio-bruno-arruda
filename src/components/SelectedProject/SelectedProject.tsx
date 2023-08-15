import { IProject } from '../../types/Project';
import MainProjectFooter from '../MainProjectFooter/MainProjectFooter';
import classes from './SelectedProject.module.scss';

const SelectedProject = ({ name, description, github, homepage, image, stacks }: IProject) => {
  return (
    <div className={classes.selectedProject}>
      <h3>{name}</h3>
      <div className={classes.backgroundImage} style={{ backgroundImage: `url(${image})` }}/>
      <p>{description}</p>
      <MainProjectFooter stacks={stacks}/>
      {github} - {homepage} - {image} - {stacks}
    </div>
  );
}

export default SelectedProject;
