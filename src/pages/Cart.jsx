import React from "react";
import { CartItem } from "../components";
import CartStyles from "../styles/Cart.module.css";
import CartSummary from "../components/CartSummary";

const dummyData = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    productName: "ProductNameA",
    productPrice: 99000,
    quantity: 3,
    totalPrice: "123.4*3",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    productName: "ProductNameB",
    productPrice: 579000,
    quantity: 7,
    totalPrice: "123.5*7",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    productName: "ProductNameC",
    productPrice: 349000,
    quantity: 12,
    totalPrice: "123.6*12",
  },
];

const Cart = () => {
  let total = 0;
  for (const e of dummyData) {
    total += e.productPrice * e.quantity;
  }
  return (
    <div className={CartStyles.cart}>
      <h1 className={CartStyles.page_name}>Cart</h1>
      <div className={CartStyles.content}>
        <ul className={CartStyles.item_list}>
          {dummyData.map((val, key) => {
            return (
              <li key={key}>
                <CartItem
                  imgSrc={val.imgSrc}
                  productName={val.productName}
                  productPrice={val.productPrice}
                  quantity={val.quantity}
                />
              </li>
            );
          })}
        </ul>
        <CartSummary subtotal={total} discount={0} shippingFee={20} />
      </div>
    </div>
  );
};

export default Cart;
