import React from 'react';
import './OrderSection.css'
import { FaShoppingBag } from 'react-icons/fa';

export default function OrderSection({totalPrice}) {
  return (
    <div className='order-section'>
      <div className="subtotal-section">
          <div className="subtotal-container">
            <p className="subtotal">Subtotal</p>
            <p className="result">{`$` + totalPrice}</p>
          </div>
          <div className="tax-container">
            <p className="tax">Tax</p>
            <p className="result">$0</p>
          </div>    
          <div className="total-container">
            <p className="total">TOTAL</p>
            <p className="result">{`$` + totalPrice}</p>
          </div>      
      </div>
      <hr style={{width: '100%', height: '2px', margin: '24'}}/>
    
      <button className="checkout">
          <FaShoppingBag className='checkout-icon' />
          PROCEED TO SECURE CHECKOUT
      </button>
    </div>
  )
}
