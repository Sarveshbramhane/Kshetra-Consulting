import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css'; // Assuming you want to style it separately

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
