'use client'


const locations = [
  {
    city: 'Ludhiana',
    type: 'Head Office',
    description: 'Our main operational base in Ludhiana',
    icon: '🏢',
  },
  {
    city: 'Faridkot',
    type: 'Service Area',
    description: 'Regular services available',
    icon: '📍',
  },
  {
    city: 'Jalandhar',
    type: 'Service Area',
    description: 'Regular services available',
    icon: '📍',
  },
  {
    city: 'Delhi',
    type: 'Service Area',
    description: 'Regular services available',
    icon: '📍',
  },
]

export default function Locations() {

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Our Locations
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Serving multiple locations with excellence and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div
              key={location.city}
              className="card text-center group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {location.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {location.city}
              </h3>
              <p className="text-primary-600 font-semibold mb-2">{location.type}</p>
              <p className="text-gray-600">{location.description}</p>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primary-600 to-steel-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Based in Ludhiana, Serving Nationwide
            </h3>
            <p className="text-xl mb-6 text-gray-100">
              Our strategic location in Ludhiana allows us to efficiently serve
              clients in Faridkot, Jalandhar, Delhi, and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {locations.map((loc) => (
                <div
                  key={loc.city}
                  className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold"
                >
                  {loc.city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
