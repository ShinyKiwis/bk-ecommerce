import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputField, WebName } from "../components";
import SignUpStyle from "../styles/SignUp.module.css";
import { useApi } from "../hooks";
import { userApi } from "../api";

const reducer = (state, action) => {
  switch (action.type) {
    case "changed_username": {
      return {
        ...state,
        username: action.newValue,
      };
    }
    case "changed_email": {
      return {
        ...state,
        email: action.newValue,
      };
    }
    case "changed_password": {
      return {
        ...state,
        password: action.newValue,
      };
    }
  }
};

const SignUp = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
    password: "",
  });
  const register = useApi(userApi.register);
  const inputFields = [
    {
      type: "text",
      placeholder: "Username",
      inputKey: "username",
    },
    {
      type: "email",
      placeholder: "Email address",
      inputKey: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      inputKey: "password",
    },
  ];

  const handleInputChange = (e, inputKey) => {
    dispatch({
      type: "changed_" + inputKey,
      newValue: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await register.request(state.username, state.password);
    if(register.error) {
      console.log(register.error);
    } else if(register.data) {
      console.log(register.data.data);
      navigate('/login')
    }
    alert("Register successfully!");
    navigate("/login")
  };
  return (
    <main className={SignUpStyle.signup_container}>
      <WebName />
      <h2>Create an account</h2>
      <form
        className={SignUpStyle.action_container}
        onSubmit={(e) => handleRegister(e)}
      >
        {inputFields.map((inputField) => (
          <InputField
            type={inputField.type}
            placeholder={inputField.placeholder}
            key={inputField.type}
            inputKey={inputField.inputKey}
            state={state}
            onChange={handleInputChange}
          />
        ))}
        <Button textContent="Register" isPrimary={true} />
        <Button
          textContent="Sign in"
          isPrimary={false}
          onClick={() => {
            navigate("/login");
          }}
        />
      </form>
    </main>
  );
};

export default SignUp;
