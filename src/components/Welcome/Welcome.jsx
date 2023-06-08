import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Welcome.module.css';
import Navbar from '../Navbar/Navbar';
import Media from "../Media/Media";

const Welcome = () => {
    const spanRef = useRef(null);
    const span1Ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(spanRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });
        gsap.fromTo(span1Ref.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.5, delay: 1 });
    }, []);

    return (
        <div className={styles.welcome}>
            <div className={styles.containerFirst} >
                <h1 ref={spanRef}>Mickaël  Brothier</h1>
                <h2 ref={span1Ref}> developpeur front-end</h2>
                <Navbar className={styles.Navbar} />
            </div>
            <Media className={styles.Media} />
        </div>
    );
};

export default Welcome;



