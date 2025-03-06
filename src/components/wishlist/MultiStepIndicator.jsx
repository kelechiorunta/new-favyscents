import React, { useImperativeHandle, useRef, useState } from 'react'

export default function MultiStepIndicator({ref}) {
    const progressRef = useRef(null);
    const [value, setValue] = useState(0);
  
    useImperativeHandle(ref, () => ({
      animateIndicator() {
        let startTime = null;
        let requestId
  
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
  
          const progress = Math.min((timestamp - startTime) * 0.1, 100); // Ensure it maxes at 100%
  
          setValue(progress); // Update state
          if (progressRef.current) {
            progressRef.current.value = progress; // Update progress bar
          }
  
          if (progress < 100) {
            requestId = requestAnimationFrame(animate);
          }
        //   cancelAnimationFrame(requestId)
        };
  
        requestAnimationFrame(animate);
      }
    }), []);
    return (
    <div>
        <h1>MultiStepIndicator</h1>
        <progress ref={progressRef} value={value} max={100}/>

    </div>
  )
}
