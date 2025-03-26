import React, { useContext, useState, useRef, useEffect } from 'react'
import './Mainheader.css'
import Tooltip from '../tooltip/Tooltip.jsx'
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping, FaHeart, FaUser } from 'react-icons/fa6'
import TabMenu from '../tabmenu/TabMenu.jsx'
import Divider from '../divider/Divider.jsx'
// import { ViewChild } from '../ViewContext/ViewContext.jsx';
// import logo from './logo-favy.svg';
import { Link, useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'
// import useProducts from '../useProducts/useProducts.jsx';
import { productContext } from '../useProducts/ProductsContext.jsx'
import { getCartItems } from '../../apis/indexedDB.js'
import ProgressBar from '../progressbar/ProgressBar.jsx'

export default function MainHeader({ id, tooltipContent, ...rest }) {
  const navigate = useNavigate()
  const accountBtnRef = useRef(null)
  const wishListBtnRef = useRef(null)
  const [targetRect, setTargetRect] = useState(null)
  const [activeTooltip, setActiveTooltip] = useState(null)

  // const {totalQ} = useContext(productContext)//useProducts();
  const { totalQ, handleUpdateItems, handleUpdate } = useContext(productContext) //useProducts();
  const [updatedQuantity, setUpdatedQuantity] = useState(totalQ)

  const matches = useMediaQuery('only screen and (min-width: 787px)')
  const smallerThan786 = useMediaQuery(
    'only screen and (min-width: 400px) and (max-width: 787px)'
  )
  const [hoveredTitle, setHoveredTitle] = useState(null)

  useEffect(() => {
    const updateQuantity = async () => {
      const allProducts = await getCartItems()
      const totalQuantities =
        allProducts &&
        allProducts?.items.reduce(
          (sum, item) => parseInt(sum) + parseInt(item.quantity),
          0
        )
      if (totalQuantities) {
        setUpdatedQuantity(totalQuantities)
      } else {
        setUpdatedQuantity(totalQ)
      }
    }
    updateQuantity()
  }, [handleUpdateItems, handleUpdate])

  const handleMouseEnter = (title) => {
    setHoveredTitle(title)
  }

  const handleMouseLeave = () => {
    setHoveredTitle(null)
  }

  const handleTooltipEnter = (ref, tooltipType) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setTargetRect({
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
      })
      setActiveTooltip(tooltipType) // Set the active tooltip
    }
  }

  const handleTooltipLeave = () => {
    setTargetRect(null)
    setActiveTooltip(null) // Clear the active tooltip
  }
  const homelist = [
    { id: 0, item: 'Perfumes' },
    { id: 1, item: 'Bath & Body' },
    { id: 2, item: 'Gift Sets' },
    { id: 3, item: `Women's Perfumes` },
    { id: 4, item: `Men's Cologne` },
  ]

  const productlist = [
    { id: 0, item: 'Best Sellers' },
    { id: 1, item: 'Recommended' },
    { id: 2, item: 'New Arrival' },
    { id: 3, item: `Women's Perfumes` },
    { id: 4, item: `Men's Cologne` },
  ]
  const [value, setValue] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const progress = (scrollTop / height) * 1
      setValue(progress)
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [value]) // ✅ Empty dependency array prevents unnecessary re-renders

  return (
    <header className="mainheader">
      {smallerThan786 ? (
        <svg
          className="hamburger-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 4H13.5M2.5 8H13.5M2.5 12H13.5"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : null}

      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="Hey, what are you looking for?"
        />
        <FaSearch className="icon-search" size={19} />
      </div>

      <div className="logo-container">
        <svg
          className="logo"
          width="30"
          height="39"
          viewBox="0 0 30 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.16929 38.0736C4.0796 37.887 4.98991 37.6737 6.10829 37.4338C5.61412 37.0872 5.30202 36.8473 4.98991 36.6341C-2.11051 31.6224 -1.43428 20.8526 6.21233 16.8006C7.0186 16.3741 7.35671 15.9209 7.3047 14.9878C7.22667 13.7616 7.33071 12.5087 7.27869 11.2557C7.22667 10.1894 7.66882 9.52298 8.5011 8.96317C9.15133 8.53664 9.72352 7.97682 10.3217 7.49698C8.68317 5.68425 8.70917 4.53796 10.4778 3.25838C10.2957 2.9918 10.1137 2.72522 9.93159 2.4853C10.1397 1.4723 11.5181 1.4723 12.7926 2.4853C12.6105 2.69856 12.4284 2.93848 12.2464 3.15175C13.8589 4.85785 14.3271 4.85785 15.8616 3.1784C17.8123 1.04577 23.5082 -0.153831 26.0831 1.07243C27.7737 1.89883 29.0481 3.12509 29.0481 5.2044C29.0481 6.93717 27.7737 8.64327 25.771 9.2564C22.2338 10.3494 18.9567 9.46967 16.0957 7.25706C14.067 5.68425 14.171 5.5243 12.3504 7.49698C12.7666 7.87019 13.1307 8.43001 13.6248 8.58996C15.1594 9.14977 15.4975 10.2961 15.3674 11.7622C15.3674 11.8156 15.3674 11.8422 15.3674 11.8955C15.1074 14.5347 15.1074 17.0405 18.2284 18.0002C24.2625 22.8253 24.0284 32.1289 17.7603 36.6341C17.4481 36.8473 17.136 37.0872 16.5638 37.4604C17.9943 37.7803 19.1907 38.0469 20.3871 38.3135C20.3871 38.3935 20.3611 38.4734 20.3611 38.5801C14.6652 38.5801 8.94325 38.5801 3.24732 38.5801C3.22131 38.3935 3.1953 38.2335 3.16929 38.0736Z"
            fill="#4D2952"
          />
        </svg>
        <div className="logo-content">
          <h1 className="logo-title">FAVYSCENTS</h1>
          <h1 className="logo-description">Experience the Art of Fragrance</h1>
        </div>
      </div>

      <div className="account-container">
        <Link
          ref={accountBtnRef}
          onPointerEnter={() => handleTooltipEnter(accountBtnRef, 'account')}
          onPointerLeave={handleTooltipLeave}
          to={'/account'}
          className="accountBtn"
        >
          <FaUser size={19} color="black" stroke="2px black" />
          {matches ? 'My Account' : null}
          {targetRect !== null && activeTooltip === 'account' && (
            <Tooltip targetRect={targetRect}>
              {/* My Account */}
              {accountBtnRef.current.textContent}
            </Tooltip>
          )}
        </Link>
        <button
          onClick={() => navigate('/wishlist')}
          ref={wishListBtnRef}
          onPointerEnter={() => handleTooltipEnter(wishListBtnRef, 'wishlist')}
          onPointerLeave={handleTooltipLeave}
          className="wishlistBtn"
        >
          <FaHeart size={19} color="black" stroke="2px black" />
          {matches ? 'WishList' : null}
          {targetRect !== null && activeTooltip === 'wishlist' && (
            <Tooltip targetRect={targetRect}>
              {/* WishList */}
              Wishlist
            </Tooltip>
          )}
        </button>
        <div className="cartitems">
          <FaCartShopping size={19} color="black" stroke="2px black" />
          <p>{matches ? `${updatedQuantity} items` : null}</p>
        </div>
      </div>

      <div style={{ zIndex: 9999 }} className="main-nav">
        <div
          style={{ zIndex: 9999 }}
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('HOME')}
          onMouseLeave={handleMouseLeave}
        >
          <h1>HOME</h1>
          {hoveredTitle === 'HOME' && <TabMenu name="HOME" lists={homelist} />}
        </div>

        <div
          style={{ zIndex: 9999 }}
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('PRODUCT')}
          onMouseLeave={handleMouseLeave}
        >
          <h1>PRODUCT</h1>
          {hoveredTitle === 'PRODUCT' && (
            <TabMenu name="PRODUCT" lists={productlist} />
          )}
        </div>
      </div>
      <Divider />
      <ProgressBar value={value} />
    </header>
  )
}
