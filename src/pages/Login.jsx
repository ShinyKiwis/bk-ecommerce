import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputField, WebName } from "../components";
import LoginStyle from "../styles/Login.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "changed_username": {
      return {
        ...state,
        username: action.newValue,
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

const Login = () => {
  const navigate = useNavigate();
  const [toggleError, setToggleError] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
  });
  const inputFields = [
    {
      type: "text",
      placeholder: "Username",
      inputKey: "username",
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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(state);
    setToggleError(!toggleError);
  };

  return (
    <main className={LoginStyle.login_container}>
      <WebName />
      <h2>Sign in into your account</h2>
      {toggleError && (
        <div className={LoginStyle.error_message}>
          Invalid credential! Check your username or password
        </div>
      )}
      <form
        className={LoginStyle.action_container}
        onSubmit={(e) => handleLogin(e)}
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
        <Button textContent="Sign in" isPrimary={true} />
        <Button
          textContent="Create an account"
          isPrimary={false}
          onClick={() => {
            navigate("/signup");
          }}
        />
      </form>
    </main>
  );
};

export default Login;
