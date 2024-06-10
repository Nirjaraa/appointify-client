import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./login.css";

const RequestResetOTP = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Something went wrong");
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "OTP sent to your email!",
      });
      navigate("/verify-reset-otp", { state: { email } });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  return (
    <div className="account-form-container">
      <div className="signup-page-container">
        <div className="account-form-wrapper">
          <h1>Request OTP</h1>
          <input type="email" name="email" placeholder="Email" value={email} onChange={handleInputChange} required />
          <div className="buttons">
            <button type="submit" onClick={handleSendOtp}>
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestResetOTP;
