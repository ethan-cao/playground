import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <ul className="right">
                    {/* use Link rather than a, to prevent default action network request*/}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                    {/* NavLink add active class when the link is clicked*/}
                    <li><NavLink to="/socialweb">SocialWeb</NavLink></li>
                    <li><NavLink to="/stockPanel">StockPanel</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
