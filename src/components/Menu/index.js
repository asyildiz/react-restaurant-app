import React from "react";
import MenuItem from "../MenuItem";
import "./style.scss";

const Menu = ({ items, title, onMenuItemClick }) => {
  return (
    <div className="restaurant-detail-box">
      <div className="list-head">{title}</div>
      <div className="list-body">
        <ul>
          {items.map((item) => (
            <MenuItem key={item.name} item={item} onClick={onMenuItemClick} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
