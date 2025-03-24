import React, { use, memo } from 'react'
import './OrderSummary.css'
import { ViewChild, ViewProvider } from '../ViewContext/ViewContext.jsx'

const OrderSummary = ({ allProducts }) => {
    const allOrders = use(allProducts)
   
    return (
    <ViewProvider>
    <div className='order_summary_container'>
        <h1 className='title'>ORDER SUMMARY</h1>
                <hr style={{ margin: 'auto', marginBottom: '10px', width: '100%', height: 5 }} />
                
        <ul style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
                    {allOrders && allOrders?.items.map(item => 
                    (
                <ViewChild id={'product'}>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', width: '100%', justifyContent: 'space-evenly'}}>
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
                            
                 </ViewChild>
                    )
            )}
        </ul>
    </div>
</ViewProvider>
  )
}

export default memo(OrderSummary)