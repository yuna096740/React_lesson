import React from "react";
import "./navStyle.css";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <ul>
          <li><Link to="/">Todo</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="About">About</Link></li>
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