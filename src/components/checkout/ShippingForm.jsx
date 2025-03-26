import React from 'react'
import Loader from '../loader/Loader.jsx'
import { Link } from 'react-router-dom'

export default function ShippingForm({ ref, handleAction, pending }) {
  return (
    <form
      ref={ref}
      onSubmit={handleAction}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          width: '600px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <label htmlFor="message">Message</label>
        <input style={{ width: 400 }} type="text" name="message" />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          width: '600px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <label htmlFor="email">Email Address</label>
        <input style={{ width: 400 }} type="text" name="email" />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          width: '600px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <label htmlFor="firstname">First Name</label>
        <input style={{ width: 400 }} type="text" name="firstname" />
      </div>{' '}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          width: '600px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <label htmlFor="zip">Zip Code</label>
        <input style={{ width: 400 }} type="text" name="zip" />
      </div>
      <p>
        You Already Have An Account With Us?{' '}
        <span>
          <Link to={'/account'}>Sign In</Link> or Continue As Guest
        </span>
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          type="submit"
          style={{
            position: 'relative',
            padding: '0.7rem',
            width: '120px',
            cursor: 'pointer',
          }}
        >
          LOGIN
          {pending && <Loader />}
        </button>
        <Link to="/">Forgot Password?</Link>
      </div>
    </form>
  )
}
