import React, {useState} from "react"
import CartItemStyles from './CartItem.module.css'
import {QuantityButton} from "../../components"

function CartItem({imgSrc, productName, productPrice}) {
  const [visible, setVisible] = useState(true)

  const removeItem = () => {
    setVisible(false);
  }
  return (
    (visible &&
    <div className={CartItemStyles.card}>
      <div className={CartItemStyles.image}>
        <img 
          src={imgSrc}
          alt="cart item"/>
      </div>
      <h1>{productName}</h1>
      <h2>{productPrice}</h2>
      
      <div className={CartItemStyles.btn}><QuantityButton /></div>
      <div className={CartItemStyles.btn}>
        <button className={CartItemStyles.removeBtn} onClick={removeItem}> 
          Remove
        </button> 
      </div>
    </div>
    )
  )
}

export default CartItem
