import React, { useEffect } from 'react';
import Welcome from "../../components/Welcome/Welcome";
import styles from './Home.module.css';
import About from "../../components/About/About";
import Skills from '../../components/Skills/Skills';
import Media from "../../components/Media/Media";
import Projects from '../../components/Projects/Projects';
import ContactForm from '../../components/Contact/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


const Home = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem, {
        opacity: 0,
        y:200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          delay: delay,
          duration: duration,
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  useEffect(() => {
    slideInTop("#box1", 0.2, 0.8);
  }, []);
  
  useEffect(() => {
    slideInTop("#box2", 0.2, 0.8);
  }, []);
  
  useEffect(() => {
    slideInTop("#box3", 0.2, 0.8);
  }, []);
  
  useEffect(() => {
    slideInTop("#box4", 0.2, 0.8);
  }, []);
  
  return (
    
    <div >
          <section className={styles.welcomeMedias}>
            <Welcome />
            <Media />
          </section>
        
          <section id="box1" >
            <About />
          </section>

          <section id="box2">
            <Skills />
          </section>

          <section id="box3">
            <Projects/>
          </section>
          
          <section id="box4">
            <ContactForm/>
          </section>

    </div>
  );
};

export default Home;






