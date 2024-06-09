import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Modal from "../../components/appointment-modal/appointment";
import "./user.css";

const UserPage = () => {
	const [user, setUser] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const location = useLocation();
	const { professionalData, token } = location.state || {};

	useEffect(() => {
		const fetchUser = async () => {
			if (!professionalData || !professionalData._id) {
				return;
			}

			try {
				const response = await fetch(`http://localhost:5000/user/${professionalData._id}`, {
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
				setUser(data.user);
			} catch (error) {
				console.error("Error fetching professionals:", error);
				setUser(null);
			}
		};

		fetchUser();
	}, [professionalData, token]);

	const handleAppointClick = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleModalSave = (startTime, endTime) => {
		console.log("Selected Start Time:", startTime);
		console.log("Selected End Time:", endTime);
		// Implement save logic here, such as sending the data to the server
	};

	if (!professionalData) {
		return (
			<div>
				<Navbar token={token} />
				<div>No professional data provided.</div>
			</div>
		);
	}
	if (!user) {
		return (
			<div>
				<Navbar token={token} />
				<div>User data not available</div>
			</div>
		);
	}

	return (
		<div>
			<Navbar token={token} />
			<div className="user-container">
				<div>{user?.fullName}</div>
				<button onClick={handleAppointClick}>Appoint</button>
			</div>
			<Modal show={isModalOpen} onClose={handleModalClose} onSave={handleModalSave} />
		</div>
	);
};

export default UserPage;
