import React from 'react';
import styles from "./About.module.css";
import moiImage from "../../assets/moi.jpg";

const About = () => {

    return (
        <div id="about" className={styles.about}>
            <h1  className={styles.title}>.A propos</h1>
            <div className={styles.imgText}>
            <img src={moiImage} alt="Mon portrait" className={styles.moiImage} />
            <p className={styles.text}>
                Bonjour ! Je suis Mickaël, développeur front-end. Après 15 ans d'expérience en tant que paramétreur d'ERP, j'ai décidé de me reconvertir au métier de déveoppeur web.<br /><br /> 
                J'ai suivi une formation avec OpenClassrooms pour renforcer mes compétences techniques pour les langages HTML, CSS et JavaScript, ainsi que les frameworks React.js. J'aime créer des interfaces interactives et intuitives qui améliorent l'expérience utilisateur.<br /><br />
                Ce site est ma vitrine, où je partage mes projets et mes connaissances. Je suis enthousiaste à l'idée de collaborer sur des projets innovants et de créer des solutions sur mesure qui répondent parfaitement aux besoins des clients.<br /><br />
                Explorez mes réalisations et n'hésitez pas à me contacter pour discuter de vos idées ou pour une éventuelle collaboration. Merci de votre visite et à bientôt !
            </p>
            </div>
        </div>
    );
};

export default About;

