import { useNavigate } from "react-router-dom";
import WebNameStyle from "./WebName.module.css";

const WebName = () => {
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <h1 className={WebNameStyle.webname} onClick={() => navigate("/")}>
      BkeL
    </h1>
  );
};

export default WebName;
