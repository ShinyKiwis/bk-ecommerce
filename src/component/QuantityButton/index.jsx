import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'
import styles from './QuantityButton.module.css'

function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity => quantity + 1);
  }

  const decrease = () => {
    setQuantity(quantity => quantity - 1);
  }

  return (
    <IconContext.Provider value={{size: "24px"}}>
      <div className={styles.display}>
        <button className={styles.display__btn} onClick={decrease} disabled={!quantity}><HiOutlineMinus/></button>
        <div>{quantity}</div>
        <button className={styles.display__btn} onClick={increase}><HiOutlinePlus/></button>
    </div>
    </IconContext.Provider>
  )
}

export default QuantityButton