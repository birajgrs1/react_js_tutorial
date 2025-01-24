import React, { useContext } from "react";
import { StoreContext } from "../../context/store/StoreContext";
import { FaTrash } from "react-icons/fa";
import styles from "../../styles/Cart.module.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(StoreContext);
  return (
    <div className={styles.cart}>
      <h3>Shopping Cart</h3>
      {cart.length === 0 ? <p>Cart is empty.</p> : null}
      {cart.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <span>
            {item.title} - ${item.price}
          </span>
          <FaTrash onClick={() => removeFromCart(item.id)} className={styles.trashIcon} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
