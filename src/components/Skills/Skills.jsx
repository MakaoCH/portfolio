import React from 'react';
import styles from  "./Skills.module.css";
import imgHtml from "../../assets/icone-html-noir.png";
import imgCss from "../../assets/css3.png";
import imgJs from "../../assets/javascript.png";
import imgReact from "../../assets/react.png";
import imgGithub from "../../assets/GitHub.png";
import imgVScode from "../../assets/Visual_Studio_Code.png";
import imgMongo from "../../assets/mongodb.png";
import imgNode from "../../assets/nodejs.png";
import imgResp from "../../assets/responsive.png";
import imgOpti from "../../assets/optimisation.png";
import imgseo from "../../assets/seo.png";
import imgAgile from "../../assets/agile.png";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
    const titleRefs = useRef([]);
    const imageRefs = useRef([]);
  
    useEffect(() => {
      const animateSkills = () => {
        gsap.fromTo(
          titleRefs.current,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power1.out", stagger: 0.3 }
        );
  
        gsap.fromTo(
          imageRefs.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power1.out", stagger: 0.3 }
        );
      };
  
      animateSkills();
    }, []);
  



    return (
        <div id="skills" className={styles.skills}>
            <h1>.Compétences</h1>

            <div className={styles.containerSkills}>
                
                <div className={styles.card}>
                    <h2 ref={el => (titleRefs.current[0] = el)}>.Code</h2>
                        <div ref={el => (imageRefs.current[0] = el)} className={styles.image}>
                            <div className={styles.imageWithTitle}>
                                <img  src={imgHtml} alt="Logo Html" />
                                <p>HTML</p>
                            </div>
                            <div className={styles.imageWithTitle}>
                                <img src={imgCss} alt="Logo CSS" />
                                <p>CSS</p>
                            </div>
                            <div className={styles.imageWithTitle}>
                                <img  src={imgJs} alt="Logo Javascript" />
                                <p>Javascript</p>
                            </div>
                            <div className={styles.imageWithTitle}>
                                <img  src={imgReact} alt="Logo React" />
                                <p>React</p>
                            </div>
                        </div>
                </div>

                <div className={styles.card}>
                    <h2 ref={el => (titleRefs.current[1] = el)}>.Outils</h2>
                        <div ref={el => (imageRefs.current[1] = el)} className={styles.image}>
                        <div className={styles.imageWithTitle}>
                            <img src={imgGithub} alt="Logo Github" />
                            <p>GitHub</p>
                        </div>
                        <div className={styles.imageWithTitle}>
                            <img  src={imgVScode} alt="Logo Visual studio code" />
                            <p>VS code</p>
                        </div>
                        <div className={styles.imageWithTitle}>
                            <img src={imgMongo} alt="Logo MongoDB" />
                            <p>MongoDB</p>
                        </div>
                        <div className={styles.imageWithTitle}>
                            <img src={imgNode} alt="Logo Nodejs" />
                            <p>Node.js</p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <h2 ref={el => (titleRefs.current[2] = el)}>.Connaissances</h2>
                    <div ref={el => (imageRefs.current[2] = el)} className={styles.image}>
                        <div className={styles.imageWithTitle}>
                            <img  src={imgResp} alt="Logo Github" />
                            <p>Responsive Web Design</p>
                        </div>
                        <div className={styles.imageWithTitle}>
                            <img src={imgOpti} alt="Logo Visual studio code" />
                            <p>Optimisation des performances</p>
                        </div>
                        <div className={styles.imageWithTitle}>
                            <img src={imgseo} alt="Logo MongoDB" />
                            <p>Bonne pratique SEO</p>
                        </div>
                        <div className={styles.imageWithTitle}>
                            <img src={imgAgile} alt="Logo Nodejs" />
                            <p>Méthode Agile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;