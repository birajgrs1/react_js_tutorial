import React, { useContext } from "react";
import ThemeContext from "../Contexts/Theme";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </>
  );
};
export default ThemeSwitcher;
