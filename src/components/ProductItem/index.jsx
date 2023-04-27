import React from 'react';
import ProductItemStyle from './ProductItem.module.css';
import { useNavigate } from 'react-router-dom';

function ProductItem({productId, productName, productPrice, productImage}) {
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/product', {state: {id: productId}})
  return (
    <div className={ProductItemStyle.product_card} onClick={handleOnClick}>
        <img src={productImage[0]} alt={productName} />
        <div className={ProductItemStyle.product_info}>
            <div>{productName}</div>
            <div>${productPrice}</div>
        </div>
    </div>
  )
}

export default ProductItem