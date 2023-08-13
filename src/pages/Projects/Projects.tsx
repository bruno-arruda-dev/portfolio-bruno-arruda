import { useState, useEffect } from 'react'
import classes from './Projects.module.scss';
import { projects } from '../../assets/helpers/projects';
import SelectedProject from '../../components/SelectedProject/SelectedProject';
import ProjectCard from '../../components/ProjectCard/AllProjects';

const Projects = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [homepage, setHomepage] = useState('');
  const [image, setImage] = useState('');
  const [stacks, setStacks] = useState<string[]>([]);
  
  useEffect(() => {
    if (projects.length > 0) {
      const firstProject = projects[0];
      setName(firstProject.name || '');
      setDescription(firstProject.description || '');
      setGithub(firstProject.github || '');
      setHomepage(firstProject.homepage || '');
      setImage(firstProject.image || '');
      setStacks(firstProject.stacks || []);
    }
  }, []);

  const handleUpdateSelectedProject = (selectedName: string) => {

    console.log(`Projeto selecionado ${selectedName}`)
    
    const selectedProject = projects.find(project => project.name === selectedName);
      setName(selectedProject?.name || '');
      setDescription(selectedProject?.description || '');
      setGithub(selectedProject?.github || '');
      setHomepage(selectedProject?.homepage || '');
      setImage(selectedProject?.image || '');
      setStacks(selectedProject?.stacks || []);
  }


  return (
    <div className={classes.projects_dark}>
      <SelectedProject
        name={name}
        description={description}
        github={github}
        homepage={homepage}
        image={image}
        stacks={stacks}
      />

      <div className={classes.allProjects}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            github={project.github}
            homepage={project.homepage}
            image={project.image}
            stacks={project.stacks}
            handleUpdateSelectedProject={handleUpdateSelectedProject}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
