import React from 'react'
import { ImageSlider } from '../components'

const dummy = [
    "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png",
    "https://product.hstatic.net/1000392212/product/ca_2_0a509a4471e04e019d8be63c6cba0af6_master.jpg",
    "https://product.hstatic.net/1000392212/product/sg_9fff9a3cac62490c922ea48226e18aa1_master.jpg",
    "https://product.hstatic.net/1000392212/product/sg_3_da2bd324295f40b98ca651d3c11fe8fa_master.jpg",
]

function Product() {
  return (
    <div>
        <ImageSlider images={dummy}></ImageSlider>
    </div>
  )
}

export default Product