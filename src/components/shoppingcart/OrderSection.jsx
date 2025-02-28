import React, {useState, useEffect} from 'react';
import './OrderSection.css'
import { FaShoppingBag } from 'react-icons/fa';
import { getCartItems } from '../../apis/indexedDB';

export default function OrderSection({totalPrice, handleUpdateItems, deleteItem}) {
    const [updatedTotal, setUpdatedTotal] = useState(totalPrice)
  
  useEffect(() => {
    const getTotalPrice = async() => {
        const allItems = await getCartItems();
        const products = allItems?.items
        const totalPrices = products && products.reduce((sum, item) => {
          const price = parseFloat(item.price.replace('$', '')); // Remove $ and convert to number
          const quantity = parseInt(item.quantity, 10); // Ensure quantity is an integer
          
          return sum + price * quantity;
        }, 0);
        setUpdatedTotal(totalPrices)
    }
    getTotalPrice();
  },[updatedTotal, totalPrice, handleUpdateItems, deleteItem])
    return (
    <div className='order-section'>
      <div className="subtotal-section">
          <div className="subtotal-container">
            <p className="subtotal">Subtotal</p>
            <p className="result">{`$` + updatedTotal}</p>
          </div>
          <div className="tax-container">
            <p className="tax">Tax</p>
            <p className="result">$0</p>
          </div>    
          <div className="total-container">
            <p className="total">ORDER TOTAL</p>
            <p className="result">{`$` + updatedTotal}</p>
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
