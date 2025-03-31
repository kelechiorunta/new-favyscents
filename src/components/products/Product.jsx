import React, { useState } from 'react'
import MainHeader from '../mainheader/MainHeader.jsx'
import { ViewChild, ViewProvider } from '../ViewContext/ViewContext.jsx'
import './Product.css'
import Slider from '../slider/Slider.jsx'
import pic1 from '../imgs/Cosmetic.png'
import pic2 from '../imgs/Passion.png'
import pic3 from '../imgs/BodyWash.png'
import pic4 from '../imgs/Chrome_Azzaro.png'
import pic5 from '../imgs/newArrivalI.png'
import pic6 from '../imgs/newArrivalII.png'
import pic7 from '../imgs/newArrivalIII.png'
import pic8 from '../imgs/newArrivalIV.png'
import pic9 from '../imgs/BestSellersI.png'
import pic10 from '../imgs/BestSellersII.png'
import pic11 from '../imgs/BestSellersIII.png'
import pic12 from '../imgs/BestSellersIV.png'

import DividerII from '../dividerII/DividerII'
import Subscriber from '../subscribe/Subscriber'
import MainFooter from '../mainfooter/MainFooter'
import { Container, Row, Col } from 'react-bootstrap'

const collections = [
  {
    id: 0,
    gender: 'female',
    title: 'WOMEN',
    brands: [
      {
        id: 0,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic1,
      },
      {
        id: 1,
        name: 'Eau De Parfum',
        supplier: 'Armaf Passion',
        price: '$51.74',
        pic: pic2,
      },
      {
        id: 2,
        name: 'Eau De Tollete',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic3,
      },
      {
        id: 3,
        name: 'Luminizing Clay',
        supplier: 'BVLGARI EXTREME',
        price: '$51.74',
        pic: pic4,
      },
      {
        id: 4,
        name: 'Luminizing Clay',
        supplier: 'BVLGARI EXTREME',
        price: '$51.74',
        pic: pic5,
      },
      {
        id: 5,
        name: 'Luminizing Clay',
        supplier: 'BVLGARI EXTREME',
        price: '$51.74',
        pic: pic6,
      },
      {
        id: 6,
        name: 'Luminizing Clay',
        supplier: 'BVLGARI EXTREME',
        price: '$51.74',
        pic: pic7,
      },
      {
        id: 7,
        name: 'Luminizing Clay',
        supplier: 'BVLGARI EXTREME',
        price: '$51.74',
        pic: pic8,
      },
      {
        id: 8,
        name: 'Luminizing Clay',
        supplier: 'BVLGARI EXTREME',
        price: '$51.74',
        pic: pic8,
      },
    ],
  },

  {
    id: 1,
    gender: 'male',
    title: 'MEN',
    brands: [
      {
        id: 0,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic9,
      },
      {
        id: 1,
        name: 'Eau De Parfum',
        supplier: 'Armaf Passion',
        price: '$51.74',
        pic: pic10,
      },
      {
        id: 2,
        name: 'Eau De Tollete',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic11,
      },
      {
        id: 3,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic12,
      },
      {
        id: 4,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic1,
      },
      {
        id: 5,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic5,
      },
      {
        id: 6,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic4,
      },
      {
        id: 7,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic8,
      },
      {
        id: 8,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic3,
      },
    ],
  },
]

const selectItems = [
  {
    id: 0,
    default: 'FEATURED BRANDS',
    items: [`WOMEN'S PERFUME`, `MEN'S COLOGNE`, `BEST SELLERS`],
  },
  { id: 1, default: 'PRICE RANGE', items: [`$48`, `$52`, `$56`, `$60`] },
  { id: 2, default: 'PERFUME SIZE', items: [`48`, `52`, `56`, `60`] },
  { id: 3, default: 'GENDER', items: [`Male`, `Female`, `Unisex`] },
]

