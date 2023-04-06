import { useNavigate } from "react-router-dom";
import { Button, InputField, WebName } from "../components";
import SignUpStyle from "../styles/SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <main className={SignUpStyle.signup_container}>
      <WebName />
      <h2>Create an account</h2>
      <form className={SignUpStyle.action_container}>
        <InputField type="text" placeholder="Username" />
        <InputField type="email" placeholder="Email address" />
        <InputField type="password" placeholder="Password" />
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
