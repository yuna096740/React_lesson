import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import React from "react";
import "./navStyle.css";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <ul>
          <li><a href="/">Todo</a></li>
          <li><a href="/Home">Home</a></li>
          <li><a href="About">About</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Navbar;