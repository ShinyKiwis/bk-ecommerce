import { useNavigate } from "react-router-dom";
import { Button, InputField, WebName } from "../components";
import LoginStyle from "../styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <main className={LoginStyle.login_container}>
      <WebName />
      <h2>Sign in into your account</h2>
      <div className={LoginStyle.action_container}>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <Button textContent="Sign in" isPrimary={true} />
        <Button
          textContent="Create an account"
          isPrimary={false}
          onClick={() => {
            navigate("/signup");
          }}
        />
      </div>
    </main>
  );
};

export default Login;
