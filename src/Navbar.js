// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {/* Add your logo or text for the logo */}
          <img src={process.env.PUBLIC_URL + '/websitelogo.png'} alt='' />
        </Link>
        <div className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
          {/* <li>
            <Link to="/landingcontent" onClick={hideMenu}>Admin</Link>
          </li> */}
          {/* <li>
          <Link to="/landingcontent" onClick={hideMenu}>Admin</Link>
          </li> */}
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            Help
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;