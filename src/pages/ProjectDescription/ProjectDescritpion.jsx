import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../data/projects.json';
import styles from "./ProjectDescription.module.css";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const ProjectDescription = () => {
  const { id } = useParams();

  const project = data.find((project) => project.id === id);
  console.log(project);

  const imageSource = [project?.pictureHome];
  const title = project?.title ?? "";
  const problematique = project?.problematique ?? "";
  const competences = project?.competences ?? "";
  const link = project?.link ?? "";

  
  const contentRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.8,  delay: 0.1 }
    );
  }, []);

  const problematiqueLines = problematique.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
      <br />
    </React.Fragment>
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageProjectId} ref={contentRef}>
      <h1>{title}</h1>
        <img src={imageSource} alt={title} />

        <h2>Réalisation/Compétences</h2>
        <p>{competences}</p>

        <h3>Problématique/Résolution</h3>
        <p>{problematiqueLines}</p>
        
        <a href={link} className={styles.button}><i className="fa-solid fa-link" ></i>Voir le projet</a>
        <Link to={"/"} className={styles.button}>Retour aux réalisations</Link>
      
    </div>
  );
};

export default ProjectDescription;


