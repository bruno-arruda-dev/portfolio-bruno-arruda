import { IProject } from '../../types/Project';
import CardFooter from '../CardFooter/CardFooter';
import classes from './ProjectCard.module.scss';

const ProjectCard = (props: Partial<IProject>) => {
  const { name, description, github, homepage, image, stacks, handleUpdateSelectedProject } = props;

  const handleClick = () => {
    console.log('Clicado!')
    if (handleUpdateSelectedProject) {
      handleUpdateSelectedProject(name || '');
    }
  };

  return (
    <div className={classes.ProjectCard} onClick={handleClick}>
      <div className={classes.imageContainer} style={{ backgroundImage: `url(${image})` }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <CardFooter github={github} homepage={homepage} stacks={stacks} />
    </div>
  );
}

export default ProjectCard;