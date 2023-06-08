import React from 'react';
import Welcome from "../../components/Welcome/Welcome";
import Header from "../../components/Header/Header";
import styles from './Home.module.css';
import About from "../../components/About/About";
import oceanImage from '../../assets/ocean.jpg';
import Projects from '../../components/production/Projects';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.background} style={{ backgroundImage: `url(${oceanImage})` }}>
                <Header />
                <Welcome />
              
            </div>
                <About />
            <div className={styles.background} style={{ backgroundImage: `url(${oceanImage})` }}>
                <Projects />
            </div>
        </div>
    );
};

export default Home;





