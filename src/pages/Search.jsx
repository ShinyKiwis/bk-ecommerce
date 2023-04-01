import React from 'react'
import { ProductItem } from '../components'

const dummy = [
    {
        name: 'hoho',
        price: 5000000
    },
    {
        name: 'hoho',
        price: 5000000
    },
    {
        name: 'hoho',
        price: 5000000
    },
    {
        name: 'hoho',
        price: 5000000
    },
    {
        name: 'hoho',
        price: 5000000
    },
]

function Search() {
  return (
    <div>
        <div>Result for huhu</div>
        <div>this is a filter bar</div>
        <div>
            {dummy.map(item => <ProductItem productName={item.name} productPrice={item.price} />)}
        </div>
    </div>
  )
}

export default Search