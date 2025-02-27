import React, { startTransition, useRef } from 'react'
import Toaster from '../toaster/Toaster.jsx'
import Loader from '../loader/Loader.jsx';

export default function NewForm({action, pending}) {
    const formRef = useRef(null);

    const handleAction = async(event) => {
        event.preventDefault();
        startTransition(() => {
            
            const myNewForm = new FormData(event.target)
            const formObjects = Object.fromEntries(myNewForm.entries())
            action(formObjects['message'])
            event.target.reset();
        })
    }
  
    return (
    <div>
        <h1>NewForm</h1>
        {pending && <Loader/>}
        {/* //<Toaster message={'Loading...'}/>} */}
        <form ref={formRef} onSubmit={handleAction}>
            <input type="text" name='message' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
