import React from "react";
import { useState } from "react";

function DropDown(name, options) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleOpen}>{name}</button>
      {open ? (
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <button>{option}</button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default DropDown;
