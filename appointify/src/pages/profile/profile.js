import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Profile from "../../components/profile/profile";
import "./profile.css";
import Swal from "sweetalert2";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { userData, token } = location.state || {};

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/profile`, {
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
        console.error("Error fetching users:", error);
        setUser([]); // Set an empty array in case of an error
      }
    };

    fetchUsers();
  }, [token, userData]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear user token from localStorage
        localStorage.removeItem("userToken");
        // Redirect to login page
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <Navbar token={token} userData={user} />
      <Profile userData={user} token={token} />
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <Footer />
    </div>
  );
};

export default ProfilePage;
