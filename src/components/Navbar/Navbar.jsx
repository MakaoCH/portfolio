import React, { useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import { gsap, Power1 } from "gsap";


const Navbar = () => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      link1Ref.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.5, ease: Power1.easeInOut, delay: 0.5 }
    );
    gsap.fromTo(
      link2Ref.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.5, ease: Power1.easeInOut, delay: 0.8 }
    );
    gsap.fromTo(
      link3Ref.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.5, ease: Power1.easeInOut, delay: 1.1 }
    );
    gsap.fromTo(
      link4Ref.current,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 0.5, ease: Power1.easeInOut, delay: 1.4 }
    );
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const yOffset = -120; 
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  

  return (
    <div className={styles.containerBtn}>
      <a href="#about" onClick={handleClick} ref={link1Ref} className={styles.text}><span>.A propos</span></a>
      <a href="#skills" onClick={handleClick}  ref={link2Ref} className={styles.text}><span>.Compétences</span></a>
      <a href="#projects" onClick={handleClick}   ref={link3Ref} className={styles.text}><span>.Réalisations</span></a>
      <a href="#contact" onClick={handleClick}   ref={link4Ref} className={styles.text}><span>.Contact</span></a>
    </div>
  );
};

export default Navbar;


