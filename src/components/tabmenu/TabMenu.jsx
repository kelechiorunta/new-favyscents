import React from 'react';
import './TabMenu.css';
import { Link } from 'react-router-dom';

export default function TabMenu({name}) {
  return (
    <nav className='tab-menu' style={{ zIndex: 9999, position: "absolute" }}>
        <nav className="women">
            <p className="name">WOMEN</p>
            <nav className="women-links">
                <Link>Perfumes</Link>
                <Link>Bath & Body</Link>
                <Link>Gift Sets</Link>
                <Link>Perfumes</Link>
                <Link>Perfumes</Link>
            </nav>
        </nav>
        {/* <nav style={{backgroundColor: 'rgba(0,0,0,0.5', inset: 0, zIndex: 3999, height:'100vh', width:'95.5vw'}}></nav> */}
        <p className="name">{name}</p>
    </nav>
  )
}
