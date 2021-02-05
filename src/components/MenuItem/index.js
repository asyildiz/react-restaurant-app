import React, {useRef} from "react";
import Input from "../Input";
import Button from "../Button";
import "./style.scss";

const MenuItem = ({ item, onClick }) => {
  const quantity = useRef(1);
  return (
    <li>
      <div className="actions">
        <Input
          type="number"
          initialValue={1}
          onChange={(value) => (quantity.current = value)}
        />
        <Button
          content="+"
          onClick={() => onClick({ ...item, quantity: quantity.current })}
        />
      </div>

      <div className="item">
        <div className="title">
          <a>{item.name}</a>
        </div>
        <div className="description">{item.description}</div>
      </div>
      <div className="price">
        <span>{item.price} TL</span>
      </div>
    </li>
  );
};

export default MenuItem;
