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
                    <form ref={formRef} onSubmit={handleAction} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <div style={{display: 'flex', gap: '1rem', width:'600px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <label htmlFor='message'>Message</label>
                            <input style={{width: 400}} type="text" name='message' />
                        </div>
                        <div style={{display: 'flex', gap: '1rem', width: '600px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <label htmlFor='email'>Email Address</label>
                            <input style={{width: 400}} type="text" name='email' />
                        </div>
                        <div style={{display: 'flex', gap: '1rem', width: '600px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <label htmlFor='firstname'>First Name</label>
                            <input style={{width: 400}} type="text" name='firstname' />
                        </div>
                        <div style={{display: 'flex', gap: '1rem', width: '600px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <label htmlFor='zip'>Zip Code</label>
                            <input style={{width: 400}} type="text" name='zip' />
                        </div>
                        <p>You Already Have An Account With Us? <span><Link to={'/account'}>Sign In</Link> or Continue As Guest</span></p>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <button  type='submit' style={{position: 'relative', padding: '0.7rem', width: '120px', cursor: 'pointer'}}>
                                LOGIN
                                {pending && <Loader/>}
                            </button>
                            <Link to='/'>Forgot Password?</Link>
                        </div>
                        
                    </form>
                    {/* Top form  */}
                    <hr style={{margin: '50px auto', width:'100%', height:5}}/>

                    <form ref={formRef} onSubmit={handleAction} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <div style={{display: 'flex', gap: '1rem', width:'600px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <label htmlFor='message'>Message</label>
                            <input style={{width: 400}} type="text" name='message' />
                        </div>
                        <div style={{display: 'flex', gap: '1rem', width: '600px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <label htmlFor='email'>Email Address</label>
                            <input style={{width: 400}} type="text" name='email' />
                        </div>
                        <div style={{display: 'flex', gap: '1rem', width: '600px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <label htmlFor='firstname'>First Name</label>
                            <input style={{width: 400}} type="text" name='firstname' />
                        </div>
                        <div style={{display: 'flex', gap: '1rem', width: '600px', alignItems: 'center', justifyContent: 'space-between'}}>
                            <label htmlFor='zip'>Zip Code</label>
                            <input style={{width: 400}} type="text" name='zip' />
                        </div>
                        <p>You Already Have An Account With Us? <span><Link to={'/account'}>Sign In</Link> or Continue As Guest</span></p>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <button  type='submit' style={{position: 'relative', padding: '0.7rem', width: '120px', cursor: 'pointer'}}>
                                LOGIN
                                {pending && <Loader/>}
                            </button>
                            <Link to='/'>Forgot Password?</Link>
                        </div>
                        
                    </form>
                </div>
                <OrderSection />
            </section>
        </ViewChild>
    </div>
    </ViewProvider>
  )
}
