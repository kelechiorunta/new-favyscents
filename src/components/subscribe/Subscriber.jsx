import React from 'react'
import './Subscriber.css'

export default function Subscriber() {
  return (
    <div className="subscriber-container">
      <form className="subscriber-form">
        <h1 className="title">SIGN UP FOR SPECIAL OFFERS AND PROMOTIONS</h1>
        <div className="input-section">
          <input type="name" className="name" placeholder="Enter Name" />
          <input type="email" className="email" placeholder="Enter Email" />
          <button className="subscribeBtn">SUBSCRIBE</button>
        </div>
        <p className="consent">
          By entering your email and clicking “subscribe”, you consent to
          receive marketing emails from FavyScents. You can unsubscribe at any
          time through the unsubscribe link in each email. See our Privacy
          Notice for more details, including how your personal information is
          used and shared.
        </p>
      </form>
      {/* <hr className="divider-hr" /> */}
      <div className="address">
        <div className="help-section">
          <h1 className="needHelp">NEED HELP?</h1>
          <p className="email">kelechiorunta1@gmail.com</p>
        </div>
        <div className="visit-section">
          <h1 className="visitUs">VISIT US</h1>
          <p className="location">No. 12, Victory Avenue, Ago, Lagos</p>
        </div>
      </div>
    </div>
  )
}
