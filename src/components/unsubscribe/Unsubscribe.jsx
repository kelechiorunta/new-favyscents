import React from 'react'
import { useParams } from 'react-router-dom'

export default function Unsubscribe() {
  const {name} = useParams()
  return (
    <div>
       <h1>Unsubscribe {name}</h1>
    </div>
  )
}
