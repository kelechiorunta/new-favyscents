import React from 'react'
import { FaCircleExclamation, FaTrash } from 'react-icons/fa6'
import './CartSection.css'

export default function CartSection({items}) {
  return (
    <div className='cartlist'>
        <div className="return-product">
            <FaCircleExclamation fill='black' color='white' stroke='white' size={14} />
            <p>
              Return Items To Us By Post Within 14 Days
              Of Reciept. Items Should Be Unused, Unopened
              And Have Any Original Seals Intact.
            </p>
        </div>
        <div className="titles">
          <p className="product">Product</p>
          <p className="price">Price</p>
          <p className="quantity">Quantity</p>
          <p className="total">Total</p>
        </div>

        <hr style={{width: '100%', height: '2px'}}/>
        
        <div style={{display: 'flex', overflow: 'scroll', flexDirection: 'column'}} className="items-container">
            {items && items.map(item => (
                <div className="cols">
                  <div className="prod-col">
                    <div className="image-col">
                      <img className='prod-img' src={item.pic} alt={''} width={74} height={74} />
                    </div>
                    <div className="description-col">
                      <h1 className="name">{item.name}</h1>
                      <div className="description">{item.description}</div>
                    </div>
                  </div>
                  <div className="price-col">
                      <h1 className="price-title">{item.price}</h1>
                  </div>
                  <div className="quantity-col">
                      <input type='number' className="quantity-title" value={item.quantity}/>
                  </div>
                  <div className="total-col">
                      <h1 className="total-title">{'$'+parseFloat(item.price.replace('$', ''),'10') * item.quantity}</h1>
                  </div>
                  <button className="delete">
                    <FaTrash className='delete-icon' size={14} fill='black' color='white'/>
                  </button>
              </div>
            ))}
        </div>
        

        <hr style={{width: '100%', height: '2px'}}/>

        <div className="shopping-container">
          <button className="continue">CONTINUE SHOPPING</button>
          <button className="clear">CLEAR SHOPPING CART</button>
        </div>
    </div>
  )
}
