import React, { useState } from "react";
import QuantityButton from "../QuantityButton";
import styles from "./ProductInfo.module.css";
import Button from "../Button";
import { useCart } from "../../context/CartContext";

function ProductInfo({
  id,
  name,
  price,
  description,
  photo_url,
  shippingInfo = [],
}) {
  const [quantity, setQuantity] = useState(1);
  const { addItemQuantity } = useCart();

  const increase = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decrease = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const addToCart = () => {
    const cartItem = {
      id: id,
      name: name,
      price: price,
      description: description,
      photo_url: photo_url[0],
      quantity: quantity,
    };
    addItemQuantity(cartItem);
  };

  return (
    <div className={styles.product}>
      <div className={styles.title}>
        <h1>{name}</h1>
        <div>${price}</div>
      </div>
      <div className={styles.info}>
        <h2>Product description</h2>
        <ul>
          {description.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
        <h2>Shipping information</h2>
        <ul>
          {shippingInfo.map((ship) => (
            <li key={ship}>{ship}</li>
          ))}
        </ul>
        <div className={styles.action_container}>
          <div className={styles.quantity}>
            <QuantityButton
              quantity={quantity}
              onIncrease={increase}
              onDecrease={decrease}
            />
          </div>
          <div>
            <Button
              isPrimary={true}
              textContent="Add to cart"
              onClick={addToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
