import React, { useContext } from "react";
import { StoreContext } from "../../context/store/StoreContext";
import { FaCartPlus } from "react-icons/fa";
import styles from "../../styles/ProductCard.module.css";

const ProductCard = ({ product }) => { 
  const { addToCart } = useContext(StoreContext);

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} className={styles.addToCartBtn}>
        <FaCartPlus />
      </button>
    </div>
  );
};

export default ProductCard;
