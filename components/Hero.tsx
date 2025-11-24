'use client'

import Link from 'next/link'

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-steel-900 via-steel-800 to-primary-900 text-white overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div
            className="mb-6 flex justify-center"
            data-aos="fade-up"
          >
            <img
              src="/images/logo.png"
              alt="GK Pvt Industries Logo"
              className="h-20 md:h-28 w-auto object-contain filter drop-shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            GK Pvt Industries
          </h1>
          <p
            className="text-xl md:text-2xl mb-4 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Your Trusted Partner in Steel, Scrap & Iron
          </p>
          <p
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Serving Ludhiana, Faridkot, Jalandhar & Delhi with excellence in
            raw steel, scrap metal, iron products, truck rentals, loading/unloading,
            and godown services.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link href="#services" className="btn-primary text-lg px-8 py-4">
              Our Services
            </Link>
            <Link href="#contact" className="btn-secondary text-lg px-8 py-4">
              Get Quote
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">100+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">10</div>
            <div className="text-gray-300">Product</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">4</div>
            <div className="text-gray-300">Service Areas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
