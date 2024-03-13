import React from "react";
import "./Input.css";
const Input = ({ type, name, value, onChange, id, children }) => {
  return (
    <div className="input" style={{ display: "flex", alignItems: "center" }}>
      <label htmlFor={id} style={{ marginRight: "8px" }}>
        {children}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        style={{ height: "20px", marginRight: "20px" }}
      />
    </div>
  );
};

export default Input;
