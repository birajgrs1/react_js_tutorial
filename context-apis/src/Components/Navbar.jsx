import React from "react";
import ButtonComponent from "./ButtonComponent";
import styles from "./Navbar.module.css"

const Nav = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <p>Hello, I am a navbar.</p>
      <ButtonComponent></ButtonComponent>
      </nav>
    </>
  );
};

export default Nav;