import React, { useContext } from "react";
import { StoreContext } from "../../context/store/StoreContext";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  const { setSelectedCategory } = useContext(StoreContext);
  const categories = ["All", "men's clothing", "women's clothing", "jewelery", "electronics"];

  return (
    <div className={styles.sidebar}>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => setSelectedCategory(category)} className={styles.categoryItem}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
