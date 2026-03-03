import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-scroll'
import Carousel from './Carousel'

function Landing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans" id="home" name="home">
      <section className="relative mt-12 bg-cover bg-center rounded-lg overflow-hidden h-96 md:h-128" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-12 md:p-20 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg">Fresh, Sustainable Produce Straight from our farm</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto leading-relaxed">Discover our range of eggs, fish, broilers, ex-layers, honey, dried black soldier flies, maggots, larvae and nutrient-rich chicken droppings.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
            <Link to="projects" smooth={true} duration={500} className="px-6 py-3 bg-linear-to-r from-amber-600 to-amber-800 text-white rounded-full shadow-lg hover:from-amber-700 hover:to-amber-900 transition">Explore Now →</Link>
            <Link to="products" smooth={true} duration={500} className="px-6 py-3 bg-white text-amber-800 rounded-full shadow-lg hover:bg-gray-100 transition">View Products →</Link>
          </div>
        </div>
      </section>

     <div className='place-items-center w-full mt-16 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-4xl font-extrabold text-amber-900 mb-8'>Our Products</h2>
      <Carousel />
      <Link to="products" smooth={true} duration={500} className="mt-6 inline-block px-6 py-3 bg-amber-800 text-white rounded-full shadow hover:bg-amber-900 transition">Compare prices →</Link>
     </div>
     
     
      <section className='grid md:flex mt-16 gap-8 px-4 sm:px-6 py-6 rounded-lg bg-white shadow-lg'>
        <p className='text-justify px-8 bg-gray-100 rounded-lg shadow-inner text-gray-800'>
          At Grannada Farm we are committed to sustainable farming practices. Our family-run operation focuses on ethical raising of poultry, fish, and bees, while innovating with black soldier fly production for eco-friendly protein and waste management. We turn chicken droppings into valuable fertilizer to support local farms.
        </p>
        <div className='flex justify-center'>
          <img src="images/granfarm.jpg" alt="layers unit" className='rounded-lg shadow-md max-w-full' />
        </div>
      </section>
      <section className='mt-16 px-4 sm:px-6 lg:px-8'>

        <h2 className='font-extrabold text-4xl text-amber-900 text-center'>Why choose us</h2>
        <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-8 rounded-lg text-center shadow hover:shadow-xl transition">
          <img src="/images/fresh.png" alt="fresh" className='mx-auto mb-4 w-20 h-20' />
          <h3 className="text-amber-800 font-bold mb-2">Freshness</h3>
          <p className='text-gray-600'>Directly from farm to you. No middlemen</p>
        </div>
        <div className="bg-white p-8 rounded-lg text-center shadow hover:shadow-xl transition">
          <img src='/images/chickenvga.png' alt='chicken' className='mx-auto mb-4 w-20 h-20'></img>
          <h3 className="text-amber-800 font-bold mb-2">Variety</h3>
          <p className='text-gray-600'>One-stop shop for poultry, fish, honey and more</p>
        </div>
        <div className="bg-white p-8 rounded-lg text-center shadow hover:shadow-xl transition">
          <img src="/images/feedback.png" alt="feedback" className='mx-auto mb-4 w-20 h-20'/>
          <h3 className="text-amber-800 font-bold mb-2">100+ Customers</h3>
          <p className='text-gray-600'>Growing demand for our products</p>
        </div>
      </section>
      </section>
      <footer className='bg-amber-100 outline-4 outline-solid place-items-center mt-16 rounded-lg py-12 px-8'>
        <h3 className='text-white text-3xl bg-amber-800 px-6 py-3 rounded mb-8 inline-block'>Let's have a talk</h3>
         <div className="mt-8 space-y-4 rounded flex flex-col md:flex-row gap-4 justify-between items-center">

          
              <div className="rounded px-4 py-2 flex text-yellow-400 items-center">
               |
                <small className="px-4 font-bold text-yellow-700 text-base">grannada.farm@gmail.com</small></div>
                
              <div className="rounded px-4 py-2 flex text-yellow-400 items-center">
               |
                <small className="text-base px-4 font-bold text-yellow-700">0740207040</small>

              </div>
              <div className="rounded px-4 py-2 flex text-yellow-400 items-center">
                |
                <small className="px-4 font-bold text-yellow-700 text-base">Grannada Farm</small></div>
            </div>
      </footer>
      
      
    </div>
  );
}

export default Landing;