// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "../../components/navbar/navbar";
// import { AppointmentBy, AppointmentTo, AppointmentHistory } from "../../components/appointment/appointment";
// import "./home.css";

// const HomePage = () => {
// 	const location = useLocation();
// 	const { token, userData } = location.state || {};
// 	const [appointmentsBy, setAppointmentsBy] = useState([]);
// 	const [appointmentsTo, setAppointmentsTo] = useState([]);
// 	const [appointmentHistory, setAppointmentHistory] = useState([]);
// 	const [currentUserData, setCurrentUserData] = useState([]);
// 	const [currentView, setCurrentView] = useState("by");

// 	console.log("Home");
// 	console.log(userData);

// 	useEffect(() => {
// 		const fetchAppointments = async () => {
// 			try {
// 				const response = await fetch("http://localhost:5000/appointment/view", {
// 					method: "GET",
// 					headers: {
// 						"Content-Type": "application/json",
// 						Authorization: `Bearer ${token}`,
// 					},
// 				});

// 				if (!response.ok) {
// 					const errorMessage = await response.text();
// 					throw new Error(errorMessage || "Something went wrong");
// 				}

// 				const data = await response.json();
// 				setAppointmentsBy(data.allAppointmentsBy || []);
// 				setAppointmentsTo(data.allAppointmentsTo || []);
// 				setCurrentUserData(userData);
// 			} catch (error) {
// 				console.error("Error fetching appointments:", error);
// 				setAppointmentsBy([]);
// 				setAppointmentsTo([]);
// 			}
// 		};

// 		fetchAppointments();
// 	}, [token, userData]);

// 	// useEffect(() => {
// 	// 	const fetchAppointmentHistory = async () => {
// 	// 		try {
// 	// 			const response = await fetch("http://localhost:5000/appointment/history", {
// 	// 				method: "GET",
// 	// 				headers: {
// 	// 					"Content-Type": "application/json",
// 	// 					Authorization: `Bearer ${token}`,
// 	// 				},
// 	// 			});

// 	// 			if (!response.ok) {
// 	// 				const errorMessage = await response.text();
// 	// 				throw new Error(errorMessage || "Something went wrong");
// 	// 			}

// 	// 			const data = await response.json();
// 	// 			setAppointmentHistory(data.history || []);
// 	// 		} catch (error) {
// 	// 			console.error("Error fetching appointment history:", error);
// 	// 			setAppointmentHistory([]);
// 	// 		}
// 	// 	};

// 	// 	fetchAppointmentHistory();
// 	// }, [token]);

// 	const handleCancel = async (id) => {
// 		try {
// 			const response = await fetch(`http://localhost:5000/appointment/cancel/${id}`, {
// 				method: "PUT",
// 				headers: {
// 					"Content-Type": "application/json",
// 					Authorization: `Bearer ${token}`,
// 				},
// 				body: JSON.stringify({ userId: user._id }),
// 			});

// 			if (!response.ok) {
// 				const errorMessage = await response.text();
// 				throw new Error(errorMessage || "Something went wrong");
// 			}

// 			const data = await response.json();
// 			console.log("Appointment cancelled:", data);

// 			setUser((prevUser) => {
// 				return {
// 					...prevUser,
// 					appointments: prevUser.appointments.filter((appt) => appt._id !== id),
// 				};
// 			});
// 		} catch (error) {
// 			console.error("Failed to cancel appointment:", error);
// 		}
// 	};

// 	const handleAccept = (id) => {
// 		setAppointmentsTo(
// 			appointmentsTo.map((appointment) => (appointment._id === id ? { ...appointment, status: "accepted" } : appointment))
// 		);
// 	};

// 	const handleReject = (id) => {
// 		setAppointmentsTo(
// 			appointmentsTo.map((appointment) => (appointment._id === id ? { ...appointment, status: "rejected" } : appointment))
// 		);
// 	};

