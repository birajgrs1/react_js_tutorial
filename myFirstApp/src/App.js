// import logo from "./logo.svg";
// import DemoClassComponent from "./Component/DemoClassComponent";
// import Header from "./Component/Header";
// import Product from "./Component/Product";
// import EventHandler from "./Component/EventHandler";
// import Nav from "./Component/Nav";
// import ListItems from "./Component/ListItems";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Contact from "./Component/Contact";
import HooksExamples from "./Component/HooksExamples";


// function App() {
//   return (
//     <div>
//       {/* <h1>Hello World! </h1>
//       <p>This is my First Project in React Js.</p>

//        <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;

/*
//Functional Component in reactjs

function sayHello() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is functional component demo in reactjs.</p>
    </>
  );
}
export default sayHello;
*/

function App() {
  /*
  //Creating object
  const productDatas={
    title: "Laptop",
    price: "80000",
    brand: "Lenovo"
  }
  */

  // let isChosen = true;

  return (
    <>
      {/* Example of inline CSS: */}
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "yellowgreen",
        }}
      > */}

      {/* <Header /> */}

      {/* <p>Hello, World!</p> */}

      {/* <DemoClassComponent /> */}

      {/* This is parent component */}
      {/* <Product productDetails={productDatas} /> */}

      {/* <Product title="Laptop" price="80000" /> */}
      {/* <button>Buy now</button> */}
      {/* <Product /> */}
      {/* <Product title="Mobile" price="20000" /> */}
      {/* <button>Buy now</button> */}
      {/* <Product /> */}
      {/* <Product title="Headphone" price="1000" /> */}
      {/* <button>Buy now</button> */}
      {/* <Product /> */}

      {/* Event handling */}
      {/* <EventHandler /> */}
      

    {/*  
      <Router>
      <Nav />
        <Routes>
          <Route path="/home" element={<Home/>}>Home</Route>
          <Route path="/about" element={<About/>}>About</Route>
          <Route path="/contact" element={<Contact/>}>Contact</Route>
        </Routes>
        <p>&copy; 2024 <b>Biraj Grs| React Tutorial.</b> All rights reserved.</p>

      </Router>
      */}
      {/* Using conditional rendering ---> 'logical operator'
      {isChosen && <Product />}

      <ListItems/>
       */}

       {/* Hooks in React */}
       <HooksExamples/>

       {/* See fetched datas */}
       {/* <Product/> */}


    </>
  );
}

export default App;
