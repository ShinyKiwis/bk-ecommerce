import React, { useState } from "react";
import CartItemStyles from "./CartItem.module.css";
import { RxCross2 } from "react-icons/rx";
import { QuantityButton } from "../../components";
import { useCart } from "../../context/CartContext";

function CartItem(props) {
  const { productId, imgSrc, productName, productPrice, quantity } = props;
  const { increaseItemQuantity, decreaseItemQuantity, removeItemQuantity } =
    useCart();
  const [current_quantity, setQuantity] = useState(quantity);

  const increase = () => {
    setQuantity((current_quantity) => current_quantity + 1);
    increaseItemQuantity(productId)
  };

  const decrease = () => {
    setQuantity((current_quantity) => current_quantity - 1);
    decreaseItemQuantity(productId)
  };

  const remove = () => {
    removeItemQuantity(productId)
  }

  return (
    <div className={CartItemStyles.card}>
      <div className={CartItemStyles.image}>
        <img src={imgSrc} alt="cart item" />
      </div>
      <div className={CartItemStyles.info}>
        <div className={CartItemStyles.flex_row}>
          <div className={CartItemStyles.product_name}>{productName}</div>
          <button>
            <RxCross2 onClick={remove}/>
          </button>
        </div>
        <div className={CartItemStyles.flex_row}>
          <div className={CartItemStyles.btn}>
            <QuantityButton
              className={CartItemStyles.quantityBtn}
              quantity={current_quantity}
              onIncrease={increase}
              onDecrease={decrease}
            />
          </div>
          <div className={CartItemStyles.product_price}>${productPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
