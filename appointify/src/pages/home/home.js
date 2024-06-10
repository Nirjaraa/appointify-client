import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

const HomePage = () => {
  const location = useLocation();
  const { user, token } = location.state || {};
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:5000/apointment/view", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          Authorization: `Bearer ${token}`,
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage || "Something went wrong");
        }
        console.log(response);

        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setAppointments([]); // Set an empty array in case of an error
      }
    };

    fetchAppointments();
  }, [token]);

  return (
    <div>
      <Navbar token={token} />
      <div>
        <h2>View Appointments</h2>
      </div>
    </div>
  );
};

export default HomePage;
