import React from 'react'

export default function TooltipContainer({ children, x, y, contentRef }) {
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        height: 'max-content',
        width: 'max-content',
        backgroundColor: 'black',
        color: 'white',
        padding: '1rem',
        borderRadius: '10px',
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}
