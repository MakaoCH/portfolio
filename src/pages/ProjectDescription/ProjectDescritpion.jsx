import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../data/projects.json';
import styles from "./ProjectDescription.module.css";
import { gsap } from 'gsap';
import Slideshow from "../../components/Slideshow/Slideshow";

const ProjectDescription = () => {
  const { id } = useParams();

  const project = data.find((project) => project.id === id);
  console.log(project);

  const pictures = project?.pictureHome ?? [];
  const title = project?.title ?? "";
  const mission = project?.mission ?? "";
  const realisation = project?.realisation ?? "";
  const link = project?.link ?? "";

  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
    );
  }, []);

  const realisationLines = realisation.split('\n').map((line, index) => (
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
      <Slideshow pictures={pictures} />

      <h2>Description du projet</h2>
      <p>{mission}</p>

      <h3>Réalisation</h3>
      <p>{realisationLines}</p>

      <a href={link} className={styles.button}>
        <i className="fa-solid fa-link"></i>Voir le projet
      </a>
      <Link to={"/#projects"} className={styles.button}>
        Retour
      </Link>
    </div>
  );
};

export default ProjectDescription;



