import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import styles from "./QuantityButton.module.css";

function QuantityButton({quantity, onIncrease, onDecrease}) {
  // const [quantity, setQuantity] = useState(defaultQuantity);

  // const increase = () => {
  //   // setQuantity((quantity) => quantity + 1);
  //   onIncrease(quantity);
  // };

  // const decrease = () => {
  //   // setQuantity((quantity) => quantity - 1);
  //   onDecrease(quantity);
  // };

  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className={styles.display}>
        <button
          className={styles.display__btn}
          onClick={onDecrease}
          disabled={quantity == 1}
        >
          <HiOutlineMinus />
        </button>
        <div>{quantity}</div>
        <button className={styles.display__btn} onClick={onIncrease}>
          <HiOutlinePlus />
        </button>
      </div>
    </IconContext.Provider>
  );
}

export default QuantityButton;
