import React from "react";
import Icon from "../Icon";
import "./style.scss";

const Sticker = ({ title, value, iconName }) => {
  return (
    <div className="sticker">
      <Icon iconName={iconName} />
      <span> {title} </span>
      {value}
    </div>
  );
};

export default Sticker;
