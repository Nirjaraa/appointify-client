import React from "react";
import { useNavigate } from "react-router-dom";
import "./professional.css";

export default function Professional({ category, data, token }) {
  const navigate = useNavigate();

  const handleClick = (user) => {
    navigate("/user", { state: { professionalData: user, token } });
  };

  const handleHeadingClick = () => {
    navigate("/category", { state: { category: data[0]?.category, token } });
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="category">
      <div className="category-heading" onClick={handleHeadingClick}>
        <h2>{category ? category.charAt(0).toUpperCase() + category.slice(1) : ""}</h2>
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
