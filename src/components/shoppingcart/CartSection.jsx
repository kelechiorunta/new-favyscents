import React from 'react'
import { FaCircleExclamation } from 'react-icons/fa6'
import './CartSection.css'

export default function CartSection({id, name, quantity, price}) {
  return (
    <div className='cartlist'>
        <div className="return">
            <FaCircleExclamation fill='black' color='white' stroke='white' size={14} />
            <p>
              Return Items To Us By Post Within 14 Days
              Of Reciept. Items Should Be Unused, Unopened
              And Have Any Original Seals Intact.
            </p>
        </div>
    </div>
  )
}
