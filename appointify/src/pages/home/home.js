import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

const HomePage = () => {
	const location = useLocation();
	const { user, token } = location.state || {};
	return (
		<div>
			<Navbar token={token} />
			<div>
				<h2>THis is the main page</h2>
			</div>
		</div>
	);
};

export default HomePage;
