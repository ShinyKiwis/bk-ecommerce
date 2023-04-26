import React, { useEffect } from "react";
import { ImageSlider, ProductInfo } from "../components";
import ProductStyle from "../styles/Product.module.css";
import { useApi } from "../hooks";
import { productsApi } from "../api";
import { useLocation } from "react-router-dom";

const dummyImages = [
  "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png",
  "https://product.hstatic.net/1000392212/product/ca_2_0a509a4471e04e019d8be63c6cba0af6_master.jpg",
  "https://product.hstatic.net/1000392212/product/sg_9fff9a3cac62490c922ea48226e18aa1_master.jpg",
  "https://product.hstatic.net/1000392212/product/sg_3_da2bd324295f40b98ca651d3c11fe8fa_master.jpg",
];

const dummy = {
  name: "Saigon Wooden City Map",
  price: 1250000,
  description: [
    "Premium Wooden City Map is marketed as a handcrafted item, yet it nevertheless satisfies all requirements for luxury and natural beauty.",
    "The product is used to decorate the space, you can hang or set up the product at appropriate, conspicuous positions. Wooden City Map is both a Home Decor and a knowledge of famous cities.",
    "Material: wood",
    "Dimensions: 442x320x30mm",
    "Weight: 800 grams",
  ],
  shippingInfo: ["Shipping from Ho Chi Minh City, Vietnam"],
};

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
            <ProductInfo name={getProductApi.data.data[0].name} price={getProductApi.data.data[0].price} description={[getProductApi.data.data[0].description]} shippingInfo={[]}/>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
