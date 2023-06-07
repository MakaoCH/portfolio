import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import { gsap } from "gsap";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navbarData = [
    {
      id: "1",
      title: "A propos",
      target: "#about",
    },
    {
      id: "2",
      title: "Réalisations",
      target: "#projects",
    },
    {
      id: "3",
      title: "Mes compétences",
      target: "#skills",
    },
    {
      id: "4",
      title: "Contact",
      target: "#contact",
    },
  ];

  const buttonsRef = useRef([]);

  useEffect(() => {
    gsap.from(buttonsRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className={styles.containerBtn}>
      {navbarData.map((data, index) => (
        <Button
          key={data.id}
          title={data.title}
          target={data.target}
          delay={index * 0.5} // Ajout du délai basé sur l'index
          ref={(el) => (buttonsRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default Navbar;

