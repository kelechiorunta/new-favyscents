import React, { useImperativeHandle, useRef, useState } from 'react'
import Toaster from '../toaster/Toaster';

export default function MultiStepIndicator({ref}) {
    const progressRef = useRef(null);
    const triangleRef = useRef(null);
    const mySVGRef = useRef(null);
    const [value, setValue] = useState(0);
    const [toaster, setToaster] = useState(null);
  
   function animateToast() {
    // alert("Hello")
        const toaster = document.getElementById("snackbar");
        const mySVG = document.getElementById("mySVG");
        const triangle = document.getElementById("triangle");
  
        if (!triangleRef.current) return; // Ensure element exists before using getTotalLength
        const length = triangleRef.current.getTotalLength();
        const paginationBtns = document.querySelectorAll(".pagination button");
  
        // Set up stroke-dash properties
        triangleRef.current.style.strokeDasharray = length;
        triangleRef.current.style.strokeDashoffset = length;
  
        triangleRef.current.style.stroke="transparent" 
        triangleRef.current.style.strokeWidth="7"
        
        if (mySVGRef.current) {
          mySVGRef.current.style.cssText = `
            height: 100px;
            width: 100px;
            padding: 1rem;
            background-color: transparent;
            
            margin: auto;
            border-radius: 50%;
            position: absolute;
            top: calc(75% - 50px);
            left: -5.5%;
            display: flex;
            align-items: center;
            justify-content: center;
          `;
        }
  
        let start;
  
        const drawLine = (timestamp) => {
          if (!start) start = timestamp;
  
          // Calculate progress based on time elapsed
          const elapsed = timestamp - start;
          const progress = Math.min(elapsed / 1000, 1); // Animate over 1 second (1000ms)
  
          // Update strokeDashoffset based on progress
          triangleRef.current.style.strokeDashoffset = length * (1 - progress);
          
          if (progress < 1) {
            setToaster(false);
            triangleRef.current.style.stroke="green" 
            triangleRef.current.style.strokeWidth="7"
            requestAnimationFrame(drawLine);
          } else {
            setToaster(true);
          }
        };
  
        requestAnimationFrame(drawLine);
  
        // // Append elements
        // if (mySVG && toaster) {
        //   mySVG.append(triangle);
        //   toaster.append(mySVG);
        // }
      }

    useImperativeHandle(ref, () => ({
        animateIndicatorOne() {
            let startTime = null;
            let requestId;
      
            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
      
              const progress = Math.min((timestamp - startTime) * 0.1, 100); // Ensure it maxes at 100%
      
              setValue(progress); // Update state
              if (progressRef.current) {
                progressRef.current.value = progress; // Update progress bar
              }
      
              if (progress < 100) {
                requestId = requestAnimationFrame(animate);
                
                // triangleRef.current.style.strokeDashoffset = 30;//length //* (1 - progress);
              } else {
                // setToaster(true);
                cancelAnimationFrame(requestId);
                animateToast(); // Call animateToast after completion
              }
            };
      
            requestAnimationFrame(animate);
          },

    }), []);
    return (
    <div>
        <h1>MultiStepIndicator</h1>
        <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <progress ref={progressRef} value={value} max={100}/>
            <div style={{backgroundColor: 'white', marginLeft: '-200px', position: 'relative', borderRadius: '50%', border: '2px solid black', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg ref={mySVGRef} id="mySVGs" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        ref={triangleRef}
                        fill="none" 
                        // stroke="green" 
                        // stroke-width="3" 
                        id="triangles" 
                        d="M5 25 L20 40 L45 10" 
                    />
                </svg>
            </div>
            <p style={{position: 'absolute', top: '100%', left: '46.75%'}}>Shipping</p>
        </div>
        
        {toaster && <Toaster message={"Complete"}/>}
    </div>
  )
}
