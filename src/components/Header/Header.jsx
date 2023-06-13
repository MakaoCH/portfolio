import React, { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';

const Header = ({ isHeaderFixed }) => {
  const l1Ref = useRef(null);
  const l2Ref = useRef(null);

  useEffect(() => {
    gsap.from(l1Ref.current, { width: -100, duration: 1.5, ease: Power2.easeOut, stagger: 0.2 });
    gsap.from(l2Ref.current, { width: -100, duration: 1.5, ease: Power2.easeOut });
  }, []);

  

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '/');
  };

  return (
    <div className={`${styles.lignes} ${isHeaderFixed ? styles.fixedHeader : ''}`}>
      <div className={`${styles.header} ${isHeaderFixed ? styles.scrolledHeader : ''}`}>
        <div onClick={handleHomeClick} className={styles.blockLignes}>
          <div ref={l1Ref} className={styles.l1}></div>
          <div ref={l2Ref} className={styles.l2}></div>
        </div>
        <Navbar className={styles.Navbar} />
      </div>
    </div>
  );
};

export default Header;







