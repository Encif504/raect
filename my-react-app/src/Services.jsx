import React from 'react'

function Services() {
  const services = [
    { title: 'Eggs per Tray', price: 'Ksh 380 per crate', desc: 'Our eggs are collected daily to ensure freshness and strong shell quality. They are ideal for households, retailers, and bulk buyers seeking reliable supply.', img: '/images/eggs.png' },
    { title: 'Broiler Chicken', price: 'Ksh 450 per head', desc: 'Our broilers are raised under proper care to ensure healthy growth and quality meat. They are supplied fresh to meet local market demand.', img: '/images/broiler.jpg' },
    { title: 'Improved Kienyeji Chicken', price: 'Ksh 500 from 9 weeks', desc: 'Our hybrid chickens are hardy, adaptable, and suitable for both meat and egg production. We offer both chicks and mature birds depending on customer needs.', img: '/images/improved-.jpg' },
    
    { title: 'Tilapia', price: 'Ksh 400 per kg', desc: 'Tilapia thrive in warm waters and offer a mild, popular flavor. Our fish are raised in clean, well managed systems to ensure healthy growth.', img: '/images/Tilapia.jpg' },
    { title: 'Honey', price: 'Ksh 1000 per kg', desc: 'Our honey is pure, natural, and produced by our healthy bee colonies. It is rich in flavor and ideal for consumption or gift giving.', img: '/images/Honey.jpg' },
    {title: ' Dried grinded Black Soldier Flies', price: 'Ksh 1000 per kg', desc: 'Our dried Black Soldier Flies are high in protein and ideal for feeding poultry and fish. ', img: '/images/bsf.jpg'},
    {title: 'Live Black Soldier Fly Maggots', price: 'Ksh 750 per kg', desc: 'Our live maggots are a sustainable, high protein feed option for poultry and fish. They are produced through our waste management system.', img: '/images/maggots.jpg'},
    {title: 'Black Soldier Fly Eggs', price: 'Ksh 1000 per kg', desc: 'Our Black Soldier Fly eggs are used to hatch maggots for sustainable feed production. They are produced through our eco-friendly farming practices.', img: '/images/bsfeggs.jpg'},
    {title: 'Chicken waste', price: 'Ksh 750 per 50kg', desc: 'Our chicken waste is nutrient rich and ideal for use as manure or in agricultural applications. It is produced through our sustainable farming practices.', img: '/images/manure.jpg'}
  ]

  return (
    <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="bg-[url('/images/eggs.png')] bg-cover bg-center rounded p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 bg-amber-50 inline-block px-3 py-1 rounded">Our Products </h2>
      </header>

      <p className="mt-6 bg-grey-200 text-gray-700 max-w-3xl mx-auto text-center leading-relaxed  shadow-xl px-8 py-4">
       Our products reflect the hard work, care, and commitment that define our farm. Every item we offer is produced with attention to quality, sustainability, and the needs of our local community. From fresh food products to value added farm resources, we ensure that what leaves our farm meets high standards and delivers real value to our customers.
      </p>

      <section className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="flex gap-4 bg-white rounded shadow p-4 items-start">
            <img src={s.img} alt={s.title} loading='lazy' className="w-24 h-24 object-cover rounded" />
            <div>
              <h3 className="text-lg font-extrabold text-amber-900">{s.title}</h3>
              <div className="text-sm font-semibold text-gray-800">{s.price}</div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>
      {/* consultation and tour offer */}
      <section className="mt-8  from-amber-50 to-amber-100 rounded-lg p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-amber-900 mb-2">Looking for expert advice or a visit?</h3>
          <p className="text-gray-700 leading-relaxed">
            We offer <span className="font-semibold">Black Soldier Fly farming consultation</span> and <span className="font-semibold">guided farm tour visits</span>.
            Reach out to us to learn more about sustainable farming or to book a tour of our facilities.
          </p>
        </div>
        <div className="flex-1">
          {/* optional illustrative image */}
          <img src="/images/layers.jpg" alt="farm tour" className="w-full rounded shadow-md" loading='lazy'/>
        </div>
      </section>
    </div>
  )
}

export default Services;
