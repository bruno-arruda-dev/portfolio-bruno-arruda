import React from 'react';
import classes from './Projects.module.scss';
import { projects } from '../../assets/helpers/projects';

const Projects = () => {
  return (
    <div className={classes.projects_dark}>
      {Object.keys(projects).map(projectKey => {
        const project = projects[projectKey];

        return (
          <div key={projectKey} className={classes.project}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.homepage} target="_blank" rel="noopener noreferrer">Homepage</a>
            <img src={project.image} alt={project.name} />
            <div>
              {project.stacks.map(stack => (
                <span key={stack} className={classes.stack}>{stack}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
