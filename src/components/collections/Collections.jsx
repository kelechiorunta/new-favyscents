import React from 'react';
import { Link } from 'react-router-dom';
import './Collections.css'
import womenPerfumePic from './women_perfume.png';
import menPerfumePic from './men_perfume.png';
import bestSellersPic from './best_sellers.png';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

const frames = [
    {id: 0, gender: 'Female', content: `Women's Perfume`, pic:womenPerfumePic},
    {id: 1, gender: 'Male', content: `Men's Perfume`, pic:menPerfumePic},
    {id: 2, gender: 'all', content: `Best Sellers`, pic:bestSellersPic},
]

export const PerfumeFrame = ({id, gender, content, pic}) => {
    return (
        <div className="frame-container">
            <img className="frame-img" src={pic} width={50} height={50} alt='pic'/>
            <div className="content">{content}</div>
            <Link className='link' to={'/'}>Shop Now</Link>
        </div>
    )
}

export default function Collections({id}) {
    const { isVisible } = useViewChild(id);

  return (
    <div className='collections'>
        <h1 className='title'>SHOP OUR COLLECTION</h1>
        <p className="description">Our delicious, limited-edition collection</p>
        <button className="shopAllBtn">
            Shop All
        </button>

        <div className="perfumes-section">
            <div className="perfumes-container">
                {frames.map((frame, idx) => 
                (
                    <ViewChild animateStyle={
                        {opacity: `${isVisible ? "1" : "0"}`,
                        margin: 'auto',
                        transform: ` ${isVisible ? "translateY(0px)" : `translateY(${100 * idx}px)`}`,
                        transition: `opacity ${1}s ease ${idx * 0.1}s, transform ${1}s ease ${idx * 0.1}s`
                      }}>
                        <PerfumeFrame 
                            key={frame.id} 
                            id = {frame.id} 
                            gender = {frame.gender} 
                            content={frame.content} 
                            pic={frame.pic} />
                    </ViewChild>
                )
                )}
            </div>
        </div>
    </div>
  )
}
