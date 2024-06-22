import React, { useState } from "react";
import "./appointment.css";
import Swal from "sweetalert2";

const Modal = ({ show, onClose, onConfirm, token, appointedTo }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  if (!show) {
    return null;
  }

  const handleConfirm = () => {
    if (!startTime || !endTime || !description) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Appointment",
      text: "Are you sure you want to book this appointment?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          onConfirm(startTime, endTime, description, token, appointedTo);
          Swal.fire("Success", "Appointment has been booked successfully", "success");
          onClose();
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error.message || "Something went wrong",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Select Appointment Time</h2>
        <div className="modal-body">
          <label>
            Start Time:
            <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </label>
          <label>
            End Time:
            <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" />
          </label>
        </div>
        <div className="modal-footer">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
