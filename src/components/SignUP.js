import React from 'react'
import SignUpForm from './SignUpForm'

const Signup = () => {
  return (
    <div style={SignupStyle}>
        <SignUpForm/> 
    </div>
  )
}

const SignupStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export default Signup
