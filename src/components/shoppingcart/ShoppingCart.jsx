import React from 'react';
import './ShoppingCart.css'
import MainHeader from '../mainheader/MainHeader';
import { ViewChild, ViewProvider } from '../ViewContext/ViewContext';
import CartSection from './CartSection.jsx';
import OrderSection from './OrderSection.jsx';
import './CartSection.css'

export default function ShoppingCart() {
  return (
    <div className='cart-container'>
        <MainHeader/>
        <ViewProvider>
          <ViewChild id={'cart-section'}>
            <div style={{textAlign: 'center'}} className="child-cart-section">
              <h1 className='title'>SHOPPING CART</h1>
              <div className="cart-child-container">
                  <CartSection/>
                  <OrderSection/>
              </div>
            </div>
          </ViewChild>
        </ViewProvider>
    </div>
  )
}
