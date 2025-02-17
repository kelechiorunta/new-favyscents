import React from "react";
import { useViewChild, ViewChild } from "../ViewContext/ViewContext.jsx";
import { FaHeart } from "react-icons/fa6";
import './TestimonialCarousel.css'

export const Item = ({name, pic, supplier, price, testimony}) => {
    return (
        <div className="testimonial-child-collection">
            <img className='img-collection' src={pic} width={'auto'} height={'auto'} />
            
            <div className="collection-details">
                <svg className="left-quote" width="51" height="41" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.19125 40.76L0.19125 27.08C0.19125 22.04 1.11125 17.44 2.95125 13.28C4.79125 9.11999 7.91125 4.79999 12.3112 0.31999L20.4712 6.67999C17.3512 9.79999 15.1112 12.72 13.7512 15.44C12.3912 18.08 11.7112 21 11.7112 24.2L7.03125 18.92H22.3912V40.76H0.19125ZM28.6312 40.76V27.08C28.6312 22.04 29.5512 17.44 31.3912 13.28C33.2312 9.11999 36.3512 4.79999 40.7512 0.31999L48.9112 6.67999C45.7912 9.79999 43.5512 12.72 42.1912 15.44C40.8312 18.08 40.1512 21 40.1512 24.2L35.4712 18.92H50.8312V40.76H28.6312Z" fill="black" fill-opacity="0.3"/>
                </svg>
                <p className="title">{testimony}</p>
                <p className="name">- {name && name.toUpperCase()}</p>

                <svg className="right-quote" width="51" height="41" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.8088 0.24001L50.8088 13.92C50.8088 18.96 49.8888 23.56 48.0488 27.72C46.2088 31.88 43.0888 36.2 38.6888 40.68L30.5288 34.32C33.6488 31.2 35.8888 28.28 37.2488 25.56C38.6088 22.92 39.2888 20 39.2888 16.8L43.9688 22.08L28.6088 22.08L28.6088 0.24001L50.8088 0.24001ZM22.3688 0.24001L22.3688 13.92C22.3688 18.96 21.4488 23.56 19.6088 27.72C17.7688 31.88 14.6488 36.2 10.2488 40.68L2.08875 34.32C5.20875 31.2 7.44875 28.28 8.80875 25.56C10.1688 22.92 10.8488 20 10.8488 16.8L15.5288 22.08L0.168753 22.08L0.168753 0.24001L22.3688 0.24001Z" fill="black" fill-opacity="0.3"/>
                </svg>
            </div>

        </div>
    )
}

export const TestimonialCarousel = ({refId, id, title, brands, gender}) => {
    const { isVisible } = useViewChild(refId);
    
    return (
        <div className="testimonial-carousel">
            
            {brands.map((testimonial, idx) => (
                
             <ViewChild animateStyle={
                {opacity: `${isVisible ? "1" : "0"}`,
                margin: 'auto',
                transform: ` ${isVisible ? "translateY(0px)" : `translateY(${100 * idx}px)`}`,
                transition: `opacity ${1}s ease ${idx * 0.1}s, transform ${1}s ease ${idx * 0.1}s`
            }}>
                <div className="item">
                    {/* <div className="label-container">
                        <h1 className="label-title">{title}</h1>
                        <FaHeart className="label-icon" fill='green' size={19}/>
                    </div> */}
                    <Item id={testimonial.id} testimony={testimonial.testimony} name = {testimonial.name} price = {testimonial.price} supplier = {testimonial.supplier} pic={testimonial.pic}/>
                </div>
            </ViewChild>
            ))}
            
        </div>
    )
}