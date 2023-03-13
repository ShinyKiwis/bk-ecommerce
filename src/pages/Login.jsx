import React, { useState } from 'react';
import Header from "../components/Header/Header";
import FormInput from "../components/InputField/InputField";
import PasswordInput from "../components/PasswordField/PasswordInput";
import"../components/formInput.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

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
    <><Header /><div className="signUp">

      <form>
        <h1>Login</h1>
        <FormInput {...UsernameProps} onChange={e => setUsername(e.target.value)} />
        <PasswordInput {...PasswordProps} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
        <button className="secondary" onClick={() => navigate('/SignUp')}>Sign Up</button>
      </form>


    </div>
    <Footer /></>
  );
};

export default Login;
