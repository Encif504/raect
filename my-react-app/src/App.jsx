import { useEffect, useState, useRef } from 'react'

import Navbar from './NavBar';
import Landing from './Landing';
import About from './About';
import Services from './Services';
import Contacts from './Contact';
import Projects from './Projects';
import ScrollToTop from './ScrollToTop';



function App() {
  return (
    
    <div className="relative min-h-screen pt-16 w-full">
      <Navbar />
      
      <section id="home" name="home" className='mt-2'>
        <Landing />
      </section>
      <section id="about" name="about" className='mt-6'>
        <About />
      </section>
      <section id="products" name="products" className='mt-6'>
        <Services />
      </section>
      <section id="contact" name="contact" className='mt-6'>
        <Contacts />
      </section>
      <section id="projects" name="projects" className='mt-6'>
        <Projects />
      </section>
      <ScrollToTop />
    </div>
  );
}

export default App;
