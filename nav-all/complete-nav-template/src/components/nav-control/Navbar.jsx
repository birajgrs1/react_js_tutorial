import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${search}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">MyNav</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <form onSubmit={handleSearch} className="search-box">
          <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit"><FaSearch /></button>
        </form>
        {isAuthenticated ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/signin" className="signin-btn">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
