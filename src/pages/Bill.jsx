import React from 'react'
import { useLocation } from "react-router-dom";
import BillStyle from "../styles/Bill.module.css";
import { CartItem } from '../components';

const dummyData = [
    { imgSrc: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      productName: "ProductNameA",
      productPrice: "$123.4",
      quantity: "3",
      totalPrice: "123.4*3"
    },
    { imgSrc: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      productName: "ProductNameB",
      productPrice: "$123.5",
      quantity: "7",
      totalPrice: "123.5*7"
    },
    { imgSrc: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      productName: "ProductNameC",
      productPrice: "$123.6",
      quantity: "12",
      totalPrice: "123.6*12"
    }
  ]

const Bill = (props) => {
    const { state } = useLocation();
    return (
        <div className={BillStyle.Bill}>
            <h1 className={BillStyle.page_name}>Order {state}</h1>

            <div className={BillStyle.order_status}>
                <p>Order placed on April 26, 2022 at 04:23PM</p>
                <p>Order completed on April 29, 2022 at 05:23PM</p>
            </div>

            <div className={BillStyle.bill}>
                <p>PRODUCT</p>
                {dummyData.map((val,key) => {
                    return (
                    <li className={BillStyle.item_list}>
                        <CartItem imgSrc={val.imgSrc} productName={val.productName} productPrice={val.productPrice} canModify={false} quantity={val.quantity} totalPrice={val.totalPrice}/>
                    </li>
                    )
                })}

                <div className={BillStyle.total}>
                    <p>TOTAL</p>
                    <p>123VND</p>
                </div>

                <div className={BillStyle.total}>
                    <p>STATUS</p>
                    <p>completed</p>
                </div>
            </div>


            <div className={BillStyle.shipping_address}>
                <p className={BillStyle.shipping_tittle}>Shipping address</p>
                <p>Name</p>
                <p>Phone</p>
                <p>Address</p>
            </div>

        </div>
    )
}

export default Bill