import React from 'react'
import CartSummaryStyle from './CartSummary.module.css'
import Button from '../Button'

function CartSummary({subtotal, shippingFee, discount}) {
  return (
    <div className={CartSummaryStyle.summary}>
        <h1>Order Summary</h1>
        <div className={CartSummaryStyle.info}>
            <div className={CartSummaryStyle.flex_row}>
                <div>Subtotal</div>
                <div>{subtotal}</div>
            </div>
            <div className={CartSummaryStyle.flex_row}>
                <div>Discount</div>
                <div>{discount}</div>
            </div>
            <div className={CartSummaryStyle.flex_row}>
                <div>Shipping Fee</div>
                <div>{shippingFee}</div>
            </div>
        </div>
        <div className={`${CartSummaryStyle.flex_row} ${CartSummaryStyle.total}`}>
            <div>Total</div>
            <div>{subtotal - discount + shippingFee}</div>
        </div>
        <Button isPrimary={true} textContent="Checkout" onClick={() => console.log("hoho")}/>
    </div>
  )
}

export default CartSummary