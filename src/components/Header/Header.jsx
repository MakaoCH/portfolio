import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { gsap } from 'gsap';

const Header = () => {

    const l1 = document.querySelector('l1');
      
        window.addEventListener('load', () => {
        
        const TL = gsap.timeline({ paused: true });

            TL.from(l1, 1, {width: 0, ease: "power2.out"}, 0.3)

        TL.play();
    });

    return (
        <div className={styles.lignes}>
            <header>
                <div className={styles.blocLignes}>
                    <div ref={l1} className={styles.l1}></div>
                    <div className={styles.l2}></div>
                </div>

                <img src={logo} alt="Logo" className={styles.logo} />
            </header>

        </div>
    );
};

export default Header;