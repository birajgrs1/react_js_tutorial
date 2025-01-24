import React, { useContext } from "react";
import { StoreContext } from "../../context/store/StoreContext";
import ProductCard from "../all-components/ProductCard";
import styles from "../../styles/ProductLists.module.css"; 

const ProductLists = () => {
  const { filteredProducts } = useContext(StoreContext);

  return (
    <div className={styles.productList}>
      {filteredProducts.length === 0 ? <p>No products found.</p> : null}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductLists;
