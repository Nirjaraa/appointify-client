// import React from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

// const Navbar = ({ token }) => {
// 	return (
// 		<nav className="navbar">
// 			<div className="left-section">
// 				<h1 className="logo">Appointify</h1>
// 				<input type="text" placeholder="Search..." className="search-bar" />
// 			</div>
// 			{/* <div>{JSON.stringify(token)}</div> */}

// 			<div className="right-section">
// 				<Link to={{ pathname: "/home", state: { token } }} className="link">
// 					Home
// 				</Link>
// 				<Link to={{ pathname: "/appointments", state: { token } }} className="link">
// 					Appointments
// 				</Link>
// 				<Link to={{ pathname: "/professionals", state: { token } }} className="link">
// 					Professionals
// 				</Link>
// 				<Link to={{ pathname: "/about", state: { token } }} className="link">
// 					About Us
// 				</Link>
// 				<Link to={{ pathname: "/profile", state: { token } }} className="link">
// 					Profile
// 				</Link>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ token }) => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path, { state: { token } });
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <h1 className="logo">Appointify</h1>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>

        <div className="right-section">
          <button onClick={() => handleNavigation("/home")} className="link">
            Home
          </button>
          <button onClick={() => handleNavigation("/appointments")} className="link">
            Appointments
          </button>
          <button onClick={() => handleNavigation("/professionals")} className="link">
            Professionals
          </button>
          <button onClick={() => handleNavigation("/about")} className="link">
            About Us
          </button>
          <button onClick={() => handleNavigation("/profile")} className="link">
            Profile
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
