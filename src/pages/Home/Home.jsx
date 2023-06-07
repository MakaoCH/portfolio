import React from 'react';
import Welcome from "../../components/Welcome/Welcome";
import Header from "../../components/Header/Header";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeWelcome}>
            <Header />
            <Welcome />
        </div>
    );
};

export default Home;


