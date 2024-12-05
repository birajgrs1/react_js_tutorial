import React from "react";

import { Link } from "react-router-dom";

/*
function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              {/* If the link is disabled, use aria-disabled 
              <a
                className="nav-link"
                href="/"
                aria-disabled="true"
                tabIndex="-1"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
*/

//Component Rendering

// Nav Component
const Nav = () => {
  /*
  // let isLogin = true;
  let isLogin = false;

  if (isLogin) {
    return <Profile />;
  } else {
    return <Navbar />;
  }
    */

  //Using Ternary operator
  // let isLogin = true;
  // return <>{isLogin ? <Navbar /> : <Profile />}</>;

  return (
    <>
      {/* <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> */}
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
};
export default Nav;

// // Navbar Component
// const Navbar = () => {
//   return (
//     <>
//       <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
//         <ul style={{ listStyleType: "none", display: "flex" }}>
//           <li style={{ margin: "0 15px" }}>
//             <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
//               Home
//             </a>
//           </li>
//           <li style={{ margin: "0 15px" }}>
//             <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>
//               About
//             </a>
//           </li>
//           <li style={{ margin: "0 15px" }}>
//             <a
//               href="/contact"
//               style={{ color: "#fff", textDecoration: "none" }}
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// // Profile Component
// const Profile = () => {
//   return (
//     <>
//       <h2>Hello, Everyone!</h2>
//       <button>Logout</button>
//     </>
//   );
// };
