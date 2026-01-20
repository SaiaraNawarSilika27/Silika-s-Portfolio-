import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h3 className="nav-titel">Sili<span className="text-style">k</span>a</h3>
      <ul>
        <li><a className="dark-2">Portfolio</a></li>
        <li><a className="dark-2" href="#about">Blog</a></li>
        <li><a href="#resume">
            <button className="btn-primary">Hire me</button>
          </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;