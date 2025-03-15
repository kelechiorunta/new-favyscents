import React, { startTransition, useRef } from 'react'
import Toaster from '../toaster/Toaster.jsx'
import Loader from '../loader/Loader.jsx';
import './NewForm.css'
import MultiStepIndicator from './MultiStepIndicator.jsx';
import { Link } from 'react-router-dom';
import OrderSection from '../shoppingcart/OrderSection.jsx';
import { ViewChild, ViewProvider } from '../ViewContext/ViewContext.jsx';
import Divider from '../divider/Divider.jsx';
import DividerII from '../dividerII/DividerII.jsx';
import ShippingForm from './ShippingForm.jsx';

export default function NewForm({action, pending}) {
    const formRef = useRef(null);
    const multiStepRefI = useRef(null);
    const multiStepRefII = useRef(null);

    const handleAction = async(event) => {
        event.preventDefault();
        startTransition(() => {
            
            const myNewForm = new FormData(event.target)
            const formObjects = Object.fromEntries(myNewForm.entries())
            action(formObjects['message'])
            multiStepRefI.current.animateIndicatorOne();
            event.target.reset();
        })
    }
  
    return (
    <ViewProvider>
    <div className='form-container'>
        {/* <h1>NewForm</h1> */}
        <div style={{margin: 'auto', width: 'max-content', display: 'flex', alignItems:'center', justifyContent: 'space-evenly', gap:'3rem'}}>
            <MultiStepIndicator ref={multiStepRefI} title={'Shipping'} num={1} />
            <MultiStepIndicator ref={multiStepRefII} title={'Reviews and Payments'} num={2} />
        </div>
        {/* //<Toaster message={'Loading...'}/>} */}
        <ViewChild id={'shipping'}>
            <section style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
                <div className="shipping-section">
                    <h1 style={{marginBottom: '2rem', marginTop: '4rem'}}>SHIPPING ADDRESS</h1>
                    
                    {/* Top form  */}
                    <ShippingForm ref={formRef} handleAction={handleAction} pending={pending}/>
                    <hr style={{margin: '50px auto', width:'100%', height:5}}/>

                    <ShippingForm ref={formRef} handleAction={handleAction} pending={pending}/>
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <OrderSection />
                    <OrderSection />
                    <OrderSection />
                </div>
            </section>
        </ViewChild>
    </div>
    </ViewProvider>
  )
}
