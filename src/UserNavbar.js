// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import './UserNavbar.css';

const UserNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
const [username, setUser] =useState("");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  const navigate = useNavigate();

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

export default UserNavbar;