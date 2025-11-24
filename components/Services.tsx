'use client'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  image: string | null
  fallbacks?: string[]
  placeholder?: string
  features: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: 'Raw Steel',
    description: 'Premium quality raw steel products for all your industrial needs. We source the finest materials to ensure durability and strength.',
    icon: '🔩',
    image: '/images/steel-products.jpg',
    features: ['High-grade steel', 'Various sizes available', 'Quality assured', 'Bulk orders welcome'],
  },
  {
    id: 2,
    title: 'Scrap Metal',
    description: 'Efficient scrap metal collection and processing services. We handle all types of metal scrap with environmentally friendly practices.',
    icon: '♻️',
    image: '/images/scrap-metal.jpg',
    placeholder: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&auto=format',
    features: ['All metal types', 'Collection service', 'Fair pricing', 'Eco-friendly processing'],
  },
  {
    id: 3,
    title: 'Iron Products',
    description: 'Comprehensive range of iron products and solutions for construction and manufacturing industries.',
    icon: '⚙️',
    image: '/images/bl.jpg',
    features: ['Cast iron', 'Wrought iron', 'Stainless steel', 'Custom solutions'],
  },
  {
    id: 4,
    title: 'Truck Rental',
    description: 'Reliable truck rental services for all your transportation needs. Well-maintained fleet ready for any job.',
    icon: '🚚',
    image: '/images/truck-1.webp',
    fallbacks: ['/images/truck-2.jpg', '/images/truck-3.webp'],
    placeholder: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&auto=format',
    features: ['Multiple truck sizes', '24/7 availability', 'Trained drivers', 'Flexible rental periods'],
  },
  {
    id: 5,
    title: 'Loading & Unloading',
    description: 'Professional loading and unloading services with experienced crew and modern equipment for safe handling.',
    icon: '📦',
    image: '/images/truck-1.webp',
    fallbacks: ['/images/truck-2.jpg', '/images/truck-3.webp'],
    placeholder: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format',
    features: ['Expert team', 'Safety equipment', 'Quick service', 'Damage-free handling'],
  },
  {
    id: 6,
    title: 'Godown Services',
    description: 'Secure storage solutions with our modern godown facilities. Perfect for warehousing your materials and goods.',
    icon: '🏭',
    image: '/images/building.jpg.png',
    fallbacks: ['/images/building.jpg'],
    placeholder: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format',
    features: ['Secure storage', 'Large capacity', '24/7 security', 'Climate controlled options'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Our Services
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Comprehensive solutions for all your steel and metal needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Service Image */}
              {service.image && (
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-steel-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      const fallbacks = service.fallbacks || []
                      const currentSrc = target.src
                      const imagePaths = service.image ? [service.image, ...fallbacks] : fallbacks
                      const currentIndex = imagePaths.findIndex(src => src && currentSrc.includes(src.split('/').pop() || ''))
                      
                      if (currentIndex >= 0 && currentIndex < fallbacks.length && service.image) {
                        // Try next fallback
                        target.src = fallbacks[currentIndex]
                      } else if (service.placeholder) {
                        // Use placeholder image from internet
                        target.src = service.placeholder
                      } else {
                        // All images failed, hide image
                        target.style.display = 'none'
                      }
                    }}
                  />
                </div>
              )}
              
              {!service.image && (
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 text-center">
                  {service.icon}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
