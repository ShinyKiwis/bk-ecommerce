import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import CheckoutStyle from "../styles/Checkout.module.css"
import { useCart } from "../context/CartContext";
import Cart from './Cart';
import { Button } from '../components';

const Checkout = () => {
  const navigate = useNavigate()
  const [shippingAddress, setShippingAddress] = useState("")
  const [receiverName, setReceiverName] = useState("")
  const {clearItems } = useCart()
  
  const changeAddress = (e) => {
    setShippingAddress(e.target.value)
  }

  const changeReceiver = (e) => {
    setReceiverName(e.target.value)
  }


  return (
    <form onSubmit={() => {
      alert(`The order #${Date.now()}: is being processed.\nDelivered to: ${shippingAddress} for User: ${receiverName}`)
      clearItems()
      navigate("/")
    }}
    className={CheckoutStyle.checkout_container}
    >
      <h2>Shipping Address:</h2>
      <input type="text" placeholder="Shipping Address" onChange={e => changeAddress(e)}/>
      <h2>Receiver Name:</h2>
      <input type="text" placeholder="Receiver Name" onChange={e => changeReceiver(e)}/>
      <Cart />
      <Button isPrimary={true} textContent="Proceed to payment"/>
    </form>
  )
}

export default Checkout