import { useState, useEffect, useRef } from "react"

const products = [
  { id: 1, name: "Pure Honey", price: "Ksh 950/kg", image: "/images/Honey.jpg" },
  { id: 2, name: "Egg Tray", price: "Ksh 380", image: "/images/eggs.jpg" },
  { id: 3, name: "Broiler", price: "Ksh 450", image: "/images/broiler.jpg" },
  { id: 4, name: "Improved Kienyeji", price: "Ksh 900-1200", image: "/images/improvedh.jpg" },
  { id: 5, name: "Ex-layer", price: "Ksh 600/kg", image: "/images/improved-.jpg" },
  { id: 6, name: "Tilapia", price: "Ksh 400/kg", image: "/images/Tilapia.jpg" },
  { id: 7, name: "Black Soldier Fly & Products", price: "Dried-1000kg, egg-1000/g, maggots-750", image: "/images/bsf.jpg" },
  
]

 function Carousel() {
  const [index, setIndex] = useState(1)
  const [transition, setTransition] = useState(true)
  const intervalRef = useRef(null)

  // Clone first and last slide for infinite effect
  const extendedProducts = [
    products[products.length - 1],
    ...products,
    products[0]
  ]

  // Auto slide
  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex(prev => prev + 1)
    }, 3000)
  }

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current)
  }

  // Infinite logic
  const handleTransitionEnd = () => {
    if (index === extendedProducts.length - 1) {
      // moved onto clone of first slide, jump to real first
      setTransition(false)
      setIndex(1)
    }

    if (index === 0) {
      // moved onto clone of last slide, jump to real last
      setTransition(false)
      setIndex(extendedProducts.length - 2)
    }
  }

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true)
      })
    }
  }, [transition])

  // guard against out-of-bounds index from rapid clicks or intervals
  useEffect(() => {
    if (index >= extendedProducts.length) {
      setTransition(false)
      setIndex(1)
    }
    if (index < 0) {
      setTransition(false)
      setIndex(extendedProducts.length - 2)
    }
  }, [index])

  const nextSlide = () => {
    // if we're at the cloned last slide, jump back to real first
    if (index >= extendedProducts.length - 1) {
      setTransition(false)
      setIndex(1)
    } else {
      setIndex(prev => prev + 1)
    }
  }
  const prevSlide = () => {
    // if we're at the cloned first slide, jump to real last
    if (index <= 0) {
      setTransition(false)
      setIndex(extendedProducts.length - 2)
    } else {
      setIndex(prev => prev - 1)
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        className={`flex ${transition ? "transition-transform duration-500" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedProducts.map((product, i) => (
          <div key={i} className="min-w-full flex justify-center">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-80 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl" loading="lazy"
              />
              <h2 className="text-xl font-semibold mt-4">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-800 text-white px-4 py-2 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-800 text-white px-4 py-2 rounded-full"
      >
        ›
      </button>
    </div>
  )
}
export default Carousel;