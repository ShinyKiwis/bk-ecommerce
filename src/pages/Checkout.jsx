import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutStyle from "../styles/Checkout.module.css";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import { Button } from "../components";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Bill from "./Bill";

const Checkout = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [phone, setPhone] = useState("");
  const { clearItems, total } = useCart();
  const [isTransaction, setIsTransaction] = useState(false);

  const changeAddress = (e) => {
    setShippingAddress(e.target.value);
    console.log(shippingAddress);
  };

  const changeReceiver = (e) => {
    setReceiverName(e.target.value);
    console.log(receiverName);
  };

  const changePhone = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  };

  return isTransaction ? (
    <Bill
      shippingAddress={shippingAddress}
      receiverName={receiverName}
      phone={phone}
    />
  ) : (
    <form
      onSubmit={() => {
        alert(
          `The order #${Date.now()}: is being processed.\nDelivered to: ${shippingAddress} for User: ${receiverName}`
        );
        clearItems();
        navigate("/");
      }}
      className={CheckoutStyle.checkout_container}
    >
      <div>
        <div className={CheckoutStyle.checkout_info}>
          <h2>Shipping Address:</h2>
          <input
            type="text"
            placeholder="Shipping Address"
            onChange={(e) => changeAddress(e)}
          />
        </div>
        <div className={CheckoutStyle.checkout_info}>
          <h2>Receiver Name:</h2>
          <input
            type="text"
            placeholder="Receiver Name"
            onChange={(e) => changeReceiver(e)}
          />
        </div>
        <div className={CheckoutStyle.checkout_info}>
          <h2>Receiver Phone Number:</h2>
          <input
            type="text"
            placeholder="Phone number"
            onChange={(e) => changePhone(e)}
          />
        </div>
      </div>
      <Cart isCheckout={true} />
      <div className={CheckoutStyle.payment_container}>
        <Button isPrimary={true} textContent="Proceed to cash payment" />
        <div className={CheckoutStyle.paypal}>
          <PayPalScriptProvider
            options={{
              "client-id":
                "AckAZgg_BYHQFHeC05jSbsLarGMsVDuCFbUhBWnoapp_CX-pOCxqsOqSF1_jbFEGfMcIzH03GFsiAbh4",
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: `${total + 20}`,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                  console.log(details);
                  setIsTransaction(true);
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
