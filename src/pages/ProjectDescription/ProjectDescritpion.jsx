import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../data/projects.json';
import styles from "./ProjectDescription.module.css";
import bookiImage from "../../assets/BookiHome.png";

const imageMapping = {
  "BookiHome.png": bookiImage,
};

const ProjectDescription = () => {
  const { id } = useParams();

  const project = data.find((project) => project.id === id);
  console.log(project);

  const imageSource = imageMapping[project?.pictureHome];

  const title = project?.title ?? "";
  const problematique = project?.problematique ?? "";
  const competences = project?.competences ?? "";
  const link = project?.link ?? "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const problematiqueLines = problematique.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
      <br />
    </React.Fragment>
  ));

  return (
    <div className={styles.pageProjectId}>
      <div className={styles.containerProject}>
        <h1>{title}</h1>
        <img src={imageSource} alt={title} />
        <h2>Réalisation/Compétences</h2>
        <p>{competences}</p>
        <h3>Problématique/Résolution</h3>
        <p>{problematiqueLines}</p>
        <a href={link}>Voir le projet</a>
        <Link to={"/#projects"}>Retour</Link>
      </div>
    </div>
  );
};

export default ProjectDescription;


