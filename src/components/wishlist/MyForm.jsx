import React from 'react'
import { useOptimistic, useRef, useState } from 'react'
import Toaster from '../toaster/Toaster.jsx'

export default function MyForm({ messages, sendMessage }) {
  const formRef = useRef(null)

  const [optimisticMsg, addOptimisticMsg] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  )

  const formAction = async (formData) => {
    addOptimisticMsg(formData.get('message'))
    formRef.current.reset()
    await sendMessage(formData)
  }

  return (
    <div>
      {optimisticMsg.map((message, index) => (
        <div key={index}>
          {/* {message.text} */}
          {!!message.sending && (
            <small>
              <Toaster message={'Sending...'} />
            </small>
          )}
        </div>
      ))}
      <h1>MyForm</h1>
      <form ref={formRef} action={formAction}>
        <input type="text" name="message" placeholder="hello" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
