import React, { useState } from 'react';
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";
import"../components/formInput.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate=useNavigate();
  const[password,setPassword]=useState("");
  const[username,setUsername]=useState("");



  const UsernameProps= {
    name: "username",
    type: "text",
    errorMessage:
      "Please provide username!",
    label: "Username",
    required: true,
  }

  const[PasswordProps, setPasswordProps]=useState({
    name: "password",
    errorMessage:
      "Password is not empty!",
    label: "Password",
    required: true,
  });



  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className="signUp">
      
      <form >
        <h1>Register</h1>
        <FormInput {...UsernameProps}  onChange={e => setUsername(e.target.value)}/>
        <PasswordInput {...PasswordProps}  onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
        <button className="secondary" onClick={()=>navigate('/SignUp')}>Sign Up</button>
      </form>
      

    </div>
  );
};

export default Login;
