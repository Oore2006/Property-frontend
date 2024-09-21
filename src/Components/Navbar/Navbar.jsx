import React from "react"
import "./Navbar.css";


const Navbar =() => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="Logo">
                    Agency
                </a>
            </div>    
            <div className="navbar-center">
                <ul className="nav-links">
                    <li> 
                        <a href="/products"> Home</a>
                    </li>
                    <li>
                        <a href="/about"> About </a>
                    </li>
                    <li>
                        <a href="/contact"> Contact</a>
                    </li>
                <button className="login-btn"> Login </button>
                </ul>
            </div>
          </nav>
    );
};

export default Navbar;