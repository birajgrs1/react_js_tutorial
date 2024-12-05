import React, { useState, useEffect } from "react";
import "./Product.css";


const Product = () => {
  // console.log(props.productDetails);

  // using usestate concept
  const [products, setProducts] = useState([]);

  // const demoFunction = () => {
  //   // console.log("Button Clicked!!!");
  //   // alert("Button Clicked!!!");
  // };

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products"); 
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <h5>Product: {props.title}</h5>
      <p>Price: {props.price}</p>
      {props.children} */}

      {/* 
            <h5>Product: {props.productDetails.title}</h5>
            <p>Price: {props.productDetails.price}</p>
            <p>Brand: {props.productDetails.brand}</p> */}

      {/* Event Handling in React js  */}
      {/* <h2>This is a product component.</h2>
      <button onClick={demoFunction}>Click Me</button> */}

      <h2>Product Page</h2>
      <div className="product-list">
        {products.map((prod) => {
          return (
            <div key={prod.id} className="product-card">
              <img src={prod.thumbnail} alt={prod.title} className="product-image" />
              <h3>{prod.title}</h3>
              <p>Price: ${prod.price}</p>
              <p>Brand: {prod.brand}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
