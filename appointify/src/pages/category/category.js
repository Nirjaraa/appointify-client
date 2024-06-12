import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Professional from "../../components/professional/professional";
import Footer from "../../components/footer/footer";

const CategoryPage = () => {
	const [professionals, setProfessionals] = useState([]);
	const location = useLocation();
	const { token, category, userData } = location.state || {};

	useEffect(() => {
		const fetchProfessionals = async () => {
			try {
				const response = await fetch(`http://localhost:5000/user/getusersbycategory?category=${category}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					const errorMessage = await response.text();
					throw new Error(errorMessage || "Something went wrong");
				}

				const data = await response.json();
				setProfessionals(data.users);
			} catch (error) {
				console.error("Error fetching professionals:", error);
				setProfessionals([]); // Set an empty array in case of an error
			}
		};

		fetchProfessionals();
	}, [token]);

	if (!professionals || professionals.length === 0) {
		return (
			<div>
				<Navbar token={token} />
			</div>
		);
	}

	return (
		<div>
			<Navbar token={token} userData={userData} />
			<Professional data={professionals} token={token} category={category} />
			<Footer />
		</div>
	);
};

export default CategoryPage;
