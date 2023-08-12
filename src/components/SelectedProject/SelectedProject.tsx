import { IProject } from '../../types/Project';
import classes from './SelectedProject.module.scss';

const SelectedProject = ({ name, description, github, homepage, image, stacks }: IProject) => {
  return (
    <div className={classes.selectedProject}>
      {name} - {description} - {github} - {homepage} - {image} - {stacks}
    </div>
  );
}

export default SelectedProject;
