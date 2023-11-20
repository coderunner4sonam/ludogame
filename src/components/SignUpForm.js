import React, { useState } from "react";
import SignUpInputField from "./SignUpInputField";

const SignUpForm = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHiddenPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setHiddenConfirmPassword((prev) => !prev);
  };

  return (
    <div style={formParentStyle}>
      <div style={formStyle}>
        <SignUpInputField
          type="text"
          placeholder="Please Enter Your Email"
          icon="fa fa-envelope-o"
          style={inputStyle}
        />
        <div style={inputParentStyle2}>
           <div style={inputParentStyle}>
             <i class="fa fa-user" aria-hidden="true" style={iconStyle1}></i>
             <input type="text" placeholder="First Name" style={inputStyle2} />
           </div>
           <div style={inputParentStyle}>

             <i class="fa fa-user" aria-hidden="true" style={iconStyle1}></i>
             <input type="text" placeholder="Last Name" style={inputStyle1} />
           </div>
         </div>
        <SignUpInputField
          type="password"
          placeholder="Password"
          hidden={hiddenPassword}
          onToggle={togglePasswordVisibility}
          style={inputStyle}
        />
        <SignUpInputField
          type="password"
          placeholder="Confirm Password"
          hidden={hiddenConfirmPassword}
          onToggle={toggleConfirmPasswordVisibility}
          style={inputStyle}
        />
        <div>
          <input type="checkbox" style={checkBoxStyle} />
          <label>I accept the Terms of Service & Privacy Policy</label>
        </div>
        <div>
          <button style={loginButtonStyle}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

const formParentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  width: "440px",
  height: "420px",
  padding: "20px",
};

const iconStyle = {
  position:"absolute",
  left: "10px", 
  top: "50%",
  transform: "translateY(-50%)",
  fontSize:"22px"
}

const inputStyle = {
  borderRadius: "4px",
  border: "none",
  padding: "8px",
  textAlign:"center"
};

const inputParentStyle = {
  margin: "15px 0",
  position:"relative",
  display: "inline-block"
};

const inputStyle1 = {
  width: "200px",
  height: "40px",
  margin: "0 20px 0 20px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  padding: "8px",
  textAlign:"center",
};

const iconStyle1 = {
  position:"absolute",
  left: "30px", 
  top: "50%",
  transform: "translateY(-50%)",
  fontSize:"22px"
}

const inputParentStyle2 = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}

const inputStyle2 = {
  width: "156px",
  height: "40px",
  margin: "0 20px 0 20px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  padding: "8px",
  textAlign:"center",
};

const checkBoxStyle = {
  margin: "10px",
};

const loginButtonStyle = {
  border: "none",
  width: "400px",
  height: "50px",
  borderRadius: "4px",
  backgroundColor: "#90EE90",
  color: "black",
  fontSize: "18px",
  cursor: "pointer",
};

export default SignUpForm;
