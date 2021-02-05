import React from "react";
import Badge from "../Badge";
import Sticker from "../Sticker";
import "./style.scss";

const RestaurantHeader = ({
  restaurantName,
  badges,
  minimumPrice,
  deliveryTime,
}) => {
  return (
    <div className="restaurant-header">
      <div className="restaurant-logo"></div>
      <div className="header">
        <h1 className="name"> {restaurantName}</h1>
        <div className="info">
          <div className="restaurant-summary flex">
            {badges.map(({ label, score }) => (
              <Badge key={label} label={label} score={score} />
            ))}
          </div>
          <div className="more-detail">
            <Sticker
              iconName="price"
              title="Min. Tutar"
              value={`${minimumPrice} TL`}
            ></Sticker>
            <Sticker
              iconName="bike"
              title="Servis Süresi"
              value={`${deliveryTime} dk.`}
            ></Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
