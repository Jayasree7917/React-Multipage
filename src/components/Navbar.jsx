import React, { useState } from "react";
import "./Navbar.css"; 
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
    
      <Link className="title">
          App
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {/* Menu toggle button */}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className="nav-link" activeClassName="active">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/teams" className="nav-link" activeClassName="active">
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink to="/tedx" className="nav-link" activeClassName="active"> 
           Tedx
          </NavLink>
        </li>
        <li>
          <NavLink to="/aarohan" className="nav-link" activeClassName="active">
           Aarohan
          </NavLink>
        </li>
        <li>
          <NavLink to="/alumni" className="nav-link" activeClassName="active">
          Alumni
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
