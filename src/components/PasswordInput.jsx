import { useState } from "react";
import "./formInput.css";
import Icon from 'react-icons-kit';
import {eye, eyeBlocked} from 'react-icons-kit/icomoon/eye'
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed'



const PasswordInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(eye);








  const handleFocus = (e) => {
    setFocused(true);
  };


  const handelToggle = () => {
    if (showPassword === true) {
      setShowPassword(!showPassword);
      setPasswordIcon(eyeBlocked);
    } else {
      setShowPassword(!showPassword);
      setPasswordIcon(eye);
    }
  };



  return (
    <div className="formInput">
     
      <input
        {...inputProps}
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="icon" onClick={()=>setShowPassword(!showPassword)}><Icon icon={passwordIcon} size={18}/></span>
      <span className="placeholder">{label}</span>
      <span className="primary">{errorMessage}</span>
    </div>
  );
};

export default PasswordInput;