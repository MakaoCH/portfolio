import React, { useEffect, useRef } from "react";
import styles from "./Media.module.css";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Github from "../../assets/GitHub.png";
import { gsap } from 'gsap';

const Media = () => {

    const medias1Ref = useRef(null);
    const medias2Ref = useRef(null);
    const medias3Ref = useRef(null);

    useEffect(() => {
        gsap.fromTo( medias1Ref.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.5 });
        gsap.fromTo( medias2Ref.current, { opacity: 0, x: 100  }, { opacity: 1, x: 0, duration: 0.5, delay: 1 });
        gsap.fromTo( medias3Ref.current, { opacity: 0, x: 100  }, { opacity: 1, x: 0, duration: 0.5, delay: 1.5 });
    }, []);

    return (
        <div className={styles.blockMedias}>
            <ul>
                <li ref={medias1Ref} className={styles.bulle}><img src={Linkedin} alt="" className={styles.logoMedias} /></li>
                <li ref={medias2Ref} className={styles.bulle}><img src={Github} alt="" className={styles.logoMedias} /></li>
                <li ref={medias3Ref} className={styles.bulle}><img src={Twitter} alt="" className={styles.logoMedias} /></li>
            </ul>
        </div>
    );
};

export default Media;
