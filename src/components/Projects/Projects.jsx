import React, { useState } from 'react';
import styles from './Projects.module.css';
import bookiImage from "../../assets/Booki.jpg";
import kasaImage from "../../assets/logo-kasa.png";
import mvgImage from "../../assets/Logo-Mon-Vieux-Grimoire.png";
import ninaImage from "../../assets/Nina-carducci.png";
import sophieImage from "../../assets/sophie-bluel.png";

const imageMapping = {
  "Booki.jpg": bookiImage,
  "sophie-bluel.png": sophieImage,
  "Nina-carducci.png": ninaImage,
  "Logo-Mon-Vieux-Grimoire.png": mvgImage,
  "logo-kasa.png": kasaImage
};

const Project = ({ id, title, pictures, description, tags, link }) => {
  const imageSource = imageMapping[pictures];
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      key={id}
      className={styles.project}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
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
    </div>
  );
};

const Projects = () => {
  const projectsJson = require('../../data/projects.json');

  return (
    <div className={styles.projectsWithTitle}>
      <h1>Réalisations</h1>
      <div className={styles.projects}>
        {projectsJson.map((item) => (
          <Project
            key={item.id}
            id={item.id}
            title={item.title}
            pictures={item.pictures}
            description={item.description}
            tags={item.tags}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;




