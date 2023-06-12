import React from 'react';
import styles from  "./Skills.module.css";

const Skills = () => {
    return (
        <div id="skills" className={styles.skills}>
            <h2>Compétences</h2>
            <div className={styles.containerSkills}>
                
                <div className={styles.card}>
                    <h3 >Front-end / Back-end</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                        </ul>
                </div>
                
                <div className={styles.card}>
                    <h3>Outils</h3>
                        <ul>
                            <li>Git/GitHub</li>
                            <li>VS code</li>
                            <li>Figma</li>
                        </ul>
                </div>

                <div className={styles.card}>
                    <h3>Connaissances</h3>
                        <ul>
                            <li>Responsive Web Design</li>
                            <li>Optimisation des performances</li>
                            <li>Bonne pratique SEO</li>
                            <li>Méthode Agile</li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;