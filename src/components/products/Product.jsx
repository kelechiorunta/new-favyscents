import React, { useState } from 'react';
import MainHeader from '../mainheader/MainHeader.jsx';
import { ViewChild, ViewProvider } from '../ViewContext/ViewContext.jsx';
import './Product.css'
import Slider from '../slider/Slider.jsx';
import pic1 from './Cosmetic.png';
import pic2 from './Passion.png';
import pic3 from './BodyWash.png';
import pic4 from './Chrome_Azzaro.png';
import pic5 from './newArrivalI.png';
import pic6 from './newArrivalII.png';
import pic7 from './newArrivalIII.png';
import pic8 from './newArrivalIV.png';

const collections = [
    {id: 0, 
    gender: 'female',
    title: 'WOMEN',
    brands: [
        {id: 0, name: 'Luminizing Clay', supplier: 'Jo Malone Vitizier', price: '$51.74', pic: pic1 },
        {id: 1, name: 'Eau De Parfum', supplier: 'Armaf Passion', price: '$51.74', pic: pic2 },
        {id: 2, name: 'Eau De Tollete', supplier: 'Jo Malone Vitizier', price: '$51.74', pic: pic3 },
        {id: 3, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', pic: pic4 },
        {id: 4, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', pic: pic5 },
        {id: 5, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', pic: pic6 },
        {id: 6, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', pic: pic7 },
        {id: 7, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', pic: pic8 },
        {id: 8, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', pic: pic8 },
    ]
    },

    {id: 1, 
        gender: 'male',
        title: 'MEN',
        brands: [
            {id: 0, name: 'Luminizing Clay', supplier: 'Jo Malone Vitizier', price: '$51.74', pic: pic1 },
            {id: 1, name: 'Eau De Parfum', supplier: 'Armaf Passion', price: '$51.74', pic: pic1},
            {id: 2, name: 'Eau De Tollete', supplier: 'Jo Malone Vitizier', price: '$51.74', pic: pic1 },
            {id: 3, name: 'Luminizing Clay', supplier: 'Jo Malone Vitizier', price: '$51.74', pic: pic1 },
        ]
        }
]

export default function Product({id}) {
    const [currentIndex, setCurrentIndex] = useState(0);
        const [prevSlide, setPrevSlide] = useState(0); // Track the previous slide index
        const [direction, setDirection] = useState('left');

        const handleNext = () => {
          setDirection("right");
          setPrevSlide(currentIndex);
        // reLoad(slide+1)
         setCurrentIndex((n) => (n + 1) % collections.length);
        };
        const handlePrevious = () => {
          setDirection("left");
          setPrevSlide(currentIndex);
    // reLoad(slide+1)
        setCurrentIndex((n) => (n - 1 + collections.length) % collections.length);
        };

        const [selectedValueI, setSelectedValueI] = useState("");
        const [selectedValueII, setSelectedValueII] = useState("");
        const [selectedValueIII, setSelectedValueIII] = useState("");

        const handleChangeOptionI = (event) => {
            setSelectedValueI(event.target.value);
        };

        const handleChangeOptionII = (event) => {
            setSelectedValueII(event.target.value);
        };

        const handleChangeOptionIII = (event) => {
            setSelectedValueIII(event.target.value);
        };

  return (
    <div className='product-container'>
        <ViewProvider>
            {/* <ViewChild> */}
                <div className="header-container">
                    <MainHeader/>
                </div>
            {/* </ViewChild> */}
            <ViewChild>
                <div style={{position: 'relative', top: 0, zIndex:-9999}} className='product'>
                    {/* <div className="filter"></div> */}
                    {/* <div className="lists"> */}
                    <div className="filter-section">
                        <h1 className="">NEW ARRIVALS</h1>
                        <button className="reset">RESET ALL FILTERS</button>
                        {/* <label htmlFor='filter'>FEATURED BRANDS */}
                        <select 
                                name="filter" 
                                id="filter" 
                                className='filter'
                                value={selectedValueIII} 
                                onChange={handleChangeOptionIII}>
                                    <option value="">FEATURED BRANDS</option>
                                    <option value="volvo">$48</option>
                                    <option value="saab">$52</option>
                                    <option value="opel">$56</option>
                                    <option value="audi">$60</option>
                                </select>
                        {/* </label> */}
                        
                    </div>
                    
                    <div className="perfume-section">
                        <h1>WOMEN'S PERFUMES</h1>
                        <p className='description'>
                            The Only Place To Shop The Latest Designer Perfumes At Discounts Up To 80% Off Department Store Prices.
                            We Offer The Largest Selection Of The Latest Brand Perfume Names And Discount Perfume Products. 
                            Shop and Save On All Women's Perfume Today.
                        </p>
                        <nav className="quantity-container">
                            <p>{collections.reduce((sum, total)=> parseInt(collections[0].brands.length) + parseInt(collections[1].brands.length))} items</p>
                            <div className="cont">
                                <select 
                                name="price" 
                                id="price" 
                                className='price'
                                value={selectedValueI} 
                                onChange={handleChangeOptionI}>
                                    <option value="" disabled>Price</option>
                                    <option value="volvo">$48</option>
                                    <option value="saab">$52</option>
                                    <option value="opel">$56</option>
                                    <option value="audi">$60</option>
                                </select>
                                <select 
                                name="quantity" 
                                id="quantity" 
                                className='quantity'
                                value={selectedValueII} 
                                onChange={handleChangeOptionII}>
                                    <option value="" disabled>Quantity</option>
                                    <option value="48">48</option>
                                    <option value="52">52</option>
                                    <option value="56">56</option>
                                    <option value="60">60</option>
                                </select>
                            </div>
                        </nav>
                        <div className="carousel-container">
                        <button onClick={handlePrevious} className="prev">
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.66667 0.833252L1.5 4.99992L5.66667 9.16659" stroke="black" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <Slider refId={id} prevIndex={prevSlide} currentIndex={currentIndex} direction={direction} carousels={collections} />
                            {/* {collections.map(collection => (<Carousel refId={id} id={collection.id} brands={collection.brands} gender={collection.gender} title={collection.title}/>))} */}
                        <button onClick={handleNext} className="next">
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33333 9.16675L5.5 5.00008L1.33333 0.833414" stroke="black" stroke-linecap="round"/>
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
                    {/* </div> */}
                    </div>
                    </div>
                   
            </ViewChild>
        </ViewProvider>
    </div>
  )
}
