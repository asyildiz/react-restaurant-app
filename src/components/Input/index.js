import React, {useEffect, useState} from "react";
import "./style.scss";

const Input = ({ initialValue, containerClass, type, onChange }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      className={containerClass}
      type={type}
      onChange={(event) => {
        let _value = event.currentTarget.value;
        _value = type === "number" ? Number(_value) : _value;
        setValue(_value);
        onChange(_value);
      }}
      value={value}
    />
  );
};

export default Input;
