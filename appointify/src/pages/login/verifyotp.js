import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyResetOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  if (!email) {
    navigate("/request-reset-otp");
  }

  const handleInputChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/verifyotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Something went wrong");
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "OTP verified!",
      });
      navigate("/reset-password", { state: { email } });
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
          <form onSubmit={handleVerifyOtp}>
            <h1>Enter OTP</h1>
            <input type="text" name="otp" placeholder="OTP" value={otp} onChange={handleInputChange} required />
            <div className="buttons">
              <button type="submit">Verify OTP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyResetOTP;
