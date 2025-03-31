import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// import { Carousel } from '../recommended/Recommended';
// import { Carousel } from '../carousel/Carousel.jsx';
import { TestimonialCarousel } from '../testimonials/TestimonialCarousel.jsx'

export default function TestimonialSlider({
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
            width: 'max-content',
            // height: '100%',
            zIndex: 50,
            overflow: 'hidden',
          }}
          // initial={direction === "right" && indx===currentIndex? "hiddenRight" : "hiddenLeft"}
          // animate={'visible'}
          // exit={'exit'}
        >
          {/* <motion.div> */}
          <TestimonialCarousel
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
