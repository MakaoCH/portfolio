import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import styles from "./Layout.module.css";
import oceanImage from '../../assets/ocean.jpg';
import Footer from '../Footer/Footer';



const Layout = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const homeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const { top } = homeRef.current.getBoundingClientRect();
      setIsHeaderFixed(top < 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isProjectDescriptionPage = location.pathname.includes('/ProjectDescription/');


  return (
    <div   ref={homeRef} className={styles.background} style={{ backgroundImage: `url(${oceanImage})` }}>
      {!isProjectDescriptionPage && <Header isHeaderFixed={isHeaderFixed} />}
      <main >
        <Outlet  />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
