import React, { useState } from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";
import InputField from "../components/InputFeild";

const LoginForm = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHiddenPassword((prev) => !prev);
  };

  return (
    <div>
      <div>
        <div style={formParentStyle}>
          <div style={formStyle}>
            <InputField
              type="text"
              placeholder="Please Enter Your Email"
              icon="fa fa-envelope-o"
              style={inputStyle}
            />
            <InputField
              type="password"
              placeholder="Password"
              hidden={hiddenPassword}
              onToggle={togglePasswordVisibility}
              style={inputStyle}
            />
            <div>
              <input type="checkbox" style={checkBoxStyle} />
              <label>Remember me?</label>
            </div>
            <div>
              <button style={loginButtonStyle}>Login</button>
            </div>
            <div style={OrStyle}>
              <p>or login with</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={google} style={socialLoginIconStyle} alt="google"/>
              <img src={facebook} style={socialLoginIconStyle} alt="facebook"/>
              <img src={twitter} style={socialLoginIconStyle} alt="twitter"/>
            </div>
          </div>
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
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "22px",
  cursor: "pointer",
};

const inputStyle = {
  borderRadius: "4px",
  border: "none",
  padding: "8px",
  margin: "8px 0",
  textAlign: "center",
};

const inputParentStyle = {
  margin: "15px 0",
  position: "relative",
  display: "inline-block",
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

const OrStyle = {
  marginTop: "20px",
  textAlign: "center",
};

const socialLoginIconStyle ={
  height: "60px",
  cursor:"pointer",
}

export default LoginForm;
