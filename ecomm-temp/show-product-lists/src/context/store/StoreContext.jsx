import React, { createContext, useState } from "react";
import useFetch from "../../components/customhook/useFetch";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add item to cart
  const addToCart = (product) => setCart((prev) => [...prev, product]);

  // Remove item from cart
  const removeFromCart = (productId) =>
    setCart((prev) => prev.filter((item) => item.id !== productId));

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <StoreContext.Provider
      value={{
        products,
        filteredProducts,
        cart,
        addToCart,
        removeFromCart,
        selectedCategory,
        setSelectedCategory,
        loading,
        error,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
