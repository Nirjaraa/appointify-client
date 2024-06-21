import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./searchResult.css";

const SearchResultPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { token, result } = location.state || {};

	const handleClick = (user) => {
		navigate("/user", { state: { professionalData: user, token } });
	};

	return (
		<div className="search-results">
			<Navbar token={token} />
			<div className="search-results-container">
				{result.map((user) => (
					<div className="searched-users" onClick={() => handleClick(user)} key={user.id}>
						{user.fullName}
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default SearchResultPage;
