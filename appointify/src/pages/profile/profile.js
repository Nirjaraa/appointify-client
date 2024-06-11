import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Profile from "../../components/profile/profile";
import "./profile.css";

const ProfilePage = () => {
	const [user, setUser] = useState(null);
	const location = useLocation();
	const { userData, token } = location.state || {};

	useEffect(() => {
		setUser(userData);
	}, [userData]);

	return (
		<div>
			<Navbar token={token} />
			<Profile userData={user} token={token} />
			<Footer />
		</div>
	);
};

export default ProfilePage;
