import React, { useTransition } from 'react'
import { useRef, useState } from 'react';
import MyInput from './MyInput.jsx';
import MyForm from './MyForm.jsx';
import { delaySubmit, simulateSubmit } from './formaction.js';
import NewForm from './NewForm.jsx';

export default function WishList() {
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

    const sendMessage = async(formData) => {
        const message = await simulateSubmit(formData.get('message'));
        setMessages(messages => [...messages, {text: message, sending: true}])
    }

    const sendAction = async(message) => {
        startTransition(async() =>{
            const newResult = await delaySubmit(message);
            startTransition(() => {
                setResult(newResult)
            })
        })
        
    }

  return (
    <div>
        <h1>WishList</h1>
        <button onClick={handleClick}>Focus Input</button>
        <MyInput ref={myRef}/>
        <MyForm messages={messages} sendMessage={sendMessage}/>
        <NewForm action={sendAction} pending={pending}/>
    </div>
  )
}
