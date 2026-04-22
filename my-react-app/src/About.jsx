const  products=['Fresh eggs','Ex layers','Hybrid chicken','Honey','Fish','Dried Black Soldier Flies','Black Soldier Fly maggots','Black Soldier Fly eggs','Chicken waste']



function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="#about">
      <section className="rounded overflow-hidden">
        <div className="relative bg-cover bg-center rounded" style={{ backgroundImage: "url('/images/improvedh.jpg')" }}>
          <div className="frost p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-amber-300 font-serif">About Our farm</h2>
            <p className="text-white font-semibold mt-2 bg-grey-600 rounded font-sans">We are a family owned farm built on hard work, trust, and a deep respect for nature. What started in 2020 as a simple idea has grown into a thriving, community focused farm that we are proud to call our own.
From the beginning, our goal was clear: produce healthy food in a way that is responsible, sustainable, and beneficial to the people around us. Every decision we make reflects that commitment.</p>
          </div>
        </div>
      </section>

      <section className="mt-8 max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className=" dark:text-amber-300 text-2xl md:text-3xl font-extrabold text-amber-900 font-serif">Rooted in Sustainability</h2>
        <p className="rounded dark:bg-gray-400 dark:text-black mt-4 text-gray-700 leading-relaxed bg-gray-200 px-4 py-4 font-sans">
         We believe farming should work with nature, not against it. That is why we invested in solar energy to power our operations. Clean energy keeps our farm running efficiently while reducing our environmental footprint.
          We also use Black Soldier Flies as part of our waste management system. These remarkable insects help us convert organic waste into valuable protein and nutrient rich byproducts. Instead of waste piling up, it becomes part of a natural cycle that supports our poultry and fish production. Nothing goes to waste. Everything has purpose.
        </p>
      </section>
       <section className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-amber-900 dark:text-amber-300 font-serif">Serving our local community</h2>
        <p className="rounded mt-4 dark:bg-gray-400 dark:text-black text-gray-700 leading-relaxed bg-gray-200 px-4 py-4 font-sans">
        Our farm proudly supplies fresh, high quality products to the local community. We value the relationships we have built with our customers over the years. Many of them have supported us from the beginning, and we do not take that trust lightly.
        When you buy from us, you are not just purchasing food. You are supporting a local family business that believes in transparency, quality, and care.
        </p>
      </section>
      <section className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:flex gap-4 justify-around">
        <div>
           <h2 className="text-2xl md:text-3xl font-extrabold text-amber-900 dark:text-amber-300 font-serif">What we offer</h2>
        <ul className="list-disc pl-5 bg-gray-200 dark:bg-gray-400 dark:text-black px-4 py-4 rounded font-sans">
          {products.map((product,index)=>(
            <li key={index}>{product}</li>
          ))}
        </ul>

        </div>
        <div className="flex justify-center mt-6 md:mt-0">
          <img src="/images/improved-.jpg" alt="chicken" className="rounded w-full max-w-md" />
        </div>
        
        
      </section>

      <section className="mt-8">
        <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-amber-900 dark:text-amber-300 font-serif">Our Promise</h2>
        <p className=" rounded mt-4 text-gray-700 leading-relaxed dark:bg-gray-400 dark:text-black px-4 py-4 font-sans">
       We are more than a farm. We are a family working every day to build something meaningful. Since 2020, we have continued to grow, learn, and improve while staying true to our values.
      We remain dedicated to sustainable farming, community support, and delivering products you can trust.
        </p>
      </section>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 p-6 rounded-xl shadow-lg border border-amber-200 dark:border-amber-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-2 font-serif">Sustainability</h3>
          <p className="text-gray-700 dark:text-gray-200 font-sans text-sm">We use sustainable farming practices that protect the environment for future generations.</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 p-6 rounded-xl shadow-lg border border-amber-200 dark:border-amber-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-2 font-serif">Quality</h3>
          <p className="text-gray-700 dark:text-gray-200 font-sans text-sm">Our products are produced with focus on healthy farming practices to ensure safe and reliable food.</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 p-6 rounded-xl shadow-lg border border-amber-200 dark:border-amber-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-2 font-serif">Freshness</h3>
          <p className="text-gray-700 dark:text-gray-200 font-sans text-sm">Our products are carefully handled to maintain their natural quality ensuring they reach customers in best condition.</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 p-6 rounded-xl shadow-lg border border-amber-200 dark:border-amber-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-2 font-serif">Community</h3>
          <p className="text-gray-700 dark:text-gray-200 font-sans text-sm">We value our local community and build lasting relationships with customers who trust our products.</p>
        </div>
      </section>

      <section className="mt-8 bg-gradient-to-r from-amber-700 to-amber-800 rounded-xl p-8 text-center border border-amber-600">
        <h3 className="text-2xl font-bold text-amber-200 mb-3 font-serif">Visit Our Farm</h3>
        <p className="text-amber-100 mb-6 font-sans">We welcome visitors to see firsthand how we raise our animals. Contact us to schedule your visit!</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="tel:0740207040" className="flex items-center gap-3 bg-white text-amber-900 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
            <img src="/images/phone.png" alt="phone" className="w-5 h-5"/>
            0740 207 040
          </a>
          <a href="mailto:grannada.enterprise@gmail.com" className="flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
            <img src="/images/email.png" alt="email" className="w-5 h-5"/>
            Email Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default About;
