import React, { useEffect, useRef, useState } from 'react';
import Welcome from "../../components/Welcome/Welcome";
import Header from "../../components/Header/Header";
import styles from './Home.module.css';
import About from "../../components/About/About";
import oceanImage from '../../assets/ocean.jpg';
import Skills from '../../components/Skills/Skills';
import Media from "../../components/Media/Media";
import Projects from '../../components/Projects/Projects';
import ContactForm from '../../components/Contact/Contact';


const Home = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const homeRef = useRef(null);

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

  return (
    
    <div ref={homeRef} className={styles.background} style={{ backgroundImage: `url(${oceanImage})` }}>
      <header>
        <Header isHeaderFixed={isHeaderFixed} />
      </header>

      <main >
          <section className={styles.welcomeMedias}>
            <Welcome />
            <Media />
          </section>
        
          <section>
            <About />
          </section>

          <section>
            <Skills />
          </section>

          <section>
            <Projects/>
          </section>
          
          <section>
            <ContactForm/>
          </section>
        
      </main>
    </div>
  );
};

export default Home;






