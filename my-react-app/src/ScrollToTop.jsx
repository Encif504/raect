import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTop() {
  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 500 })}
      className="fixed bottom-3 right-3 px-4  bg-amber-700 text-white rounded shadow-lg hover:bg-amber-800 focus:outline-none"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;