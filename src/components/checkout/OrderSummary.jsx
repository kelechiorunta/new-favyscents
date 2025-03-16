import React, { use, memo } from 'react'
import './OrderSummary.css'

const OrderSummary = ({ allProducts }) => {
    const allOrders = use(allProducts)
   
  return (
    <div className='order_summary_container'>
        <h1 className='title'>ORDER SUMMARY</h1>
        <hr style={{margin: 'auto', marginBottom: '10px', width:'100%', height:5}}/>
        <ul style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
            {allOrders && allOrders?.items.map(item => 
                (<div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
                    <img src={item.pic} alt='' width={100} height={100}/>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between'}}>
                        <p>{item.price}</p>
                        <div>
                            <hr style={{margin: 'auto', width:'100%', height:2, backgroundColor: 'black'}}/> 
                            <strong>${parseFloat(item.price.replace('$', ''), 10) * item.quantity}</strong>
                            <hr style={{margin: 'auto', width:'100%', height:2, backgroundColor: 'black'}}/> 
                        </div>
                    </div>
                    <p>{item.quantity}</p>
                 </div>
                )
            )}
        </ul>
    </div>

  )
}

export default memo(OrderSummary)