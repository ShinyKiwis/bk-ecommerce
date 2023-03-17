import React, {useState} from "react"
import CartItemStyles from './CartItem.module.css'
import {QuantityButton} from "../../components"

function CartItem (props) {
  const {imgSrc, productName, productPrice, canModify, quantity, totalPrice} = props
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
      <p className={CartItemStyles.product_name}>{productName}</p>
      <p className={CartItemStyles.product_price}>{productPrice}</p>
      
      {canModify ? (
        <div className={CartItemStyles.btn}><QuantityButton className={CartItemStyles.quantityBtn}/></div>
      ):(
        <div className={CartItemStyles.box}>{quantity}</div>
      )}

      {canModify ? (
        <div className={CartItemStyles.btn}>
          <button className={CartItemStyles.removeBtn} onClick={removeItem}> 
            Remove
          </button> 
        </div>
      ):(
        <div className={CartItemStyles.box}>{totalPrice}</div>
      )}
    </div>
    )
  )
}

export default CartItem
