import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FormInput from "../components/InputField/InputField";
import PasswordInput from "../components/PasswordField/PasswordInput";
import "../styles/SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  const[password,setPassword]=useState("");
  const[username,setUsername]=useState("");
  const[email, setEmail]=useState("");



  const UsernameProps= {
    name: "username",
    type: "text",
 
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  }

  const EmailProps=   {
    name: "email",
    type: "email",

    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  }



  const[PasswordProps, setPasswordProps]=useState({
    name: "password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  });



  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    
    <><Header /><div className="signUp">

      
      <form >
        <h1>Register</h1>
        <FormInput {...UsernameProps}  onChange={e => setUsername(e.target.value)}/>
        <FormInput {...EmailProps}  onChange={e => setEmail(e.target.value)}/>
        <PasswordInput {...PasswordProps}  onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Register</button>
        <button className="secondary" onClick={()=>navigate('/login')}>Login</button>
      </form>
      

      </div>
    <Footer /></>
  );
};


export default SignUp;
