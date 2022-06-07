import React from 'react';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="nav-link" to="/">NavBar</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">First</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/second">Second</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div> 
  )
}

export default NavBar;
