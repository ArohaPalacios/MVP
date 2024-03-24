import React from "react";
import {Link, NavLink} from "react-router-dom";


export default function Navbar () {
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div className="container-fluid">

          <NavLink className="nav-link" activeclassname="active" to="/">Home</NavLink>
          <NavLink className="nav-link" activeclassname="active" to="/favorites">Favorites</NavLink>
          
        </div>
    </nav>
    )
}