import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { gsap } from 'gsap';

const Header = () => {
    const l1Ref = useRef(null);
    const l2Ref = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            [l1Ref.current, l2Ref.current],
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.5 }
        ).fromTo(
            logoRef.current, 
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.5 },
            "-=0.5" // start 0.5 secondes after the lines animation starts
         );
    }, []);

    return (
        <div className={styles.lignes}>
            <header>
                <div className={styles.blocLignes}>
                    <div ref={l1Ref} className={styles.l1}></div>
                    <div ref={l2Ref} className={styles.l2}></div>
                </div>
                <img ref={logoRef} src={logo} alt="Logo" className={styles.logo} />
            </header>
        </div>
    );
};

export default Header;



