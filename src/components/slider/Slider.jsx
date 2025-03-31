import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// import { Carousel } from '../recommended/Recommended';
import { Carousel } from '../carousel/Carousel.jsx'

export default function Slider({
  refId,
  carousels,
  direction,
  currentIndex,
  prevIndex,
}) {
  const sliderVariants = {
    incoming: (direction) => ({
      x: direction === 'right' ? '200%' : '0%',
      scale: 1.2,
      opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1, zIndex: 150 },
    exit: (direction) => ({
      x: direction !== 'right' ? '-200%' : '0%',
      scale: 1,
      opacity: 0.2,
    }),
  }

  const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04],
  }

  return (
    <AnimatePresence custom={direction}>
      {carousels.map((carousel, indx) => (
        <motion.div
          key={indx}
          variants={sliderVariants}
          // custom={direction}
          initial="incoming"
          animate={currentIndex === indx ? 'active' : 'incoming'}
          exit="exit"
          transition={sliderTransition}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 50,
            overflowX: 'hidden',
          }}
          // initial={direction === "right" && indx===currentIndex? "hiddenRight" : "hiddenLeft"}
          // animate={'visible'}
          // exit={'exit'}
        >
          {/* <motion.div> */}
          <Carousel
            refId={refId}
            id={carousel.id}
            brands={carousel.brands}
            gender={carousel.gender}
            title={carousel.title}
          />
          {/* </motion.div> */}

          {/* {carousel} */}
        </motion.div>
      ))}
    </AnimatePresence>
  )
}