export default function Product({ id }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevSlide, setPrevSlide] = useState(0) // Track the previous slide index
  const [direction, setDirection] = useState('left')

  const handleNext = () => {
    setDirection('right')
    setPrevSlide(currentIndex)
    setCurrentIndex((n) => (n + 1) % collections.length)
  }
  const handlePrevious = () => {
    setDirection('left')
    setPrevSlide(currentIndex)
    setCurrentIndex((n) => (n - 1 + collections.length) % collections.length)
  }

  const [selectedValueI, setSelectedValueI] = useState('')
  const [selectedValueII, setSelectedValueII] = useState('')
  const [selectedValueIII, setSelectedValueIII] = useState('')

  const handleChangeOptionI = (event) => {
    setSelectedValueI(event.target.value)
  }

  const handleChangeOptionII = (event) => {
    setSelectedValueII(event.target.value)
  }

  const handleChangeOptionIII = (event) => {
    setSelectedValueIII(event.target.value)
  }

  return (
    <Container fluid={'lg'}>
      <div className="product-container">
        <ViewProvider>
          {/* <ViewChild> */}
          <div className="header-container">
            <MainHeader />
          </div>
          {/* </ViewChild> */}
          <ViewChild>
            <div
              style={{ position: 'relative', top: 0, zIndex: 0 }}
              className="product"
            >
              {/* <div className="filter"></div> */}
              {/* <div className="lists"> */}
              {/* <Row> */}
              <div className="filter-section">
                <h1 className="">CATEGORIES</h1>
                <button className="reset">RESET ALL FILTERS</button>
                {/* <label htmlFor='filter'>FEATURED BRANDS */}
                {selectItems.map((selectObj) => (
                  <select
                    name="filter"
                    id="filter"
                    className="filter"
                    value={selectedValueIII}
                    onChange={handleChangeOptionIII}
                  >
                    <option value="" disabled>
                      {selectObj.default}
                    </option>
                    {selectObj.items.map((item) => (
                      <option value="volvo">{item}</option>
                    ))}
                  </select>
                ))}

                <form className="subscriber-form">
                  <div className="input-section">
                    <h1 className="join-list">JOIN OUR COUPON LIST</h1>
                    <input
                      type="email"
                      className="email"
                      placeholder="Email Address"
                    />
                    <button className="subscribeBtn">SIGN UP</button>
                    <h1 className="join-list">ABOUT WOMEN'S PERFUME</h1>
                    <p>
                      The Only Place To Shop The Latest Designer Perfumes At
                      Discounts Up To 80% Off Department Store Prices. We Offer
                      The Largest Selection Of The Latest Brand Name Perfumes
                      And Discount Perfume Products. Shop And Save On All
                      Women's Perfume Today.
                    </p>
                  </div>
                </form>
              </div>
              {/* </Row> */}

              <div className="perfume-section">
                <h1>WOMEN'S PERFUMES</h1>
                <p className="description">
                  The Only Place To Shop The Latest Designer Perfumes At
                  Discounts Up To 80% Off Department Store Prices. We Offer The
                  Largest Selection Of The Latest Brand Perfume Names And
                  Discount Perfume Products. Shop and Save On All Women's
                  Perfume Today.
                </p>
                <nav className="quantity-container">
                  <p>
                    {collections.reduce(
                      (sum, total) =>
                        parseInt(collections[0].brands.length) +
                        parseInt(collections[1].brands.length)
                    )}{' '}
                    items
                  </p>
                  <div className="cont">
                    <select
                      name="price"
                      id="price"
                      className="price"
                      value={selectedValueI}
                      onChange={handleChangeOptionI}
                    >
                      <option value="" disabled>
                        Price
                      </option>
                      <option value="volvo">$48</option>
                      <option value="saab">$52</option>
                      <option value="opel">$56</option>
                      <option value="audi">$60</option>
                    </select>
                    <select
                      name="quantity"
                      id="quantity"
                      className="quantity"
                      value={selectedValueII}
                      onChange={handleChangeOptionII}
                    >
                      <option value="" disabled>
                        Quantity
                      </option>
                      <option value="48">48</option>
                      <option value="52">52</option>
                      <option value="56">56</option>
                      <option value="60">60</option>
                    </select>
                  </div>
                </nav>
                <Row className="col-md-12">
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
                    <Slider
                      refId={id}
                      prevIndex={prevSlide}
                      currentIndex={currentIndex}
                      direction={direction}
                      carousels={collections}
                    />
                    {/* {collections.map(collection => (<Carousel refId={id} id={collection.id} brands={collection.brands} gender={collection.gender} title={collection.title}/>))} */}
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
                    <div className="pagination-container">
                      <button onClick={handleNext} className="next">
                        1
                      </button>
                      <button onClick={handleNext} className="next">
                        2
                      </button>
                      <button onClick={handleNext} className="next">
                        3
                      </button>
                    </div>
                  </div>
                </Row>
                {/* </div> */}
              </div>
            </div>
            <DividerII />
            <Subscriber />
            <MainFooter />
          </ViewChild>
        </ViewProvider>
      </div>
    </Container>
  )
}
