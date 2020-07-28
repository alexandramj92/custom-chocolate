import React from 'react';
import NavLogo from '../assets/logos/sorbet_logo.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav">
      <h2 className="nav-logo">
        <img src={NavLogo} alt="Logo" />
      </h2>
      <ul>
        <li>
          <a href="https://chelseaandthechocolatefactory.com/" title="home">
            Home
          </a>
        </li>
        <li>
          <a
            href="https://chelseaandthechocolatefactory.com/collections/all"
            title="catalog"
          >
            Catalog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
