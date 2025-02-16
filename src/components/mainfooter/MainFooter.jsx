import React from 'react';
import './MainFooter.css';
import { Link } from 'react-router-dom';
import { FaGoogle, FaLinkedin } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';

export default function MainFooter() {
  return (
    <div className='main-footer'>
        <div className="titles">
            <h1>CUSTOMER SUPPORT</h1>
            <h1>MY ACCOUNT</h1>
            <div className="icons">
                <FaLinkedin size={40} fill='black' stroke='white' color='white' />
                <FaGoogle size={40} fill='black' stroke='white' color='white' />
                <FaTwitter size={40} fill='black' stroke='white' color='white' />
            </div>     
        </div>
        <div className="navlist">
            <nav className="nav1">
                <Link to={'#'}>Perfumes</Link>
                <Link to={'#'}>Womens Perfumes</Link>
                <Link to={'#'}>Men's Cologne</Link>
            </nav>
            <nav className="nav2">
                <Link to={'#'}>Best Sellers</Link>
                <Link to={'#'}>New Arrivals</Link>
                <Link to={'#'}>Recommended</Link>
            </nav>
            <nav className="nav3">
                <Link to={'#'}>My Account</Link>
                <Link to={'#'}>Register Now</Link>
                <Link to={'#'}>Order Status</Link>
            </nav>
        </div>
        <div className="copyright-section">
            <nav className="service-code">
                <p>Customer Service Code:OA</p>
                <p>Entire contents Copyright © 2023-2024. FavyScents, Inc.</p>
            </nav>
            <p className="trademark">
                FavyScents is an independent retailer carrying genuine brand name Perfumes, skincare, haircare, candles and makeup. FavyScents and FavyScents are trademarks of FavyScents, Inc. and are Registered in the Nigerian Patent & Trademark Office.
            </p>
            <p className='reserved'>All Rights Reserved.</p>
        </div>
        {/* MainFooter */}
    </div>
  )
}
