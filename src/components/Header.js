import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <section id="header">
      <div className="web_logo w-25">SWEETWITHNC</div>
      <div className="w-75">
        <nav id="sidebar">
          <ul className="nav-items">
            <li>
              <NavLink to="/" className="navlinks">HOME<span></span></NavLink>
            </li>
            <li>
              <NavLink to="online-coaching" className="navlinks">ONLINE COACHING<span></span></NavLink>
            </li>
            <li>
              <NavLink to="workout-program" className="navlinks">WORKOUT PROGRAM<span></span></NavLink>
            </li>
            <li>
              <NavLink to="cookbook" className="navlinks">COOKBOOK<span></span></NavLink>
            </li>
            <li>
              <NavLink to="exercise-program" className="navlinks">EXERCISE PROGRAM<span></span></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
