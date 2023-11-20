
import React from "react";

const SignUpInputField = ({ type, placeholder, icon, hidden, onToggle, style }) => {

  return (
    <div style={{ ...inputParentStyle, ...style }}>
      {icon && <i className={icon} style={iconStyle}></i>}
      {hidden ? (
        <i className="fa fa-eye-slash" aria-hidden="true" style={eyeIconStyle} onClick={onToggle}></i>
      ) : (
        <i className="fa fa-eye" aria-hidden="true" style={eyeIconStyle} onClick={onToggle}></i>
      )}
      <input type={type} placeholder={placeholder}
        style={{
            width: "400px", 
            height: "40px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            margin: "0px 0px 0px -5px",
            textAlign: "center",
        }}
      />
    </div>
  );
};

const inputParentStyle = {
  position: "relative",
  display: "inline-block",
};

const iconStyle = {
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "22px",
};

const eyeIconStyle = {
  position: "absolute",
  right: "380px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "22px",
  cursor: "pointer",
};

export default SignUpInputField;
