import React from "react";
//import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import { Context } from "../store/appContext";


const Navbar = () => {
    return ( 
    <nav className="navbar navbar-expand-lg bg-info mb-2 ml-5">  
    <strong><Link to="/" className="navbar-brand mx-5">Kino</Link></strong>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav p-2">
          <li className="nav-item active mx-4">
          <strong><Link to="/pelis">Peliculas</Link></strong>
          </li>
          <li className="nav-item mx-4">
          <strong><Link to="/person">Personas</Link></strong>
          </li>
          <li className="nav-item mx-4">
          <strong><Link to="/progTV">Programas TV</Link></strong>
          </li>
        </ul>
      </div>
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div className="dropdown-menu">
		<Link to="/register" className="dropdown-item">
			Registrarse
		</Link>
		<Link to="/login" className="dropdown-item">
			Login
		</Link>
  </div>
</div>
  
    
    </nav>
     );
}
 
export default Navbar;


