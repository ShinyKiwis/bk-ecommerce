import ButtonStyle from "./Button.module.css";

const Button = ({ isPrimary, textContent, onClick}) => {
  return (
    <button
      className={
        isPrimary
          ? `${ButtonStyle.button_primary} ${ButtonStyle.button_container}`
          : `${ButtonStyle.button_secondary} ${ButtonStyle.button_container}`
      }

      onClick={onClick}
    >
      {textContent}
    </button>
  );
};

export default Button;
