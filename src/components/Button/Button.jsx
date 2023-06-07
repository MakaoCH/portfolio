import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Button.module.css";

const Button = ({ title, target, delay }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      linkRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, delay }
    );
  }, [delay]);

  return (
    <div>
      <a href={target} className={styles.btn} ref={linkRef}>
        <p className={styles.text}>{title}</p>
      </a>
    </div>
  );
};

export default Button;



