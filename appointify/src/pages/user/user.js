import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Modal from "../../components/appointment-modal/appointment";
import "./user.css";
import Footer from "../../components/footer/footer";
import image from "../../images/salman.jpg";

const UserPage = () => {
  const [user, setUser] = useState(null);
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
        console.error("Error fetching user:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, [professionalData, token]);

  const handleModalSave = async (startTime, endTime, description, token, appointedTo) => {
    try {
      const response = await fetch(`http://localhost:5000/appointment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ startTime, endTime, description, appointedTo }),
      });

      console.log({ startTime, endTime, description, appointedTo });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Something went wrong");
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  const handleAppointClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <Navbar token={token} />
      <div className="profile-container">
        <div className="profile-info-container">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={image} alt="User Avatar" />
            </div>
            <div className="profile-info">
              <h2>{user.fullName}</h2>
              <p>{user.role}</p>
            </div>
            <button className="edit-profile-btn" onClick={handleAppointClick}>
              Appoint
            </button>
          </div>
          <hr />
          <div className="profile-details">
            <h2>Personal Information</h2>
            <div className="detail">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" value={user.email} readOnly />
            </div>
            <div className="detail">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" value={user.address} readOnly />
            </div>
          </div>
          <div className="dob-info">
            <div className="detail">
              <label htmlFor="dob">DOB:</label>
              <input type="text" id="dob" value={formatDate(user.DOB)} readOnly />
            </div>
            <div className="detail">
              <label htmlFor="gender">Gender:</label>
              <input type="text" id="gender" value={user.gender} readOnly />
            </div>
            <div className="detail">
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" value={user.phoneNumber} readOnly />
            </div>
          </div>
          {user.role === "professional" && (
            <div className="professional-info">
              <div className="detail">
                <label htmlFor="category">Category:</label>
                <input type="text" value={user.category} readOnly />
              </div>
              <div className="detail">
                <label htmlFor="profession">Profession:</label>
                <input type="text" value={user.profession} readOnly />
              </div>
              <div className="detail">
                <label htmlFor="description">Description:</label>
                <input type="text" value={user.description} readOnly />
              </div>
            </div>
          )}
        </div>
        <div className="additional-info-container">{/* Add more additional info boxes here */}</div>
      </div>
      <Modal show={isModalOpen} onClose={handleModalClose} onConfirm={handleModalSave} token={token} appointedTo={professionalData._id} />
      <Footer />
    </div>
  );
};

export default UserPage;
