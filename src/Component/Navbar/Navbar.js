import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
        <div className="container-fluid">
          <div className="row">
           <div className="col-10 mx-auto">
           <nav className="navbar navbar-expand-lg navbar-light ">
    <NavLink className="navbar-brand" to="/">Monaim Mukul</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/service">Service</NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
           </div>
          </div>
        </div>
        

        </>
    );
};

export default Navbar;