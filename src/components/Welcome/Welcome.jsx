import React, { useEffect, useRef } from 'react';
import gsap  from 'gsap';
import styles from './Welcome.module.css';
import Navbar from '../Navbar/Navbar';
import Media from "../Media/Media";



const Welcome = () => {
    const span1Ref = useRef(null);
    const span2Ref = useRef(null);
    const span3Ref = useRef(null);
    const span4Ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(span1Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 });
        gsap.fromTo(span2Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.5 });
        gsap.fromTo(span3Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: 1 });
        gsap.fromTo(span4Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: 1.5 });
    }, []);

    return (
        <div className={styles.welcome}>
            <div className={styles.containerFirst} >
                <h1>
                    <span ref={span1Ref}>Mickaël </span>
                    <span ref={span2Ref}>Brothier</span>
                </h1>
                <h2 >
                    <span ref={span3Ref}>developpeur </span>
                    <span ref={span4Ref}>front-end</span>
                </h2>
                <Navbar className={styles.Navbar} />
            </div>
            <Media className={styles.Media} />
        </div>
    );
};

export default Welcome;

