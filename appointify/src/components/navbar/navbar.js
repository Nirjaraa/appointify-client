// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./navbar.css";

// const Navbar = ({ token, userData }) => {
// 	const navigate = useNavigate();
// 	const handleNavigation = (path) => {
// 		navigate(path, { state: { token, userData } });
// 	};

// 	return (
// 		<>
// 			<nav className="navbar">
// 				<div className="left-section">
// 					<h1 className="logo">Appointify</h1>
// 					<input type="text" placeholder="Search..." className="search-bar" />
// 				</div>

// 				<div className="right-section">
// 					<button onClick={() => handleNavigation("/home")} className="link">
// 						Home
// 					</button>
// 					<button onClick={() => handleNavigation("/appointments")} className="link">
// 						Appointments
// 					</button>
// 					<button onClick={() => handleNavigation("/professionals")} className="link">
// 						Professionals
// 					</button>
// 					<button onClick={() => handleNavigation("/about")} className="link">
// 						About Us
// 					</button>
// 					<button onClick={() => handleNavigation("/profile")} className="link">
// 						Profile
// 					</button>
// 				</div>
// 			</nav>
// 		</>
// 	);
// };

// export default Navbar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ token, userData }) => {
	const navigate = useNavigate();
	const [searchText, setSearchText] = useState("");

	const handleNavigation = (path) => {
		navigate(path, { state: { token, userData } });
	};

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
		console.log(searchText);
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:5000/user/search?search=${searchText}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			if (!response.ok) {
				const errorMessage = await response.text();
				throw new Error(errorMessage || "Something went wrong");
			}

			const data = await response.json();
			navigate("/search-results", { state: { result: data.users, token } });
		} catch (error) {
			console.error("Error during search:", error);
		}
	};

	return (
		<>
			<nav className="navbar">
				<div className="left-section">
					<h1 className="logo">Appointify</h1>
					<form onSubmit={handleSearch} className="search-form">
						<input
							type="text"
							placeholder="Search..."
							className="search-bar"
							value={searchText}
							onChange={handleSearchChange}
						/>
						<button type="submit" className="search-button">
							Search
						</button>
					</form>
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
