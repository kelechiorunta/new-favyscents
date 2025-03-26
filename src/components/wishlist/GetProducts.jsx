import React, { use, memo } from 'react'

const GetProducts = ({ allProducts }) => {
  const products = use(allProducts) // Using the new React 'use' hook

  return (
    <div>
      <h1>GetProducts</h1>
      <ul>
        {products?.items?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

// ✅ Wrap with memo to prevent unnecessary re-renders
export default memo(GetProducts)
