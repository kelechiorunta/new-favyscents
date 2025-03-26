import React, {
  useContext,
  memo,
  startTransition,
  useEffect,
  useState,
} from 'react'
import './ShoppingCart.css'
import MainHeader from '../mainheader/MainHeader'
import { ViewChild, ViewProvider } from '../ViewContext/ViewContext.jsx'
import CartSection from './CartSection.jsx'
import OrderSection from './OrderSection.jsx'
import { useNavigate } from 'react-router-dom'

import useProducts from '../useProducts/useProducts.jsx'
import { productContext } from '../useProducts/ProductsContext.jsx'
import { getCartItems } from '../../apis/indexedDB.js'

export default memo(function ShoppingCart() {
  const navigate = useNavigate()

  const { totalP, items, updateProducts } = useProducts()
  const { updatedItems, handleUpdateItems, result, deleteItem } =
    useContext(productContext) //useProducts();

  return (
    <div className="cart-container">
      <MainHeader />
      <ViewProvider>
        <ViewChild id={'cart-section'}>
          <div style={{ textAlign: 'center' }} className="child-cart-section">
            <h1 className="title">SHOPPING CART</h1>
            <button onClick={() => navigate(-1)} className="back">
              Back
            </button>
            <div className="cart-child-container">
              <CartSection
                items={updatedItems}
                handleUpdateItems={handleUpdateItems}
                result={result}
                deleteItem={deleteItem}
                updateProducts={updateProducts}
              />
              <OrderSection
                totalPrice={totalP}
                handleUpdateItems={handleUpdateItems}
                deleteItem={deleteItem}
                updateProducts={updateProducts}
              />
            </div>
          </div>
        </ViewChild>
      </ViewProvider>
    </div>
  )
})
