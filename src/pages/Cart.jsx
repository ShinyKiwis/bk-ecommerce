import React from 'react'
import { CartItem } from '../components'
import CartStyles from '../styles/Cart.module.css'

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

const Cart = () => {
  return (
    <div className={CartStyles.cart}>
      <h1 className={CartStyles.page_name}>Cart</h1>

      {dummyData.map((val,key) => {
        return (
          <li className={CartStyles.item_list}>
            <CartItem imgSrc={val.imgSrc} productName={val.productName} productPrice={val.productPrice} canModify={true}/>
          </li>
        )
      })}

      hello account info page
    </div>

    
  )
}

export default Cart