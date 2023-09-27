import React from "react";
import "./navStyle.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="./index.html">Todo</a></li>
        <li><a href="./Home.html">Home</a></li>
        <li><a href="./About.html">About</a></li>
      </ul>
    </nav>
  )
}
export default Navbar;