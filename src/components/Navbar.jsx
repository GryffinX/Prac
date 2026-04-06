import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0", marginBottom: "20px" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", flexWrap: "wrap" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/add">Add Numbers</Link></li>
        <li><Link to="/voting">Voting</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/vowel">Vowel Counter</Link></li>
        <li><Link to="/factorial">Factorial</Link></li>
        <li><Link to="/string">String Reverse</Link></li>
        <li><Link to="/sumofdigits">Sum of Digits</Link></li>
        <li><Link to="/prac1">Prac1</Link></li>
        <li><Link to="/prac2">Prac2</Link></li>
        <li><Link to="/props">Props Example</Link></li>
        <li><Link to="/compare">Compare Numbers</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
