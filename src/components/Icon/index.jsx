import IconStyle from "./Icon.module.css";

const Icon = ({ Icon, onClick, size }) => {
  return (
    <Icon
      size={size ? size : "2em"}
      onClick={onClick}
      className={IconStyle.icon_container}
    />
  );
};

export default Icon;
