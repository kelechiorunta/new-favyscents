import React, { useImperativeHandle, useRef } from 'react'

export default function MyInput({ ref }) {
  const myinputRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      focus() {
        let start
        let progress
        let requestId
        // myinputRef.current.style.marginLeft = `(${-900}px)`
        const animateNode = (timeStamp) => {
          if (!start || progress >= 1600) {
            start = timeStamp
          }
          progress = (timeStamp - start) / 10 + 10
          myinputRef.current.focus()
          myinputRef.current.style.display = 'block'
          myinputRef.current.style.transform = `translateX(${progress}px)`

          // if (progress < 200) {
          requestId = requestAnimationFrame(animateNode)
          // }
        }

        requestAnimationFrame(animateNode)
      },
    }
  }, [])
  return (
    <div>
      <input
        style={{ marginLeft: '-150px' }}
        type="text"
        name="my-input"
        ref={myinputRef}
      />
    </div>
  )
}
