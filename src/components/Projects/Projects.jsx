import React, { useState, useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import bookiImage from "../../assets/Booki.jpg";
import kasaImage from "../../assets/logo-kasa.png";
import mvgImage from "../../assets/Logo-Mon-Vieux-Grimoire.png";
import ninaImage from "../../assets/Nina-carducci.png";
import sophieImage from "../../assets/sophie-bluel.png";
import { Link } from 'react-router-dom';


const imageMapping = {
  "Booki.jpg": bookiImage,
  "sophie-bluel.png": sophieImage,
  "Nina-carducci.png": ninaImage,
  "Logo-Mon-Vieux-Grimoire.png": mvgImage,
  "logo-kasa.png": kasaImage
};

const Project = ({ id, title, pictures, description, tags }) => {
  const imageSource = imageMapping[pictures];
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <Link to={`/ProjectDescription/${id}`}
      key={id}
      className={styles.project}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      
    >
      <img className={styles.cardImg} src={imageSource} alt={title} />
      {isHovered && (
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
      )}
    </Link>
  );
};

const Projects = () => {
  const projectsJson = require('../../data/projects.json');
  const projectsRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id="projects" className={styles.projectsWithTitle} ref={projectsRef}>
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




