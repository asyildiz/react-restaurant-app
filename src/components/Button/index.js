import React from 'react';
import "./style.scss";

const Button = ({ type = "primary", extraClasses = "", content, onClick }) => {
  return (
    <button onClick={onClick} className={`ys-button ${type} ${extraClasses}`}>
      {content}
    </button>
  );
};

export default Button;
