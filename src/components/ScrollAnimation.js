import React, { useEffect, useRef } from 'react';

function ScrollAnimation({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInUp');
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="scroll-animation">
      {children}
    </div>
  );
}

export default ScrollAnimation;
