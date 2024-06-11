import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { AppointmentBy, AppointmentTo, AppointmentHistory } from "../../components/appointment/appointment";
import Footer from "../../components/footer/footer";

const HomePage = () => {
  const location = useLocation();
  const { token } = location.state || {};
  const [appointmentsBy, setAppointmentsBy] = useState([]);
  const [appointmentsTo, setAppointmentsTo] = useState([]);
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [currentView, setCurrentView] = useState("by");

  useEffect(() => {
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
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setAppointmentsBy([]);
        setAppointmentsTo([]);
      }
    };

    fetchAppointments();
  }, [token]);

  const handleCancel = (id) => {
    setAppointmentsBy(appointmentsBy.filter((appointment) => appointment._id !== id));
  };

  const handleAccept = (id) => {
    setAppointmentsTo(appointmentsTo.map((appointment) => (appointment._id === id ? { ...appointment, status: "accepted" } : appointment)));
  };

  const handleReject = (id) => {
    setAppointmentsTo(appointmentsTo.map((appointment) => (appointment._id === id ? { ...appointment, status: "rejected" } : appointment)));
  };

  return (
    <div>
      <Navbar token={token} />
      <div className="appointment-nav">
        <button className={`appointment-nav-item ${currentView === "by" ? "active" : ""}`} onClick={() => setCurrentView("by")}>
          Appointed By
        </button>
        <button className={`appointment-nav-item ${currentView === "to" ? "active" : ""}`} onClick={() => setCurrentView("to")}>
          Appointed To
        </button>
        <button className={`appointment-nav-item ${currentView === "history" ? "active" : ""}`} onClick={() => setCurrentView("history")}>
          History
        </button>
      </div>
      <div className="appointment-container">
        {currentView === "by" && <AppointmentBy appointments={appointmentsBy} onCancel={handleCancel} />}
        {currentView === "to" && <AppointmentTo appointments={appointmentsTo} onAccept={handleAccept} onReject={handleReject} />}
        {currentView === "history" && <AppointmentHistory appointments={appointmentHistory} />}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
