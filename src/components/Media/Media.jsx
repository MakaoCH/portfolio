import React, { useEffect, useRef } from "react";
import styles from "./Media.module.css";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Github from "../../assets/GitHub.png";
import cv from "../../assets/cv.png";
import { gsap } from 'gsap';
import { Tooltip } from 'react-tooltip';


const Media = () => {

    const medias1Ref = useRef(null);
    const medias2Ref = useRef(null);
    const medias3Ref = useRef(null);
    const medias4Ref = useRef(null);

    useEffect(() => {
        gsap.fromTo( medias1Ref.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.5, delay: 2.3 });
        gsap.fromTo( medias2Ref.current, { opacity: 0, x: 100  }, { opacity: 1, x: 0, duration: 0.5, delay: 2.6 });
        gsap.fromTo( medias3Ref.current, { opacity: 0, x: 100  }, { opacity: 1, x: 0, duration: 0.5, delay: 2.9 });
        gsap.fromTo( medias4Ref.current, { opacity: 0, x: 100  }, { opacity: 1, x: 0, duration: 0.5, delay: 3.2 });
    }, []);

    return (
        <div className={styles.blockMedias}>
          
              <a href="https://github.com/MakaoCH" target="_blank" rel="noopener noreferrer"  ref={medias1Ref} className={styles.bulle} data-tooltip-id="my-tooltip" data-tooltip-content="GitHub" data-tooltip-place="left">
                <img src={Github} alt="Lien vers mon GitHub" className={styles.logoMedias} />
              </a>
              <a href="https://www.linkedin.com/in/micka%C3%ABl-brothier-9a86308a/" target="_blank" rel="noopener noreferrer"  ref={medias2Ref} className={styles.bulle} data-tooltip-id="my-tooltip" data-tooltip-content="LinkedIn" data-tooltip-place="left">
                <img src={Linkedin} alt="Lien vers mon LinkedIn" className={styles.logoMedias} />
              </a>
              <a href="https://twitter.com/MickaelBrothier" target="_blank" rel="noopener noreferrer" ref={medias3Ref} className={styles.bulle} data-tooltip-id="my-tooltip" data-tooltip-content="Twitter" data-tooltip-place="left">
                <img src={Twitter} alt="Lien vers mon Twitter" className={styles.logoMedias} />
              </a>
              <a href="/MB_CV.pdf" target="_blank" rel="noopener noreferrer" ref={medias4Ref} className={styles.bulle} data-tooltip-id="my-tooltip" data-tooltip-content="CV" data-tooltip-place="left">
                <img src={cv} alt="Lien vers mon CV" className={styles.logoMedias} />
              </a>
    
          <Tooltip id="my-tooltip" className={styles.infoBulle} />
        </div>
      );
    };
    
    export default Media;
