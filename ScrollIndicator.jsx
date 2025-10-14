import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator after some scroll activity
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set a timeout to hide the indicator after a few seconds if no scroll happens
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="scroll-indicator">
      <span>Role para baixo para explorar!</span>
      <span className="arrow-down">⬇️</span>
    </div>
  );
};

export default ScrollIndicator;

