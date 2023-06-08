import React, { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import styles from "./Button.module.css";

const Button = ({ title, target }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(linkRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.5, ease: Power2.easeInOut, delay: 1.5 });
  }, []);

  return (
    <div ref={linkRef}>
      <a href={target} className={styles.btn} >
        <p className={styles.text}>{title}</p>
      </a>
    </div>
  );
};

export default Button;





