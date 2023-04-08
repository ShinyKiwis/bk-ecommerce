import React from "react";
import CartItemStyles from "./CartItem.module.css";
import { RxCross2 } from "react-icons/rx";
import { QuantityButton } from "../../components";

function CartItem(props) {
  const { imgSrc, productName, productPrice, quantity } = props;
  return (
    <div className={CartItemStyles.card}>
      <div className={CartItemStyles.image}>
        <img src={imgSrc} alt="cart item" />
      </div>
      <div className={CartItemStyles.info}>
        <div className={CartItemStyles.flex_row}>
          <div className={CartItemStyles.product_name}>{productName}</div>
          <button>
            <RxCross2 />
          </button>
        </div>
        <div className={CartItemStyles.flex_row}>
          <div className={CartItemStyles.btn}>
            <QuantityButton
              className={CartItemStyles.quantityBtn}
              defaultQuantity={quantity}
            />
          </div>
          <div className={CartItemStyles.product_price}>{productPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
