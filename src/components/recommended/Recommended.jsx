import React from 'react';
import './Recommended.css'
import { FaHeart } from 'react-icons/fa';
import pic1 from './Cosmetic.png';
import pic2 from './Passion.png';
import pic3 from './BodyWash.png';
import pic4 from './Chrome_Azzaro.png';


const collections = [
    {id: 0, 
    gender: 'female',
    title: 'WOMEN',
    brands: [
        {id: 0, name: 'Luminizing Clay', supplier: 'Jo Malone Vitizier', price: '$51.74', pic: pic1 },
        {id: 1, name: 'Eau De Parfum', supplier: 'Armaf Passion', price: '$51.74', pic: pic2 },
        {id: 2, name: 'Eau De Tollete', supplier: 'Jo Malone Vitizier', price: '$51.74', pic: pic3 },
        {id: 3, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', pic: pic4 },
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



export const Item = ({name, pic, supplier, price}) => {
    return (
        <div className="child-collection">
            <img className='img-collection' src={pic} width={'auto'} height={'auto'} />
            <div className="collection-details">
                <h1 className="title">{name}</h1>
                <p className="supplier">{supplier}</p>
                <p className="price">{price}</p>
                <button className="addToCart">ADD TO CART</button>
            </div>
        </div>
    )
}

export const Carousel = ({title, brands, gender}) => {
    return (
        <div className="carousel">
            
            {brands.map(brand => (
                <div className="item">
                    <div className="label-container">
                        <h1 className="label-title">{title}</h1>
                        <FaHeart className="label-icon" fill='green' size={19}/>
                    </div>
                    <Item id={brand.id} title = {brand.name} price = {brand.price} supplier = {brand.supplier} pic={brand.pic}/>
                </div>
            ))}
            
        </div>
    )
}

export default function Recommended() {
  return (
    <div className='recommended'>
        <h1 className="title">RECOMMENDED FOR YOU</h1>
        <div className="carousel-container">
            <button className="prev">
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.66667 0.833252L1.5 4.99992L5.66667 9.16659" stroke="black" stroke-linecap="round"/>
                </svg>
            </button>
                {collections.map(collection => (<Carousel id={collection.id} brands={collection.brands} gender={collection.gender} title={collection.title}/>))}
            <button className="next">
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33333 9.16675L5.5 5.00008L1.33333 0.833414" stroke="black" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
        <button className="shopmore">SHOP MORE</button>
    </div>
  )
}
