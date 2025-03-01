import React, {use} from 'react'

export default function GetProducts({allProducts}) {
  const products = use(allProducts)
    return (
    <div>
        <h1>GetProducts</h1>
        <ul>
            {/* <li>{JSON.stringify(products)}</li> */}
            {products?.items.map(product => 
                (<li key={product.id}>{product.name}</li>))}
        </ul>
    </div>
  )
}
