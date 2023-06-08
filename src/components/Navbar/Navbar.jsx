import React from "react";
import Button from "../Button/Button";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navbarData = [
    {
      id: "1",
      title: "About",
      target: "#about",
    },
    {
      id: "2",
      title: "Skills",
      target: "#skills",
    },
    {
      id: "3",
      title: "Projects",
      target: "#projects",
      
    },
    {
      id: "4",
      title: "Contact",
      target: "#contact",
    },
  ];

  return (
    <div className={styles.containerBtn}>
      {navbarData.map((data) => (
        <Button
          key={data.id}
          title={data.title}
          target={data.target}
         
        />
      ))}
    </div>
  );
};

export default Navbar;

