import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./login.css";

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("State in VerifyEmail component:", state);
  }, [state]);

  const handleInputChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleVerifyEmail = async (event) => {
    event.preventDefault();
    try {
      console.log("Sending OTP verification request...", { email: state.email, verificationCode });
      const response = await fetch("http://localhost:5000/user/verifyemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: state.email, verificationCode }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Something went wrong");
      }

      Swal.fire({
        icon: "success",
        title: "Verified",
        text: "Your email has been verified successfully! Now you can login.",
      });

      event.target.reset();
      navigate("/login");
    } catch (error) {
      console.error("Error verifying OTP:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });

      event.target.reset();
    }
  };

  return (
    <div className="signup-page-container">
      <div className="account-form-wrapper">
        <div className="account-form-container">
          <form onSubmit={handleVerifyEmail}>
            <h1>Enter OTP</h1>
            <input type="text" name="otp" placeholder="OTP" value={verificationCode} onChange={handleInputChange} required />
            <div className="buttons">
              <button type="submit">Verify OTP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
