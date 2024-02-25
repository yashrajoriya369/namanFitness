import React from "react";
// import { NavLink, Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <>
      <nav className="navbar" id="sidebar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="online-coaching">ONLINE COACHING</a>
            </li>
            <li className="nav-item">
              <a href="workout-program">WORKOUT PROGRAM</a>
            </li>
            <li className="nav-item">
              <a href="cookbook">COOKBOOK</a>
            </li>
            <li className="nav-item">
              <a href="exercise-program">EXERCISE PROGRAM</a>
            </li>
          </ul>
          <h1 className="logo">SWEATWITHNC</h1>
        </div>
      </nav>
    </>
  );
};

export default Header;
