import React from 'react';
import styles from './Projects.module.css';
import projectsJson from '../../data/projects.json';
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

const Project = ({ id, title, pictures }) => {
  const imageSource = imageMapping[pictures];

  return (
    <div key={id} className={styles.project}>
      <img className={styles.cardImg} src={imageSource} alt={title} />
    </div>
  );
};

const Projects = () => {
  const data = projectsJson;

  return (
    <div className={styles.projects}>
      {data.map((item) => (
        <Project
          key={item.id}
          id={item.id}
          title={item.title}
          pictures={item.pictures}
        />
      ))}
    </div>
  );
};

export default Projects;


