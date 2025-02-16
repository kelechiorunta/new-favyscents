import React, { createContext, useEffect, useContext, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";

// Create context
const ViewContext = createContext();

// Provider component
export function ViewProvider({ children }) {
  const [viewState, setViewState] = useState({});

  const updateViewState = useCallback((id, inView) => {
    setViewState((prev) => ({ ...prev, [id]: inView }));
  }, []);

  return (
    <ViewContext.Provider value={{ viewState, updateViewState }}>
      {children}
    </ViewContext.Provider>
  );
}

// Custom hook to use ViewContext
export function useViewChild(id) {
  const { viewState, updateViewState } = useContext(ViewContext);
  const { ref, inView } = useInView(
    { threshold: [0], 
      triggerOnce: true,
      // initialInView
      rootMargin:'100px',
      root: null, 
      delay:'500',
      // onChange:(inView, entry) => {
      //   // alert(entry.target.id)
      // },

     });

  useEffect(() => {
    updateViewState(id, inView);
  }, [id, inView, updateViewState]);

  return { ref, inView, isVisible: viewState[id] || false };
}

// Example component using the hook
export function ViewChild({ id, children, animateStyle }) {
  const { ref, isVisible } = useViewChild(id);

  const dynamicStyle = {
    // zIndex: -999,
    opacity: isVisible ? "1" : "0",
    transform: isVisible ? "translateY(0px)" : "translateY(200px)",
    transition: "opacity 1s ease, transform 1s ease",
    ...animateStyle, // Allow overriding or extending styles
  };

  return (
    <div ref={ref}
         style={dynamicStyle}
    >
      {console.log(`Component ${id} is in view: ${isVisible}`)}
      {children}
    </div>
  );
}

