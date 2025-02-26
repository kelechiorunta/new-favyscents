import React from 'react'
import { useRef } from 'react';
import MyInput from './MyInput.jsx';

export default function WishList() {
    const myRef = useRef(null)
    const handleClick = () => {
        myRef.current.focus()
    }
  return (
    <div>
        <h1>WishList</h1>
        <button onClick={handleClick}>Focus Input</button>
        <MyInput ref={myRef}/>
    </div>
  )
}
