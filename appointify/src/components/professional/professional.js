import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./professional.css";
import Footer from "../footer/footer";

export default function Professional({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = location.state || {};

  const handleClick = (user) => {
    navigate("/user", { state: { professionalData: user, token } });
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="category">
      <div className="category-heading">
        <h2>{data[0]?.category ? data[0].category.charAt(0).toUpperCase() + data[0].category.slice(1) : ""}</h2>
      </div>
      <div className="category-professional-container">
        {data.map((user) => (
          <div className="category-professional" onClick={() => handleClick(user)} key={user.id}>
            {user.fullName}
          </div>
        ))}
      </div>
    </div>
  );
}
