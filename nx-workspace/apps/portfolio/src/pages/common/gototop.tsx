// GoToTopButton.js
import React, { useState, useEffect } from 'react';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import Tooltip from '@mui/material/Tooltip';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 p-2 prime-color text-white rounded-full transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
        <Tooltip title="Go To Top">           
            <ArrowCircleUpSharpIcon/>
        </Tooltip>
      
    </button>
  );
};

export default GoToTopButton;
