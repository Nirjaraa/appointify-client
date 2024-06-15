import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { AppointmentBy, AppointmentTo, ConfirmedAppointments, History } from "../../components/appointment/appointment";
import Footer from "../../components/footer/footer";
import "./home.css";

const HomePage = () => {
  const location = useLocation();
  const { token, userData } = location.state || {};
  const [appointmentsBy, setAppointmentsBy] = useState([]);
  const [appointmentsTo, setAppointmentsTo] = useState([]);
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);
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
      setAcceptedAppointments({ appointedBy: data.allAppointmentsBy, appointedTo: data.allAppointmentsTo } || []);
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
          <button className={`appointment-nav-item ${currentView === "by" ? "active" : ""}`} onClick={() => setCurrentView("by")}>
            Your Appointments
          </button>
          <button className={`appointment-nav-item ${currentView === "to" ? "active" : ""}`} onClick={() => setCurrentView("to")}>
            Appointment Requests
          </button>
          <button className={`appointment-nav-item ${currentView === "confirmed" ? "active" : ""}`} onClick={() => setCurrentView("confirmed")}>
            Confirmed Appointments
          </button>
          <button className={`appointment-nav-item ${currentView === "history" ? "active" : ""}`} onClick={() => setCurrentView("history")}>
            Appointment History
          </button>
        </div>
        <div className="appointment-container">
          {currentView === "by" && <AppointmentBy appointments={appointmentsBy} onCancel={handleCancel} />}
          {currentView === "to" && <AppointmentTo appointments={appointmentsTo} onAccept={handleAccept} onReject={handleReject} />}
          {currentView === "confirmed" && <ConfirmedAppointments appointments={acceptedAppointments} />}
          {currentView === "history" && <History appointments={acceptedAppointments} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
