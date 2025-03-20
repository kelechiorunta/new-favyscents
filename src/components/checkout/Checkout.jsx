
import MainHeader from '../mainheader/MainHeader.jsx'
import './Checkout.css';
import React, { Suspense, useTransition, useCallback } from 'react'
import { useRef, useState } from 'react';
import MyInput from '../wishlist/MyInput.jsx';
import MyForm from '../wishlist/MyForm.jsx';
import { delaySubmit, simulateSubmit } from '../wishlist/formaction.js';
import NewForm from './NewForm.jsx';
import GetProducts from '../wishlist/GetProducts.jsx';
import Loader from '../loader/Loader.jsx';
import { getCartItems } from '../../apis/indexedDB';
import { useMemo } from 'react';


export default function Checkout() {

    // const allProducts = useMemo(() => getCartItems()); 
    const [pending, startTransition] = useTransition();
    const myRef = useRef(null);
    const handleClick = () => {
        myRef.current.focus();
    }
    const formRef = useRef();
    const [messages, setMessages] = useState([
        {text: "Hello", sending: false}
    ])
    const [result, setResult] = useState(null)

    const sendMessage = useCallback(async(formData) => {
        const message = await simulateSubmit(formData.get('message'));
        setMessages(messages => [...messages, {text: message, sending: true}])
    },[messages])

    const sendAction = useCallback(async(message) => {
        startTransition(async() =>{
            try{
                const newResult = await delaySubmit(message);
                setResult(newResult)
                // startTransition(() => {
            //})
            }
            catch(err){
                setResult(err)
            }
            finally{
                setTimeout(()=>setResult(null), 3000)
            }  
        })
        
    },[])


  return (
    <div className='checkout-container'>
        <MainHeader />
        {/* <h1 className='checkout-title'>Checkout</h1> */}
        <div className='checkout-title'>
            {/* <h1>WishList</h1>
            <button onClick={handleClick}>Focus Input</button>
            <MyInput ref={myRef}/>
            <MyForm messages={messages} sendMessage={sendMessage}/> */}
            <NewForm action={sendAction} pending={pending}/>
        
        {/* <Suspense fallback={<Loader/>}>
            <GetProducts allProducts={allProducts}/>
        </Suspense> */}
    </div>
    </div>
  )
}
