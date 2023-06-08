import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import styles from "./About.module.css";

const About = () => {
    const h1Ref = useRef(null);
    const pRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(TextPlugin);

        const h1Element = h1Ref.current;
        const pElement = pRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        h1Element,
                        { x: -100, opacity: 0 },
                        { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
                    );

                   gsap.fromTo(
                        pElement,
                        { text: "" },
                        { text: "Bonjour ! Je suis Mickaël, un développeur front-end passionné. Après 15 ans en tant que paramétreur ERP, j'ai décidé de me réinventer et de me spécialiser dans le développement web. J'ai suivi une formation de développeur web avec OpenClassrooms pour renforcer mes compétences techniques.<br /><br />Aujourd'hui, je maîtrise les langages HTML, CSS et JavaScript, ainsi que les frameworks React.js et Vue.js. J'aime créer des interfaces interactives et intuitives qui améliorent l'expérience utilisateur.<br /><br />Ce site est ma vitrine, où je partage mes projets et mes connaissances. Je suis enthousiaste à l'idée de collaborer sur des projets innovants et de créer des solutions sur mesure qui répondent parfaitement aux besoins de mes clients.<br /><br />Explorez mes réalisations et n'hésitez pas à me contacter pour discuter de vos idées ou pour une éventuelle collaboration. Merci de votre visite et à bientôt !", duration: 30, delay: 1, ease: "power2.out" }
                    );


                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(h1Element);
        observer.observe(pElement);

        return () => {
            observer.unobserve(h1Element);
            observer.observe(pElement);
        };
    }, []);

    return (
        <div className={styles.about}>
            <h1 ref={h1Ref} className={styles.title}>A propos</h1>
            <p ref={pRef} className={styles.text}></p>
        </div>
    );
};

export default About;
