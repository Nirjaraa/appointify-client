import React, { useState } from "react";
import "./appointment.css";

const Modal = ({ show, onClose, onConfirm, token, appointedTo }) => {
	const [startTime, setStartTime] = useState();
	const [endTime, setEndTime] = useState();
	const [description, setDescription] = useState();

	if (!show) {
		return null;
	}

	const handleConfirm = () => {
		onConfirm(startTime, endTime, description, token, appointedTo);
		onClose();
	};

	return (
		<div className="modal-overlay">
			<div className="modal">
				<h2>Select Appointment Time</h2>
				<div className="modal-body">
					<label>
						Start Time:
						<input
							type="datetime-local"
							value={startTime}
							onChange={(e) => setStartTime(e.target.value)}
						/>
					</label>
					<label>
						End Time:
						<input
							type="datetime-local"
							value={endTime}
							onChange={(e) => setEndTime(e.target.value)}
						/>
					</label>
					<label>
						Description:
						<textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" />
					</label>
				</div>
				<div className="modal-footer">
					<button onClick={onClose}>Cancel</button>
					<button onClick={handleConfirm}>Confirm</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
