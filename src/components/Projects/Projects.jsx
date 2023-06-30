import React from 'react';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

const Project = ({ id, title, pictures, description, tags }) => {

  return (
    <Link to={`/ProjectDescription/${id}`}
      key={id}
      className={styles.project}
    >
      <img className={styles.cardImg} src={pictures} alt={title} />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <p className={styles.description}>{description}</p>
            <ul className={styles.tags}>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
    
    </Link>
  );
};

const Projects = () => {
  const projectsJson = require('../../data/projects.json');
  
  return (
    <div id="projects" className={styles.projectsWithTitle} >
      <h1>.Réalisations</h1>
      <div className={styles.projects}>
        {projectsJson.map((item) => (
          <Project
            key={item.id}
            id={item.id}
            title={item.title}
            pictures={item.pictures}
            description={item.description}
            tags={item.tags}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;




