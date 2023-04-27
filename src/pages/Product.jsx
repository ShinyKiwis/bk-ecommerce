import React, { useEffect } from "react";
import { ImageSlider, ProductInfo } from "../components";
import ProductStyle from "../styles/Product.module.css";
import { useApi } from "../hooks";
import { productsApi } from "../api";
import { useLocation } from "react-router-dom";


function Product() {
  const getProductApi = useApi(productsApi.getProductById);
  const { state } = useLocation();
  const { id } = state;

  useEffect(() => {
    getProductApi.request(id);
  },[]);

  return (
    <div className={ProductStyle.display}>
      {getProductApi.loading && <p>Loading...</p>}
      {getProductApi.error && <p>{getProductApi.error}</p>}
      {getProductApi.data && (
        <>
          <div className={ProductStyle.slider}>
            <ImageSlider
              images={getProductApi.data?.data[0].photo_url}
            ></ImageSlider>
          </div>
          <div>
            <ProductInfo id={id} name={getProductApi.data.data[0].name} price={getProductApi.data.data[0].price} description={[getProductApi.data.data[0].description]} photo_url={getProductApi.data?.data[0].photo_url}/>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
