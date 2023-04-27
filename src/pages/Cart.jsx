import {useState, useEffect} from "react";
import { CartItem } from "../components";
import CartStyles from "../styles/Cart.module.css";
import CartSummary from "../components/CartSummary";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const [total, setTotal] = useState(0)
  const {items} = useCart()
  useEffect(() => {
    setTotal(0)
    items.forEach(item => {
      setTotal(total => total + item.price * item.quantity)
    })
  }, [items])

  return (
    <div className={CartStyles.cart}>
      <h1 className={CartStyles.page_name}>Cart</h1>
      <div className={CartStyles.content}>
        <ul className={CartStyles.item_list}>
          {items.map(item => {
            return (
              <li key={item.id}>
                <CartItem
                  productId={item.id}
                  imgSrc={item.photo_url}
                  productName={item.name}
                  productPrice={item.price}
                  quantity={item.quantity}
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
