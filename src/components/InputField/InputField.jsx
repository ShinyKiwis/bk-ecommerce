import { useState } from "react";
import style from "./InputField.module.css";


const InputField = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={style.formInput}>
     
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className={style.placeholder}>{label}</span>
      <span className={style.primary}>{errorMessage}</span>
    </div>
  );
};

export default InputField;