import React from 'react'
import styles from './ProductInfo.module.css'

function ProductInfo({name, price, description, shippingInfo}) {
  return (
    <div>
        <div className={styles.title}>
            <h1>{name}</h1>
            <div>{price}</div>
        </div>
        <div>
            <h2>Product description</h2>
            <ul>
                {description.map((desc) => <li>{desc}</li>)}
            </ul>
            <h2>Shipping information</h2>
            <ul>
                {shippingInfo.map((ship) => <li>{ship}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default ProductInfo