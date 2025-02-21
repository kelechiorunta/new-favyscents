import React, { useEffect, useState } from 'react';
import './ShoppingCart.css'
import MainHeader from '../mainheader/MainHeader';
import { ViewChild, ViewProvider } from '../ViewContext/ViewContext';
import CartSection from './CartSection.jsx';
import OrderSection from './OrderSection.jsx';
import { useNavigate } from 'react-router-dom';
import { getCartItems } from '../../apis/indexedDB.js';


export default function ShoppingCart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(null);
  const [loading, setLoading] = useState(null);
  const [total, setTotal] = useState(null)

  useEffect(() => {
    const getItems = async() => {
      setLoading(true)
      try{
          const response = await getCartItems();
          setCartItems(response.items);
      }
      catch(err){
          console.error(err);
      }
      finally{
          setLoading(false);
      }
    }
    getItems();
    console.log(cartItems)
  },[cartItems])

  useEffect(() => {
    const getTotal = (items) => {
      if (!items || items.length === 0) return setTotal(0); // Handle empty cart

      const totalPrice = items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', '')); // Remove $ and convert to number
        const quantity = parseInt(item.quantity, 10); // Ensure quantity is an integer

        return sum + price * quantity;
      }, 0);

      setTotal(totalPrice);
    };

    getTotal(cartItems);
  }, [cartItems]); 
  

  return (
    <div className='cart-container'>
        <MainHeader/>
        <ViewProvider>
          <ViewChild id={'cart-section'}>
            <div style={{textAlign: 'center'}} className="child-cart-section">
              <h1 className='title'>SHOPPING CART</h1>
              <button onClick={()=>navigate(-1)} className='back'>Back</button>
              <div className="cart-child-container">
                  <CartSection items = {cartItems}/>
                  <OrderSection totalPrice = {total && total}/>
              </div>
            </div>
          </ViewChild>
        </ViewProvider>
    </div>
  )
}
