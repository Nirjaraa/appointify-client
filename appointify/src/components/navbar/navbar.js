import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="left-section">
				<h1 className="logo">Appointify</h1>
				<input type="text" placeholder="Search..." className="search-bar" />
			</div>
			<div className="right-section">
				<Link to="/" className="link">
					Home
				</Link>
				<Link to="/appointments" className="link">
					Appointments
				</Link>
				<Link to="/professionals" className="link">
					Professionals
				</Link>
				<Link to="/about" className="link">
					About Us
				</Link>
				<Link to="/profile" className="link">
					Profile
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
