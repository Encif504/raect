import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-scroll'
import Carousel from './Carousel'

function Landing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 py-6 font-sans" id="home" name="home">
      <section className="relative mt-12 bg-cover bg-center rounded-lg overflow-hidden h-96 md:h-128" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-12 md:p-20 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg transition-all duration-500 ease-in font-serif">Fresh, Sustainable Produce Straight from our farm</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto leading-relaxed text-2xl font-sans">Discover our range of eggs, fish, broilers, ex-layers, honey, dried black soldier flies, maggots, larvae and nutrient-rich chicken droppings.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
            <Link to="projects" smooth={true} duration={500} className="px-6 py-3  text-yellow-400 font-bold rounded shadow-lg hover:from-amber-700 outline-1 outline-solid outline-amber-50 hover:to-amber-900 transition">Explore Now →</Link>
            <Link to="products" smooth={true} duration={500} className="px-6 py-3 bg-white dark:bg-gray-300 text-amber-800 rounded-sm shadow-lg hover:bg-gray-100 transition">View Products →</Link>
          </div>
        </div>
      </section>

     <div className='place-items-center w-full mt-8 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-extrabold text-amber-900 mb-6 dark:text-amber-400 font-serif'>Our Products</h2>
      <Carousel />
      <Link to="products" smooth={true} duration={500} className="mt-6 inline-block px-6 py-3 bg-amber-800 text-white rounded-md shadow hover:bg-amber-900 transition">Compare prices →</Link>
     </div>
     
     
      <section className='grid md:flex mt-10 gap-8 px-4 sm:px-6 py-6 rounded-lg bg-white shadow-lg dark:bg-gray-400'>
        <p className='text-justify px-8 py-6 bg-gray-100 rounded-lg shadow-inner text-gray-800 text-xl dark:text-white dark:bg-gray-600 font-sans'>
          At Grannada Farm we are committed to sustainable farming practices. Our family-run operation focuses on ethical raising of poultry, fish, and bees, while innovating with black soldier fly production for eco-friendly protein and waste management. We turn chicken droppings into valuable fertilizer to support local farms.
        </p>
        <div className='flex justify-center'>
          <img src="images/granfarm.jpg" alt="layers unit" className='rounded-lg shadow-md max-w-full'loading='lazy' />
        </div>
      </section>
      <section className='mt-16 px-4 sm:px-6 lg:px-8'>

        <h2 className='font-extrabold text-4xl text-amber-900 text-center dark:text-amber-300 font-serif'>Why choose us</h2>
        <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 p-8 rounded-xl text-center shadow-lg border border-amber-200 dark:border-amber-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="bg-amber-200 dark:bg-amber-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            <img src="/images/fresh.png" alt="fresh" className='w-10 h-10' loading='lazy'/>
          </div>
          <h3 className="text-amber-900 dark:text-amber-200 font-bold mb-3 text-xl font-serif">Freshness</h3>
          <p className='text-gray-700 dark:text-gray-200 font-sans px-2'>Directly from farm to you. No middlemen</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 p-8 rounded-xl text-center shadow-lg border border-amber-200 dark:border-amber-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="bg-amber-200 dark:bg-amber-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            <img src='/images/chickenvga.png' alt='chicken' className='w-10 h-10' loading='lazy'></img>
          </div>
          <h3 className="text-amber-900 dark:text-amber-200 font-bold mb-3 text-xl font-serif">Variety</h3>
          <p className='text-gray-700 dark:text-gray-200 font-sans px-2'>One-stop shop for poultry, fish, honey and eggs</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 p-8 rounded-xl text-center shadow-lg border border-amber-200 dark:border-amber-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="bg-amber-200 dark:bg-amber-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            <img src="/images/feedback.png" alt="feedback" className='w-10 h-10' loading='lazy' />
          </div>
          <h3 className="text-amber-900 dark:text-amber-200 font-bold mb-3 text-xl font-serif">100+ Customers</h3>
          <p className='text-gray-700 dark:text-gray-200 font-sans px-2'>Growing demand for our products</p>
        </div>
      </section>
      </section>
      <footer className='bg-gradient-to-r from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600 mt-16 rounded-xl py-8 px-6 border border-amber-300 dark:border-amber-600'>
        <h3 className='text-amber-900 dark:text-amber-100 text-2xl md:text-3xl font-bold text-center mb-6 font-serif'>Let's Have a Talk</h3>
         <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">

          
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 dark:bg-amber-700 p-2 rounded-full">
                  <img src="/images/email.png" alt="email" className="w-5 h-5"/>
                </div>
                <a href="mailto:grannada.enterprise@gmail.com" className="text-amber-800 dark:text-amber-200 font-semibold hover:text-amber-600 dark:hover:text-amber-300 font-sans">
                  grannada.enterprise@gmail.com
                </a></div>
                
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 dark:bg-amber-700 p-2 rounded-full">
                  <img src="/images/phone.png" alt="phone" className="w-5 h-5"/>
                </div>
                <a href="tel:0740207040" className="text-amber-800 dark:text-amber-200 font-semibold hover:text-amber-600 dark:hover:text-amber-300 font-sans">
                  0740 207 040
                </a>

              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 dark:bg-amber-700 p-2 rounded-full">
                  <img src="/images/facebook.png" alt="facebook" className="w-5 h-5"/>
                </div>
                <span className="text-amber-800 dark:text-amber-200 font-semibold font-sans">Grannada Farm</span></div>
            </div>
      </footer>
      
      
    </div>
  );
}

export default Landing;