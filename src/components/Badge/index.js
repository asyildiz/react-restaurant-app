import React from "react";
import "./style.scss";

const Badge = ({ label, score }) => {
  return (
    <div key={label} className="badge">
      <span>{label}</span>
      {score}
    </div>
  );
};

export default Badge;
