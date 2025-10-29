import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css'; // Você precisará criar este arquivo CSS

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (hasScrolled) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Desaparece 3 segundos após o primeiro scroll
      return () => clearTimeout(timer);
    }
  }, [hasScrolled]);

  if (!isVisible) return null;

  return (
    <div className={`scroll-indicator ${hasScrolled ? 'fade-out' : 'fade-in'}`}>
      <p>Role para baixo e descubra Temperópolis! 👇</p>
    </div>
  );
};

export default ScrollIndicator;
