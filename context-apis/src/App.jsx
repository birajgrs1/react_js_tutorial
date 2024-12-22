import React, { useState } from "react";
import Nav from "./Components/Navbar";
import CounterContext from "./Contexts/Counter";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import ThemeContext from "./Contexts/Theme";
import Content from "./Components/Content";
import styles from "./App.module.css"


function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      {/*       
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
      </div>
      */}
      <CounterContext.Provider value={{ count, setCount }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Nav />
          <Content />
          <ThemeSwitcher />
        </ThemeContext.Provider>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
