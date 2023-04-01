import React from 'react'
import { ProductItem } from '../components'
import SearchStyle from '../styles/Search.module.css'

const dummy = [
    {
        name: 'hoho',
        price: 5000000,
        image: "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png"
    },
    {
        name: 'hoho',
        price: 5000000,
        image: "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png"
    },
    {
        name: 'hoho',
        price: 5000000,
        image: "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png"
    },
    {
        name: 'hoho',
        price: 5000000,
        image: "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png"
    },
    {
        name: 'hoho',
        price: 5000000,
        image: "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png"
    },
]

function Search() {
  return (
    <div className={SearchStyle.content_display}>
        <div>Result for huhu</div>
        <div>this is a filter bar</div>
        <div className={SearchStyle.list_display}>
            {dummy.map(item => <ProductItem productName={item.name} productPrice={item.price} productImage={item.image}/>)}
        </div>
    </div>
  )
}

export default Search