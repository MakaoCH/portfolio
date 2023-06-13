import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from "./About.module.css";

const About = () => {
    const titleRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                gsap.fromTo(
                    [titleRef.current, textRef.current],
                    { x: -100, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.5 }
                );
                observer.disconnect(); // Arrête l'observation une fois que l'animation est jouée
            }
        });

        observer.observe(titleRef.current, textRef.current);

        return () => {
            observer.disconnect(); // Nettoyage de l'observateur lors du démontage du composant
        };
    }, []);
    

    return (
        <div id="about" className={styles.about}>
            <h1 ref={titleRef} className={styles.title}>A propos</h1>
            <p ref={textRef} className={styles.text}>
                Bonjour ! Je suis Mickaël, développeur front-end. Après 15 ans en tant que paramétreur ERP, j'ai décidé de me réinventer et de me spécialiser dans le développement web. J'ai suivi une formation de développeur web avec OpenClassrooms pour renforcer mes compétences techniques.<br /><br />
                Aujourd'hui, je maîtrise les langages HTML, CSS et JavaScript, ainsi que les frameworks React.js. J'aime créer des interfaces interactives et intuitives qui améliorent l'expérience utilisateur.<br /><br />
                Ce site est ma vitrine, où je partage mes projets et mes connaissances. Je suis enthousiaste à l'idée de collaborer sur des projets innovants et de créer des solutions sur mesure qui répondent parfaitement aux besoins de mes clients.<br /><br />
                Explorez mes réalisations et n'hésitez pas à me contacter pour discuter de vos idées ou pour une éventuelle collaboration. Merci de votre visite et à bientôt !
            </p>
        </div>
    );
};

export default About;

