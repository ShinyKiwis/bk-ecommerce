import React from 'react';
import ProductItemStyle from './ProductItem.module.css';
import { useNavigate } from 'react-router-dom';

function ProductItem({productName, productPrice, productImage}) {
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/product')
  return (
    <div className={ProductItemStyle.product_card} onClick={handleOnClick}>
        <img src={productImage} alt={productName} />
        <div className={ProductItemStyle.product_info}>
            <div>{productName}</div>
            <div>{productPrice}</div>
        </div>
    </div>
  )
}

export default ProductItem