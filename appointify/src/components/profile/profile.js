// import React, { useState, useEffect } from "react";
// import image from "../../images/salman.jpg";
// import "./profile.css";

// const Profile = ({ token, userData }) => {
// 	const [user, setUser] = useState(null);
// 	const [editedUser, setEditedUser] = useState(null);
// 	const [isDirty, setIsDirty] = useState(false);
// 	console.log(token);

// 	useEffect(() => {
// 		setUser(userData);
// 		setEditedUser(userData);
// 	}, [userData]);

// 	if (!user) {
// 		return (
// 			<div>
// 				<div>User data not available</div>
// 			</div>
// 		);
// 	}

// 	const formatDate = (dateString) => {
// 		if (!dateString) return "";
// 		const date = new Date(dateString);
// 		return date.toLocaleDateString("en-US", {
// 			year: "numeric",
// 			month: "long",
// 			day: "numeric",
// 		});
// 	};

// 	const handleChange = (e) => {
// 		const { id, value } = e.target;
// 		setEditedUser({ ...editedUser, [id]: value });
// 		setIsDirty(true);
// 	};

// 	const handleSave = async () => {
// 		try {
// 			const response = await fetch(`http://localhost:5000/user/update/${userData._id}`, {
// 				method: "PUT",
// 				headers: {
// 					"Content-Type": "application/json",
// 					Authorization: `Bearer ${token}`,
// 				},
// 				body: JSON.stringify(editedUser),
// 			});

// 			if (!response.ok) {
// 				const errorMessage = await response.text();
// 				throw new Error(errorMessage || "Something went wrong");
// 			}

// 			const data = await response.json();
// 			console.log(data);
// 			setUser(data);
// 			setEditedUser(data);
// 			setIsDirty(false);
// 		} catch (error) {
// 			console.error("Failed to save user data:", error);
// 		}
// 	};

// 	return (
// 		<div className="profile-container">
// 			<div className="profile-info-container">
// 				<div className="profile-header">
// 					<div className="profile-avatar">
// 						<img src={image} alt="User Avatar" />
// 					</div>
// 					<div className="profile-info">
// 						<h2>{editedUser.fullName}</h2>
// 						<p>{editedUser.role}</p>
// 					</div>
// 				</div>
// 				<hr />
// 				<div className="profile-details">
// 					<h2>Personal Information</h2>
// 					<div className="detail">
// 						<label htmlFor="fullName">Full Name:</label>
// 						<input type="text" id="fullName" value={editedUser.fullName} onChange={handleChange} />
// 					</div>
// 					<div className="detail">
// 						<label htmlFor="email">Email:</label>
// 						<input type="text" id="email" value={editedUser.email} onChange={handleChange} />
// 					</div>
// 					<div className="detail">
// 						<label htmlFor="address">Address:</label>
// 						<input type="text" id="address" value={editedUser.address} onChange={handleChange} />
// 					</div>
// 					<div className="dob-info">
// 						<div className="detail">
// 							<label htmlFor="dob">DOB:</label>
// 							<input
// 								type="text"
// 								id="dob"
// 								value={formatDate(editedUser.DOB)}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="detail">
// 							<label htmlFor="gender">Gender:</label>
// 							<input
// 								type="text"
// 								id="gender"
// 								value={editedUser.gender}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="detail">
// 							<label htmlFor="phone">Phone Number:</label>
// 							<input
// 								type="text"
// 								id="phone"
// 								value={editedUser.phoneNumber}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 				{editedUser.role === "professional" && (
// 					<div className="professional-info">
// 						<div className="detail">
// 							<label htmlFor="category">Category:</label>
// 							<input
// 								type="text"
// 								id="category"
// 								value={editedUser.category}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="detail">
// 							<label htmlFor="profession">Profession:</label>
// 							<input
// 								type="text"
// 								id="profession"
// 								value={editedUser.profession}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="detail">
// 							<label htmlFor="description">Description:</label>
// 							<input
// 								type="text"
// 								id="description"
// 								value={editedUser.description}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 					</div>
// 				)}
// 				{isDirty && (
// 					<button className="edit-profile-btn" onClick={handleSave}>
// 						Save
// 					</button>
// 				)}
// 			</div>
// 			<div className="additional-info-container">{/* Add more additional info boxes here */}</div>
// 		</div>
// 	);
// };

