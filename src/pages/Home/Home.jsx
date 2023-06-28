import React from 'react';
import Welcome from "../../components/Welcome/Welcome";
import styles from './Home.module.css';
import About from "../../components/About/About";
import Skills from '../../components/Skills/Skills';
import Media from "../../components/Media/Media";
import Projects from '../../components/Projects/Projects';
import ContactForm from '../../components/Contact/Contact';


const Home = () => {
  

  return (
    
    <div >
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
    </div>
  );
};

export default Home;






