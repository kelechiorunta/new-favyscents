import React from 'react'
import './TabMenu.css'
import { Link } from 'react-router-dom'

export default function TabMenu({ name, lists }) {
  return (
    <nav className="tab-menu" style={{ zIndex: 9999, position: 'absolute' }}>
      <nav className="women">
        <Link to={`${name === 'PRODUCT' ? '/product' : '/'} `} className="name">
          {name}
        </Link>
        <nav className="women-links">
          {lists.map((list) => (
            <Link>{list.item}</Link>
          ))}
        </nav>
      </nav>
      {/* <nav style={{backgroundColor: 'rgba(0,0,0,0.5', inset: 0, zIndex: 3999, height:'100vh', width:'95.5vw'}}></nav> */}
      <p className="name">{name}</p>
    </nav>
  )
}