// 	return (
// 		<div>
// 			<Navbar token={token} userData={currentUserData} />
// 			<div className="appointment">
// 				<div className="appointment-nav">
// 					<button onClick={() => setCurrentView("by")}>Appointed By</button>
// 					<button onClick={() => setCurrentView("to")}>Appointed To</button>
// 					<button onClick={() => setCurrentView("history")}>History</button>
// 				</div>
// 				<div className="appointment-container">
// 					{currentView === "by" && <AppointmentBy appointments={appointmentsBy} onCancel={handleCancel} />}
// 					{currentView === "to" && (
// 						<AppointmentTo
// 							appointments={appointmentsTo}
// 							onAccept={handleAccept}
// 							onReject={handleReject}
// 						/>
// 					)}
// 					{currentView === "history" && <AppointmentHistory appointments={appointmentHistory} />}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HomePage;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "../../components/navbar/navbar";
// import { AppointmentBy, AppointmentTo, AppointmentHistory } from "../../components/appointment/appointment";
// import "./home.css";

// const HomePage = () => {
// 	const location = useLocation();
// 	const { token, userData } = location.state || {};
// 	const [appointmentsBy, setAppointmentsBy] = useState([]);
// 	const [appointmentsTo, setAppointmentsTo] = useState([]);
// 	const [appointmentHistory, setAppointmentHistory] = useState([]);
// 	const [currentUserData, setCurrentUserData] = useState([]);
// 	const [currentView, setCurrentView] = useState("by");

// 	useEffect(() => {
// 		const fetchAppointments = async () => {
// 			try {
// 				const response = await fetch("http://localhost:5000/appointment/view", {
// 					method: "GET",
// 					headers: {
// 						"Content-Type": "application/json",
// 						Authorization: `Bearer ${token}`,
// 					},
// 				});

// 				if (!response.ok) {
// 					const errorMessage = await response.text();
// 					throw new Error(errorMessage || "Something went wrong");
// 				}

// 				const data = await response.json();
// 				setAppointmentsBy(data.allAppointmentsBy || []);
// 				setAppointmentsTo(data.allAppointmentsTo || []);
// 				setCurrentUserData(userData);
// 			} catch (error) {
// 				console.error("Error fetching appointments:", error);
// 				setAppointmentsBy([]);
// 				setAppointmentsTo([]);
// 			}
// 		};

// 		fetchAppointments();
// 	}, [token, userData]);

// 	const handleCancel = async (id) => {
// 		try {
// 			const response = await fetch(`http://localhost:5000/appointment/cancel/${id}`, {
// 				method: "PUT",
// 				headers: {
// 					"Content-Type": "application/json",
// 					Authorization: `Bearer ${token}`,
// 				},
// 			});

// 			if (!response.ok) {
// 				const errorMessage = await response.text();
// 				throw new Error(errorMessage || "Something went wrong");
// 			}

// 			const data = await response.json();

// 			setAppointmentsBy((prevAppointments) => prevAppointments.filter((appt) => appt._id !== id));
// 		} catch (error) {
// 			console.error("Failed to cancel appointment:", error);
// 		}
// 	};

// 	const handleAccept = async (id) => {
// 		try {
// 			const response = await fetch(`http://localhost:5000/appointment/accept/${id}`, {
// 				method: "PUT",
// 				headers: {
// 					"Content-Type": "application/json",
// 					Authorization: `Bearer ${token}`,
// 				},
// 			});

// 			if (!response.ok) {
// 				const errorMessage = await response.text();
// 				throw new Error(errorMessage || "Something went wrong");
// 			}

// 			const data = await response.json();
// 			console.log("Appointment accepted:", data);

// 			setAppointmentsTo((prevAppointments) =>
// 				prevAppointments.map((appointment) =>
// 					appointment._id === id ? { ...appointment, status: "accepted" } : appointment
// 				)
// 			);
// 		} catch (error) {
// 			console.error("Failed to accept appointment:", error);
// 		}
// 	};

// 	const handleReject = async (id) => {
// 		try {
// 			const response = await fetch(`http://localhost:5000/appointment/reject/${id}`, {
// 				method: "PUT",
// 				headers: {
// 					"Content-Type": "application/json",
// 					Authorization: `Bearer ${token}`,
// 				},
// 			});

