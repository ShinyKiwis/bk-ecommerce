import React, { useState } from 'react';
import FormInput from "../components/FormInput";
import"../components/formInput.css";
import { useNavigate } from "react-router-dom";




const Login = () => {




  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputs2 = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Please provide username",
      label: "Username",
      pattern: `[^\s]`,
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password is not empty",
      label: "Password",
      pattern: `[^\s]`,
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="signUp">
      
      <form >
        <h1>Register</h1>
        {inputs2.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleSubmit}>Register</button>
        <a className="btn btn-light" href='/login'  >Login</a>  
 
      </form>
      

    </div>
  );
};











//   return (
//     <div className="SignUp">

//       <form>
//         <FormInput placeholder="Username" />
//         <FormInput placeholder="Email address" />
//         <FormInput placeholder="Password" />
//         <FormInput placeholder="Username" />

//       </form>
//       <button>Register</button>
//     </div>
//   );
// };
export default Login;
