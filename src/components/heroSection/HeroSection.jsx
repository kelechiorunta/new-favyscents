import React from 'react';
import './HeroSection.css';
import { ViewChild } from '../ViewContext/ViewContext';
import { useViewChild } from '../ViewContext/ViewContext';

export default function HeroSection({id}) {

    const { isVisible } = useViewChild(id)

    const animateStyle = 
    {opacity: `${isVisible ? "1" : "0"}`,
    margin: 'auto',
    transform: ` ${isVisible ? "translateX(0px)" : "translateX(-100%)"}`,
    
    transition: "opacity 1s ease, transform 1s ease 0.1s"
  }
  return (
    <div style={{zIndex:-150}}
    className='hero-section'>
        
        <div className="landing-section">
            {/* <ViewChild animateStyle={
                {opacity: `${isVisible ? "1" : "1"}`,
                margin: 'auto',
                transform: ` ${isVisible ? "translateX(0px)" : "translateX(0%)"}`,
                transition: "opacity 1s ease, transform 1s ease "
                }}>  */}
                <div className="landing-image"></div>
             {/* </ViewChild> */}
            
            <ViewChild animateStyle={animateStyle}>
                <div className="landing-caption-section">
                    <div className="landing-christmas-image"></div>
                    <h1 className="landing-caption">FAVYSCENTS</h1>
                    <p className="landing-description">Experience the Art of Fragrance</p>
                    <button className="landing-button">
                        <svg className='shop_icon' width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4545 6.18401H10.2955V2.37601C10.2955 1.17411 9.31875 0.200012 8.11364 0.200012H3.88636C2.68125 0.200012 1.70455 1.17411 1.70455 2.37601V6.18401H0.545455C0.24375 6.18401 0 6.42711 0 6.72801V13.256C0 13.5569 0.24375 13.8 0.545455 13.8H11.4545C11.7563 13.8 12 13.5569 12 13.256V6.72801C12 6.42711 11.7563 6.18401 11.4545 6.18401ZM6.47727 10.213V11.114C6.47727 11.1888 6.41591 11.25 6.34091 11.25H5.65909C5.58409 11.25 5.52273 11.1888 5.52273 11.114V10.213C5.38202 10.1123 5.277 9.96958 5.22278 9.80551C5.16856 9.64144 5.16793 9.46445 5.22099 9.3C5.27405 9.13555 5.37806 8.99214 5.51805 8.8904C5.65804 8.78866 5.82679 8.73385 6 8.73385C6.17321 8.73385 6.34196 8.78866 6.48195 8.8904C6.62194 8.99214 6.72595 9.13555 6.77901 9.3C6.83207 9.46445 6.83145 9.64144 6.77722 9.80551C6.723 9.96958 6.61798 10.1123 6.47727 10.213V10.213ZM9.06818 6.18401H2.93182V2.37601C2.93182 1.85071 3.35966 1.42401 3.88636 1.42401H8.11364C8.64034 1.42401 9.06818 1.85071 9.06818 2.37601V6.18401Z"/>
                        </svg>
                        SHOP NOW
                    </button>
                </div>
            </ViewChild>
           
        </div>

    </div>
  )
}
