import React from "react";
import "./App.css";
import Sidebar from "./components/all-components/Sidebar";
import ProductLists from "./components/all-components/ProductLists";
import Cart from "./components/all-components/Cart";
import StoreProvider from "./context/store/StoreContext";

function App() {
  return (
    <StoreProvider>
      <h2>Product Store</h2>
      <div className="app">

        <Sidebar />
        <ProductLists />
        <Cart />
      </div>
    </StoreProvider>
  );
}

export default App;
