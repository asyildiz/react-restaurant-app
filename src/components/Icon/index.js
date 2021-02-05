import React from 'react';
import "./style.scss";

const Icon = ({ iconName, onClick = () => {} }) => {
  return <i onClick={onClick} className={`ys-icons ${iconName}`} />;
};

export default Icon;
