import React from "react";
import { ImageSlider, ProductInfo, QuantityButton } from "../components";

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
  return (
    <div>
      <ImageSlider images={dummyImages}></ImageSlider>
      <div>
        <ProductInfo {...dummy} />
      </div>
    </div>
  );
}

export default Product;
