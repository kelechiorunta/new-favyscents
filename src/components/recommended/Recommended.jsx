import React, { useState } from 'react'
import './Recommended.css'
import { FaHeart } from 'react-icons/fa'
import pic1 from '../imgs/Cosmetic.png'
import pic2 from '../imgs/Passion.png'
import pic3 from '../imgs/BodyWash.png'
import pic4 from '../imgs/Chrome_Azzaro.png'
import { useViewChild } from '../ViewContext/ViewContext.jsx'
import { ViewChild } from '../ViewContext/ViewContext.jsx'
import Slider from '../slider/Slider.jsx'

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
        name: 'Chrome Azzaro',
        supplier: 'BVLGARI EXTREME',
        price: '$51.74',
        pic: pic4,
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
        pic: pic1,
      },
      {
        id: 1,
        name: 'Eau De Parfum',
        supplier: 'Armaf Passion',
        price: '$51.74',
        pic: pic1,
      },
      {
        id: 2,
        name: 'Eau De Tollete',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic1,
      },
      {
        id: 3,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic1,
      },
    ],
  },
  {
    id: 2,
    gender: 'male',
    title: 'UNISEX',
    brands: [
      {
        id: 0,
        name: 'Luminizing Clay',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic3,
      },
      {
        id: 1,
        name: 'Eau De Parfum',
        supplier: 'Armaf Passion',
        price: '$51.74',
        pic: pic4,
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
        name: 'Chrome Azzaro',
        supplier: 'Jo Malone Vitizier',
        price: '$51.74',
        pic: pic3,
      },
    ],
  },
]

export default function Recommended({ id }) {
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

  return (
    <div className="recommended">
      <h1 className="title">RECOMMENDED FOR YOU</h1>
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
      </div>
      <button className="shopmore">SHOP MORE</button>
    </div>
  )
}
