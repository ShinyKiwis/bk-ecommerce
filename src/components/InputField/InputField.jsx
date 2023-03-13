import { useState } from "react";
import style from "./InputField.module.css";


const InputField = ({label, errorMessage, onChange, id, ...inputProps}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={style.formInput}>
     
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
      />
      <span className={style.placeholder}>{label}</span>
      <span className={style.primary}>{errorMessage}</span>
    </div>
  );
};

export default InputField;