// export default Profile;
import React, { useState, useEffect } from "react";
import image from "../../images/salman.jpg";
import "./profile.css";

const Profile = ({ token, userData }) => {
	const [user, setUser] = useState({
		fullName: "",
		email: "",
		address: "",
		DOB: "",
		gender: "",
		phoneNumber: "",
		role: "",
		category: "",
		profession: "",
		description: "",
	});
	const [editedUser, setEditedUser] = useState({
		fullName: "",
		email: "",
		address: "",
		DOB: "",
		gender: "",
		phoneNumber: "",
		role: "",
		category: "",
		profession: "",
		description: "",
	});
	const [isDirty, setIsDirty] = useState(false);

	useEffect(() => {
		if (userData) {
			setUser(userData);
			setEditedUser(userData);
		}
	}, [userData]);

	const formatDate = (dateString) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setEditedUser({ ...editedUser, [id]: value });
		setIsDirty(true);
	};

	const handleSave = async () => {
		try {
			const response = await fetch(`http://localhost:5000/user/update/${userData._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(editedUser),
			});

			if (!response.ok) {
				const errorMessage = await response.text();
				throw new Error(errorMessage || "Something went wrong");
			}

			const data = await response.json();
			console.log(data);
			// Assuming the response contains the updated user data
			setUser(data.user);
			setEditedUser(data.user);
			setIsDirty(false);
		} catch (error) {
			console.error("Failed to save user data:", error);
		}
	};

	return (
		<div className="profile-container">
			<div className="profile-info-container">
				<div className="profile-header">
					<div className="profile-avatar">
						<img src={image} alt="User Avatar" />
					</div>
					<div className="profile-info">
						<h2>{editedUser.fullName || ""}</h2>
						<p>{editedUser.role || ""}</p>
					</div>
				</div>
				<hr />
				<div className="profile-details">
					<h2>Personal Information</h2>
					<div className="detail">
						<label htmlFor="fullName">Full Name:</label>
						<input
							type="text"
							id="fullName"
							value={editedUser.fullName || ""}
							onChange={handleChange}
						/>
					</div>
					<div className="detail">
						<label htmlFor="email">Email:</label>
						<input type="text" id="email" value={editedUser.email || ""} onChange={handleChange} />
					</div>
					<div className="detail">
						<label htmlFor="address">Address:</label>
						<input
							type="text"
							id="address"
							value={editedUser.address || ""}
							onChange={handleChange}
						/>
					</div>
					<div className="dob-info">
						<div className="detail">
							<label htmlFor="dob">DOB:</label>
							<input
								type="text"
								id="dob"
								value={formatDate(editedUser.DOB) || ""}
								onChange={handleChange}
							/>
						</div>
						<div className="detail">
							<label htmlFor="gender">Gender:</label>
							<input
								type="text"
								id="gender"
								value={editedUser.gender || ""}
								onChange={handleChange}
							/>
						</div>
						<div className="detail">
							<label htmlFor="phone">Phone Number:</label>
							<input
								type="text"
								id="phone"
								value={editedUser.phoneNumber || ""}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				{editedUser.role === "professional" && (
					<div className="professional-info">
						<div className="detail">
							<label htmlFor="category">Category:</label>
							<input
								type="text"
								id="category"
								value={editedUser.category || ""}
								onChange={handleChange}
							/>
						</div>
						<div className="detail">
							<label htmlFor="profession">Profession:</label>
							<input
								type="text"
								id="profession"
								value={editedUser.profession || ""}
								onChange={handleChange}
							/>
						</div>
						<div className="detail">
							<label htmlFor="description">Description:</label>
							<input
								type="text"
								id="description"
								value={editedUser.description || ""}
								onChange={handleChange}
							/>
						</div>
					</div>
				)}
				{isDirty && (
					<button className="edit-profile-btn" onClick={handleSave}>
						Save
					</button>
				)}
			</div>
			<div className="additional-info-container">{/* Add more additional info boxes here */}</div>
		</div>
	);
};

export default Profile;
