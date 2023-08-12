import { IProject } from '../../types/Project';
import classes from './AllProjects.module.scss';

const AllProjects = (props: Partial<IProject>) => {
  const { name, description, github, homepage, image, stacks, handleUpdateSelectedProject } = props;

  const handleClick = () => {
    if (handleUpdateSelectedProject) {
      handleUpdateSelectedProject(name || '');
    }
  };

  return (
    <div className={classes.allProjects} onClick={handleClick}>
      {name} - {description} - {github} - {homepage} - {image} - {stacks}
    </div>
  );
}

export default AllProjects;