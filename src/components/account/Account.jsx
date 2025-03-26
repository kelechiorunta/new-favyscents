import React, { useState, useActionState } from 'react'
import './Account.css'
import MainHeader from '../mainheader/MainHeader.jsx'
import { ViewChild, ViewProvider } from '../ViewContext/ViewContext.jsx'
import profile from '../imgs/happy_girl.jpg'
import profile2 from '../imgs/client.png'
import profile3 from '../imgs/client1.jpg'
import Slider from '../slider/Slider.jsx'
import TestimonialSlider from '../testimonialSlider/TestimonialSlider.jsx'
import DividerII from '../dividerII/DividerII.jsx'
import Subscriber from '../subscribe/Subscriber.jsx'
import MainFooter from '../mainfooter/MainFooter.jsx'
import { addNewSubscriber } from '../../actions/actions.js'
import Loader from '../loader/Loader.jsx'
import Toaster from '../toaster/Toaster.jsx'

const testimonials = [
  {
    id: 0,
    brands: [
      {
        id: 0,
        pic: profile,
        name: 'Vera Wang',
        testimony: `I Have Always Wanted This 
        Perfume For The Longest Time And Couldn't Find It For A
        Good Price Anywhere Until I Discovered This Site. One Of My Favourites
        And I Get Complimented Whenever I Wear It.`,
      },
    ],
  },
  {
    id: 1,
    brands: [
      {
        id: 0,
        pic: profile2,
        name: 'John Sunny',
        testimony: `I Have Always Wanted This 
            Perfume For The Longest Time And Couldn't Find It For A
            Good Price Anywhere Until I Discovered This Site. One Of My Favourites
            And I Get Complimented Whenever I Wear It.`,
      },
    ],
  },
  {
    id: 2,
    brands: [
      {
        id: 0,
        pic: profile3,
        name: 'Jane Susan',
        testimony: `I Have Always Wanted This 
            Perfume For The Longest Time And Couldn't Find It For A
            Good Price Anywhere Until I Discovered This Site. One Of My Favourites
            And I Get Complimented Whenever I Wear It.`,
      },
    ],
  },
]

export default function Account() {
  // This will only work for Nextjs mutation server functions
  // const [formState, formAction, isPending] = useActionState(addNewSubscriber, {})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevSlide, setPrevSlide] = useState(0) // Track the previous slide index
  const [direction, setDirection] = useState('left')

  const [formState, setFormState] = useState(null)
  const [isPending, setIsPending] = useState(null)
  const handleNext = () => {
    setDirection('right')
    setPrevSlide(currentIndex)
    // reLoad(slide+1)
    setCurrentIndex((n) => (n + 1) % testimonials.length)
  }
  const handlePrevious = () => {
    setDirection('left')
    setPrevSlide(currentIndex)
    // reLoad(slide+1)
    setCurrentIndex((n) => (n - 1 + testimonials.length) % testimonials.length)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsPending(true)
    const formData = new FormData(event.target)
    const formObjects = Object.fromEntries(formData.entries())
    try {
      console.log(formObjects)
      // if (formObjects) {
      const response = await addNewSubscriber({}, formObjects)
      setFormState(response)
      // }
    } catch (err) {
      setFormState(err)
    } finally {
      setIsPending(false)
      event.target.reset()
    }
  }

  return (
    <div className="register-container">
      <MainHeader />
      <ViewProvider>
        <ViewChild id={'register'}>
          <div className="register-account-form">
            <h1>CREATE A NEW ACCOUNT</h1>
            <div className="introduction-container">
              <ViewChild id={'profile'}>
                <p>
                  Be The First To Find Out About All Of Our Great Deals And
                  Specials. We will Send You Coupons So You Can Get Discounts On
                  Our Already Discounted Prices!
                </p>
              </ViewChild>
              <div className="profile-container">
                <ViewChild id={'profile'}>
                  <img src={profile} alt="" width={'auto'} height={'auto'} />
                </ViewChild>
              </div>
            </div>
            <ViewChild id={'seperator'}>
              <hr
                className="seperator"
                style={{
                  width: '100%',
                  margin: 'auto',
                  backgroundColor: '#F5F6F6', //'#d68e21',
                  height: '5px',
                }}
              />
            </ViewChild>
            <ViewChild id={'input-section'}>
              <form onSubmit={handleSubmit}>
                <div className="input-section">
                  <input
                    name="firstname"
                    type="text"
                    className="first"
                    placeholder="Enter First Name"
                  />
                  <input
                    name="lastname"
                    type="text"
                    className="last"
                    placeholder="Enter Last Name"
                  />
                  <input
                    name="email"
                    type="email"
                    className="email"
                    placeholder="Enter Email Address"
                  />
                  <input
                    name="password"
                    type="password"
                    className="password"
                    placeholder="Enter Password"
                  />
                  <div className="confirm-subscription">
                    <label className="agree-label" htmlFor="agree">
                      <input name="agree" type="checkbox" className="agree" />
                      <p>
                        I Agree To Recieve Promotional Emails And Conscent To
                        Our Terms Of Use And Privacy Policy
                      </p>
                    </label>
                    <label className="agree-label" htmlFor="agree">
                      <input
                        name="subscribe"
                        type="checkbox"
                        className="subscribe"
                      />
                      <p>Subscribe Me To New Products</p>
                    </label>
                  </div>
                  <button type="submit" className="subscribeBtn">
                    SUBSCRIBE
                  </button>
                  {isPending && <Loader />}
                  {formState?.success ? (
                    <Toaster message={formState?.message} />
                  ) : null}
                </div>
              </form>
            </ViewChild>
          </div>
          {/* TESTIMONIAL SLIDER */}
          <div
            className="testimonial-section"
            style={{ backgroundColor: '#f5f6f6' }}
          >
            <div className="carousel-container">
              <button onClick={handlePrevious} className="prev">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.66667 0.833252L1.5 4.99992L5.66667 9.16659"
                    stroke="black"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <TestimonialSlider
                prevIndex={prevSlide}
                currentIndex={currentIndex}
                direction={direction}
                carousels={testimonials}
              />
              {/* {testimonials.map(collection => (<Carousel refId={id} id={collection.id} brands={collection.brands} gender={collection.gender} title={collection.title}/>))} */}
              <button onClick={handleNext} className="next">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.33333 9.16675L5.5 5.00008L1.33333 0.833414"
                    stroke="black"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <DividerII />

          <Subscriber />

          <MainFooter />
        </ViewChild>
      </ViewProvider>
    </div>
  )
}
