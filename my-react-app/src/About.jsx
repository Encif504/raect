const  products=['Fresh eggs','Ex layers','Hybrid chicken','Honey','Fish','Dried Black Soldier Flies','Black Soldier Fly maggots','Black Soldier Fly eggs','Chicken waste']



function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="#about">
      <section className="rounded overflow-hidden">
        <div className="relative bg-cover bg-center rounded" style={{ backgroundImage: "url('/images/improvedh.jpg')" }}>
          <div className="frost p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-amber-300">About Our farm</h2>
            <p className="text-white font-semibold mt-2 bg-grey-600 rounded">We are a family owned farm built on hard work, trust, and a deep respect for nature. What started in 2020 as a simple idea has grown into a thriving, community focused farm that we are proud to call our own.
From the beginning, our goal was clear: produce healthy food in a way that is responsible, sustainable, and beneficial to the people around us. Every decision we make reflects that commitment.</p>
          </div>
        </div>
      </section>

      <section className="mt-8 max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className=" dark:text-amber-300 text-2xl md:text-3xl font-extrabold text-amber-900">Rooted in Sustainability</h2>
        <p className="rounded dark:bg-gray-400 dark:text-black mt-4 text-gray-700 leading-relaxed bg-gray-200 px-4 py-4 ">
         We believe farming should work with nature, not against it. That is why we invested in solar energy to power our operations. Clean energy keeps our farm running efficiently while reducing our environmental footprint.
          We also use Black Soldier Flies as part of our waste management system. These remarkable insects help us convert organic waste into valuable protein and nutrient rich byproducts. Instead of waste piling up, it becomes part of a natural cycle that supports our poultry and fish production. Nothing goes to waste. Everything has purpose.
        </p>
      </section>
       <section className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-amber-900 dark:text-amber-300">Serving our local community</h2>
        <p className="rounded mt-4 dark:bg-gray-400 dark:text-black text-gray-700 leading-relaxed bg-gray-200 px-4 py-4">
        Our farm proudly supplies fresh, high quality products to the local community. We value the relationships we have built with our customers over the years. Many of them have supported us from the beginning, and we do not take that trust lightly.
        When you buy from us, you are not just purchasing food. You are supporting a local family business that believes in transparency, quality, and care.
        </p>
      </section>
      <section className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:flex gap-4 justify-around">
        <div>
           <h2 className="text-2xl md:text-3xl font-extrabold text-amber-900 dark:text-amber-300">What we offer</h2>
        <ul className="list-disc pl-5 bg-gray-200 dark:bg-gray-400 dark:text-black px-4 py-4 rounded">
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
        <h2 className="text-2xl md:text-3xl font-extrabold text-amber-900 dark:text-amber-300">Our Promise</h2>
        <p className=" rounded mt-4 text-gray-700 leading-relaxed dark:bg-gray-400 dark:text-black px-4 py-4">
       We are more than a farm. We are a family working every day to build something meaningful. Since 2020, we have continued to grow, learn, and improve while staying true to our values.
      We remain dedicated to sustainable farming, community support, and delivering products you can trust.
        </p>
      </section>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-amber-800 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-amber-300 ">Sustainability</h3>
          <p className=" px-4  py-2 rounded mt-2 dark:bg-gray-400 dark:text-black text-gray-700 bg-gray-200">We use sustainable farming practices that protect the environment for future generations.</p>
        </div>
        <div className="bg-amber-800 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-amber-300">Quality</h3>
          <p className="mt-2 dark:bg-gray-400 dark:text-black  text-gray-700 px-4  py-2 rounded bg-gray-200">Our products are produced with focus on healthy farming practices to ensure safe and reliable food.</p>
        </div>
        <div className="bg-amber-800 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-amber-300">Freshness</h3>
          <p className="mt-2 text-gray-700 px-4 dark:bg-gray-400 dark:text-black  py-2 rounded bg-gray-200">Our products are  carefully handled to mantain their natural quality ensuring thye reach customers in their best condition.</p>
        </div>
         
      </section>

      <section className="mt-8 bg-amber-800 text-white rounded p-6 text-center">
        <h3 className="text-xl font-bold text-amber-300 underl ine">Visit our farm</h3>
        <p className="mt-2 bg-amber-700 rounded md:w-fit md:px-6 ">We welcome visitors to see firsthand how we raise our animals by contacting us.</p>
        <p className=" md:w-fit frost mt-3  px-4 py-2 outline-1 outline-solid outline-white rounded  font-2xl font-bold">0740207040</p>
        
      </section>
    </div>
  )
}

export default About;