// 			if (!response.ok) {
// 				const errorMessage = await response.text();
// 				throw new Error(errorMessage || "Something went wrong");
// 			}

// 			const data = await response.json();
// 			console.log("Appointment rejected:", data);

// 			setAppointmentsTo((prevAppointments) =>
// 				prevAppointments.map((appointment) =>
// 					appointment._id === id ? { ...appointment, status: "rejected" } : appointment
// 				)
// 			);
// 		} catch (error) {
// 			console.error("Failed to reject appointment:", error);
// 		}
// 	};

// 	return (
// 		<div>
// 			<Navbar token={token} userData={currentUserData} />
// 			<div className="appointment">
// 				<div className="appointment-nav">
// 					<button onClick={() => setCurrentView("by")}>Appointed By</button>
// 					<button onClick={() => setCurrentView("to")}>Appointed To</button>
// 					<button onClick={() => setCurrentView("history")}>History</button>
// 				</div>
// 				<div className="appointment-container">
// 					{currentView === "by" && <AppointmentBy appointments={appointmentsBy} onCancel={handleCancel} />}
// 					{currentView === "to" && (
// 						<AppointmentTo
// 							appointments={appointmentsTo}
// 							onAccept={handleAccept}
// 							onReject={handleReject}
// 						/>
// 					)}
// 					{currentView === "history" && <AppointmentHistory appointments={appointmentHistory} />}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HomePage;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { AppointmentBy, AppointmentTo, AppointmentHistory } from "../../components/appointment/appointment";
import "./home.css";

const HomePage = () => {
	const location = useLocation();
	const { token, userData } = location.state || {};
	const [appointmentsBy, setAppointmentsBy] = useState([]);
	const [appointmentsTo, setAppointmentsTo] = useState([]);
	const [appointmentHistory, setAppointmentHistory] = useState([]);
	const [currentUserData, setCurrentUserData] = useState([]);
	const [currentView, setCurrentView] = useState("by");

	const fetchAppointments = async () => {
		try {
			const response = await fetch("http://localhost:5000/appointment/view", {
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
			setAppointmentsBy(data.allAppointmentsBy || []);
			setAppointmentsTo(data.allAppointmentsTo || []);
			setCurrentUserData(userData);
		} catch (error) {
			console.error("Error fetching appointments:", error);
			setAppointmentsBy([]);
			setAppointmentsTo([]);
		}
	};

	useEffect(() => {
		fetchAppointments();
	}, [token, userData]);

	const handleCancel = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/appointment/cancel/${id}`, {
				method: "PUT",
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
			console.log("Appointment cancelled:", data);

			await fetchAppointments();
		} catch (error) {
			console.error("Failed to cancel appointment:", error);
		}
	};

	const handleAccept = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/appointment/accept/${id}`, {
				method: "PUT",
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
			console.log("Appointment accepted:", data);

			await fetchAppointments();
		} catch (error) {
			console.error("Failed to accept appointment:", error);
		}
	};

	const handleReject = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/appointment/reject/${id}`, {
				method: "PUT",
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
			console.log("Appointment rejected:", data);

			await fetchAppointments();
		} catch (error) {
			console.error("Failed to reject appointment:", error);
		}
	};

	return (
		<div>
			<Navbar token={token} userData={currentUserData} />
			<div className="appointment">
				<div className="appointment-nav">
					<button onClick={() => setCurrentView("by")}>Appointed By</button>
					<button onClick={() => setCurrentView("to")}>Appointed To</button>
					<button onClick={() => setCurrentView("history")}>History</button>
				</div>
				<div className="appointment-container">
					{currentView === "by" && <AppointmentBy appointments={appointmentsBy} onCancel={handleCancel} />}
					{currentView === "to" && (
						<AppointmentTo
							appointments={appointmentsTo}
							onAccept={handleAccept}
							onReject={handleReject}
						/>
					)}
					{currentView === "history" && <AppointmentHistory appointments={appointmentHistory} />}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
