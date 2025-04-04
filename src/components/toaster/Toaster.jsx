import React, { useEffect } from 'react'
import './Toaster.css'
import Loader from '../loader/Loader.jsx'
import { createPortal } from 'react-dom'

export default function Toaster({ message }) {
  useEffect(() => {
    const createToaster = (text) => {
      // Get the snackbar DIV
      var toaster = document.getElementById('snackbar')
      var mySVG = document.getElementById('mySVG')
      var triangle = document.getElementById('triangle')
      var length = triangle.getTotalLength()
      const paginationBtns = document.querySelectorAll('.pagination button')
      // Set up stroke-dash properties
      triangle.style.strokeDasharray = length
      triangle.style.strokeDashoffset = length

      if (mySVG) {
        // alert("SVG");
        mySVG.style.setProperty('height', '100px')
        mySVG.style.setProperty('width', '100px')
        mySVG.style.setProperty('padding', '1rem')
        mySVG.style.setProperty('background-color', 'transparent')
        mySVG.style.setProperty('border', '2px solid white')
        mySVG.style.setProperty('z-index', '9999')
        mySVG.style.setProperty('margin', 'auto')
        mySVG.style.setProperty('border-radius', '50%')
        mySVG.style.setProperty('display', 'flex')
        mySVG.style.setProperty('align-items', 'center')
        mySVG.style.setProperty('justify-content', 'center')
      }
      // Animation
      let start

      const drawLine = (timestamp) => {
        if (!start) start = timestamp

        // Calculate progress based on time elapsed
        const elapsed = timestamp - start
        const progress = Math.min(elapsed / 1000, 1) // Animate over 2 seconds (2000ms)

        // Update strokeDashoffset based on progress
        triangle.style.strokeDashoffset = length * (1 - progress)

        if (progress < 1) {
          requestAnimationFrame(drawLine)
        }
      }

      // Start animation
      requestAnimationFrame(drawLine)

      // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled

      // Add the "show" class to DIV
      toaster.classList.add('show')
      toaster.textContent = text
      mySVG.append(triangle)
      toaster.append(mySVG)

      // After 3 seconds, remove the show class from DIV
      const timeoutId = setTimeout(function () {
        toaster.classList.remove('show')
      }, 3000)

      return () => {
        clearTimeout(timeoutId)
      }
    }

    createToaster(message)
  }, [message])

  return createPortal(
    <div id="snackbar" style={{ zIndex: 9999, position: 'fixed' }}>
      <svg
        id="mySVG"
        width="5"
        height="5"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="green"
          stroke-width="3"
          id="triangle"
          d="M5 25 L20 40 L45 10"
        />
      </svg>
      {/* <Loader/> */}
      {message}
    </div>,
    document.body
  )
}
