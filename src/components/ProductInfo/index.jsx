import React from "react";
import QuantityButton from "../QuantityButton";
import styles from "./ProductInfo.module.css";

function ProductInfo({ name, price, description, shippingInfo }) {
  return (
    <div className={styles.product}>
      <div className={styles.title}>
        <h1>{name}</h1>
        <div>{price}</div>
      </div>
      <div className={styles.info}>
        <h2>Product description</h2>
        <ul>
          {description.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
        <h2>Shipping information</h2>
        <ul>
          {shippingInfo.map((ship) => (
            <li>{ship}</li>
          ))}
        </ul>
        <div className={styles.quantity}>
          <QuantityButton/>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
