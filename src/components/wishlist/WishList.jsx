import React, { Suspense, useTransition, useCallback } from 'react'
import { useRef, useState } from 'react';
import MyInput from './MyInput.jsx';
import MyForm from './MyForm.jsx';
import { delaySubmit, simulateSubmit } from './formaction.js';
import NewForm from './NewForm.jsx';
import GetProducts from './GetProducts.jsx';
import Loader from '../loader/Loader.jsx';
import { getCartItems } from '../../apis/indexedDB.js';
import { useMemo } from 'react';



export default function WishList() {
    const allProducts = useMemo(() => getCartItems()); 
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
    <div>
        <h1>WishList</h1>
        <button onClick={handleClick}>Focus Input</button>
        <MyInput ref={myRef}/>
        <MyForm messages={messages} sendMessage={sendMessage}/>
        <NewForm action={sendAction} pending={pending}/>
        {/* <Suspense fallback={<Loader/>}>
            <GetProducts allProducts={allProducts}/>
        </Suspense> */}
    </div>
  )
}
