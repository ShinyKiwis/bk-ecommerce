import React from "react";
import { useLocation } from "react-router-dom";
import BillStyle from "../styles/Bill.module.css";
import { CartItem } from "../components";
import { useCart } from "../context/CartContext";

const Bill = ({ shippingAddress, receiverName, phone }) => {
  const { state } = useLocation();
  const { items, total } = useCart();
  return (
    <div className={BillStyle.Bill}>
      <h1 className={BillStyle.page_name}>Order {state}</h1>

      <div className={BillStyle.order_status}>
        <p>Order placed on April 26, 2022 at 04:23PM</p>
        <p>Order completed on April 29, 2022 at 05:23PM</p>
      </div>

      <div className={BillStyle.bill}>
        <p>PRODUCT</p>
        {items.map((item) => {
          return (
            <li className={BillStyle.item_list} key={item.name}>
              <CartItem
                imgSrc={item.photo_url}
                productName={item.name}
                productPrice={item.price}
                canModify={false}
                quantity={item.quantity}
                totalPrice={item.price * item.quantity}
              />
            </li>
          );
        })}

        <div className={BillStyle.total}>
          <p>TOTAL</p>
          <p>${total}</p>
        </div>

        <div className={BillStyle.total}>
          <p>STATUS</p>
          <p>completed</p>
        </div>
      </div>

      <div className={BillStyle.shipping_address}>
        <p className={BillStyle.shipping_tittle}>Shipping address</p>
        <p>
          <b>Receiver name:</b> {receiverName}
        </p>
        <p>
          <b>Phone number:</b> {phone}
        </p>
        <p>
          <b>Shipping Address:</b> {shippingAddress}
        </p>
      </div>
    </div>
  );
};

export default Bill;
