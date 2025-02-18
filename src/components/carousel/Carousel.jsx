import React from "react";
import { useViewChild, ViewChild } from "../ViewContext/ViewContext.jsx";
import { FaHeart } from "react-icons/fa6";
import { Router, useNavigate } from "react-router-dom";

export const Item = ({id, name, pic, supplier, price}) => {
    const navigate = useNavigate()
    return (
        <div className="child-collection">
            <img onClick={()=>navigate(`/perfume/${id}`)} className='img-collection' src={pic} width={'auto'} height={'auto'} />
            <div className="collection-details">
                <h1 className="title">{name}</h1>
                <p className="supplier">{supplier}</p>
                <p className="price">{price}</p>
                <button className="addToCart">ADD TO CART</button>
            </div>
        </div>
    )
}

export const Carousel = ({refId, id, title, brands, gender}) => {
    const { isVisible } = useViewChild(refId);
    
    return (
        <div className="carousel">
            
            {brands.map((brand, idx) => (
                
             <ViewChild animateStyle={
                {opacity: `${isVisible ? "1" : "0"}`,
                margin: 'auto',
                transform: ` ${isVisible ? "translateY(0px)" : `translateY(${100 * idx}px)`}`,
                transition: `opacity ${1}s ease ${idx * 0.1}s, transform ${1}s ease ${idx * 0.1}s`
            }}>
                <div className="item">
                    <div className="label-container">
                        <h1 className="label-title">{title}</h1>
                        <FaHeart className="label-icon" fill='green' size={19}/>
                    </div>
                    <Item id={brand.id} title = {brand.name} price = {brand.price} supplier = {brand.supplier} pic={brand.pic}/>
                </div>
            </ViewChild>
            ))}
            
        </div>
    )
}