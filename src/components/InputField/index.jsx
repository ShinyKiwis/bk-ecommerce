import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Icon from "../Icon";
import InputFieldStyle from "./InputField.module.css";

function InputField({ type, placeholder, inputKey, state, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={InputFieldStyle.input_container}>
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        id={placeholder}
        value={state[inputKey]}
        onChange={(e) => onChange(e, inputKey)}
        required
      />
      <label htmlFor={placeholder} className={InputFieldStyle.floating_label}>
        {placeholder}
      </label>
      {type === "password" &&
        (showPassword ? (
          <Icon
            Icon={AiFillEyeInvisible}
            onClick={handleShowPassword}
            size="1.2em"
          />
        ) : (
          <Icon Icon={AiFillEye} onClick={handleShowPassword} size="1.2em" />
        ))}
    </div>
  );
}

export default InputField;
