import "./appointment.css";
import React, { useState } from "react";

const AppointmentBy = ({ appointments, onCancel }) => {
	return (
		<div>
			{appointments.length > 0 ? (
				appointments.map((appointment) => (
					<div key={appointment._id} className="appointment">
						<div className="appointment-header">
							<div>
								<p>
									<strong>Appointed To:</strong>{" "}
									{appointment.appointedTo.fullName}
								</p>
							</div>
							<div>
								<p className={`status ${appointment.status}`}>
									<strong>Status:</strong> {appointment.status}
								</p>
							</div>
						</div>
						<div className="appointment-summary">
							<p>
								<strong>Date:</strong>{" "}
								{new Date(appointment.startTime).toLocaleDateString()}
							</p>
							<p>
								<strong>Time:</strong>{" "}
								{new Date(appointment.startTime).toLocaleTimeString()} -{" "}
								{new Date(appointment.endTime).toLocaleTimeString()}
							</p>
							<button onClick={() => onCancel(appointment._id)}>Cancel</button>
						</div>
					</div>
				))
			) : (
				<p>No appointments found.</p>
			)}
		</div>
	);
};

const AppointmentTo = ({ appointments, onAccept, onReject }) => {
	return (
		<div>
			{appointments.length > 0 ? (
				appointments.map((appointment) => (
					<AppointmentItem
						key={appointment._id}
						appointment={appointment}
						onAccept={onAccept}
						onReject={onReject}
					/>
				))
			) : (
				<p>No appointments found.</p>
			)}
		</div>
	);
};

const AppointmentItem = ({ appointment, onAccept, onReject }) => {
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	const { startTime, endTime, description, status, appointedBy } = appointment;
	const { fullName, email, phoneNumber, address, gender, createdAt } = appointedBy;

	return (
		<div className="appointment">
			<div className="appointment-header">
				<div>
					<p>
						<strong>Appointed By:</strong> {fullName}
					</p>
					<p>
						<strong>Status:</strong> {status}
					</p>
				</div>
			</div>
			<div className="appointment-summary">
				<p>
					<strong>Date:</strong> {new Date(startTime).toLocaleDateString()}
				</p>
				<p>
					<strong>Time:</strong> {new Date(startTime).toLocaleTimeString()} -{" "}
					{new Date(endTime).toLocaleTimeString()}
				</p>
				<p>
					<strong>Description:</strong> {description}
				</p>
				{showMore && (
					<div>
						<p>
							<strong>Email:</strong> {email}
						</p>
						<p>
							<strong>Phone Number:</strong> {phoneNumber}
						</p>
						<p>
							<strong>Address:</strong> {address}
						</p>
						<p>
							<strong>Gender:</strong> {gender}
						</p>
						<p>
							<strong>Created At:</strong> {new Date(createdAt).toLocaleString()}
						</p>
					</div>
				)}
				<button onClick={handleShowMore}>{showMore ? "Show Less" : "Show More"}</button>
			</div>
			<div className="action-buttons">
				<button onClick={() => onAccept(appointment._id)}>Accept</button>
				<button onClick={() => onReject(appointment._id)}>Reject</button>
			</div>
		</div>
	);
};

const AppointmentHistory = ({ appointments }) => {
	return (
		<div>
			{appointments.length > 0 ? (
				appointments.map((appointment) => (
					<div key={appointment._id} className="appointment">
						<div className="appointment-header">
							<div>
								<p>
									<strong>Appointed By:</strong>{" "}
									{appointment.appointedBy.fullName}
								</p>
								<p>
									<strong>Appointed To:</strong>{" "}
									{appointment.appointedTo.fullName}
								</p>
							</div>
							<div>
								<p className={`status ${appointment.status}`}>
									<strong>Status:</strong> {appointment.status}
								</p>
							</div>
						</div>
						<div className="appointment-summary">
							<p>
								<strong>Date:</strong>{" "}
								{new Date(appointment.startTime).toLocaleDateString()}
							</p>
							<p>
								<strong>Time:</strong>{" "}
								{new Date(appointment.startTime).toLocaleTimeString()} -{" "}
								{new Date(appointment.endTime).toLocaleTimeString()}
							</p>
							<p>
								<strong>Description:</strong> {appointment.description}
							</p>
						</div>
					</div>
				))
			) : (
				<p>No appointment history found.</p>
			)}
		</div>
	);
};

export { AppointmentTo, AppointmentBy, AppointmentHistory };
