import { useState } from "react";
import  styles from  './PasswordInput.module.css';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const PasswordInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;
  const [showPassword, setShowPassword] = useState(false);
  // const [passwordIcon, setPasswordIcon] = useState(AiFillEye);

  const handleFocus = () => {
    setFocused(true);
  };


  // const handelToggle = () => {
  //   if (showPassword === true) {
  //     setShowPassword(!showPassword);
  //     setPasswordIcon(AiFillEyeInvisible);
  //   } else {
  //     setShowPassword(!showPassword);
  //     setPasswordIcon(AiFillEye);
  //   }
  // };

  return (
    <div className={styles.passwordInput}>
     
      <input
        {...inputProps}
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className={styles.icon} onClick={()=>setShowPassword(!showPassword)}><AiFillEye size={18}/></span>
      <span className={styles.placeholder}>{label}</span>
      <span className={styles.primary}>{errorMessage}</span>
    </div>
  );
};

export default PasswordInput;