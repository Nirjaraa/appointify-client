import "./appointment.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AppointmentBy = ({ appointments, onCancel }) => {
  let sortedAppointments = [];
  if (appointments && appointments.length)
    sortedAppointments = appointments.filter((appointment) => appointment.status === "pending").sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  // const sortedAppointments = appointments.filter((appointment) => appointment.status === "pending").sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

  return (
    <div>
      {sortedAppointments.length > 0 ? (
        sortedAppointments.map((appointment) => (
          <div key={appointment._id}>
            <div className="appointment-information">
              <div className="appointment-header">
                <div>
                  <p>
                    <strong>Appointed To:</strong> {appointment.appointedTo.fullName}
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
                  <strong>Date:</strong> {new Date(appointment.startTime).toLocaleDateString()}
                </p>
                <p>
                  <strong>Time:</strong> {new Date(appointment.startTime).toLocaleTimeString()} - {new Date(appointment.endTime).toLocaleTimeString()}
                </p>

                {/* <button onClick={() => onCancel(appointment._id)}>Cancel</button> */}
                {appointment.status === "pending" && (
                  <button className="cancel-button" onClick={() => handleCancel(appointment)}>
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="spaces">
          <p>No appointments found.</p>
        </div>
      )}
    </div>
  );
  function handleCancel(appointment) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this appointment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d9534f",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        onCancel(appointment._id);
      }
    });
  }
};

const AppointmentTo = ({ appointments, onAccept, onReject }) => {
  return (
    <div>
      {appointments.length > 0 ? (
        appointments.map((appointment) => <AppointmentItem key={appointment._id} appointment={appointment} onAccept={onAccept} onReject={onReject} />)
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
  const { fullName, email, phoneNumber, address, gender } = appointedBy;

  return (
    <div className="appointment-informations">
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
          <strong>Time:</strong> {new Date(startTime).toLocaleTimeString()} - {new Date(endTime).toLocaleTimeString()}
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
          </div>
        )}
        <span className="show-more" onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </span>
      </div>
      <div className="action-buttons">
        {appointment.status === "pending" && (
          <button className="accept-button" onClick={() => handleAccept(appointment)}>
            Accept
          </button>
        )}
        {appointment.status === "pending" && (
          <button className="reject-button" onClick={() => handleReject(appointment)}>
            Reject
          </button>
        )}
      </div>
    </div>
  );
  function handleAccept(appointment) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to accept this appointment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745", // Green color for confirm button
      cancelButtonColor: "#d9534f", // Red color for cancel button
      confirmButtonText: "Yes",
      cancelButtonText: "No", // Change "No" option to red
    }).then((result) => {
      if (result.isConfirmed) {
        onAccept(appointment._id);
      }
    });
  }

  function handleReject(appointment) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to reject this appointment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d9534f",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        onReject(appointment._id);
      }
    });
  }
};

const ConfirmedAppointments = ({ appointments, user }) => {
  const currentDate = new Date();
  console.log(appointments);
  let appointedBy = [];
  let appointedTo = [];
  if (appointments.appointedBy && appointments.appointedBy.length)
    appointedBy = appointments.appointedBy.filter((appointment) => new Date(appointment.startTime) >= currentDate && appointment.status === "accepted");
  if (appointments.appointedTo && appointments.appointedTo.length)
    appointedTo = appointments.appointedTo.filter((appointment) => new Date(appointment.startTime) >= currentDate && appointment.status === "accepted");
  // const appointedBy = appointments.appointedBy.filter((appointment) => new Date(appointment.startTime) >= currentDate && appointment.status === "accepted");
  // const appointedTo = appointments.appointedTo.filter((appointment) => new Date(appointment.startTime) >= currentDate && appointment.status === "accepted");
  const confirmedAppointments = appointedBy.concat(appointedTo).sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

  console.log(confirmedAppointments, appointedBy, appointedTo);
  return (
    <div>
      {confirmedAppointments.length > 0 ? (
        confirmedAppointments.map((appointment) => (
          <div key={appointment._id} className="appointment-information">
            <div className="appointment-header">
              <div>
                <p>
                  <strong>Appointed By:</strong> {user.fullName}
                </p>
                <p>
                  <strong>Appointed To:</strong> {appointment.appointedTo.fullName}
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
                <strong>Date:</strong> {new Date(appointment.startTime).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {new Date(appointment.startTime).toLocaleTimeString()} - {new Date(appointment.endTime).toLocaleTimeString()}
              </p>
              <p>
                <strong>Description:</strong> {appointment.description}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No confirmed appointments found.</p>
      )}
    </div>
  );
};
const History = ({ appointments }) => {
  const currentDate = new Date();
  let appointedBy = [];
  let appointedTo = [];
  if (appointments.appointedBy && appointments.appointedBy.length) appointedBy = appointments.appointedBy.filter((appointment) => new Date(appointment.startTime) < currentDate);
  if (appointments.appointedTo && appointments.appointedTo.length) appointedTo = appointments.appointedTo.filter((appointment) => new Date(appointment.startTime) < currentDate);
  // const appointedBy = appointments.appointedBy.filter((appointment) => new Date(appointment.startTime) < currentDate);
  // const appointedTo = appointments.appointedTo.filter((appointment) => new Date(appointment.startTime) < currentDate);
  const confirmedAppointments = appointedBy.concat(appointedTo).sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

  return (
    <div>
      {confirmedAppointments.length > 0 ? (
        confirmedAppointments.map((appointment) => (
          <div key={appointment._id} className="appointment-information">
            <div className="appointment-header">
              <div>
                <p>
                  <strong>Appointed By:</strong> {appointment.appointedBy.fullName}
                </p>
                <p>
                  <strong>Appointed To:</strong> {appointment.appointedTo.fullName}
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
                <strong>Date:</strong> {new Date(appointment.startTime).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {new Date(appointment.startTime).toLocaleTimeString()} - {new Date(appointment.endTime).toLocaleTimeString()}
              </p>
              <p>
                <strong>Description:</strong> {appointment.description}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No confirmed appointments found.</p>
      )}
    </div>
  );
};

export { AppointmentTo, AppointmentBy, ConfirmedAppointments, History };
