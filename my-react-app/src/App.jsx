import { useEffect, useState, useRef } from 'react'

import Navbar from './NavBar';
import Landing from './Landing';
import About from './About';
import Services from './Services';
import Contacts from './Contact';
import Projects from './Projects';
import ScrollToTop from './ScrollToTop';



function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    
    <div className="relative min-h-screen pt-16 w-full">
      <Navbar />
      
      <section id="home" name="home" className='scroll-reveal mt-2'>
        <Landing />
      </section>
      <section id="about" name="about" className='scroll-reveal mt-6'>
        <About />
      </section>
      <section id="products" name="products" className='scroll-reveal mt-6'>
        <Services />
      </section>
      <section id="contact" name="contact" className='scroll-reveal mt-6'>
        <Contacts />
      </section>
      <section id="projects" name="projects" className='scroll-reveal mt-6'>
        <Projects />
      </section>
      <ScrollToTop />
    </div>
  );
}

export default App;
