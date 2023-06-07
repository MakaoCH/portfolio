import React from 'react';
import styles from "./Media.module.css";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Github from "../../assets/GitHub.png";

const Media = () => {
    return (
        <div>
            <ul className={styles.media}>
                <li className={styles.bulle}><img src={Linkedin} alt="" className={styles.logoMedias} /></li>
                <li className={styles.bulle}><img src={Github} alt="" className={styles.logoMedias} /></li>
                <li className={styles.bulle}><img src={Twitter} alt="" className={styles.logoMedias} /></li>
            </ul>
            
        </div>
    );
};

export default Media;